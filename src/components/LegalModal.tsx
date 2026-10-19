import React, { useEffect, useState } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(type);

  useEffect(() => {
    setActiveTab(type);
  }, [type]);

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
      <div className="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[88vh] flex flex-col border border-slate-200 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50 rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#15297C]/10 text-[#15297C] flex items-center justify-center shrink-0">
              {activeTab === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="modal-legal-title" className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                {activeTab === 'privacy' ? 'Política de Tratamiento de Datos Personales (Habeas Data)' : 'Términos y Condiciones Generales de Uso'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {SITE_CONFIG.razonSocial} | NIT {SITE_CONFIG.nit}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="px-6 pt-3 pb-0 bg-slate-50/80 border-b border-slate-200 flex gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'border-[#15297C] text-[#15297C]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Política de Privacidad</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'border-[#15297C] text-[#15297C]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Términos y Condiciones</span>
          </button>
        </div>

        {/* Body scrollable */}
        <div className="p-6 overflow-y-auto text-sm text-slate-600 space-y-5 leading-relaxed">
          {activeTab === 'privacy' ? (
            <>
              <div className="bg-slate-100/70 p-3.5 rounded border border-slate-200 text-xs text-slate-700">
                <p className="font-semibold text-slate-900 mb-1">Identificación del Responsable del Tratamiento:</p>
                <p><strong>Razón Social:</strong> {SITE_CONFIG.razonSocial}</p>
                <p><strong>NIT:</strong> {SITE_CONFIG.nit}</p>
                <p><strong>Domicilio Legal:</strong> {SITE_CONFIG.contacto.direccionCompleta}</p>
                <p><strong>Canal Oficial Habeas Data:</strong> <a href={`mailto:${SITE_CONFIG.contacto.email}`} className="text-[#15297C] underline font-medium">{SITE_CONFIG.contacto.email}</a></p>
                <p><strong>Línea de Atención:</strong> <a href={`tel:${SITE_CONFIG.contacto.telefonoLimpio}`} className="text-[#15297C] underline font-medium">{SITE_CONFIG.contacto.telefono}</a></p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  1. Marco Regulatorio y Principios Rectores
                </h4>
                <p>
                  La presente Política de Tratamiento de la Información y Protección de Datos Personales se fundamenta en el <strong>Artículo 15 de la Constitución Política de Colombia</strong>, la <strong>Ley Estatutaria 1581 de 2012</strong>, el <strong>Decreto Reglamentario 1377 de 2013</strong>, el <strong>Decreto Único Reglamentario 1074 de 2015 (Capítulo 25)</strong> y la <strong>Ley 1266 de 2008</strong> (cuando corresponda).
                </p>
                <p className="mt-2">
                  El tratamiento de datos personales en <strong>{SITE_CONFIG.razonSocial}</strong> se rige estrictamente por los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad amparada constitucionalmente.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  2. Datos Personales Objeto de Tratamiento
                </h4>
                <p>
                  A través de este sitio web, formularios de contacto, mensajería WhatsApp corporativa y llamadas telefónicas, recolectamos datos de naturaleza general:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Datos de contacto e identificación: nombres y apellidos completos, correo electrónico, número de teléfono fijo o celular, ciudad o municipio y empresa (si aplica).</li>
                  <li>Información fáctica del asunto: descripción sucinta de antecedentes fácticos, fechas y requerimientos jurídicos suministrados voluntariamente por el usuario para evaluación preliminar.</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500 italic">
                  Nota: No se solicitarán datos biométricos ni sensibles a través de formularios abiertos sin el previo consentimiento expreso e informado del titular.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  3. Finalidad del Tratamiento de los Datos
                </h4>
                <p>
                  Los datos suministrados por los usuarios y consultantes serán tratados exclusivamente para los siguientes fines legítimos:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Atender, analizar preliminarmente y responder a las consultas, solicitudes de asesoría o cotizaciones de servicios letrados remitidas a través de la plataforma.</li>
                  <li>Verificar de manera previa y rigurosa la ausencia de conflictos de interés éticos o legales conforme al Código Disciplinario del Abogado (Ley 1123 de 2007).</li>
                  <li>Agendar citas presenciales en nuestra sede física de Bello – Antioquia o sesiones telemáticas mediante videoconferencia.</li>
                  <li>Enviar propuestas de honorarios, contratos de prestación de servicios profesionales y emitir la facturación electrónica correspondiente.</li>
                  <li>Dar cumplimiento a deberes legales, tributarios, contables y regulatorios impuestos por las autoridades colombianas competentes.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  4. Secreto Profesional y Confidencialidad Reforzada
                </h4>
                <p>
                  En observancia del <strong>Artículo 74 de la Constitución Política de Colombia</strong> y de la <strong>Ley 1123 de 2007</strong>, toda la información confiada por el consultante o cliente a los profesionales de <strong>{SITE_CONFIG.razonSocial}</strong> se encuentra bajo el amparo inviolable del <strong>secreto profesional del abogado</strong>.
                </p>
                <p className="mt-2">
                  Bajo ninguna circunstancia vendemos, cedemos, transferimos ni comercializamos bases de datos ni datos personales a terceros con fines comerciales o de publicidad masiva.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  5. Derechos de los Titulares (Derechos ARCO)
                </h4>
                <p>
                  De conformidad con el Artículo 8 de la Ley 1581 de 2012, usted como titular de datos personales ostenta los siguientes derechos:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente a {SITE_CONFIG.razonSocial} en su condición de Responsable del Tratamiento.</li>
                  <li><strong>Solicitar prueba de la autorización</strong> otorgada para el tratamiento, salvo cuando la ley exceptúe su exigencia.</li>
                  <li><strong>Ser informado</strong> por el Despacho, previa solicitud formal, acerca del uso conferido a sus datos personales.</li>
                  <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC) por presuntas infracciones al régimen de protección de datos personales.</li>
                  <li><strong>Revocar la autorización y/o solicitar la supresión del dato</strong> cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales o legales, o cuando no exista un deber legal o contractual de permanencia.</li>
                  <li><strong>Acceder en forma gratuita</strong> a sus datos personales objeto de tratamiento.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  6. Procedimiento para el Ejercicio de Derechos de Habeas Data
                </h4>
                <p>
                  Para ejercer sus derechos de consulta, actualización, rectificación o supresión de datos, el titular o sus causahabientes podrán radicar comunicación formal a través del canal oficial:
                </p>
                <div className="bg-slate-50 p-3 rounded mt-2 border border-slate-200 text-xs">
                  <p><strong>Correo Electrónico Oficial:</strong> <a href={`mailto:${SITE_CONFIG.contacto.email}`} className="text-[#15297C] underline font-medium">{SITE_CONFIG.contacto.email}</a></p>
                  <p><strong>Asunto del mensaje:</strong> Ejercicio de Derechos de Habeas Data - [Nombre del Titular]</p>
                  <p className="mt-1">
                    La comunicación deberá contener: nombre completo, documento de identidad, dirección o correo de notificación, descripción clara de los hechos y la pretensión concreta.
                  </p>
                </div>
                <p className="mt-2">
                  <strong>Términos de respuesta:</strong> Las consultas serán atendidas en un término máximo de <strong>diez (10) días hábiles</strong> contados a partir de su recepción. Los reclamos (actualización, corrección o supresión) serán resueltos en un término máximo de <strong>quince (15) días hábiles</strong>, conforme a lo establecido en los Artículos 14 y 15 de la Ley 1581 de 2012.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  7. Medidas de Seguridad y Vigencia
                </h4>
                <p>
                  {SITE_CONFIG.razonSocial} implementa directrices tecnológicas y organizacionales para salvaguardar la integridad, confidencialidad y disponibilidad de la información almacenada, previniendo accesos no autorizados, adulteraciones o pérdidas de datos.
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  La presente política rige a partir de su publicación oficial en este portal y permanecerá vigente mientras subsista el objeto social y la relación jurídica con los titulares de la información.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-slate-100/70 p-3.5 rounded border border-slate-200 text-xs text-slate-700">
                <p className="font-semibold text-slate-900 mb-1">Información General del Titular del Portal:</p>
                <p><strong>Firma Operadora:</strong> {SITE_CONFIG.razonSocial}</p>
                <p><strong>NIT:</strong> {SITE_CONFIG.nit}</p>
                <p><strong>Sede Principal:</strong> {SITE_CONFIG.contacto.direccionCompleta}</p>
                <p><strong>Contacto Oficial:</strong> {SITE_CONFIG.contacto.email} | {SITE_CONFIG.contacto.telefono}</p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  1. Ámbito de Aplicación y Aceptación
                </h4>
                <p>
                  El acceso, navegación y uso del portal web <strong>https://abogargroup.com</strong> atribuye la condición de usuario e implica la adhesión plena, consciente y sin reservas a las presentes condiciones generales de uso. Si el usuario no estuviere conforme con los términos aquí previstos, deberá abstenerse de utilizar el sitio web.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  2. Carácter Informativo y Ausencia de Relación Formal Cliente-Abogado
                </h4>
                <p>
                  Todos los contenidos publicados en este portal, incluyendo artículos descriptivos, resúmenes jurisprudenciales, preguntas frecuentes, descripciones de servicios y cálculos ilustrativos, tienen carácter <strong>estrictamente informativo, divulgativo y pedagógico general</strong>.
                </p>
                <p className="mt-2">
                  En ningún caso el contenido publicado constituye concepto jurídico vinculante, dictamen letrado particular ni sustituto de la asesoría técnica formal con un abogado titulado adaptada a las particularidades de cada caso concreto.
                </p>
                <div className="bg-amber-50/70 border-l-4 border-[#15297C] p-3 my-2 text-xs text-slate-700">
                  <strong className="text-slate-900 block mb-0.5">Precisión Deontológica Esencial:</strong>
                  El simple envío de mensajes mediante formularios, WhatsApp o correos electrónicos <strong>NO perfecciona una relación contractual cliente-abogado</strong> ni impone deberes de representación o radicación procesal a <strong>{SITE_CONFIG.razonSocial}</strong>. Dicha relación jurídica únicamente nace a partir de la firma formal de la propuesta de servicios, la suscripción del respectivo contrato de prestación de servicios profesionales y el otorgamiento del poder especial conferido con las facultades de ley.
                </div>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  3. Propiedad Intelectual e Industrial
                </h4>
                <p>
                  La totalidad de los elementos que integran este sitio web (textos, signos distintivos, marcas comerciales, logotipos, emblemas, arquitectura de información, software, imágenes corporativas y diseño audiovisual) son de propiedad exclusiva de <strong>{SITE_CONFIG.razonSocial}</strong> o se cuenta con las autorizaciones y licencias legítimas para su uso.
                </p>
                <p className="mt-2">
                  Queda estrictamente prohibida la reproducción total o parcial, transformación, distribución, comunicación pública o explotación con fines lucrativos de dichos elementos sin la previa autorización expresa y por escrito del titular.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  4. Canales de Pago Seguro de Honorarios y Consultas
                </h4>
                <p>
                  Los pagos en línea de consultas jurídicas, diagnósticos especializados, igualas empresariales o abonos de honorarios profesionales procesados mediante los enlaces y botones habilitados en este portal son administrados a través de pasarelas de pago seguras y certificadas en Colombia.
                </p>
                <p className="mt-2">
                  Las condiciones tarifarias, alcances de las etapas procesales y modalidades de pago (anticipos, honorarios de éxito o cuotas periódicas) se rigen puntualmente por el contrato y propuesta de servicios previamente concertada y aceptada entre el cliente y el despacho.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  5. Limitación de Responsabilidad
                </h4>
                <p>
                  <strong>{SITE_CONFIG.razonSocial}</strong> propende por mantener la exactitud y vigencia de los datos publicados; sin embargo, no asume responsabilidad civil ni disciplinaria por:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Actuaciones, omisiones o decisiones autónomas adoptadas unilateralmente por usuarios basándose en textos generales del portal sin el debido acompañamiento letrado.</li>
                  <li>Interrupciones temporales del servicio debidas a fallas de conectividad, mantenimiento técnico o causas de fuerza mayor o caso fortuito.</li>
                  <li>Eventuales modificaciones legales sobrevenidas que no hayan alcanzado a reflejarse inmediatamente en artículos informativos publicados con anterioridad.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-slate-900 mb-1.5">
                  6. Ley Aplicable y Jurisdicción
                </h4>
                <p>
                  Las presentes Condiciones de Uso y cualquier controversia que de ellas se derive se regirán e interpretarán de conformidad con las <strong>leyes de la República de Colombia</strong>.
                </p>
                <p className="mt-2">
                  Para dirimir cualquier controversia jurídica o reclamación legal derivada del uso del sitio web, las partes se someten a la jurisdicción de los jueces competentes en el municipio de <strong>Bello o el Distrito Especial de Medellín, Departamento de Antioquia, Colombia</strong>.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-lg flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Vigente para el año en curso | Sede Bello, Antioquia
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 text-sm font-semibold text-white bg-[#15297C] hover:bg-[#0D1B54] rounded transition-colors cursor-pointer"
          >
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
