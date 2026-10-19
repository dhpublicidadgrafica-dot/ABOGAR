import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SITE_CONFIG } from '../data/siteConfig';
import { ShieldCheck, FileText, ArrowLeft, Mail, Phone, MapPin, Scale } from 'lucide-react';

export const Legales: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  useEffect(() => {
    if (location.pathname.includes('terminos')) {
      setActiveTab('terms');
    } else {
      setActiveTab('privacy');
    }
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title={`Políticas Legales y Habeas Data | ${SITE_CONFIG.nombreDespacho}`}
        description="Marco legal, política de tratamiento de datos personales (Habeas Data) y términos de uso de ABOGAR GRUPO JURÍDICO S.A.S."
        canonicalPath="/legales"
        ogType="website"
        noIndex={true}
      />

      {/* Hero Header */}
      <section className="bg-[#0D1B54] text-white py-14 sm:py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#FFE19E] hover:underline mb-4 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al inicio</span>
          </Link>

          <span className="font-mono text-xs uppercase tracking-widest text-[#FFE19E] font-semibold block mb-2">
            Marco Normativo y Transparencia
          </span>

          <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Información Legal y Tratamiento de Datos
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Consulte la Política de Privacidad (Habeas Data) y los Términos y Condiciones que rigen el uso del portal oficial de <strong>{SITE_CONFIG.razonSocial}</strong>.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex border-b border-slate-200 bg-white rounded-t-lg shadow-xs overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'privacy'
                  ? 'border-[#15297C] text-[#15297C] bg-slate-50/60'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Política de Privacidad (Habeas Data)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'terms'
                  ? 'border-[#15297C] text-[#15297C] bg-slate-50/60'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Términos y Condiciones de Uso</span>
            </button>
          </div>

          {/* Tab Content Box */}
          <div className="bg-white p-6 sm:p-10 rounded-b-lg border border-t-0 border-slate-200 shadow-xs text-slate-700 space-y-6 leading-relaxed text-sm">
            {activeTab === 'privacy' ? (
              <>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-700">
                  <p className="font-semibold text-slate-900 mb-1 text-sm">Identificación del Responsable del Tratamiento:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    <p><strong>Razón Social:</strong> {SITE_CONFIG.razonSocial}</p>
                    <p><strong>NIT:</strong> {SITE_CONFIG.nit}</p>
                    <p className="sm:col-span-2"><strong>Domicilio Legal:</strong> {SITE_CONFIG.contacto.direccionCompleta}</p>
                    <p><strong>Canal Oficial Habeas Data:</strong> <a href={`mailto:${SITE_CONFIG.contacto.email}`} className="text-[#15297C] underline">{SITE_CONFIG.contacto.email}</a></p>
                    <p><strong>Línea Telefónica:</strong> <a href={`tel:${SITE_CONFIG.contacto.telefonoLimpio}`} className="text-[#15297C] underline">{SITE_CONFIG.contacto.telefono}</a></p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    1. Marco Regulatorio y Principios Rectores
                  </h2>
                  <p>
                    La presente Política de Tratamiento de la Información y Protección de Datos Personales se fundamenta en el <strong>Artículo 15 de la Constitución Política de Colombia</strong>, la <strong>Ley Estatutaria 1581 de 2012</strong>, el <strong>Decreto Reglamentario 1377 de 2013</strong>, el <strong>Decreto Único Reglamentario 1074 de 2015 (Capítulo 25)</strong> y la <strong>Ley 1266 de 2008</strong> (cuando corresponda).
                  </p>
                  <p className="mt-2">
                    El tratamiento de datos personales en <strong>{SITE_CONFIG.razonSocial}</strong> se rige estrictamente por los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad amparada constitucionalmente.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    2. Datos Personales Recolectados
                  </h2>
                  <p>
                    A través de nuestro portal, formularios de contacto, mensajería instantánea (WhatsApp) y comunicaciones telefónicas, recopilamos datos personales de carácter general:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Nombres y apellidos completos.</li>
                    <li>Dirección de correo electrónico y número de teléfono móvil o fijo.</li>
                    <li>Municipio, ciudad de residencia o radicación del caso y empresa (en consultas corporativas).</li>
                    <li>Antecedentes fácticos y síntesis jurídica aportada voluntariamente para la evaluación preliminar.</li>
                  </ul>
                  <p className="mt-2 text-xs text-slate-500 italic">
                    Aclaración: No recolectamos información sensible ni biométrica a través de formularios sin su previa autorización expresa e inequívoca.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    3. Finalidad del Tratamiento de los Datos
                  </h2>
                  <p>
                    Los datos suministrados serán incorporados a las bases de datos de {SITE_CONFIG.razonSocial} y tratados exclusivamente con los siguientes propósitos legítimos:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Atender, analizar preliminarmente y responder a las consultas, solicitudes de asesoría o cotizaciones de servicios letrados.</li>
                    <li>Verificar de manera previa y rigurosa la ausencia de conflictos de interés éticos o legales conforme al Código Disciplinario del Abogado (Ley 1123 de 2007).</li>
                    <li>Agendar citas presenciales en la oficina de Bello – Antioquia o sesiones telemáticas mediante plataformas de videoconferencia.</li>
                    <li>Formalizar la propuesta de servicios profesionales, liquidar honorarios y emitir la correspondiente facturación electrónica.</li>
                    <li>Dar estricto cumplimiento a los deberes legales, fiscales, contables y regulatorios ante las autoridades colombianas competentes.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    4. Secreto Profesional y Deber de Confidencialidad
                  </h2>
                  <p>
                    En virtud del <strong>Artículo 74 de la Constitución Política de Colombia</strong> y de la <strong>Ley 1123 de 2007</strong>, todas las comunicaciones y documentos confiados por los usuarios y clientes a los profesionales de {SITE_CONFIG.razonSocial} gozan de la garantía inviolable del <strong>secreto profesional</strong>.
                  </p>
                  <p className="mt-2">
                    <strong>{SITE_CONFIG.razonSocial}</strong> no comercializa, no alquila y no cede sus bases de datos a terceras entidades con fines publicitarios o lucrativos ajenos a la actividad jurídica contratada.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    5. Derechos de los Titulares (Derechos ARCO)
                  </h2>
                  <p>
                    Conforme al Artículo 8 de la Ley 1581 de 2012, usted tiene derecho a:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Conocer, actualizar y rectificar sus datos personales ante {SITE_CONFIG.razonSocial}.</li>
                    <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
                    <li>Ser informado respecto del uso conferido a sus datos personales.</li>
                    <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
                    <li>Revocar la autorización y/o solicitar la supresión del dato en los términos y salvedades de ley.</li>
                    <li>Acceder en forma gratuita a sus datos personales objeto de tratamiento.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    6. Procedimiento para Consultas y Reclamos
                  </h2>
                  <p>
                    Para ejercer sus derechos de Habeas Data, remita una solicitud escrita al canal oficial:
                  </p>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200 mt-2 text-xs">
                    <p><strong>Correo electrónico:</strong> <a href={`mailto:${SITE_CONFIG.contacto.email}`} className="text-[#15297C] underline font-medium">{SITE_CONFIG.contacto.email}</a></p>
                    <p><strong>Asunto:</strong> Solicitud de Habeas Data - [Nombre y Cédula del Titular]</p>
                    <p className="mt-1">
                      El plazo máximo para resolver <strong>consultas es de diez (10) días hábiles</strong>. Para <strong>reclamos, rectificaciones o supresiones, el término es de quince (15) días hábiles</strong> contados a partir de su recibo, conforme a los Arts. 14 y 15 de la Ley 1581 de 2012.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-700">
                  <p className="font-semibold text-slate-900 mb-1 text-sm">Información General del Operador:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    <p><strong>Razón Social:</strong> {SITE_CONFIG.razonSocial}</p>
                    <p><strong>NIT:</strong> {SITE_CONFIG.nit}</p>
                    <p className="sm:col-span-2"><strong>Sede Principal:</strong> {SITE_CONFIG.contacto.direccionCompleta}</p>
                    <p><strong>Contacto Oficial:</strong> {SITE_CONFIG.contacto.email}</p>
                    <p><strong>Teléfono:</strong> {SITE_CONFIG.contacto.telefono}</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    1. Aceptación y Ámbito de Aplicación
                  </h2>
                  <p>
                    El ingreso, consulta y navegación en este sitio web atribuye la condición de usuario e implica la aceptación plena de estos Términos y Condiciones Generales. Si usted no está de acuerdo con las disposiciones aquí contenidas, deberá abstenerse de hacer uso del portal.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    2. Carácter Informativo y Ausencia de Relación Cliente-Abogado
                  </h2>
                  <p>
                    Todo el contenido, resúmenes normativos, análisis jurisprudenciales, guías explicativas y preguntas frecuentes publicadas en este portal son de <strong>carácter estrictamente pedagógico e informativo general</strong>.
                  </p>
                  <p className="mt-2">
                    En ningún caso dicho contenido constituye dictamen formal ni concepto jurídico vinculante, ni reemplaza la consulta técnica directa con un abogado titulado adaptada a los hechos particulares de cada caso.
                  </p>
                  <div className="bg-amber-50/80 border-l-4 border-[#15297C] p-3.5 my-3 text-xs text-slate-700">
                    <strong className="text-slate-900 block mb-1">Aviso Deontológico Fundamental:</strong>
                    El simple envío de mensajes, formularios de contacto o correos electrónicos <strong>NO perfecciona una relación contractual cliente-abogado</strong> ni impone al despacho obligaciones de representación o defensa técnica. La relación profesional únicamente nace a partir de la firma de la propuesta de servicios, la suscripción del contrato de mandato o prestación de servicios y el otorgamiento del correspondiente poder especial.
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    3. Propiedad Intelectual e Industrial
                  </h2>
                  <p>
                    Todos los textos, logotipos, marcas comerciales, signos distintivos, estructura gráfica y software de este sitio son propiedad exclusiva de <strong>{SITE_CONFIG.razonSocial}</strong>. Queda expresamente prohibida su copia, distribución, reproducción parcial o total sin el previo consentimiento por escrito del titular.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    4. Canales de Pago Seguro de Honorarios
                  </h2>
                  <p>
                    Los pagos de consultas jurídicas o cuotas de honorarios procesados mediante los enlaces autorizados en el sitio web se realizan a través de pasarelas de pago seguras y certificadas. Las tarifas y modalidades de pago corresponden puntualmente a lo concertado previamente en las propuestas de servicios con cada cliente.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    5. Ley Aplicable y Jurisdicción
                  </h2>
                  <p>
                    Las presentes condiciones se rigen en su totalidad por las <strong>leyes de la República de Colombia</strong>. Cualquier divergencia o controversia legal será resuelta ante los jueces competentes con jurisdicción en el municipio de <strong>Bello o el Distrito Especial de Medellín, Departamento de Antioquia, Colombia</strong>.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
