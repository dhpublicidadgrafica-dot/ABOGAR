import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppContent } from '../src/App';
import { SERVICES } from '../src/data/services';
import { SITE_CONFIG } from '../src/data/siteConfig';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const DOMAIN = 'https://abogargroup.com';

interface PageMeta {
  path: string; // e.g. "/servicios/derecho-laboral-individual-y-colectivo"
  outFile: string; // e.g. "servicios/derecho-laboral-individual-y-colectivo/index.html"
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noIndex?: boolean;
  breadcrumbs?: { name: string; item: string }[];
  faqs?: { pregunta: string; respuesta: string }[];
  schema?: Record<string, any>;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function generatePagesList(): PageMeta[] {
  const pages: PageMeta[] = [
    // 1. Inicio
    {
      path: '/',
      outFile: 'index.html',
      title: 'Abogados en Medellín y Bello | ABOGAR Grupo Jurídico',
      description: 'Firma de abogados en Medellín y Bello especializada en derecho laboral, familiar, pensiones y comercial. Consulta hoy con nuestros especialistas.',
      canonical: `${DOMAIN}/`,
      ogType: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: `${DOMAIN}/` }
      ],
    },
    // 2. Nosotros
    {
      path: '/nosotros',
      outFile: 'nosotros/index.html',
      title: 'Nosotros | ABOGAR Grupo Jurídico - Firma Legal en Colombia',
      description: 'Conozca la trayectoria, valores y equipo de abogados especialistas de ABOGAR Grupo Jurídico. Más de 15 años brindando seguridad jurídica y litigio ético.',
      canonical: `${DOMAIN}/nosotros/`,
      ogType: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: `${DOMAIN}/` },
        { name: 'Nosotros', item: `${DOMAIN}/nosotros/` }
      ],
    },
    // 3. Directorio de Servicios
    {
      path: '/servicios',
      outFile: 'servicios/index.html',
      title: 'Áreas de Práctica y Servicios Jurídicos | ABOGAR Grupo Jurídico',
      description: 'Catálogo de 12 especialidades jurídicas: Laboral, Familia, Migratorio, Pensiones, Comercial, Civil, Tutelas, Seguros y más. Asesoría legal en Colombia.',
      canonical: `${DOMAIN}/servicios/`,
      ogType: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: `${DOMAIN}/` },
        { name: 'Servicios Jurídicos', item: `${DOMAIN}/servicios/` }
      ],
    },
    // 4. Contacto
    {
      path: '/contacto',
      outFile: 'contacto/index.html',
      title: 'Contacto y Consultas Legales | ABOGAR Grupo Jurídico',
      description: 'Agende su consulta jurídica presencial en Bello o virtual en toda Colombia. Atención por WhatsApp +57 315 809 0334 y formulario en línea.',
      canonical: `${DOMAIN}/contacto/`,
      ogType: 'website',
      breadcrumbs: [
        { name: 'Inicio', item: `${DOMAIN}/` },
        { name: 'Contacto', item: `${DOMAIN}/contacto/` }
      ],
    },
  ];

  // 5. Los 12 Servicios Individuales
  for (const s of SERVICES) {
    pages.push({
      path: `/servicios/${s.slug}`,
      outFile: `servicios/${s.slug}/index.html`,
      title: s.seoTitle || `${s.nombre} | ABOGAR Grupo Jurídico`,
      description: s.seoDescription || s.descripcionCorta,
      canonical: `${DOMAIN}/servicios/${s.slug}/`,
      ogType: 'article',
      ogImage: s.imagen || `${DOMAIN}/images/logo-original.png`,
      breadcrumbs: [
        { name: 'Inicio', item: `${DOMAIN}/` },
        { name: 'Servicios Jurídicos', item: `${DOMAIN}/servicios/` },
        { name: s.nombre, item: `${DOMAIN}/servicios/${s.slug}/` }
      ],
      faqs: s.preguntasFrecuentes || [],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': s.nombre,
        'description': s.descripcionCorta,
        'url': `${DOMAIN}/servicios/${s.slug}/`,
        'provider': {
          '@id': `${DOMAIN}/#organization`
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Bello' },
          { '@type': 'City', 'name': 'Medellín' },
          { '@type': 'Country', 'name': 'Colombia' }
        ],
        'image': s.imagen || `${DOMAIN}/images/logo-original.png`
      }
    });
  }

  // 6. Páginas Legales (No-Index)
  pages.push({
    path: '/legales',
    outFile: 'legales/index.html',
    title: 'Políticas Legales y Habeas Data | ABOGAR Grupo Jurídico',
    description: 'Marco regulatorio, política de tratamiento de datos personales y términos generales de uso de ABOGAR GRUPO JURÍDICO S.A.S.',
    canonical: `${DOMAIN}/legales/`,
    noIndex: true,
  });

  pages.push({
    path: '/politica-de-privacidad',
    outFile: 'politica-de-privacidad/index.html',
    title: 'Política de Privacidad y Tratamiento de Datos | ABOGAR',
    description: 'Política institucional de privacidad y protección de datos personales de ABOGAR GRUPO JURÍDICO S.A.S.',
    canonical: `${DOMAIN}/politica-de-privacidad/`,
    noIndex: true,
  });

  pages.push({
    path: '/terminos-y-condiciones',
    outFile: 'terminos-y-condiciones/index.html',
    title: 'Términos y Condiciones Generales de Uso | ABOGAR',
    description: 'Términos y condiciones de uso del portal web oficial de ABOGAR GRUPO JURÍDICO S.A.S.',
    canonical: `${DOMAIN}/terminos-y-condiciones/`,
    noIndex: true,
  });

  // 7. Página 404 personalizada
  pages.push({
    path: '/404',
    outFile: '404.html',
    title: 'Página no encontrada (404) | ABOGAR Grupo Jurídico',
    description: 'La página solicitada no se encuentra disponible en nuestro portal.',
    canonical: `${DOMAIN}/404/`,
    noIndex: true,
  });

  return pages;
}

