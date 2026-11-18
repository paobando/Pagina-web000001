import { useState, useMemo } from 'react';
import { Search, Book, FileText, Globe, HelpCircle, ArrowRight, Play, FileCheck, Download, ExternalLink, Info, Video, Headphones, Film, Mic, Image as ImageIcon, CheckCircle2, Clock, Share2, Tag, Calendar, User, Eye, X } from 'lucide-react';
import { PageHeader, WireframeCard, ServiceSLA } from '../components/UI';
import { Link } from 'react-router-dom';

export function CatalogoPublico() {
  return (
    <div>
      <PageHeader 
        title="Catálogo público (Descubridor EDS)" 
        description="Descubre en un solo lugar la colección física y digital de la universidad a través de EBSCO Discovery Service (EDS)."
        breadcrumbs={[{ label: 'Recursos de información', path: '/recursos-de-informacion' }, { label: 'Catálogo público' }]}
      />
      
      <section className="wireframe-section">
        <div className="max-w-4xl mx-auto">
          {/* EDS Discovery Hero */}
          <div className="bg-gradient-to-r from-brand-blue to-blue-900 p-8 md:p-12 text-white rounded-lg shadow-lg mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md text-brand-yellow text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              <Book className="w-3.5 h-3.5" /> Descubridor Integral EBSCO (EDS)
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-3">Búsqueda global en el Descubridor EDS</h2>
            <p className="text-white/80 text-sm mb-6 leading-relaxed max-w-2xl">
              EDS integra todo el catálogo bibliográfico físico de la estantería, libros electrónicos, revistas científicas y bases de datos suscritas en una única caja de búsqueda unificada.
            </p>
            <div className="relative mb-4">
              <input 
                type="text" 
                placeholder="Ingresa título, autor, signatura o materia en EDS..."
                className="w-full h-14 md:h-16 pl-6 pr-28 text-base md:text-lg text-brand-gray rounded-lg border-none focus:ring-4 focus:ring-brand-yellow/30 bg-white"
              />
              <a 
                href="https://biblioteca-opac.icesi.edu.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 md:h-12 px-5 bg-black text-white hover:bg-neutral-800 flex items-center justify-center rounded-md font-bold text-xs uppercase tracking-wider transition-colors gap-2"
              >
                <span>Buscar</span>
                <Search className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15 text-xs font-bold text-white/80">
              <div className="flex items-center gap-4">
                <Link to="/buscar-todo" className="hover:text-brand-yellow underline">Búsqueda avanzada</Link>
                <span className="text-white/30">•</span>
                <Link to="/yo-soy" className="hover:text-brand-yellow">Mi cuenta (Renovaciones de libros)</Link>
              </div>
              <a 
                href="https://biblioteca-opac.icesi.edu.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-yellow hover:underline"
              >
                <span>Ir al portal directo EDS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Info className="text-brand-blue w-5 h-5" /> ¿Cómo encontrar un libro en estantería?
              </h3>
              <div className="space-y-6">
                {[
                  { step: '1', text: 'Realiza la búsqueda en EDS por título, autor o materia.' },
                  { step: '2', text: 'Anota el piso y la signatura topográfica (ej: Piso 2 · COL-863.6 G216c).' },
                  { step: '3', text: 'Ubica la estantería correspondiente guiándote por la numeración de los pasillos.' },
                  { step: '4', text: 'Si no lo encuentras, solicita ayuda inmediata en el punto de atención del piso.' },
                ].map(item => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 rounded-full">{item.step}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-brand-light p-8 rounded-lg border border-brand-border">
              <h3 className="text-xl font-bold mb-6">Servicios complementarios</h3>
              <div className="space-y-4">
                <Link to="/prestamo-de-material-impreso" className="flex items-center justify-between p-4 bg-white border border-brand-border hover:border-brand-blue transition-all font-bold text-sm rounded-sm">
                  Préstamo de material impreso <ArrowRight className="w-4 h-4 text-brand-blue" />
                </Link>
                <Link to="/prestamo-interbibliotecario" className="flex items-center justify-between p-4 bg-white border border-brand-border hover:border-brand-blue transition-all font-bold text-sm rounded-sm">
                  Préstamo interbibliotecario <ArrowRight className="w-4 h-4 text-brand-blue" />
                </Link>
                <Link to="/reserva-de-salas" className="flex items-center justify-between p-4 bg-white border border-brand-border hover:border-brand-blue transition-all font-bold text-sm rounded-sm">
                  Reserva de salas <ArrowRight className="w-4 h-4 text-brand-blue" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function RepositorioInstitucional() {
  return (
    <div>
      <PageHeader 
        title="Repositorio académico" 
        description="Accede a la producción académica, científica, técnica e institucional de la Universidad Icesi en formato digital y acceso abierto."
        breadcrumbs={[{ label: 'Recursos de información', path: '/recursos-de-informacion' }, { label: 'Repositorio académico' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-black text-brand-gray mb-6 tracking-tight">¿Qué es el Repositorio académico?</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Es la plataforma digital institucional que preserva, custodia y difunde en acceso abierto la producción intelectual, científica y técnica de estudiantes, docentes y centros de investigación de la Universidad Icesi.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-brand-border bg-white rounded-lg">
                  <h4 className="font-bold mb-2">Tesis y trabajos de grado</h4>
                  <p className="text-xs text-gray-500">Producción de estudiantes de pregrado, maestrías y doctorados.</p>
                </div>
                <div className="p-6 border border-brand-border bg-white rounded-lg">
                  <h4 className="font-bold mb-2">Artículos científicos</h4>
                  <p className="text-xs text-gray-500">Publicaciones y preprints de docentes e investigadores Icesi.</p>
                </div>
                <div className="p-6 border border-brand-border bg-white rounded-lg">
                  <h4 className="font-bold mb-2">Libros y capítulos</h4>
                  <p className="text-xs text-gray-500">Obras publicadas bajo el sello de la Editorial Universidad Icesi.</p>
                </div>
                <div className="p-6 border border-brand-border bg-white rounded-lg">
                  <h4 className="font-bold mb-2">Documentos institucionales</h4>
                  <p className="text-xs text-gray-500">Informes de gestión, boletines y memorias académicas de la institución.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-light p-12 text-center rounded-lg border border-brand-border">
              <h3 className="text-2xl font-bold mb-4">Accede a la plataforma</h3>
              <p className="text-gray-500 mb-8 max-w-lg mx-auto">Explora las colecciones, consulta métricas de descarga y cita documentos de forma legal y abierta.</p>
              <a 
                href="https://repository.icesi.edu.co"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white hover:bg-neutral-800 px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                Ir al Repositorio académico <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="border border-brand-border p-8 rounded-lg bg-white">
              <h3 className="text-xl font-bold mb-6">Información útil</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <FileCheck className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-sm text-gray-500">Licencias Creative Commons para uso y citación ética.</span>
                </li>
                <li className="flex gap-3">
                  <Download className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-sm text-gray-500">Descarga libre en PDF de alta fidelidad.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-gray text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">¿Eres autor o investigador?</h3>
              <p className="text-gray-400 text-sm mb-6">Conoce cómo auto-archivar tu producción académica y aumentar la visibilidad de tus investigaciones.</p>
              <Link to="/yo-soy/profesor" className="text-brand-yellow font-bold text-sm hover:underline">Ver servicios para profesores</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const RepositorioAcademico = RepositorioInstitucional;

export function Datover() {
  const datoverSLA = [
    { compromiso: 'Curaduría y aprobación de datasets para publicación', tiempo: '72 horas hábiles', canal: 'Plataforma institucional / Correo' },
    { compromiso: 'Asesoría personalizada en planes de gestión de datos (DMP)', tiempo: '48 horas hábiles', canal: 'Formularios de contacto / Teams' },
    { compromiso: 'Atención a soporte de carga y fallas de plataforma', tiempo: '24 horas hábiles', canal: 'datover@icesi.edu.co' },
  ];

  return (
    <div>
      <PageHeader 
        title="Repositorio de datos institucionales" 
        description="Repositorio de datos institucionales de la Universidad Icesi para la preservación y el acceso abierto a datasets de investigación."
        breadcrumbs={[{ label: 'Recursos de información', path: '/recursos-de-informacion' }, { label: 'Repositorio de datos institucionales' }]}
      />
      
      <section className="wireframe-section">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Globe className="w-16 h-16 text-brand-blue mx-auto mb-8" />
          <h2 className="text-3xl font-black text-brand-gray mb-6 tracking-tight">Gestión de datos de investigación</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            El Repositorio de datos institucionales permite a los investigadores de Icesi almacenar, compartir y publicar sus conjuntos de datos (datasets) cumpliendo con estándares internacionales de ciencia abierta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 border border-brand-border">
            <h4 className="text-xl font-bold mb-4">Visibilidad</h4>
            <p className="text-sm text-gray-500">Aumenta el impacto y las citas de tu investigación al compartir tus datos.</p>
          </div>
          <div className="text-center p-8 border border-brand-border">
            <h4 className="text-xl font-bold mb-4">Preservación</h4>
            <p className="text-sm text-gray-500">Asegura la integridad de tus datos a largo plazo en una plataforma institucional.</p>
          </div>
          <div className="text-center p-8 border border-brand-border">
            <h4 className="text-xl font-bold mb-4">Cumplimiento</h4>
            <p className="text-sm text-gray-500">Cumple con los requisitos de las agencias financiadoras y revistas científicas.</p>
          </div>
        </div>

        <div className="bg-brand-light p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-2">¿Listo para publicar tus datos?</h3>
            <p className="text-gray-500">Accede a la plataforma o solicita asesoría para la gestión de tus datasets.</p>
          </div>
          <div className="flex gap-4">
            <button className="wireframe-button-primary">Acceder al Repositorio</button>
            <Link to="/formacion-y-asesoria" className="wireframe-button-secondary">Solicitar asesoría</Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ServiceSLA 
            title="SLA: Gestión y Soporte del Repositorio de datos institucionales"
            items={datoverSLA}
          />
        </div>
      </section>
    </div>
  );
}

export function GuiasTutoriales() {
  const guides = [
    { title: 'Cómo reservar una sala', type: 'Video', duration: '2:30 min' },
    { title: 'Búsqueda efectiva en bases de datos', type: 'Guía PDF', pages: '12 págs' },
    { title: 'Uso del catálogo público', type: 'Video', duration: '3:45 min' },
    { title: 'Cómo renovar material en línea', type: 'Guía PDF', pages: '5 págs' },
    { title: 'Ingreso remoto a recursos digitales', type: 'Video', duration: '4:15 min' },
    { title: 'Gestores bibliográficos (Zotero/Mendeley)', type: 'Guía PDF', pages: '20 págs' },
  ];

  const guiasSLA = [
    { compromiso: 'Atención a reportes de enlaces caídos o errores de guías', tiempo: '24 horas hábiles', canal: 'biblioteca@icesi.edu.co' },
    { compromiso: 'Creación de guías académicas o tutoriales a solicitud de docentes', tiempo: '5 días hábiles', canal: 'Solicitud formal por correo' },
    { compromiso: 'Actualización técnica de instructivos frente a nuevas normativas', tiempo: 'Inmediata tras cambio de norma', canal: 'Revisión interna automática' },
  ];

  return (
    <div>
      <PageHeader 
        title="Guías y tutoriales" 
        description="Material de apoyo diseñado para ayudarte a sacar el máximo provecho de todos nuestros recursos y servicios."
        breadcrumbs={[{ label: 'Recursos de información', path: '/recursos-de-informacion' }, { label: 'Guías y tutoriales' }]}
      />
      
      <section className="wireframe-section">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-brand-blue text-white font-bold text-sm rounded-full">Todos</button>
            <button className="px-6 py-2 bg-brand-light text-brand-gray font-bold text-sm rounded-full hover:bg-gray-200">Videos</button>
            <button className="px-6 py-2 bg-brand-light text-brand-gray font-bold text-sm rounded-full hover:bg-gray-200">Guías PDF</button>
          </div>
          <div className="relative w-full md:w-64">
            <input type="text" placeholder="Filtrar guías..." className="wireframe-input py-2 text-sm pl-10" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guides.map((guide, i) => (
            <div key={i} className="wireframe-card group">
              <div className="aspect-video bg-brand-light mb-6 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                {guide.type === 'Video' ? <Play className="w-12 h-12" /> : <FileText className="w-12 h-12" />}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2 block">{guide.type} • {guide.duration || guide.pages}</span>
              <h3 className="text-lg font-bold mb-4 text-brand-gray group-hover:text-brand-blue transition-colors">{guide.title}</h3>
              <button className="text-brand-blue font-bold text-sm flex items-center gap-2">
                Ver material <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <ServiceSLA 
            title="SLA: Soporte y Actualización de Guías de Aprendizaje"
            items={guiasSLA}
          />
        </div>
      </section>
    </div>
  );
}

export function RepositorioAudiovisual() {
  const [activeFormat, setActiveFormat] = useState<'Todos' | 'Video' | 'Audio' | 'Fotografía'>('Todos');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas las áreas');
  const [searchFilter, setSearchFilter] = useState('');
  const [activeMedia, setActiveMedia] = useState<{
    id: string;
    title: string;
    category: string;
    format: 'Video' | 'Audio' | 'Fotografía';
    duration: string;
    speaker: string;
    faculty: string;
    date: string;
    synopsis: string;
    resolution?: string;
    views: number;
    color: string;
  } | null>(null);

  const categories = [
    'Todas las áreas',
    'Cátedras Institucionales',
    'Ingeniería y Tecnología',
    'Ciencias de la Salud',
    'Negocios y Economía',
    'Humanidades y Ciencias Sociales',
    'Archivo Histórico',
  ];

  const items = useMemo(() => [
    {
      id: 'av-01',
      title: 'Lección Inaugural: Inteligencia Artificial y Ética en la Educación Superior',
      category: 'Cátedras Institucionales',
      format: 'Video' as const,
      duration: '58 min',
      speaker: 'Dr. Alejandro Gaviria',
      faculty: 'Rectoría / Cátedra Icesi',
      date: 'Agosto 2026',
      resolution: '4K UHD / Subtitulado',
      views: 1420,
      color: 'from-blue-600 to-indigo-900',
      synopsis: 'Disertación sobre el impacto transformador de los modelos fundacionales en la pedagogía universitaria, la integridad investigativa y los dilemas éticos que enfrentan las nuevas generaciones de profesionales.',
    },
    {
      id: 'av-02',
      title: 'Simposio Internacional de Biomedicina: Terapias Génicas y Futuro Clínico',
      category: 'Ciencias de la Salud',
      format: 'Video' as const,
      duration: '1h 24m',
      speaker: 'Dra. Claudia Martínez & Panel de Especialistas',
      faculty: 'Facultad de Ciencias de la Salud',
      date: 'Septiembre 2026',
      resolution: '1080p HD',
      views: 980,
      color: 'from-emerald-600 to-teal-900',
      synopsis: 'Jornada académica interdisciplinar sobre edición genética mediante CRISPR, tratamientos personalizados contra el cáncer y ensayos clínicos aprobados en Colombia y la región latinoamericana.',
    },
    {
      id: 'av-03',
      title: 'Podcast Voces de Investigación: Emprendimiento de Base Tecnológica en el Valle',
      category: 'Negocios y Economía',
      format: 'Audio' as const,
      duration: '34 min',
      speaker: 'Equipo CDEE Icesi & Startups Invitadas',
      faculty: 'Centro de Desarrollo del Espíritu Empresarial',
      date: 'Octubre 2026',
      resolution: 'Audio Estéreo 320 kbps',
      views: 1850,
      color: 'from-amber-500 to-orange-800',
      synopsis: 'Entrevista en profundidad con fundadores de empresas científicas y de base tecnológica nacidas en Icesi, analizando el ecosistema de financiamiento de capital semilla y escalabilidad.',
    },
    {
      id: 'av-04',
      title: 'Conferencia Magistral: Transición Energética y Sostenibilidad Ambiental',
      category: 'Ingeniería y Tecnología',
      format: 'Video' as const,
      duration: '46 min',
      speaker: 'Ing. Carlos Restrepo, Ph.D.',
      faculty: 'Facultad de Ingeniería, Diseño y Ciencias Aplicadas',
      date: 'Julio 2026',
      resolution: '1080p HD',
      views: 750,
      color: 'from-sky-600 to-cyan-900',
      synopsis: 'Presentación sobre microrredes inteligentes, generación solar descentralizada en el suroccidente colombiano y los retos de almacenamiento en baterías de estado sólido.',
    },
    {
      id: 'av-05',
      title: 'Memoria Visual: 40 Años de Campus Universitario y Vida Académica Icesi',
      category: 'Archivo Histórico',
      format: 'Fotografía' as const,
      duration: '120 registros',
      speaker: 'Curaduría Histórica Biblioteca Icesi',
      faculty: 'Vicerrectoría Académica',
      date: 'Colección Permanente',
      resolution: 'Digitalización 2400 DPI',
      views: 3100,
      color: 'from-rose-600 to-pink-900',
      synopsis: 'Exhibición fotográfica y cartográfica restaurada digitalmente que documenta la evolución arquitectónica, los primeros claustros de clase y los hitos conmemorativos de la institución.',
    },
    {
      id: 'av-06',
      title: 'Diálogos sobre Derecho Constitucional y Democracia en América Latina',
      category: 'Humanidades y Ciencias Sociales',
      format: 'Video' as const,
      duration: '1h 12m',
      speaker: 'Mag. Martha Lucía Reyes & Docentes Juristas',
      faculty: 'Facultad de Derecho y Ciencias Sociales',
      date: 'Mayo 2026',
      resolution: '1080p HD',
      views: 890,
      color: 'from-purple-600 to-indigo-950',
      synopsis: 'Mesa redonda en torno a las reformas constitucionales recientes en los países andinos, la protección de derechos fundamentales y el papel de las altas cortes en el balance de poderes.',
    },
    {
      id: 'av-07',
      title: 'Podcast Bitácora Científica: Microorganismos y Biotecnología Aplicada',
      category: 'Ciencias de la Salud',
      format: 'Audio' as const,
      duration: '28 min',
      speaker: 'Semillero de Investigación en Bioquímica',
      faculty: 'Departamento de Ciencias Biológicas',
      date: 'Septiembre 2026',
      resolution: 'Audio Estéreo 320 kbps',
      views: 640,
      color: 'from-teal-600 to-emerald-950',
      synopsis: 'Conversación divulgativa acerca de bacterias biorremediadoras y su aplicación en la descontaminación de afluentes hídricos en cuencas del Valle del Cauca.',
    },
    {
      id: 'av-08',
      title: 'Panel Internacional: Dinámicas Macroeconómicas y Retos de la Tasa de Interés',
      category: 'Negocios y Economía',
      format: 'Video' as const,
      duration: '1h 05m',
      speaker: 'Economistas Invitados de Banco de la República',
      faculty: 'Departamento de Economía',
      date: 'Agosto 2026',
      resolution: '1080p HD',
      views: 1120,
      color: 'from-blue-700 to-slate-900',
      synopsis: 'Análisis cuantitativo de las presiones inflacionarias globales, tipo de cambio e incentivos de inversión productiva en economías emergentes.',
    },
  ], []);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchFormat = activeFormat === 'Todos' || item.format === activeFormat;
      const matchCategory = selectedCategory === 'Todas las áreas' || item.category === selectedCategory;
      const matchSearch = searchFilter === '' || 
        item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.speaker.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.faculty.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.synopsis.toLowerCase().includes(searchFilter.toLowerCase());
      return matchFormat && matchCategory && matchSearch;
    });
  }, [items, activeFormat, selectedCategory, searchFilter]);

  const audiovisualSLA = [
    { compromiso: 'Catalogación, ingesta técnica y difusión de grabaciones de eventos institucionales', tiempo: '5 días hábiles', canal: 'Solicitud vía correo institucional / Audiovisuales' },
    { compromiso: 'Suministro de copias máster o fragmentos en alta resolución para fines docentes', tiempo: '48 horas hábiles', canal: 'biblioteca@icesi.edu.co' },
    { compromiso: 'Asesoría en derechos de autor y licencias de distribución audiovisual (Creative Commons)', tiempo: '3 días hábiles', canal: 'Cita presencial o Teams' },
    { compromiso: 'Acceso y habilitación a consulta de material histórico analógico preservado', tiempo: '24 horas previas', canal: 'Punto de atención Biblioteca Piso 2' },
  ];

  return (
    <div>
      <PageHeader 
        title="Repositorio audiovisual" 
        description="Preservación, acceso libre y difusión del patrimonio audiovisual, conferencias magistrales, lecciones académicas, podcasts y memoria histórica de la Universidad Icesi."
        breadcrumbs={[
          { label: 'Recursos de información', path: '/recursos-de-informacion' }, 
          { label: 'Repositorio audiovisual' }
        ]}
      />

      <section className="wireframe-section pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Hero Banner with Search & Direct Link */}
          <div className="bg-gradient-to-r from-brand-blue via-[#3A3AB8] to-[#1A1A5E] rounded-2xl p-8 md:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:flex items-center justify-center">
              <Video className="w-80 h-80" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md text-brand-yellow text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                <Film className="w-3.5 h-3.5" /> Acervo Multimedia Institucional
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
                Explora el conocimiento en formato audiovisual
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                Accede a grabaciones completas de eventos académicos, lecciones magistrales impartidas por invitados ilustres, series de podcasts investigativos y exposiciones fotográficas de alta resolución.
              </p>

              {/* Search & Direct portal button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Buscar por tema, ponente, cátedra o facultad..."
                    className="w-full h-12 pl-12 pr-4 bg-white text-brand-gray placeholder-gray-400 rounded-lg font-medium text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-yellow"
                  />
                  {searchFilter && (
                    <button 
                      onClick={() => setSearchFilter('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <a 
                  href="https://audiovisuales.icesi.edu.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 px-6 bg-brand-yellow text-brand-gray font-black text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-md shrink-0 cursor-pointer"
                >
                  <span>Portal Mediacenter</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-5 border border-brand-border/60 rounded-xl shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-black text-brand-blue block mb-1">1,400+</span>
              <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Grabaciones académicas</span>
            </div>
            <div className="bg-white p-5 border border-brand-border/60 rounded-xl shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-black text-brand-blue block mb-1">350+</span>
              <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Horas de conferencias</span>
            </div>
            <div className="bg-white p-5 border border-brand-border/60 rounded-xl shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-black text-brand-blue block mb-1">100%</span>
              <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Acceso abierto</span>
            </div>
            <div className="bg-white p-5 border border-brand-border/60 rounded-xl shadow-xs text-center">
              <span className="text-2xl md:text-3xl font-black text-brand-blue block mb-1">Creative Commons</span>
              <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Licenciamiento legal</span>
            </div>
          </div>

          {/* Filters Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-6 border-b border-brand-border/60">
            {/* Format Tabs */}
            <div className="flex flex-wrap gap-2">
              {(['Todos', 'Video', 'Audio', 'Fotografía'] as const).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setActiveFormat(fmt)}
                  className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    activeFormat === fmt 
                      ? 'bg-brand-blue text-white shadow-sm shadow-brand-blue/30' 
                      : 'bg-white border border-brand-border text-brand-gray hover:bg-slate-50'
                  }`}
                >
                  {fmt === 'Video' && <Video className="w-3.5 h-3.5" />}
                  {fmt === 'Audio' && <Headphones className="w-3.5 h-3.5" />}
                  {fmt === 'Fotografía' && <ImageIcon className="w-3.5 h-3.5" />}
                  {fmt === 'Todos' && <Film className="w-3.5 h-3.5" />}
                  <span>{fmt === 'Audio' ? 'Audio & Podcasts' : fmt}</span>
                </button>
              ))}
            </div>

            {/* Area / Category select */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Área:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full lg:w-64 h-10 px-3 py-1 bg-white border border-brand-border rounded-lg text-xs font-bold text-brand-gray focus:outline-hidden focus:ring-1 focus:ring-brand-blue cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count & active search indication */}
          {(searchFilter || activeFormat !== 'Todos' || selectedCategory !== 'Todas las áreas') && (
            <div className="flex items-center justify-between bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg mb-6 text-xs text-gray-600 font-medium">
              <span>
                Mostrando <strong>{filteredItems.length}</strong> de {items.length} recursos audiovisuales
                {searchFilter && <> para la búsqueda "<strong>{searchFilter}</strong>"</>}
                {activeFormat !== 'Todos' && <> en formato <strong>{activeFormat}</strong></>}
                {selectedCategory !== 'Todas las áreas' && <> en <strong>{selectedCategory}</strong></>}
              </span>
              <button 
                onClick={() => {
                  setSearchFilter('');
                  setActiveFormat('Todos');
                  setSelectedCategory('Todas las áreas');
                }}
                className="text-brand-blue hover:underline font-bold ml-4 cursor-pointer"
              >
                Restablecer filtros
              </button>
            </div>
          )}

          {/* Media Items Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white border border-brand-border/60 rounded-2xl p-8 mb-16">
              <Film className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-gray mb-2">No se encontraron recursos audiovisuales</h3>
              <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                No hay resultados que coincidan con los criterios seleccionados. Prueba con otros términos o limpia los filtros.
              </p>
              <button 
                onClick={() => {
                  setSearchFilter('');
                  setActiveFormat('Todos');
                  setSelectedCategory('Todas las áreas');
                }}
                className="px-6 py-2.5 bg-brand-blue text-white rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Ver todo el catálogo
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white border border-brand-border/70 rounded-xl overflow-hidden hover:border-brand-blue hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Thumbnail / Media Header with gradient */}
                  <div className={`relative aspect-video bg-gradient-to-br ${item.color} flex items-center justify-center p-6 text-white overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    
                    {/* Format Badge */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-black uppercase tracking-wider text-white">
                      {item.format === 'Video' && <Video className="w-3 h-3 text-red-400" />}
                      {item.format === 'Audio' && <Headphones className="w-3 h-3 text-amber-400" />}
                      {item.format === 'Fotografía' && <ImageIcon className="w-3 h-3 text-emerald-400" />}
                      <span>{item.format}</span>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-bold text-white">
                      <Clock className="w-3 h-3" />
                      <span>{item.duration}</span>
                    </div>

                    {/* Centered Play Button */}
                    <button
                      onClick={() => setActiveMedia(item)}
                      className="relative z-10 w-14 h-14 rounded-full bg-white/90 text-brand-blue flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-transform duration-300 cursor-pointer"
                      aria-label="Reproducir recurso"
                    >
                      {item.format === 'Video' && <Play className="w-6 h-6 ml-1 fill-current" />}
                      {item.format === 'Audio' && <Headphones className="w-6 h-6" />}
                      {item.format === 'Fotografía' && <Eye className="w-6 h-6" />}
                    </button>

                    {/* Category Label at bottom */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 text-[11px] font-semibold text-white/90 truncate">
                      {item.faculty}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                      <span className="text-brand-blue">{item.category}</span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-bold text-base text-brand-gray group-hover:text-brand-blue transition-colors line-clamp-2 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-500 line-clamp-3 mb-4 leading-relaxed flex-grow">
                      {item.synopsis}
                    </p>

                    <div className="pt-3 border-t border-brand-border/50 text-[11px] text-gray-600 flex items-center gap-1.5 mb-4">
                      <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="font-semibold truncate">{item.speaker}</span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveMedia(item)}
                        className="flex-1 py-2 px-3 bg-brand-blue text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Reproducir</span>
                      </button>
                      <a
                        href="https://audiovisuales.icesi.edu.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 border border-brand-border text-brand-gray hover:text-brand-blue hover:border-brand-blue rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center cursor-pointer"
                        title="Abrir en mediacenter externo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Institutional Services Section */}
          <div className="bg-brand-light/70 rounded-2xl p-8 md:p-12 border border-brand-border/80 mb-16">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-brand-blue block mb-2">Servicios del Repositorio</span>
              <h3 className="text-2xl md:text-3xl font-black text-brand-gray tracking-tight mb-4">
                ¿Cómo utilizar y colaborar con el Repositorio Audiovisual?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                El repositorio audiovisual no solo difunde contenidos terminados, sino que acompaña activamente a docentes, investigadores y unidades administrativas en la gestión del ciclo de vida de los materiales multimedia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-bold mb-4">
                  <Film className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-brand-gray mb-2">Depósito de grabaciones</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Si organizas una cátedra, congreso o simposio institucional en Icesi, deposita la grabación oficial para su catalogación y preservación perpetua.
                </p>
                <Link to="/contacto" className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1">
                  Solicitar depósito de video <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-brand-gray mb-2">Derechos y licencias</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Asesoría en licenciamiento Creative Commons, consentimiento informado de ponentes y respeto a los derechos morales y patrimoniales de autor.
                </p>
                <Link to="/formacion-y-asesoria" className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1">
                  Agendar asesoría legal <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-4">
                  <Download className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-brand-gray mb-2">Copias máster docentes</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Descarga o solicita acceso a fragmentos en alta definición sin compresión para su uso en aulas de clase virtuales (Canvas / Moodle).
                </p>
                <Link to="/contacto" className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1">
                  Pedir copia académica <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Service Level Agreement */}
          <div className="max-w-4xl mx-auto mb-16">
            <ServiceSLA 
              title="SLA: Compromisos de Servicio del Repositorio Audiovisual"
              items={audiovisualSLA}
            />
          </div>

          {/* Links to Related Resources */}
          <div className="border-t border-brand-border/60 pt-12">
            <h4 className="text-lg font-bold text-brand-gray mb-6 text-center">Otros recursos de información vinculados</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Link 
                to="/repositorio-academico"
                className="p-4 bg-white border border-brand-border hover:border-brand-blue rounded-xl flex items-center justify-between group transition-all"
              >
                <div>
                  <h5 className="font-bold text-sm text-brand-gray group-hover:text-brand-blue transition-colors">Repositorio académico</h5>
                  <p className="text-[11px] text-gray-500">Tesis, artículos y libros digitales</p>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-blue transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/bases-de-datos"
                className="p-4 bg-white border border-brand-border hover:border-brand-blue rounded-xl flex items-center justify-between group transition-all"
              >
                <div>
                  <h5 className="font-bold text-sm text-brand-gray group-hover:text-brand-blue transition-colors">Bases de datos</h5>
                  <p className="text-[11px] text-gray-500">Recursos digitales especializados</p>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-blue transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/catalogo-publico"
                className="p-4 bg-white border border-brand-border hover:border-brand-blue rounded-xl flex items-center justify-between group transition-all"
              >
                <div>
                  <h5 className="font-bold text-sm text-brand-gray group-hover:text-brand-blue transition-colors">Catálogo público</h5>
                  <p className="text-[11px] text-gray-500">Material físico y audiovisuales en sala</p>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-blue transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Media Player Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="bg-brand-gray text-white w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-black/40 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Reproduciendo {activeMedia.format}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-xs text-white/60">{activeMedia.resolution || activeMedia.duration}</span>
              </div>
              <button 
                onClick={() => setActiveMedia(null)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Player Screen */}
            <div className={`relative aspect-video bg-gradient-to-br ${activeMedia.color} flex flex-col items-center justify-center p-8 text-center`}>
              <div className="absolute inset-0 bg-black/30"></div>
              
              <div className="relative z-10 flex flex-col items-center max-w-lg">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 text-white shadow-xl animate-pulse">
                  {activeMedia.format === 'Video' && <Play className="w-8 h-8 ml-1 fill-white" />}
                  {activeMedia.format === 'Audio' && <Headphones className="w-8 h-8 text-white" />}
                  {activeMedia.format === 'Fotografía' && <ImageIcon className="w-8 h-8 text-white" />}
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-2">
                  {activeMedia.faculty}
                </span>
                <h4 className="text-lg md:text-xl font-black text-white mb-2 leading-tight">
                  {activeMedia.title}
                </h4>
                <p className="text-xs text-white/80 mb-4">{activeMedia.speaker}</p>

                {/* Simulated Player Controls Bar */}
                <div className="w-full bg-black/50 backdrop-blur-md rounded-xl p-3 border border-white/15">
                  <div className="w-full bg-white/20 h-1.5 rounded-full mb-2 overflow-hidden">
                    <div className="bg-brand-blue h-full w-1/3 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-white/80">
                    <span>12:45</span>
                    <span className="font-bold text-white uppercase text-[10px] tracking-wider">Audio Estéreo • Alta Definición</span>
                    <span>{activeMedia.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Info Footer */}
            <div className="p-6 bg-slate-900 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-xs text-white/70 max-w-xl leading-relaxed mb-1">
                  {activeMedia.synopsis}
                </p>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                  Licencia Creative Commons Atribución - No Comercial 4.0 Internacional (CC BY-NC 4.0)
                </span>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href="https://audiovisuales.icesi.edu.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-blue text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors flex items-center gap-1.5"
                >
                  <span>Portal Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
