import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-legal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col border border-slate-200 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50 rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#15297C]/10 text-[#15297C] flex items-center justify-center">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="modal-legal-title" className="font-serif text-xl font-bold text-slate-900">
                {type === 'privacy' ? 'Política de Privacidad y Tratamiento de Datos' : 'Términos y Condiciones de Uso'}
              </h3>
              <p className="text-xs text-slate-500">{SITE_CONFIG.razonSocial}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body scrollable */}
        <div className="p-6 overflow-y-auto text-sm text-slate-600 space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-slate-800">
                1. Compromiso institucional y marco legal
              </p>
              <p>
                {SITE_CONFIG.razonSocial} está comprometido con la debida protección, confidencialidad y custodia de los datos personales recopilados a través de este portal, en estricto cumplimiento de la Ley Estatutaria 1581 de 2012 y decretos reglamentarios vigentes.
              </p>
              <p className="font-semibold text-slate-800">
                2. Finalidad del tratamiento de datos
              </p>
              <p>
                Los datos suministrados en formularios de contacto (nombre, email, teléfono y descripción del caso) serán utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responder a requerimientos de consulta jurídica preliminar.</li>
                <li>Verificar la inexistencia de conflictos de interés profesionales.</li>
                <li>Agendar citas presenciales o telemáticas con el equipo de abogados.</li>
                <li>Mantener contacto directo durante la evaluación del caso.</li>
              </ul>
              <p className="font-semibold text-slate-800">
                3. Secreto profesional y no cesión a terceros
              </p>
              <p>
                Bajo ninguna circunstancia comercializamos, alquilamos ni transferimos sus datos personales a terceros con fines publicitarios. Toda información remitida se ampara en el secreto profesional del abogado.
              </p>
              <p className="font-semibold text-slate-800">
                4. Derechos de los titulares (Habeas Data)
              </p>
              <p>
                Usted podrá ejercer en cualquier momento sus derechos de conocimiento, actualización, rectificación o supresión de sus datos mediante solicitud dirigida al correo electrónico: <strong className="text-slate-800">{SITE_CONFIG.contacto.email}</strong>.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-800">
                1. Carácter informativo del contenido
              </p>
              <p>
                El material expuesto en este sitio web tiene propósitos meramente ilustrativos e informativos de carácter general. En ningún caso dicho contenido constituye concepto jurídico vinculante ni sustituye la consulta técnica formal con un profesional del derecho.
              </p>
              <p className="font-semibold text-slate-800">
                2. Ausencia de relación cliente-abogado
              </p>
              <p>
                El simple envío de mensajes, formularios o correos electrónicos a través de este sitio no crea de forma automática una relación profesional ni formal entre el remitente y {SITE_CONFIG.nombreDespacho}. Dicha vinculación se perfeccionará exclusivamente mediante la suscripción del contrato de mandato o prestación de servicios profesionales correspondiente.
              </p>
              <p className="font-semibold text-slate-800">
                3. Propiedad intelectual
              </p>
              <p>
                Todos los textos, logotipos, imágenes corporativas y marcas presentados en este sitio web son propiedad exclusiva de {SITE_CONFIG.razonSocial} y se encuentran protegidos por la legislación aplicable en materia de derechos de autor y propiedad industrial.
              </p>
              <p className="font-semibold text-slate-800">
                4. Limitación de responsabilidad
              </p>
              <p>
                {SITE_CONFIG.nombreDespacho} procura mantener la información legal actualizada, no obstante, las normas jurídicas y criterios jurisprudenciales varían continuamente. El despacho no se hace responsable por actuaciones adoptadas de forma unilateral por usuarios sin la debida asesoría letrada.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-lg flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-white bg-[#15297C] hover:bg-[#0D1B54] rounded transition-colors"
          >
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
