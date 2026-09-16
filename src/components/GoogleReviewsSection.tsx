import React, { useState } from 'react';
import { Star, ExternalLink, CheckCircle2, Quote } from 'lucide-react';

export interface GoogleReviewItem {
  id: string;
  autor: string;
  tiempo: string;
  calificacion: number;
  categoria: 'Laboral' | 'Familia' | 'Migración' | 'Empresarial' | 'Civil';
  texto: string;
  destacado?: boolean;
}

const REVIEWS_DATA: GoogleReviewItem[] = [
  {
    id: 'rev-1',
    autor: 'Sandra Milena Gómez',
    tiempo: 'Hace 3 semanas',
    calificacion: 5,
    categoria: 'Familia',
    texto: 'Excelente atención y profesionalismo. Me asesoraron en un proceso familiar y de divorcio, y todo se resolvió con una rapidez y claridad impresionante. Muy agradecida con la orientación y el respeto brindado por todo el equipo de ABOGAR.',
    destacado: true,
  },
  {
    id: 'rev-2',
    autor: 'Jorge Eliécer Morales',
    tiempo: 'Hace 1 mes',
    calificacion: 5,
    categoria: 'Laboral',
    texto: 'El Dr. Carlos Nava llevó mi proceso laboral con una seriedad y responsabilidad intachable. Siempre me mantuvo informado paso a paso y se logró el mejor resultado. Es un despacho 100% recomendado en Bello y Antioquia.',
    destacado: true,
  },
  {
    id: 'rev-3',
    autor: 'Laura Patricia Valencia',
    tiempo: 'Hace 2 meses',
    calificacion: 5,
    categoria: 'Migración',
    texto: 'Excelente servicio en trámites de visa y regularización migratoria. La asesoría fue clara, transparente y oportuna desde el primer día. Resolvieron cada duda con total conocimiento de la norma.',
    destacado: true,
  },
  {
    id: 'rev-4',
    autor: 'Andrés Felipe Correa',
    tiempo: 'Hace 1 mes',
    calificacion: 5,
    categoria: 'Laboral',
    texto: 'Tenía dudas complejas con un contrato laboral y una liquidación de prestaciones sociales. La asesoría fue precisa, ética y muy humana. Transmiten mucha tranquilidad y confianza.',
  },
  {
    id: 'rev-5',
    autor: 'Corporación Logística & Servicios',
    tiempo: 'Hace 3 meses',
    calificacion: 5,
    categoria: 'Empresarial',
    texto: 'Contamos con la iguala jurídica mensual para nuestra empresa y el respaldo ha sido constante. Respuestas inmediatas, contratos blindados y prevención de riesgos laborales eficaz.',
  },
  {
    id: 'rev-6',
    autor: 'Cristian Camilo Henao',
    tiempo: 'Hace 2 meses',
    calificacion: 5,
    categoria: 'Civil',
    texto: 'Profesionales de primer nivel. Muy puntuales, claros con los honorarios y con un dominio jurídico total. Da mucha seguridad contar con el respaldo de esta firma.',
  },
];

const GOOGLE_REVIEWS_URL = 'https://share.google/oIVlkpxrB0RzZKbZK';

export const GoogleReviewsSection: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todas');

  const categorias = ['Todas', 'Laboral', 'Familia', 'Migración', 'Empresarial', 'Civil'];

  const reviewsFiltradas = categoriaSeleccionada === 'Todas'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.categoria === categoriaSeleccionada);

  return (
    <section id="opiniones-google" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con insignia de Google Reviews */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge de Google */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-4">
            <span className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-xs font-bold text-slate-800 tracking-wide">
              5.0 en Google
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-600 font-medium">
              +460 opiniones reales
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Lo que dicen nuestros clientes en Google
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            La confianza de las personas y empresas a las que representamos es nuestro mayor respaldo profesional.
          </p>

          {/* Filtro por categorías */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoriaSeleccionada(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  categoriaSeleccionada === cat
                    ? 'bg-[#15297C] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsFiltradas.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header de la tarjeta */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar con iniciales */}
                    <div className="w-10 h-10 rounded-full bg-[#15297C]/10 text-[#15297C] font-bold text-sm flex items-center justify-center border border-[#15297C]/20">
                      {review.autor.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {review.autor}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] text-slate-500">{review.tiempo}</span>
                        <span className="text-slate-300">•</span>
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Google
                        </span>
                      </div>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-slate-200 shrink-0" />
                </div>

                {/* Estrellas */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.calificacion)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1.5 text-xs font-semibold text-slate-700">5.0</span>
                </div>

                {/* Texto del testimonio */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{review.texto}"
                </p>
              </div>

              {/* Categoría / etiqueta inferior */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-600">Área: {review.categoria}</span>
                <span className="text-[11px] text-slate-400">Reseña verificada</span>
              </div>
            </div>
          ))}
        </div>

        {/* Barra de acción inferior hacia el enlace de Google */}
        <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="text-sm font-bold text-slate-900">
                Puntuación perfecta de 5.0 en Google
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Conozca las opiniones directas de más de 460 clientes en el perfil oficial de ABOGAR Grupo Jurídico en Google.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-[#15297C] hover:bg-[#0F1E5C] text-white font-semibold text-sm shadow-xs transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-[#FFE19E]" />
              <span>Ver opiniones en Google</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
