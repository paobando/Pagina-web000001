import React from 'react';
import { Search, Book, Database, FileText, Calendar, Info, ArrowRight, Newspaper, Bookmark, Users, Globe, GraduationCap, ChevronDown, Lightbulb, Video, Sparkles, ExternalLink, DoorOpen, Smile } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SectionReveal } from '../components/UI';
import BookSlider from '../components/BookSlider';

// Identidad "Biblioteca · Territorio de saberes" (trazos extraídos del documento de marca)
import ilustracionTerritorio from '../assets/territorio/territorio.svg';
import simboloTierra from '../assets/territorio/simbolo-tierra.svg';
import simboloFuego from '../assets/territorio/simbolo-fuego.svg';
import simboloAgua from '../assets/territorio/simbolo-agua.svg';
import simboloAire from '../assets/territorio/simbolo-aire.svg';
import arbol from '../assets/territorio/arbol.svg';
import ballena from '../assets/territorio/ballena.svg';
import colibri from '../assets/territorio/colibri.svg';

/* ------------------------------------------------------------------ */
/* Contenido curado de Inicio                                          */
/* Todo es editable a mano: cada `path` debe ser una ruta real de App. */
/* Regla: máximo 3 ítems por bloque curado para no saturar.           */
/* ------------------------------------------------------------------ */

const QUICK_LINKS = [
  { label: 'Bases de datos', path: '/bases-de-datos' },
  { label: 'Catálogo físico', path: '/catalogo-publico' },
  { label: 'Repositorio', path: '/repositorio-academico' },
  { label: 'Salas de estudio', path: '/reserva-de-salas' },
];

type Pillar = 'investigacion' | 'creatividad' | 'cultura';

/** Cada pilar vive en un piso; su color viene del elemento de ese piso. */
const PILLARS: Record<Pillar, { label: string; bar: string; dot: string; chipDark: string; symbol: string }> = {
  investigacion: { label: 'Investigación', bar: 'bg-aire', dot: 'bg-aire ring-1 ring-black/20', chipDark: 'bg-aire/15 text-aire', symbol: simboloAire },
  creatividad: { label: 'Creatividad', bar: 'bg-agua', dot: 'bg-agua', chipDark: 'bg-agua/30 text-[#B4B8F0]', symbol: simboloAgua },
  cultura: { label: 'Cultura', bar: 'bg-tierra', dot: 'bg-tierra', chipDark: 'bg-tierra/15 text-tierra', symbol: simboloTierra },
};

type CardItem = { title: string; description: string; path: string; icon: React.ReactNode; externalUrl?: string; pillar?: Pillar };

const ESSENTIAL_TOOLS: CardItem[] = [
  { pillar: 'investigacion', title: 'Bases de datos', icon: <Database className="w-5 h-5" />, path: '/bases-de-datos', description: 'Contenidos digitales y revistas científicas indexadas.', externalUrl: 'https://basesdedatos.icesi.edu.co' },
  { pillar: 'investigacion', title: 'Catálogo público', icon: <Book className="w-5 h-5" />, path: '/catalogo-publico', description: 'Libros físicos, revistas y material impreso.', externalUrl: 'https://biblioteca-opac.icesi.edu.co' },
  { pillar: 'investigacion', title: 'Repositorio', icon: <FileText className="w-5 h-5" />, path: '/repositorio-academico', description: 'Tesis y producción académica icesista.', externalUrl: 'https://repository.icesi.edu.co' },
  { pillar: 'creatividad', title: 'Reserva de salas', icon: <DoorOpen className="w-5 h-5" />, path: '/reserva-de-salas', description: 'Espacios individuales y grupales.', externalUrl: 'https://salas.icesi.edu.co' },
  { pillar: 'investigacion', title: 'Formación y asesoría', icon: <GraduationCap className="w-5 h-5" />, path: '/formacion-y-asesoria', description: 'Talleres de búsqueda y citación APA.' },
  { pillar: 'cultura', title: 'Cultura y creatividad', icon: <Sparkles className="w-5 h-5" />, path: '/cultura-y-creatividad', description: 'Clubes, cineforo, vinilos y eventos.' },
];

