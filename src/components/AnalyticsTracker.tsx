import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

/**
 * Componente silencioso que detecta cambios de ruta en React Router
 * y envía automáticamente el evento page_view a Google Analytics (GA4)
 * con el título de la página y la URL canónica actualizada.
 */
export const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Breve retraso para asegurar que document.title haya sido actualizado por SEOHead
    const timer = setTimeout(() => {
      trackPageView(location.pathname + location.search, document.title);
    }, 120);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
};
