import React, { useState, useEffect, useRef } from 'react';
import { Lawyer } from '../types';
import { Camera, UploadCloud, Link as LinkIcon, Check, X, Loader2, Scale } from 'lucide-react';
import { saveImageLocallyAndServer } from '../utils/imageStorage';

interface LawyerCardProps {
  lawyer: Lawyer;
  className?: string;
  showExtendedBio?: boolean;
}

export const LawyerCard: React.FC<LawyerCardProps> = ({ lawyer, className = '', showExtendedBio = false }) => {
  const storageKey = `abogar_lawyer_photo_v5_${lawyer.id}`;
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ text: string; isError?: boolean } | null>(null);

  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved && (saved.startsWith('data:image/') || saved.startsWith('http'))) return saved;
    } catch {}
    return lawyer.foto;
  });
  const [imageLoadError, setImageLoadError] = useState(false);

  // Sincronizar si cambia la foto base
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved && (saved.startsWith('data:image/') || saved.startsWith('http'))) {
        setPhotoSrc(saved);
        setImageLoadError(false);
        return;
      }
    } catch {}
    setPhotoSrc(lawyer.foto);
    setImageLoadError(false);
  }, [lawyer.foto, storageKey]);

  const handleImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setIsLoading(true);
    setStatusMsg({ text: 'Guardando foto...' });
    const reader = new FileReader();
    reader.onload = async (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoSrc(result);
        setImageLoadError(false);
        if (file.name) {
          await saveImageLocallyAndServer(storageKey, result, file.name);
        }
        const res = await saveImageLocallyAndServer(storageKey, result, `${lawyer.id}.jpg`);
        setIsLoading(false);
        if (res.success) {
          setStatusMsg({ text: '✓ Guardada exitosamente' });
          setTimeout(() => {
            setShowModal(false);
            setStatusMsg(null);
          }, 1500);
        } else {
          setStatusMsg({ text: res.error || 'Guardada en navegador', isError: !res.success });
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = urlInput.trim();
    if (!trimmed) return;
    if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
      setStatusMsg({ text: 'Por favor ingresa un enlace válido (iniciando con https://)', isError: true });
      return;
    }

    setIsLoading(true);
    setStatusMsg({ text: 'Descargando y guardando en carpeta /public/...' });
    try {
      const res = await saveImageLocallyAndServer(storageKey, trimmed, `${lawyer.id}.jpg`);
      setIsLoading(false);
      if (res.success) {
        const finalUrl = res.url || trimmed;
        setPhotoSrc(finalUrl);
        setStatusMsg({ text: '✓ Guardada permanentemente en /public/images/' });
        setTimeout(() => {
          setShowModal(false);
          setStatusMsg(null);
          setUrlInput('');
        }, 1500);
      } else {
        // Fallback mostrar la URL directamente
        setPhotoSrc(trimmed);
        setStatusMsg({ text: res.error || 'Imagen cargada desde enlace', isError: !res.success });
      }
    } catch (err: any) {
      setIsLoading(false);
      setPhotoSrc(trimmed);
      setStatusMsg({ text: 'Cargada desde enlace directo' });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleImageFile(e.target.files[0]);
    }
  };

  return (
    <div
      id={`lawyer-card-${lawyer.id}`}
      className={`group bg-white rounded-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-slate-300 relative ${className}`}
    >
      {/* Hidden file input for fast photo replacement */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Photograph with subtle zoom and overlay */}
      <div
        className="relative aspect-4/5 overflow-hidden bg-slate-100"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {imageLoadError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#101F5E] to-[#15297C] text-white p-6 text-center select-none">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-3 border border-[#FFE19E]/30 text-[#FFE19E]">
              <Camera className="w-7 h-7" />
            </div>
            <p className="text-xs font-semibold text-[#FFE19E] uppercase tracking-wider mb-1">Cargar Fotografía</p>
            <p className="text-[11px] text-slate-300 max-w-[200px] mb-3 leading-relaxed">
              Haz clic o arrastra la foto de {lawyer.nombre} aquí
            </p>
            <button
              type="button"
              onClick={() => {
                setStatusMsg(null);
                setShowModal(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FFE19E] hover:bg-[#FFE19E]/90 text-[#15297C] font-semibold text-xs transition-colors shadow-sm cursor-pointer"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span>Subir fotografía</span>
            </button>
          </div>
        ) : (
          <img
            src={photoSrc}
            alt={`Fotografía del abogado ${lawyer.nombre}`}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.triedFallback1) {
                target.dataset.triedFallback1 = 'true';
                target.src = `/images/${lawyer.id}.jpg`;
              } else if (!target.dataset.triedFallback2) {
                target.dataset.triedFallback2 = 'true';
                target.src = `/images/${encodeURIComponent(lawyer.nombre.toUpperCase())}.jpg`;
              } else if (!target.dataset.triedFallback3) {
                target.dataset.triedFallback3 = 'true';
                target.src = `/assets/aistudio/${lawyer.id}.jpg`;
              } else {
                setImageLoadError(true);
              }
            }}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15297C]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />

        {/* Floating trigger to change photo (opens modal with link/file options) */}
        <button
          type="button"
          onClick={() => {
            setStatusMsg(null);
            setShowModal(true);
          }}
          title="Cambiar foto o ingresar enlace"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-black/70 hover:bg-[#15297C] text-white text-xs font-medium backdrop-blur-xs cursor-pointer shadow-md"
        >
          <Camera className="w-3.5 h-3.5 text-[#FFE19E]" />
          <span>Cambiar foto</span>
        </button>

        {/* Drag overlay */}
        {isDragging && (
          <div className="absolute inset-0 bg-[#15297C]/80 backdrop-blur-xs z-20 flex flex-col items-center justify-center text-white p-4 border-2 border-dashed border-[#FFE19E]">
            <UploadCloud className="w-10 h-10 text-[#FFE19E] mb-2 animate-bounce" />
            <p className="text-sm font-semibold text-center">Suelta la fotografía aquí</p>
            <p className="text-xs text-slate-200 text-center mt-1">Se guardará en /public/images/</p>
          </div>
        )}

        {/* Name and title overlay at bottom of photo */}
        <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
          <p className="text-xs uppercase tracking-wider text-[#FFE19E] font-medium mb-0.5">
            {lawyer.cargo}
          </p>
          <h3 className="text-xl font-serif font-bold text-white leading-tight">
            {lawyer.nombre}
          </h3>
        </div>
      </div>

      {/* Modal for photo update (via URL link or File) */}
      {showModal && (
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xs z-30 flex flex-col p-4 text-white justify-between animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-700 pb-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FFE19E]">
              <Camera className="w-4 h-4" />
              <span>Actualizar foto de {lawyer.nombre.split(' ')[0]}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowModal(false);
                setStatusMsg(null);
              }}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-auto space-y-3">
            {/* Option 1: URL input */}
            <form onSubmit={handleUrlSubmit} className="space-y-1.5">
              <label className="text-[11px] font-medium text-slate-300 flex items-center gap-1">
                <LinkIcon className="w-3 h-3 text-[#FFE19E]" />
                <span>Pegar enlace directo (URL de imagen):</span>
              </label>
              <div className="flex gap-1.5">
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1 bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#FFE19E]"
                />
                <button
                  type="submit"
                  disabled={isLoading || !urlInput.trim()}
                  className="bg-[#15297C] hover:bg-[#1a3399] disabled:opacity-50 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors flex items-center gap-1"
                >
                  {isLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />}
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
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-2 px-3 border border-dashed border-slate-600 hover:border-[#FFE19E] hover:bg-slate-800/60 rounded text-xs text-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <UploadCloud className="w-4 h-4 text-[#FFE19E]" />
              <span>Subir archivo desde el equipo</span>
            </button>

            {statusMsg && (
              <div
                className={`text-[11px] p-2 rounded text-center font-medium ${
                  statusMsg.isError ? 'bg-rose-950/70 text-rose-300 border border-rose-800/50' : 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/50'
                }`}
              >
                {statusMsg.text}
              </div>
            )}
          </div>

          <p className="text-[10px] text-slate-400 text-center">
            Se guardará automáticamente en <code className="text-[#FFE19E]">/public/images/{lawyer.id}.jpg</code>
          </p>
        </div>
      )}

      {/* Details body */}
      <div className="p-6 flex-1 flex flex-col space-y-4">
        <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
          {lawyer.descripcion}
        </p>

        {showExtendedBio && lawyer.enfoqueLegal && lawyer.enfoqueLegal.length > 0 && (
          <div className="pt-3 border-t border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#15297C] mb-2.5 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#15297C]" />
              <span>{lawyer.tituloEnfoque || 'Mi enfoque legal:'}</span>
            </h4>
            <div className="space-y-2">
              {lawyer.enfoqueLegal.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-lg p-2.5 border border-slate-200/70 text-xs">
                  <span className="font-semibold text-slate-900 block mb-0.5">{item.area}:</span>
                  <span className="text-slate-600 leading-relaxed">{item.detalle}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {showExtendedBio && lawyer.vision && (
          <div className="bg-[#15297C]/5 rounded-lg p-3 border border-[#15297C]/15 text-xs">
            <span className="font-bold text-[#15297C] block mb-1">Mi visión:</span>
            <span className="text-slate-700 leading-relaxed">{lawyer.vision}</span>
          </div>
        )}

        {showExtendedBio && lawyer.compromiso && (
          <div className="bg-amber-50/70 rounded-lg p-3 border border-amber-200/80 text-xs">
            <span className="font-bold text-amber-900 block mb-1">Mi compromiso:</span>
            <span className="text-slate-700 leading-relaxed">{lawyer.compromiso}</span>
          </div>
        )}

        {showExtendedBio && lawyer.fraseCierre && (
          <div className="bg-slate-100/80 border-l-2 border-[#15297C] p-3 rounded-r-lg text-xs italic text-slate-700 leading-relaxed">
            "{lawyer.fraseCierre}"
          </div>
        )}
      </div>
    </div>
  );
};
