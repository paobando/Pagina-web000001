import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, Globe, Mail, Phone, ChevronDown, ArrowRight, Video, Sparkles, HelpCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SearchModal } from './SearchModal';

interface SubNavItem {
  label: string;
  path: string;
  desc?: string;
  badge?: string;
  isDivider?: boolean;
  icon?: any;
}

interface NavItem {
  label: string;
  path: string;
  children?: SubNavItem[];
}

const mainNav: NavItem[] = [
  { 
    label: 'Recursos de información', 
    path: '/recursos-de-informacion',
    children: [
      { label: 'Catálogo público (EDS)', path: '/catalogo-publico', desc: 'Encuentra libros físicos y colecciones mediante el descubridor EDS' },
      { label: 'Bases de datos', path: '/bases-de-datos', desc: 'Contenidos digitales y revistas científicas indexadas por área' },
      { label: 'Repositorio académico', path: '/repositorio-academico', desc: 'Tesis, producción científica y memoria intelectual de Icesi' },
      { label: 'Repositorio audiovisual', path: '/repositorio-audiovisual', desc: 'Conferencias magistrales, lecciones académicas y podcasts' },
      { label: 'Repositorio de datos institucionales', path: '/datover', desc: 'Conjuntos de datos abiertos para investigación y preservación' },
    ]
  },
  { 
    label: 'Servicios', 
    path: '/servicios',
    children: [
      { label: 'Reserva de salas', path: '/reserva-de-salas', desc: 'Espacios colaborativos y salas de estudio grupal equipadas' },
      { label: 'Préstamo de material impreso', path: '/prestamo-de-material-impreso', desc: 'Lleva libros y material físico a casa con renovación en línea' },
      { label: 'Préstamo de recursos móviles', path: '/prestamo-de-recursos-moviles', desc: 'Computadores portátiles y audífonos para uso dentro del campus' },
      { label: 'Tocadiscos', path: '/tocadiscos', desc: 'Estaciones de escucha analógica de vinilos de alta fidelidad' },
      { label: 'Préstamo interbibliotecario', path: '/prestamo-interbibliotecario', desc: 'Pide a otra biblioteca el libro que no tenemos (RUAV y nacional)' },
      { label: 'Compra de material', path: '/compra-de-material-bibliografico', desc: 'Solicita la adquisición de nuevos títulos para docencia e investigación' },
      { label: 'Cultura y creatividad', path: '/cultura-y-creatividad', desc: 'Clubes de lectura, cine foros, exposiciones y talleres abiertos', isDivider: true },
    ]
  },
  { 
    label: 'Formación e investigación', 
    path: '/formacion-e-investigacion',
    children: [
      { label: 'Formación y asesoría', path: '/formacion-y-asesoria', desc: 'Talleres en normas APA, gestores bibliográficos y búsquedas expertas' },
      { label: 'Guías y tutoriales', path: '/guias-y-tutoriales', desc: 'Instructivos paso a paso para el uso de bases de datos y software' },
      { label: 'Análisis de similitud', path: '/check-bit', desc: 'Validación de integridad académica y prevención de coincidencias (Check BIT)' },
      { label: 'Vigilancia estratégica', path: '/vigilancia-estrategica', desc: 'Estudios de tendencias científicas, patentes e inteligencia investigativa' },
    ]
  },
  { 
    label: 'La biblioteca', 
    path: '/la-biblioteca',
    children: [
      { label: 'Quiénes somos', path: '/quienes-somos', desc: 'Conoce nuestro equipo de trabajo, misión y pilares institucionales' },
      { label: 'Noticias y novedades', path: '/noticias-y-novedades', desc: 'Últimas adquisiciones, anuncios y comunicados para la comunidad' },
      { label: 'Agenda de eventos', path: '/agenda', desc: 'Programación mensual de actividades académicas y culturales' },
      { label: 'Preguntas frecuentes', path: '/preguntas-frecuentes', desc: 'Respuestas inmediatas a las dudas más comunes sobre servicios' },
      { label: 'Contacto', path: '/contacto', desc: 'Canales de atención directa, ubicación y formulario de PQRS' },
    ]
  },
  { 
    label: 'Yo soy', 
    path: '/yo-soy',
    children: [
      { label: 'Estudiante', path: '/yo-soy/estudiante', desc: 'Salas de estudio, préstamo de portátiles, libros y asesorías' },
      { label: 'Profesor', path: '/yo-soy/profesor', desc: 'Vigilancia estratégica, compra de material y apoyo docente' },
      { label: 'Graduado', path: '/yo-soy/graduado', desc: 'Beneficios continuos, consulta en sala y préstamo externo' },
    ]
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>('/recursos-de-informacion');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const handleMouseEnter = (path: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredNav(path);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 180);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white shadow-lg">
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      
      {/* Main Header */}
      <div className="bg-[#5454E9] max-w-[1600px] mx-auto px-4 md:px-12 flex items-center justify-between h-20 md:h-24">
        {/* Logo Section */}
        <Link to="/inicio" className="flex items-center gap-4 group shrink-0">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-white rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="w-6 h-6 border-t-2 border-r-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-white/60">Universidad</span>
            <span className="text-xl md:text-3xl font-black tracking-tighter text-white">ICESI</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-8 lg:space-x-10 ml-auto pr-10">
          {mainNav.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const isMenuOpen = hoveredNav === item.path;

            return (
              <div
                key={item.path}
                className="relative py-6"
                onMouseEnter={() => handleMouseEnter(item.path)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <Link
                    to={item.path}
                    className="text-sm font-bold tracking-tight text-white hover:text-white/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ChevronDown className={`w-3.5 h-3.5 text-white/80 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
                  )}
                </div>

                {/* Underline indicator */}
                {isActive ? (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-4 left-0 w-full h-0.5 bg-brand-yellow" 
                  />
                ) : (
                  <div className="absolute bottom-4 left-0 w-0 h-0.5 bg-white/40 group-hover:w-full transition-all duration-300" />
                )}

                {/* Dropdown Menu Popover */}
                <AnimatePresence>
                  {isMenuOpen && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-0 w-80 md:w-96 bg-white text-brand-gray border border-gray-200 rounded-2xl shadow-2xl p-4 z-50 overflow-hidden"
                    >
                      <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
                        <span className="text-[10px] font-black uppercase text-brand-blue tracking-wider">
                          {item.label}
                        </span>
                        <Link 
                          to={item.path}
                          onClick={() => setHoveredNav(null)}
                          className="text-[10px] font-bold text-gray-500 hover:text-brand-blue flex items-center gap-1"
                        >
                          <span>Ver sección</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="space-y-1">
                        {item.children.map((sub) => (
                          <div key={sub.path}>
                            {sub.isDivider && (
                              <div className="my-2 border-t border-gray-100" />
                            )}
                            <Link
                              to={sub.path}
                              onClick={() => setHoveredNav(null)}
                              className="group/sub flex items-start justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                              <div className="pr-2">
                                <div className="flex items-center gap-2">
                                  {sub.isDivider && (
                                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                  )}
                                  <span className={`text-xs font-bold transition-colors ${sub.isDivider ? 'text-gray-900 font-extrabold' : 'text-gray-800 group-hover/sub:text-brand-blue'}`}>
                                    {sub.label}
                                  </span>
                                  {sub.badge && (
                                    <span className="px-1.5 py-0.5 bg-brand-yellow text-brand-gray text-[9px] font-black rounded uppercase tracking-wider">
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                {sub.desc && (
                                  <p className="text-[11px] text-gray-400 group-hover/sub:text-gray-500 transition-colors line-clamp-1 mt-0.5">
                                    {sub.desc}
                                  </p>
                                )}
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover/sub:text-brand-blue group-hover/sub:translate-x-1 transition-all shrink-0 mt-1" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-white hover:text-brand-yellow transition-colors cursor-pointer"
            aria-label="Buscar en la biblioteca"
          >
            <Search className="w-5 h-5" />
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 xl:hidden">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-white hover:text-white/70 transition-colors"
            aria-label="Abrir buscador"
          >
            <Search className="w-6 h-6" />
          </button>
          <button 
            className="p-2 text-white cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú móvil"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-white/10 shadow-2xl px-6 py-8 z-40 overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col space-y-4">
              {mainNav.map((item) => {
                const isExpanded = mobileExpanded === item.path;

                return (
                  <div key={item.path} className="border-b border-white/10 pb-4">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-black text-white hover:text-brand-yellow tracking-tight"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          type="button"
                          onClick={() => setMobileExpanded(isExpanded ? null : item.path)}
                          className="p-2 text-white/70 hover:text-white"
                          aria-label="Alternar submenú"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Submenu in Mobile */}
                    {item.children && isExpanded && (
                      <div className="mt-3 pl-3 space-y-2.5 border-l-2 border-brand-blue/50">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between py-1.5 text-sm font-semibold text-white/80 hover:text-white"
                          >
                            <span className="flex items-center gap-2">
                              {sub.label}
                              {sub.badge && (
                                <span className="px-1.5 py-0.2 bg-brand-yellow text-slate-900 text-[9px] font-black rounded uppercase">
                                  {sub.badge}
                                </span>
                              )}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10">
                <Link
                  to="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-xs font-bold text-white/70 hover:text-white transition-colors"
                >
                  <span className="p-2 bg-white/5 rounded-sm"><Phone className="w-4 h-4" /></span>
                  Contacto
                </Link>
                <Link
                  to="/preguntas-frecuentes"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-xs font-bold text-white/70 hover:text-white transition-colors"
                >
                  <span className="p-2 bg-white/5 rounded-sm"><HelpCircle className="w-4 h-4" /></span>
                  Preguntas frecuentes
                </Link>
              </div>

              <div className="pt-6 text-center">
                 <span className="text-2xl font-black italic tracking-tighter uppercase opacity-20">Biblioteca Icesi</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sec: string) => {
    setOpenSection(openSection === sec ? null : sec);
  };

  return (
    <footer className="bg-[#5454E9] text-white pt-12 pb-8 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Desktop Grid / Mobile Accordions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-12 border-b border-white/20">
          
          {/* Col 1: Identity & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-[#5454E9] flex items-center justify-center font-black text-lg rounded-sm shadow-xs">
                B
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-black text-lg tracking-tight">Biblioteca</span>
                <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Universidad Icesi</span>
              </div>
            </div>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-sm">
              Espacio integral para el aprendizaje, la investigación y la cultura. Conectamos a la comunidad universitaria con el conocimiento global.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Síguenos:</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white hover:text-[#5454E9] flex items-center justify-center text-xs font-bold transition-colors">ig</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white hover:text-[#5454E9] flex items-center justify-center text-xs font-bold transition-colors">fb</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white hover:text-[#5454E9] flex items-center justify-center text-xs font-bold transition-colors">x</a>
            </div>
          </div>

          {/* Col 2: Enlaces rápidos (exact menu names) */}
          <div className="border-t md:border-t-0 border-white/20 pt-4 md:pt-0">
            <button 
              onClick={() => toggleSection('links')}
              className="w-full flex items-center justify-between md:cursor-default font-black text-sm md:text-base tracking-tight mb-3 md:mb-4 border-l-4 border-brand-yellow pl-2 text-left"
            >
              <span>Enlaces rápidos</span>
              <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${openSection === 'links' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-2.5 text-xs md:text-sm text-white/90 font-medium ${openSection === 'links' ? 'block' : 'hidden md:block'}`}>
              <li>
                <Link to="/recursos-de-informacion" className="hover:text-brand-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-white/40" /> Recursos de información
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-brand-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-white/40" /> Servicios
                </Link>
              </li>
              <li>
                <Link to="/formacion-e-investigacion" className="hover:text-brand-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-white/40" /> Formación e investigación
                </Link>
              </li>
              <li>
                <Link to="/la-biblioteca" className="hover:text-brand-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-white/40" /> La biblioteca
                </Link>
              </li>
              <li>
                <Link to="/yo-soy" className="hover:text-brand-yellow transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-white/40" /> Yo soy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacto */}
          <div className="border-t md:border-t-0 border-white/20 pt-4 md:pt-0">
            <button 
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between md:cursor-default font-black text-sm md:text-base tracking-tight mb-3 md:mb-4 border-l-4 border-brand-yellow pl-2 text-left"
            >
              <span>Contacto</span>
              <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${openSection === 'contact' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 text-xs md:text-sm text-white/90 ${openSection === 'contact' ? 'block' : 'hidden md:block'}`}>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>(602) 555 2334 ext. 4120</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>biblioteca@icesi.edu.co</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>Calle 18 No. 122-135, Pance, Cali</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Horario (Jornada continua) */}
          <div className="border-t md:border-t-0 border-white/20 pt-4 md:pt-0">
            <button 
              onClick={() => toggleSection('hours')}
              className="w-full flex items-center justify-between md:cursor-default font-black text-sm md:text-base tracking-tight mb-3 md:mb-4 border-l-4 border-brand-yellow pl-2 text-left"
            >
              <span>Horario de atención</span>
              <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${openSection === 'hours' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`space-y-2 text-xs md:text-sm ${openSection === 'hours' ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white/10 p-3 rounded-lg border border-white/20 space-y-2">
                <div className="flex flex-col">
                  <span className="font-bold text-white">Lunes a viernes:</span>
                  <span className="text-white/90 font-medium">7:00 am - 9:00 pm <span className="text-brand-yellow font-bold">(jornada continua)</span></span>
                </div>
                <div className="flex flex-col border-t border-white/10 pt-1.5">
                  <span className="font-bold text-white">Sábados:</span>
                  <span className="text-white/90 font-medium">8:00 am - 5:00 pm <span className="text-brand-yellow font-bold">(jornada continua)</span></span>
                </div>
                <div className="flex flex-col border-t border-white/10 pt-1.5">
                  <span className="font-bold text-white">Domingos y festivos:</span>
                  <span className="text-white/70 italic">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/80 font-bold uppercase tracking-wider">
          <span>© 2026 Universidad Icesi · Biblioteca</span>
          <div className="flex items-center gap-5">
            <Link to="/quienes-somos" className="hover:text-brand-yellow transition-colors">Quiénes somos</Link>
            <Link to="/preguntas-frecuentes" className="hover:text-brand-yellow transition-colors">Preguntas frecuentes</Link>
            <Link to="/contacto" className="hover:text-brand-yellow transition-colors">PQRS</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
