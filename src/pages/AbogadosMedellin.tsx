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
  CheckCircle2,
  PhoneCall,
  Scale,
  Briefcase,
  HelpCircle,
  Building2,
  MapPin,
  Clock,
  Landmark,
  FileText,
  ChevronDown,
  UserCheck,
  Award,
} from 'lucide-react';

interface LocalFAQ {
  pregunta: string;
  respuesta: string;
}

const MEDELLIN_FAQS: LocalFAQ[] = [
  {
    pregunta: '¿Dónde atienden consultas presenciales y virtuales para clientes de Medellín?',
    respuesta:
      'Brindamos atención personalizada para Medellín mediante dos modalidades: presencial en nuestra sede principal metropolitana en Bello (Calle 51 # 50-70, a escasos minutos de la estación Bello del Metro y conectada con todo el Valle de Aburrá) y reuniones concertadas en centros empresariales del corredor de La Alpujarra o El Poblado. Asimismo, disponemos de plataforma de asesoría jurídica virtual de alta resolución para clientes que requieren atención inmediata desde cualquier comuna de Medellín.',
  },
  {
    pregunta: '¿Representan litigios activos en el Palacio de Justicia de La Alpujarra?',
    respuesta:
      'Sí. Nuestro equipo de abogados litigantes cuenta con amplia presencia en el Palacio de Justicia de Medellín "José Félix de Restrepo" (La Alpujarra), litigando diariamente ante los Juzgados Civiles, Laborales, de Familia, Administrativos y Penales del Circuito de Medellín, así como ante el Tribunal Superior del Distrito Judicial de Medellín y el Tribunal Administrativo de Antioquia.',
  },
  {
    pregunta: '¿Cómo gestionan trámites laborales ante el Ministerio del Trabajo en Medellín?',
    respuesta:
      'Acompañamos y apoderamos a empleadores y trabajadores en audiencias de conciliación prejudicial, descargos, quejas por acoso laboral e investigaciones administrativas ante la Dirección Territorial de Antioquia del Ministerio del Trabajo, ubicada en la Calle 56 (sector Villanueva/Centro de Medellín), asegurando actas con plenos efectos de cosa juzgada.',
  },
  {
    pregunta: '¿Cuánto cuesta una consulta jurídica preliminar para un caso en Medellín?',
    respuesta:
      'Nuestras tarifas se fundamentan en criterios de proporcionalidad, transparencia y las pautas del Colegio de Abogados de Colombia. Ofrecemos un primer acercamiento diagnóstico para analizar los antecedentes del caso y emitir una propuesta formal de honorarios (fijos, por etapas o bajo modalidad de cuota litis según la naturaleza del asunto), sin cobros ocultos y con pasarela de pago digital certificada.',
  },
  {
    pregunta: '¿Atienden asuntos urgentes como audiencias de garantías o tutelas de salud?',
    respuesta:
      'Sí. Disponemos de un protocolo de atención prioritaria para audiencias concentradas penales (legalización de captura, imputación y medida de aseguramiento) en los centros de servicios judiciales de Medellín, así como para la radicación inmediata de acciones de tutela con solicitud de medida cautelar provisional ante vulneraciones graves al derecho a la salud o debido proceso.',
  },
];

const MEDELLIN_AREAS = [
  {
    slug: 'derecho-laboral-individual-y-colectivo',
    titulo: 'Derecho Laboral y Seguridad Social',
    descripcion:
      'Litigio laboral estratégico en La Alpujarra: demandas por despido sin justa causa, fueros de salud y maternidad, tercerización ilegal, culpa patronal en accidentes de trabajo y negociación de convenciones colectivas para empresas del Valle de Aburrá.',
    icono: Briefcase,
  },
  {
    slug: 'derecho-comercial',
    titulo: 'Derecho Comercial y Societario',
    descripcion:
      'Asesoría corporativa y blindaje mercantil para startups y empresas de Medellín: redacción de contratos mercantiles, acuerdos de accionistas, registro de marcas ante la SIC y litigio societario ante la Cámara de Comercio de Medellín para Antioquia.',
    icono: Building2,
  },
  {
    slug: 'derecho-pensional',
    titulo: 'Derecho Pensional y Seguridad Social',
    descripcion:
      'Reclamaciones administrativas y judiciales de pensión de vejez, invalidez y sobrevivientes. Demandas de nulidad e ineficacia de traslado entre Colpensiones y fondos privados (Protección, Porvenir) y reliquidación de mesadas pensionales.',
    icono: Scale,
  },
  {
    slug: 'derecho-de-familia',
    titulo: 'Derecho de Familia y Sucesiones',
    descripcion:
      'Tramitación de sucesiones notariales y judiciales de alto patrimonio en Medellín, liquidación de sociedad conyugal y patrimonial, divorcios de común acuerdo o contenciosos, custodia, regulación de visitas y fijación de alimentos.',
    icono: UserCheck,
  },
  {
    slug: 'litigio-civil',
    titulo: 'Litigio Civil y Responsabilidad',
    descripcion:
      'Defensa e interposición de procesos ejecutivos para cobro de cartera, restitución de bienes inmuebles arrendados en Medellín, resolución de contratos civiles y demandas de responsabilidad civil contractual y extracontractual por daños.',
    icono: Landmark,
  },
  {
    slug: 'acciones-constitucionales-tutela',
    titulo: 'Acciones de Tutela y Constitucionales',
    descripcion:
      'Protección urgente de derechos fundamentales ante juzgados de Medellín: tutelas contra EPS por tratamientos y medicamentos de alto costo, desacatos, hábeas corpus, acciones populares y acciones de grupo en Antioquia.',
    icono: Shield,
  },
];

