import { useState, useMemo } from 'react';
import { Search, Database, ArrowRight, Filter, ChevronDown, ExternalLink, Info, X, Building, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import { PageHeader, ServiceSLA } from '../components/UI';
import { Link } from 'react-router-dom';

export function CategoriaBasesDatos({ title, description }: { title: string; description: string }) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  const filters = [
    { title: 'Tipo de recurso', items: ['Artículos', 'Libros electrónicos', 'Estadísticas', 'Videos'] },
    { title: 'Tipo de perfil', items: ['Estudiantes', 'Profesores', 'Investigadores'] },
    { title: 'Tipo de acceso', items: ['Suscripción', 'Acceso abierto'] },
  ];

  return (
    <div>
      <PageHeader 
        title={title} 
        description={description}
        breadcrumbs={[
          { label: 'Recursos de información', path: '/recursos-de-informacion' }, 
          { label: 'Bases de datos', path: '/bases-de-datos' },
          { label: title }
        ]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white border border-brand-border p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-brand-gray text-sm uppercase tracking-tighter">Filtrar {title}</h3>
                <button className="text-[10px] font-bold text-brand-blue hover:underline uppercase tracking-widest">Limpiar</button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Buscador interno</label>
                  <div className="relative">
                    <input type="text" placeholder="Buscar en esta categoría..." className="wireframe-input py-2 text-sm pr-10" />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Alphabetical */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Por orden alfabético</label>
                  <div className="grid grid-cols-6 gap-1">
                    {alphabet.map(letter => (
                      <button key={letter} className="aspect-square flex items-center justify-center text-[10px] font-bold border border-brand-border hover:bg-brand-blue hover:text-white transition-colors">
                        {letter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accordion Filters */}
                <div className="space-y-4 pt-4 border-t border-brand-border">
                  {filters.map((cat) => (
                    <div key={cat.title} className="space-y-2">
                      <button className="w-full flex justify-between items-center group">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray group-hover:text-brand-blue transition-colors">{cat.title}</span>
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex justify-between items-center border-b border-brand-border pb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">12 Recursos encontrados en {title}</span>
            </div>

            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="wireframe-card group hover:border-brand-blue transition-all">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-40 aspect-square bg-brand-light shrink-0 flex items-center justify-center text-gray-300 font-bold border border-brand-border">
                      LOGO DB
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-brand-gray group-hover:text-brand-blue transition-colors">
                        Base de Datos Especializada {i}
                      </h3>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Proporciona acceso a una amplia gama de revistas académicas y publicaciones profesionales especializadas en el área de {title.toLowerCase()}. Incluye artículos de revisión, casos de estudio y reportes técnicos.
                      </p>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-brand-border">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-brand-blue" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                            Recurso digital por suscripción
                          </span>
                        </div>
                        <button className="wireframe-button-primary py-2 px-8 text-xs">
                          Acceder recurso
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Conventions / Tags Section */}
                  <div className="mt-8 pt-6 border-t border-brand-border bg-brand-light/30 -mx-6 -mb-6 p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div>
                        <span className="block text-[9px] text-gray-400 uppercase mb-2">Área</span>
                        <span className="px-2 py-0.5 bg-brand-yellow/20 text-brand-gray text-[9px] font-bold rounded-full">{title}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-gray-400 uppercase mb-2">Perfil</span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded-full">Investigadores</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-gray-400 uppercase mb-2">Recurso</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[9px] font-bold rounded-full">Artículos</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export interface Aliado {
  id: string;
  nombre: string;
  sigla: string;
  tipo: 'RUAV' | '4U' | 'Nacional' | 'Especial';
  tipoLabel: string;
  ubicacion: string;
  cobertura: string;
  requisitos: string[];
  colorTheme: {
    bg: string;
    text: string;
    border: string;
    primary: string;
  };
}

const ALL_ALIADOS: Aliado[] = [
  {
    id: 'end',
    nombre: 'Escuela Nacional del Deporte',
    sigla: 'END',
    tipo: 'RUAV',
    tipoLabel: 'Convenio Regional (RUAV)',
    ubicacion: 'Cali, Valle del Cauca',
    cobertura: 'Préstamo externo de hasta 3 libros de colección general por 8 días, consulta física en sala abierta y acceso a catálogos en sala.',
    requisitos: [
      'Presentar carné digital de la Universidad Icesi activo.',
      'Documento de identidad original físico.',
      'Estar a paz y salvo con la biblioteca de origen (Icesi).'
    ],
    colorTheme: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', primary: '#DC2626' }
  },
  {
    id: 'uniajc',
    nombre: 'Institución Universitaria Antonio José Camacho',
    sigla: 'UNIAJC',
    tipo: 'RUAV',
    tipoLabel: 'Convenio Regional (RUAV)',
    ubicacion: 'Cali, Valle del Cauca',
    cobertura: 'Préstamo externo recíproco de libros académicos de colección general, consulta libre en sala para toda la comunidad académica.',
    requisitos: [
      'Carné institucional digital o físico vigente.',
      'Validación de estado activo en el sistema interbibliotecario.'
    ],
    colorTheme: { bg: 'bg-blue-50', text: 'text-blue-750', border: 'border-blue-200', primary: '#1D4ED8' }
  },
  {
    id: 'cenicana',
    nombre: 'Centro de Investigación de la Caña de Azúcar (Cenicaña)',
    sigla: 'CENICAÑA',
    tipo: 'Especial',
    tipoLabel: 'Centro de Investigación Especial',
    ubicacion: 'Florida, Valle del Cauca',
    cobertura: 'Consulta especializada técnica in-situ en temas de agroindustria, caña de azúcar, biotecnología y suelos. Servicio de conmutación bibliográfica ágil.',
    requisitos: [
      'Carta de presentación oficial emitida por la Biblioteca de Icesi.',
      'Coordinación de visita previa por correo electrónico.'
    ],
    colorTheme: { bg: 'bg-green-50', text: 'text-green-800', border: 'border-green-200', primary: '#15803D' }
  },
  {
    id: 'uninorte',
    nombre: 'Universidad del Norte',
    sigla: 'UNINORTE',
    tipo: '4U',
    tipoLabel: 'Alianza 4U (Nacional)',
    ubicacion: 'Barranquilla, Atlántico',
    cobertura: 'Préstamo externo directo con los mismos privilegios de usuario local. Acceso completo a sus modernas salas de estudio y colecciones de reserva.',
    requisitos: [
      'Carné digital activo de la Universidad Icesi.',
      'Someterse al reglamento interno de préstamos de Uninorte.'
    ],
    colorTheme: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', primary: '#EA580C' }
  },
  {
    id: 'banrep',
    nombre: 'Red de Bibliotecas del Banco de la República',
    sigla: 'BANREP',
    tipo: 'Nacional',
    tipoLabel: 'Convenio Nacional Especial',
    ubicacion: 'Colección nacional (29 ciudades principales)',
    cobertura: 'Acceso a una de las colecciones de arte, historia y economía más grandes del continente. Consulta presencial libre en sus salas de investigadores.',
    requisitos: [
      'Presentación de carné Icesi.',
      'Carta de presentación para acceso a salas especializadas de investigación.'
    ],
    colorTheme: { bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-200', primary: '#CA8A04' }
  },
  {
    id: 'externado',
    nombre: 'Universidad Externado de Colombia',
    sigla: 'EXTERNADO',
    tipo: 'Nacional',
    tipoLabel: 'Convenio Nacional Directo',
    ubicacion: 'Bogotá D.C.',
    cobertura: 'Préstamo de material bibliográfico especializado en derecho, finanzas y ciencias sociales mediante el uso de carta interbibliotecaria física.',
    requisitos: [
      'Formato de convenio de préstamo diligenciado y firmado por Icesi.',
      'Carné estudiantil/docente vigente.'
    ],
    colorTheme: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', primary: '#0D9488' }
  },
  {
    id: 'cun',
    nombre: 'Corporación Unificada Nacional (CUN)',
    sigla: 'CUN',
    tipo: 'Nacional',
    tipoLabel: 'Convenio Nacional',
    ubicacion: 'Sedes a Nivel Nacional',
    cobertura: 'Acceso a préstamo externo y consulta en sala para estudiantes de programas modulares y postgrados.',
    requisitos: [
      'Presentación de carné físico o digital con holograma de seguridad activo.'
    ],
    colorTheme: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', primary: '#4F46E5' }
  },
  {
    id: 'unicuces',
    nombre: 'Colegio Mayor de Ciencias (UNICUCES)',
    sigla: 'UNICUCES',
    tipo: 'RUAV',
    tipoLabel: 'Convenio Regional (RUAV)',
    ubicacion: 'Cali, Valle del Cauca',
    cobertura: 'Préstamo interbibliotecario general presencial y acceso a referencias locales.',
    requisitos: [
      'Carné vigente de estudiante o egresado registrado en el sistema.'
    ],
    colorTheme: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', primary: '#DB2777' }
  },
  {
    id: 'javeriana',
    nombre: 'Pontificia Universidad Javeriana Cali',
    sigla: 'PUJ Cali',
    tipo: 'RUAV',
    tipoLabel: 'Convenio Regional Recíproco',
    ubicacion: 'Cali, Valle del Cauca',
    cobertura: 'Acceso a préstamo externo libre en el campus de Cali de hasta 3 materiales simultáneos por 8 días. Consulta autorizada en salas grupales y de estudio individual.',
    requisitos: [
      'Carné digital de Icesi en estado vigente.',
      'Cédula de ciudadanía o documento de identidad físico.',
      'Estar registrado previamente en el sistema RUAV de mutua cooperación.'
    ],
    colorTheme: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', primary: '#059669' }
  },
  {
    id: 'cesa',
    nombre: 'Colegio de Estudios Superiores de Administración (CESA)',
    sigla: 'CESA',
    tipo: '4U',
    tipoLabel: 'Alianza 4U (Nacional)',
    ubicacion: 'Bogotá D.C.',
    cobertura: 'Préstamo recíproco a domicilio y uso de salas de estudio en su biblioteca especializada de negocios y finanzas corporativas.',
    requisitos: [
      'Carné digital activo de la Universidad Icesi.',
      'Estar debidamente matriculado en el periodo académico vigente.'
    ],
    colorTheme: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', primary: '#7C3AED' }
  },
  {
    id: 'eafit',
    nombre: 'Universidad EAFIT',
    sigla: 'EAFIT',
    tipo: '4U',
    tipoLabel: 'Alianza 4U (Nacional)',
    ubicacion: 'Medellín, Antioquia',
    cobertura: 'Préstamo de colecciones generales y de literatura de forma física directa, acceso preferencial a salas inteligentes de co-creación.',
    requisitos: [
      'Presentación de carné digital o físico emitido por Icesi.',
      'Validación en línea en tiempo real con la administración de Icesi.'
    ],
    colorTheme: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200', primary: '#0284C7' }
  },
  {
    id: 'univalle',
    nombre: 'Universidad del Valle',
    sigla: 'UNIVALLE',
    tipo: 'RUAV',
    tipoLabel: 'Convenio Regional (RUAV)',
    ubicacion: 'Cali (Sedes Meléndez y San Fernando)',
    cobertura: 'Consulta libre in-situ a la recopilación bibliográfica y revistas indexadas más grande del suroccidente colombiano. Préstamos autorizados bajo convenio.',
    requisitos: [
      'Presentar el formato de préstamo interbibliotecario sellado originalmente.',
      'Carné estudiantil de Icesi activo.'
    ],
    colorTheme: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', primary: '#E11D48' }
  }
];

export function ConveniosInterbibliotecarios() {
  const [selectedConvenio, setSelectedConvenio] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'RUAV' | '4U' | 'Nacional' | 'Especial'>('Todos');
  const [selectedAliado, setSelectedAliado] = useState<Aliado | null>(null);

  const convenios = [
    { 
      id: 'ruav',
      title: 'RUAV', 
      description: 'Red Universitaria de Alta Velocidad del Valle del Cauca.', 
      instructions: [
        'Presentar carné institucional vigente.',
        'Estar a paz y salvo con la Biblioteca Icesi.',
        'El préstamo es presencial en cualquiera de las universidades de la red (Univalle, Javeriana, Autonoma, etc).',
        'Hasta 3 libros por 8 días.',
      ]
    },
    { 
      id: '4u',
      title: 'Alianza 4U', 
      description: 'Convenio entre las universidades CESA, EAFIT, ICESI y del Norte.', 
      instructions: [
        'Permite el préstamo de material físico entre las 4 universidades.',
        'Debes solicitar el préstamo a través de conmutación bibliográfica si requieres que el libro llegue a Icesi.',
        'Si estás en Barranquilla, Bogotá o Medellín, puedes ir directamente con tu carné de Icesi.',
      ]
    },
    { 
      id: 'nacional',
      title: 'Convenios nacionales', 
      description: 'Acuerdos con bibliotecas en todo el territorio nacional (Luis Ángel Arango, Binal, etc).', 
      instructions: [
        'Requiere carta de presentación física o digital emitida por Icesi.',
        'Solicita la carta con al menos 24 horas de antelación.',
        'Consulta disponibilidad en el catálogo de la biblioteca de destino antes de viajar.',
      ]
    },
    {
      id: 'directorio',
      title: 'Instituciones Aliadas',
      description: 'Directorio completo e interactivo con buscador de universidades y centros de investigación con convenios vigentes.',
      instructions: [
        'Haz clic en la tarjeta para abrir el directorio interactivo.',
        'Filtra por región o tipo de convenio nacional.',
        'Revisa los requisitos específicos y plazos para cada destino.'
      ]
    }
  ];

  const filteredAliados = useMemo(() => {
    return ALL_ALIADOS.filter(aliado => {
      const matchesSearch = aliado.nombre.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            aliado.sigla.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            aliado.ubicacion.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'Todos' || aliado.tipo === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div>
      <PageHeader 
        title="Convenios interbibliotecarios" 
        description="Accede a las colecciones de otras instituciones a través de nuestros acuerdos de cooperación."
        breadcrumbs={[{ label: 'Servicios y préstamos', path: '/servicios-y-prestamos' }, { label: 'Convenios interbibliotecarios' }]}
      />
      
      <section className="wireframe-section">
        {/* Button to quickly trigger Allied Institutions Directory */}
        <div className="bg-brand-light border border-brand-border p-8 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-extrabold text-base text-brand-gray flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-yellow shrink-0 animate-pulse" />
              Directorio Interactivo de Instituciones y Préstamos
            </h3>
            <p className="text-xs text-gray-500 max-w-2xl leading-relaxed">
              Consulta en tiempo real la red completa de las universidades y centros aliados nacionales y de la Red RUAV donde puedes retirar copias impresas.
            </p>
          </div>
          <button 
            id="view-allied-institutions-btn"
            onClick={() => setIsModalOpen(true)}
            className="wireframe-button-primary bg-[#5454E9] text-white hover:bg-brand-gray transition-colors shrink-0 py-3.5 px-8 text-xs font-black uppercase tracking-wider rounded-sm shadow-sm"
          >
            Buscar convenios vigentes
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {convenios.map((conv) => (
            <div 
              key={conv.id} 
              id={`convenio-card-${conv.id}`}
              className={`wireframe-card group cursor-pointer transition-all flex flex-col justify-between ${
                selectedConvenio === conv.id 
                  ? 'border-brand-blue ring-1 ring-brand-blue' 
                  : conv.id === 'directorio' 
                    ? 'border-brand-yellow/80 hover:border-brand-yellow bg-brand-light/30' 
                    : ''
              }`}
              onClick={() => {
                if (conv.id === 'directorio') {
                  setIsModalOpen(true);
                } else {
                  setSelectedConvenio(conv.id);
                }
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-black uppercase tracking-tighter ${conv.id === 'directorio' ? 'text-brand-yellow' : 'text-brand-blue'}`}>
                    {conv.title}
                  </h3>
                  {conv.id === 'directorio' && (
                    <Sparkles className="w-5 h-5 text-brand-yellow shrink-0 animate-pulse" />
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed h-16 line-clamp-3">{conv.description}</p>
              </div>
              
              {conv.id === 'directorio' ? (
                <button className="text-brand-yellow font-black text-[10px] uppercase tracking-widest flex items-center gap-2 mt-auto">
                  Abrir directorio <Sparkles className="w-4 h-4 text-brand-yellow" />
                </button>
              ) : (
                <button className="text-brand-blue font-black text-[10px] uppercase tracking-widest flex items-center gap-2 mt-auto">
                  {selectedConvenio === conv.id ? 'Viendo instrucciones' : 'Ver instrucciones'} 
                  <ArrowRight className={`w-4 h-4 transition-transform ${selectedConvenio === conv.id ? 'rotate-90' : ''}`} />
                </button>
              )}
            </div>
          ))}
        </div>

        {selectedConvenio && (
          <div className="bg-[#5454E9] text-white p-12 rounded-sm mb-16 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex justify-between items-start mb-10">
              <h2 className="text-3xl font-black tracking-tight underline decoration-brand-yellow decoration-4 underline-offset-8">
                Instrucciones {convenios.find(c => c.id === selectedConvenio)?.title}
              </h2>
              <button onClick={() => setSelectedConvenio(null)} className="text-[10px] font-bold text-white/40 uppercase tracking-widest hover:text-white transition-colors">Cerrar</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ul className="space-y-6">
                {convenios.find(c => c.id === selectedConvenio)?.instructions.map((ins, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 bg-brand-yellow text-brand-gray flex items-center justify-center font-black text-xs shrink-0">{i + 1}</div>
                    <p className="text-sm text-white/80 leading-relaxed">{ins}</p>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 p-8 border border-white/10 flex flex-col justify-center">
                 <h4 className="font-bold text-brand-yellow mb-4 text-sm uppercase tracking-widest">¿Necesitas ayuda?</h4>
                 <p className="text-xs text-white/60 mb-6 leading-relaxed">Si tienes dudas sobre cómo aplicar a estos convenios o necesitas una carta de presentación específica, nuestro equipo de Referencia está para apoyarte.</p>
                 <Link to="/contacto" className="wireframe-button-primary bg-white text-brand-gray border-none w-fit px-8 py-3 text-[10px]">Contactar a Referencia</Link>
              </div>
            </div>
          </div>
        )}

        <div className="bg-brand-light p-12 border border-brand-border mb-12 animate-in fade-in duration-300">
          <h2 className="text-2xl font-black text-brand-gray mb-10 tracking-tight text-center">Pasos para el préstamo externo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="absolute top-1/3 left-0 w-full h-px border-t-2 border-dashed border-brand-border hidden md:block -z-0"></div>
            
            {[
              { step: '01', title: 'Consulta el catálogo', desc: 'Busca el material en el catálogo de la biblioteca de destino.' },
              { step: '02', title: 'Solicita el formato', desc: 'Pide el formato de préstamo interbibliotecario en nuestro punto de atención.' },
              { step: '03', title: 'Visita la biblioteca', desc: 'Presenta el formato y tu carné en la institución correspondiente.' },
            ].map((s, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-2 border-brand-border text-brand-blue flex items-center justify-center font-black text-xl mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                  {s.step}
                </div>
                <h4 className="font-bold mb-3 text-brand-gray">{s.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ServiceSLA 
            title="SLA: Red de Convenios y Préstamo Interbibliotecario"
            items={[
              { compromiso: 'Expedición de cartas de presentación institucional físicas o virtuales', tiempo: '24 horas hábiles', canal: 'Mostrador de Referencia (Piso 2)' },
              { compromiso: 'Préstamo directo en sitio (Red RUAV, Alianza 4U)', tiempo: 'Inmediata', canal: 'Presentar carné en biblioteca destino' },
              { compromiso: 'Despacho y recepción por conmutación bibliográfica nacional', tiempo: '3 a 5 días hábiles', canal: 'Coordinador de Conmutación' }
            ]}
          />
        </div>

        {/* MODAL / POPUP: Allied Institutions Directory */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 animate-opacity duration-200">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-brand-gray/80 backdrop-blur-sm transition-opacity" 
              onClick={() => {
                setIsModalOpen(false);
                setSelectedAliado(null);
              }}
            />
            
            {/* Content Container */}
            <div className="bg-white border-2 border-brand-border w-full max-w-5xl h-[85vh] flex flex-col relative z-20 shadow-2xl animate-in fade-in zoom-in-95 duration-250">
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-brand-border bg-brand-light flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-xl font-black text-brand-gray flex items-center gap-2">
                    <Building className="w-5 h-5 text-brand-blue" />
                    Convenios Vigentes y Bibliotecas Aliadas
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                    Consulta el alcance, requisitos y sedes de préstamo de las universidades aliadas (RUAV, 4U, Nacionales).
                  </p>
                </div>
                <button 
                  id="close-allied-modal"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedAliado(null);
                  }}
                  className="w-10 h-10 border border-brand-border hover:border-brand-blue hover:text-brand-blue flex items-center justify-center rounded-sm transition-colors text-brand-gray bg-white shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Left Side: Search, Filters & Grid */}
                <div className={`flex-1 flex flex-col p-4 sm:p-6 overflow-hidden ${selectedAliado ? 'hidden md:flex md:w-3/5 border-r border-brand-border' : 'w-full'}`}>
                  {/* Search and Filters */}
                  <div className="space-y-4 mb-4 shrink-0">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Busca la universidad o entidad que te interese..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="wireframe-input pl-11 pr-4 py-2.5 text-sm"
                      />
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(['Todos', 'RUAV', '4U', 'Nacional', 'Especial'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => {
                            setActiveFilter(filter);
                          }}
                          className={`px-3 py-1.5 text-[9px] font-black uppercase tracking-wider border rounded-sm transition-all ${
                            activeFilter === filter 
                              ? 'bg-brand-blue text-white border-brand-blue shadow-sm' 
                              : 'bg-white text-brand-gray border-brand-border hover:border-brand-blue'
                          }`}
                        >
                          {filter === 'Todos' ? 'Todos los convenios' : filter === 'RUAV' ? 'Regionales (RUAV)' : filter === '4U' ? 'Alianza 4U' : filter === 'Nacional' ? 'Nacionales' : 'Especiales'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Grid of Allies */}
                  <div className="flex-1 overflow-y-auto pr-1">
                    {filteredAliados.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
                        {filteredAliados.map((aliado) => (
                          <div
                            key={aliado.id}
                            id={`aliado-item-${aliado.id}`}
                            className={`p-3 border cursor-pointer transition-all flex items-start gap-3 hover:border-brand-blue ${
                              selectedAliado?.id === aliado.id 
                                ? 'border-brand-blue bg-brand-blue/5 ring-1 ring-brand-blue' 
                                : 'border-brand-border bg-white'
                            }`}
                            onClick={() => setSelectedAliado(aliado)}
                          >
                            <div className={`w-10 h-10 shrink-0 border flex items-center justify-center font-black text-[10px] rounded-sm tracking-tight ${aliado.colorTheme.bg} ${aliado.colorTheme.text} ${aliado.colorTheme.border}`}>
                              {aliado.sigla}
                            </div>
                            <div className="overflow-hidden">
                              <h4 className="font-bold text-xs text-brand-gray tracking-tight leading-snug break-words">
                                {aliado.nombre}
                              </h4>
                              <div className="flex items-center gap-1.5 mt-1">
                                <span className="text-[8px] font-black px-1.5 py-0.5 bg-brand-light text-brand-gray border border-brand-border uppercase tracking-wide rounded-sm shrink-0">
                                  {aliado.tipo}
                                </span>
                                <span className="text-[8px] text-gray-400 font-medium truncate flex items-center gap-0.5">
                                  <MapPin className="w-2.5 h-2.5 shrink-0" />
                                  {aliado.ubicacion.split(',')[0]}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-12 text-center text-gray-400">
                        <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-3">
                          <Building className="w-6 h-6 text-gray-300" />
                        </div>
                        <p className="text-xs font-bold text-brand-gray">No se encontraron instituciones aliadas</p>
                        <p className="text-[10px] text-gray-400 mt-1">Intenta con otra palabra clave o selecciona otra categoría.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side: Detailed View */}
                <div className={`w-full md:w-2/5 bg-brand-light p-4 sm:p-6 overflow-y-auto flex flex-col justify-between border-t md:border-t-0 md:border-l border-brand-border ${!selectedAliado ? 'hidden md:flex md:items-center md:justify-center text-center text-gray-400' : 'flex bg-white'}`}>
                  {selectedAliado ? (
                    <div className="space-y-6">
                      <button 
                        onClick={() => setSelectedAliado(null)}
                        className="md:hidden flex items-center gap-1.5 text-xs font-black text-brand-blue uppercase tracking-wider mb-2"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180" /> Volver a la lista
                      </button>

                      <div className="space-y-4">
                        <div>
                          <span className="text-[8px] font-black uppercase tracking-widest text-brand-blue px-2 py-0.5 bg-brand-blue/5 border border-brand-blue/10 rounded-sm">
                            {selectedAliado.tipoLabel}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 border flex items-center justify-center font-black text-xs rounded-sm tracking-tight shrink-0 ${selectedAliado.colorTheme.bg} ${selectedAliado.colorTheme.text} ${selectedAliado.colorTheme.border}`}>
                            {selectedAliado.sigla}
                          </div>
                          <div>
                            <h3 className="text-sm font-black text-brand-gray tracking-tight leading-snug">
                              {selectedAliado.nombre}
                            </h3>
                            <p className="text-[10px] text-gray-400 font-medium flex items-center gap-1 mt-0.5">
                              <MapPin className="w-3 h-3 text-brand-blue shrink-0" />
                              {selectedAliado.ubicacion}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-brand-border space-y-4">
                        <div>
                          <h5 className="text-[9px] font-black uppercase tracking-wider text-brand-yellow mb-1.5 flex items-center gap-1">
                            Cobertura y Alcance del Convenio:
                          </h5>
                          <p className="text-xs text-brand-gray leading-relaxed font-semibold bg-brand-light/40 p-3.5 border border-brand-border rounded-sm">
                            {selectedAliado.cobertura}
                          </p>
                        </div>

                        <div>
                          <h5 className="text-[9px] font-black uppercase tracking-wider text-brand-yellow mb-2">Requisitos para solicitar el préstamo:</h5>
                          <ul className="space-y-2">
                            {selectedAliado.requisitos.map((req, i) => (
                              <li key={i} className="flex gap-2 items-start text-xs text-gray-500 leading-relaxed font-semibold">
                                <CheckCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-brand-border text-[9px] text-gray-400 font-medium leading-normal">
                        * De conformidad con el reglamento general de conmutación de la Universidad Icesi, debes estar completamente a paz y salvo con la biblioteca Icesi al momento de presentarse.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 max-w-xs mx-auto text-center py-12">
                      <div className="w-14 h-14 rounded-full border border-dashed border-brand-border flex items-center justify-center mx-auto text-gray-300">
                        <Building className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-xs text-brand-gray">Elige una Entidad</h4>
                      <p className="text-[11px] text-gray-500 leading-normal">
                        Haz clic sobre cualquier institución de la lista para ver la cobertura específica, requisitos vigentes y condiciones del servicio de préstamo.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-brand-border bg-brand-light flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left shrink-0">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  Convenios Oficiales de la Biblioteca Francisco de Paula Santander ({ALL_ALIADOS.length} Entidades)
                </span>
                <button 
                  id="close-allied-modal-footer"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedAliado(null);
                  }}
                  className="wireframe-button-primary bg-brand-gray text-white text-[9px] font-black uppercase tracking-widest py-2 px-6 self-center sm:self-auto border-none hover:bg-brand-blue rounded-sm"
                >
                  Cerrar Directorio
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
