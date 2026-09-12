import { Lawyer, TrustStat, ValueItem } from '../types';

/**
 * CONFIGURACIÓN CENTRAL DEL DESPACHO JURÍDICO
 * 
 * Nota: Los datos incluidos aquí son ficticios y profesionales, 
 * diseñados para ser sustituidos fácilmente por los datos oficiales del despacho.
 */
export const SITE_CONFIG = {
  nombreDespacho: "ABOGAR",
  subtituloDespacho: "Grupo Jurídico",
  razonSocial: "ABOGAR Grupo Jurídico S.A.S.",
  
  // Información de contacto principal (Configurable)
  contacto: {
    telefono: "+57 315 809 0334",
    telefonoLimpio: "+573158090334",
    whatsapp: "+57 315 809 0334",
    whatsappLink: "https://wa.me/573158090334",
    email: "grupojuridicoabogar@gmail.com",
    direccion: "Calle 51 # 50-70, Of. 200, Bello - Antioquia",
    direccionCompleta: "Calle 51 # 50-70 / Oficina: 200 / Bello - Antioquia",
    horario: "Lunes a viernes, 8:00 a.m. - 5:00 p.m.",
  },

  // Redes sociales corporativas
  redesSociales: {
    facebook: "https://facebook.com/abogarcolombia",
    instagram: "https://www.instagram.com/abogar.co/",
  },

  // Lema y propuesta de valor
  hero: {
    titulo: "Defendemos sus derechos. Protegemos sus intereses.",
    subtitulo: "Soluciones jurídicas estratégicas, profesionales y personalizadas para personas y empresas.",
  },

  // Indicadores de confianza (Configurables)
  estadisticas: [
    {
      valor: "15+",
      etiqueta: "Años de experiencia",
      descripcion: "Trayectoria sólida en litigio y consultoría jurídica preventiva.",
      notaConfigurable: "Dato demostrativo configurable.",
    },
    {
      valor: "500+",
      etiqueta: "Casos atendidos",
      descripcion: "Representación rigurosa en diversas instancias judiciales y arbitrales.",
      notaConfigurable: "Dato demostrativo configurable.",
    },
    {
      valor: "98%",
      etiqueta: "Clientes satisfechos",
      descripcion: "Índice de conformidad basado en encuestas de calidad de servicio.",
      notaConfigurable: "Dato demostrativo configurable.",
    },
  ] as TrustStat[],

  // Ventajas institucionales ("¿Por qué elegirnos?")
  ventajas: [
    {
      titulo: "Experiencia y conocimiento",
      descripcion: "Nuestro equipo combina sólida formación académica con años de práctica efectiva en estrados y salas de negociación.",
      icono: "GraduationCap",
    },
    {
      titulo: "Atención personalizada",
      descripcion: "Cada caso recibe un tratamiento individualizado; nunca delegamos asuntos de alta complejidad en personal sin experiencia.",
      icono: "UserCheck",
    },
    {
      titulo: "Estrategias jurídicas claras",
      descripcion: "Diseñamos hojas de ruta jurídicas transparentes, anticipando riesgos y proponiendo alternativas viables desde el primer día.",
      icono: "Compass",
    },
    {
      titulo: "Comunicación transparente",
      descripcion: "Mantendremos a nuestros clientes informados continuamente sobre el estado, costos y expectativas reales de su proceso.",
      icono: "MessageSquareCheck",
    },
  ],

  // Proceso en 4 pasos
  proceso: [
    {
      numero: "01",
      titulo: "Primera consulta",
      descripcion: "Escuchamos detalladamente su situación, revisamos antecedentes preliminares y establecemos los objetivos legales esperados.",
    },
    {
      numero: "02",
      titulo: "Análisis del caso",
      descripcion: "Estudiamos la viabilidad jurídica, la legislación aplicable, la jurisprudencia reciente y los posibles escenarios de riesgo.",
    },
    {
      numero: "03",
      titulo: "Estrategia jurídica",
      descripcion: "Formulamos un plan de acción a la medida, ya sea a través de mecanismos preventivos, concertados o de litigio formal.",
    },
    {
      numero: "04",
      titulo: "Acompañamiento y representación",
      descripcion: "Ejecutamos cada actuación con rigor procesal y le brindamos respaldo constante hasta la conclusión definitiva del asunto.",
    },
  ],

  // Valores corporativos (Página Nosotros)
  valores: [
    {
      id: "etica",
      titulo: "Ética",
      descripcion: "Actuamos con apego estricto a la ley y a los principios deontológicos del ejercicio profesional del derecho.",
      icono: "Scale",
    },
    {
      id: "integridad",
      titulo: "Integridad",
      descripcion: "Mantenemos una conducta honesta, recta e intachable en cada relación profesional con clientes, jueces y colegas.",
      icono: "ShieldCheck",
    },
    {
      id: "confidencialidad",
      titulo: "Confidencialidad",
      descripcion: "El secreto profesional y la reserva rigurosa de toda la información corporativa y personal son garantías absolutas.",
      icono: "Lock",
    },
    {
      id: "compromiso",
      titulo: "Compromiso",
      descripcion: "Asumimos cada caso con dedicación plena, priorizando el bienestar y la protección de los intereses de quien nos confía su causa.",
      icono: "HeartHandshake",
    },
    {
      id: "excelencia",
      titulo: "Excelencia",
      descripcion: "Buscamos la perfección técnica, la continua actualización jurídica y una argumentación sólida y documentada.",
      icono: "Award",
    },
    {
      id: "transparencia",
      titulo: "Transparencia",
      descripcion: "Explicamos con honestidad las probabilidades de éxito, honorarios y plazos estimados sin generar falsas expectativas.",
      icono: "Eye",
    },
  ] as ValueItem[],

  // Equipo de abogados (Página Nosotros - Configurable)
  equipo: [
    {
      id: "maria-rodriguez",
      nombre: "María Rodríguez",
      cargo: "Socia Fundadora",
      especialidad: "Derecho Corporativo & Contratación",
      descripcion: "Especialista en derecho de los negocios y gobierno corporativo. Más de 18 años asesorando a compañías nacionales e internacionales en fusiones, adquisiciones y estructuración societaria.",
      foto: "/images/maria-rodriguez.jpg",
      colegiatura: "T.P. 128.450 del C.S.J.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "carlos-martinez",
      nombre: "Carlos Martínez",
      cargo: "Abogado Asociado Senior",
      especialidad: "Litigios Civiles & Arbitraje Comercial",
      descripcion: "Magíster en Derecho Procesal. Cuenta con amplia trayectoria en la conducción de litigios de alta complejidad ante juzgados, tribunales superiores y centros de arbitraje comercial.",
      foto: "/images/carlos-martinez.jpg",
      colegiatura: "T.P. 142.890 del C.S.J.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "laura-gomez",
      nombre: "Laura Gómez",
      cargo: "Abogada Especialista",
      especialidad: "Derecho Laboral & Seguridad Social",
      descripcion: "Experta en consultoría laboral empresarial preventiva, auditorías de nómina, negociación colectiva y defensa patronal frente a reclamaciones individuales ante la jurisdicción ordinaria.",
      foto: "/images/laura-gomez.jpg",
      colegiatura: "T.P. 176.210 del C.S.J.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "andres-perez",
      nombre: "Andrés Pérez",
      cargo: "Abogado Corporativo & Tributario",
      especialidad: "Derecho Tributario & Planeación Fiscal",
      descripcion: "Asesor en estructuración tributaria estratégica, defensa en procedimientos de fiscalización administrativa y representación contencioso-administrativa ante autoridades fiscales.",
      foto: "/images/andres-perez.jpg",
      colegiatura: "T.P. 195.340 del C.S.J.",
      linkedin: "https://linkedin.com",
    },
  ] as Lawyer[],

  // Aviso legal obligatorio en el footer
  avisoLegal: "El contenido de este sitio web tiene carácter meramente informativo y no constituye asesoría jurídica. La relación cliente-abogado únicamente se establece tras la formalización del respectivo contrato de prestación de servicios profesionales.",
};