const MEDELLIN_METHODOLOGY = [
  {
    paso: 1,
    titulo: 'Diagnóstico jurídico preliminar y viabilidad',
    descripcion:
      'Analizamos minuciosamente los antecedentes, documentos y fundamentos normativos de su caso para determinar las probabilidades reales de éxito procesal antes de iniciar cualquier trámite.',
  },
  {
    paso: 2,
    titulo: 'Diseño de la estrategia procesal o de negociación',
    descripcion:
      'Estructuramos un plan de acción a la medida, evaluando tanto la vía de la conciliación extrajudicial como el litigio contencioso ante los despachos judiciales competentes de Medellín.',
  },
  {
    paso: 3,
    titulo: 'Blindaje probatorio y preparación documental',
    descripcion:
      'Recopilamos, custodiamos y organizamos las pruebas documentales, testimoniales y periciales requeridas para sustentar sólidamente la pretensión o la defensa jurídica.',
  },
  {
    paso: 4,
    titulo: 'Radicación y litigio activo ante despachos judiciales',
    descripcion:
      'Representación técnica y oral en audiencias, presentación de alegatos de conclusión, recursos de apelación y memoriales ante el Palacio de Justicia de La Alpujarra o autoridades administrativas.',
  },
  {
    paso: 5,
    titulo: 'Seguimiento permanente y reporte continuo al cliente',
    descripcion:
      'Mantenemos comunicación directa y reportes del estado de su proceso a través de canales digitales, asegurando máxima transparencia en cada etapa procesal.',
  },
];

