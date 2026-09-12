import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { SITE_CONFIG } from '../data/siteConfig';
import { Breadcrumb } from '../components/Breadcrumb';
import { FAQAccordion } from '../components/FAQAccordion';
import { Button } from '../components/Button';
import { ServiceIcon } from '../components/ServiceIcon';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';
import { NotFound } from './NotFound';
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  PhoneCall,
  CalendarCheck,
  Briefcase,
  HelpCircle,
  FileText,
} from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find matching service
  const service = SERVICES.find((s) => s.slug === slug);

  // If slug doesn't exist in the 12 services, render NotFound component
  if (!service) {
    return <NotFound />;
  }

  return (
    <>
      <SEOHead
        title={`${service.nombre} | ${SITE_CONFIG.nombreDespacho}`}
        description={service.seoDescription}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100/80 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Servicios', to: '/servicios' },
              { label: service.nombre },
            ]}
          />
        </div>
      </div>

      {/* Service Hero */}
      <section className="relative py-16 sm:py-20 bg-[#0D1B54] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={service.imagen}
            alt={service.imagenAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0D1B54]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFE19E] border border-[#FFE19E]/30 text-xs uppercase tracking-widest font-semibold mb-4">
                <ServiceIcon name={service.icono} className="w-4 h-4" />
                <span>Área Jurídica Especializada</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {service.nombre}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
                {service.descripcionCorta}
              </p>
            </div>

            <div className="shrink-0">
              <Button
                to={SITE_CONFIG.contacto.whatsappLink}
                external
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Solicitar consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left/Main Column: Introduction, Areas, Approach, FAQs */}
            <div className="lg:col-span-8 space-y-16">
              {/* 1. Introducción */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                  <div className="w-9 h-9 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">
                    Alcance de la Práctica en {service.nombre}
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  {service.introduccion}
                </p>

                <div className="mt-6 p-4 rounded bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#15297C] shrink-0 mt-0.5" />
                  <span>
                    Todos nuestros conceptos y actuaciones en {service.nombre} se elaboran bajo un estricto criterio de viabilidad jurídica, mitigación de riesgos y eficiencia procesal.
                  </span>
                </div>
              </div>

              {/* 2. ¿Cómo podemos ayudarle? (4 a 6 áreas específicas de atención) */}
              <div>
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
                    Competencias Específicas
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    ¿Cómo podemos ayudarle?
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Abordamos integralmente las principales controversias y requerimientos en materia de {service.nombre}:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {service.areasAtencion.map((area, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs hover:border-[#15297C]/30 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-[#15297C]">
                          <CheckCircle2 className="w-4 h-4 text-[#C89D3C] shrink-0" />
                          <h3 className="font-serif text-base font-bold text-slate-900">
                            {area.titulo}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {area.descripcion}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Nuestro Enfoque (5 pasos) */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
                    Metodología de Caso
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    Nuestro enfoque de trabajo
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Garantizamos un estándar metódico en 5 etapas para asegurar la máxima efectividad jurídica:
                  </p>
                </div>

                <div className="space-y-6">
                  {service.enfoque.map((paso) => (
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

              {/* 4. Preguntas Frecuentes (4 acordeones específicos) */}
              <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                  <div className="w-9 h-9 rounded bg-[#FFE19E]/30 text-[#15297C] flex items-center justify-center">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      Preguntas Frecuentes en {service.nombre}
                    </h2>
                    <p className="text-xs text-slate-500">
                      Respuestas orientativas a dudas recurrentes de nuestros clientes.
                    </p>
                  </div>
                </div>

                <FAQAccordion items={service.preguntasFrecuentes} />
              </div>
            </div>

            {/* Right/Sidebar Column: Quick contact, appointment booking, all other services navigation */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Consultation card */}
              <div className="bg-[#15297C] text-white p-7 rounded-lg shadow-md border border-[#15297C]">
                <span className="text-[11px] uppercase font-semibold tracking-widest text-[#FFE19E]">
                  Asesoría Personalizada
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1 mb-3">
                  ¿Tiene un asunto en {service.nombre}?
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                  Conversemos sobre los antecedentes de su caso. Le presentaremos una evaluación jurídica
                  preliminar y las alternativas de actuación más favorables.
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
                    Agendar consulta por WhatsApp
                  </Button>

                  <a
                    href={`tel:${SITE_CONFIG.contacto.telefonoLimpio}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#FFE19E]" />
                    <span>Llamar: {SITE_CONFIG.contacto.telefono}</span>
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-white/15 text-[11px] text-slate-300">
                  <p>✓ Estricta confidencialidad</p>
                  <p className="mt-1">✓ Atención presencial en sede principal o virtual</p>
                </div>
              </div>

              {/* Other services quick list */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
                <h4 className="font-serif text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>Otras Áreas de Práctica</span>
                  <Link to="/servicios" className="text-xs text-[#15297C] font-semibold hover:underline">
                    Ver todas
                  </Link>
                </h4>

                <ul className="space-y-1.5">
                  {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                    <li key={s.id}>
                      <Link
                        to={`/servicios/${s.slug}`}
                        className="text-xs sm:text-sm text-slate-600 hover:text-[#15297C] hover:bg-slate-50 py-1.5 px-2 rounded block transition-colors line-clamp-1"
                      >
                        • {s.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reusable contact card */}
              <div className="bg-slate-100/80 p-5 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-2">
                <p className="font-semibold text-slate-800">Horario de atención:</p>
                <p>{SITE_CONFIG.contacto.horario}</p>
                <p className="font-semibold text-slate-800 pt-1">Dirección corporativa:</p>
                <p>{SITE_CONFIG.contacto.direccionCompleta}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Service-specific CTA */}
      <CTASection
        title={`¿Necesita asesoría en ${service.nombre}?`}
        subtitle="Un abogado especialista en esta materia analizará su situación y trazará la hoja de ruta jurídica más conveniente."
      />
    </>
  );
};