const PROFILES = [
  { label: 'Estudiantes', icon: <Users className="w-10 h-10" strokeWidth={1.25} />, path: '/yo-soy/estudiante', hint: 'Ingresar al panel' },
  { label: 'Profesores', icon: <Smile className="w-10 h-10" strokeWidth={1.25} />, path: '/yo-soy/profesor', hint: 'Ingresar al panel' },
  { label: 'Graduados', icon: <GraduationCap className="w-10 h-10" strokeWidth={1.25} />, path: '/yo-soy/graduado', hint: 'Ingresar al panel' },
  { label: 'Visitantes', icon: <Globe className="w-10 h-10" strokeWidth={1.25} />, path: '/la-biblioteca', hint: 'Horarios y acceso' },
];

// Los tres pisos del documento "Territorio de saberes": cada piso es un elemento y se asocia a un pilar.
const FLOORS = [
  { n: 3, element: 'Aire', verb: 'Explorar', pillar: 'investigacion' as Pillar, room: 'Sala Colibrí', phrase: 'Las ideas no tienen límites; vuelan, despiertan preguntas y nos llevan a explorar nuevos mundos.', edge: 'bg-aire', symbol: simboloAire, animal: colibri, path: '/catalogo-publico' },
  { n: 2, element: 'Agua', verb: 'Fluir', pillar: 'creatividad' as Pillar, room: 'Sala ballena jorobada', phrase: 'Las ideas fluyen, se encuentran y se transforman cuando compartimos lo que sabemos.', edge: 'bg-agua', symbol: simboloAgua, animal: ballena, path: '/reserva-de-salas' },
  { n: 1, element: 'Tierra', verb: 'Cultivar', pillar: 'cultura' as Pillar, room: 'Raíces', phrase: 'El conocimiento echa raíces, se cultiva y crece con cada aprendizaje.', edge: 'bg-tierra', symbol: simboloTierra, animal: arbol, path: '/cultura-y-creatividad' },
];
const FIRE = { element: 'Fuego', verb: 'Encender', phrase: 'Es la chispa que despierta la curiosidad, la pasión por aprender y el deseo de transformar nuestro entorno.', path: '/agenda' };

