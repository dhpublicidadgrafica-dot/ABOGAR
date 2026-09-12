import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceArea } from '../types';
import { ServiceIcon } from './ServiceIcon';

interface ServiceCardProps {
  service: ServiceArea;
  buttonLabel?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  buttonLabel = 'Conocer más',
  className = '',
}) => {
  return (
    <article
      id={`service-card-${service.slug}`}
      className={`group relative flex flex-col justify-between bg-white rounded-md border border-slate-200/90 p-7 transition-all duration-300 hover:border-[#15297C]/30 hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      {/* Top accent border line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#15297C] transition-colors rounded-t-md" />

      <div>
        <div className="mb-5">
          <div className="w-12 h-12 rounded bg-[#15297C]/5 border border-[#15297C]/10 text-[#15297C] flex items-center justify-center group-hover:bg-[#15297C] group-hover:text-white transition-all duration-300">
            <ServiceIcon name={service.icono} className="w-6 h-6 transition-transform group-hover:scale-105" />
          </div>
        </div>

        <h3 className="text-xl font-serif font-semibold text-slate-900 group-hover:text-[#15297C] transition-colors line-clamp-1">
          <Link to={`/servicios/${service.slug}`} className="focus:outline-none focus:underline">
            {service.nombre}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {service.descripcionCorta}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center">
        <Link
          to={`/servicios/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#15297C] hover:text-[#0D1B54] transition-all group-hover:translate-x-0.5"
          aria-label={`Ver detalles de ${service.nombre}`}
        >
          <span>{buttonLabel}</span>
          <ArrowRight className="w-4 h-4 text-[#C89D3C] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
