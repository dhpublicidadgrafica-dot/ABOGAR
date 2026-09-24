import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import { SERVICES } from '../data/services';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { LawyerCard } from '../components/LawyerCard';
import { CTASection } from '../components/CTASection';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { LocationMapSection } from '../components/LocationMapSection';
import { SEOHead } from '../components/SEOHead';
import { ServiceIcon } from '../components/ServiceIcon';
import { HERO_IMAGE_BASE64 } from '../data/heroImageBase64';
import {
  ArrowRight,
  Shield,
  PhoneCall,
  Award,
  Users,
  Compass,
  FileCheck,
} from 'lucide-react';

export const Home: React.FC = () => {
  const heroImage = HERO_IMAGE_BASE64;

  return (
    <>
      <SEOHead
        title="ABOGAR Grupo Jurídico | Asesoría Legal y Litigios en Colombia"
        description="Soluciones jurídicas estratégicas, profesionales y personalizadas para personas y empresas. Especialistas en 12 áreas del derecho en Colombia."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section
        id="hero-section"
        className="group relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0D1B54]"
      >
        {/* Background Image with Dark Contrast Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Primer plano de balanza de la justicia dorada con mazo judicial de madera y libros de derecho"
            className="w-full h-full object-cover object-center transition-all duration-700"
          />
          {/* Subtle Navy Gradient Overlay to ensure crisp contrast with white typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B54]/90 via-[#0D1B54]/75 to-[#0D1B54]/80" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] text-balance">
            {SITE_CONFIG.hero.titulo}
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed text-balance">
            {SITE_CONFIG.hero.subtitulo}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to={SITE_CONFIG.contacto.whatsappLink}
              external
              variant="gold"
              size="lg"
            >
              Agendar Asesoria
            </Button>
          </div>
        </div>
      </section>

      {/* Sección Equipo de Abogados Especialistas */}
      <section id="equipo" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Abogados Especialistas"
            subtitle="Profesionales con amplia trayectoria, formación académica continua y vocación de servicio."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.equipo.map((lawyer) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Confianza (Estadísticas e Indicadores) */}
      <section id="confianza-section" className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#15297C] font-semibold bg-[#15297C]/5 px-3 py-1 rounded-full">
              Indicadores de Desempeño
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.estadisticas.map((stat, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-[#15297C]/30 hover:shadow-sm transition-all text-center flex flex-col justify-center"
              >
                <div>
                  <div
                    className="font-minion text-3xl sm:text-4xl lg:text-5xl font-bold text-[#15297C] tracking-tight"
                    style={{ fontFamily: '"Minion Variable Concept", "Minion Pro", "Minion", Georgia, "Times New Roman", serif' }}
                  >
                    {stat.valor}
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">
                    {stat.etiqueta}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Áreas de Práctica */}
      <section id="areas-practica" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Áreas de Práctica Especializada"
            subtitle="Ofrecemos representación y consultoría técnica de alto nivel en 12 ramas del derecho, orientadas a proteger su seguridad jurídica y patrimonial."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                buttonLabel="Ver servicio"
              />
            ))}
          </div>

          {/* Button to view all 12 services */}
          <div className="mt-12 text-center">
            <Button
              to="/servicios"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4 ml-1 text-[#FFE19E]" />}
            >
              Ver todos los servicios
            </Button>
          </div>
        </div>
      </section>

      {/* Sección "¿Por qué elegirnos?" */}
      <section id="por-que-elegirnos" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="¿Por qué confiar su causa a nuestro despacho?"
            subtitle="Nos caracterizamos por un ejercicio del derecho riguroso, ético y enfocado en resultados medibles y sostenibles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_CONFIG.ventajas.map((ventaja, idx) => (
              <div
                key={idx}
                className="p-7 rounded-lg transition-all duration-300 flex flex-col bg-[#15297C] text-white border border-[#15297C] shadow-md hover:bg-[#0F1E5C]"
              >
                <div className="w-12 h-12 rounded flex items-center justify-center mb-5 bg-white/15 text-[#FFE19E]">
                  <ServiceIcon name={ventaja.icono} className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 text-white">
                  {ventaja.titulo}
                </h3>
                <p className="text-sm leading-relaxed flex-1 text-slate-200">
                  {ventaja.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Proceso en 4 Pasos */}
      <section id="proceso-juridico" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Un proceso estructurado, transparente y seguro"
            subtitle="Desde el primer contacto hasta la resolución final, usted conocerá cada etapa de la hoja de ruta jurídica."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {SITE_CONFIG.proceso.map((paso, idx) => (
              <div
                key={idx}
                className="relative bg-white p-7 rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between group hover:border-[#15297C]/40 hover:shadow-md transition-all"
              >
                {/* Number indicator */}
                <div className="mb-4">
                  <span className="font-serif text-3xl font-bold text-[#FFE19E] group-hover:text-[#15297C] transition-colors">
                    {paso.numero}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    {paso.titulo}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Opiniones y Reseñas en Google */}
      <GoogleReviewsSection />

      {/* CTA Final */}
      <CTASection
        title="¿Necesitas asesoría juridica?"
        subtitle="Conversemos sobre su caso y encontremos la mejor estrategia jurídica."
      />

      {/* Bloque de Mapa y Ubicación de Nuestras Oficinas */}
      <LocationMapSection />
    </>
  );
};
