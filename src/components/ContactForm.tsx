import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { CheckCircle2, AlertCircle, Send, ShieldCheck, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';
import { SITE_CONFIG } from '../data/siteConfig';

interface ContactFormProps {
  initialServiceSlug?: string;
  onOpenPrivacyModal?: () => void;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialServiceSlug,
  onOpenPrivacyModal,
  className = '',
}) => {
  const initialService = SERVICES.find((s) => s.slug === initialServiceSlug)?.nombre || '';

  const [formData, setFormData] = useState<ContactFormData>({
    nombreCompleto: '',
    email: '',
    telefono: '',
    empresa: '',
    tipoServicio: initialService || '',
    mensaje: '',
    aceptaPolitica: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombreCompleto.trim()) {
      newErrors.nombreCompleto = 'Por favor ingrese su nombre y apellidos.';
    } else if (formData.nombreCompleto.trim().length < 3) {
      newErrors.nombreCompleto = 'El nombre debe contener al menos 3 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingrese su correo electrónico.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Ingrese una dirección de correo electrónico válida.';
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'Por favor ingrese un número de teléfono de contacto.';
    } else if (formData.telefono.trim().length < 7) {
      newErrors.telefono = 'Ingrese un número telefónico válido de al menos 7 dígitos.';
    }

    if (!formData.tipoServicio) {
      newErrors.tipoServicio = 'Seleccione el área del derecho o tipo de servicio requerido.';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'Por favor describa brevemente los antecedentes de su caso.';
    } else if (formData.mensaje.trim().length < 15) {
      newErrors.mensaje = 'El mensaje debe tener al menos 15 caracteres para una adecuada evaluación preliminar.';
    }

    if (!formData.aceptaPolitica) {
      newErrors.aceptaPolitica = 'Debe autorizar el tratamiento de datos personales y política de privacidad.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (errors[name]) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[name];
          return updated;
        });
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[name];
          return updated;
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    const honeypot = (e.currentTarget.elements.namedItem('website_hp') as HTMLInputElement)?.value;
    if (honeypot) {
      // Spam bot detected
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Estructura preparada para conectar con Formspree, Resend, Firebase o backend propio
    try {
      // Simulación de envío con feedback visual profesional
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log('Consulta jurídica preparada para envío:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error al procesar el formulario:', error);
      setErrors({ form: 'Ocurrió un error al procesar su solicitud. Por favor intente nuevamente o contáctenos vía telefónica.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      nombreCompleto: '',
      email: '',
      telefono: '',
      empresa: '',
      tipoServicio: '',
      mensaje: '',
      aceptaPolitica: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div
        id="contact-form-success"
        className="bg-white rounded-lg border border-emerald-200 p-8 sm:p-10 shadow-sm text-center"
      >
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
          Consulta enviada con éxito
        </h3>
        <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
          Hemos recibido la información de su caso. Un abogado especialista de nuestro equipo
          revisará sus antecedentes con estricta confidencialidad y le contactará dentro de las
          próximas 24 horas hábiles.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs text-slate-500 mb-6 text-left max-w-md mx-auto">
          <p className="font-semibold text-slate-700 mb-1">Resumen de registro:</p>
          <p><span className="text-slate-700">Interesado:</span> {formData.nombreCompleto}</p>
          <p><span className="text-slate-700">Email:</span> {formData.email}</p>
          <p><span className="text-slate-700">Área:</span> {formData.tipoServicio}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={SITE_CONFIG.contacto.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chatear por WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#15297C] bg-[#15297C]/5 hover:bg-[#15297C]/10 rounded transition-colors"
          >
            Enviar otra consulta
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="contact-legal-form"
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-lg border border-slate-200 p-6 sm:p-9 shadow-sm ${className}`}
    >
      <div className="border-b border-slate-100 pb-5 mb-6">
        <h3 className="text-xl font-serif font-bold text-slate-900">
          Formulario de Consulta Jurídica
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Diligencie los campos requeridos. Toda la información suministrada goza de reserva legal y estricta confidencialidad.
        </p>
      </div>

      {errors.form && (
        <div className="mb-5 p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errors.form}</span>
        </div>
      )}

      {/* Campo Honeypot invisible para prevención de bots */}
      <input
        type="text"
        name="website_hp"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nombre completo */}
        <div className="sm:col-span-2">
          <label
            htmlFor="nombreCompleto"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Nombre completo <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            placeholder="Ej. Carlos Eduardo Salazar"
            aria-required="true"
            aria-invalid={!!errors.nombreCompleto}
            aria-describedby={errors.nombreCompleto ? 'error-nombreCompleto' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#15297C]/30 focus:border-[#15297C] transition-all ${
              errors.nombreCompleto ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
            }`}
          />
          {errors.nombreCompleto && (
            <p id="error-nombreCompleto" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.nombreCompleto}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Correo electrónico <span className="text-rose-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'error-email' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#15297C]/30 focus:border-[#15297C] transition-all ${
              errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
            }`}
          />
          {errors.email && (
            <p id="error-email" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label
            htmlFor="telefono"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Teléfono de contacto <span className="text-rose-600">*</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+57 300 000 0000"
            aria-required="true"
            aria-invalid={!!errors.telefono}
            aria-describedby={errors.telefono ? 'error-telefono' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#15297C]/30 focus:border-[#15297C] transition-all ${
              errors.telefono ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
            }`}
          />
          {errors.telefono && (
            <p id="error-telefono" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.telefono}</span>
            </p>
          )}
        </div>

        {/* Empresa (opcional) */}
        <div>
          <label
            htmlFor="empresa"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Empresa u organización <span className="text-slate-400 font-normal">(Opcional)</span>
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Razón social o negocio"
            className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-300 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#15297C]/30 focus:border-[#15297C] transition-all"
          />
        </div>

        {/* Tipo de servicio */}
        <div>
          <label
            htmlFor="tipoServicio"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Área de atención requerida <span className="text-rose-600">*</span>
          </label>
          <select
            id="tipoServicio"
            name="tipoServicio"
            value={formData.tipoServicio}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.tipoServicio}
            aria-describedby={errors.tipoServicio ? 'error-tipoServicio' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded border bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#15297C]/30 focus:border-[#15297C] transition-all ${
              errors.tipoServicio ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
            }`}
          >
            <option value="">-- Seleccione un área de práctica --</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.nombre}>
                {s.nombre}
              </option>
            ))}
            <option value="Otra consulta especializada">Otra consulta jurídica especializada</option>
          </select>
          {errors.tipoServicio && (
            <p id="error-tipoServicio" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.tipoServicio}</span>
            </p>
          )}
        </div>

        {/* Mensaje */}
        <div className="sm:col-span-2">
          <label
            htmlFor="mensaje"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Descripción sucinta del caso <span className="text-rose-600">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Por favor describa brevemente la situación jurídica, fechas relevantes o pretensiones..."
            aria-required="true"
            aria-invalid={!!errors.mensaje}
            aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#15297C]/30 focus:border-[#15297C] transition-all resize-y ${
              errors.mensaje ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
            }`}
          />
          {errors.mensaje && (
            <p id="error-mensaje" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.mensaje}</span>
            </p>
          )}
        </div>

        {/* Checkbox de privacidad */}
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              id="aceptaPolitica"
              name="aceptaPolitica"
              checked={formData.aceptaPolitica}
              onChange={handleChange}
              aria-required="true"
              className="mt-1 w-4 h-4 rounded text-[#15297C] border-slate-300 focus:ring-[#15297C] cursor-pointer"
            />
            <span className="text-xs text-slate-600 leading-normal">
              He leído y acepto la{' '}
              <button
                type="button"
                onClick={onOpenPrivacyModal}
                className="text-[#15297C] underline font-semibold hover:text-[#0D1B54]"
              >
                política de tratamiento de datos personales
              </button>{' '}
              y entiendo que la presente consulta preliminar no constituye relación formal cliente-abogado.
            </span>
          </label>
          {errors.aceptaPolitica && (
            <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.aceptaPolitica}</span>
            </p>
          )}
        </div>
      </div>

      {/* Botón de envío */}
      <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Comunicaciones encriptadas y protegidas por secreto profesional.</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href={SITE_CONFIG.contacto.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded shadow-xs transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Agendar Asesoria</span>
          </a>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#15297C] hover:bg-[#0D1B54] text-white font-medium text-sm rounded shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#15297C] disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Procesando...</span>
              </>
            ) : (
              <>
                <span>Enviar formulario</span>
                <Send className="w-4 h-4 text-[#FFE19E]" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
