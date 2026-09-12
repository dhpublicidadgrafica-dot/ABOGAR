import React from 'react';
import { SERVICES } from '../data/services';
import { SITE_CONFIG } from '../data/siteConfig';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceGrid } from '../components/ServiceGrid';
import { CTASection } from '../components/CTASection';
import { SEOHead } from '../components/SEOHead';
import { Scale, CheckCircle2 } from 'lucide-react';

export const Servicios: React.FC = () => {
  return (
    <>
      <SEOHead
        title={`Servicios Jurídicos | ${SITE_CONFIG.nombreDespacho}`}
        description="Explore las 12 áreas de práctica jurídica que domina nuestro despacho. Asesoría estratégica para personas y corporaciones."
      />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100/80 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Servicios' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-[#0D1B54] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80"
            alt="Libros de derecho y estrado judicial"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFE19E] border border-[#FFE19E]/30 text-xs uppercase tracking-widest font-semibold mb-4">
            Áreas de Práctica
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Nuestros servicios jurídicos
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Soluciones legales diseñadas para proteger sus intereses y ayudarle a tomar mejores decisiones.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs sm:text-sm text-[#FFE19E]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 12 especialidades jurídicas
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Litigios y asesoría preventiva
            </span>
          </div>
        </div>
      </section>

      {/* 12 Services Grid Section */}
      <section id="catalogo-servicios" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Catálogo Completo"
            title="Especialidades y Áreas de Práctica"
            subtitle="Haga clic en cualquiera de nuestras áreas de especialidad para conocer a detalle el alcance, los temas de atención, el proceso de trabajo y las preguntas frecuentes."
          />

          <ServiceGrid
            services={SERVICES}
            buttonLabel="Conocer más"
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Desea consultar la viabilidad de su caso?"
        subtitle="Agende una cita preliminar con el abogado especialista en el área de su requerimiento."
      />
    </>
  );
};