// "Tema del mes": 1 pieza protagonista + 2 secundarias unidas por un mismo relato.
const THEME_OF_MONTH = {
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
const KEEP_EXPLORING: CardItem[] = [
  { title: 'Formación y asesoría', description: 'Aprende a buscar, evaluar y citar fuentes con el equipo de la biblioteca.', path: '/formacion-y-asesoria', icon: <Lightbulb className="w-5 h-5" /> },
  { title: 'Préstamo interbibliotecario', description: '¿No tenemos el libro? Lo pedimos a otra universidad por ti.', path: '/prestamo-interbibliotecario', icon: <Globe className="w-5 h-5" /> },
  { title: 'Guías y tutoriales', description: 'Paso a paso para sacarle provecho a cada recurso.', path: '/guias-y-tutoriales', icon: <Info className="w-5 h-5" /> },
];

// Colores de chip por tipo de evento (color al 10% de fondo, como en el prototipo).
const EVENT_PILLAR: Record<string, Pillar> = { Formación: 'investigacion', Cultura: 'cultura', Virtual: 'investigacion' };
const NEWS_PILLAR: Record<string, Pillar | undefined> = { Recursos: 'investigacion', Cultura: 'cultura' };

/* ------------------------------------------------------------------ */
/* Piezas reutilizables                                                */
/* ------------------------------------------------------------------ */

/** Texto sobre el título (ExtraLight 24px) con el número de capítulo del recorrido. */
function Eyebrow({ n, children, dark = false, className = '' }: { n?: string; children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={`eyebrow ${dark ? 'text-white' : 'text-brand-gray'} ${className}`}>
      {n && <span className={`text-xs md:text-sm font-bold tabular-nums mr-2 align-middle ${dark ? 'text-brand-yellow' : 'text-brand-blue'}`}>{n}</span>}
      {children}
    </p>
  );
}

/** Tarjeta del prototipo: blanca, recta, sombra suave, ícono en cuadro gris, título + línea + descripción. */
const ToolCard: React.FC<{ item: CardItem }> = ({ item }) => {
  return (
    <div className="group relative bg-white shadow-card hover:shadow-lg transition-shadow p-6 flex flex-col gap-6 h-full">
      {item.pillar && <span className={`absolute top-0 inset-x-0 h-1 ${PILLARS[item.pillar].bar}`} aria-hidden="true" />}
      <span className="w-[52px] h-[52px] bg-brand-border/20 text-brand-gray flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
        {item.icon}
      </span>
      <div className="flex flex-col gap-4 opacity-60 group-hover:opacity-100 transition-opacity flex-grow">
        <div className="flex flex-col gap-[11px]">
          {item.pillar && (
            <span className="inline-flex items-center gap-1.5 text-xs text-black">
              <img src={PILLARS[item.pillar].symbol} alt="" className="w-4 h-4" />
              {PILLARS[item.pillar].label}
            </span>
          )}
          <Link to={item.path} className="text-lg font-bold leading-[1.3] text-black after:absolute after:inset-0">
            {item.title}
          </Link>
          <span className="h-px w-full bg-black/60" />
        </div>
        <p className="text-sm md:text-base leading-[1.3] text-black">{item.description}</p>
      </div>
      {item.externalUrl && (
        <a
          href={item.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 self-start inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline"
        >
          Ir al servicio <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
};

export default function Inicio() {
  const navigate = useNavigate();

  const filterOptions = [
    { id: 'eds', label: 'Todo', placeholder: 'Libros, artículos, bases de datos, journals…', icon: <Search className="w-4 h-4" /> },
    { id: 'fisica', label: 'Colección física', placeholder: 'Libros, revistas y material en estanterías…', icon: <Book className="w-4 h-4" /> },
    { id: 'repositorio', label: 'Repositorio académico', placeholder: 'Tesis, investigaciones y documentos de Icesi…', icon: <FileText className="w-4 h-4" /> },
    { id: 'audiovisual', label: 'Repositorio audiovisual', placeholder: 'Conferencias, lecciones académicas y podcasts…', icon: <Video className="w-4 h-4" /> },
    { id: 'eresources', label: 'Bases de datos', placeholder: 'Bases de datos científicas y recursos electrónicos…', icon: <Database className="w-4 h-4" /> },
    { id: 'google', label: 'Google Académico', placeholder: 'Artículos científicos en Google Académico…', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'publicaciones', label: 'Revistas', placeholder: 'Revistas, journals y publicaciones científicas…', icon: <Newspaper className="w-4 h-4" /> },
  ];

  const [selectedFilter, setSelectedFilter] = React.useState(filterOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFilter.id === 'audiovisual') { navigate('/repositorio-audiovisual'); return; }
    if (selectedFilter.id === 'repositorio') { navigate('/repositorio-academico'); return; }
    if (selectedFilter.id === 'fisica') { navigate('/catalogo-publico'); return; }
    if (selectedFilter.id === 'eresources') { navigate('/bases-de-datos'); return; }
    if (selectedFilter.id === 'google') {
      window.open(`https://scholar.google.com/scholar?q=${encodeURIComponent(searchQuery)}`, '_blank');
      return;
    }
    navigate(searchQuery.trim() ? `/buscar-todo?q=${encodeURIComponent(searchQuery)}` : '/buscar-todo');
  };

  // Los ids coinciden con los de NoticiaDetalle para que cada tarjeta abra su propia noticia.
  const news = [
    { id: 0, title: 'Nuevas bases de datos especializadas en medicina', date: '02 mayo, 2026', category: 'Recursos', excerpt: 'Cinco nuevas plataformas digitales para fortalecer la investigación y la docencia de la Facultad de Ciencias de la Salud.' },
    { id: 1, title: 'Exposición fotográfica: Caminos del Valle', date: '28 abril, 2026', category: 'Cultura', excerpt: 'La geografía y arquitectura del Valle del Cauca a través del lente de nuestros estudiantes de artes y diseño.' },
    { id: 2, title: 'Horarios especiales por temporada de exámenes', date: '25 abril, 2026', category: 'Servicios', excerpt: 'Para apoyar el estudio intensivo del cierre de semestre, la biblioteca amplía su horario nocturno.' },
  ];

  const events = [
    { id: 1, title: 'Taller: Citación Normas APA 7ma edición', date: '22', month: 'abril', time: '10:00 AM - 12:00 PM', type: 'Formación' },
    { id: 2, title: 'Club de lectura: Voces Latinoamericanas', date: '24', month: 'abril', time: '04:00 PM - 05:30 PM', type: 'Cultura' },
    { id: 3, title: 'Webinar: Estrategias de búsqueda avanzada', date: '28', month: 'abril', time: '02:00 PM - 03:30 PM', type: 'Virtual' },
  ];

  return (
    <div className="flex flex-col">
      {/* 01 · Portada — Biblioteca · Territorio de saberes */}
      <section className="relative bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative z-10">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base text-brand-gray mb-4">
              <span className="font-bold text-agua">Biblioteca</span>
              <span className="flex items-center gap-1" aria-hidden="true">
                {[simboloTierra, simboloFuego, simboloAgua, simboloAire].map((src, i) => (
                  <img key={i} src={src} alt="" className="h-4 md:h-5 w-auto" />
                ))}
              </span>
              <span className="font-extralight">Territorio de saberes</span>
            </p>
            <h1 className="text-[34px] sm:text-5xl md:text-[56px] font-bold text-brand-gray leading-[1.15] mb-5 text-balance">
              <span className="underline decoration-aire decoration-[3px] underline-offset-[8px]">Investigación</span>,{' '}
              <span className="underline decoration-tierra decoration-[3px] underline-offset-[8px]">cultura</span> y{' '}
              <span className="underline decoration-agua decoration-[3px] underline-offset-[8px]">creatividad</span>, abiertas a todos.
            </h1>
            <p className="text-lg md:text-xl font-extralight leading-[1.3] text-brand-gray max-w-xl mb-8">
              Cuatro elementos, cuatro maneras de aprender y un Valle que nos inspira a crecer.
            </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative max-w-2xl z-40"
          >
            <form onSubmit={handleSearchSubmit} className="relative flex bg-white items-stretch h-14 md:h-16 border border-brand-border shadow-card">
              {/* Selector de fuente */}
              <div className="relative flex items-stretch shrink-0">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-expanded={isDropdownOpen}
                  className="px-4 md:px-5 flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:bg-brand-light transition-colors cursor-pointer select-none"
                >
                  <span className="max-w-[90px] md:max-w-none truncate">{selectedFilter.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-[260px] bg-white shadow-card p-2 text-left z-50"
                      >
                        {filterOptions.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => { setSelectedFilter(opt); setIsDropdownOpen(false); }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm text-left cursor-pointer transition-colors ${
                              selectedFilter.id === opt.id ? 'bg-brand-blue/10 text-brand-blue font-bold' : 'text-brand-gray hover:bg-brand-light'
                            }`}
                          >
                            <span className="text-brand-muted">{opt.icon}</span>
                            {opt.label}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-px my-3 bg-brand-border shrink-0" />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={selectedFilter.placeholder}
                aria-label="Buscar en la biblioteca"
                className="flex-grow min-w-0 px-4 text-sm md:text-base text-brand-gray bg-transparent placeholder:text-brand-gray-200 focus:outline-none"
              />

              <button
                type="submit"
                aria-label="Buscar"
                className="w-14 md:w-16 bg-brand-blue hover:bg-brand-blue/90 text-white flex items-center justify-center shrink-0 cursor-pointer transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-brand-muted mr-1">Accesos rápidos:</span>
              {QUICK_LINKS.map(({ label, path }) => (
                <Link key={path} to={path} className="chip bg-brand-light text-brand-gray border border-brand-border hover:bg-agua hover:text-white hover:border-agua transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
          </div>
          <div className="hidden lg:block lg:col-span-5" aria-hidden="true">
            <img src={ilustracionTerritorio} alt="" className="w-full max-w-[440px] ml-auto opacity-35" />
          </div>
        </div>
      </section>

      {/* 02 · Lo esencial */}
      <SectionReveal className="bg-brand-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Eyebrow n="02">Lo esencial</Eyebrow>
            <h2 className="section-title">
              Herramientas para tu <span className="text-brand-purple">éxito</span>
            </h2>
            <p className="eyebrow text-brand-gray mt-4 !text-base md:!text-xl">
              Lo que más usa la comunidad Icesi para estudiar, investigar y crear.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 xl:gap-6">
            {ESSENTIAL_TOOLS.map((item) => <ToolCard key={item.path} item={item} />)}
          </div>
        </div>
      </SectionReveal>

      {/* 03 · Tema del mes — spotlight curado: 1 protagonista + 2 pasos */}
      <SectionReveal className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-10 md:mb-12">
            <Eyebrow n="03">Tema del mes</Eyebrow>
            <h2 className="section-title">
              Leer, crear, <span className="text-brand-blue">conversar</span>
            </h2>
            <p className="text-base leading-[1.3] text-brand-gray/80 mt-4 max-w-2xl">
              La biblioteca también es escenario: clubes, vinilos, conferencias y talleres para la comunidad Icesi y para quien nos visite.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Link
              to={THEME_OF_MONTH.featured.path}
              className="lg:col-span-7 group flex flex-col justify-end min-h-[300px] p-8 md:p-12 bg-brand-blue text-white"
            >
              <span className="chip self-start bg-fuego text-black font-bold mb-4">{THEME_OF_MONTH.featured.kicker}</span>
              <h3 className="text-[28px] md:text-[32px] font-bold leading-[1.3] mb-3 max-w-md">{THEME_OF_MONTH.featured.title}</h3>
              <p className="text-base leading-[1.3] text-white/80 max-w-md mb-8">{THEME_OF_MONTH.featured.description}</p>
              <span className="self-start inline-flex items-center gap-1 h-10 px-4 bg-white text-black text-sm font-bold group-hover:bg-brand-yellow transition-colors">
                {THEME_OF_MONTH.featured.cta} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {THEME_OF_MONTH.items.map((item) => (
                <Link key={item.path} to={item.path} className="group flex gap-5 p-6 md:p-8 bg-white shadow-card hover:shadow-lg transition-shadow">
                  <span className="w-[52px] h-[52px] bg-brand-border/20 text-brand-gray flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-sm text-brand-muted">{item.kicker}</span>
                    <span className="text-lg font-bold leading-[1.3] text-black group-hover:text-brand-blue transition-colors">{item.title}</span>
                    <span className="text-base leading-[1.3] text-black/60">{item.description}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* 04 · Lee */}
      <BookSlider eyebrow={<Eyebrow n="04">Colección destacada</Eyebrow>} />

      {/* 05 · Participa — noticias + agenda */}
      <SectionReveal className="bg-white py-16 md:py-20 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Noticias */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-end justify-between gap-4 pb-8 border-b border-brand-border">
              <div>
                <Eyebrow n="05">Lo más reciente</Eyebrow>
                <h2 className="section-title">Noticias y actualidad</h2>
              </div>
              <Link to="/noticias-y-novedades" className="shrink-0 inline-flex items-center gap-1 text-base text-black hover:text-brand-blue transition-colors">
                Ver todas <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
            </div>

            <Link to={`/noticia/${news[0].id}`} className="group flex flex-col gap-6">
              <div className="relative aspect-[797/424] bg-brand-gray flex items-center justify-center overflow-hidden">
                <span className="text-white/20 font-bold text-xl md:text-2xl">Imagen destacada</span>
                <span className="chip absolute bottom-6 right-6 bg-fuego text-black font-bold">Destacada</span>
              </div>
              <div className="flex flex-col gap-3.5 py-4">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-lg font-bold text-brand-blue">{NEWS_PILLAR[news[0].category] && <span className={`w-2.5 h-2.5 ${PILLARS[NEWS_PILLAR[news[0].category]!].dot}`} title={PILLARS[NEWS_PILLAR[news[0].category]!].label} />}{news[0].category}</span>
                  <span className="text-sm text-brand-muted">•</span>
                  <span className="text-sm text-brand-muted">{news[0].date}</span>
                </div>
                <h3 className="text-2xl md:text-[32px] font-bold leading-[1.3] text-brand-gray group-hover:text-brand-blue transition-colors">{news[0].title}</h3>
                <p className="text-base leading-[1.3] text-brand-gray">{news[0].excerpt}</p>
              </div>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {news.slice(1).map((item) => (
                <Link key={item.id} to={`/noticia/${item.id}`} className="group flex flex-col gap-3.5 py-4 border-t border-brand-border">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-lg font-bold text-brand-blue">{NEWS_PILLAR[item.category] && <span className={`w-2.5 h-2.5 ${PILLARS[NEWS_PILLAR[item.category]!].dot}`} title={PILLARS[NEWS_PILLAR[item.category]!].label} />}{item.category}</span>
                    <span className="text-sm text-brand-muted">•</span>
                    <span className="text-sm text-brand-muted">{item.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-[1.3] text-brand-gray group-hover:text-brand-blue transition-colors">{item.title}</h3>
                  <p className="text-base leading-[1.3] text-brand-gray">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Agenda */}
          <aside className="lg:col-span-5 bg-black text-white px-6 py-10 md:px-12 md:py-16 flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-12">
              <div>
                <Eyebrow dark>Agenda</Eyebrow>
                <h2 className="section-title !text-white">Próximos eventos</h2>
              </div>
              <ul className="flex flex-col gap-4">
                {events.map((event, i) => (
                  <li key={event.id}>
                    <Link to={`/agenda/evento/${event.id}`} className="group flex items-center gap-6">
                      <span className="w-20 h-20 shrink-0 bg-brand-gray flex flex-col items-center justify-center group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                        <span className="text-2xl font-bold leading-[1.3] -mb-1">{event.date}</span>
                        <span className="text-xs leading-[1.3]">{event.month}</span>
                      </span>
                      <span className="flex flex-col gap-2 min-w-0">
                        <span className="flex items-center gap-2">
                          <span className={`chip ${PILLARS[EVENT_PILLAR[event.type] ?? 'investigacion'].chipDark}`}>{event.type}</span>
                          {i === 0 && <span className="chip bg-fuego text-black font-bold">Próximo</span>}
                        </span>
                        <span className="flex flex-col gap-1">
                          <span className="text-lg font-bold leading-[1.3] group-hover:text-brand-yellow transition-colors">{event.title}</span>
                          <span className="text-sm leading-[1.3] opacity-60">{event.time}</span>
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-12">
              <span className="h-px w-full bg-white/20" />
              <Link to="/agenda" className="wireframe-button-secondary w-full hover:!bg-brand-yellow hover:!text-black hover:!border-brand-yellow">
                Ver calendario completo <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </aside>
        </div>
      </SectionReveal>

      {/* 06 · Territorio de saberes — tres pisos, tres elementos; el fuego los atraviesa */}
      <SectionReveal className="bg-white py-16 md:py-24 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Eyebrow n="06">Territorio de saberes</Eyebrow>
            <h2 className="section-title -mt-6 lg:!text-[44px]">Explora la biblioteca <span className="text-agua">por pisos</span></h2>
            <p className="text-base md:text-lg leading-[1.3] text-brand-gray/80">
              Ven y conoce la Biblioteca Icesi, donde el aire, el agua, la tierra y el fuego se convierten en metáforas del conocimiento y de las diferentes formas de redescubrir el Valle del Cauca.
            </p>
            <ul className="border-t border-brand-border">
              {[
                { label: '¿Cómo encuentro un libro en la estantería abierta?', path: '/preguntas-frecuentes' },
                { label: 'Préstamos: libros, portátiles y salas', path: '/prestamo-de-material-impreso' },
                { label: 'Reserva un espacio para tu proyecto', path: '/reserva-de-salas' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="group flex items-center justify-between gap-4 py-3.5 border-b border-brand-border text-sm font-bold text-brand-gray hover:text-agua transition-colors">
                    {l.label} <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/la-biblioteca" className="wireframe-button-primary self-start !bg-black hover:!bg-agua">Conoce la biblioteca</Link>
          </div>

          <div className="lg:col-span-7 relative pl-5 md:pl-7">
            {/* Fuego: línea fina que atraviesa los tres pisos */}
            <span className="absolute left-0 top-0 bottom-12 w-[3px] bg-fuego" aria-hidden="true" />
            <ol className="flex flex-col gap-3">
              {FLOORS.map((f) => (
                <li key={f.n}>
                  <Link to={f.path} className="group relative flex items-center gap-4 md:gap-6 bg-white border border-brand-border hover:shadow-card transition-shadow pl-5 md:pl-7 pr-4 md:pr-6 py-5 overflow-hidden">
                    <span className={`absolute left-0 inset-y-0 w-1 ${f.edge}`} aria-hidden="true" />
                    <img src={f.symbol} alt="" className="w-9 h-9 md:w-11 md:h-11 shrink-0" />
                    <span className="relative z-10 flex flex-col gap-1 min-w-0 sm:pr-24 md:pr-32">
                      <span className="text-[11px] md:text-xs text-brand-muted">Piso {f.n} · {f.element} · {f.room}</span>
                      <span className="text-xl md:text-2xl font-bold leading-[1.2] text-brand-gray group-hover:text-agua transition-colors">{PILLARS[f.pillar].label}</span>
                      <span className="hidden md:block text-sm leading-[1.3] text-brand-gray/70">{f.phrase}</span>
                    </span>
                    <img src={f.animal} alt="" className="hidden sm:block absolute right-4 md:right-6 bottom-2 h-[78%] w-auto max-w-[120px] object-contain object-bottom opacity-25 group-hover:opacity-60 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ol>
            <p className="mt-4 flex items-start gap-2 text-xs leading-[1.4] text-brand-gray/80">
              <img src={simboloFuego} alt="" className="w-4 h-4 mt-px shrink-0" />
              <span><span className="font-bold text-fuego-ink">Fuego · transversal.</span> {FIRE.phrase}</span>
            </p>
          </div>
        </div>
      </SectionReveal>

      {/* 07 · Puertas abiertas — perfiles como invitación, no como filtro */}
      <SectionReveal className="bg-black text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Eyebrow n="07" dark>Puertas abiertas</Eyebrow>
            <h2 className="section-title !text-white">
              Diseñado para <span className="text-brand-yellow">todos.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {PROFILES.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                className="group border border-brand-gray-400 hover:border-white flex flex-col items-center justify-center gap-4 px-4 md:px-8 py-10 md:py-16 transition-colors"
              >
                <span className="text-white group-hover:text-brand-yellow transition-colors">{p.icon}</span>
                <span className="text-lg md:text-2xl font-bold leading-[1.3]">{p.label}</span>
                <span className="inline-flex items-center gap-1 text-sm text-brand-gray-200 group-hover:text-white transition-colors">
                  {p.hint} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* 07 · Sigue explorando — cierre suave con 3 recomendados curados */}
      <SectionReveal className="bg-brand-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <Eyebrow n="08">Sigue explorando</Eyebrow>
              <h2 className="section-title">¿Ya conocías <span className="text-brand-green">esto?</span></h2>
            </div>
            <p className="text-base leading-[1.3] text-brand-gray/80 max-w-sm">
              La biblioteca es más que libros: tres servicios que la comunidad suele descubrir tarde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KEEP_EXPLORING.map((item) => <ToolCard key={item.path} item={item} />)}
          </div>
          <p className="mt-12 text-center text-base text-brand-gray">
            ¿No encuentras lo que buscas?{' '}
            <Link to="/contacto" className="font-bold text-brand-blue underline underline-offset-4 hover:text-black transition-colors">
              Habla con un bibliotecario
            </Link>
          </p>
        </div>
      </SectionReveal>
    </div>
  );
}
