import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  schema?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  breadcrumbs,
  faqs,
  schema,
}) => {
  useEffect(() => {
    const DOMAIN = 'https://abogargroup.com';

    // 1. Page title
    document.title = title;

    // Helper to set or update meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          const nameMatch = selector.match(/name="([^"]+)"/)?.[1];
          if (nameMatch) el.setAttribute('name', nameMatch);
        } else if (selector.startsWith('meta[property=')) {
          const propMatch = selector.match(/property="([^"]+)"/)?.[1];
          if (propMatch) el.setAttribute('property', propMatch);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // 2. Set descriptions & titles
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[property="og:type"]', 'content', ogType);

    // 3. Canonical URL & og:url
    const cleanPath = canonicalPath
      ? canonicalPath.startsWith('/')
        ? canonicalPath
        : `/${canonicalPath}`
      : window.location.pathname;

    const fullUrl = cleanPath === '/' ? `${DOMAIN}/` : `${DOMAIN}${cleanPath}`;

    setMeta('meta[property="og:url"]', 'content', fullUrl);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Helper to manage JSON-LD script tags
    const setJsonLdScript = (id: string, data: Record<string, any> | null) => {
      let scriptEl = document.getElementById(id) as HTMLScriptElement | null;
      if (data) {
        if (!scriptEl) {
          scriptEl = document.createElement('script');
          scriptEl.id = id;
          scriptEl.type = 'application/ld+json';
          document.head.appendChild(scriptEl);
        }
        scriptEl.textContent = JSON.stringify(data);
      } else if (scriptEl) {
        scriptEl.remove();
      }
    };

    // 4. Injected dynamic BreadcrumbList (#page-breadcrumb-data)
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((bc, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': bc.name,
          'item': bc.item.startsWith('http')
            ? bc.item
            : `${DOMAIN}${bc.item.startsWith('/') ? bc.item : `/${bc.item}`}`,
        })),
      };
      setJsonLdScript('page-breadcrumb-data', breadcrumbSchema);
    } else {
      setJsonLdScript('page-breadcrumb-data', null);
    }

    // 5. Injected dynamic FAQPage (#page-faq-data)
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer,
          },
        })),
      };
      setJsonLdScript('page-faq-data', faqSchema);
    } else {
      setJsonLdScript('page-faq-data', null);
    }

    // 6. Injected page-specific Schema.org JSON-LD (#page-structured-data)
    setJsonLdScript('page-structured-data', schema || null);

    return () => {
      const bScript = document.getElementById('page-breadcrumb-data');
      if (bScript) bScript.remove();
      const fScript = document.getElementById('page-faq-data');
      if (fScript) fScript.remove();
      const sScript = document.getElementById('page-structured-data');
      if (sScript) sScript.remove();
    };
  }, [title, description, canonicalPath, ogType, breadcrumbs, faqs, schema]);

  return null;
};
