import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface LocationMapSectionProps {
  id?: string;
  className?: string;
}

export const LocationMapSection: React.FC<LocationMapSectionProps> = ({
  id = 'mapa-ubicacion',
  className = 'py-16 bg-white',
}) => {
  return (
    <section id={id} className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
            Sede Física
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
            Ubicación de Nuestras Oficinas
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Visítenos en nuestra sede principal en Bello, a media cuadra del Parque Principal.
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
                  href="https://share.google/oIVlkpxrB0RzZKbZK"
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
            Sede Principal Bello, Antioquia
          </div>
        </div>
      </div>
    </section>
  );
};
