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
  Plus,
  Minus,
  Globe,
  FileCheck2,
  UserCheck,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface LocalFAQ {
  pregunta: string;
  respuesta: string;
}

const POBLADO_FAQS: LocalFAQ[] = [
  {
    pregunta: '¿Qué servicios ofrecen para extranjeros y nómadas digitales en El Poblado?',
    respuesta:
      'Asesoramos de manera integral en la obtención de visas colombianas ante la Cancillería (Visa V Nómada Digital, Visa M Inversionista en finca raíz o empresas, Visa M Cónyuge o Compañero Permanente, y Visa R de Residente). Gestionamos la Cédula de Extranjería ante Migración Colombia, apertura de cuentas bancarias corporativas, registro de inversión extranjera directa ante el Banco de la República (formulario oficial) y asesoría tributaria para nómadas y residentes fiscales en Medellín.',
  },
  {
    pregunta: '¿Brindan asesoría corporativa y creación de sociedades en El Poblado?',
    respuesta:
      'Sí. Estructuramos la constitución formal de Sociedades por Acciones Simplificadas (S.A.S.) ante la Cámara de Comercio de Medellín para Antioquia (sede El Poblado), redactamos acuerdos de accionistas con cláusulas de protección a minoritarios, preparamos contratos comerciales bilingües, convenios de confidencialidad (NDA), términos y condiciones para plataformas tecnológicas y estructuración de gobierno corporativo para startups e inversionistas de la Milla de Oro.',
  },
  {
    pregunta: '¿Cómo se coordinan las citas privadas para clientes en la zona de El Poblado?',
    respuesta:
      'Para preservar la máxima confidencialidad y optimizar el tiempo de directivos y empresarios, coordinamos sesiones presenciales en salas de juntas y centros de negocios del corredor de la Milla de Oro, Castropol o Provenza. De igual forma, contamos con canales de atención jurídica virtual encriptada y citas en nuestra sede principal metropolitana en Bello (Calle 51 # 50-70).',
  },
  {
    pregunta: '¿Atienden procesos de derecho de familia y divorcios de alto patrimonio?',
    respuesta:
      'Especialistas en la gestión discreta de patrimonios familiares complejos: elaboración de capitulaciones matrimoniales y patrimoniales previas a la unión, liquidación concertada de sociedades conyugales ante notaría, divorcios de común acuerdo o contenciosos, partición de herencias con activos inmuebles y sociedades mercantiles, y planeación sucesoral fiduciaria para proteger el legado familiar.',
  },
  {
    pregunta: '¿El servicio para trámites de visas y negocios puede gestionarse en inglés?',
    respuesta:
      'Sí. Ofrecemos acompañamiento legal bilingüe (español e inglés) para inversionistas, expatriados y ciudadanos extranjeros en El Poblado. Revisamos y redactamos contratos en doble columna, preparamos traducciones oficiales certificadas y guiamos al cliente paso a paso durante sus entrevistas consulares o diligencias notariales en Colombia.',
  },
];

const POBLADO_AREAS = [
  {
    slug: 'tramites-de-visas-colombianas',
    titulo: 'Visas Colombianas, Extranjería y Nómadas Digitales',
    descripcion:
      'Radicación y seguimiento ante la Cancillería de visas de Nómada Digital, Inversionista, Cónyuge y Residencia. Trámites de Cédula de Extranjería, salvoconductos, convalidación de títulos y registro cambiario de divisas ante el Banco de la República.',
    icono: Globe,
  },
  {
    slug: 'derecho-comercial',
    titulo: 'Creación y Blindaje de Empresas S.A.S.',
    descripcion:
      'Constitución societaria ágil ante Cámara de Comercio sede Poblado para inversionistas nacionales y extranjeros. Acuerdos de socios, pactos de sindicación de acciones, aumentos de capital, estatutos a la medida y gobierno corporativo preventivo.',
    icono: Building2,
  },
  {
    slug: 'derecho-de-familia',
    titulo: 'Familia de Alto Patrimonio y Capitulaciones',
    descripcion:
      'Diseño e instrumentación de capitulaciones matrimoniales, acuerdos prenupciales, divorcios por mutuo acuerdo con liquidación de sociedades conyugales de alto valor y planeación sucesoral para blindar el patrimonio de familias empresarias.',
    icono: UserCheck,
  },
  {
    slug: 'asesoria-legal-externa-permanente-iguala',
    titulo: 'Contratos Comerciales Internacionales y M&A',
    descripcion:
      'Redacción y negociación de contratos mercantiles de distribución, franquicias, prestación de servicios profesionales, acuerdos de confidencialidad (NDA), asesoría en fusiones, adquisiciones y due diligence legal para empresas de Medellín.',
    icono: FileCheck2,
  },
  {
    slug: 'litigio-civil',
    titulo: 'Litigio Civil Estratégico y Responsabilidad',
    descripcion:
      'Defensa técnica en litigios civiles complejos ante tribunales de arbitramento y juzgados: controversias contractuales de alto valor, responsabilidad civil médica o corporativa, garantías fiduciarias y restitución de inmuebles comerciales en arriendo.',
    icono: Scale,
  },
  {
    slug: 'nacionalidad-y-registro-civil',
    titulo: 'Protección de Marcas y Propiedad Intelectual',
    descripcion:
      'Registro de marcas comerciales, lemas, nombres comerciales y patentes ante la Superintendencia de Industria y Comercio (SIC). Defensa ante oposiciones de terceros, cesión de derechos de autor y contratos de licenciamiento de software.',
    icono: ShieldCheck,
  },
];

