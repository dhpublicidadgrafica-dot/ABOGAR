export interface ServiceArea {
  id: string;
  slug: string;
  nombre: string;
  descripcionCorta: string;
  icono: string; // Lucide icon name
  introduccion: string;
  areasAtencion: {
    titulo: string;
    descripcion: string;
  }[];
  enfoque: {
    paso: number;
    titulo: string;
    descripcion: string;
  }[];
  preguntasFrecuentes: {
    pregunta: string;
    respuesta: string;
  }[];
  seoTitle: string;
  seoDescription: string;
  imagen: string;
  imagenAlt: string;
}

export interface Lawyer {
  id: string;
  nombre: string;
  cargo: string;
  especialidad: string;
  descripcion: string;
  foto: string;
  linkedin?: string;
  colegiatura?: string;
  tituloEnfoque?: string;
  enfoqueLegal?: { area: string; detalle: string }[];
  vision?: string;
  compromiso?: string;
  fraseCierre?: string;
}

export interface ValueItem {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface TrustStat {
  valor: string;
  etiqueta: string;
  descripcion: string;
  notaConfigurable: string;
}

export interface ContactFormData {
  nombreCompleto: string;
  email: string;
  telefono: string;
  empresa?: string;
  tipoServicio: string;
  mensaje: string;
  aceptaPolitica: boolean;
}
