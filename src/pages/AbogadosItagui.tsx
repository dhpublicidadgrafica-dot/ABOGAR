import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { SEOHead } from '../components/SEOHead';
import { SITE_CONFIG } from '../data/siteConfig';
import { SERVICES } from '../data/services';
import { HERO_IMAGE_BASE64 } from '../data/heroImageBase64';
import {
  ArrowRight,
  Shield,
  PhoneCall,
  Scale,
  Briefcase,
  HelpCircle,
  Building2,
  MapPin,
  Clock,
  Landmark,
  ChevronDown,
  UserCheck,
  ShieldAlert,
  FileSpreadsheet,
} from 'lucide-react';

interface LocalFAQ {
  pregunta: string;
  respuesta: string;
}

const ITAGUI_FAQS: LocalFAQ[] = [
  {
    pregunta: '¿Qué experiencia tienen en demandas por accidentes laborales y culpa patronal en Itagüí?',
    respuesta:
      'Contamos con amplia trayectoria litigando demandas laborales bajo el Artículo 216 del Código Sustantivo del Trabajo (Culpa Patronal) ante los Juzgados Laborales del Circuito de Itagüí. Representamos a trabajadores que sufrieron accidentes graves o mortales debido a fallas en el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), falta de elementos de protección personal (EPP) o ausencia de mantenimiento de maquinaria industrial en zonas manufactureras del Aburrá Sur, reclamando la indemnización total y ordinaria de perjuicios (daño emergente, lucro cesante y daño moral).',
  },
  {
    pregunta: '¿Ofrecen asesoría jurídica preventiva para empresas e industrias en Itagüí?',
    respuesta:
      'Sí. Diseñamos esquemas de blindaje jurídico laboral corporativo y asesoría permanente (Iguala Jurídica) para empresas, fábricas, bodegas y comercializadoras de Itagüí. Realizamos auditorías laborales de nómina y contratos, elaboración de reglamentos internos de trabajo, estructuración de procesos disciplinarios para despidos con justa causa comprobada y defensa técnica prejudicial ante querellas del Ministerio del Trabajo.',
  },
  {
    pregunta: '¿Realizan trámites comerciales ante la Cámara de Comercio Aburrá Sur en Itagüí?',
    respuesta:
      'Adelantamos trámites corporativos y mercantiles ante la Cámara de Comercio Aburrá Sur: constitución y reformas de Sociedades por Acciones Simplificadas (S.A.S.), registro de libros de actas y accionistas, acuerdos de socios y representación jurídica en audiencias de conciliación y arbitraje comercial para resolver discrepancias contractuales entre proveedores y distribuidores de la región.',
  },
  {
    pregunta: '¿Cómo puedo reclamar una indemnización por despido injustificado en Itagüí?',
    respuesta:
      'Iniciamos con una liquidación técnica comparativa de sus acreencias laborales (cesantías, primas, vacaciones e indemnización legal del Art. 64 del CST). Posteriormente, agotamos la etapa de conciliación extrajudicial o radicamos de inmediato la demanda laboral ordinaria ante el reparto de los Juzgados del Circuito de Itagüí, exigiendo además sanciones moratorias por el no pago oportuno de salarios y prestaciones.',
  },
  {
    pregunta: '¿Puedo consultar mi caso laboral o comercial desde Itagüí sin desplazarme?',
    respuesta:
      'Totalmente. Disponemos de un canal de consulta virtual inmediata por WhatsApp y videollamada de alta definición para clientes y empresarios de Itagüí. Puede remitirnos sus contratos, comprobantes o dictámenes médicos en formato digital para análisis preliminar. Si prefiere atención presencial, programamos su cita en nuestra sede principal metropolitana en Bello o en oficinas concertadas en el sur del Valle de Aburrá.',
  },
];

