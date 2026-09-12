import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import { Breadcrumb } from '../components/Breadcrumb';
import { ContactForm } from '../components/ContactForm';
import { LegalModal } from '../components/LegalModal';
import { SEOHead } from '../components/SEOHead';
import { HERO_IMAGE_BASE64 } from '../data/heroImageBase64';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Compass,
  Building,
  ExternalLink,
} from 'lucide-react';

export const Contacto: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceSlug = searchParams.get('servicio') || undefined;
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <>
      <SEOHead
        title={`Contacto | ${SITE_CONFIG.nombreDespacho}`}
        description="Estamos disponibles para escuchar su situación y orientarle sobre las alternativas jurídicas disponibles. Solicite su consulta legal hoy."
      />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100/80 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contacto' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-[#0D1B54] text-white overflow-hidden">
        {/* Background Image with Dark Blue Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE_BASE64}
            alt="Primer plano de balanza de la justicia dorada con mazo judicial de madera y libros de derecho"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B54]/90 via-[#0D1B54]/75 to-[#0D1B54]/80" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFE19E] border border-[#FFE19E]/30 text-xs uppercase tracking-widest font-semibold mb-4">
            Atención al Cliente & Consultas
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Hablemos sobre su caso
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Estamos disponibles para escuchar su situación y orientarle sobre las alternativas jurídicas disponibles.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm
                initialServiceSlug={serviceSlug}
                onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
              />
            </div>

            {/* Information Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct channels card */}
              <div className="bg-white p-7 sm:p-8 rounded-lg border border-slate-200 shadow-xs">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                  Canales de Atención Inmediata
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  Comuníquese directamente con nuestra secretaría general para citas prioritarias o consultas institucionales.
                </p>

                <div className="space-y-5">
                  {/* Teléfono */}
                  <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Línea Telefónica
                      </p>
                      <a
                        href={`tel:${SITE_CONFIG.contacto.telefonoLimpio}`}
                        className="text-base font-bold text-slate-900 hover:text-[#15297C] transition-colors"
                      >
                        {SITE_CONFIG.contacto.telefono}
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Atención de llamadas en horario hábil
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        WhatsApp Corporativo
                      </p>
                      <a
                        href={SITE_CONFIG.contacto.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          try {
                            const win = window.open(SITE_CONFIG.contacto.whatsappLink, '_blank', 'noopener,noreferrer');
                            if (win) {
                              e.preventDefault();
                              win.focus();
                            }
                          } catch {
                            // fallback
                          }
                        }}
                        className="text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1"
                      >
                        <span>{SITE_CONFIG.contacto.whatsapp}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Respuestas directas y agendamiento ágil
                      </p>
                    </div>
                  </div>

                  {/* Correo electrónico */}
                  <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Correo Electrónico
                      </p>
                      <a
                        href={`mailto:${SITE_CONFIG.contacto.email}`}
                        className="text-base font-bold text-slate-900 hover:text-[#15297C] transition-colors break-all"
                      >
                        {SITE_CONFIG.contacto.email}
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Envío formal de documentos y solicitudes
                      </p>
                    </div>
                  </div>

                  {/* Dirección */}
                  <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Ubicación y Sede
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        {SITE_CONFIG.contacto.direccionCompleta}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Bello, Antioquia, Colombia
                      </p>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Horario de Atención
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        {SITE_CONFIG.contacto.horario}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Sábados y festivos: guardia de urgencias penales
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 italic text-center">
                  * Datos de contacto ficticios configurables en el archivo de configuración.
                </div>
              </div>

              {/* Protocol statement */}
              <div className="bg-[#15297C] text-white p-6 rounded-lg shadow-xs">
                <div className="flex items-center gap-2 text-[#FFE19E] mb-2 font-serif font-bold text-base">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Garantía de Confidencialidad</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Toda consulta preliminar se rige por el secreto profesional del abogado. La información que comparta será tratada con rigurosa reserva técnica y jurídica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque de Mapa (Preparado para Google Maps) */}
      <section id="mapa-ubicacion" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
              Sede Física
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Ubicación de Nuestras Oficinas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Bloque preparado para integrar Google Maps o API cartográfica oficial del despacho.
            </p>
          </div>

          <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-300 shadow-md bg-slate-100">
            {/* Stylized placeholder map graphics */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
            
            {/* Stylized streets & topography lines */}
            <svg className="absolute inset-0 w-full h-full stroke-slate-300/80" fill="none">
              <path d="M-50 120 Q 300 180, 700 80 T 1400 240" strokeWidth="6" stroke="#e2e8f0" />
              <path d="M200 -50 L 320 500" strokeWidth="4" stroke="#cbd5e1" />
              <path d="M600 -50 L 520 500" strokeWidth="5" stroke="#cbd5e1" />
              <path d="M-20 280 L 1300 290" strokeWidth="8" stroke="#ffffff" />
            </svg>

            {/* Center Pin & Address Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-lg shadow-xl border border-slate-200 max-w-md text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#15297C] text-[#FFE19E] flex items-center justify-center mx-auto mb-3 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-slate-900">
                  {SITE_CONFIG.nombreDespacho}
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  {SITE_CONFIG.contacto.direccionCompleta}
                </p>
                <p className="text-[11px] text-slate-500 mt-2">
                  Bello, Antioquia, Colombia
                </p>
                
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a
                    href="https://maps.google.com/?q=Calle+51+%23+50-70+Bello+Antioquia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#15297C] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Abrir en Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map corner badge */}
            <div className="absolute bottom-3 right-3 bg-white/90 text-slate-500 text-[10px] px-2 py-1 rounded shadow-xs border border-slate-200">
              Módulo de Mapa Integrable
            </div>
          </div>
        </div>
      </section>

      {/* Privacy modal if requested */}
      <LegalModal
        isOpen={isPrivacyModalOpen}
        type="privacy"
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </>
  );
};
