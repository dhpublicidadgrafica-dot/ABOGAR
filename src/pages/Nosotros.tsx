import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { LawyerCard } from '../components/LawyerCard';
import { CTASection } from '../components/CTASection';
import { SEOHead } from '../components/SEOHead';
import { ServiceIcon } from '../components/ServiceIcon';
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  BookOpen,
  Users,
  Compass,
  CheckCircle,
  Camera,
  UploadCloud,
  CheckCircle2,
  Save,
  Link as LinkIcon,
  Check,
  X,
  Loader2,
} from 'lucide-react';
import { saveImageLocallyAndServer, syncLocalImagesWithServer } from '../utils/imageStorage';

export const Nosotros: React.FC = () => {
  const directorFileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [isDirectorDragging, setIsDirectorDragging] = React.useState(false);
  const [showDirectorModal, setShowDirectorModal] = React.useState(false);
  const [directorUrlInput, setDirectorUrlInput] = React.useState('');
  const [isDirectorLoading, setIsDirectorLoading] = React.useState(false);
  const [directorModalMsg, setDirectorModalMsg] = React.useState<{ text: string; isError?: boolean } | null>(null);
  const [syncStatus, setSyncStatus] = React.useState<string | null>(null);
  const [photoSrc, setPhotoSrc] = React.useState<string>('/carlos-nava.jpg');

  // Al cargar, sincronizar automáticamente cualquier imagen previa con el backend del proyecto
  React.useEffect(() => {
    syncLocalImagesWithServer().then(({ synced }) => {
      if (synced > 0) {
        setSyncStatus(`✓ ${synced} imagen(es) guardada(s) permanentemente en /public/images/`);
      }
    });
  }, []);

  const handleDirectorImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setIsDirectorLoading(true);
    setDirectorModalMsg({ text: 'Guardando foto...' });
    const reader = new FileReader();
    reader.onload = async (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoSrc(result);
        setSyncStatus('Guardando en los archivos del proyecto...');
        const res = await saveImageLocallyAndServer('abogar_director_photo', result, 'carlos-nava.jpg');
        setIsDirectorLoading(false);
        if (res.success) {
          setSyncStatus('✓ Imagen guardada permanentemente en el proyecto (/public/images/carlos-nava.jpg)');
          setDirectorModalMsg({ text: '✓ Guardada permanentemente en /public/images/' });
          setTimeout(() => {
            setShowDirectorModal(false);
            setDirectorModalMsg(null);
          }, 1500);
        } else {
          setSyncStatus('✓ Imagen guardada en el navegador');
          setDirectorModalMsg({ text: res.error || 'Guardada en navegador', isError: true });
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDirectorUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = directorUrlInput.trim();
    if (!trimmed) return;
    if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
      setDirectorModalMsg({ text: 'Por favor ingresa un enlace válido (https://)', isError: true });
      return;
    }

    setIsDirectorLoading(true);
    setDirectorModalMsg({ text: 'Descargando y guardando en carpeta /public/...' });
    try {
      const res = await saveImageLocallyAndServer('abogar_director_photo', trimmed, 'carlos-nava.jpg');
      setIsDirectorLoading(false);
      if (res.success) {
        const finalUrl = res.url || trimmed;
        setPhotoSrc(finalUrl);
        setSyncStatus('✓ Imagen guardada permanentemente en /public/images/carlos-nava.jpg');
        setDirectorModalMsg({ text: '✓ Guardada permanentemente en /public/images/' });
        setTimeout(() => {
          setShowDirectorModal(false);
          setDirectorModalMsg(null);
          setDirectorUrlInput('');
        }, 1500);
      } else {
        setPhotoSrc(trimmed);
        setDirectorModalMsg({ text: res.error || 'Imagen cargada desde enlace', isError: !res.success });
      }
    } catch {
      setIsDirectorLoading(false);
      setPhotoSrc(trimmed);
      setDirectorModalMsg({ text: 'Cargada desde enlace' });
    }
  };

  const handleDirectorDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDirectorDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleDirectorImageFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <>
      <SEOHead
        title={`Nosotros | ${SITE_CONFIG.nombreDespacho}`}
        description="Conozca la trayectoria, visión ética, valores fundamentales y el equipo de abogados especialistas de nuestro despacho."
      />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100/80 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Nosotros' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-[#0D1B54] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Despacho corporativo y sala de juntas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFE19E] border border-[#FFE19E]/30 text-xs uppercase tracking-widest font-semibold mb-4">
            Institucional
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Conozca nuestro despacho
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Experiencia jurídica, visión estratégica y compromiso con nuestros clientes.
          </p>
        </div>
      </section>

      {/* Sección Historia y Filosofía */}
      <section id="historia" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#15297C] bg-[#15297C]/5 px-3 py-1 rounded-full">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Nuestra Trayectoria</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                ABOGAR GRUPO JURÍDICO S.A.S
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Es una firma de abogados con sede en Bello (Area Metropolitana de Medellín), Antioquia, dedicada a la práctica del derecho laboral y pensional, derecho de familia, registro civil y nacionalidad, litigio civil y comercial, y acciones de tutela.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Contamos con un equipo de profesionales comprometidos con brindar un servicio jurídico personalizado, ágil y confiable, tanto en la representación de causas individuales como en la asesoría permanente a empresas a través de contratos de iguala.
              </p>
            </div>

            {/* Photo column with stylish legal frame */}
            <div className="lg:col-span-5 relative">
              <input
                ref={directorFileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    handleDirectorImageFile(e.target.files[0]);
                  }
                }}
              />
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDirectorDragging(true);
                }}
                onDragLeave={() => setIsDirectorDragging(false)}
                onDrop={handleDirectorDrop}
                className="group relative rounded-lg overflow-hidden border border-slate-200 shadow-xl aspect-4/5 bg-slate-100 transition-all duration-200"
              >
                <img
                  src={photoSrc}
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = "/carlos-nava.jpg";
                    if (target.src !== fallback) {
                      target.src = fallback;
                    }
                  }}
                  alt="Abogado y Asesor Estratégico - ABOGAR Grupo Jurídico"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Hover trigger to change photo */}
                <button
                  type="button"
                  onClick={() => {
                    setDirectorModalMsg(null);
                    setShowDirectorModal(true);
                  }}
                  title="Cambiar foto del director o ingresar enlace"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex items-center gap-1.5 px-3 py-2 rounded bg-black/70 hover:bg-[#15297C] text-white text-xs font-medium backdrop-blur-xs cursor-pointer shadow-md"
                >
                  <Camera className="w-3.5 h-3.5 text-[#FFE19E]" />
                  <span>Cambiar foto</span>
                </button>

                {/* Drag overlay */}
                {isDirectorDragging && (
                  <div className="absolute inset-0 bg-[#15297C]/80 backdrop-blur-xs z-20 flex flex-col items-center justify-center text-white p-4 border-2 border-dashed border-[#FFE19E]">
                    <UploadCloud className="w-10 h-10 text-[#FFE19E] mb-2 animate-bounce" />
                    <p className="text-sm font-semibold text-center">Suelta la fotografía aquí</p>
                    <p className="text-xs text-slate-200 text-center mt-1">Se guardará en /public/images/</p>
                  </div>
                )}

                {/* Director photo modal (URL or file) */}
                {showDirectorModal && (
                  <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xs z-30 flex flex-col p-5 text-white justify-between animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#FFE19E]">
                        <Camera className="w-4 h-4" />
                        <span>Actualizar foto del Director</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setShowDirectorModal(false);
                          setDirectorModalMsg(null);
                        }}
                        className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="my-auto space-y-3">
                      {/* Option 1: URL input */}
                      <form onSubmit={handleDirectorUrlSubmit} className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                          <LinkIcon className="w-3.5 h-3.5 text-[#FFE19E]" />
                          <span>Pegar enlace directo (URL de imagen):</span>
                        </label>
                        <div className="flex gap-1.5">
                          <input
                            type="url"
                            placeholder="https://..."
                            value={directorUrlInput}
                            onChange={(e) => setDirectorUrlInput(e.target.value)}
                            className="flex-1 bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#FFE19E]"
                          />
                          <button
                            type="submit"
                            disabled={isDirectorLoading || !directorUrlInput.trim()}
                            className="bg-[#15297C] hover:bg-[#1a3399] disabled:opacity-50 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            {isDirectorLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                            <span>Guardar</span>
                          </button>
                        </div>
                      </form>

                      <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase font-bold">
                        <span className="flex-1 border-b border-slate-700"></span>
                        <span>o</span>
                        <span className="flex-1 border-b border-slate-700"></span>
                      </div>

                      {/* Option 2: Upload file */}
                      <button
                        type="button"
                        onClick={() => directorFileInputRef.current?.click()}
                        className="w-full py-2.5 px-3 border border-dashed border-slate-600 hover:border-[#FFE19E] hover:bg-slate-800/60 rounded text-xs text-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <UploadCloud className="w-4 h-4 text-[#FFE19E]" />
                        <span>Subir archivo desde el equipo</span>
                      </button>

                      {directorModalMsg && (
                        <div
                          className={`text-xs p-2 rounded text-center font-medium ${
                            directorModalMsg.isError ? 'bg-rose-950/70 text-rose-300 border border-rose-800/50' : 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/50'
                          }`}
                        >
                          {directorModalMsg.text}
                        </div>
                      )}
                    </div>

                    <p className="text-[11px] text-slate-400 text-center">
                      Se guardará permanentemente en <code className="text-[#FFE19E]">/public/images/carlos-nava.jpg</code>
                    </p>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B54]/80 via-[#0D1B54]/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-white/95 backdrop-blur-xs border border-white/50 shadow-sm pointer-events-none">
                  <p className="font-serif text-sm font-bold text-slate-900">
                    Abogado y Asesor Estratégico
                  </p>
                  <p className="text-xs text-slate-600">
                    CEO y Fundador de ABOGAR GRUPO JURÍDICO S.A.S.
                  </p>
                </div>
              </div>

              {/* Estado de sincronización y persistencia de foto */}
              {syncStatus && (
                <div className="mt-3 flex items-center justify-between text-xs px-3 py-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-xs">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{syncStatus}</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Misión y Visión */}
      <section id="mision-vision" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C]">
                  Propósito Fundamental
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1 mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-3">
                  Brindamos acompañamiento jurídico integral y de calidad a personas naturales y empresas, con especial fortaleza en derecho laboral y pensional, así como en derecho de familia, civil, comercial y acciones constitucionales.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  Nuestro compromiso es representar los intereses de nuestros clientes con rigor técnico, ética profesional y cercanía humana, buscando siempre soluciones efectivas y oportunas a sus necesidades legales.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-[#FFE19E]/30 text-[#15297C] flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#15297C]">
                  Horizonte Estratégico
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1 mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Ser reconocidos en Antioquia y a nivel nacional como un grupo jurídico de referencia en derecho laboral, pensional y de familia, distinguido por la excelencia en el servicio, la solidez de sus resultados y la confianza que generamos en nuestros clientes, consolidando relaciones de largo plazo a través de la asesoría legal externa (iguala) y la representación judicial especializada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Valores (6 tarjetas) */}
      <section id="valores" className="py-20 bg-[#FFE19E] border-y border-[#EAC46E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nuestros Valores Institucionales"
            subtitle="Principios innegociables que orientan cada actuación profesional, dictamen y representación en juicio."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_CONFIG.valores.map((val) => (
              <div
                key={val.id}
                className="p-7 rounded-lg bg-white border border-[#15297C]/10 shadow-xs hover:border-[#15297C]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded bg-[#15297C]/10 text-[#15297C] flex items-center justify-center mb-4">
                  <ServiceIcon name={val.icono} className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                  {val.titulo}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {val.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Equipo de Abogados */}
      <section id="equipo" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Abogados Especialistas"
            subtitle="Profesionales con amplia trayectoria, formación académica continua y vocación de servicio."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.equipo.map((lawyer) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sección Nosotros */}
      <CTASection
        title="¿Tiene una situación jurídica que necesita atención?"
        subtitle="Nuestro equipo evaluará los antecedentes de su caso con absoluta reserva para orientarle de forma inmediata."
      />
    </>
  );
};