const ITAGUI_AREAS = [
  {
    slug: 'responsabilidad-del-empleador-culpa-patronal',
    titulo: 'Culpa Patronal (Art. 216 CST) y Accidentes Laborales',
    descripcion:
      'Cobro de indemnización plena y ordinaria de perjuicios contra empleadores por accidentes de trabajo o enfermedades laborales causados por negligencia en seguridad industrial, falta de EPP o maquinaria defectuosa en empresas del sector manufacturero y comercial de Itagüí.',
    icono: ShieldAlert,
  },
  {
    slug: 'asesoria-legal-externa-permanente-iguala',
    titulo: 'Asesoría Jurídica Laboral para Industrias y Empresas',
    descripcion:
      'Acompañamiento legal permanente para empresas de confección, bodegas, metalmecánica y logística en Itagüí: blindaje contractual, auditorías laborales preventivas, procesos disciplinarios, descargos y defensa ante querellas del Ministerio del Trabajo.',
    icono: Building2,
  },
  {
    slug: 'derecho-laboral-individual-y-colectivo',
    titulo: 'Despidos Injustificados, Fueros e Indemnizaciones',
    descripcion:
      'Representación judicial de trabajadores ante los Juzgados Laborales de Itagüí por terminaciones unilaterales sin justa causa, despidos a trabajadores con fuero de salud o estabilidad laboral reforzada, retención de liquidaciones y reliquidación de horas extras.',
    icono: Briefcase,
  },
  {
    slug: 'derecho-comercial',
    titulo: 'Cobro de Cartera Comercial y Títulos Valores',
    descripcion:
      'Recuperación prejudicial y procesos ejecutivos ante juzgados de Itagüí para el cobro efectivo de facturas electrónicas impagas, cheques, pagarés y letras de cambio entre proveedores, comercializadoras y contratistas del Aburrá Sur.',
    icono: FileSpreadsheet,
  },
  {
    slug: 'litigio-civil',
    titulo: 'Litigio Civil y Responsabilidad Contractual',
    descripcion:
      'Representación en controversias civiles y comerciales: incumplimiento de contratos de suministro, compraventa comercial, procesos de restitución de bodegas e inmuebles comerciales en arriendo y demandas por perjuicios patrimoniales.',
    icono: Scale,
  },
  {
    slug: 'acciones-constitucionales-tutela',
    titulo: 'Acciones de Tutela y Derechos Fundamentales',
    descripcion:
      'Interposición inmediata de acciones de tutela ante jueces de Itagüí con solicitud de medida cautelar por vulneración al derecho a la salud (EPS Sura, Nueva EPS, Sanitas), reintegro laboral por fuero de debilidad manifiesta y desacatos.',
    icono: Shield,
  },
];

const ITAGUI_METHODOLOGY = [
  {
    paso: 1,
    titulo: 'Análisis de antecedentes y cálculo preliminar de perjuicios',
    descripcion:
      'Estudiamos el contrato de trabajo, nóminas, reportes de la ARL o documentos comerciales para calcular con precisión aritmética las acreencias adeudadas o el monto de la indemnización de perjuicios.',
  },
  {
    paso: 2,
    titulo: 'Recolección probatoria y auditoría de SG-SST o cartera',
    descripcion:
      'Para casos de culpa patronal, recopilamos informes de investigación del accidente, testimonios de compañeros, protocolos de seguridad omitidos y dictámenes de pérdida de capacidad laboral (PCL). En cartera, blindamos el título ejecutivo.',
  },
  {
    paso: 3,
    titulo: 'Etapa de conciliación prejudicial estratégica',
    descripcion:
      'Buscamos una solución ágil y ventajosa mediante acta formal de conciliación con efectos de cosa juzgada ante centros autorizados del Aburrá Sur o Ministerio del Trabajo, evitando dilaciones cuando existe voluntad de pago.',
  },
  {
    paso: 4,
    titulo: 'Radicación de demanda ante los Juzgados de Itagüí',
    descripcion:
      'Si la contraparte no ofrece una compensación justa, presentamos la demanda judicial ordinaria o ejecutiva ante los Juzgados del Circuito de Itagüí, ejerciendo una litigación técnica y rigurosa en cada audiencia oral.',
  },
  {
    paso: 5,
    titulo: 'Monitoreo procesal continuo y reporte transparente',
    descripcion:
      'Mantenemos al cliente informado de cada auto, fecha de audiencia y decisión judicial, garantizando transparencia absoluta sobre los avances del proceso hasta la efectiva ejecución del pago.',
  },
];

