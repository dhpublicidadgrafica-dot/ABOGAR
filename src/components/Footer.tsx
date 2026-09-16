import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { SERVICES } from '../data/services';
import { LegalModal } from './LegalModal';
import { LogoAbogar } from './LogoAbogar';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer id="main-footer" className="bg-[#0D1B54] text-slate-300 pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Column 1: Brand & Presentation */}
            <div className="lg:col-span-2 space-y-4">
              <Link
                to="/"
                className="flex items-center group focus:outline-none py-0.5 transition-opacity hover:opacity-90"
                aria-label="ABOGAR Grupo Jurídico - Inicio"
              >
                <LogoAbogar variant="white" className="h-11 sm:h-13 w-auto max-w-[220px] sm:max-w-[280px]" />
              </Link>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                Despacho jurídico corporativo y de litigios. Brindamos representación legal de excelencia,
                estrategias jurídicas personalizadas y acompañamiento ético y transparente para personas y empresas.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={SITE_CONFIG.redesSociales.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    try {
                      const win = window.open(SITE_CONFIG.redesSociales.facebook, '_blank', 'noopener,noreferrer');
                      if (win) {
                        e.preventDefault();
                        win.focus();
                      }
                    } catch {
                      // fallback
                    }
                  }}
                  aria-label="Página oficial en Facebook: ABOGAR Colombia"
                  className="w-9 h-9 rounded bg-white/5 hover:bg-[#FFE19E] hover:text-[#0D1B54] text-slate-300 flex items-center justify-center transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.redesSociales.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    try {
                      const win = window.open(SITE_CONFIG.redesSociales.instagram, '_blank', 'noopener,noreferrer');
                      if (win) {
                        e.preventDefault();
                        win.focus();
                      }
                    } catch {
                      // fallback
                    }
                  }}
                  aria-label="Perfil oficial en Instagram: @abogar.co"
                  className="w-9 h-9 rounded bg-white/5 hover:bg-[#FFE19E] hover:text-[#0D1B54] text-slate-300 flex items-center justify-center transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE19E]" />
                Navegación
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-slate-300 hover:text-[#FFE19E] transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FFE19E]/60" />
                    <span>Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros" className="text-slate-300 hover:text-[#FFE19E] transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FFE19E]/60" />
                    <span>Nosotros</span>
                  </Link>
                </li>
                <li>
                  <Link to="/servicios" className="text-slate-300 hover:text-[#FFE19E] transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FFE19E]/60" />
                    <span>Servicios Jurídicos</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-slate-300 hover:text-[#FFE19E] transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FFE19E]/60" />
                    <span>Contacto</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal Areas (First batch) */}
            <div>
              <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE19E]" />
                Áreas de Práctica
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {SERVICES.slice(0, 6).map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/servicios/${s.slug}`}
                      className="text-slate-300 hover:text-[#FFE19E] transition-colors line-clamp-1"
                    >
                      {s.nombre}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link
                    to="/servicios"
                    className="text-[#FFE19E] hover:underline font-medium text-xs inline-flex items-center gap-1"
                  >
                    <span>Ver las 12 áreas</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact info */}
            <div>
              <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE19E]" />
                Contacto
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#FFE19E] shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`tel:${SITE_CONFIG.contacto.telefonoLimpio}`}
                      className="hover:text-white font-medium block"
                    >
                      {SITE_CONFIG.contacto.telefono}
                    </a>
                    <span className="text-[11px] text-slate-400">Atención telefónica</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#FFE19E] shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`mailto:${SITE_CONFIG.contacto.email}`}
                      className="hover:text-white block break-all"
                    >
                      {SITE_CONFIG.contacto.email}
                    </a>
                    <span className="text-[11px] text-slate-400">Consultas generales</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FFE19E] shrink-0 mt-0.5" />
                  <div>
                    <span>{SITE_CONFIG.contacto.direccion}</span>
                    <span className="text-[11px] text-slate-400 block">Sede principal</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#FFE19E] shrink-0 mt-0.5" />
                  <div>
                    <span>{SITE_CONFIG.contacto.horario}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Disclaimer & Copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="max-w-2xl text-center md:text-left leading-relaxed">
              <strong className="text-slate-300">Aviso legal:</strong> {SITE_CONFIG.avisoLegal}
            </p>

            <div className="text-center md:text-right shrink-0">
              <p>© {new Date().getFullYear()} {SITE_CONFIG.nombreDespacho}. Todos los derechos reservados.</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Sitio oficial corporativo.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy & Terms Modals */}
      {modalType && (
        <LegalModal
          isOpen={!!modalType}
          type={modalType}
          onClose={() => setModalType(null)}
        />
      )}
    </>
  );
};
