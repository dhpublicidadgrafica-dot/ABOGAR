import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  schema?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  schema,
}) => {
  useEffect(() => {
    // 1. Page title
    document.title = title;

    // 2. Set or update meta helper
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) el.setAttribute('name', name);
        } else if (selector.startsWith('meta[property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) el.setAttribute('property', prop);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[name="twitter:title"]', 'content', title);

    // 3. Canonical URL & og:url
    const fullUrl = canonicalPath
      ? `https://abogar.co${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
      : window.location.href;

    setMeta('meta[property="og:url"]', 'content', fullUrl);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // 4. Injected page-specific Schema.org JSON-LD
    let scriptEl = document.getElementById('page-structured-data') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = 'page-structured-data';
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      const pageScript = document.getElementById('page-structured-data');
      if (pageScript) {
        pageScript.remove();
      }
    };
  }, [title, description, canonicalPath, schema]);

  return null;
};

