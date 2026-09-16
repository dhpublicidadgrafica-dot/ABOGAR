import React from 'react';

interface LogoAbogarProps {
  className?: string;
  variant?: 'blue' | 'white';
}

export const LogoAbogar: React.FC<LogoAbogarProps> = ({
  className = 'h-10 sm:h-12 w-auto',
  variant = 'blue',
}) => {
  const isWhite = variant === 'white';
  const logoSrc = isWhite
    ? '/images/logo-original-blanco.png'
    : '/images/logo-original.png';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="ABOGAR Grupo Jurídico"
        className="w-full h-full object-contain"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