function processHtml(template: string, page: PageMeta): string {
  let html = template;

  // 1. Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);

  // 2. Meta description
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(page.description)}" />`
  );

  // Strip meta keywords completely (Google ignores it and modern SEO avoids it)
  html = html.replace(/<meta\s+name=["']keywords["']\s+content=["'][\s\S]*?["']\s*\/?>\n?/i, '');

  // 3. Canonical URL
  html = html.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
    `<link rel="canonical" href="${page.canonical}" />`
  );

  // 4. Meta robots (index vs noindex)
  if (page.noIndex) {
    html = html.replace(
      /<meta\s+name=["']robots["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="robots" content="noindex, nofollow, noarchive" />`
    );
  } else {
    html = html.replace(
      /<meta\s+name=["']robots["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`
    );
  }

  // 5. OpenGraph Tags
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:url" content="${page.canonical}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:type["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:type" content="${page.ogType || 'website'}" />`
  );
  if (page.ogImage) {
    html = html.replace(
      /<meta\s+property=["']og:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:image" content="${page.ogImage}" />`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:image" content="${page.ogImage}" />`
    );
  }

  // 6. Twitter Card Tags
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`
  );

  // 7. Inject Page-Specific Schema.org Structured Data before </head>
  let extraScripts = '';

  if (page.breadcrumbs && page.breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': page.breadcrumbs.map((bc, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': bc.name,
        'item': bc.item,
      })),
    };
    extraScripts += `\n    <script id="page-breadcrumb-data" type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`;
  }

  if (page.faqs && page.faqs.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': page.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.pregunta,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.respuesta,
        },
      })),
    };
    extraScripts += `\n    <script id="page-faq-data" type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;
  }

  if (page.schema) {
    extraScripts += `\n    <script id="page-structured-data" type="application/ld+json">${JSON.stringify(page.schema)}</script>`;
  }

  if (extraScripts) {
    html = html.replace('</head>', `${extraScripts}\n  </head>`);
  }

  // 8. Render full React component tree into #root
  try {
    const appHtml = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: [page.path] },
        React.createElement(AppContent)
      )
    );
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  } catch (err) {
    console.warn(`[prerender] Warning: could not renderToString for ${page.path}:`, err);
  }

  return html;
}

export function prerender() {
  const templatePath = path.resolve(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error(`[prerender] Error: Template file not found at ${templatePath}. Run vite build first.`);
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const pages = generatePagesList();

  console.log(`[prerender] Generando ${pages.length} páginas estáticas con metadatos y canónicas únicas...`);

  let count = 0;
  for (const page of pages) {
    const targetFile = path.resolve(DIST_DIR, page.outFile);
    const targetDir = path.dirname(targetFile);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const processedHtml = processHtml(template, page);
    fs.writeFileSync(targetFile, processedHtml, 'utf-8');
    count++;
    console.log(`  ✓ [${page.noIndex ? 'NOINDEX' : 'CANONICAL'}] ${page.path} -> ${page.outFile} (${page.canonical})`);
  }

  console.log(`[prerender] Exito: ${count} páginas pre-renderizadas creadas correctamente en ${DIST_DIR}.`);
}

// Execute directly if run as a script
prerender();
