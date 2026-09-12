import React from 'react';

interface IsotipoLogoProps {
  className?: string;
  alt?: string;
}

export const IsotipoLogo: React.FC<IsotipoLogoProps> = ({
  className = 'w-10 h-10',
  alt = 'Isotipo Despacho Jurídico',
}) => {
  return (
    <div className={`relative overflow-hidden shrink-0 select-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        className="w-full h-full block"
        role="img"
        aria-label={alt}
      >
        {/* Navy Blue Background matching ISOTIPO AZUL-8 */}
        <rect width="200" height="200" fill="#15297C" />

        {/* Thin Inset White Outline */}
        <rect
          x="3.5"
          y="3.5"
          width="193"
          height="193"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.8"
        />

        {/* Serif Letter O / Q Bowl */}
        <path
          fill="#FFFFFF"
          fillRule="evenodd"
          d="
            M 100, 24
            C 139, 24 167, 58 167, 100
            C 167, 142 139, 176 100, 176
            C 61, 176 33, 142 33, 100
            C 33, 58 61, 24 100, 24 Z
            M 100, 39
            C 77, 39 58, 66 58, 100
            C 58, 134 77, 161 100, 161
            C 123, 161 142, 134 142, 100
            C 142, 66 123, 39 100, 39 Z
          "
        />

        {/* Gavel / Mazo forming the Q-tail and emblem */}
        <g transform="translate(98, 102) rotate(45)">
          {/* Central Gavel Cylinder */}
          <rect x="-13" y="-10" width="26" height="20" rx="1.5" fill="#FFFFFF" />

          {/* Left Collar and Striking Face */}
          <rect x="-22" y="-13" width="7" height="26" rx="2" fill="#FFFFFF" />
          <rect x="-26" y="-11" width="4" height="22" rx="1.5" fill="#FFFFFF" />

          {/* Right Collar and Striking Face */}
          <rect x="15" y="-13" width="7" height="26" rx="2" fill="#FFFFFF" />
          <rect x="22" y="-11" width="4" height="22" rx="1.5" fill="#FFFFFF" />

          {/* Gavel Handle extending to form the tail of Q */}
          <path d="M -5, 0 L -5, 84 A 5,5 0 0,0 5, 84 L 5, 0 Z" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
};
