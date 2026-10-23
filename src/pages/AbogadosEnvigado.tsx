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
  Plus,
  Minus,
  FileText,
  Users,
  Home as HomeIcon,
  BadgePercent,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface LocalFAQ {
  pregunta: string;
  respuesta: string;
}

const ENVIGADO_FAQS: LocalFAQ[] = [
  {
    pregunta: '¿Tramitan procesos notariales de familia y sucesiones en Envigado?',
    respuesta:
      'Sí. Tramitamos de manera ágil sucesiones por mutuo acuerdo mediante escritura pública ante la Notaría Primera, Notaría Segunda y Notaría Tercera del Círculo de Envigado, así como divorcios notariales exprés, cesación de efectos civiles de matrimonio religioso y capitulaciones matrimoniales. En caso de discrepancias entre herederos o cónyuges, asumimos la representación contenciosa ante los Juzgados de Familia del Circuito de Envigado.',
  },
  {
    pregunta: '¿Representan litigios ante los Juzgados de Envigado?',
    respuesta:
      'Representamos a personas naturales y empresas ante los Juzgados Civiles Municipales y del Circuito de Envigado, Juzgados de Familia y centros de conciliación de la localidad (incluida la Personería Municipal de Envigado). Asistimos a audiencias orales, radicamos demandas de restitución de inmueble arrendado, pertenencias, ejecuciones de pagarés y demandas de responsabilidad civil extracontractual y contractual.',
  },
  {
    pregunta: '¿Cómo puedo agendar una consulta jurídica si me encuentro en Envigado?',
    respuesta:
      'Puede contactarnos directamente por WhatsApp al +57 315 809 0334 o vía telefónica para agendar su consulta preliminar. Ofrecemos dos alternativas: atención virtual de alta definición para revisión inmediata de escrituras, contratos o sentencias; o cita presencial concertada en nuestra sede principal metropolitana en Bello (Calle 51 # 50-70) o en salas de reunión acordadas en Envigado y el sur del Valle de Aburrá.',
  },
  {
    pregunta: '¿Cuánto demora un divorcio o sucesión notarial en Envigado?',
    respuesta:
      'Cuando existe acuerdo total entre las partes e inventario y avalúo consensuado de bienes, un divorcio notarial en Envigado toma entre 8 y 15 días hábiles hasta la suscripción de la escritura pública. Para una sucesión notarial, el trámite suele tomar entre 30 y 45 días hábiles, sujeto a los paz y salvos de impuesto predial municipal y a la aprobación de la Dirección de Impuestos y Aduanas Nacionales (DIAN).',
  },
  {
    pregunta: '¿Asesoran a propietarios en contratos de arrendamiento en Envigado?',
    respuesta:
      'Sí. Asesoramos integralmente a propietarios y arrendadores residenciales y comerciales en Envigado: blindamos contratos de arrendamiento bajo la Ley 820 de 2003, gestionamos constitución de pólizas con afianzadoras, estructuramos actas de terminación de mutuo acuerdo y adelantamos procesos judiciales abreviados de restitución de inmueble arrendado ante el incumplimiento en el pago de cánones o servicios públicos.',
  },
];

const ENVIGADO_AREAS = [
  {
    slug: 'derecho-de-familia',
    titulo: 'Sucesiones y Trámites Notariales',
    descripcion:
      'Partición y liquidación notarial de herencias ante las Notarías 1ª, 2ª y 3ª de Envigado. Elaboración de inventarios y avalúos, trámites de paz y salvo ante la DIAN, adjudicación de bienes inmuebles y representación en sucesiones judiciales contenciosas.',
    icono: FileText,
  },
  {
    slug: 'derecho-de-familia',
    titulo: 'Divorcios y Liquidación Conyugal',
    descripcion:
      'Divorcios de mutuo acuerdo ante notaría en tiempo récord, cesación de efectos civiles, disolución de sociedad conyugal o patrimonial, fijación de cuotas alimentarias, régimen de visitas, patria potestad y custodia compartida de menores.',
    icono: Users,
  },
  {
    slug: 'litigio-civil',
    titulo: 'Litigio Inmobiliario y Arrendamientos',
    descripcion:
      'Procesos verbales de restitución de inmueble arrendado por mora en cánones o destinación ilícita bajo Ley 820 de 2003. Saneamiento de títulos de propiedad, demandas de pertenencia, servidumbres y controversias de propiedad horizontal en Envigado.',
    icono: HomeIcon,
  },
  {
    slug: 'derecho-laboral-individual-y-colectivo',
    titulo: 'Demandas Laborales y Despidos',
    descripcion:
      'Representación para ejecutivos, empleados y empresas del sur metropolitano en despidos sin justa causa, liquidación de prestaciones sociales, indemnizaciones del Art. 64 CST, acoso laboral y demandas ordinarias ante los juzgados laborales.',
    icono: Briefcase,
  },
  {
    slug: 'derecho-pensional',
    titulo: 'Derecho Pensional y Colpensiones',
    descripcion:
      'Reclamación de pensión de vejez, invalidez y sobrevivientes. Corrección de historia laboral de semanas cotizadas, traslados de fondos privados a Colpensiones por ineficacia de afiliación y reliquidación pensional conforme a la jurisprudencia.',
    icono: BadgePercent,
  },
  {
    slug: 'derecho-comercial',
    titulo: 'Cobro Judicial de Deudas y Contratos',
    descripcion:
      'Recuperación de cartera y procesos ejecutivos para cobro de facturas, cheques, pagarés y contratos mercantiles. Medidas cautelares de embargo y secuestro de cuentas bancarias e inmuebles en Envigado y el Valle de Aburrá.',
    icono: Scale,
  },
];

