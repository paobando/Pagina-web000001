import React from 'react';
import { Search, Book, Database, FileText, Calendar, Info, ArrowRight, Newspaper, Bookmark, Users, Globe, GraduationCap, ChevronDown, Lightbulb, Video, Sparkles, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SectionReveal, WireframeCard } from '../components/UI';
import BookSlider from '../components/BookSlider';

/* ------------------------------------------------------------------ */
/* Contenido curado de Inicio                                          */
/* Todo es editable a mano: cada `path` debe ser una ruta real de App. */
/* Regla: máximo 3 ítems por bloque para no saturar.                  */
/* ------------------------------------------------------------------ */

const QUICK_LINKS = [
  { label: 'Bases de Datos', path: '/bases-de-datos' },
  { label: 'Catálogo Físico', path: '/catalogo-publico' },
  { label: 'Repositorio', path: '/repositorio-academico' },
  { label: 'Salas de Estudio', path: '/reserva-de-salas' },
];

const PROFILES = [
  { label: 'Estudiante', icon: <Users className="w-4 h-4" />, path: '/yo-soy/estudiante', hint: 'Salas, préstamos y talleres' },
  { label: 'Profesor', icon: <GraduationCap className="w-4 h-4" />, path: '/yo-soy/profesor', hint: 'Apoyo docente e investigación' },
  { label: 'Egresado', icon: <Bookmark className="w-4 h-4" />, path: '/yo-soy/graduado', hint: 'Beneficios de por vida' },
  { label: 'Visitante', icon: <Globe className="w-4 h-4" />, path: '/la-biblioteca', hint: 'Horarios, acceso y agenda abierta' },
];

// "Tema del mes": 1 pieza protagonista + 2 secundarias unidas por un mismo relato.
const THEME_OF_MONTH = {
  eyebrow: 'Tema del mes',
  title: 'Leer, crear, conversar',
  intro: 'La biblioteca también es escenario: clubes, vinilos, conferencias y talleres para la comunidad Icesi y para quien nos visite.',
  featured: {
    kicker: 'Abierto a todos',
    title: 'Agenda cultural y académica',
    description: 'Clubes de lectura, cineforos, exposiciones y talleres. Revisa las fechas y acompáñanos, seas o no parte de Icesi.',
    path: '/agenda',
    cta: 'Ver la agenda',
  },
  items: [
    { kicker: 'Escucha', title: 'Tocadiscos y audioteca', description: 'Vinilos y un espacio de audición analógica en el piso 3.', path: '/tocadiscos', icon: <Sparkles className="w-5 h-5" /> },
    { kicker: 'Mira', title: 'Repositorio audiovisual', description: 'Conferencias, lecciones y podcasts de la comunidad Icesi.', path: '/repositorio-audiovisual', icon: <Video className="w-5 h-5" /> },
  ],
};

// Cierre "Sigue explorando": tres puertas distintas a lo ya visto en la página.
const KEEP_EXPLORING = [
  { title: 'Formación y asesoría', description: 'Aprende a buscar, evaluar y citar fuentes con el equipo de la biblioteca.', path: '/formacion-y-asesoria', icon: <Lightbulb className="w-5 h-5" /> },
  { title: 'Préstamo interbibliotecario', description: '¿No tenemos el libro? Lo pedimos a otra universidad por ti.', path: '/prestamo-interbibliotecario', icon: <Globe className="w-5 h-5" /> },
  { title: 'Guías y tutoriales', description: 'Paso a paso para sacarle provecho a cada recurso.', path: '/guias-y-tutoriales', icon: <Info className="w-5 h-5" /> },
];

