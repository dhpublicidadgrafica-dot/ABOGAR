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
      title: 'Abogados en Bello | ABOGAR Grupo Jurídico',
      description: 'Firma de abogados en Bello especializada en derecho laboral, familiar, pensiones y comercial. Consulta hoy con nuestros especialistas.',
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
    // 4.1. Landing Local SEO Medellín
    {
      path: '/abogados-medellin',
      outFile: 'abogados-medellin/index.html',
      title: 'Abogados en Medellín | Litigio y Asesoría Legal | ABOGAR',
      description: 'Firma de abogados en Medellín especializada en litigio ante La Alpujarra, derecho laboral, comercial, familia y penal. Consulta hoy tu caso con expertos.',
      canonical: `${DOMAIN}/abogados-medellin/`,
      ogType: 'website',
      ogImage: `${DOMAIN}/images/hero-justicia.jpg`,
      breadcrumbs: [
        { name: 'Inicio', item: `${DOMAIN}/` },
        { name: 'Zonas de Cobertura', item: `${DOMAIN}/contacto/` },
        { name: 'Abogados en Medellín', item: `${DOMAIN}/abogados-medellin/` }
      ],
      faqs: [
        {
          pregunta: '¿Dónde atienden consultas presenciales y virtuales para clientes de Medellín?',
          respuesta: 'Brindamos atención personalizada para Medellín mediante dos modalidades: presencial en nuestra sede principal metropolitana en Bello (Calle 51 # 50-70, a escasos minutos de la estación Bello del Metro y conectada con todo el Valle de Aburrá) y reuniones concertadas en centros empresariales del corredor de La Alpujarra o El Poblado. Asimismo, disponemos de plataforma de asesoría jurídica virtual de alta resolución para clientes que requieren atención inmediata desde cualquier comuna de Medellín.'
        },
        {
          pregunta: '¿Representan litigios activos en el Palacio de Justicia de La Alpujarra?',
          respuesta: 'Sí. Nuestro equipo de abogados litigantes cuenta con amplia presencia en el Palacio de Justicia de Medellín "José Félix de Restrepo" (La Alpujarra), litigando diariamente ante los Juzgados Civiles, Laborales, de Familia, Administrativos y Penales del Circuito de Medellín, así como ante el Tribunal Superior del Distrito Judicial de Medellín y el Tribunal Administrativo de Antioquia.'
        },
        {
          pregunta: '¿Cómo gestionan trámites laborales ante el Ministerio del Trabajo en Medellín?',
          respuesta: 'Acompañamos y apoderamos a empleadores y trabajadores en audiencias de conciliación prejudicial, descargos, quejas por acoso laboral e investigaciones administrativas ante la Dirección Territorial de Antioquia del Ministerio del Trabajo, ubicada en la Calle 56 (sector Villanueva/Centro de Medellín), asegurando actas con plenos efectos de cosa juzgada.'
        },
        {
          pregunta: '¿Cuánto cuesta una consulta jurídica preliminar para un caso en Medellín?',
          respuesta: 'Nuestras tarifas se fundamentan en criterios de proporcionalidad, transparencia y las pautas del Colegio de Abogados de Colombia. Ofrecemos un primer acercamiento diagnóstico para analizar los antecedentes del caso y emitir una propuesta formal de honorarios (fijos, por etapas o bajo modalidad de cuota litis según la naturaleza del asunto), sin cobros ocultos y con pasarela de pago digital certificada.'
        },
        {
          pregunta: '¿Atienden asuntos urgentes como audiencias de garantías o tutelas de salud?',
          respuesta: 'Sí. Disponemos de un protocolo de atención prioritaria para audiencias concentradas penales (legalización de captura, imputación y medida de aseguramiento) en los centros de servicios judiciales de Medellín, así como para la radicación inmediata de acciones de tutela con solicitud de medida cautelar provisional ante vulneraciones graves al derecho a la salud o debido proceso.'
        }
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        '@id': `${DOMAIN}/abogados-medellin/#legalservice`,
        'name': 'ABOGAR Grupo Jurídico - Abogados en Medellín',
        'description': 'Firma jurídica con representación legal, litigio estratégico y asesoría empresarial en el Distrito Especial de Medellín y Área Metropolitana del Valle de Aburrá.',
        'url': `${DOMAIN}/abogados-medellin/`,
        'telephone': '+573158090334',
        'priceRange': '$$',
        'image': `${DOMAIN}/images/hero-justicia.jpg`,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Calle 51 # 50-70, Oficina 200 (Cobertura directa en Medellín y La Alpujarra)',
          'addressLocality': 'Medellín',
          'addressRegion': 'Antioquia',
          'postalCode': '050015',
          'addressCountry': 'CO'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 6.2442,
          'longitude': -75.5812
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Medellín' },
          { '@type': 'AdministrativeArea', 'name': 'La Alpujarra' },
          { '@type': 'AdministrativeArea', 'name': 'El Poblado' },
          { '@type': 'AdministrativeArea', 'name': 'Laureles' },
          { '@type': 'AdministrativeArea', 'name': 'Bello' },
          { '@type': 'AdministrativeArea', 'name': 'Envigado' },
          { '@type': 'AdministrativeArea', 'name': 'Itagüí' }
        ]
      }
    },
    // 4.2. Landing Local SEO Itagüí
    {
      path: '/abogados-itagui',
      outFile: 'abogados-itagui/index.html',
      title: 'Abogados en Itagüí | Derecho Laboral y Culpa Patronal | ABOGAR',
      description: 'Abogados especialistas en Itagüí: defensas laborales, culpa patronal por accidentes de trabajo, cobro comercial y contratos. ¡Consulta tu caso hoy!',
      canonical: `${DOMAIN}/abogados-itagui/`,
      ogType: 'website',
      ogImage: `${DOMAIN}/images/hero-justicia.jpg`,
      breadcrumbs: [
        { name: 'Inicio', item: `${DOMAIN}/` },
        { name: 'Zonas de Cobertura', item: `${DOMAIN}/contacto/` },
        { name: 'Abogados en Itagüí', item: `${DOMAIN}/abogados-itagui/` }
      ],
      faqs: [
        {
          pregunta: '¿Qué experiencia tienen en demandas por accidentes laborales y culpa patronal en Itagüí?',
          respuesta: 'Contamos con amplia trayectoria litigando demandas laborales bajo el Artículo 216 del Código Sustantivo del Trabajo (Culpa Patronal) ante los Juzgados Laborales del Circuito de Itagüí. Representamos a trabajadores que sufrieron accidentes graves o mortales debido a fallas en el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), falta de elementos de protección personal (EPP) o ausencia de mantenimiento de maquinaria industrial en zonas manufactureras del Aburrá Sur, reclamando la indemnización total y ordinaria de perjuicios (daño emergente, lucro cesante y daño moral).'
        },
        {
          pregunta: '¿Ofrecen asesoría jurídica preventiva para empresas e industrias en Itagüí?',
          respuesta: 'Sí. Diseñamos esquemas de blindaje jurídico laboral corporativo y asesoría permanente (Iguala Jurídica) para empresas, fábricas, bodegas y comercializadoras de Itagüí. Realizamos auditorías laborales de nómina y contratos, elaboración de reglamentos internos de trabajo, estructuración de procesos disciplinarios para despidos con justa causa comprobada y defensa técnica prejudicial ante querellas del Ministerio del Trabajo.'
        },
        {
          pregunta: '¿Realizan trámites comerciales ante la Cámara de Comercio Aburrá Sur en Itagüí?',
          respuesta: 'Adelantamos trámites corporativos y mercantiles ante la Cámara de Comercio Aburrá Sur: constitución y reformas de Sociedades por Acciones Simplificadas (S.A.S.), registro de libros de actas y accionistas, acuerdos de socios y representación jurídica en audiencias de conciliación y arbitraje comercial para resolver discrepancias contractuales entre proveedores y distribuidores de la región.'
        },
        {
          pregunta: '¿Cómo puedo reclamar una indemnización por despido injustificado en Itagüí?',
          respuesta: 'Iniciamos con una liquidación técnica comparativa de sus acreencias laborales (cesantías, primas, vacaciones e indemnización legal del Art. 64 del CST). Posteriormente, agotamos la etapa de conciliación extrajudicial o radicamos de inmediato la demanda laboral ordinaria ante el reparto de los Juzgados del Circuito de Itagüí, exigiendo además sanciones moratorias por el no pago oportuno de salarios y prestaciones.'
        },
        {
          pregunta: '¿Puedo consultar mi caso laboral o comercial desde Itagüí sin desplazarme?',
          respuesta: 'Totalmente. Disponemos de un canal de consulta virtual inmediata por WhatsApp y videollamada de alta definición para clientes y empresarios de Itagüí. Puede remitirnos sus contratos, comprobantes o dictámenes médicos en formato digital para análisis preliminar. Si prefiere atención presencial, programamos su cita en nuestra sede principal metropolitana en Bello o en oficinas concertadas en el sur del Valle de Aburrá.'
        }
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        '@id': `${DOMAIN}/abogados-itagui/#legalservice`,
        'name': 'ABOGAR Grupo Jurídico - Abogados en Itagüí',
        'description': 'Firma de abogados especialistas en Itagüí: demandas por accidentes de trabajo y culpa patronal Art. 216 CST, despidos injustificados, asesoría jurídica a empresas y cobro de cartera comercial en el Aburrá Sur.',
        'url': `${DOMAIN}/abogados-itagui/`,
        'telephone': '+573158090334',
        'priceRange': '$$',
        'image': `${DOMAIN}/images/hero-justicia.jpg`,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Calle 51 # 50-70, Oficina 200 (Atención directa para Itagüí y Aburrá Sur)',
          'addressLocality': 'Itagüí',
          'addressRegion': 'Antioquia',
          'postalCode': '055410',
          'addressCountry': 'CO'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 6.1738,
          'longitude': -75.6083
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Itagüí' },
          { '@type': 'AdministrativeArea', 'name': 'Santa María' },
          { '@type': 'AdministrativeArea', 'name': 'Ditaires' },
          { '@type': 'AdministrativeArea', 'name': 'San Fernando' },
          { '@type': 'AdministrativeArea', 'name': 'Autopista Sur Itagüí' },
          { '@type': 'City', 'name': 'Envigado' },
          { '@type': 'City', 'name': 'Sabaneta' },
          { '@type': 'City', 'name': 'Medellín' }
        ]
      }
    },
    // 4.3. Landing Local SEO El Poblado
    {
      path: '/abogados-poblado',
      outFile: 'abogados-poblado/index.html',
      title: 'Abogados en El Poblado | Corporativo, Visas y Familia | ABOGAR',
      description: 'Servicios jurídicos estratégicos en El Poblado, Medellín: derecho corporativo, visas, litigio civil y familia. Asesoría de alto nivel. ¡Agenda tu cita!',
      canonical: `${DOMAIN}/abogados-poblado/`,
      ogType: 'website',
      ogImage: `${DOMAIN}/images/hero-justicia.jpg`,
      breadcrumbs: [
        { name: 'Inicio', item: `${DOMAIN}/` },
        { name: 'Zonas de Cobertura', item: `${DOMAIN}/contacto/` },
        { name: 'Abogados en El Poblado', item: `${DOMAIN}/abogados-poblado/` }
      ],
      faqs: [
        {
          pregunta: '¿Qué servicios ofrecen para extranjeros y nómadas digitales en El Poblado?',
          respuesta: 'Asesoramos de manera integral en la obtención de visas colombianas ante la Cancillería (Visa V Nómada Digital, Visa M Inversionista en finca raíz o empresas, Visa M Cónyuge o Compañero Permanente, y Visa R de Residente). Gestionamos la Cédula de Extranjería ante Migración Colombia, apertura de cuentas bancarias corporativas, registro de inversión extranjera directa ante el Banco de la República (formulario oficial) y asesoría tributaria para nómadas y residentes fiscales en Medellín.'
        },
        {
          pregunta: '¿Brindan asesoría corporativa y creación de sociedades en El Poblado?',
          respuesta: 'Sí. Estructuramos la constitución formal de Sociedades por Acciones Simplificadas (S.A.S.) ante la Cámara de Comercio de Medellín para Antioquia (sede El Poblado), redactamos acuerdos de accionistas con cláusulas de protección a minoritarios, preparamos contratos comerciales bilingües, convenios de confidencialidad (NDA), términos y condiciones para plataformas tecnológicas y estructuración de gobierno corporativo para startups e inversionistas de la Milla de Oro.'
        },
        {
          pregunta: '¿Cómo se coordinan las citas privadas para clientes en la zona de El Poblado?',
          respuesta: 'Para preservar la máxima confidencialidad y optimizar el tiempo de directivos y empresarios, coordinamos sesiones presenciales en salas de juntas y centros de negocios del corredor de la Milla de Oro, Castropol o Provenza. De igual forma, contamos con canales de atención jurídica virtual encriptada y citas en nuestra sede principal metropolitana en Bello (Calle 51 # 50-70).'
        },
        {
          pregunta: '¿Atienden procesos de derecho de familia y divorcios de alto patrimonio?',
          respuesta: 'Especialistas en la gestión discreta de patrimonios familiares complejos: elaboración de capitulaciones matrimoniales y patrimoniales previas a la unión, liquidación concertada de sociedades conyugales ante notaría, divorcios de común acuerdo o contenciosos, partición de herencias con activos inmuebles y sociedades mercantiles, y planeación sucesoral fiduciaria para proteger el legado familiar.'
        },
        {
          pregunta: '¿El servicio para trámites de visas y negocios puede gestionarse en inglés?',
          respuesta: 'Sí. Ofrecemos acompañamiento legal bilingüe (español e inglés) para inversionistas, expatriados y ciudadanos extranjeros en El Poblado. Revisamos y redactamos contratos en doble columna, preparamos traducciones oficiales certificadas y guiamos al cliente paso a paso durante sus entrevistas consulares o diligencias notariales en Colombia.'
        }
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        '@id': `${DOMAIN}/abogados-poblado/#legalservice`,
        'name': 'ABOGAR Grupo Jurídico - Abogados en El Poblado',
        'description': 'Firma de abogados de alto nivel en El Poblado, Medellín: asesoría corporativa, visas colombianas para extranjeros y nómadas digitales, derecho de familia de alto patrimonio y litigio estratégico en la Milla de Oro.',
        'url': `${DOMAIN}/abogados-poblado/`,
        'telephone': '+573158090334',
        'priceRange': '$$$',
        'image': `${DOMAIN}/images/hero-justicia.jpg`,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Cra. 43A (Milla de Oro) y Calle 51 # 50-70 (Atención ejecutiva en El Poblado y Valle de Aburrá)',
          'addressLocality': 'Medellín',
          'addressRegion': 'Antioquia',
          'postalCode': '050021',
          'addressCountry': 'CO'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 6.2088,
          'longitude': -75.5684
        },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'El Poblado' },
          { '@type': 'AdministrativeArea', 'name': 'Milla de Oro' },
          { '@type': 'AdministrativeArea', 'name': 'Provenza' },
          { '@type': 'AdministrativeArea', 'name': 'Castropol' },
          { '@type': 'AdministrativeArea', 'name': 'Las Palmas' },
          { '@type': 'City', 'name': 'Medellín' },
          { '@type': 'City', 'name': 'Envigado' }
        ]
      }
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