export const AbogadosMedellin: React.FC = () => {
  // Accordion state: first question open by default
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://abogargroup.com/abogados-medellin/#legalservice',
    'name': 'ABOGAR Grupo Jurídico - Abogados en Medellín',
    'description':
      'Firma jurídica con representación legal, litigio estratégico y asesoría empresarial en el Distrito Especial de Medellín y Área Metropolitana del Valle de Aburrá.',
    'url': 'https://abogargroup.com/abogados-medellin/',
    'telephone': '+573158090334',
    'priceRange': '$$',
    'image': 'https://abogargroup.com/images/hero-justicia.jpg',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Calle 51 # 50-70, Oficina 200 (Cobertura directa en Medellín y La Alpujarra)',
      'addressLocality': 'Medellín',
      'addressRegion': 'Antioquia',
      'postalCode': '050015',
      'addressCountry': 'CO',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 6.2442,
      'longitude': -75.5812,
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Medellín' },
      { '@type': 'AdministrativeArea', 'name': 'La Alpujarra' },
      { '@type': 'AdministrativeArea', 'name': 'El Poblado' },
      { '@type': 'AdministrativeArea', 'name': 'Laureles' },
      { '@type': 'AdministrativeArea', 'name': 'Bello' },
      { '@type': 'AdministrativeArea', 'name': 'Envigado' },
      { '@type': 'AdministrativeArea', 'name': 'Itagüí' },
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
        title="Abogados en Medellín | Litigio y Asesoría Legal | ABOGAR"
        description="Firma de abogados en Medellín especializada en litigio ante La Alpujarra, derecho laboral, comercial, familia y penal. Consulta hoy tu caso con expertos."
        canonicalPath="/abogados-medellin/"
        ogType="website"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Zonas de Cobertura', item: '/contacto/' },
          { name: 'Abogados en Medellín', item: '/abogados-medellin/' },
        ]}
        faqs={MEDELLIN_FAQS.map((faq) => ({
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
              { label: 'Abogados en Medellín' },
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
            alt="Palacio de Justicia de La Alpujarra y balanza judicial representativa de litigio legal en Medellín"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B54]/90 via-[#0D1B54]/75 to-[#0D1B54]/80" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFE19E] border border-[#FFE19E]/30 text-xs uppercase tracking-widest font-semibold mb-4">
              Distrito Especial de Medellín • Valle de Aburrá
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Abogados en Medellín | Litigio y Asesoría Legal Estratégica
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed text-justify">
              Representación jurídica de alta exigencia ante los despachos judiciales de La Alpujarra,
              tribunales y entidades administrativas de Medellín. Asesoría integral para particulares,
              familias y empresas en todo el Valle de Aburrá.
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
                Agendar Consulta en Medellín
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
              {/* Tarjeta de Alcance de la Práctica en Medellín y La Alpujarra */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                  <div className="w-9 h-9 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">
                    Alcance de la Práctica Jurídica en Medellín y La Alpujarra
                  </h2>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                  <p>
                    El ejercicio del derecho en el <strong>Distrito Especial de Medellín</strong> demanda un
                    conocimiento profundo de la dinámica procesal local, los criterios jurisprudenciales del{' '}
                    <strong>Tribunal Superior del Distrito Judicial de Medellín</strong> y la operación de los
                    diferentes despachos ubicados en el{' '}
                    <strong>Centro Administrativo La Alpujarra (Palacio de Justicia "José Félix de Restrepo")</strong>.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600">
                    En <strong>ABOGAR Grupo Jurídico</strong> representamos causas contenciosas y adelantamos gestiones
                    ante los Juzgados Civiles, Laborales, Administrativos y de Familia del Circuito de Medellín,
                    así como trámites conciliatorios y administrativos ante la{' '}
                    <strong>Dirección Territorial de Antioquia del Ministerio del Trabajo</strong> (Calle 56), la{' '}
                    <strong>Cámara de Comercio de Medellín para Antioquia</strong> (Sedes Centro y El Poblado), la
                    Personería Distrital y la Defensoría del Pueblo.
                  </p>
                </div>

                <div className="mt-6 p-4 rounded bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#15297C] shrink-0 mt-0.5" />
                  <span>
                    Todas nuestras actuaciones en Medellín se ejecutan con estricto apego a la ética procesal,
                    confidencialidad profesional y análisis de viabilidad técnica previo a cualquier litigio.
                  </span>
                </div>
              </div>

              {/* Cuadrícula de 6 Áreas de Práctica más demandadas en Medellín */}
              <div>
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
                    Especialidades Jurídicas
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    Áreas de Práctica más demandadas en Medellín
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Soluciones jurídicas y litigio especializado en los campos de mayor requerimiento en el ámbito
                    metropolitano:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {MEDELLIN_AREAS.map((area, idx) => {
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
                          <span>Ver detalles del área</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Metodología de Trabajo en 5 Pasos */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
                    Rigor Metodológico
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    Metodología de Trabajo en 5 Etapas
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Aseguramos un estándar estructurado para la gestión eficaz de litigios y asesorías en Medellín:
                  </p>
                </div>

                <div className="space-y-6">
                  {MEDELLIN_METHODOLOGY.map((paso) => (
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

              {/* Preguntas Frecuentes (Acordeón funcional interactivo con useState) */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                  <div className="w-9 h-9 rounded bg-[#FFE19E]/30 text-[#15297C] flex items-center justify-center">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Preguntas Frecuentes sobre Abogados en Medellín
                    </h2>
                    <p className="text-xs text-slate-500">
                      Respuestas claras a inquietudes habituales sobre asesoría jurídica y litigio en la ciudad.
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-slate-200 border-y border-slate-200">
                  {MEDELLIN_FAQS.map((faq, idx) => {
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
                  Atención en Medellín
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1 mb-3">
                  ¿Tiene un asunto legal en Medellín?
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                  Comuníquese con nuestros abogados para evaluar su situación particular. Le brindaremos un
                  concepto orientativo y una ruta procesal transparente.
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
                  <p>✓ Estricta reserva y secreto profesional</p>
                  <p>✓ Audiencias en La Alpujarra y juzgados del circuito</p>
                  <p>✓ Asesoría presencial o virtual inmediata</p>
                </div>
              </div>

              {/* Tarjeta de Zonas de Cobertura */}
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
                    <span className="font-medium text-slate-800">La Alpujarra / Centro:</span>
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
                    <span className="font-medium text-slate-800">Laureles / Belén:</span>
                    <span>Particulares y Pymes</span>
                  </li>
                  <li className="flex items-center justify-between py-1">
                    <span className="font-medium text-slate-800">Envigado e Itagüí:</span>
                    <span>Procesos del Sur</span>
                  </li>
                </ul>
              </div>

              {/* Tarjeta de Servicios Principales */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
                <h4 className="font-serif text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>Servicios Jurídicos</span>
                  <Link to="/servicios/" className="text-xs text-[#15297C] font-semibold hover:underline">
                    Ver catálogo
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
                <p className="font-semibold text-slate-800 pt-1">Atención virtual:</p>
                <p>Disponible en tiempo real para clientes en Medellín y todo el país.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
