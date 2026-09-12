import { ServiceArea } from '../types';

export const SERVICES: ServiceArea[] = [
  {
    id: "derecho-laboral-individual-y-colectivo",
    slug: "derecho-laboral-individual-y-colectivo",
    nombre: "Derecho Laboral Individual y Colectivo",
    descripcionCorta: "Asesoría y representación judicial en procesos por despido injustificado, estabilidad laboral reforzada, reintegros, indemnizaciones, acoso laboral (Ley 1010), liquidación de prestaciones sociales y contratos de trabajo, tanto para trabajadores como para empleadores.",
    icono: "Users",
    imagen: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Reunión corporativa sobre relaciones laborales y negociación",
    introduccion: "Brindamos acompañamiento legal de vanguardia tanto a trabajadores como a empresas en la estructuración, desarrollo y terminación de relaciones de trabajo. Aseguramos el estricto cumplimiento del Código Sustantivo del Trabajo, la jurisprudencia de la Sala Laboral de la Corte Suprema de Justicia y los estándares de la OIT.",
    areasAtencion: [
      {
        titulo: "Contratación Laboral y Salarios",
        descripcion: "Redacción estratégica de contratos a término fijo, indefinido, por obra o labor, esquemas de desalarización y reglamentos internos."
      },
      {
        titulo: "Despidos, Liquidaciones e Indemnizaciones",
        descripcion: "Cálculo técnico y reclamación judicial de indemnizaciones por despido sin justa causa, salarios insolutos y sanciones moratorias."
      },
      {
        titulo: "Fueros y Estabilidad Laboral Reforzada",
        descripcion: "Defensa y acciones en casos de trabajadores con estabilidad laboral por salud, maternidad, paternidad, prepensionados o fuero sindical."
      },
      {
        titulo: "Procesos Ordinarios y Especiales Laborales",
        descripcion: "Representación judicial contenciosa ante jueces laborales del circuito y tribunales superiores en todas las instancias."
      },
      {
        titulo: "Derecho Colectivo y Negociación Sindical",
        descripcion: "Acompañamiento en pliegos de peticiones, etapas de arreglo directo, convenciones colectivas y tribunales de arbitramento."
      },
      {
        titulo: "Acoso Laboral y Régimen Disciplinario",
        descripcion: "Gestión de comités de convivencia, descargos laborales, aplicación del debido proceso y denuncias por acoso laboral (Ley 1010)."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Auditoría del vínculo", descripcion: "Revisión documental completa de contratos, otrosíes, comprobantes de pago y llamados de atención." },
      { paso: 2, titulo: "Diagnóstico jurídico y liquidación", descripcion: "Cálculo matemático riguroso de acreencias e identificación precisa de contingencias procesales." },
      { paso: 3, titulo: "Intento conciliatorio directo", descripcion: "Agotamiento de conciliación prejudicial ante el Ministerio del Trabajo o centro de arbitraje si resulta estratégico." },
      { paso: 4, titulo: "Interposición de demanda o defensa", descripcion: "Radicación de demanda ordinaria laboral o contestación técnica de pretensiones con material probatorio." },
      { paso: 5, titulo: "Audiencias y fallo definitivo", descripcion: "Representación personal en audiencias de conciliación, trámite, juzgamiento y segunda instancia." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Qué plazo tengo para demandar judicialmente acreencias laborales?",
        respuesta: "De acuerdo con el artículo 488 del Código Sustantivo del Trabajo, las acciones laborales prescriben a los tres (3) años contados desde que la respectiva obligación se haya hecho exigible. La presentación de reclamo por escrito suspende el término por una sola vez hasta por tres años."
      },
      {
        pregunta: "¿Qué es el contrato realidad y cuándo se configura?",
        respuesta: "Se configura cuando bajo la apariencia de un contrato de prestación de servicios u honorarios, concurren en la realidad los tres elementos de la relación laboral: prestación personal del servicio, continuada subordinación o dependencia, y una remuneración periódica."
      },
      {
        pregunta: "¿Se puede despedir a un trabajador con incapacidad médica o patología crónica?",
        respuesta: "No sin previa autorización expresa del Ministerio del Trabajo. Despedir a una persona con limitación física, sensorial o psíquica sin dicho permiso da lugar a la presunción de despido discriminatorio, reintegro obligatorio y el pago de una indemnización legal de 180 días de salario."
      },
      {
        pregunta: "¿Cómo se liquida la indemnización por despido injustificado en contratos a término indefinido?",
        respuesta: "Varía según el salario del trabajador: si devenga menos de 10 salarios mínimos legales, son 30 días de salario por el primer año y 20 días por cada año subsiguiente proporcional; si devenga más de 10 salarios mínimos, son 20 días por el primer año y 15 por cada adicional."
      }
    ],
    seoTitle: "Derecho Laboral Individual y Colectivo | ABOGAR Grupo Jurídico",
    seoDescription: "Especialistas en derecho laboral en Colombia: liquidaciones, fueros de estabilidad, despidos sin justa causa, negociación sindical y demandas laborales."
  },
  {
    id: "tramites-de-visas-colombianas",
    slug: "tramites-de-visas-colombianas",
    nombre: "Trámites de Visas Colombianas",
    descripcionCorta: "Asesoría y gestión ante Migración Colombia para la solicitud, trámite y renovación de visas (migrante, residente y visitante), así como para procesos relacionados con la regularización migratoria de extranjeros en el país.",
    icono: "Globe",
    imagen: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Pasaporte internacional y trámites consulares de visado migratorio",
    introduccion: "Acompañamos a ciudadanos extranjeros y empresas multinacionales en todo el proceso de radicación, estudio y aprobación de visas colombianas. Brindamos asesoría migratoria precisa conforme a la Resolución 5477 de 2022 y las directrices consulares del Ministerio de Relaciones Exteriores de Colombia.",
    areasAtencion: [
      {
        titulo: "Visas de Migrante (Tipo M)",
        descripcion: "Tramitación para cónyuge o compañero permanente de nacional colombiano, inversionistas, socios de sociedades mercantiles, trabajadores y pensionados."
      },
      {
        titulo: "Visas de Visitante (Tipo V)",
        descripcion: "Gestión para nómadas digitales, turismo de negocios, prácticas corporativas, tratamientos médicos, estudiantes e intercambio cultural."
      },
      {
        titulo: "Visas de Residente Permanente (Tipo R)",
        descripcion: "Solicitud por acumulación de tiempo en visa M, inversión extranjera directa cualificada o renuncia a la nacionalidad colombiana."
      },
      {
        titulo: "Cédula de Extranjería y Registro Migratorio",
        descripcion: "Acompañamiento presencial y virtual ante Migración Colombia para salvoconductos, prórrogas de permanencia y obtención de cédula."
      },
      {
        titulo: "Recursos de Reposición frente a Inadmisiones o Negaciones",
        descripcion: "Interposición técnica de recursos legales ante negativas consulares injustificadas o requerimientos probatorios complejos."
      },
      {
        titulo: "Movilidad Corporativa y Traslado de Personal Extranjero",
        descripcion: "Estructuración migratoria para empresas que contratan ejecutivos y especialistas foráneos en Colombia."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Perfilamiento migratorio", descripcion: "Evaluación de antecedentes, categoría migratoria idónea y viabilidad documental estricta." },
      { paso: 2, titulo: "Recolección y apostillas", descripcion: "Legalización, apostilla de La Haya y traducción oficial de documentos expedidos en el exterior." },
      { paso: 3, titulo: "Estructuración de solicitud", descripcion: "Redacción de cartas motivacionales, extractos financieros y soportes consulares obligatorios." },
      { paso: 4, titulo: "Radicación ante Cancillería", descripcion: "Ingreso formal de la solicitud en plataforma consular y respuesta inmediata a requerimientos." },
      { paso: 5, titulo: "Expedición y cédula de extranjería", descripcion: "Entrega de e-visa aprobada y agendamiento de cita para registro biométrico en Migración Colombia." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Qué requisitos exige la visa de Nómada Digital en Colombia?",
        respuesta: "La Resolución 5477 exige demostrar ingresos de al menos tres (3) salarios mínimos legales mensuales vigentes (SMLMV) mediante extractos bancarios de los últimos 3 meses, seguro médico internacional con cobertura en Colombia y carta que certifique la prestación de servicios remotos para empresas extranjeras."
      },
      {
        pregunta: "¿Cuánto tiempo dura el trámite de una visa colombiana?",
        respuesta: "La Cancillería tiene un plazo normativo de hasta treinta (30) días calendario para dar respuesta inicial a una solicitud. Si emite requerimiento de información complementaria, el solicitante cuenta con diez (10) días hábiles para subsanar."
      },
      {
        pregunta: "¿La visa de cónyuge o compañero permanente de colombiano permite trabajar?",
        respuesta: "Sí, la visa tipo M por matrimonio o unión marital de hecho otorga permiso abierto de trabajo en el territorio nacional, permitiendo ejercer actividades laborales dependientes e independientes."
      },
      {
        pregunta: "¿Qué se debe hacer si una solicitud de visa es negada?",
        respuesta: "Si la Cancillería rechaza la solicitud, se puede interponer recurso de reposición dentro de los diez (10) días hábiles siguientes si se aportaron elementos probatorios suficientes, o estructurar una nueva postulación subsanando las observaciones consulares."
      }
    ],
    seoTitle: "Trámites de Visas Colombianas | ABOGAR Grupo Jurídico",
    seoDescription: "Asesoría jurídica en visas colombianas Tipo V, M y R ante Cancillería. Nómadas digitales, matrimonio, inversión y permisos de trabajo."
  },
  {
    id: "derecho-pensional",
    slug: "derecho-pensional",
    nombre: "Derecho Pensional",
    descripcionCorta: "Trámite y reclamación de pensiones de vejez, invalidez y sobrevivientes ante Colpensiones, fondos privados y regímenes especiales; indemnizaciones sustitutivas; recursos ante Juntas de Calificación de Invalidez (regional y nacional) por dictámenes de pérdida de capacidad laboral (PCL).",
    icono: "Landmark",
    imagen: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Planificación pensional, cálculos actuariales y documentos de jubilación",
    introduccion: "El derecho a una pensión digna es una garantía fundamental irrenunciable. En ABOGAR Grupo Jurídico asesoramos a cotizantes tanto de Colpensiones (régimen de prima media) como de fondos privados (AFP), asegurando el cómputo exacto de semanas, la corrección de historias laborales y la mayor mesada legal posible.",
    areasAtencion: [
      {
        titulo: "Pensión de Vejez",
        descripcion: "Estudio de semanas cotizadas, regímenes de transición, semanas no reportadas y trámite integral de reconocimiento de mesada pensional."
      },
      {
        titulo: "Pensión de Invalidez",
        descripcion: "Acompañamiento en dictámenes ante Juntas Regionales y Nacional de Calificación de Invalidez y reclamación judicial de la prestación."
      },
      {
        titulo: "Pensión de Sobrevivientes y Sustitución Pensional",
        descripcion: "Reconocimiento y asignación a cónyuges, compañeros permanentes e hijos menores o en condición de discapacidad tras el fallecimiento del afiliado."
      },
      {
        titulo: "Ineficacia de Traslado a Fondos Privados",
        descripcion: "Demandas ordinarias laborales para anular traslados engañosos a fondos privados (AFP) y regresar a Colpensiones sin límite de edad."
      },
      {
        titulo: "Reliquidación e Incrementos Pensionales",
        descripcion: "Revisión técnica de la tasa de reemplazo, ingreso base de liquidación (IBL) y corrección de liquidaciones deficitarias."
      },
      {
        titulo: "Indemnización Sustitutiva y Devolución de Saldos",
        descripcion: "Reclamación de capitales cotizados cuando el afiliado no cumple los requisitos para acceder a pensión contributiva completa."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Auditoría de historia laboral", descripcion: "Descarga y cotejo minucioso de semanas cotizadas, periodos faltantes y mora patronal histórica." },
      { paso: 2, titulo: "Cálculo actuarial y liquidación", descripcion: "Simulación matemática del ingreso base de liquidación (IBL) y proyección de mesada probable." },
      { paso: 3, titulo: "Reclamación administrativa", descripcion: "Radicación de derecho de petición de reconocimiento ante Colpensiones o la AFP respectiva." },
      { paso: 4, titulo: "Vía gubernativa y recursos", descripcion: "Interposición de recursos de reposición y apelación frente a resoluciones denegatorias." },
      { paso: 5, titulo: "Demanda ordinaria laboral pensional", descripcion: "Litigio judicial ante jueces laborales para condena en costas, retroactivo e intereses moratorios." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Hasta qué edad se puede demandar la ineficacia del traslado de régimen pensional?",
        respuesta: "De acuerdo con la jurisprudencia unificada de la Sala Laboral de la Corte Suprema de Justicia, la acción de ineficacia de traslado por falta de información veraz no prescribe y puede ser promovida incluso si la persona ya superó la edad límite de traslado (47 años en mujeres y 52 en hombres), siempre que no se encuentre pensionada."
      },
      {
        pregunta: "¿Qué pasa si un empleador no pagó los aportes a pensión pero sí me descontó?",
        respuesta: "Las entidades de seguridad social tienen el deber legal de cobro coactivo contra el empleador en mora. La jurisprudencia ordena convalidar dichas semanas a favor del trabajador para el cómputo de la pensión sin que el afiliado deba asumir la negligencia de recaudo."
      },
      {
        pregunta: "¿Cuántas semanas mínimas exige Colpensiones para la pensión de vejez?",
        respuesta: "Actualmente se requieren 1.300 semanas cotizadas para hombres (edad mínima 62 años) y mujeres (edad mínima 57 años). No obstante, para mujeres la Corte Constitucional ha determinado una reducción gradual de semanas hacia las 1.000 semanas obligatorias."
      },
      {
        pregunta: "¿Se pueden reclamar las mesadas pensionales retroactivas no cobradas?",
        respuesta: "Sí, se puede reclamar el retroactivo pensional desde la fecha de causación del derecho, sujeto al término trienal de prescripción sobre mesadas individuales contadas desde la reclamación administrativa."
      }
    ],
    seoTitle: "Derecho Pensional en Colombia | ABOGAR Grupo Jurídico",
    seoDescription: "Abogados especialistas en pensiones en Colombia: Colpensiones, ineficacia de traslados a fondos privados, invalidez, sobrevivientes y reliquidaciones."
  },
  {
    id: "responsabilidad-del-empleador-culpa-patronal",
    slug: "responsabilidad-del-empleador-culpa-patronal",
    nombre: "Responsabilidad del Empleador (Culpa Patronal)",
    descripcionCorta: "Procesos ordinarios laborales para la reclamación de indemnizaciones plenas de perjuicios derivadas de accidentes de trabajo y enfermedades laborales atribuibles a culpa del empleador.",
    icono: "ShieldAlert",
    imagen: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Seguridad y salud en el trabajo, equipos de protección y prevención de riesgos laborales",
    introduccion: "Cuando un accidente de trabajo grave o mortal, o una enfermedad profesional incapacitante, ocurren por negligencia, omisión en normas de seguridad y salud en el trabajo (SG-SST) o imprudencia del empleador, la ARL solo cubre prestaciones asistenciales y económicas básicas. La ley colombiana faculta a demandar al patrono la indemnización total y ordinaria de perjuicios.",
    areasAtencion: [
      {
        titulo: "Accidentes de Trabajo Graves y Mortales",
        descripcion: "Investigación pericial de causalidad, fallas en medidas de protección y demanda por culpa suficientemente comprobada del patrono."
      },
      {
        titulo: "Enfermedades Laborales Directas y Progresivas",
        descripcion: "Acciones indemnizatorias por exposición a factores de riesgo físico, químico, biomecánico o ergonómico sin medidas mitigadoras."
      },
      {
        titulo: "Perjuicios Materiales (Lucro Cesante y Daño Emergente)",
        descripcion: "Cuantificación pericial de la pérdida de capacidad de ganancia futura del trabajador durante toda su expectativa de vida productiva."
      },
      {
        titulo: "Perjuicios Morales y Daño a la Vida de Relación",
        descripcion: "Tasación judicial del sufrimiento emocional del trabajador y su núcleo familiar, así como la afectación a sus actividades placenteras."
      },
      {
        titulo: "Responsabilidad Solidaria de Contratistas y Beneficiarios",
        descripcion: "Vinculación procesal de empresas beneficiarias y contratantes solidarios cuando el siniestro ocurre en régimen de tercerización."
      },
      {
        titulo: "Auditoría de Cumplimiento del SG-SST",
        descripcion: "Defensa técnica empresarial en investigación de accidentes laborales y acreditación de debida diligencia patronal."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Investigación técnica del siniestro", descripcion: "Recolección de informe FURAT, matriz de riesgos, actas de COPASST y protocolos de inducción laboral." },
      { paso: 2, titulo: "Dictamen pericial de seguridad industrial", descripcion: "Inspección técnica al puesto de trabajo y levantamiento de evidencias de la negligencia patronal." },
      { paso: 3, titulo: "Liquidación actuarial de perjuicios", descripcion: "Cálculo técnico con fórmulas jurisprudenciales de lucro cesante consolidado y futuro de la víctima." },
      { paso: 4, titulo: "Demanda ordinaria laboral por culpa patronal", descripcion: "Acción formal ante juez laboral bajo el artículo 216 del Código Sustantivo del Trabajo." },
      { paso: 5, titulo: "Sentencia judicial y cobro indemnizatorio", descripcion: "Defensa en audiencias de juzgamiento y ejecución coactiva del pago de la indemnización plena." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Qué diferencia existe entre lo que paga la ARL y la culpa patronal?",
        respuesta: "La ARL paga una tarifa tasada y automática por el aseguramiento obligatorio (incapacidades temporales, indemnización por pérdida de capacidad laboral o pensión de invalidez/sobrevivientes). La culpa patronal (Art. 216 CST) la asume directamente el empleador con su propio patrimonio y cubre la totalidad de los perjuicios materiales reales y morales sin tope tarifario."
      },
      {
        pregunta: "¿Qué se debe probar para que un juez declare la culpa patronal?",
        respuesta: "Se debe probar el contrato de trabajo, la ocurrencia del accidente o enfermedad en ejercicio de las labores, el daño sufrido y la culpa (negligencia, imprudencia o impericia) del empleador consistente en no suministrar elementos de protección idóneos, no capacitar o violar normas del SG-SST."
      },
      {
        pregunta: "¿Los familiares del trabajador fallecido pueden demandar la culpa patronal?",
        respuesta: "Sí. El cónyuge, compañero(a) permanente, hijos, padres y hermanos pueden comparecer a demandar en calidad de damnificados directos sus propios perjuicios morales y materiales (lucro cesante por dependencia económica)."
      },
      {
        pregunta: "¿Cuál es el término para demandar por culpa patronal?",
        respuesta: "El término general de prescripción de las acciones laborales es de tres (3) años, contados a partir del momento en que se estructura el dictamen firme de pérdida de capacidad laboral o a partir de la muerte del trabajador."
      }
    ],
    seoTitle: "Responsabilidad del Empleador y Culpa Patronal | ABOGAR",
    seoDescription: "Abogados litigantes en culpa patronal (Art. 216 CST) en Colombia: indemnización plena por accidentes de trabajo y enfermedades laborales graves o mortales."
  },
  {
    id: "asesoria-legal-externa-permanente-iguala",
    slug: "asesoria-legal-externa-permanente-iguala",
    nombre: "Asesoría Legal Externa Permanente (Iguala)",
    descripcionCorta: "Acompañamiento jurídico continuo a empresas mediante contrato de iguala, cubriendo consultas laborales, pensionales, contractuales y comerciales del día a día empresarial.",
    icono: "HeartHandshake",
    imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Edificios de oficinas corporativas y asesoría jurídica empresarial continua",
    introduccion: "La modalidad de iguala jurídica permite a micro, pequeñas, medianas y grandes empresas contar con un departamento jurídico externo de alto nivel sin los sobrecostos de nómina fija. Brindamos blindaje legal proactivo, revisión constante de contratos, defensa preventiva en derecho laboral, comercial y civil.",
    areasAtencion: [
      {
        titulo: "Consultoría Corporativa Ilimitada",
        descripcion: "Respuestas ágiles por escrito o videollamada a consultas cotidianas en materia comercial, laboral, civil y contractual."
      },
      {
        titulo: "Elaboración y Revisión de Contratos Comerciales",
        descripcion: "Redacción, negociación y blindaje de acuerdos con clientes, proveedores, distribuidores y aliados comerciales."
      },
      {
        titulo: "Gestión Jurídica del Talento Humano",
        descripcion: "Acompañamiento en procesos disciplinarios, despidos justificados, contratos de confidencialidad y prevención de demandas laborales."
      },
      {
        titulo: "Cobro Persuasivo y Recuperación de Cartera",
        descripcion: "Gestión prejurídica y cobranza extrajudicial de títulos valores, facturas electrónicas e indemnizaciones pendientes."
      },
      {
        titulo: "Cumplimiento Normativo y Protección de Datos (Habeas Data)",
        descripcion: "Implementación y auditoría de políticas de tratamiento de datos personales (Ley 1581) y reportes ante la SIC."
      },
      {
        titulo: "Tarifas Preferenciales en Litigios y Procesos Judiciales",
        descripcion: "Descuentos sustanciales en honorarios de representación judicial en estrados para las empresas suscritas a la iguala."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Auditoría de diagnóstico inicial", descripcion: "Levantamiento de mapa de riesgos legales de la compañía en sus áreas comercial, laboral y contractual." },
      { paso: 2, titulo: "Diseño de plan de contingencia", descripcion: "Ajuste de minutas contractuales, protocolos de contratación y políticas internas de la organización." },
      { paso: 3, titulo: "Canal prioritario de atención", descripcion: "Asignación de abogado corporativo de cabecera con disponibilidad inmediata para resolver requerimientos." },
      { paso: 4, titulo: "Soporte legal cotidiano", descripcion: "Revisión documental antes de firmas, descargos a colaboradores y emisión de conceptos jurídicos." },
      { paso: 5, titulo: "Comité mensual de seguimiento", descripcion: "Informe periódico de actuaciones ejecutadas, contingencias resueltas y recomendaciones preventivas." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Qué ventajas tiene contratar una iguala frente a tener abogados de planta?",
        respuesta: "Representa un ahorro económico significativo en cargas prestacionales, parafiscales e indemnizaciones laborales. Además, su empresa accede a un equipo interdisciplinario con especialistas en laboral, comercial, civil y constitucional, en lugar de un único profesional generalista."
      },
      {
        pregunta: "¿Cómo se determina el valor mensual de la iguala jurídica?",
        respuesta: "Se define con base en el tamaño de la empresa, el número de colaboradores, el volumen estimado de consultas mensuales y el nivel de complejidad operativa. Diseñamos planes a la medida de cada presupuesto empresarial."
      },
      {
        pregunta: "¿La iguala incluye la representación en demandas judiciales?",
        respuesta: "La iguala cubre toda la gestión preventiva, conceptos, contratos y reclamaciones prejurídicas. En caso de requerirse litigio judicial en juzgados, los clientes de iguala acceden a tarifas preferenciales con descuentos del 30% al 50% sobre tablas de honorarios estándar."
      },
      {
        pregunta: "¿Existe un tiempo mínimo de permanencia?",
        respuesta: "Manejamos esquemas flexibles con acuerdos iniciales sugeridos a 6 o 12 meses, garantizando la continuidad de las estrategias jurídicas implementadas y evaluando periódicamente los indicadores de satisfacción."
      }
    ],
    seoTitle: "Asesoría Legal Externa Permanente (Iguala) | ABOGAR",
    seoDescription: "Servicio de iguala jurídica mensual para empresas en Colombia: departamento legal externo, contratos comerciales, asesoría laboral y cobranza preventiva."
  },
  {
    id: "derecho-de-familia",
    slug: "derecho-de-familia",
    nombre: "Derecho de Familia",
    descripcionCorta: "Divorcios y cesación de efectos civiles del matrimonio, custodia y cuidado personal, cuotas alimentarias, régimen de visitas, liquidación de sociedad conyugal y patrimonial, sucesiones (judiciales y notariales).",
    icono: "Heart",
    imagen: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Familia reunida y protección jurídica de los derechos de cónyuges e hijos",
    introduccion: "Las controversias familiares requieren un balance perfecto entre firmeza jurídica y sensibilidad humana. En ABOGAR Grupo Jurídico priorizamos la protección de los derechos de los niños, niñas y adolescentes, así como la preservación justa y equitativa del patrimonio familiar, tanto en notarías como en juzgados de familia.",
    areasAtencion: [
      {
        titulo: "Divorcios y Cesación de Efectos Civiles",
        descripcion: "Trámite de mutuo acuerdo ante notaría o contencioso ante juzgado de familia por causales taxativas del Código Civil."
      },
      {
        titulo: "Disolución y Liquidación de Sociedad Conyugal y Patrimonial",
        descripcion: "Inventario solemne de activos, avalúo de bienes muebles e inmuebles, liquidación de pasivos y reparto equitativo de gananciales."
      },
      {
        titulo: "Fijación, Aumento y Disminución de Cuota Alimentaria",
        descripcion: "Conciliación prejudicial y procesos verbales sumarios de fijación de alimentos para hijos menores, cónyuge o padres mayores."
      },
      {
        titulo: "Custodia, Cuidado Personal y Régimen de Visitas",
        descripcion: "Establecimiento de acuerdos de custodia compartida o monoparental que salvaguarden el interés superior del menor."
      },
      {
        titulo: "Procesos de Sucesión Notarial y Judicial",
        descripcion: "Partición y adjudicación de herencias con o sin testamento, apertura de sucesiones ilíquidas y saneamiento patrimonial."
      },
      {
        titulo: "Unión Marital de Hecho y Declaración de Sociedad Patrimonial",
        descripcion: "Acreditación de la convivencia ininterrumpida por más de dos años, capitulaciones maritales y separación de bienes."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Entrevista reservada y sensible", descripcion: "Reunión confidencial para comprender las dinámicas familiares, antecedentes y expectativas patrimoniales." },
      { paso: 2, titulo: "Inventario patrimonial y diagnóstico", descripcion: "Revisión de títulos de propiedad, certificados de tradición, extractos y balance de obligaciones." },
      { paso: 3, titulo: "Mesa de conciliación notarial", descripcion: "Fomento de acuerdos concertados de mutuo acuerdo para evitar procesos desgastantes y costosos." },
      { paso: 4, titulo: "Representación judicial contenciosa", descripcion: "Demanda ante juzgados de familia cuando existe conflicto irreconciliable o vulneración de derechos." },
      { paso: 5, titulo: "Escrituración y registro definitivo", descripcion: "Legalización de sentencias o escrituras públicas en instrumentos públicos y oficinas de registro." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Cuánto tiempo toma un divorcio de mutuo acuerdo en Colombia?",
        respuesta: "Un divorcio de mutuo acuerdo ante notaría pública puede formalizarse en un término de 1 a 3 semanas hábiles. Si existen hijos menores de edad, se requiere el concepto previo favorable del Defensor de Familia del ICBF, lo cual suele sumar entre 1 y 2 semanas adicionales."
      },
      {
        pregunta: "¿Cómo se calcula la cuota alimentaria para un hijo?",
        respuesta: "La ley colombiana no establece un porcentaje fijo automático. La cuota se determina ponderando dos factores: la capacidad económica demostrada del padre o madre obligado (hasta un tope máximo del 50% de sus ingresos totales) y las necesidades reales del menor (alimentación, vivienda, salud, educación, recreación y vestuario)."
      },
      {
        pregunta: "¿Cuánto tiempo hay para reclamar la sociedad patrimonial tras una separación de hecho?",
        respuesta: "El artículo 8 de la Ley 54 de 1990 establece un término de prescripción de un (1) año para demandar la declaración y liquidación de la sociedad patrimonial, contado a partir de la separación definitiva de los compañeros, el matrimonio con un tercero o el fallecimiento."
      },
      {
        pregunta: "¿Qué bienes entran en la sociedad conyugal?",
        respuesta: "Entran todos los bienes muebles e inmuebles adquiridos a título oneroso durante la vigencia del matrimonio, así como sus frutos y rendimientos. Quedan excluidos los bienes inmuebles propios adquiridos antes del matrimonio y los recibidos a título gratuito (herencias, legados o donaciones)."
      }
    ],
    seoTitle: "Derecho de Familia en Colombia | ABOGAR Grupo Jurídico",
    seoDescription: "Abogados expertos en derecho de familia: divorcios, liquidación conyugal, custodia, cuotas de alimentos y sucesiones en notarías y juzgados."
  },
  {
    id: "nacionalidad-y-registro-civil",
    slug: "nacionalidad-y-registro-civil",
    nombre: "Nacionalidad y Registro Civil",
    descripcionCorta: "Trámites y acciones de tutela para inscripción y corrección de registros civiles, reconocimiento de nacionalidad colombiana por ius sanguinis, y actuaciones ante la Registraduría Nacional del Estado Civil.",
    icono: "FileText",
    imagen: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Documentos notariales de registro civil y expedición de nacionalidad",
    introduccion: "Garantizamos el derecho a la identidad, el estado civil y la nacionalidad colombiana. Asesoramos en solicitudes de carta de naturaleza y resoluciones de inscripción ante la Cancillería, así como en procesos notariales y judiciales de corrección o reconstrucción de actas de nacimiento, matrimonio y defunción.",
    areasAtencion: [
      {
        titulo: "Nacionalidad Colombiana por Adopción",
        descripcion: "Trámite de carta de naturaleza o resolución de inscripción para extranjeros domiciliados en Colombia (Ley 43 de 1993 y Ley 2332 de 2023)."
      },
      {
        titulo: "Nacionalidad por Nacimiento (Hijos de Extranjeros en Colombia)",
        descripcion: "Acreditación de domicilio legal de los padres al momento del parto y registro de nacimiento con prueba de nacionalidad."
      },
      {
        titulo: "Recuperación y Renuncia de Nacionalidad Colombiana",
        descripcion: "Restablecimiento de derechos ciudadanos para colombianos que renunciaron previamente o tramitación de renuncia formal."
      },
      {
        titulo: "Corrección de Registro Civil de Nacimiento, Matrimonio y Defunción",
        descripcion: "Modificación de nombres, apellidos, fechas, lugares o filiaciones erradas por vía notarial o mediante proceso de jurisdicción voluntaria."
      },
      {
        titulo: "Inscripción Extemporánea de Registro Civil",
        descripcion: "Saneamiento de partidas de personas que nunca fueron registradas o cuyos archivos fueron destruidos o deteriorados."
      },
      {
        titulo: "Apostillas, Legalizaciones y Homologaciones",
        descripcion: "Gestión documental para validez internacional de documentos de identidad ante la Cancillería y embajadas."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Verificación de requisitos normativos", descripcion: "Cómputo de años de domicilio continuo con visa vigente y revisión del historial de permanencia." },
      { paso: 2, titulo: "Preparación de la prueba de conocimientos", descripcion: "Acompañamiento pedagógico para el examen de historia, geografía y Constitución de Colombia." },
      { paso: 3, titulo: "Radicación de expediente en Cancillería", descripcion: "Cargue digital de solvencia económica, antecedentes judiciales de origen y soportes de arraigo." },
      { paso: 4, titulo: "Seguimiento y entrevista consular", descripcion: "Monitoreo del concepto de seguridad del Estado y notificación de la resolución aprobatoria." },
      { paso: 5, titulo: "Juramento y expedición de cédula", descripcion: "Acompañamiento al acto solemne de juramento ante Gobernación o Alcaldía y trámite de cédula de ciudadanía." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Cuánto tiempo de residencia se exige para solicitar la nacionalidad colombiana?",
        respuesta: "La regla general es de cinco (5) años continuos como titular de visa de residente. Se reduce a dos (2) años para ciudadanos latinoamericanos y del Caribe, o para extranjeros casados o en unión marital con nacional colombiano, o con hijos colombianos."
      },
      {
        pregunta: "¿Quiénes están exentos de presentar el examen de conocimientos?",
        respuesta: "Están exentas las personas mayores de 60 años, las personas que hayan cursado estudios de bachillerato o pregrado universitario en Colombia debidamente homologados, y quienes tengan alguna discapacidad comprobada."
      },
      {
        pregunta: "¿Puedo corregir errores en mi registro civil sin necesidad de un juicio?",
        respuesta: "Sí. Los errores mecanográficos u ortográficos evidentes en nombres, fechas o lugares pueden corregirse mediante escritura pública ante notaría. Si la modificación altera la filiación paterna o materna o el estado civil de fondo, se requiere proceso judicial ante juez de familia."
      },
      {
        pregunta: "¿Tener doble nacionalidad está permitido en la legislación colombiana?",
        respuesta: "Sí. El artículo 22 de la Constitución Política de Colombia reconoce expresamente que ningún colombiano por nacimiento podrá ser privado de su nacionalidad y que la calidad de nacional no se pierde por adquirir otra nacionalidad."
      }
    ],
    seoTitle: "Nacionalidad y Registro Civil en Colombia | ABOGAR",
    seoDescription: "Abogados expertos en nacionalidad colombiana por adopción, carta de naturaleza, corrección de registros civiles y trámites ante la Cancillería."
  },
  {
    id: "litigio-civil",
    slug: "litigio-civil",
    nombre: "Litigio Civil",
    descripcionCorta: "Procesos declarativos y ejecutivos (reivindicatorios, nulidades de escrituras y contratos, responsabilidad civil contractual y extracontractual, cobro de obligaciones, garantías reales y mobiliarias).",
    icono: "Scale",
    imagen: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Estrado judicial, mazo de justicia y expedientes procesales civiles",
    introduccion: "El litigio civil demanda una estrategia procesal sólida, dominio del Código General del Proceso (Ley 1564 de 2012) y alta destreza argumentativa en audiencias orales. Representamos a personas y empresas en demandas de cobro, incumplimiento contractual, servidumbres, pertenencias y responsabilidad extracontractual.",
    areasAtencion: [
      {
        titulo: "Procesos Declarativos y Resolutorios de Contratos",
        descripcion: "Demandas de cumplimiento forzoso o resolución de contratos de compraventa, promesa, arrendamiento, obra y mandato con indemnización."
      },
      {
        titulo: "Procesos Ejecutivos y Cobro Judicial Coactivo",
        descripcion: "Embargo, secuestro y remate de bienes muebles e inmuebles para el cobro coercitivo de títulos ejecutivos (pagarés, letras, contratos)."
      },
      {
        titulo: "Responsabilidad Civil Contractual y Extracontractual",
        descripcion: "Acciones de reclamación de perjuicios materiales y morales por accidentes de tránsito, mala praxis profesional y daños a la propiedad."
      },
      {
        titulo: "Procesos de Pertenencia y Prescripción Adquisitiva",
        descripcion: "Saneamiento y formalización de títulos de propiedad inmobiliaria mediante prescripción adquisitiva ordinaria o extraordinaria."
      },
      {
        titulo: "Restitución de Inmueble Arrendado",
        descripcion: "Demandas expeditas de desalojo y entrega judicial de bienes inmuebles residenciales y comerciales por mora o vencimiento de contrato."
      },
      {
        titulo: "Recursos Extraordinarios de Casación y Revisión",
        descripcion: "Estructuración técnica de demandas de casación ante la Sala de Casación Civil de la Corte Suprema de Justicia."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Auditoría probatoria preliminar", descripcion: "Examen riguroso de títulos, contratos, comunicaciones y viabilidad sustancial de las pretensiones." },
      { paso: 2, titulo: "Conciliación prejudicial obligatoria", descripcion: "Celebración de audiencia de conciliación extrajudicial ante centro autorizado como requisito de procedibilidad." },
      { paso: 3, titulo: "Formulación de demanda y medidas cautelares", descripcion: "Radicación de demanda con solicitud estratégica de embargos o inscripción de la demanda sobre bienes del demandado." },
      { paso: 4, titulo: "Sustentación en audiencias orales", descripcion: "Intervención técnica en audiencia inicial (Art. 372 CGP) y audiencia de instrucción y juzgamiento (Art. 373 CGP)." },
      { paso: 5, titulo: "Ejecución coactiva de sentencia", descripcion: "Liquidación judicial de créditos y costas, adjudicación y materialización del pago efectivo al cliente." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Cuánto tiempo dura un proceso civil ordinario en Colombia?",
        respuesta: "El artículo 121 del Código General del Proceso establece que los procesos en primera instancia deben resolverse en un plazo máximo de un (1) año contado desde la notificación del auto admisorio, y en segunda instancia en seis (6) meses, sujeto a las prórrogas legales justificadas."
      },
      {
        pregunta: "¿Qué medidas cautelares se pueden solicitar en una demanda civil?",
        respuesta: "En procesos declarativos se puede solicitar la inscripción de la demanda y medidas cautelares innominadas. En procesos ejecutivos se pueden solicitar el embargo y secuestro preventivo de cuentas bancarias, bienes inmuebles, vehículos y salarios de la contraparte."
      },
      {
        pregunta: "¿Qué requisitos se exigen para ganar una propiedad por pertenencia?",
        respuesta: "Se requiere demostrar posesión material pública, pacífica e ininterrumpida con ánimo de señor y dueño: durante cinco (5) años para prescripción ordinaria (con justo título y buena fe) o diez (10) años para prescripción extraordinaria (sin necesidad de título previo)."
      },
      {
        pregunta: "¿Es obligatorio intentar conciliar antes de presentar una demanda civil?",
        respuesta: "Sí, en la mayoría de los procesos declarativos civiles (como responsabilidad civil o incumplimiento de contratos) la conciliación extrajudicial en derecho es requisito indispensable de procedibilidad conforme a la Ley 2220 de 2022."
      }
    ],
    seoTitle: "Litigio Civil en Colombia | ABOGAR Grupo Jurídico",
    seoDescription: "Abogados litigantes en derecho civil en Colombia: procesos ejecutivos, embargos, restitución de inmuebles, pertenencias y responsabilidad civil."
  },
  {
    id: "derecho-comercial",
    slug: "derecho-comercial",
    nombre: "Derecho Comercial",
    descripcionCorta: "Constitución y reforma de sociedades, cesión de acciones y de posiciones contractuales, revisión y elaboración de contratos comerciales, procesos de reorganización empresarial.",
    icono: "Building2",
    imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Oficina corporativa y acuerdos comerciales societarios",
    introduccion: "Acompañamos a empresarios, comerciantes e inversionistas en la consolidación legal y crecimiento seguro de sus negocios. Brindamos soporte societario integral, estructuración de alianzas estratégicas, resolución de disputas entre socios y protección de la libre y leal competencia.",
    areasAtencion: [
      {
        titulo: "Constitución y Reorganización de Sociedades (S.A.S., S.A., Ltda.)",
        descripcion: "Estatutos societarios a la medida, acuerdos de accionistas, fusiones, adquisiciones, escisiones y aumento de capital."
      },
      {
        titulo: "Contratación Mercantil Nacional e Internacional",
        descripcion: "Estructuración de contratos de suministro, agencia comercial, franquicia, corretaje, distribución y acuerdos de confidencialidad (NDA)."
      },
      {
        titulo: "Cobro y Defensa en Títulos Valores",
        descripcion: "Emisión, endoso, protesto y cobro judicial de facturas electrónicas de venta, pagarés, cheques y cartas de crédito."
      },
      {
        titulo: "Insolvencia y Reorganización Empresarial (Ley 1116 de 2006)",
        descripcion: "Acompañamiento ante la Superintendencia de Sociedades para salvamento de empresas en crisis y acuerdos de reorganización de pasivos."
      },
      {
        titulo: "Competencia Desleal y Protección al Consumidor",
        descripcion: "Defensa jurídica e interposición de acciones por actos de desvío de clientela, confusión, descrédito y reclamaciones ante la SIC."
      },
      {
        titulo: "Conflictos Societarios y Responsabilidad de Administradores",
        descripcion: "Acciones sociales e individuales de responsabilidad contra representantes legales, juntas directivas y controversias entre accionistas."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Diagnóstico mercantil y gobierno corporativo", descripcion: "Evaluación de la estructura societaria, libro de accionistas y cadena de valor comercial." },
      { paso: 2, titulo: "Estructuración jurídica del negocio", descripcion: "Redacción de cláusulas de escape, resolución de controversias y garantías patrimoniales." },
      { paso: 3, titulo: "Registro en Cámara de Comercio", descripcion: "Trámite formal de matrículas mercantiles, reformas estatutarias y nombramientos directivos." },
      { paso: 4, titulo: "Acompañamiento en juntas y asambleas", descripcion: "Elaboración de actas, convocatorias y verificación de quórum deliberatorio y decisorio." },
      { paso: 5, titulo: "Defensa contenciosa mercantil", descripcion: "Representación en tribunales de arbitramento de la Cámara de Comercio y justicia ordinaria." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Por qué se recomienda la Sociedad por Acciones Simplificada (S.A.S.) en Colombia?",
        respuesta: "La S.A.S. (Ley 1258 de 2008) ofrece máxima flexibilidad contractual: puede constituirse por documento privado y con un solo socio, permite fijar reglas estatutarias autónomas, no exige revisor fiscal obligatorio salvo topes de activos/ingresos, y limita la responsabilidad de los accionistas estrictamente a sus aportes."
      },
      {
        pregunta: "¿Qué plazo tengo para cobrar una factura electrónica de venta?",
        respuesta: "La acción cambiaria derivada de una factura cambiaria de compraventa prescribe a los tres (3) años contados desde la fecha de su vencimiento, de conformidad con el artículo 789 del Código de Comercio."
      },
      {
        pregunta: "¿Qué es el régimen de insolvencia empresarial de la Ley 1116?",
        respuesta: "Es un mecanismo legal que permite a empresas viables pero con dificultades financieras temporales suspender cobros coactivos y embargos judiciales, con el fin de acordar con sus acreedores un plan de pagos reestructurado para preservar los empleos y la operación económica."
      },
      {
        pregunta: "¿Cómo se previene un conflicto entre socios en una sociedad comercial?",
        respuesta: "Mediante la suscripción de acuerdos de accionistas privados o parasociales que regulen con precisión el derecho de preferencia en venta de acciones, cláusulas drag-along (arrastre) y tag-along (acompañamiento), y mecanismos de salida o compraventa en caso de bloqueo decisorio."
      }
    ],
    seoTitle: "Derecho Comercial y Societario en Colombia | ABOGAR",
    seoDescription: "Abogados corporativos y comerciales en Colombia: creación de S.A.S., contratos mercantiles, cobro de facturas, insolvencia y litigio societario."
  },
  {
    id: "acciones-constitucionales-tutela",
    slug: "acciones-constitucionales-tutela",
    nombre: "Acciones Constitucionales (Tutela)",
    descripcionCorta: "Presentación y defensa de acciones de tutela para la protección de derechos fundamentales (salud, petición, mínimo vital, debido proceso) frente a entidades públicas y privadas.",
    icono: "Shield",
    imagen: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Constitución Política, balanza de la justicia y protección constitucional",
    introduccion: "La acción de tutela (Artículo 86 de la Constitución Política y Decreto 2591 de 1991) es el mecanismo más poderoso para salvaguardar de forma inmediata derechos fundamentales vulnerados o amenazados por autoridades públicas o particulares. Interponemos tutelas estratégicas, impugnaciones y trámites de desacato para asegurar fallos de obligatorio cumplimiento.",
    areasAtencion: [
      {
        titulo: "Derecho a la Salud y Suministro de Medicamentos / Tratamientos",
        descripcion: "Órdenes judiciales inmediatas a EPS e IPS para cirugías urgentes, fármacos no PBS, tratamientos oncológicos y transporte médico."
      },
      {
        titulo: "Debido Proceso y Defensa en Actuaciones Administrativas",
        descripcion: "Tutelas contra providencias judiciales arbitrarias (vías de hecho) y vulneraciones procesales ante entidades del Estado."
      },
      {
        titulo: "Protección al Mínimo Vital y Pensiones",
        descripcion: "Amparo constitucional para el pago urgente de mesadas pensionales retenidas o licencias de maternidad a personas en vulnerabilidad."
      },
      {
        titulo: "Estabilidad Laboral Reforzada en Vía de Tutela",
        descripcion: "Reintegro inmediato al puesto de trabajo para personas despedidas en situación de debilidad manifiesta o tratamiento médico."
      },
      {
        titulo: "Derecho de Petición y Acceso a la Información Pública",
        descripcion: "Acción de tutela contra entidades que omiten responder oportunamente solicitudes ciudadanas (Ley 1755 de 2015)."
      },
      {
        titulo: "Incidentes de Desacato e Impugnación de Fallos",
        descripcion: "Sanciones de arresto y multa contra funcionarios que desobedecen sentencias de tutela, y recursos de impugnación en segunda instancia."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Verificación de inmediatez y subsidiariedad", descripcion: "Evaluación de la gravedad del perjuicio irremediable y plazos de interposición oportunos." },
      { paso: 2, titulo: "Recolección de pruebas clínicas o documentales", descripcion: "Sustentación probatoria rigurosa de la vulneración con historias clínicas, peticiones o actos administrativos." },
      { paso: 3, titulo: "Redacción y radicación constitucional", descripcion: "Planteamiento normativo con jurisprudencia unificada de la Corte Constitucional y solicitud de medida cautelar provisional." },
      { paso: 4, titulo: "Fallo de tutela en 10 días", descripcion: "Monitoreo permanente del término perentorio de diez (10) días hábiles fijado al juez constitucional." },
      { paso: 5, titulo: "Cumplimiento forzoso o incidente de desacato", descripcion: "Exigencia inmediata de cumplimiento o apertura de trámite sancionatorio si la entidad requerida es renuente." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Cuánto tiempo tiene un juez para resolver una acción de tutela?",
        respuesta: "Por mandato constitucional perentorio (Art. 86 CP), el juez de tutela cuenta con un plazo improrrogable de diez (10) días hábiles para proferir sentencia de primera instancia, desde el momento de la radicación."
      },
      {
        pregunta: "¿Qué es una medida provisional en una acción de tutela?",
        respuesta: "Es una orden cautelar urgente que el juez puede dictar desde el primer día de admisión de la tutela para suspender la vulneración o evitar un daño irreparable inminente (por ejemplo, ordenar una cirugía vital o entrega inmediata de un medicamento antes de que se dicte la sentencia final)."
      },
      {
        pregunta: "¿Qué se debe hacer si una EPS o entidad no cumple el fallo de tutela?",
        respuesta: "Se debe interponer un Incidente de Desacato ante el mismo juez que profirió la orden. El desacato puede conllevar sanciones de arresto de hasta seis (6) meses y multas de hasta veinte (20) salarios mínimos legales mensuales para los directivos responsables."
      },
      {
        pregunta: "¿Procede la acción de tutela contra particulares?",
        respuesta: "Sí. La tutela procede contra particulares cuando están encargados de la prestación de un servicio público (salud, educación, servicios públicos), cuando su conducta afecta grave y directamente el interés colectivo, o respecto de quienes el solicitante se halle en estado de subordinación o indefensión."
      }
    ],
    seoTitle: "Acciones Constitucionales y Tutela en Colombia | ABOGAR",
    seoDescription: "Abogados especialistas en acción de tutela en Colombia: derecho a la salud, debido proceso, estabilidad laboral, incidentes de desacato e impugnaciones."
  },
  {
    id: "reclamaciones-ante-aseguradoras",
    slug: "reclamaciones-ante-aseguradoras",
    nombre: "Reclamaciones ante Aseguradoras",
    descripcionCorta: "Gestión de reclamaciones de pólizas de vida, SOAT e incapacidad permanente, incluyendo impugnaciones y recursos frente a negativas de las compañías aseguradoras.",
    icono: "ShieldCheck",
    imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Contrato de póliza de seguros y análisis técnico de indemnizaciones",
    introduccion: "Las compañías de seguros frecuentemente objetan o niegan el pago de indemnizaciones amparándose en cláusulas abusivas, alegaciones de reticencia o interpretaciones restrictivas de las pólizas. En ABOGAR Grupo Jurídico representamos a asegurados y beneficiarios para forzar el pago efectivo de siniestros amparados.",
    areasAtencion: [
      {
        titulo: "Seguros de Vida, Incapacidad Total y Enfermedades Graves",
        descripcion: "Cobro de indemnizaciones por fallecimiento o pérdida de capacidad laboral igual o superior al 50% frente a objeciones por supuesta preexistencia."
      },
      {
        titulo: "Objeciones por Supuesta Reticencia o Inexactitud",
        descripcion: "Desvirtuación jurídica de alegatos de la aseguradora sobre presunta mala fe o declaraciones erróneas al momento de suscribir la póliza."
      },
      {
        titulo: "Seguros de Automóviles y Pérdida Total o Parcial",
        descripcion: "Reclamación por hurto, daño material o destrucción de vehículos comerciales y particulares sin aplicación de deducibles abusivos."
      },
      {
        titulo: "Seguros de Cumplimiento y Responsabilidad Civil",
        descripcion: "Defensa y efectividad de pólizas de cumplimiento contractual en contratos públicos o privados y amparos de responsabilidad extracontractual."
      },
      {
        titulo: "Seguros de Hogar, Incendio y Terremoto vinculados a Créditos",
        descripcion: "Exigencia de cancelación total de saldos de créditos hipotecarios o de consumo tras el fallecimiento o invalidez del deudor."
      },
      {
        titulo: "Litigios contra Aseguradoras y Acción ante la Superintendencia Financiera",
        descripcion: "Demandas ordinarias mercantiles y quejas sancionatorias ante la Delegatura de Protección al Consumidor Financiero."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Auditoría de póliza y condiciones generales", descripcion: "Revisión de carátula, exclusiones legales, clausulado y declaración de asegurabilidad original." },
      { paso: 2, titulo: "Estructuración de la reclamación formal", descripcion: "Acreditación técnica de la ocurrencia del siniestro y cuantía económica según el artículo 1077 del Código de Comercio." },
      { paso: 3, titulo: "Desvirtuación de la objeción", descripcion: "Respuesta jurídica y técnica frente a cartas de rechazo u objeción extemporánea o infundada." },
      { paso: 4, titulo: "Conciliación ante Defensor del Consumidor", descripcion: "Agotamiento de audiencia conciliatoria directa con la aseguradora para pago anticipado." },
      { paso: 5, titulo: "Demanda judicial con intereses moratorios", descripcion: "Acción mercantil ante juzgados civiles para exigir el capital asegurado más el interés moratorio comercial especial." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Cuánto tiempo tiene una aseguradora en Colombia para pagar un siniestro?",
        respuesta: "De conformidad con el artículo 1080 del Código de Comercio, una vez el asegurado radica la reclamación formal acompañada de los documentos que demuestran la ocurrencia y la cuantía, la aseguradora dispone de un plazo máximo de un (1) mes para pagar o formalizar su objeción motivada. Si no lo hace, se causan intereses moratorios certificados a la tasa máxima legal (1.5 veces el interés bancario corriente)."
      },
      {
        pregunta: "¿Qué puede hacer si la aseguradora objeta alegando 'preexistencia'?",
        respuesta: "La aseguradora tiene la carga de probar que la enfermedad existía antes de la suscripción de la póliza, que el tomador actuó con culpa o dolo al ocultarla, y que la entidad no realizó exámenes médicos previos pudiendo hacerlo. En la mayoría de los casos, los tribunales amparan al asegurado cuando la compañía cobró primas sin verificar la salud del asegurado."
      },
      {
        pregunta: "¿Cuál es el término de prescripción para demandar a una aseguradora?",
        respuesta: "El contrato de seguro tiene dos términos de prescripción (Art. 1081 Co.Co.): una prescripción ordinaria de dos (2) años contados desde que el interesado tuvo o debió tener conocimiento del hecho generador, y una extraordinaria de cinco (5) años que corre para cualquier persona desde el momento en que nace el respectivo derecho."
      },
      {
        pregunta: "¿Qué ocurre con el crédito hipotecario si el titular fallece o queda inválido?",
        respuesta: "Los créditos hipotecarios cuentan obligatoriamente con un seguro de vida deudores. Al ocurrir el fallecimiento o estructurarse la pérdida de capacidad laboral, la aseguradora debe pagar el saldo insoluto de la deuda directamente al banco, liberando la vivienda de la hipoteca a favor del titular o sus herederos."
      }
    ],
    seoTitle: "Reclamaciones ante Aseguradoras en Colombia | ABOGAR",
    seoDescription: "Abogados expertos en reclamación de seguros en Colombia: pólizas de vida, incapacidad, accidentes, objeciones injustificadas y cobro de siniestros."
  },
  {
    id: "derecho-penal",
    slug: "derecho-penal",
    nombre: "Derecho Penal",
    descripcionCorta: "Representación técnica integral en el Sistema Penal Acusatorio (Ley 906 de 2004): defensa técnica de imputados y representación jurídica de víctimas.",
    icono: "Lock",
    imagen: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Tribunal penal, toga judicial y código de procedimiento penal",
    introduccion: "La libertad personal y la honra son los bienes jurídicos más preciados. En ABOGAR Grupo Jurídico ejercemos una defensa técnica penal rigurosa, científica y garantista tanto en favor de procesados como en la representación de víctimas en delitos contra el patrimonio, la administración pública, delitos societarios y contra la integridad personal.",
    areasAtencion: [
      {
        titulo: "Defensa Técnica en el Sistema Penal Acusatorio (Ley 906 de 2004)",
        descripcion: "Representación en audiencias preliminares de legalización de captura, formulación de imputación e imposición de medida de aseguramiento."
      },
      {
        titulo: "Juicio Oral y Práctica Probatoria Pericial",
        descripcion: "Litigio en audiencia preparatoria y juicio oral: contrainterrogatorios, exclusión de pruebas ilícitas y alegatos de conclusión."
      },
      {
        titulo: "Representación Integral de Víctimas",
        descripcion: "Interposición de denuncias penales estructuradas, coadyuvancia en investigación y trámite de incidente de reparación integral."
      },
      {
        titulo: "Derecho Penal Corporativo y Delitos Económicos",
        descripcion: "Defensa y prevención en estafas, falsedad documental, abusos de confianza, delitos tributarios y administración desleal."
      },
      {
        titulo: "Preacuerdos, Principio de Oportunidad y Negociaciones con Fiscalía",
        descripcion: "Estructuración estratégica de preacuerdos para rebaja sustancial de penas, degradación de conductas y beneficios punitivos."
      },
      {
        titulo: "Subrogados Penales y Ejecución de Penas",
        descripcion: "Solicitud y defensa de prisión domiciliaria, libertad condicional, redención de pena por trabajo/estudio y permisos de salida."
      }
    ],
    enfoque: [
      { paso: 1, titulo: "Atención inmediata de urgencias", descripcion: "Asistencia legal presencial inmediata ante capturas en flagrancia o por orden judicial en URI y estaciones." },
      { paso: 2, titulo: "Investigación defensiva propia", descripcion: "Despliegue de investigadores privados, peritos forenses y recolección técnica de elementos materiales probatorios." },
      { paso: 3, titulo: "Construcción de la teoría del caso", descripcion: "Diseño de la hipótesis factual, probatoria y jurídica para sustentar atipicidad, inculpabilidad o ausencia de responsabilidad." },
      { paso: 4, titulo: "Litigio estratégico en estrados", descripcion: "Intervención combativa en audiencias orales con argumentos constitucionales y jurisprudenciales sólidos." },
      { paso: 5, titulo: "Recursos de apelación y casación penal", descripcion: "Impugnación de sentencias condenatorias ante Tribunales Superiores y Sala de Casación Penal de la Corte Suprema." }
    ],
    preguntasFrecuentes: [
      {
        pregunta: "¿Qué derechos tiene una persona al momento de ser capturada en Colombia?",
        respuesta: "Tiene derecho a que se le informe inmediatamente el motivo de su captura y el funcionario que la ordenó; a entrevistarse en privado con un abogado de su confianza; a guardar silencio sin que ello sea usado en su contra; y a que se notifique inmediatamente a un familiar sobre su aprehensión. Debe ser presentada ante un juez de control de garantías dentro de las 36 horas siguientes."
      },
      {
        pregunta: "¿Qué es un principio de oportunidad y cuándo procede?",
        respuesta: "Es una facultad reglada de la Fiscalía General de la Nación para suspender, interrumpir o renunciar a la persecución penal en contra de una persona, usualmente a cambio de colaboración eficaz con la justicia para desarticular organizaciones criminales o reparar integralmente a las víctimas."
      },
      {
        pregunta: "¿Cómo reclaman las víctimas su indemnización económica en un proceso penal?",
        respuesta: "Una vez emitida sentencia condenatoria en firme, se abre el Incidente de Reparación Integral (Arts. 102 a 108 Ley 906/04), en el cual la víctima presenta la tasación pericial de sus perjuicios materiales y morales para que el juez penal ordene el pago forzoso a cargo del sentenciado y terceros civilmente responsables."
      },
      {
        pregunta: "¿Qué requisitos se exigen para la prisión domiciliaria por madre o padre cabeza de familia?",
        respuesta: "La Ley 750 de 2002 faculta conceder la prisión domiciliaria a la madre o padre que tenga la jefatura exclusiva del hogar y la custodia de hijos menores de edad o en condición de discapacidad que dependan económicamente de él o ella, siempre que el delito no esté expresamente excluido de este beneficio."
      }
    ],
    seoTitle: "Derecho Penal y Defensa Técnica en Colombia | ABOGAR",
    seoDescription: "Abogados penalistas en Colombia: defensa técnica en juicio oral, audiencias preliminares, representación de víctimas y delitos corporativos."
  }
];