export const AbogadosItagui: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://abogargroup.com/abogados-itagui/#legalservice',
    'name': 'ABOGAR Grupo Jurídico - Abogados en Itagüí',
    'description':
      'Firma de abogados especialistas en Itagüí: demandas por accidentes de trabajo y culpa patronal Art. 216 CST, despidos injustificados, asesoría jurídica a empresas y cobro de cartera comercial en el Aburrá Sur.',
    'url': 'https://abogargroup.com/abogados-itagui/',
    'telephone': '+573158090334',
    'priceRange': '$$',
    'image': 'https://abogargroup.com/images/hero-justicia.webp',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Calle 51 # 50-70, Oficina 200 (Atención directa para Itagüí y Aburrá Sur)',
      'addressLocality': 'Itagüí',
      'addressRegion': 'Antioquia',
      'postalCode': '055410',
      'addressCountry': 'CO',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 6.1738,
      'longitude': -75.6083,
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Itagüí' },
      { '@type': 'AdministrativeArea', 'name': 'Santa María' },
      { '@type': 'AdministrativeArea', 'name': 'Ditaires' },
      { '@type': 'AdministrativeArea', 'name': 'San Fernando' },
      { '@type': 'AdministrativeArea', 'name': 'Autopista Sur Itagüí' },
      { '@type': 'City', 'name': 'Envigado' },
      { '@type': 'City', 'name': 'Sabaneta' },
      { '@type': 'City', 'name': 'Medellín' },
    ],
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '17:00',
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Abogados en Itagüí | Derecho Laboral y Culpa Patronal | ABOGAR"
        description="Abogados especialistas en Itagüí: defensas laborales, culpa patronal por accidentes de trabajo, cobro comercial y contratos. ¡Consulta tu caso hoy!"
        canonicalPath="/abogados-itagui/"
        ogType="website"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Zonas de Cobertura', item: '/contacto/' },
          { name: 'Abogados en Itagüí', item: '/abogados-itagui/' },
        ]}
        faqs={ITAGUI_FAQS.map((faq) => ({
          question: faq.pregunta,
          answer: faq.respuesta,
        }))}
        schema={schemaData}
      />

      {/* 1. Breadcrumbs Bar */}
      <div className="bg-slate-100/80 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Zonas de Cobertura', to: '/contacto/' },
              { label: 'Abogados en Itagüí' },
            ]}
          />
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative py-16 sm:py-20 bg-[#0D1B54] text-white overflow-hidden">
        {/* Background Image with Dark Blue Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE_BASE64}
            alt="Balanza judicial y código sustantivo del trabajo representativo de litigio laboral en Itagüí"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B54]/90 via-[#0D1B54]/75 to-[#0D1B54]/80" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFE19E] border border-[#FFE19E]/30 text-xs uppercase tracking-widest font-semibold mb-4">
              Polo Industrial y Comercial • Itagüí, Antioquia
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Abogados en Itagüí | Especialistas en Derecho Laboral y Culpa Patronal
            </h1>

            {/* Regla de Oro #3: Primer párrafo que resuelve la duda de inmediato en las primeras 3 líneas */}
            <p className="mt-4 text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
              En <strong>ABOGAR Grupo Jurídico</strong> somos abogados especialistas en Itagüí dedicados a demandar la{' '}
              <strong>indemnización plena de perjuicios por accidentes de trabajo y culpa patronal (Art. 216 CST)</strong>,
              defender a trabajadores ante despidos injustificados y blindar a empresas e industrias del Aburrá Sur en
              contratación, nómina y cobro de cartera comercial. <strong>Escríbanos hoy mismo por WhatsApp</strong> para
              evaluar su caso con absoluta confidencialidad y conocer de inmediato sus alternativas legales.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button
                to={SITE_CONFIG.contacto.whatsappLink}
                external
                variant="gold"
                size="lg"
                className="w-full sm:w-auto justify-center"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Consultar por WhatsApp
              </Button>
              <a
                href={`tel:${SITE_CONFIG.contacto.telefonoLimpio}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold rounded bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
              >
                <PhoneCall className="w-4 h-4 text-[#FFE19E]" />
                <span>Llamar: {SITE_CONFIG.contacto.telefono}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content Layout (2 Column: 8 cols main + 4 cols sidebar) */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Tarjeta 1: Alcance de la Práctica en Itagüí */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                  <div className="w-9 h-9 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">
                    Alcance de la Práctica Jurídica en Itagüí y el Aburrá Sur
                  </h2>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                  <p>
                    <strong>Itagüí</strong> es el motor industrial y de manufactura de mayor densidad en Antioquia,
                    con más de 14.000 unidades productivas concentradas en sectores como confección, metalmecánica,
                    químicos, alimentos, logística y grandes bodegas comerciales sobre la Autopista Sur y Santa María.
                    Esta dinámica genera constantes desafíos legales en materia de <strong>seguridad en el trabajo</strong>,
                    relaciones laborales complejas y recuperación de créditos mercantiles.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600">
                    En <strong>ABOGAR Grupo Jurídico</strong> representamos causas litigiosas ante los{' '}
                    <strong>Juzgados Laborales y Civiles del Circuito de Itagüí</strong>, intervenimos en trámites
                    mercantiles y societarios ante la <strong>Cámara de Comercio Aburrá Sur</strong> y actuamos en
                    audiencias de conciliación prejudicial ante inspectores del trabajo y personerías municipales.
                    Brindamos respaldo tanto al trabajador afectado por contingencias laborales como al empresario
                    que busca mitigar contingencias y proteger su patrimonio operativo.
                  </p>
                </div>

                <div className="mt-6 p-4 rounded bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#15297C] shrink-0 mt-0.5" />
                  <span>
                    Todas nuestras actuaciones en Itagüí se rigen por un riguroso análisis de viabilidad técnica y
                    normativa, evitando litigios temerarios y priorizando la indemnización integral y la seguridad
                    patrimonial.
                  </span>
                </div>
              </div>

              {/* Tarjeta 2: 6 Áreas de Práctica específicas para Itagüí */}
              <div>
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
                    Soluciones de Alto Impacto
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    Áreas de Práctica Especializada en Itagüí
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Enfocadas en las controversias laborales, industriales y comerciales más frecuentes en el sur del Valle de Aburrá:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {ITAGUI_AREAS.map((area, idx) => {
                    const IconComp = area.icono;
                    return (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs hover:border-[#15297C]/30 hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2.5 mb-2.5 text-[#15297C]">
                            <div className="w-8 h-8 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center shrink-0">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <h3 className="font-serif text-base font-bold text-slate-900 line-clamp-1">
                              {area.titulo}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                            {area.descripcion}
                          </p>
                        </div>
                        <Link
                          to={`/servicios/${area.slug}/`}
                          className="text-xs text-[#15297C] hover:text-[#0D1B54] font-semibold inline-flex items-center gap-1 mt-2 pt-2 border-t border-slate-100"
                        >
                          <span>Conocer más del servicio</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tarjeta 3: Metodología de Trabajo en 5 Pasos */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
                    Ruta Estratégica
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    Metodología de Trabajo en 5 Etapas
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Garantizamos un estándar riguroso para la defensa de sus derechos o el blindaje de su empresa en Itagüí:
                  </p>
                </div>

                <div className="space-y-6">
                  {ITAGUI_METHODOLOGY.map((paso) => (
                    <div
                      key={paso.paso}
                      className="flex items-start gap-4 pb-5 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#15297C] text-[#FFE19E] font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                        0{paso.paso}
                      </div>
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900">
                          {paso.titulo}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                          {paso.descripcion}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tarjeta 4: Preguntas Frecuentes (Acordeón interactivo con useState) */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                  <div className="w-9 h-9 rounded bg-[#FFE19E]/30 text-[#15297C] flex items-center justify-center">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Preguntas Frecuentes sobre Abogados en Itagüí
                    </h2>
                    <p className="text-xs text-slate-500">
                      Respuestas directas a inquietudes habituales sobre demandas laborales, culpa patronal y litigio comercial.
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-slate-200 border-y border-slate-200">
                  {ITAGUI_FAQS.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className="transition-colors duration-200">
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                          className="w-full py-5 px-2 flex items-center justify-between text-left gap-4 hover:text-[#15297C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15297C] cursor-pointer"
                        >
                          <span className="flex items-start gap-3 font-serif text-base sm:text-lg font-medium text-slate-900 leading-snug">
                            <span className="w-6 h-6 rounded-full bg-[#15297C]/10 text-[#15297C] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{faq.pregunta}</span>
                          </span>
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                              isOpen
                                ? 'bg-[#15297C] text-white border-[#15297C] rotate-180'
                                : 'bg-slate-100 text-slate-500 border-slate-200'
                            }`}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="pb-5 px-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 rounded-b-md">
                            <p>{faq.respuesta}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar (lg:col-span-4) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Tarjeta Azul de Contacto Rápido */}
              <div className="bg-[#15297C] text-white p-7 rounded-lg shadow-md border border-[#15297C]">
                <span className="text-[11px] uppercase font-semibold tracking-widest text-[#FFE19E]">
                  Asesoría en Itagüí
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1 mb-3">
                  ¿Sufrió un accidente o tiene un litigio laboral?
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                  Conversemos sobre su caso hoy mismo. Le entregamos una orientación jurídica clara sobre la
                  viabilidad de su reclamación o el blindaje de su empresa.
                </p>

                <div className="space-y-3">
                  <Button
                    to={SITE_CONFIG.contacto.whatsappLink}
                    external
                    variant="gold"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4 ml-1" />}
                  >
                    Agendar por WhatsApp
                  </Button>

                  <a
                    href={`tel:${SITE_CONFIG.contacto.telefonoLimpio}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#FFE19E]" />
                    <span>Llamar: {SITE_CONFIG.contacto.telefono}</span>
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-white/15 text-[11px] text-slate-300 space-y-1">
                  <p>✓ Asistencia en demandas de culpa patronal</p>
                  <p>✓ Actuaciones ante Juzgados de Itagüí</p>
                  <p>✓ Estricta confidencialidad profesional</p>
                </div>
              </div>

              {/* Tarjeta de Otras Zonas de Cobertura */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-slate-900">
                  <MapPin className="w-4 h-4 text-[#15297C]" />
                  <h4 className="font-serif text-base font-bold text-slate-900">
                    Otras Zonas de Cobertura
                  </h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-800">Sede Principal:</span>
                    <span className="text-[#15297C] font-semibold">Bello (Of. 200)</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-slate-50">
                    <Link
                      to="/abogados-medellin/"
                      className="text-[#15297C] hover:underline font-medium"
                    >
                      Medellín (La Alpujarra)
                    </Link>
                    <span>Tribunales y Juzgados</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-slate-50">
                    <Link
                      to="/abogados-poblado/"
                      className="text-[#15297C] hover:underline font-medium"
                    >
                      El Poblado (Milla de Oro)
                    </Link>
                    <span>Asesoría Corporativa</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-800">Envigado y Sabaneta:</span>
                    <span>Área Metropolitana</span>
                  </li>
                  <li className="flex items-center justify-between py-1">
                    <span className="font-medium text-[#15297C] font-semibold">Itagüí (Actual):</span>
                    <span>Polo Industrial</span>
                  </li>
                </ul>
              </div>

              {/* Tarjeta de Áreas de Práctica Principales */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
                <h4 className="font-serif text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>Servicios Principales</span>
                  <Link to="/servicios/" className="text-xs text-[#15297C] font-semibold hover:underline">
                    Ver todos
                  </Link>
                </h4>
                <ul className="space-y-1.5">
                  {SERVICES.slice(0, 7).map((s) => (
                    <li key={s.id}>
                      <Link
                        to={`/servicios/${s.slug}/`}
                        className="text-xs sm:text-sm text-slate-600 hover:text-[#15297C] hover:bg-slate-50 py-1.5 px-2 rounded block transition-colors line-clamp-1"
                      >
                        • {s.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tarjeta de Horario y Canales */}
              <div className="bg-slate-100/80 p-5 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <Clock className="w-3.5 h-3.5 text-[#15297C]" />
                  <span>Horario de Atención:</span>
                </div>
                <p>{SITE_CONFIG.contacto.horario}</p>
                <p className="font-semibold text-slate-800 pt-1">Atención virtual y presencial:</p>
                <p>Consultas por WhatsApp y audiencias judiciales en el Circuito de Itagüí.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
