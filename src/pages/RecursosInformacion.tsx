import { useState, useMemo, FormEvent, useEffect } from 'react';
import { Search, Database, Book, FileText, Globe, HelpCircle, ArrowRight, Filter, ChevronDown, Info, ExternalLink, Video } from 'lucide-react';
import { PageHeader, WireframeCard } from '../components/UI';
import { Link, useSearchParams } from 'react-router-dom';

export function RecursosInformacion() {
  const resources = [
    { title: 'Catálogo público (EDS)', description: 'Descubre libros impresos, revistas y recursos en un solo punto con EBSCO Discovery Service (EDS).', path: '/catalogo-publico', icon: <Book />, externalUrl: 'https://biblioteca-opac.icesi.edu.co' },
    { title: 'Bases de datos', description: 'Accede a plataformas científicas, revistas indexadas y contenidos digitales especializados.', path: '/bases-de-datos', icon: <Database />, externalUrl: 'https://basesdedatos.icesi.edu.co' },
    { title: 'Repositorio académico', description: 'Tesis de grado, producción investigativa y publicaciones científicas de la comunidad Icesi.', path: '/repositorio-academico', icon: <FileText />, externalUrl: 'https://repository.icesi.edu.co' },
    { title: 'Repositorio audiovisual', description: 'Conferencias magistrales, lecciones académicas, podcasts institucionales y memoria audiovisual.', path: '/repositorio-audiovisual', icon: <Video />, externalUrl: 'https://audiovisuales.icesi.edu.co' },
    { title: 'Repositorio de datos institucionales', description: 'Gestión, preservación y consulta de datasets institucionales en acceso abierto.', path: '/datover', icon: <Globe />, externalUrl: 'https://datover.icesi.edu.co' },
  ];

  return (
    <div>
      <PageHeader 
        title="Recursos de información" 
        description="Accede a nuestra amplia colección de recursos físicos y digitales diseñados para apoyar tu aprendizaje e investigación."
        breadcrumbs={[{ label: 'Recursos de información' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res) => (
            <div key={res.path}>
              <WireframeCard {...res} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-black text-brand-gray mb-6 tracking-tight">¿No encuentras lo que buscas?</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Nuestro equipo de especialistas en información está listo para ayudarte a localizar los recursos que necesitas para tus trabajos o investigaciones.
              </p>
              <div className="space-y-4">
                <Link to="/formacion-y-asesoria" className="wireframe-button-primary text-sm w-full md:w-auto">Solicitar asesoría</Link>
                <Link to="/preguntas-frecuentes" className="text-brand-blue font-bold text-sm flex items-center gap-2 ml-0 md:ml-6">Ver preguntas frecuentes <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 border border-brand-border text-center">
                <span className="text-3xl font-black text-brand-blue block mb-2">100+</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Bases de datos</span>
              </div>
              <div className="bg-white p-6 border border-brand-border text-center">
                <span className="text-3xl font-black text-brand-blue block mb-2">50k+</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">E-books</span>
              </div>
              <div className="bg-white p-6 border border-brand-border text-center">
                <span className="text-3xl font-black text-brand-blue block mb-2">12k+</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Revistas</span>
              </div>
              <div className="bg-white p-6 border border-brand-border text-center">
                <span className="text-3xl font-black text-brand-blue block mb-2">24/7</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Acceso remoto</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { SITE_CONTENT } from '../constants/searchableContent';

export function BuscarTodo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const qParam = searchParams.get('q');
  const [hasSearched, setHasSearched] = useState(false);
  const [query, setQuery] = useState(qParam || '');

  useEffect(() => {
    if (qParam) {
      setQuery(qParam);
      setHasSearched(true);
    }
  }, [qParam]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const normalizedQuery = query.toLowerCase();
    return SITE_CONTENT.filter(item => 
      item.title.toLowerCase().includes(normalizedQuery) || 
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.type.toLowerCase().includes(normalizedQuery) ||
      item.source.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
      setHasSearched(true);
    }
  };

  return (
    <div>
      <PageHeader 
        title="Buscar todo" 
        description="Encuentra cualquier sección, servicio o recurso de información dentro de todo el portal de la biblioteca."
        breadcrumbs={[{ label: 'Recursos de información', path: '/recursos-de-informacion' }, { label: 'Buscar todo' }]}
      />
      
      <section className="wireframe-section">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSearch} className="relative mb-16">
            <input 
              type="text" 
              placeholder="Ingresa una sección, servicio, recurso o palabra clave..."
              className="w-full h-16 md:h-20 pl-8 pr-20 text-xl border-2 border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10 bg-white"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-blue text-white flex items-center justify-center rounded-sm hover:bg-blue-600 transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </form>

          {!hasSearched ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1 space-y-8">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Filtros por tipo
                  </h4>
                  <div className="space-y-4">
                    {['Secciones', 'Recursos', 'Servicios', 'Apoyo', 'Institucional'].map(filter => (
                      <label key={filter} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 border-2 border-brand-border group-hover:border-brand-blue transition-colors rounded-sm"></div>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-brand-blue uppercase tracking-widest">{filter}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="bg-brand-light p-16 text-center border border-dashed border-brand-border rounded-sm">
                  <Globe className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                  <h3 className="text-xl font-black text-brand-gray mb-3 tracking-tight">Encuentra información en todo el sitio</h3>
                  <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                    Usa este buscador para localizar rápidamente cualquier página, sección o servicio que necesites de la biblioteca.
                  </p>
                </div>
                
                <div className="mt-16">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8 border-b border-brand-border pb-4">Secciones populares</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Bases de datos', 'Salas de estudio', 'Normas APA', 'Horarios', 'Agenda'].map(tag => (
                      <button 
                        key={tag} 
                        onClick={() => { setQuery(tag); setSearchParams({ q: tag }); setHasSearched(true); }}
                        className="px-6 py-3 bg-white border border-brand-border text-brand-blue text-[10px] font-black uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all shadow-sm"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               <div className="md:col-span-1 border-r border-brand-border pr-8 space-y-10">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-gray mb-6">Categorías encontradas</h4>
                    <div className="space-y-3">
                      {Array.from(new Set(searchResults.map(r => r.type))).map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                           <div className="w-4 h-4 border border-brand-border group-hover:border-brand-blue transition-colors"></div>
                           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{type} ({searchResults.filter(r => r.type === type).length})</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => { setHasSearched(false); setSearchParams({}); setQuery(''); }} className="text-[10px] font-black text-brand-blue uppercase tracking-widest border-b border-brand-blue pb-1">Nueva búsqueda</button>
               </div>

               <div className="md:col-span-3">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-brand-border">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Encontramos {searchResults.length} resultados para "{query}"</span>
                  </div>

                  <div className="space-y-8">
                     {searchResults.length > 0 ? searchResults.map((result) => (
                       <Link to={result.path} key={result.id} className="p-8 border border-brand-border hover:border-brand-blue hover:shadow-lg transition-all group block bg-white">
                         <div className="flex items-center gap-4 mb-4">
                           <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue px-2 py-0.5 bg-brand-blue/5 border border-brand-blue/10">{result.type}</span>
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"><Globe className="w-3 h-3" /> {result.source}</span>
                         </div>
                         <h4 className="text-xl font-black text-brand-gray mb-3 group-hover:text-brand-blue transition-colors">{result.title}</h4>
                         <p className="text-xs text-gray-500 mb-6 font-medium leading-relaxed">{result.description}</p>
                         <div className="flex gap-4 pt-6 border-t border-brand-border">
                            <span className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-brand-blue">Ir a esta sección <ArrowRight className="w-4 h-4" /></span>
                         </div>
                       </Link>
                     )) : (
                       <div className="p-12 bg-brand-light border border-dashed border-brand-border text-center">
                         <Info className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                         <p className="text-gray-500 uppercase text-[10px] font-black tracking-widest">No se encontraron secciones para "{query}"</p>
                       </div>
                     )}
                  </div>
               </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export function BasesDeDatos() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  const categories = [
    { title: 'Facultad', items: ['Ciencias de la Salud', 'Negocios y Economía Isaac Gilinski', 'Barberi de Ingeniería, Diseño y Ciencias Aplicadas', 'Ciencias Humanas'] },
    { title: 'Área del conocimiento', items: ['Salud y Medicina', 'Administración y Finanzas', 'Tecnología e Innovación', 'Artes y Humanidades', 'Ciencias Básicas'] },
    { title: 'Tipo de recurso', items: ['Artículos', 'Casos de estudio', 'Libros electrónicos', 'Estadísticas', 'Videos'] },
    { title: 'Tipo de acceso', items: ['Acceso abierto', 'Suscrito por la biblioteca'] },
    { title: 'Tipo de perfil', items: ['Estudiantes', 'Profesores', 'Colaboradores', 'Graduados'] },
  ];

  const initialDatabases = [
    {
      title: 'Acervo Digital Institucional en Seguridad Social – ADISS',
      description: 'El ADISS es el repositorio institucional de la Conferencia Interamericana de Seguridad Social. Creado con la finalidad de preservar y poner a disposición de los usuarios su producción editorial histórica y académica.',
      access: 'Acceso abierto',
      isOpen: true,
      tags: {
        facultad: ['Ciencias Humanas'],
        area: ['Artes y Humanidades', 'Ciencias Básicas'],
        perfil: ['Graduados', 'Estudiantes'],
        recurso: ['Artículos']
      }
    },
    {
      title: 'Altmetric Explorer',
      description: 'Plataforma que mide el impacto y la difusión de publicaciones académicas en línea mediante el análisis de menciones en redes sociales, blogs, noticias y políticas gubernamentales.',
      access: 'Suscrito por la biblioteca',
      isOpen: false,
      tags: {
        facultad: ['Negocios y Economía Isaac Gilinski', 'Barberi de Ingeniería, Diseño y Ciencias Aplicadas'],
        area: ['Administración y Finanzas', 'Tecnología e Innovación'],
        perfil: ['Profesores', 'Colaboradores'],
        recurso: ['Estadísticas']
      }
    },
    {
      title: 'APA PsycTherapy',
      description: 'Base de datos que contiene material audiovisual en streaming de APA, que ofrece demostraciones de terapias en video para el aprendizaje de técnicas y modelos de intervención.',
      access: 'Suscrito por la biblioteca',
      isOpen: false,
      tags: {
        facultad: ['Ciencias de la Salud', 'Ciencias Humanas'],
        area: ['Salud y Medicina', 'Artes y Humanidades'],
        perfil: ['Estudiantes', 'Profesores'],
        recurso: ['Videos']
      }
    },
    {
      title: 'Bancoldex Reportes',
      description: 'Información financiera y económica sobre el sector empresarial colombiano, reportes de crédito y análisis de mercado.',
      access: 'Suscrito por la biblioteca',
      isOpen: false,
      tags: {
        facultad: ['Negocios y Economía Isaac Gilinski'],
        area: ['Administración y Finanzas'],
        perfil: ['Estudiantes', 'Graduados'],
        recurso: ['Estadísticas', 'Casos de estudio']
      }
    },
    {
      title: 'ClinicalKey',
      description: 'Plataforma de búsqueda bilingüe que ofrece acceso a la colección más extensa de contenido médico y quirúrgico publicado por Elsevier.',
      access: 'Suscrito por la biblioteca',
      isOpen: false,
      tags: {
        facultad: ['Ciencias de la Salud'],
        area: ['Salud y Medicina'],
        perfil: ['Estudiantes', 'Profesores', 'Colaboradores'],
        recurso: ['Libros electrónicos', 'Artículos']
      }
    },
    {
      title: 'Decision Support',
      description: 'Plataforma con herramientas analíticas para la toma de decisiones en ingeniería y procesos industriales.',
      access: 'Acceso abierto',
      isOpen: true,
      tags: {
        facultad: ['Barberi de Ingeniería, Diseño y Ciencias Aplicadas'],
        area: ['Tecnología e Innovación'],
        perfil: ['Profesores'],
        recurso: ['Casos de estudio']
      }
    }
  ];

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('TODAS');
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    'Facultad': [],
    'Área del conocimiento': [],
    'Tipo de recurso': [],
    'Tipo de acceso': [],
    'Tipo de perfil': []
  });

  const toggleFilter = (category: string, item: string) => {
    setActiveFilters(prev => {
      const current = prev[category] || [];
      const next = current.includes(item) 
        ? current.filter(i => i !== item) 
        : [...current, item];
      return { ...prev, [category]: next };
    });
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedLetter('TODAS');
    setActiveFilters({
      'Facultad': [],
      'Área del conocimiento': [],
      'Tipo de recurso': [],
      'Tipo de acceso': [],
      'Tipo de perfil': []
    });
  };

  const filteredDatabases = useMemo(() => {
    return initialDatabases.filter(db => {
      // 1. Search Query
      if (searchQuery && !db.title.toLowerCase().includes(searchQuery.toLowerCase()) && !db.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // 2. Alphabetical
      if (selectedLetter !== 'TODAS' && !db.title.startsWith(selectedLetter)) {
        return false;
      }

      // 3. Category Filters
      for (const category of Object.keys(activeFilters)) {
        const selectedItems = activeFilters[category];
        if (selectedItems.length === 0) continue;

        let dbValues: string[] = [];
        if (category === 'Facultad') dbValues = db.tags.facultad;
        else if (category === 'Área del conocimiento') dbValues = db.tags.area;
        else if (category === 'Tipo de recurso') dbValues = db.tags.recurso;
        else if (category === 'Tipo de perfil') dbValues = db.tags.perfil;
        else if (category === 'Tipo de acceso') dbValues = [db.access];

        // Ensure at least one selected item from the category is in the database tags
        const hasMatch = selectedItems.some(item => dbValues.includes(item));
        if (!hasMatch) return false;
      }

      return true;
    });
  }, [searchQuery, selectedLetter, activeFilters]);

  // Accordion state
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div>
      <PageHeader 
        title="Bases de datos" 
        description="Explora nuestra colección de recursos digitales especializados, artículos científicos y libros electrónicos."
        breadcrumbs={[{ label: 'Recursos de información', path: '/recursos-de-informacion' }, { label: 'Bases de datos' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white border border-brand-border p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-brand-gray text-sm uppercase tracking-tighter">Búsqueda de recursos</h3>
                <button 
                  onClick={clearFilters}
                  className="text-[10px] font-bold text-brand-blue hover:underline uppercase tracking-widest"
                >
                  Limpiar
                </button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Buscador</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Palabra clave..." 
                      className="wireframe-input py-2 text-sm pr-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Alphabetical */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Por orden alfabético</label>
                  <div className="grid grid-cols-6 gap-1">
                    {alphabet.map(letter => (
                      <button 
                        key={letter} 
                        onClick={() => setSelectedLetter(letter)}
                        className={`aspect-square flex items-center justify-center text-[10px] font-bold border transition-colors ${selectedLetter === letter ? 'bg-brand-blue text-white border-brand-blue' : 'border-brand-border hover:bg-brand-blue/10 hover:border-brand-blue'}`}
                      >
                        {letter}
                      </button>
                    ))}
                    <button 
                      onClick={() => setSelectedLetter('TODAS')}
                      className={`col-span-2 text-[8px] font-bold border transition-colors ${selectedLetter === 'TODAS' ? 'bg-brand-blue text-white border-brand-blue' : 'border-brand-border hover:bg-brand-blue/10 hover:border-brand-blue'}`}
                    >
                      TODAS
                    </button>
                  </div>
                </div>

                {/* Accordion Filters */}
                <div className="space-y-4 pt-4 border-t border-brand-border">
                  {categories.map((cat) => (
                    <div key={cat.title} className="space-y-2">
                      <button 
                        onClick={() => setOpenAccordion(openAccordion === cat.title ? null : cat.title)}
                        className="w-full flex justify-between items-center group"
                      >
                        <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${activeFilters[cat.title].length > 0 ? 'text-brand-blue' : 'text-brand-gray group-hover:text-brand-blue'}`}>
                          Por {cat.title} {activeFilters[cat.title].length > 0 && `(${activeFilters[cat.title].length})`}
                        </span>
                        <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${openAccordion === cat.title ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {openAccordion === cat.title && (
                        <div className="pt-2 space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                          {cat.items.map(item => (
                            <label key={item} className="flex items-center gap-3 cursor-pointer group">
                              <input 
                                type="checkbox"
                                checked={activeFilters[cat.title].includes(item)}
                                onChange={() => toggleFilter(cat.title, item)}
                                className="hidden"
                              />
                              <div className={`w-4 h-4 border-2 transition-colors flex items-center justify-center ${activeFilters[cat.title].includes(item) ? 'bg-brand-blue border-brand-blue' : 'border-brand-border group-hover:border-brand-blue'}`}>
                                {activeFilters[cat.title].includes(item) && <div className="w-2 h-0.5 bg-white"></div>}
                              </div>
                              <span className={`text-[10px] leading-tight ${activeFilters[cat.title].includes(item) ? 'text-brand-blue font-bold' : 'text-gray-500'}`}>
                                {item}
                              </span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-brand-border">
                  <div className="bg-brand-light p-4 rounded-sm flex items-start gap-3">
                    <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      Si tienes problemas para acceder a un recurso, recuerda que debes estar autenticado con tu usuario institucional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex justify-between items-center border-b border-brand-border pb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Mostrando {filteredDatabases.length} recursos digitales
              </span>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ordenar por:</span>
                <select className="text-[10px] font-bold text-brand-gray bg-transparent border-none focus:ring-0 cursor-pointer">
                  <option>Relevancia</option>
                  <option>Nombre A-Z</option>
                  <option>Más recientes</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {filteredDatabases.length > 0 ? (
                filteredDatabases.map((db, i) => (
                  <div key={i} className="wireframe-card group hover:border-brand-blue transition-all">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="w-full md:w-48 aspect-square bg-brand-light shrink-0 flex items-center justify-center text-gray-300 font-bold border border-brand-border">
                        LOGO DB
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-black text-brand-gray mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                          {db.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                          {db.description}
                        </p>
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-brand-border">
                          <div className="flex items-center gap-2">
                            {db.isOpen ? (
                              <Globe className="w-4 h-4 text-green-600" />
                            ) : (
                              <Database className="w-4 h-4 text-brand-blue" />
                            )}
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${db.isOpen ? 'text-green-600' : 'text-brand-blue'}`}>
                              Recurso digital de {db.access.toLowerCase()}
                            </span>
                          </div>
                          <Link to="/login" className="wireframe-button-primary py-2 px-8 text-xs">
                            Consultar recurso
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Conventions / Tags Section */}
                    <div className="mt-8 pt-6 border-t border-brand-border bg-brand-light/30 -mx-6 -mb-6 p-6">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Convenciones</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                          <span className="block text-[9px] text-gray-400 uppercase mb-2">Facultad</span>
                          <div className="flex flex-wrap gap-1">
                            {db.tags.facultad.map(t => (
                              <span key={t} className="px-2 py-0.5 bg-brand-blue/10 text-brand-blue text-[9px] font-bold rounded-full">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="block text-[9px] text-gray-400 uppercase mb-2">Área del conocimiento</span>
                          <div className="flex flex-wrap gap-1">
                            {db.tags.area.map(t => (
                              <span key={t} className="px-2 py-0.5 bg-brand-yellow/20 text-brand-gray text-[9px] font-bold rounded-full">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="block text-[9px] text-gray-400 uppercase mb-2">Tipo de perfil</span>
                          <div className="flex flex-wrap gap-1">
                            {db.tags.perfil.map(t => (
                              <span key={t} className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded-full">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="block text-[9px] text-gray-400 uppercase mb-2">Tipo de recurso</span>
                          <div className="flex flex-wrap gap-1">
                            {db.tags.recurso.map(t => (
                              <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[9px] font-bold rounded-full">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-brand-light p-20 text-center border border-dashed border-brand-border">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-full mx-auto mb-6">
                    <Search className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No se encontraron resultados</h3>
                  <p className="text-gray-500 mb-8">Prueba ajustando los filtros o realizando una búsqueda diferente.</p>
                  <button onClick={clearFilters} className="wireframe-button-secondary text-sm">Restablecer todos los filtros</button>
                </div>
              )}
            </div>

            {/* Pagination Placeholder (only if there are results) */}
            {filteredDatabases.length > 0 && (
              <div className="flex justify-center pt-12">
                <div className="flex gap-2">
                  {[1, 2, 3, '...', 12].map((p, i) => (
                    <button key={i} className={`w-10 h-10 flex items-center justify-center font-bold text-sm border border-brand-border ${p === 1 ? 'bg-brand-blue text-white' : 'hover:bg-brand-light'}`}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
