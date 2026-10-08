import React, { useState } from 'react';
import { CreditCard, Loader2, ShieldCheck, AlertCircle, X, ExternalLink } from 'lucide-react';
import { PAYMENT_URL, isValidPaymentUrl } from '../config/paymentConfig';
import { SITE_CONFIG } from '../data/siteConfig';

export interface PaymentButtonProps {
  /** Texto del botón. Por defecto: "REALIZAR PAGO" */
  text?: string;
  /** Variante visual del botón que respeta la identidad corporativa */
  variant?: 'gold' | 'primary' | 'outline' | 'outline-light';
  /** Tamaño del botón */
  size?: 'sm' | 'md' | 'lg';
  /** Clases CSS adicionales */
  className?: string;
  /** Mostrar icono de tarjeta/candado seguro */
  showIcon?: boolean;
  /** Deshabilitar el botón manualmente */
  disabled?: boolean;
  /** Abrir en nueva pestaña si se desea en lugar de la misma ventana */
  openInNewTab?: boolean;
  /** Callback opcional antes de redirigir */
  onBeforeRedirect?: () => void;
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({
  text = 'REALIZAR PAGO',
  variant = 'gold',
  size = 'md',
  className = '',
  showIcon = true,
  disabled = false,
  openInNewTab = false,
  onBeforeRedirect,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showRedirectNotice, setShowRedirectNotice] = useState(false);
  const [showUnavailableModal, setShowUnavailableModal] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (disabled || isLoading) return;

    // 1. Validar la URL centralizada
    const isValid = isValidPaymentUrl(PAYMENT_URL);

    if (!isValid) {
      // Mostrar mensaje amigable si la URL no está configurada o es inválida
      setShowUnavailableModal(true);
      return;
    }

    // 2. Activar indicador de carga y aviso de redirección segura
    setIsLoading(true);
    setShowRedirectNotice(true);

    if (onBeforeRedirect) {
      onBeforeRedirect();
    }

    // 3. Redirección fluida y segura
    const redirectTimer = setTimeout(() => {
      const cleanUrl = PAYMENT_URL.trim();
      if (openInNewTab) {
        window.open(cleanUrl, '_blank', 'noopener,noreferrer');
        setIsLoading(false);
        setShowRedirectNotice(false);
      } else {
        window.location.assign(cleanUrl);
      }
    }, 700);

    return () => clearTimeout(redirectTimer);
  };

  // Clases base con estados hover, active, focus, disabled y touch-target optimizado para móviles
  const baseClasses =
    'relative inline-flex items-center justify-center font-bold tracking-wide rounded-sm transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98] shadow-xs';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 min-h-[38px]',
    md: 'text-sm px-5 py-2.5 sm:py-3 gap-2 min-h-[44px]',
    lg: 'text-base px-6 py-3.5 sm:py-4 gap-2.5 min-h-[48px] shadow-sm',
  };

  const variantClasses = {
    gold:
      'bg-[#FFE19E] text-[#15297C] hover:bg-[#F5D588] active:bg-[#ECC872] border border-[#EAC46E] focus-visible:ring-[#FFE19E] shadow-sm hover:shadow',
    primary:
      'bg-[#15297C] text-white hover:bg-[#0D1B54] active:bg-[#0A1540] border border-[#15297C] hover:border-[#0D1B54] focus-visible:ring-[#15297C] shadow-sm',
    outline:
      'bg-transparent text-[#15297C] border-2 border-[#15297C] hover:bg-[#15297C] hover:text-white active:bg-[#0D1B54] focus-visible:ring-[#15297C]',
    'outline-light':
      'bg-transparent text-white border-2 border-[#FFE19E] hover:bg-[#FFE19E] hover:text-[#15297C] active:bg-[#F5D588] focus-visible:ring-[#FFE19E]',
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled || isLoading}
        aria-label="Realizar pago de servicios jurídicos en plataforma segura"
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin shrink-0 text-current" />
            <span>Redirigiendo...</span>
          </>
        ) : (
          <>
            {showIcon && <CreditCard className="w-4 h-4 shrink-0 text-current opacity-90" />}
            <span>{text}</span>
          </>
        )}
      </button>

      {/* Modal / Notificación: Aviso de redirección segura */}
      {showRedirectNotice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-sm bg-[#0D1B54] text-white p-4 rounded-lg shadow-2xl border border-[#FFE19E]/40 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="w-8 h-8 rounded-full bg-[#FFE19E]/20 text-[#FFE19E] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-[#FFE19E]" />
          </div>
          <div className="flex-1 text-xs">
            <p className="font-semibold text-white text-sm">Conectando con pasarela segura</p>
            <p className="text-slate-200 mt-0.5">
              Serás redirigido a nuestra plataforma segura de pagos en un instante...
            </p>
          </div>
          <Loader2 className="w-4 h-4 text-[#FFE19E] animate-spin shrink-0 mt-1" />
        </div>
      )}

      {/* Modal de URL no disponible temporalmente */}
      {showUnavailableModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="payment-unavailable-title"
        >
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl border border-slate-200 text-slate-800 relative animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setShowUnavailableModal(false)}
              aria-label="Cerrar ventana"
              className="absolute top-4 right-4 p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 id="payment-unavailable-title" className="font-serif font-bold text-lg text-slate-900 leading-tight">
                  Pago en línea temporalmente no disponible
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Actualización en el canal digital de pagos
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              En este momento el enlace de pago directo no se encuentra configurado o está en mantenimiento.
              Por favor comuníquese con nosotros por WhatsApp o llamada telefónica para facilitarle un enlace personalizado o informarle los canales de consignación disponibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={SITE_CONFIG.contacto.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
              >
                <span>Solicitar enlace por WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setShowUnavailableModal(false)}
                className="px-4 py-2.5 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
