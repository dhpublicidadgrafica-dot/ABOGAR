/**
 * Configuración y funciones auxiliares para Google Analytics 4 (GA4).
 * ID de medición configurado: G-QVMZ87K9HM
 */

export const GA_MEASUREMENT_ID = 'G-QVMZ87K9HM';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Registra un cambio de página (Page View) en GA4 para aplicaciones SPA (React Router).
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: title || document.title,
      page_location: window.location.href,
      page_path: url,
      send_to: GA_MEASUREMENT_ID,
    });
  }
};

/**
 * Registra un evento personalizado en GA4 (ej. clics en botón de pago, WhatsApp, descargas).
 */
export const trackEvent = (
  action: string,
  category?: string,
  label?: string,
  value?: number,
  additionalParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...additionalParams,
    });
  }
};
