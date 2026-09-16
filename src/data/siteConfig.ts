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
    titulo: "Soluciones jurídicas que protegen, resuelven y hacen avanzar tus asuntos",
    subtitulo: "Asesoría y representación jurídica para personas, familias y empresas en Colombia.",
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
      id: "carlos-nava",
      nombre: "Carlos Nava",
      cargo: "CEO & Fundador",
      especialidad: "Derecho Corporativo & Contratación",
      descripcion: "Abogado Especialista y Asesor Estratégico con más de 12 años de experiencia en el ejercicio profesional.\n\nSoy CEO y Fundador de ABOGAR GRUPO JURÍDICO S.A.S, firma creada en 2022 con el propósito de transformar la manera en que las personas y empresas reciben soluciones legales: con claridad, estrategia y resultados.",
      enfoqueLegal: [
        {
          area: "Derecho Laboral",
          detalle: "Acompañamiento a trabajadores y empresas en la prevención y solución de conflictos laborales.",
        },
        {
          area: "Derecho Comercial y Empresarial",
          detalle: "Asesoría para empresas, contratos, negocios y toma de decisiones jurídicas.",
        },
        {
          area: "Derecho de Familia",
          detalle: "Protección del patrimonio y acompañamiento en divorcios, sucesiones y demás asuntos familiares.",
        },
      ],
      vision: "Construir una firma jurídica moderna, cercana y estratégica, donde la tecnología y la experiencia legal trabajen juntas para ofrecer mejores soluciones.",
      compromiso: "No solo resolver problemas jurídicos, sino ayudarte a tomar mejores decisiones antes de que estos problemas aparezcan.",
      foto: "/images/Carlos Nava Final.png",
      colegiatura: "T.P. 128.450 del C.S.J.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "jherardine-diaz",
      nombre: "Jherardine Diaz",
      cargo: "Abogada y Asesora Familiar",
      especialidad: "Derecho de Familia & Litigio Civil",
      descripcion: "Abogada y Asesora Familiar con más de 3 años de experiencia, enfocada en acompañar a las personas en decisiones que pueden cambiar el rumbo de su vida y la de sus familias.\n\nHago parte de ABOGAR GRUPO JURÍDICO S.A.S., donde convierto situaciones familiares complejas en procesos claros, organizados y jurídicamente seguros.",
      tituloEnfoque: "Mi especialidad: proteger tu familia y tu patrimonio.",
      enfoqueLegal: [
        {
          area: "Divorcios y Separaciones",
          detalle: "Te acompaño para cerrar ciclos de manera justa, ordenada y con protección de tus derechos.",
        },
        {
          area: "Sucesiones y Herencias",
          detalle: "Acompañamiento en la distribución y protección del patrimonio familiar.",
        },
        {
          area: "Cuotas Alimentarias",
          detalle: "Asesoría para establecer, modificar, exigir o defender obligaciones alimentarias.",
        },
        {
          area: "REDAM",
          detalle: "Orientación jurídica relacionada con el Registro de Deudores Alimentarios Morosos.",
        },
      ],
      compromiso: "Brindarte tranquilidad y claridad en momentos que muchas veces vienen acompañados de decisiones difíciles.",
      fraseCierre: "Porque detrás de cada proceso de familia hay personas, historias y patrimonios que merecen ser protegidos.",
      foto: "/images/Jheraldine Diaz Final.png",
      colegiatura: "T.P. 142.890 del C.S.J.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "eliana-velasquez",
      nombre: "Eliana Velasquez",
      cargo: "Asesora Global en Migración y Nacionalidad",
      especialidad: "Derecho Migratorio, Visas & Nacionalidad",
      descripcion: "Asesora Global en Migración y Nacionalidad con más de 2 años de experiencia acompañando a extranjeros que desean vivir, trabajar, estudiar o invertir en Colombia.\n\nHago parte de ABOGAR GRUPO JURÍDICO S.A.S., donde ayudo a nuestros clientes a entender y gestionar sus procesos migratorios con mayor seguridad y claridad.",
      tituloEnfoque: "Mi especialidad: hacer más sencillo tu camino en Colombia",
      enfoqueLegal: [
        {
          area: "Visas y Nacionalidad Colombiana",
          detalle: "Asesoría y acompañamiento en procesos migratorios y de adquisición de nacionalidad.",
        },
        {
          area: "Trámites Internacionales",
          detalle: "Gestión y orientación para la preparación de documentos destinados a procesos nacionales e internacionales.",
        },
        {
          area: "Apostillas y Legalizaciones",
          detalle: "Acompañamiento para que tus documentos puedan ser utilizados legalmente en Colombia o en el exterior.",
        },
        {
          area: "Traducciones Oficiales",
          detalle: "Gestión de traducciones certificadas para trámites migratorios, legales y administrativos.",
        },
      ],
      compromiso: "Que ser extranjero en Colombia no signifique enfrentarse solo a trámites complejos.",
      fraseCierre: "Si necesitas vivir, trabajar o regularizar tu situación en Colombia, te ayudamos a encontrar el camino legal correcto.",
      foto: "/images/Eliana Velasquez Final.png",
      colegiatura: "T.P. 176.210 del C.S.J.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "adriana-salgado",
      nombre: "Adriana Salgado",
      cargo: "Abogada y Asesora Empresarial",
      especialidad: "Derecho Corporativo & Asesoría Empresarial",
      descripcion: "Abogada y Asesora Empresarial enfocada en relaciones laborales y acompañamiento jurídico preventivo para empresas.\n\nHago parte de ABOGAR GRUPO JURÍDICO S.A.S., donde soy la encargada de la atención, seguimiento y acompañamiento de las IGUALAS JURÍDICAS MENSUALES, convirtiéndome en un punto de contacto cercano para las empresas que confían en nuestra firma.",
      tituloEnfoque: "Mi Súper Poder Legal:",
      enfoqueLegal: [
        {
          area: "Relaciones Laborales",
          detalle: "Acompaño a las empresas en la gestión de sus relaciones con trabajadores, contratos, situaciones laborales y toma de decisiones.",
        },
        {
          area: "Iguala Jurídica Mensual",
          detalle: "Brindo acompañamiento jurídico continuo para atender las necesidades legales que surgen en el día a día de una empresa.",
        },
        {
          area: "Prevención Legal",
          detalle: "Mi enfoque está en identificar riesgos antes de que se conviertan en conflictos, demandas o costos innecesarios.",
        },
        {
          area: "Atención Cercana y Permanente",
          detalle: "Estoy pendiente de las necesidades jurídicas de nuestros clientes para que puedan tomar decisiones con mayor tranquilidad y respaldo.",
        },
      ],
      compromiso: "Ayudar a que las empresas entiendan que contar con un abogado no debe ser visto como un gasto, sino como una inversión en prevención, seguridad y crecimiento.",
      fraseCierre: "Porque una empresa bien asesorada no espera a tener un problema para buscar un abogado, se anticipa.",
      foto: "/images/Adriana Salgado Final.png",
      colegiatura: "T.P. 195.340 del C.S.J.",
      linkedin: "https://linkedin.com",
    },
  ] as Lawyer[],

  // Aviso legal obligatorio en el footer
  avisoLegal: "El contenido de este sitio web tiene carácter meramente informativo y no constituye asesoría jurídica. La relación cliente-abogado únicamente se establece tras la formalización del respectivo contrato de prestación de servicios profesionales.",
};
