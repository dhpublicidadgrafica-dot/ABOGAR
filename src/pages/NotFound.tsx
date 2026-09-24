import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { Button } from '../components/Button';
import { Scale, Home, Briefcase, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title={`Página no encontrada | ${SITE_CONFIG.nombreDespacho}`}
        description="La página solicitada no se encuentra disponible o ha sido reubicada."
        canonicalPath="/404"
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-[#15297C]/10 text-[#15297C] flex items-center justify-center mx-auto mb-6">
            <Scale className="w-8 h-8" />
          </div>

          <span className="font-mono text-sm uppercase tracking-widest text-[#15297C] font-semibold bg-[#15297C]/5 px-3 py-1 rounded-full">
            Error 404
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-3">
            Página no encontrada
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
            El enlace al que ha intentado acceder no existe o la dirección ha cambiado. Le invitamos a
            retornar a las secciones principales del despacho.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              to="/"
              variant="primary"
              size="md"
              icon={<Home className="w-4 h-4 ml-1" />}
            >
              Volver al Inicio
            </Button>

            <Button
              to="/servicios"
              variant="outline"
              size="md"
              icon={<Briefcase className="w-4 h-4 ml-1" />}
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