/** Eyebrow numerado que hilvana la página como capítulos de un mismo relato. */
function Chapter({ n, label, tone = 'blue', className = '' }: { n: string; label: string; tone?: 'blue' | 'yellow'; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.4em] mb-2 ${tone === 'blue' ? 'text-brand-blue' : 'text-brand-yellow'} ${className}`}>
      <span className="tabular-nums">{n}</span>
      <span className={`w-6 h-px ${tone === 'blue' ? 'bg-brand-blue/40' : 'bg-brand-yellow/40'}`} />
      {label}
    </span>
  );
}

export default function Inicio() {
  const navigate = useNavigate();

  const filterOptions = [
    { id: 'eds', label: 'Descubridor EDS', placeholder: 'Encuentra libros, artículos y bases de datos con EDS...', icon: <Search className="w-4 h-4 text-emerald-500" /> },
    { id: 'fisica', label: 'Colección física', placeholder: 'Encuentra libros, revistas y material en estanterías...', icon: <Book className="w-4 h-4 text-slate-500" /> },
    { id: 'repositorio', label: 'Repositorio académico', placeholder: 'Busca tesis, investigaciones y documentos académicos de Icesi...', icon: <FileText className="w-4 h-4 text-amber-500" /> },
    { id: 'audiovisual', label: 'Repositorio audiovisual', placeholder: 'Busca conferencias, lecciones académicas y podcasts...', icon: <Video className="w-4 h-4 text-rose-500" /> },
    { id: 'eresources', label: 'e-Resources', placeholder: 'Busca en bases de datos científicas y recursos electrónicos...', icon: <Database className="w-4 h-4 text-sky-500" /> },
    { id: 'google', label: 'Google Académico', placeholder: 'Busca artículos científicos de Google Académico...', icon: <GraduationCap className="w-4 h-4 text-emerald-600" /> },
    { id: 'publicaciones', label: 'Publicaciones Electrónicas', placeholder: 'Busca revistas, journals y publicaciones científicas...', icon: <Newspaper className="w-4 h-4 text-emerald-500" /> },
  ];

  const [selectedFilter, setSelectedFilter] = React.useState(filterOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFilter.id === 'audiovisual') {
      navigate('/repositorio-audiovisual');
      return;
    }
    if (selectedFilter.id === 'repositorio') {
      navigate('/repositorio-academico');
      return;
    }
    if (selectedFilter.id === 'fisica') {
      navigate('/catalogo-publico');
      return;
    }
    if (selectedFilter.id === 'eresources') {
      navigate('/bases-de-datos');
      return;
    }
    if (selectedFilter.id === 'google') {
      window.open(`https://scholar.google.com/scholar?q=${encodeURIComponent(searchQuery)}`, '_blank');
      return;
    }
    if (searchQuery.trim()) {
      navigate(`/buscar-todo?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/buscar-todo');
    }
  };

  // Los ids coinciden con los de NoticiaDetalle para que cada tarjeta abra su propia noticia.
  const news = [
    {
      id: 0,
      title: 'Nuevas bases de datos especializadas en medicina',
      date: 'Mayo 02, 2026',
      category: 'Recursos',
      excerpt: 'Cinco nuevas plataformas digitales para fortalecer la investigación y la docencia de la Facultad de Ciencias de la Salud.'
    },
    {
      id: 1,
      title: 'Exposición fotográfica: Caminos del Valle',
      date: 'Abril 28, 2026',
      category: 'Cultura',
      excerpt: 'La geografía y arquitectura del Valle del Cauca a través del lente de nuestros estudiantes de artes y diseño.'
    },
    {
      id: 2,
      title: 'Horarios especiales por temporada de exámenes',
      date: 'Abril 25, 2026',
      category: 'Servicios',
      excerpt: 'Para apoyar el estudio intensivo del cierre de semestre, la biblioteca amplía su horario nocturno.'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Taller: Citación Normas APA 7ma edición',
      date: '22',
      month: 'Abril',
      time: '10:00 AM - 12:00 PM',
      type: 'Formación'
    },
    {
      id: 2,
      title: 'Club de lectura: Voces Latinoamericanas',
      date: '24',
      month: 'Abril',
      time: '04:00 PM - 05:30 PM',
      type: 'Cultura'
    },
    {
      id: 3,
      title: 'Webinar: Estrategias de búsqueda avanzada',
      date: '28',
      month: 'Abril',
      time: '02:00 PM - 03:30 PM',
      type: 'Virtual'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section (~440px height, background image with 55% opacity, 1-line headline) */}
      <section className="relative bg-[#111111] min-h-[440px] md:h-[440px] flex items-center justify-center overflow-hidden py-10">
        {/* Background photo with 55% opacity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2000&q=80" 
            alt="Biblioteca Icesi" 
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-black/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Chapter n="01" label="Biblioteca Universidad Icesi" tone="yellow" className="!tracking-[0.3em]" />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-xl text-balance">
              Conocimiento, creatividad y cultura, abiertos a todos.
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group max-w-3xl mx-auto z-40"
            >
              {/* Animated outer glowing border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue rounded-xl blur opacity-25 group-focus-within:opacity-60 transition duration-500 animate-pulse"></div>
              
              {/* Cohesive main search bar */}
              <form onSubmit={handleSearchSubmit} className="relative flex bg-white rounded-xl items-center h-16 md:h-20 shadow-2xl overflow-visible">
                
                {/* Custom Filter Selector Dropdown */}
                <div className="relative h-full flex items-center shrink-0">
                  <button 
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="h-full px-4 md:px-7 flex items-center gap-2 md:gap-3.5 font-extrabold text-brand-gray text-sm md:text-lg hover:bg-slate-50 transition-colors rounded-l-xl cursor-pointer select-none active:scale-95"
                  >
                    <span className="tracking-tight text-gray-800">{selectedFilter.label}</span>
                    <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm shadow-emerald-500/35">
                      <ChevronDown className={`w-3 h-3 md:w-3.5 md:h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </button>

                  {/* Dropdown Options Popover */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <>
                        {/* Invisible overlay to close dropdown on click-away */}
                        <div 
                          className="fixed inset-0 z-40 bg-transparent cursor-default" 
                          onClick={() => setIsDropdownOpen(false)} 
                        />
                        
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-3 w-[290px] md:w-[340px] bg-[#F3F3F3] border border-gray-200 shadow-2xl rounded-2xl p-4 text-left z-50 overflow-hidden"
                        >
                          <p className="text-[10px] font-black uppercase text-gray-400 tracking-wider mb-3 px-1">Encuentra más recursos en:</p>
                          <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                            {filterOptions.map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setSelectedFilter(opt);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full flex items-center gap-3.5 p-3 bg-white hover:bg-slate-50/80 border transition-all rounded-xl text-left cursor-pointer group/opt shadow-xs hover:shadow-sm ${
                                  selectedFilter.id === opt.id 
                                    ? 'border-brand-blue ring-1 ring-brand-blue/30 bg-blue-50/10' 
                                    : 'border-gray-100 hover:border-gray-200'
                                }`}
                              >
                                <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover/opt:bg-white shrink-0 shadow-2xs">
                                  {opt.icon}
                                </div>
                                <span className="text-xs font-bold text-gray-700 group-hover/opt:text-brand-blue transition-colors">
                                  {opt.label}
                                </span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* Vertical Separator */}
                <div className="w-[1px] h-8 bg-gray-200 shrink-0"></div>

                {/* Input Text Field */}
                <div className="relative flex-grow h-full">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={selectedFilter.placeholder}
                    className="w-full h-full pl-4 md:pl-6 pr-12 text-sm md:text-lg font-semibold border-none focus:ring-0 focus:outline-hidden transition-all text-brand-gray bg-transparent placeholder-gray-400"
                  />
                </div>

                {/* Search Magnifying Glass Icon Button */}
                <button 
                  type="submit"
                  aria-label="Buscar en la biblioteca"
                  className="w-12 h-12 md:w-16 md:h-16 hover:bg-slate-100 flex items-center justify-center text-gray-400 hover:text-brand-blue rounded-xl transition-colors mr-2 cursor-pointer shrink-0"
                >
                  <Search className="w-5 h-5 md:w-6 md:h-6" />
                </button>

              </form>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-[10px] font-bold uppercase tracking-widest"
            >
              <span className="text-white/30">Acceso rápido:</span>
              {QUICK_LINKS.map(({ label: item, path }) => (
                <Link
                  key={item}
                  to={path}
                  className="hover:text-brand-yellow transition-all hover:scale-105 transform inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-yellow hover:after:w-full after:transition-all"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid: 6 most used tools */}
      <SectionReveal className="bg-brand-light py-20 md:py-24 relative overflow-hidden border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Chapter n="02" label="Lo esencial" />
            <h3 className="text-3xl md:text-5xl font-black text-brand-gray tracking-tighter mb-4">
              Herramientas <span className="text-brand-blue italic">más usadas</span>
            </h3>
            <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
              Lo que más usa la comunidad Icesi para estudiar, investigar y crear. Un clic y estás dentro.
            </p>
          </div>

          {/* Fila única de cajones (6 herramientas en una misma fila) */}
          <div className="flex lg:grid lg:grid-cols-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-3.5 xl:gap-4 no-scrollbar snap-x">
            {[
              { 
                title: 'Bases de datos', 
                icon: <Database className="w-5 h-5 text-brand-blue" />, 
                path: '/bases-de-datos', 
                desc: 'Contenidos digitales y revistas científicas indexadas.', 
                externalUrl: 'https://basesdedatos.icesi.edu.co' 
              },
              { 
                title: 'Catálogo público (EDS)', 
                icon: <Book className="w-5 h-5 text-brand-blue" />, 
                path: '/catalogo-publico', 
                desc: 'Descubridor EDS y localización física en estanterías.', 
                externalUrl: 'https://biblioteca-opac.icesi.edu.co' 
              },
              { 
                title: 'Repositorio académico', 
                icon: <FileText className="w-5 h-5 text-brand-blue" />, 
                path: '/repositorio-academico', 
                desc: 'Tesis, producción científica y memoria intelectual.', 
                externalUrl: 'https://repository.icesi.edu.co' 
              },
              { 
                title: 'Reserva de salas', 
                icon: <Calendar className="w-5 h-5 text-brand-blue" />, 
                path: '/reserva-de-salas', 
                desc: 'Espacios de estudio grupal y co-creación académica.', 
                externalUrl: 'https://salas.icesi.edu.co' 
              },
              { 
                title: 'Formación y asesoría', 
                icon: <GraduationCap className="w-5 h-5 text-brand-blue" />, 
                path: '/formacion-y-asesoria', 
                desc: 'Talleres en normas APA y asesorías personalizadas.', 
              },
              { 
                title: 'Cultura y creatividad', 
                icon: <Sparkles className="w-5 h-5 text-brand-blue" />, 
                path: '/cultura-y-creatividad', 
                desc: 'Clubes permanentes, tocadiscos, cine foro y eventos.' 
              },
            ].map((item, idx) => (
              <motion.div
                key={`quick-tool-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="min-w-[210px] sm:min-w-[230px] lg:min-w-0 flex-1 snap-start bg-white border border-brand-border hover:border-brand-blue rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-brand-blue group-hover:h-full transition-all duration-300" />
                
                <div>
                  <div className="w-10 h-10 bg-brand-light flex items-center justify-center rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 mb-3.5">
                    {item.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-brand-gray group-hover:text-brand-blue transition-colors tracking-tight leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-4 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border/60 flex flex-col gap-1.5 w-full mt-auto">
                  {item.externalUrl ? (
                    <>
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center py-1.5 px-2 bg-black hover:bg-neutral-800 text-white font-bold text-[10px] uppercase tracking-wider rounded-md transition-colors inline-flex items-center justify-center gap-1 shadow-2xs"
                      >
                        <span>Ir al servicio</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <Link
                        to={item.path}
                        className="w-full text-center py-1.5 px-2 border border-brand-border hover:border-brand-blue text-gray-700 hover:text-brand-blue font-bold text-[10px] uppercase tracking-wider rounded-md transition-colors inline-flex items-center justify-center gap-1 bg-brand-light/30 hover:bg-brand-blue/5"
                      >
                        <span>Ver detalles</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="w-full text-center py-2 px-2 bg-black hover:bg-neutral-800 text-white font-bold text-[10px] uppercase tracking-wider rounded-md transition-colors inline-flex items-center justify-center gap-1 shadow-2xs mt-auto"
                    >
                      <span>Ver servicio</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* 04 · Tema del mes — spotlight curado: 1 protagonista + 2 pasos */}
      <SectionReveal className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <Chapter n="03" label={THEME_OF_MONTH.eyebrow} tone="yellow" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">{THEME_OF_MONTH.title}</h2>
            <p className="text-sm md:text-base text-white/60 font-medium leading-relaxed">{THEME_OF_MONTH.intro}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <Link
              to={THEME_OF_MONTH.featured.path}
              className="lg:col-span-7 group relative flex flex-col justify-end min-h-[280px] p-8 md:p-10 rounded-3xl bg-brand-blue overflow-hidden"
            >
              <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border-[40px] border-white/10 group-hover:scale-110 transition-transform duration-700" />
              <span className="relative text-brand-yellow font-black text-[10px] uppercase tracking-[0.3em] mb-3">{THEME_OF_MONTH.featured.kicker}</span>
              <h3 className="relative text-2xl md:text-4xl font-black tracking-tight leading-tight mb-3 max-w-md">{THEME_OF_MONTH.featured.title}</h3>
              <p className="relative text-sm text-white/80 leading-relaxed max-w-md mb-6">{THEME_OF_MONTH.featured.description}</p>
              <span className="relative inline-flex items-center gap-2 self-start bg-brand-yellow text-brand-gray font-black text-[10px] uppercase tracking-widest px-5 py-3 rounded-full group-hover:gap-4 transition-all">
                {THEME_OF_MONTH.featured.cta} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <div className="lg:col-span-5 grid grid-cols-1 gap-5">
              {THEME_OF_MONTH.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group flex gap-5 p-6 md:p-7 rounded-3xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 transition-all"
                >
                  <span className="w-11 h-11 rounded-xl bg-white/10 text-brand-yellow flex items-center justify-center shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-gray transition-colors">
                    {item.icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">{item.kicker}</span>
                    <span className="text-lg font-black leading-snug group-hover:text-brand-yellow transition-colors mb-1">{item.title}</span>
                    <span className="text-xs text-white/60 leading-relaxed">{item.description}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Literary Novelties Book Slider Section (Novedades bibliográficas) */}
      <BookSlider eyebrow="04 — Lee · Colección destacada" />

      {/* Main Content: News & Events Priority Grid */}
      <SectionReveal className="border-t border-brand-border">
        <div className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: News (8/12) */}
          <div className="lg:col-span-8">
            <div className="flex items-end justify-between mb-10 pb-4 border-b border-brand-border">
              <div>
                <Chapter n="05" label="Participa" />
                <h3 className="text-4xl md:text-5xl font-black text-brand-gray tracking-tighter">Noticias y novedades</h3>
              </div>
              <Link to="/noticias-y-novedades" className="text-brand-blue font-black text-[10px] uppercase tracking-widest flex items-center gap-2 mb-1 group hover:gap-4 transition-all">
                Ver todas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Featured News Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <Link to={`/noticia/${news[0].id}`} className="group cursor-pointer block">
                  <div className="aspect-[21/9] bg-brand-light border border-brand-border mb-6 overflow-hidden relative rounded-xl">
                    <div className="absolute inset-0 bg-brand-blue/5 flex items-center justify-center text-brand-blue/20 font-black text-3xl">
                      IMAGEN DESTACADA
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-blue text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-full">Destacado</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{news[0].category}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{news[0].date}</span>
                    </div>
                    <h4 className="text-3xl font-black text-brand-gray mb-4 group-hover:text-brand-blue transition-colors leading-tight tracking-tight">
                      {news[0].title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">{news[0].excerpt}</p>
                  </div>
                </Link>
              </motion.div>

              {/* Smaller News Cards */}
              {news.slice(1).map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/noticia/${item.id}`} className="flex flex-col group cursor-pointer border-t border-brand-border pt-8 block h-full">
                    <div className="flex items-center gap-3 mb-3 text-gray-400">
                      <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{item.category}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-black text-brand-gray mb-3 group-hover:text-brand-blue transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.excerpt}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Events (4/12) */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-gray text-white p-8 md:p-12 rounded-3xl h-full flex flex-col shadow-2xl"
            >
              <div className="mb-10">
                <span className="text-brand-yellow font-black text-[10px] uppercase tracking-[0.4em] mb-4 block text-center lg:text-left opacity-60">Agenda</span>
                <h3 className="text-4xl font-black tracking-tight text-center lg:text-left drop-shadow-lg">Próximos Eventos</h3>
              </div>

              <div className="space-y-10 flex-grow">
                {events.map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Link to={`/agenda/evento/${event.id}`} className="flex gap-6 group cursor-pointer">
                      <div className="flex flex-col items-center justify-center bg-white/5 w-16 h-16 shrink-0 border border-white/5 group-hover:bg-brand-yellow group-hover:text-brand-gray transition-all duration-300 transform group-hover:-rotate-3 group-hover:scale-110">
                        <span className="text-xl font-black leading-none">{event.date}</span>
                        <span className="text-[8px] font-bold uppercase tracking-widest opacity-60">{event.month}</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[8px] font-black text-brand-yellow uppercase tracking-widest mb-1">{event.type}</span>
                        <h4 className="text-sm font-bold leading-tight group-hover:text-brand-yellow transition-colors mb-1">{event.title}</h4>
                        <p className="text-[10px] text-white/40 font-bold">{event.time}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <Link to="/agenda" className="wireframe-button-secondary border-white/10 text-white hover:bg-white hover:text-brand-gray w-full text-[10px] rounded-full uppercase tracking-widest">
                  Ver calendario completo
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
        </div>
      </SectionReveal>


      {/* 06 · Puertas abiertas — perfiles como invitación, no como filtro */}
      <SectionReveal className="border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-4">
            <Chapter n="06" label="Puertas abiertas" />
            <h3 className="text-2xl md:text-3xl font-black text-brand-gray tracking-tighter leading-tight mb-3">
              Un lugar para la comunidad Icesi <span className="text-brand-blue italic">y para quien llegue</span>
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">Elige cómo entras y te mostramos lo que tenemos para ti.</p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROFILES.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                className="group flex items-center gap-3 p-3 pr-4 border border-brand-border hover:border-brand-blue rounded-xl bg-white transition-all"
              >
                <span className="w-9 h-9 rounded-lg bg-brand-light border border-brand-border text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors">
                  {p.icon}
                </span>
                <span className="flex-grow min-w-0">
                  <span className="block text-sm font-black text-brand-gray group-hover:text-brand-blue transition-colors">{p.label}</span>
                  <span className="block text-[11px] text-gray-500 truncate">{p.hint}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* 07 · Sigue explorando — cierre suave con 3 recomendados curados */}
      <SectionReveal className="bg-brand-light border-t border-brand-border py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <Chapter n="07" label="Sigue explorando" />
              <h3 className="text-3xl md:text-4xl font-black text-brand-gray tracking-tighter">¿Ya conocías esto?</h3>
            </div>
            <p className="text-sm text-gray-500 font-medium max-w-sm">
              La biblioteca es más que libros: tres servicios que la comunidad Icesi suele descubrir tarde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {KEEP_EXPLORING.map((item, i) => (
              <WireframeCard key={item.path} title={item.title} description={item.description} path={item.path} icon={item.icon} variant="compact" index={i} />
            ))}
          </div>
          <p className="mt-12 text-center text-sm md:text-base font-bold text-brand-gray">
            ¿No encuentras lo que buscas?{' '}
            <Link to="/contacto" className="text-brand-blue underline decoration-brand-yellow decoration-4 underline-offset-4 hover:decoration-brand-blue transition-colors">
              Habla con un bibliotecario
            </Link>
          </p>
        </div>
      </SectionReveal>
    </div>
  );
}

