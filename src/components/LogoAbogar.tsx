import React from 'react';

interface LogoAbogarProps {
  className?: string;
  variant?: 'blue' | 'white';
}

export const LogoAbogar: React.FC<LogoAbogarProps> = ({
  className = 'h-10 sm:h-12 w-auto',
  variant = 'blue',
}) => {
  const fillColor = variant === 'white' ? '#FFFFFF' : '#15297C';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 1000 280"
        width="100%"
        height="100%"
        className="w-full h-full block"
        role="img"
        aria-label="ABOGAR Grupo Jurídico"
      >
        <defs>
          <style>{`
            .abogar-brand-font {
              font-family: 'Playfair Display', "Minion Variable Concept", "Minion Pro", Georgia, serif;
              font-weight: 700;
              font-size: 195px;
            }
            .abogar-sub-font {
              font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              font-weight: 500;
              font-size: 46px;
              letter-spacing: 0.02em;
            }
            .abogar-rule {
              stroke-width: 3.5;
              stroke-linecap: round;
            }
          `}</style>
        </defs>

        {/* Letter A */}
        <text
          x="35"
          y="190"
          fill={fillColor}
          className="abogar-brand-font"
        >
          A
        </text>

        {/* Letter B */}
        <text
          x="195"
          y="190"
          fill={fillColor}
          className="abogar-brand-font"
        >
          B
        </text>

        {/* Letter O with Integrated Gavel Emblem */}
        <g id="letter-o-gavel">
          {/* Serif Oval Ring O (Center X=430, Y=112) */}
          <path
            fill={fillColor}
            fillRule="evenodd"
            d="
              M 430, 30
              C 476, 30 508, 68 508, 112
              C 508, 156 476, 194 430, 194
              C 384, 194 352, 156 352, 112
              C 352, 68 384, 30 430, 30 Z
              M 430, 46
              C 402, 46 380, 75 380, 112
              C 380, 149 402, 178 430, 178
              C 458, 178 480, 149 480, 112
              C 480, 75 458, 46 430, 46 Z
            "
          />

          {/* Judge's Gavel (oriented 45 deg, handle extending through lower-left of O) */}
          <g transform="translate(425, 112) rotate(45)">
            {/* Gavel Head (Cylinder barrel) */}
            <rect x="-14" y="-12" width="28" height="24" rx="2" fill={fillColor} />
            {/* Left Collar & Striking Cap */}
            <rect x="-24" y="-15" width="8" height="30" rx="2" fill={fillColor} />
            <rect x="-28" y="-13" width="4" height="26" rx="1.5" fill={fillColor} />
            {/* Right Collar & Striking Cap */}
            <rect x="16" y="-15" width="8" height="30" rx="2" fill={fillColor} />
            <rect x="24" y="-13" width="4" height="26" rx="1.5" fill={fillColor} />
            
            {/* Gavel Handle extending to form Q-tail through lower-left */}
            <path
              d="M -6, 0 L -6, 115 A 6,6 0 0,0 6, 115 L 6, 0 Z"
              fill={fillColor}
            />
          </g>
        </g>

        {/* Letter G */}
        <text
          x="530"
          y="190"
          fill={fillColor}
          className="abogar-brand-font"
        >
          G
        </text>

        {/* Letter A */}
        <text
          x="695"
          y="190"
          fill={fillColor}
          className="abogar-brand-font"
        >
          A
        </text>

        {/* Letter R */}
        <text
          x="845"
          y="190"
          fill={fillColor}
          className="abogar-brand-font"
        >
          R
        </text>

        {/* Bottom Line Left */}
        <line
          x1="35"
          y1="248"
          x2="315"
          y2="248"
          stroke={fillColor}
          className="abogar-rule"
        />

        {/* Subtitle: Grupo Jurídico */}
        <text
          x="500"
          y="262"
          fill={fillColor}
          textAnchor="middle"
          className="abogar-sub-font"
        >
          Grupo Jurídico
        </text>

        {/* Bottom Line Right */}
        <line
          x1="685"
          y1="248"
          x2="970"
          y2="248"
          stroke={fillColor}
          className="abogar-rule"
        />
      </svg>
    </div>
  );
};
