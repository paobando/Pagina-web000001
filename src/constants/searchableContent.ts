export interface SearchableItem {
  id: string;
  title: string;
  type: string;
  source: string;
  path: string;
  description: string;
}

export const SITE_CONTENT: SearchableItem[] = [
  { id: 'inicio', title: 'Inicio / Home', type: 'Sección', source: 'General', path: '/inicio', description: 'Página principal de la Biblioteca Icesi con acceso rápido a todos los servicios.' },
  
  // Recursos de información
  { id: 'catalogo', title: 'Catálogo público (Descubridor EDS)', type: 'Recurso', source: 'EDS / Descubridor', path: '/catalogo-publico', description: 'Encuentra libros impresos, revistas académicas y material en sala con el descubridor EDS.' },
  { id: 'bases-datos', title: 'Bases de datos especializadas', type: 'Recurso', source: 'Biblioteca Digital', path: '/bases-de-datos', description: 'Acceso a plataformas digitales especializadas como Scopus, ClinicalKey, JSTOR y ProQuest.' },
  { id: 'repositorio', title: 'Repositorio académico', type: 'Recurso', source: 'Icesi Digital', path: '/repositorio-academico', description: 'Tesis de grado, producción científica e investigación institucional de Icesi en acceso abierto.' },
  { id: 'audiovisual', title: 'Repositorio audiovisual', type: 'Recurso', source: 'Mediateca Icesi', path: '/repositorio-audiovisual', description: 'Conferencias magistrales, lecciones académicas, podcasts institucionales y memoria audiovisual.' },
  { id: 'datover', title: 'Repositorio de datos institucionales', type: 'Recurso', source: 'Ciencia Abierta', path: '/datover', description: 'Repositorio institucional para gestionar, preservar y publicar conjuntos de datos de investigación.' },
  
  // Servicios
  { id: 'salas', title: 'Reserva de salas de estudio', type: 'Servicio', source: 'Servicios', path: '/reserva-de-salas', description: 'Reserva salas colaborativas para estudio grupal y reuniones académicas (mínimo 2, máximo 10 personas).' },
  { id: 'prestamo', title: 'Préstamo de material impreso', type: 'Servicio', source: 'Servicios', path: '/prestamo-de-material-impreso', description: 'Lleva libros a casa y renueva tus préstamos fácilmente en línea.' },
  { id: 'moviles', title: 'Préstamo de recursos móviles', type: 'Servicio', source: 'Servicios', path: '/prestamo-de-recursos-moviles', description: 'Solicita computadores portátiles y audífonos para uso dentro del campus universitario.' },
  { id: 'tocadiscos', title: 'Tocadiscos y audioteca', type: 'Servicio', source: 'Servicios', path: '/tocadiscos', description: 'Escucha vinilos y disfruta del espacio de audición analógica en el piso 3.' },
  { id: 'interbibliotecario', title: 'Préstamo interbibliotecario (Nacional y RUAV)', type: 'Servicio', source: 'Servicios', path: '/prestamo-interbibliotecario', description: 'Pide a otra biblioteca el libro que no tenemos a través de convenios universitarios.' },
  { id: 'compra', title: 'Compra de material bibliográfico', type: 'Servicio', source: 'Servicios', path: '/compra-de-material-bibliografico', description: 'Sugiere la adquisición de nuevos títulos y recursos para la colección de la biblioteca.' },
  { id: 'cultura', title: 'Cultura y creatividad', type: 'Servicio', source: 'Servicios', path: '/cultura-y-creatividad', description: 'Clubes de lectura, cineforos, exposiciones y talleres de creación cultural.' },

  // Formación e investigación
  { id: 'formacion', title: 'Formación y asesoría', type: 'Formación e investigación', source: 'Capacitación', path: '/formacion-y-asesoria', description: 'Aprende a buscar información y citar con talleres y asesorías personalizadas.' },
  { id: 'guias', title: 'Guías y tutoriales', type: 'Formación e investigación', source: 'Aprendizaje', path: '/guias-y-tutoriales', description: 'Instructivos paso a paso y videos para aprovechar todos los recursos y servicios.' },
  { id: 'checkbit', title: 'Análisis de similitud (Check BIT)', type: 'Formación e investigación', source: 'Integridad', path: '/check-bit', description: 'Verifica la originalidad de tus textos académicos antes de entregarlos.' },
  { id: 'vigilancia', title: 'Vigilancia estratégica', type: 'Formación e investigación', source: 'Investigación', path: '/vigilancia-estrategica', description: 'Identifica tendencias científicas, métricas y tecnologías emergentes para tus proyectos.' },

  // La biblioteca
  { id: 'quienes', title: 'Quiénes somos', type: 'La biblioteca', source: 'Institucional', path: '/quienes-somos', description: 'Conoce nuestro equipo, misión y espacios de aprendizaje.' },
  { id: 'noticias', title: 'Noticias y novedades', type: 'La biblioteca', source: 'Institucional', path: '/noticias-y-novedades', description: 'Entérate de las últimas novedades, adquisiciones y avisos de la biblioteca.' },
  { id: 'agenda', title: 'Agenda de eventos', type: 'La biblioteca', source: 'Cultura y Eventos', path: '/agenda', description: 'Consulta las fechas de talleres, conferencias, clubes de lectura y cineforos.' },
  { id: 'faq', title: 'Preguntas frecuentes', type: 'La biblioteca', source: 'Ayuda', path: '/preguntas-frecuentes', description: 'Respuestas rápidas a las dudas más habituales sobre servicios, horarios y cuentas.' },
  { id: 'contacto', title: 'Contacto', type: 'La biblioteca', source: 'Atención al Usuario', path: '/contacto', description: 'Comunícate con nuestro equipo por chat, correo, WhatsApp o de forma presencial.' },

  // Yo soy
  { id: 'yo-soy', title: 'Yo soy (Perfiles)', type: 'Yo soy', source: 'Personalizado', path: '/yo-soy', description: 'Selecciona tu perfil institucional para acceder a tus servicios recomendados.' },
  { id: 'estudiante', title: 'Estudiante', type: 'Yo soy', source: 'Personalizado', path: '/yo-soy/estudiante', description: 'Salas de estudio, préstamos, talleres y recursos para tu carrera académica.' },
  { id: 'profesor', title: 'Profesor e Investigador', type: 'Yo soy', source: 'Personalizado', path: '/yo-soy/profesor', description: 'Respaldo a la docencia, compras de material, vigilancia científica y datos institucionales.' },
  { id: 'graduado', title: 'Graduado (Egresado)', type: 'Yo soy', source: 'Personalizado', path: '/yo-soy/graduado', description: 'Acceso en sala de por vida, préstamos a domicilio y actividades culturales.' },
];
