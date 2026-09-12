import React from 'react';
import { Button } from './Button';
import { PhoneCall, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonTo?: string;
  external?: boolean;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = '¿Necesita asesoría legal?',
  subtitle = 'Conversemos sobre su caso y encontremos la mejor estrategia jurídica.',
  className = '',
}) => {
  return (
    <section
      id="cta-section"
      className={`relative overflow-hidden bg-[#15297C] text-white py-16 sm:py-20 ${className}`}
    >
      {/* Subtle decorative geometric overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[30px] border-[#FFE19E]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border-[30px] border-white" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFE19E] border border-[#FFE19E]/30 text-xs uppercase tracking-widest font-semibold mb-6">
          <Shield className="w-3.5 h-3.5" />
          <span>Atención Estratégica Inmediata</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to={`tel:${SITE_CONFIG.contacto.telefonoLimpio}`}
            variant="gold"
            size="lg"
            icon={<PhoneCall className="w-4 h-4 ml-1" />}
          >
            Llamar al {SITE_CONFIG.contacto.telefono}
          </Button>
        </div>
      </div>
    </section>
  );
};