const ENVIGADO_METHODOLOGY = [
  {
    paso: 1,
    titulo: 'Diagnóstico jurídico inicial y análisis de títulos o documentos',
    descripcion:
      'Examinamos con rigurosidad técnica los certificados de tradición y libertad, escrituras públicas, contratos de arrendamiento o expedientes laborales para determinar la viabilidad jurídica y la mejor ruta de acción.',
  },
  {
    paso: 2,
    titulo: 'Verificación documental y paz y salvos municipales',
    descripcion:
      'Gestionamos oportunamente los paz y salvos de impuesto predial ante el Municipio de Envigado, valorización, certificados de paz y salvo de la DIAN y requisitos específicos solicitados por las Notarías del círculo.',
  },
  {
    paso: 3,
    titulo: 'Negociación extrajudicial y concertación prejudicial',
    descripcion:
      'Promovemos acuerdos concertados entre herederos, cónyuges o partes contractuales, o comparecemos a audiencias de conciliación prejudicial ante la Personería de Envigado o centros de conciliación autorizados.',
  },
  {
    paso: 4,
    titulo: 'Radicación formal notarial o demanda ante Juzgados de Envigado',
    descripcion:
      'Estructuramos la minuta de escritura pública notarial o redactamos y radicamos la demanda judicial ante los Juzgados Civiles, Laborales o de Familia del Circuito de Envigado con estricto seguimiento procesal.',
  },
  {
    paso: 5,
    titulo: 'Liquidación, registro de instrumentos públicos y entrega de resultados',
    descripcion:
      'Gestionamos el registro formal de sentencias o escrituras públicas ante la Oficina de Registro de Instrumentos Públicos, garantizando la titularidad saneada y el cumplimiento efectivo de los derechos del cliente.',
  },
];