const POBLADO_METHODOLOGY = [
  {
    paso: 1,
    titulo: 'Diagnóstico jurídico confidencial y evaluación de riesgos',
    descripcion:
      'Analizamos bajo estricto secreto profesional la estructura legal, documental o migratoria de su asunto para determinar la viabilidad jurídica y las mejores alternativas de optimización fiscal y patrimonial.',
  },
  {
    paso: 2,
    titulo: 'Diseño del plan legal estratégico a la medida',
    descripcion:
      'Elaboramos una hoja de ruta con cronograma claro, identificando los requisitos probatorios, costos gubernamentales exactos y la estrategia contractual o procesal más eficiente.',
  },
  {
    paso: 3,
    titulo: 'Estructuración documental y negociación extrajudicial',
    descripcion:
      'Redactamos los contratos, estatutos, acuerdos prenupciales o expedientes de visa con máxima rigurosidad técnica, priorizando la resolución ágil y concertada mediante acuerdos privados de alto nivel.',
  },
  {
    paso: 4,
    titulo: 'Radicación formal y gestión ante autoridades competentes',
    descripcion:
      'Representación formal ante la Cancillería, Migración Colombia, Cámara de Comercio sede Poblado, Notarías del Círculo de Medellín o despachos judiciales, asegurando diligencia en cada etapa.',
  },
  {
    paso: 5,
    titulo: 'Acompañamiento continuo y asesoría ejecutiva permanente',
    descripcion:
      'Entregamos los títulos, visas o resoluciones con reporte de cumplimiento, manteniéndonos como aliados jurídicos de confianza para futuras operaciones comerciales o familiares en Colombia.',
  },
];

