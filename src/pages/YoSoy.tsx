import { User, GraduationCap, Users, ArrowRight, Bookmark, Database, Globe, FileText, Calendar, Music, Smartphone, ShieldCheck, FileSearch, ShoppingCart, Award } from 'lucide-react';
import { PageHeader, WireframeCard, ServiceSLA } from '../components/UI';
import { Link } from 'react-router-dom';

export function YoSoy() {
  const profiles = [
    { title: 'Estudiante', description: 'Accesos directos a reserva de salas, préstamos y formación.', path: '/yo-soy/estudiante', icon: <User /> },
    { title: 'Profesor', description: 'Servicios de apoyo a la investigación y gestión bibliográfica.', path: '/yo-soy/profesor', icon: <GraduationCap /> },
    { title: 'Graduado', description: 'Beneficios y recursos disponibles para egresados Icesi.', path: '/yo-soy/graduado', icon: <Users /> },
  ];

  return (
    <div>
      <PageHeader 
        title="Yo soy" 
        description="Selecciona tu perfil para acceder rápidamente a los servicios y recursos más relevantes para tus necesidades."
        breadcrumbs={[{ label: 'Yo soy' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <div key={profile.path}>
              <WireframeCard {...profile} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-black text-brand-gray mb-6 tracking-tight">¿No eres parte de la comunidad Icesi?</h2>
          <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl mx-auto">
            También ofrecemos servicios para visitantes y usuarios externos a través de convenios interbibliotecarios y acceso a recursos de consulta en sala.
          </p>
          <Link to="/convenios-interbibliotecarios" className="wireframe-button-secondary">Ver convenios externos</Link>
        </div>
      </section>
    </div>
  );
}

export function EstudianteDashboard() {
  const links = [
    { label: 'Check BIT', path: '/check-bit', icon: <ShieldCheck />, desc: 'Verifica la originalidad y similitud académica en tus trabajos.' },
    { label: 'Contenidos digitales (Bases de datos)', path: '/bases-de-datos', icon: <Database />, desc: 'Accede a artículos, journals científicos y libros electrónicos.' },
    { label: 'Préstamo interbibliotecario', path: '/prestamo-interbibliotecario', icon: <Globe />, desc: 'Solicita a otra biblioteca el libro o artículo que no tenemos.' },
    { label: 'Cultura y creatividad', path: '/cultura-y-creatividad', icon: <Users />, desc: 'Participa en los 5 clubes, cine foro, vinilos y agenda cultural.' },
    { label: 'Formación y asesoría', path: '/formacion-y-asesoria', icon: <GraduationCap />, desc: 'Talleres en normas APA, gestores y asesorías individuales.' },
    { label: 'Préstamo de material impreso', path: '/prestamo-de-material-impreso', icon: <Bookmark />, desc: 'Lleva libros físicos a casa con opción de renovación en línea.' },
    { label: 'Préstamo de recursos móviles', path: '/prestamo-de-recursos-moviles', icon: <Smartphone />, desc: 'Préstamo de computadores portátiles y audífonos en campus.' },
    { label: 'Repositorio académico', path: '/repositorio-academico', icon: <FileText />, desc: 'Consulta tesis de grado, proyectos y memorias de Icesi.' },
    { label: 'Reserva de salas', path: '/reserva-de-salas', icon: <Calendar />, desc: 'Cubículos de trabajo grupal equipados para co-creación.' },
    { label: 'Tocadiscos', path: '/tocadiscos', icon: <Music />, desc: 'Disfruta colecciones en vinilo con sonido de alta fidelidad.' },
  ];

  return (
    <div>
      <PageHeader 
        title="Estudiante" 
        description="Bienvenido a tu panel de servicios. Aquí encontrarás accesos directos a lo que más necesitas para tu éxito académico."
        breadcrumbs={[{ label: 'Yo soy', path: '/yo-soy' }, { label: 'Estudiante' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="wireframe-card group relative flex items-center gap-4 p-6 hover:border-brand-blue transition-all"
            >
              {/* Tooltip flotante superior que no afecta la estética ni dimensiones originales */}
              <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 z-30 w-56 sm:w-64 p-2.5 bg-neutral-900 text-white text-xs rounded-lg shadow-xl border border-neutral-700 text-center leading-snug">
                <span>{link.desc}</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-neutral-900" />
              </div>

              <div className="w-10 h-10 bg-brand-light text-brand-blue flex items-center justify-center rounded-sm group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                {link.icon}
              </div>
              <span className="font-bold text-sm text-brand-gray group-hover:text-brand-blue transition-colors">
                {link.label}
              </span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ProfesorDashboard() {
  const links = [
    { label: 'Vigilancia estratégica', path: '/vigilancia-estrategica', icon: <FileSearch />, desc: 'Estudios cienciométricos, mapeo de literatura y revistas Q1/Q2.' },
    { label: 'Compra de material', path: '/compra-de-material-bibliografico', icon: <ShoppingCart />, desc: 'Solicita nuevos títulos bibliográficos para docencia e investigación.' },
    { label: 'Repositorio de datos institucionales', path: '/datover', icon: <Globe />, desc: 'Depósito, citación y preservación segura de datasets abiertos.' },
    { label: 'Análisis de similitud (Check BIT)', path: '/check-bit', icon: <ShieldCheck />, desc: 'Revisión y validación de originalidad en trabajos académicos.' },
    { label: 'Bases de datos especializadas', path: '/bases-de-datos', icon: <Database />, desc: 'Plataformas indexadas de alto factor de impacto científico.' },
    { label: 'Préstamo interbibliotecario', path: '/prestamo-interbibliotecario', icon: <Globe />, desc: 'Convenios RUAV y nacionales para conseguir libros externos.' },
    { label: 'Repositorio académico', path: '/repositorio-academico', icon: <FileText />, desc: 'Visibilidad e indexación de artículos y tesis que diriges.' },
    { label: 'Formación y asesoría docente', path: '/formacion-y-asesoria', icon: <GraduationCap />, desc: 'Capacitaciones grupales para tus cursos y gestores de citas.' },
    { label: 'Préstamo de material impreso', path: '/prestamo-de-material-impreso', icon: <Bookmark />, desc: 'Plazos y cupos preferenciales en colección física para docentes.' },
    { label: 'Préstamo de recursos móviles', path: '/prestamo-de-recursos-moviles', icon: <Smartphone />, desc: 'Laptops y accesorios para apoyo en docencia e investigación.' },
    { label: 'Cultura y creatividad', path: '/cultura-y-creatividad', icon: <Users />, desc: 'Participa en clubes, exposiciones y espacios de co-creación.' },
  ];

  return (
    <div>
      <PageHeader 
        title="Profesor e Investigador" 
        description="Servicios especializados para apoyar tus procesos de docencia, formulación de proyectos, compras bibliográficas e investigación científica."
        breadcrumbs={[{ label: 'Yo soy', path: '/yo-soy' }, { label: 'Profesor' }]}
      />
      
      <section className="wireframe-section">
        {/* Banner destacado de Vigilancia estratégica */}
        <div className="bg-gradient-to-r from-brand-gray to-neutral-900 text-white p-8 rounded-lg mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-neutral-700">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest block mb-2">Servicio prioritario para docentes e investigadores</span>
            <h3 className="text-2xl font-black mb-2">Vigilancia estratégica y cienciometría</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Solicita estudios de mapeo de literatura, identificación de revistas Q1/Q2 para publicar, coautorías y tendencias tecnológicas para tus convocatorias de investigación.
            </p>
          </div>
          <Link to="/vigilancia-estrategica" className="bg-brand-blue text-white hover:bg-blue-600 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider shrink-0 transition-colors">
            Solicitar informe
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="wireframe-card group relative flex items-center gap-4 p-6 hover:border-brand-blue transition-all"
            >
              {/* Tooltip flotante superior que no afecta la estética ni dimensiones originales */}
              <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 z-30 w-56 sm:w-64 p-2.5 bg-neutral-900 text-white text-xs rounded-lg shadow-xl border border-neutral-700 text-center leading-snug">
                <span>{link.desc}</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-neutral-900" />
              </div>

              <div className="w-10 h-10 bg-brand-light text-brand-blue flex items-center justify-center rounded-sm group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                {link.icon}
              </div>
              <span className="font-bold text-sm text-brand-gray group-hover:text-brand-blue transition-colors">
                {link.label}
              </span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function GraduadoDashboard() {
  const links = [
    { label: 'Bases de datos (acceso en campus)', path: '/bases-de-datos', icon: <Database />, desc: 'Acceso presencial a colecciones digitales y revistas científicas.' },
    { label: 'Préstamo interbibliotecario', path: '/prestamo-interbibliotecario', icon: <Globe />, desc: 'Solicitud de libros en bibliotecas aliadas de la red RUAV.' },
    { label: 'Cultura y creatividad', path: '/cultura-y-creatividad', icon: <Users />, desc: 'Acceso a los clubes de lectura, exposiciones y talleres.' },
    { label: 'Formación y asesoría', path: '/formacion-y-asesoria', icon: <GraduationCap />, desc: 'Asesorías especializadas de búsqueda y recuperación bibliográfica.' },
    { label: 'Préstamo de material impreso', path: '/prestamo-de-material-impreso', icon: <Bookmark />, desc: 'Préstamo a domicilio de hasta 5 libros con carné de egresado.' },
    { label: 'Repositorio académico', path: '/repositorio-academico', icon: <FileText />, desc: 'Consulta permanente y preservación de tu trabajo de grado.' },
    { label: 'Reserva de salas', path: '/reserva-de-salas', icon: <Calendar />, desc: 'Espacios de estudio y reuniones profesionales en biblioteca.' },
    { label: 'Tocadiscos', path: '/tocadiscos', icon: <Music />, desc: 'Estaciones analógicas de vinilos para desconexión y disfrute.' },
  ];

  const benefits = [
    { title: 'Consulta en sala perpetua', desc: 'Acceso gratuito de por vida a todos los pisos de la biblioteca y consulta ilimitada de colecciones impresas.' },
    { title: 'Préstamo externo a domicilio', desc: 'Retiro de hasta 5 libros de la colección general o literatura por un plazo renovable de 15 días.' },
    { title: 'Contenidos digitales especiales', desc: 'Acceso a un catálogo seleccionado de recursos electrónicos y bases de datos desde el campus.' },
    { title: 'Espacios y Cultura y creatividad', desc: 'Invitación preferencial a clubes de lectura, auditorios, audiciones analógicas de vinilos y talleres.' },
  ];

  const graduadoSLA = [
    { compromiso: 'Activación y validación de afiliación de egresado en sistema de biblioteca', tiempo: '24 horas hábiles', canal: 'Oficina de Egresados al validar estatus' },
    { compromiso: 'Préstamo físico de colecciones impresas nacionales en mostrador', tiempo: 'Menos de 5 minutos', canal: 'Mostrador de Circulación (Piso 1)' },
    { compromiso: 'Soporte de consulta en línea y localización de producción científica propia', tiempo: '48 horas hábiles', canal: 'biblioteca@icesi.edu.co' },
  ];

  return (
    <div>
      <PageHeader 
        title="Graduado (Egresado)" 
        description="Beneficios y recursos exclusivos diseñados especialmente para mantener tu conexión con el conocimiento y respaldar tu desarrollo profesional."
        breadcrumbs={[{ label: 'Yo soy', path: '/yo-soy' }, { label: 'Graduado' }]}
      />
      
      <section className="wireframe-section">
        <h3 className="text-xs font-black uppercase tracking-widest text-brand-gray mb-8 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          Servicios y Accesos Directos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="wireframe-card group relative flex items-center gap-4 p-6 hover:border-brand-blue transition-all"
            >
              {/* Tooltip flotante superior que no afecta la estética ni dimensiones originales */}
              <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 z-30 w-56 sm:w-64 p-2.5 bg-neutral-900 text-white text-xs rounded-lg shadow-xl border border-neutral-700 text-center leading-snug">
                <span>{link.desc}</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-neutral-900" />
              </div>

              <div className="w-10 h-10 bg-brand-light text-brand-blue flex items-center justify-center rounded-sm group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                {link.icon}
              </div>
              <span className="font-bold text-sm text-brand-gray group-hover:text-brand-blue transition-colors">
                {link.label}
              </span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-black text-brand-gray tracking-tight">Tus Beneficios como Egresado Icesi</h3>
            <p className="text-gray-500 leading-relaxed">
              La Biblioteca Francisco de Paula Santander considera a sus graduados como miembros permanentes de la comunidad del conocimiento. Al egresar, conservas acceso a herramientas especializadas que enriquecerán tu práctica profesional, investigación independiente o crecimiento cultural continuo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="border border-brand-border p-6 hover:border-brand-blue transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-blue mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-gray text-sm mb-1">{benefit.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-brand-border p-8 bg-brand-light/30 flex flex-col justify-between">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-gray flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                ¿Cómo activar tus servicios?
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Para hacer uso de los servicios presenciales de préstamo a domicilio, debes contar con tu carné digital o físico de egresado expedido por la Oficina de Alianzas y Relaciones con Egresados.
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3 text-xs">
                  <span className="font-black text-brand-blue">01.</span>
                  <span className="text-brand-gray font-medium">Verifica que tu carné de graduado esté activo en el portal institucional.</span>
                </li>
                <li className="flex gap-3 text-xs">
                  <span className="font-black text-brand-blue">02.</span>
                  <span className="text-brand-gray font-medium">Acércate al Mostrador de Circulación de la Biblioteca en tu primera visita para activar el servicio de préstamo.</span>
                </li>
                <li className="flex gap-3 text-xs">
                  <span className="font-black text-brand-blue">03.</span>
                  <span className="text-brand-gray font-medium">Empieza a llevar colecciones impresas y a disfrutar de toda nuestra agenda cultural a su plenitud.</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-brand-border mt-8">
              <a href="mailto:egresados@icesi.edu.co" className="wireframe-button-primary w-full text-center block text-xs py-3">
                Contactar Oficina de Egresados
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ServiceSLA 
            title="SLA: Biblioteca para Egresados y Graduados"
            items={graduadoSLA}
          />
        </div>
      </section>
    </div>
  );
}
