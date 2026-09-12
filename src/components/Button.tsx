import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  external,
  className = '',
  children,
  icon,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium tracking-wide rounded-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 shadow-sm',
  };

  const variantClasses = {
    primary:
      'bg-[#15297C] text-white hover:bg-[#0D1B54] active:bg-[#0A1540] border border-[#15297C] hover:border-[#0D1B54] focus-visible:ring-[#15297C]',
    gold:
      'bg-[#FFE19E] text-[#15297C] font-semibold hover:bg-[#F5D588] active:bg-[#ECC872] border border-[#EAC46E] shadow-sm focus-visible:ring-[#FFE19E]',
    outline:
      'bg-transparent text-[#15297C] border border-[#15297C] hover:bg-[#15297C] hover:text-white active:bg-[#0D1B54] focus-visible:ring-[#15297C]',
    'outline-light':
      'bg-transparent text-white border border-[#FFE19E]/80 hover:bg-[#FFE19E] hover:text-[#15297C] hover:border-[#FFE19E] focus-visible:ring-[#FFE19E]',
    ghost:
      'bg-transparent text-slate-700 hover:text-[#15297C] hover:bg-slate-100 focus-visible:ring-[#15297C]',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const isExternal =
    external ||
    (typeof to === 'string' &&
      (/^https?:\/\//i.test(to) ||
        /^mailto:/i.test(to) ||
        /^tel:/i.test(to) ||
        to.includes('wa.me') ||
        to.includes('whatsapp.com')));

  if (to) {
    if (isExternal) {
      const isTelOrMail = to.startsWith('tel:') || to.startsWith('mailto:');
      return (
        <a
          href={to}
          target={isTelOrMail ? undefined : '_blank'}
          rel={isTelOrMail ? undefined : 'noopener noreferrer'}
          className={combinedClasses}
          onClick={(e) => {
            if (props.onClick) {
              (props.onClick as any)(e);
            }
            if (!isTelOrMail) {
              try {
                const win = window.open(to, '_blank', 'noopener,noreferrer');
                if (win) {
                  e.preventDefault();
                  win.focus();
                }
              } catch {
                // If window.open was restricted, let default anchor behavior execute
              }
            }
          }}
          {...(props as any)}
        >
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClasses} {...(props as any)}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon}
    </button>
  );
};