export const AbogadosPoblado: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://abogargroup.com/abogados-poblado/#legalservice',
    'name': 'ABOGAR Grupo Jurídico - Abogados en El Poblado',
    'description':
      'Firma de abogados de alto nivel en El Poblado, Medellín: asesoría corporativa, visas colombianas para extranjeros y nómadas digitales, derecho de familia de alto patrimonio y litigio estratégico en la Milla de Oro.',
    'url': 'https://abogargroup.com/abogados-poblado/',
    'telephone': '+573158090334',
    'priceRange': '$$$',
    'image': 'https://abogargroup.com/images/hero-justicia.webp',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Cra. 43A (Milla de Oro) y Calle 51 # 50-70 (Atención ejecutiva en El Poblado y Valle de Aburrá)',
      'addressLocality': 'Medellín',
      'addressRegion': 'Antioquia',
      'postalCode': '050021',
      'addressCountry': 'CO',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 6.2088,
      'longitude': -75.5684,
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'El Poblado' },
      { '@type': 'AdministrativeArea', 'name': 'Milla de Oro' },
      { '@type': 'AdministrativeArea', 'name': 'Provenza' },
      { '@type': 'AdministrativeArea', 'name': 'Castropol' },
      { '@type': 'AdministrativeArea', 'name': 'Las Palmas' },
      { '@type': 'City', 'name': 'Medellín' },
      { '@type': 'City', 'name': 'Envigado' },
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
        title="Abogados en El Poblado | Corporativo, Visas y Familia | ABOGAR"
        description="Servicios jurídicos estratégicos en El Poblado, Medellín: derecho corporativo, visas, litigio civil y familia. Asesoría de alto nivel. ¡Agenda tu cita!"
        canonicalPath="/abogados-poblado/"
        ogType="website"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Zonas de Cobertura', item: '/contacto/' },
          { name: 'Abogados en El Poblado', item: '/abogados-poblado/' },
        ]}
        faqs={POBLADO_FAQS.map((faq) => ({
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
              { label: 'Abogados en El Poblado' },
            ]}
          />
        </div>
      </div>

      {/* 2. Hero Banner */}
      <section className="relative py-16 sm:py-20 bg-[#0D1B54] text-white overflow-hidden">
        {/* Background Image with Dark Blue Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE_BASE64}
            alt="Milla de Oro y balanza de justicia representativa de asesoría corporativa y legal en El Poblado Medellín"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B54]/90 via-[#0D1B54]/75 to-[#0D1B54]/80" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFE19E] border border-[#FFE19E]/30 text-xs uppercase tracking-widest font-semibold mb-4">
              Sector Financiero y Empresarial • El Poblado, Medellín
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Abogados en El Poblado | Asesoría Legal Corporativa, Visas y Familia
            </h1>

            {/* Regla de Oro #3: Primer párrafo que resuelve la duda de inmediato en las primeras 3 líneas */}
            <p className="mt-4 text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
              En <strong>ABOGAR Grupo Jurídico</strong> somos una firma especializada en soluciones legales de alto nivel en El Poblado:
              brindamos <strong>creación y blindaje de empresas S.A.S. para inversionistas locales y extranjeros</strong>, tramitación
              integral de <strong>visas colombianas para nómadas digitales y cónyuges</strong>, y gestión confidencial en{' '}
              <strong>capitulaciones matrimoniales, divorcios y sucesiones de alto patrimonio</strong>. <strong>Escríbanos hoy mismo
              por WhatsApp</strong> para coordinar una consulta ejecutiva con reserva profesional absoluta.
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
                Agendar Consulta Privada
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
              {/* Tarjeta 1: Alcance de la Práctica en El Poblado y Milla de Oro */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                  <div className="w-9 h-9 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">
                    Alcance de la Práctica en El Poblado y la Milla de Oro
                  </h2>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                  <p>
                    <strong>El Poblado</strong> representa el epicentro económico, de inversión internacional y estilo de vida
                    más dinámico de Medellín. Desde el eje corporativo de la <strong>Milla de Oro (Avenida El Poblado)</strong>,
                    pasando por los distritos tecnológicos y gastronómicos de <strong>Provenza, Manila y Castropol</strong>,
                    hasta los desarrollos residenciales de <strong>Las Palmas</strong>, particulares y empresas exigen una
                    atención jurídica caracterizada por la sofisticación técnica, discreción y eficiencia.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600">
                    En <strong>ABOGAR Grupo Jurídico</strong> estructuramos negocios transfronterizos, asesoramos a nómadas digitales
                    y expatriados que eligen a Medellín como su centro de operaciones, tramitamos la regularización migratoria ante
                    la <strong>Cancillería</strong> y <strong>Migración Colombia</strong>, y blindamos patrimonios familiares
                    complejos mediante instrumentos notariales y fiduciarios de alta precisión.
                  </p>
                </div>

                <div className="mt-6 p-4 rounded bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#15297C] shrink-0 mt-0.5" />
                  <span>
                    Garantizamos un estándar riguroso de confidencialidad, acuerdos de confidencialidad previos (NDA) y
                    acompañamiento legal personalizado bilingüe para clientes corporativos y personas de alto patrimonio.
                  </span>
                </div>
              </div>

              {/* Tarjeta 2: 6 Áreas de Práctica específicas para El Poblado */}
              <div>
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
                    Servicios Jurídicos Premium
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    Áreas de Práctica Especializada en El Poblado
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Soluciones jurídicas y consultoría estratégica diseñada para inversionistas, empresarios y familias en Medellín:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {POBLADO_AREAS.map((area, idx) => {
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
                    Excelencia Operativa
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    Metodología de Trabajo en 5 Etapas
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Un protocolo estructurado que asegura agilidad, blindaje legal y transparencia en cada decisión:
                  </p>
                </div>

                <div className="space-y-6">
                  {POBLADO_METHODOLOGY.map((paso) => (
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
                      Preguntas Frecuentes sobre Abogados en El Poblado
                    </h2>
                    <p className="text-xs text-slate-500">
                      Respuestas orientativas a inquietudes habituales sobre asesoría corporativa, visas y patrimonio.
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-slate-200 border-y border-slate-200">
                  {POBLADO_FAQS.map((faq, idx) => {
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
                                ? 'bg-[#15297C] text-[#FFE19E] border-[#15297C]'
                                : 'bg-slate-100 text-slate-500 border-slate-200'
                            }`}
                          >
                            {isOpen ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
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
                  Atención en El Poblado
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1 mb-3">
                  ¿Requiere asesoría legal ejecutiva en El Poblado?
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                  Coordine una sesión privada con nuestros abogados para evaluar su inversión, visa o asunto
                  patrimonial con absoluta reserva y rigor profesional.
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
                  <p>✓ Asesoría bilingüe para extranjeros</p>
                  <p>✓ Citas privadas en Milla de Oro o virtual</p>
                  <p>✓ Riguroso acuerdo de confidencialidad</p>
                </div>
              </div>

              {/* Tarjeta de Otras Zonas de Cobertura */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-slate-900">
                  <MapPin className="w-4 h-4 text-[#15297C]" />
                  <h4 className="font-serif text-base font-bold text-slate-900">
                    Zonas de Cobertura Metropolitana
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
                    <span className="font-medium text-[#15297C] font-semibold">El Poblado (Actual):</span>
                    <span>Milla de Oro y Visas</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-slate-50">
                    <Link
                      to="/abogados-itagui/"
                      className="text-[#15297C] hover:underline font-medium"
                    >
                      Itagüí (Aburrá Sur)
                    </Link>
                    <span>Laboral y Culpa Patronal</span>
                  </li>
                  <li className="flex items-center justify-between py-1">
                    <span className="font-medium text-slate-800">Envigado y Sabaneta:</span>
                    <span>Área Metropolitana</span>
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
                <p className="font-semibold text-slate-800 pt-1">Atención ejecutiva:</p>
                <p>Consultas por WhatsApp y sesiones presenciales concertadas en El Poblado.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
