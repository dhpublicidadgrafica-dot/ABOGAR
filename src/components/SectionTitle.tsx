import React from 'react';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3.5 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full border ${
          light 
            ? 'bg-[#FFE19E]/15 text-[#FFE19E] border-[#FFE19E]/30' 
            : 'bg-[#15297C]/5 text-[#15297C] border-[#15297C]/20'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#FFE19E]' : 'bg-[#15297C]'}`} />
          {badge}
        </div>
      )}
      
      <h2 className={`text-2.5xl sm:text-3xl lg:text-4xl font-serif font-semibold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-200' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}

      {/* Subtle decorative accent bar */}
      <div className={`mt-5 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className={`w-8 h-[2px] ${light ? 'bg-[#FFE19E]' : 'bg-[#15297C]'}`} />
        <div className="w-2 h-[2px] bg-[#C89D3C]" />
      </div>
    </div>
  );
};