export const AbogadosEnvigado: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://abogargroup.com/abogados-envigado/#legalservice',
    'name': 'ABOGAR Grupo Jurídico - Abogados en Envigado',
    'description':
      'Firma de abogados especialistas en Envigado: derecho de familia, sucesiones notariales, divorcios, restitución de inmuebles en arriendo, demandas laborales y pensiones en el sur del Valle de Aburrá.',
    'url': 'https://abogargroup.com/abogados-envigado/',
    'telephone': '+573158090334',
    'priceRange': '$$',
    'image': 'https://abogargroup.com/images/hero-justicia.webp',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Calle 51 # 50-70, Oficina 200 (Atención directa en Envigado y Sur del Valle de Aburrá)',
      'addressLocality': 'Envigado',
      'addressRegion': 'Antioquia',
      'postalCode': '055422',
      'addressCountry': 'CO',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 6.1685,
      'longitude': -75.5869,
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Envigado' },
      { '@type': 'AdministrativeArea', 'name': 'El Dorado' },
      { '@type': 'AdministrativeArea', 'name': 'Alcalá' },
      { '@type': 'AdministrativeArea', 'name': 'La Magnolia' },
      { '@type': 'AdministrativeArea', 'name': 'Las Orquídeas' },
      { '@type': 'AdministrativeArea', 'name': 'Otraparte' },
      { '@type': 'AdministrativeArea', 'name': 'Zuñiga' },
      { '@type': 'AdministrativeArea', 'name': 'San Marcos' },
      { '@type': 'City', 'name': 'Sabaneta' },
      { '@type': 'City', 'name': 'Itagüí' },
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
        title="Abogados en Envigado | Familia, Sucesiones y Civil | ABOGAR"
        description="Asesoría y representación jurídica en Envigado: divorcios, sucesiones, despidos laborales, contratos y litigio civil. ¡Agenda tu cita presencial o virtual!"
        canonicalPath="/abogados-envigado/"
        ogType="website"
        breadcrumbs={[
          { name: 'Inicio', item: '/' },
          { name: 'Zonas de Cobertura', item: '/contacto/' },
          { name: 'Abogados en Envigado', item: '/abogados-envigado/' },
        ]}
        faqs={ENVIGADO_FAQS.map((faq) => ({
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
              { label: 'Abogados en Envigado' },
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
            alt="Balanza de la justicia y asesoría legal en derecho de familia y civil en Envigado Antioquia"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B54]/90 via-[#0D1B54]/75 to-[#0D1B54]/80" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFE19E] border border-[#FFE19E]/30 text-xs uppercase tracking-widest font-semibold mb-4">
              Derecho de Familia, Notarial y Civil • Envigado, Antioquia
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Abogados en Envigado | Especialistas en Derecho de Familia, Sucesiones y Civil
            </h1>

            {/* Regla de Oro #3: Primer párrafo que resuelve la duda de inmediato en las primeras 3 líneas */}
            <p className="mt-4 text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
              En <strong>ABOGAR Grupo Jurídico</strong> somos especialistas en asesoría legal y litigio estratégico en Envigado:
              tramitamos <strong>sucesiones notariales de herencias ante las Notarías 1ª, 2ª y 3ª</strong>, adelantamos{' '}
              <strong>divorcios de común acuerdo y contenciosos con liquidación conyugal</strong>, gestionamos{' '}
              <strong>procesos de restitución de inmuebles en arriendo</strong>, y defendemos sus derechos en{' '}
              <strong>demandas laborales por despido y traslados pensionales</strong>. <strong>Escríbanos hoy mismo por WhatsApp</strong>{' '}
              para coordinar una consulta presencial o virtual y recibir respuesta inmediata de nuestros abogados.
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
                Agendar Consulta Inmediata
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
              {/* Tarjeta 1: Alcance de la Práctica en Envigado */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                  <div className="w-9 h-9 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">
                    Alcance de la Práctica Jurídica en Envigado
                  </h2>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                  <p>
                    <strong>Envigado</strong> se destaca como una de las ciudades con mayor desarrollo residencial, solidez
                    patrimonial y actividad notarial en el Área Metropolitana del Valle de Aburrá. Barrios tradicionales y
                    sectores residenciales consolidados como <strong>Alcalá, El Dorado, La Magnolia, Las Orquídeas, Zuñiga, Otraparte y San Marcos</strong>{' '}
                    concentran una alta demanda en trámites sucesorales, contratos de arrendamiento, controversias inmobiliarias y
                    procesos de familia que requieren estricta precisión formal.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600">
                    En <strong>ABOGAR Grupo Jurídico</strong> articulamos la gestión jurídica tanto en vía notarial ágil ante las{' '}
                    <strong>Notarías Primera, Segunda y Tercera de Envigado</strong>, como en vía judicial ante los{' '}
                    <strong>Juzgados Civiles, Laborales y de Familia del Circuito de Envigado</strong>. Asesoramos a familias,
                    propietarios de inmuebles, comerciantes y pensionados con una atención humana, ética y orientada a resultados efectivos.
                  </p>
                </div>

                <div className="mt-6 p-4 rounded bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#15297C] shrink-0 mt-0.5" />
                  <span>
                    Acompañamiento profesional personalizado en Envigado con seguimiento procesal en tiempo real, transparencia en honorarios y opciones de consulta presencial o digital.
                  </span>
                </div>
              </div>

              {/* Tarjeta 2: 6 Áreas de Práctica específicas para Envigado */}
              <div>
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
                    Especialidades Jurídicas
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    Áreas de Práctica Especializada en Envigado
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Servicios jurídicos integrales orientados a las necesidades patrimoniales, contractuales y laborales de los residentes de Envigado:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {ENVIGADO_AREAS.map((area, idx) => {
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
                    Garantía y Claridad
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    Metodología de Trabajo en 5 Etapas
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Ruta estructurada para resolver trámites notariales y litigios judiciales con máxima celeridad:
                  </p>
                </div>

                <div className="space-y-6">
                  {ENVIGADO_METHODOLOGY.map((paso) => (
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
                      Preguntas Frecuentes sobre Abogados en Envigado
                    </h2>
                    <p className="text-xs text-slate-500">
                      Orientación jurídica sobre procesos notariales, juzgados, arrendamientos y trámites familiares en Envigado.
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-slate-200 border-y border-slate-200">
                  {ENVIGADO_FAQS.map((faq, idx) => {
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
                  Atención en Envigado
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1 mb-3">
                  ¿Necesita un abogado especialista en Envigado?
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                  Coordine hoy mismo una consulta con nuestro equipo para tramitar su sucesión, divorcio, contrato o caso judicial con respaldo ético e inmediato.
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
                  <p>✓ Trámites notariales ágiles y seguros</p>
                  <p>✓ Citas presenciales en el sur o virtual</p>
                  <p>✓ Honorarios transparentes y pactados</p>
                </div>
              </div>

              {/* Tarjeta de Sede Principal */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-slate-900">
                  <MapPin className="w-4 h-4 text-[#15297C]" />
                  <h4 className="font-serif text-base font-bold text-slate-900">
                    Sede Principal
                  </h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center justify-between py-1">
                    <span className="font-medium text-slate-800">Sede Principal:</span>
                    <span className="text-[#15297C] font-semibold">Bello (Of. 200)</span>
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
                <p className="font-semibold text-slate-800 pt-1">Atención en Envigado:</p>
                <p>Consultas por WhatsApp y sesiones presenciales concertadas en Envigado y Valle de Aburrá.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
