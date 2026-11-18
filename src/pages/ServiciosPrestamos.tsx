import { useState, FormEvent } from 'react';
import { Calendar, Book, Smartphone, Globe, Music, Info, ArrowRight, CheckCircle, Clock, Users, UserCheck, Laptop, MapPin, Headphones, Monitor, Check, AlertCircle, Plus, Trash2, ShoppingCart, Sparkles, ShieldCheck, Film, Palette, Scissors, Gamepad2, BookOpen, CalendarDays, X, ChevronRight, Tag, Heart } from 'lucide-react';
import { PageHeader, WireframeCard, ServiceSLA } from '../components/UI';
import { Link } from 'react-router-dom';

export function ServiciosPrestamos() {
  const services = [
    { 
      title: 'Reserva de salas', 
      description: 'Reserva espacios de trabajo colaborativo y reuniones académicas de co-creación.', 
      path: '/reserva-de-salas', 
      icon: <Calendar />, 
      externalUrl: 'https://salas.icesi.edu.co' 
    },
    { 
      title: 'Préstamo de material impreso', 
      description: 'Lleva libros y recursos de nuestra colección física a casa con renovación en línea.', 
      path: '/prestamo-de-material-impreso', 
      icon: <Book /> 
    },
    { 
      title: 'Préstamo de recursos móviles', 
      description: 'Préstamo de computadores portátiles y audífonos para uso académico dentro del campus.', 
      path: '/prestamo-de-recursos-moviles', 
      icon: <Smartphone /> 
    },
    { 
      title: 'Tocadiscos', 
      description: 'Disfruta de nuestra colección de vinilos en estaciones de escucha de alta fidelidad.', 
      path: '/tocadiscos', 
      icon: <Music /> 
    },
    { 
      title: 'Préstamo interbibliotecario', 
      description: 'Pide a otra biblioteca el libro que no tenemos (convenios RUAV y nacionales).', 
      path: '/prestamo-interbibliotecario', 
      icon: <Globe /> 
    },
    { 
      title: 'Compra de material', 
      description: 'Solicita la adquisición de nuevos títulos para docencia e investigación.', 
      path: '/compra-de-material-bibliografico', 
      icon: <ShoppingCart /> 
    },
    { 
      title: 'Cultura y creatividad', 
      description: 'Clubes de lectura, cine foros, exposiciones y talleres para toda la comunidad.', 
      path: '/cultura-y-creatividad', 
      icon: <Sparkles /> 
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Servicios" 
        description="Servicios orientados a resolver tus necesidades de espacios colaborativos, equipos tecnológicos y colecciones bibliográficas."
        breadcrumbs={[{ label: 'Servicios' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.path}>
              <WireframeCard {...service} />
            </div>
          ))}
        </div>
      </section>

      {/* Términos y condiciones generales de los servicios */}
      <section className="bg-brand-light py-20 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Normativa de uso</span>
              <h2 className="text-3xl font-black text-brand-gray mb-6 tracking-tight">Términos y condiciones de los servicios</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Para acceder a cualquiera de los servicios de la biblioteca es indispensable portar el carné institucional vigente y encontrarse a paz y salvo con devoluciones o multas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 font-medium">Uso personal e intransferible del carné institucional para todos los préstamos.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 font-medium">Responsabilidad plena sobre la integridad física de computadores, audífonos y libros.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 font-medium">Cumplimiento estricto de los horarios pactados de devolución y volumen moderado en salas.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-white p-10 border border-brand-border shadow-xs">
              <h3 className="text-xl font-bold mb-4 text-brand-gray">Reglamento y preguntas frecuentes</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Consulta los detalles de tiempos de préstamo, límites de renovación, sanciones por mora y políticas de uso de espacios.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/preguntas-frecuentes" className="bg-black text-white hover:bg-neutral-800 font-bold px-6 py-3 rounded-lg text-sm text-center transition-colors">
                  Ver preguntas frecuentes
                </Link>
                <Link to="/contacto" className="border border-gray-300 hover:border-black text-brand-gray font-bold px-6 py-3 rounded-lg text-sm text-center transition-colors">
                  Atención y PQRS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ReservaSalas() {
  const salasSLA = [
    { compromiso: 'Aprobación y confirmación de la reserva', tiempo: 'Inmediata', canal: 'Sistema de Reservas' },
    { compromiso: 'Entrega física de llaves y cables', tiempo: 'Menos de 3 minutos', canal: 'Mostrador de Circulación (Piso 1)' },
    { compromiso: 'Margen de tolerancia antes de liberar la sala', tiempo: '15 minutos máximo', canal: 'Reserva automática en recepción' },
  ];

  return (
    <div>
      <PageHeader 
        title="Reserva de salas" 
        description="Espacios equipados para el trabajo colaborativo, reuniones académicas y proyectos de co-creación entre estudiantes y docentes."
        breadcrumbs={[{ label: 'Servicios', path: '/servicios' }, { label: 'Reserva de salas' }]}
      />
      
      <section className="wireframe-section">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Main Platform CTA */}
          <div className="md:col-span-2 bg-gradient-to-br from-brand-blue/5 to-white border border-brand-border p-8 rounded-sm flex flex-col justify-between group hover:border-brand-blue hover:shadow-sm transition-all duration-300">
            <div>
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-6 rounded-sm">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-brand-gray mb-3 tracking-tight">Acceso a la plataforma de reservas</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-xl">
                La separación de las salas se gestiona a través del sistema web institucional de la Universidad Icesi. Puedes programar tu espacio de estudio colaborativo desde cualquier lugar con tus credenciales institucionales.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                <span className="flex items-center gap-2 text-xs font-bold text-brand-gray">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Separación anticipada
                </span>
                <span className="flex items-center gap-2 text-xs font-bold text-brand-gray">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Validación institucional
                </span>
                <span className="flex items-center gap-2 text-xs font-bold text-brand-gray">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Confirmación inmediata
                </span>
              </div>
            </div>
            
            <div>
              {/* Primary Action Button in Black */}
              <a 
                href="https://salas.icesi.edu.co" 
                target="_blank" 
                rel="noreferrer"
                className="bg-black text-white hover:bg-neutral-800 px-6 py-3.5 rounded-lg w-full sm:w-auto text-center font-bold text-sm tracking-tight inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-colors"
              >
                Ir a plataforma de reservas <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Collaborative focus & capacity (Min. 2 - Max. 10 personas) */}
          <div className="bg-brand-gray text-white p-8 rounded-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden">
            <div className="absolute -bottom-6 -right-6 opacity-5">
              <Users size={140} />
            </div>
            <div className="relative z-10">
              <span className="bg-brand-yellow text-brand-gray font-black text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-wider">
                Trabajo colaborativo
              </span>
              <h3 className="text-2xl font-black text-white mt-4 mb-3 tracking-tight">Capacidad: Min. 2 - Max. 10 personas</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Espacios diseñados exclusivamente para estudio colaborativo y reuniones académicas de grupo. Para reclamar la llave del espacio en mostrador, se requiere la presencia de los integrantes portando carné vigente.
              </p>
            </div>
            <div className="flex items-center gap-2 border-t border-white/10 pt-4 relative z-10">
              <UserCheck className="w-4 h-4 text-brand-yellow shrink-0" />
              <span className="text-[10px] uppercase font-black tracking-wider text-brand-yellow">Min. 2 - Max. 10 personas</span>
            </div>
          </div>

          {/* Card 3: Step by Step Guide with green numerals and exact step 3 text */}
          <div className="bg-brand-light border border-brand-border p-8 rounded-sm md:row-span-2 flex flex-col justify-between hover:border-brand-blue transition-all duration-300">
            <div>
              <span className="text-[10px] font-black uppercase text-brand-blue tracking-widest block mb-1">
                ¿CÓMO FUNCIONA?
              </span>
              <h3 className="text-xl font-bold text-brand-gray mb-6 tracking-tight">Proceso de Préstamo</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-gray">Reserva en línea</h4>
                    <p className="text-xs text-gray-500 mt-1">Ingresa al portal institucional con tu correo, selecciona la sala y define el horario.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-gray">Punto de atención</h4>
                    <p className="text-xs text-gray-500 mt-1">Dirígete al Mostrador de Circulación del Primer Piso con tu grupo de estudio.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-gray">Confirmación de registro</h4>
                    <p className="text-xs text-gray-500 mt-1 font-medium">Confirma la reserva, verifica que se registró y ¡listo!</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    04
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-gray">Uso del espacio</h4>
                    <p className="text-xs text-gray-500 mt-1">Ingresa a la sala grupal asignada. Al finalizar, regresa la llave y accesorios dentro del horario.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-brand-border pt-4 mt-6 bg-white p-3 rounded-md">
              <span className="block text-[10px] text-gray-400 font-bold uppercase">Consejo de uso</span>
              <p className="text-xs text-gray-700 font-semibold mt-1">Mantener un volumen de voz moderado.</p>
            </div>
          </div>

          {/* Card 4: Equipment & Resources inside Group Rooms */}
          <div className="md:col-span-2 bg-white border border-brand-border p-8 rounded-sm hover:border-brand-blue transition-all duration-300">
            <h3 className="text-xl font-bold text-brand-gray mb-2 tracking-tight">Equipamiento tecnológico de las salas grupales</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Cada sala de estudio grupal está pensada para el trabajo activo de los estudiantes, equipada con herramientas modernas de apoyo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-brand-light rounded-sm">
                <Monitor className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-xs text-brand-gray">Pantallas de visualización</span>
                  <p className="text-xs text-gray-500 mt-1">Minitelores y pantallas Smart TV de alta resolución para proyectar tus presentaciones y códigos.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-brand-light rounded-sm">
                <Globe className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-xs text-brand-gray">Conectividad múltiple</span>
                  <p className="text-xs text-gray-500 mt-1">Cables HDMI, adaptadores multimedia para laptops corporativas e internet Wi-Fi de alta velocidad.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-brand-light rounded-sm">
                <Book className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-xs text-brand-gray">Tableros de co-diseño</span>
                  <p className="text-xs text-gray-500 mt-1">Tableros panorámicos de vidrio o acrílico para diagramar flujos de trabajo e ideas del equipo con marcadores incluidos.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-brand-light rounded-sm">
                <Smartphone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-xs text-brand-gray">Tomas de carga rápida</span>
                  <p className="text-xs text-gray-500 mt-1">Tomas eléctricas de energía normales y puertos USB de carga para dispositivos móviles en todas las mesas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Duration limit */}
          <div className="bg-white border border-brand-border p-8 rounded-sm hover:border-brand-blue transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 bg-brand-light text-brand-blue flex items-center justify-center mb-4 rounded-sm">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-brand-gray mb-2">Límite de Tiempo</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Cada reserva de grupo se permite por bloques máximos de <b>2 horas</b> por sesión. La renovación de bloques contiguos depende puramente de la demanda actual y la disponibilidad de salas en el sistema académico.
              </p>
            </div>
          </div>

          {/* Card 6: Tolerance margin */}
          <div className="bg-white border border-brand-border p-8 rounded-sm hover:border-brand-blue transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 bg-brand-light text-brand-blue flex items-center justify-center mb-4 rounded-sm">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-brand-gray mb-2">Tolerancia de Espera</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                El sistema asigna un margen de espera de máximo <b>15 minutos</b>. Si transcurrido ese tiempo el grupo asignado no reporta presencia en mostrador, la reserva expira automáticamente liberando el espacio al servicio.
              </p>
            </div>
          </div>

          {/* Card 7: Location and Key point */}
          <div className="bg-white border border-brand-border p-8 rounded-sm hover:border-brand-blue transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 bg-brand-light text-brand-blue flex items-center justify-center mb-4 rounded-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-brand-gray mb-2">Punto de Entrega</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Las llaves de las salas, los marcadores y los controles remotos de los televisores deben solicitarse directamente en el <b>Mostrador de Servicios del Primer Piso</b> y deben retornarse exactamente en el mismo punto de atención.
              </p>
            </div>
          </div>

        </div>

        {/* SLA Information Segment */}
        <div className="max-w-4xl mx-auto mt-16">
          <ServiceSLA 
            title="SLA: Reserva y Uso de Salas de Estudio Grupal"
            items={salasSLA}
          />
        </div>
      </section>
    </div>
  );
}

export function PrestamoRecursosMoviles() {
  const recursosMovilesSLA = [
    { compromiso: 'Entrega física de portátiles y accesorios en mostrador', tiempo: 'Menos de 5 minutos', canal: 'Mostrador de Servicios (Piso 1)' },
    { compromiso: 'Revisión técnica de integridad y carga del equipo', tiempo: '3 minutos o menos', canal: 'Control con el auxiliar en mostrador' },
    { compromiso: 'Reposición intermedia del equipo por fallas técnicas', tiempo: 'Menos de 10 minutos', canal: 'Sujeto a disponibilidad física en stock' },
  ];

  return (
    <div>
      <PageHeader 
        title="Préstamo de recursos móviles" 
        description="Equipos tecnológicos de alta calidad disponibles exclusivamente para apoyar tus actividades de estudio e investigación académica dentro de las instalaciones."
        breadcrumbs={[{ label: 'Servicios y préstamos', path: '/servicios-y-prestamos' }, { label: 'Recursos móviles' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Main Area: Column Span 2 */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Ubicación del Servicio - Prominent Layout Change */}
            <div className="bg-brand-blue/5 border-2 border-brand-blue p-8 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MapPin size={100} className="text-brand-blue" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-brand-blue w-6 h-6 shrink-0" />
                  <h3 className="text-xl font-bold tracking-tight text-brand-gray">Ubicación y Punto de Entrega</h3>
                </div>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  Para solicitar o devolver cualquiera de los recursos móviles autorizados, dirígete al punto de atención central en el campus:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="border-l-4 border-brand-blue pl-4">
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Punto Físico</span>
                    <span className="font-bold text-sm text-brand-gray">Mostrador de Circulación (Piso 1)</span>
                    <p className="text-xs text-gray-400 mt-1">Ubicado justo al lado del acceso principal.</p>
                  </div>
                  <div className="border-l-4 border-brand-blue pl-4">
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Horario de Entrega</span>
                    <span className="font-bold text-sm text-brand-gray">Lunes a Viernes: 7:00 AM - 9:00 PM</span>
                    <p className="text-xs text-gray-400 mt-1">Sábados: 8:00 AM - 4:00 PM (Jornada Continua).</p>
                  </div>
                  <div className="border-l-4 border-brand-blue pl-4">
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Devoluciones</span>
                    <span className="font-bold text-sm text-brand-gray">Mismo mostrador</span>
                    <p className="text-xs text-gray-400 mt-1">No se permite depositar en buzones ni otros pisos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources List - 2 Items Only (Computers & Headphones) */}
            <div>
              <h3 className="text-2xl font-black text-brand-gray mb-6 tracking-tight">Equipos disponibles para préstamo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { 
                    title: 'Computadores portátiles', 
                    icon: <Laptop className="w-6 h-6" />, 
                    desc: 'Laptops corporativas de última generación para procesamiento de datos, redacción y desarrollo de trabajos con herramientas licenciadas.', 
                    time: '4 horas',
                    specs: ['Procesador Intel i5 / Apple Silicon', 'Memoria de 16 GB RAM', 'Software y navegadores especializados', 'Cargadores incluidos bajo solicitud']
                  },
                  { 
                    title: 'Audífonos', 
                    icon: <Headphones className="w-6 h-6" />, 
                    desc: 'Auriculares de diadema ergonómicos con tecnología de cancelación de ruido acústico para asegurar un aislamiento óptimo al estudiar.', 
                    time: '2 horas',
                    specs: ['Aislamiento de ruido ambiental', 'Almohadillas hipoalergénicas limpiadas tras cada uso', 'Conexión plug de 3.5mm estándar', 'Adaptadores para USB-C y Lightning']
                  },
                ].map((item, i) => (
                  <div key={i} className="wireframe-card group hover:border-brand-blue transition-all flex flex-col justify-between h-full bg-white relative">
                    <div>
                      <div className="w-12 h-12 bg-brand-light text-brand-blue flex items-center justify-center mb-6 rounded-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">{item.desc}</p>
                      
                      {/* Technical specifications bullets */}
                      <div className="border-t border-brand-border pt-4 mb-6">
                        <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Especificaciones y Accesorios</span>
                        <ul className="space-y-1.5">
                          {item.specs.map((spec, sidx) => (
                            <li key={sidx} className="text-xs text-gray-500 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0"></span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-blue bg-brand-light p-3 rounded-sm justify-center w-full mt-auto">
                      <Clock className="w-3.5 h-3.5" /> Tiempo máximo de préstamo: {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Importante */}
            <div className="bg-brand-light p-10 border border-brand-border">
              <h3 className="text-xl font-bold mb-6">Información importante de uso</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-500">
                <div className="flex gap-3">
                  <CheckCircle className="text-brand-blue w-5 h-5 shrink-0" />
                  <p>Los portátiles y audífonos están destinados para <b>uso exclusivo dentro del campus</b> de la universidad.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-brand-blue w-5 h-5 shrink-0" />
                  <p>La entrega tardía de estos recursos tecnológicos genera multas contabilizadas por hora completa o fracción.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-brand-blue w-5 h-5 shrink-0" />
                  <p>El usuario registrado asume plena responsabilidad del estado técnico y la integridad del equipo y accesorios prestados.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-brand-blue w-5 h-5 shrink-0" />
                  <p>Por políticas de seguridad interna, no está permitido retirar los computadores de la biblioteca a zonas abiertas no autorizadas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area: Column Span 1 */}
          <div className="space-y-8">
            <div className="bg-brand-gray text-white p-8 rounded-sm">
              <h3 className="text-xl font-bold mb-6">Proceso de préstamo paso a paso</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-brand-yellow font-black text-lg">01</span>
                  <div>
                    <span className="block font-bold text-sm text-white">Consulta stock y disponibilidad</span>
                    <p className="text-xs text-gray-400 mt-1">Dirígete directamente al Mostrador Central de Circulación en el Primer Piso.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-brand-yellow font-black text-lg">02</span>
                  <div>
                    <span className="block font-bold text-sm text-white">Presenta tu identificación</span>
                    <p className="text-xs text-gray-400 mt-1">Es obligatorio presentar tu carné institucional físico o digital vigente.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-brand-yellow font-black text-lg">03</span>
                  <div>
                    <span className="block font-bold text-sm text-white">Firma y validación física</span>
                    <p className="text-xs text-gray-400 mt-1">Verifica junto con el auxiliar encargado el buen estado del equipo y accesorios antes de retirarte.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/contacto" className="wireframe-card flex items-center justify-between group p-6 border-dashed border-2">
              <div className="flex items-center gap-4">
                <Info className="text-brand-blue w-6 h-6" />
                <span className="font-bold text-sm">Reportar falla o daño técnico</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-blue transition-all" />
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ServiceSLA 
            title="SLA: Préstamo de Dispositivos y Recursos Móviles"
            items={recursosMovilesSLA}
          />
        </div>
      </section>
    </div>
  );
}

export function CulturaCreatividad() {
  const [activeTab, setActiveTab] = useState<'clubes' | 'eventos'>('clubes');
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [eventFilter, setEventFilter] = useState<string>('todos');
  const [registrationModal, setRegistrationModal] = useState<{
    isOpen: boolean;
    itemName: string;
    itemType: 'club' | 'evento';
    time?: string;
    location?: string;
  }>({ isOpen: false, itemName: '', itemType: 'club' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    code: '',
    role: 'Estudiante',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [proposalModal, setProposalModal] = useState(false);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);

  // 5 Clubes oficiales solicitados
  const clubs = [
    {
      id: 'lectura',
      title: 'Club de lectura',
      subtitle: '"Entre Líneas"',
      badge: 'Quincenal',
      tag: 'Literatura & Diálogo',
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      color: 'border-emerald-500/30 hover:border-emerald-600',
      tagBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      schedule: 'Jueves cada 15 días · 4:00 p.m. - 6:00 p.m.',
      location: 'Piso 2 · Sala de Lectura Creativa',
      coordinator: 'Juanita Osorio · Coordinación de Fomento Lector',
      currentCycle: 'Voces de la narrativa contemporánea y distopías latinoamericanas',
      currentBook: 'Obra en discusión: "Nuestra parte de noche" de Mariana Enriquez',
      description: 'Encuentros para leer, debatir y reflexionar en torno a la literatura contemporánea, la poesía, el cómic y el ensayo. Prestamos prioritariamente ejemplares físicos y digitales a través de la biblioteca.',
      bringText: 'Ganas de leer y compartir opiniones. La biblioteca presta los libros del ciclo actual.',
      participants: '34 miembros activos',
    },
    {
      id: 'textiles',
      title: 'Club de textiles',
      subtitle: '"Hilando Saberes"',
      badge: 'Semanal',
      tag: 'Artes Manuales & Bienestar',
      icon: <Scissors className="w-6 h-6 text-rose-600" />,
      color: 'border-rose-500/30 hover:border-rose-600',
      tagBg: 'bg-rose-50 text-rose-800 border-rose-200',
      schedule: 'Martes semanales · 3:00 p.m. - 5:00 p.m.',
      location: 'Piso 1 · Espacio Maker y Terraza Cultural',
      coordinator: 'Prof. Marcela Rendón & Colectivo Textil',
      currentCycle: 'Bordado botánico, remiendo consciente y punto de cruz colaborativo',
      currentBook: 'Proyecto actual: Mural bordado de la flora del campus Icesi',
      description: 'Un espacio de pausa activa y creación táctil. Aprendemos puntadas tradicionales, hilado, intervención de prendas y tejido mientras compartimos historias en comunidad.',
      bringText: 'Tenemos bastidores y agujas base. Puedes traer tus hilos o telas para reciclar.',
      participants: '28 miembros activos',
    },
    {
      id: 'juego',
      title: 'Club de juego',
      subtitle: '"Ludoteca & Estrategia"',
      badge: 'Semanal',
      tag: 'Juegos de Mesa & Rol',
      icon: <Gamepad2 className="w-6 h-6 text-amber-600" />,
      color: 'border-amber-500/30 hover:border-amber-600',
      tagBg: 'bg-amber-50 text-amber-800 border-amber-200',
      schedule: 'Miércoles semanales · 4:30 p.m. - 7:00 p.m.',
      location: 'Piso 3 · Sala de Co-creación y Juegos de Mesa',
      coordinator: 'Santiago Mera · Comunidad Lúdica Icesi',
      currentCycle: 'Tardes de estrategia: Eurogames, Ajedrez rápido y campañas D&D',
      currentBook: 'Juegos disponibles: Catan, Carcassonne, Dixit, Terraforming Mars y Ajedrez',
      description: 'Diseñado para desconectarse de las pantallas y ejercitar el pensamiento lateral y cooperativo. Disponemos de una ludoteca de más de 35 títulos para todos los niveles.',
      bringText: 'No necesitas saber las reglas previamente; nuestros moderadores te enseñan en 5 minutos.',
      participants: '45 miembros activos',
    },
    {
      id: 'cine',
      title: 'Club de cine',
      subtitle: '"Cineforo Linterna Mágica"',
      badge: 'Semanal',
      tag: 'Apreciación Audiovisual',
      icon: <Film className="w-6 h-6 text-indigo-600" />,
      color: 'border-indigo-500/30 hover:border-indigo-600',
      tagBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      schedule: 'Viernes semanales · 4:00 p.m. - 6:30 p.m.',
      location: 'Auditorio 1 de Biblioteca (Piso 1)',
      coordinator: 'Carlos Andrés Gómez · Colectivo Cinéfilo Universitario',
      currentCycle: 'Cine de culto, cine latinoamericano y nuevos lenguajes documentales',
      currentBook: 'Próxima proyección: "El abrazo de la serpiente" de Ciro Guerra',
      description: 'Proyecciones semanales en alta definición acompañadas de un cineforo abierto donde analizamos guión, dirección de arte, fotografía y temas sociales de las películas proyectadas.',
      bringText: 'Entrada libre para toda la comunidad universitaria. Crispetas y bebidas permitidas.',
      participants: '60+ asistentes habituales',
    },
    {
      id: 'dibujo',
      title: 'Club de dibujo',
      subtitle: '"Trazos & Bocetos"',
      badge: 'Semanal',
      tag: 'Ilustración & Técnicas Mixtas',
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      color: 'border-purple-500/30 hover:border-purple-600',
      tagBg: 'bg-purple-50 text-purple-800 border-purple-200',
      schedule: 'Lunes semanales · 3:30 p.m. - 5:30 p.m.',
      location: 'Piso 2 · Balcón Panorámico y Taller de Diseño',
      coordinator: 'Laura Camila Rivera · Estudiante DMI e Ilustradora',
      currentCycle: 'Urban sketching del campus, figura humana rápida y bases de acuarela',
      currentBook: 'Temática actual: Ilustración de aves y jardines del campus',
      description: 'Taller libre para plasmar ideas en papel. No importa si apenas comienzas o si llevas años dibujando: practicamos soltura de trazo, anatomía básica, luz y sombra con ejercicios guiados.',
      bringText: 'Trae tu libreta de bocetos o bitácora y tus lápices o estilógrafos favoritos.',
      participants: '32 miembros activos',
    },
  ];

  // Actividades y Eventos culturales programados
  const events = [
    {
      id: 1,
      title: 'Exposición patrimonial: "Cartografías y memoria visual de Cali y el Valle"',
      category: 'Exposiciones',
      date: '10 Nov - 05 Dic 2026',
      time: 'Permanente en horario de biblioteca',
      location: 'Piso 1 · Hall Central de Exposiciones',
      desc: 'Muestra cartográfica, documentos históricos y archivo fotográfico de finales del siglo XIX y XX que retratan la transformación urbana y rural de nuestra región.',
      spots: 'Acceso libre y continuo',
      highlight: true,
    },
    {
      id: 2,
      title: 'Audición analógica guiada: 50 años de "The Dark Side of the Moon"',
      category: 'Música',
      date: 'Viernes 14 Nov 2026',
      time: '5:00 p.m. - 6:30 p.m.',
      location: 'Piso 3 · Sala de Vinilos y Tocadiscos',
      desc: 'Escucha analógica completa del mítico álbum de Pink Floyd en tornamesas de alta fidelidad, con comentarios sobre innovación sonora y masterización en Abbey Road.',
      spots: '22 cupos (por capacidad de cabina y audífonos)',
      highlight: false,
    },
    {
      id: 3,
      title: 'Taller práctico de encuadernación artesanal japonesa (Watoji)',
      category: 'Talleres',
      date: 'Jueves 20 Nov 2026',
      time: '3:00 p.m. - 5:30 p.m.',
      location: 'Piso 1 · Laboratorio de Preservación y Conservación',
      desc: 'Aprende las 4 costuras tradicionales japonesas para armar cuadernos y bitácoras de campo con materiales libres de ácido. Materiales incluidos por la biblioteca.',
      spots: '18 cupos con inscripción previa',
      highlight: false,
    },
    {
      id: 4,
      title: 'Cineforo especial: "El abrazo de la serpiente" + Conversatorio',
      category: 'Cineforo',
      date: 'Viernes 28 Nov 2026',
      time: '4:00 p.m. - 7:00 p.m.',
      location: 'Auditorio 1 de Biblioteca',
      desc: 'Proyección especial de la aclamada cinta colombiana nominada al Óscar, seguida de un panel con docentes de Antropología y Humanidades de la Universidad.',
      spots: 'Entrada libre hasta llenar aforo (90 sillas)',
      highlight: true,
    },
    {
      id: 5,
      title: 'Conversatorio: "El libro en la era de los algoritmos: ¿cómo leemos hoy?"',
      category: 'Conversatorios',
      date: 'Miércoles 03 Dic 2026',
      time: '10:30 a.m. - 12:00 m.',
      location: 'Piso 2 · Sala de Lectura Creativa',
      desc: 'Diálogo abierto sobre la convivencia de la página impresa, el audio-libro y los hábitos de lectura fragmentada con invitados del sector editorial independiente.',
      spots: 'Entrada libre',
      highlight: false,
    },
  ];

  const filteredEvents = eventFilter === 'todos' 
    ? events 
    : events.filter(e => e.category.toLowerCase() === eventFilter.toLowerCase());

  const handleOpenRegistration = (name: string, type: 'club' | 'evento', time?: string, loc?: string) => {
    setRegistrationModal({
      isOpen: true,
      itemName: name,
      itemType: type,
      time,
      location: loc,
    });
    setIsSubmitted(false);
  };

  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  const handleProposalSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProposalSubmitted(true);
  };

  const culturalSLA = [
    { compromiso: 'Evaluación y viabilidad de propuestas dirigidas a actividades de cultura y creatividad', tiempo: '5 días hábiles', canal: 'Coordinación Cultural / Correo' },
    { compromiso: 'Reserva y asignación del hall o soportes para exhibiciones artísticas', tiempo: '3 días hábiles previos', canal: 'Coordinación Cultural / Correo' },
    { compromiso: 'Respuesta formal a solicitudes de creación de clubes de lectura o talleres', tiempo: '10 días hábiles', canal: 'Coordinación Cultural / Oficina' },
  ];

  return (
    <div>
      <PageHeader 
        title="Cultura y creatividad" 
        description="Fomentamos el pensamiento crítico, la expresión artística, el juego y el bienestar comunitario a través de clubes y eventos culturales."
        breadcrumbs={[{ label: 'Servicios', path: '/servicios' }, { label: 'Cultura y creatividad' }]}
      />
      
      <section className="wireframe-section">
        {/* Intro Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 rounded-full text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Espacio vivo de encuentro y bienestar universitario
            </div>
            <h2 className="text-3xl font-black text-brand-gray tracking-tight">
              Vive la cultura y la creatividad en la Biblioteca
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              La biblioteca es mucho más que estanterías y silencio: es un laboratorio de ideas donde conviven la literatura, el cine, las artes textiles, el dibujo y los juegos de mesa. Nuestros <b>5 clubes permanentes</b> y la programación de eventos son gratuitos y abiertos a toda la comunidad Icesi.
            </p>
          </div>

          <div className="lg:col-span-4 bg-brand-light p-6 rounded-xl border border-brand-border flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                <Users className="w-4 h-4 text-brand-blue" /> Comunidad Activa
              </div>
              <div className="text-3xl font-black text-brand-gray mb-1">5 Clubes</div>
              <p className="text-xs text-gray-500">
                Lectura, textiles, juegos de mesa, cine y dibujo con reuniones semanales y quincenales en diferentes pisos.
              </p>
            </div>
            <button
              onClick={() => setProposalModal(true)}
              className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white text-xs font-bold rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <Plus className="w-4 h-4" /> Proponer actividad o club
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-border pb-4 mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('clubes')}
              className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'clubes'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-brand-light text-gray-600 hover:text-black hover:bg-gray-200'
              }`}
            >
              <Users className="w-4 h-4" />
              Clubes de la biblioteca ({clubs.length})
            </button>

            <button
              onClick={() => setActiveTab('eventos')}
              className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'eventos'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-brand-light text-gray-600 hover:text-black hover:bg-gray-200'
              }`}
            >
              <CalendarDays className="w-4 h-4" />
              Actividades y agenda cultural ({events.length})
            </button>
          </div>

          <Link 
            to="/agenda" 
            className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1"
          >
            Ver toda la agenda de la biblioteca <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* TAB 1: LOS 5 CLUBES */}
        {activeTab === 'clubes' && (
          <div className="space-y-8 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-brand-gray">Nuestros 5 clubes permanentes</h3>
                <p className="text-xs text-gray-500">Selecciona cualquiera para conocer detalles, horarios de encuentro y sumarte a la próxima sesión.</p>
              </div>
              <span className="text-[11px] text-gray-400 font-medium bg-gray-100 px-3 py-1 rounded-full w-fit">
                Inscripción libre y gratuita · Toda la comunidad Icesi
              </span>
            </div>

            {/* Grid of the 5 Clubs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => {
                const isExpanded = selectedClub === club.id;
                return (
                  <div
                    key={club.id}
                    className={`wireframe-card border transition-all duration-200 flex flex-col justify-between ${club.color} ${
                      isExpanded ? 'ring-2 ring-brand-blue' : ''
                    }`}
                  >
                    <div>
                      {/* Card Top / Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="w-12 h-12 bg-white rounded-lg border border-brand-border flex items-center justify-center shadow-xs">
                          {club.icon}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${club.tagBg}`}>
                            {club.tag}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                            {club.badge}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-black text-brand-gray tracking-tight">
                        {club.title}
                      </h4>
                      <div className="text-xs font-semibold text-brand-blue mb-3">
                        {club.subtitle}
                      </div>

                      <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                        {club.description}
                      </p>

                      {/* Meeting info box */}
                      <div className="space-y-2 bg-brand-light p-3.5 rounded-lg border border-brand-border text-xs mb-4">
                        <div className="flex items-start gap-2 text-gray-700">
                          <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block text-[11px] text-gray-500 uppercase tracking-wider">Horario habitual</span>
                            <span className="font-semibold text-gray-800">{club.schedule}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 text-gray-700">
                          <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block text-[11px] text-gray-500 uppercase tracking-wider">Lugar de encuentro</span>
                            <span className="font-semibold text-gray-800">{club.location}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 text-gray-700">
                          <UserCheck className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block text-[11px] text-gray-500 uppercase tracking-wider">Coordinación</span>
                            <span className="text-gray-700">{club.coordinator}</span>
                          </div>
                        </div>
                      </div>

                      {/* Extra Details Toggleable */}
                      {isExpanded && (
                        <div className="pt-2 pb-4 space-y-3 border-t border-brand-border text-xs">
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <span className="font-bold text-[10px] uppercase tracking-wider text-emerald-800 block mb-1">
                              Ciclo temático en curso
                            </span>
                            <p className="text-gray-700 font-medium">{club.currentCycle}</p>
                            <p className="text-gray-500 text-[11px] mt-1">{club.currentBook}</p>
                          </div>

                          <div className="bg-white p-3 rounded border border-gray-200">
                            <span className="font-bold text-[10px] uppercase tracking-wider text-gray-500 block mb-1">
                              ¿Qué necesitas traer?
                            </span>
                            <p className="text-gray-600">{club.bringText}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-2 mt-2">
                      <button
                        onClick={() => setSelectedClub(isExpanded ? null : club.id)}
                        className="text-xs font-semibold text-gray-500 hover:text-black transition-colors"
                      >
                        {isExpanded ? 'Menos detalles' : '+ Ver detalles y ciclo'}
                      </button>

                      <button
                        onClick={() => handleOpenRegistration(club.title + ' ' + club.subtitle, 'club', club.schedule, club.location)}
                        className="bg-black text-white hover:bg-neutral-800 text-xs font-bold px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5"
                      >
                        Inscribirme <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: ACTIVIDADES Y EVENTOS CULTURALES */}
        {activeTab === 'eventos' && (
          <div className="space-y-8 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-brand-gray">Agenda cultural y artística</h3>
                <p className="text-xs text-gray-500">Exposiciones en el hall, conversatorios, talleres de creación y audiciones musicales en vinilo.</p>
              </div>

              {/* Category filter buttons */}
              <div className="flex flex-wrap gap-1.5">
                {['todos', 'exposiciones', 'talleres', 'cineforo', 'música', 'conversatorios'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setEventFilter(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize transition-colors ${
                      eventFilter === cat
                        ? 'bg-black text-white'
                        : 'bg-brand-light text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Event list */}
            <div className="space-y-4">
              {filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className={`wireframe-card flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-blue transition-all ${
                    evt.highlight ? 'bg-gradient-to-r from-white via-white to-amber-50/30 border-amber-200' : 'bg-white'
                  }`}
                >
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-brand-light text-brand-blue border border-brand-border uppercase tracking-wider">
                        {evt.category}
                      </span>
                      {evt.highlight && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          Recomendado
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-brand-gray">{evt.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed max-w-3xl">{evt.desc}</p>

                    <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-500 pt-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                        <b>{evt.date}</b>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-blue" />
                        {evt.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                        {evt.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        {evt.spots}
                      </span>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2 shrink-0 justify-end">
                    <button
                      onClick={() => handleOpenRegistration(evt.title, 'evento', `${evt.date} · ${evt.time}`, evt.location)}
                      className="bg-black text-white hover:bg-neutral-800 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors text-center w-full sm:w-auto"
                    >
                      Reservar cupo
                    </button>
                    <Link
                      to="/agenda"
                      className="border border-brand-border hover:bg-brand-light text-xs font-bold text-gray-700 px-4 py-2.5 rounded-lg transition-colors text-center w-full sm:w-auto"
                    >
                      Ver en Agenda
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Propose an Activity Banner */}
        <div className="bg-brand-gray text-white p-8 md:p-12 rounded-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Users size={140} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-yellow rounded-full text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Convocatoria abierta permanente
            </div>
            <h3 className="text-2xl font-black mb-3">¿Tienes una iniciativa cultural o artística?</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Estudiantes, grupos de afinidad, profesores y colaboradores pueden solicitar el hall de exposiciones, auditorios o proponer la creación de un nuevo club o taller temático.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setProposalModal(true)}
                className="bg-black text-white hover:bg-neutral-800 border border-white/20 px-6 py-3 font-bold text-xs rounded-lg transition-all"
              >
                Presentar propuesta cultural
              </button>
              <Link 
                to="/contacto" 
                className="bg-white/10 text-white border border-white/20 px-6 py-3 font-bold text-xs rounded-lg hover:bg-white/20 transition-all"
              >
                Contactar Coordinación Cultural
              </Link>
            </div>
          </div>
        </div>

        {/* Service SLA */}
        <div className="max-w-4xl mx-auto">
          <ServiceSLA 
            title="SLA: Gestión y Espacios de Cultura y Creatividad"
            items={culturalSLA}
          />
        </div>
      </section>

      {/* MODAL 1: Inscripción al Club o Actividad */}
      {registrationModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-brand-border relative">
            <button
              onClick={() => setRegistrationModal({ ...registrationModal, isOpen: false })}
              className="absolute top-5 right-5 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className="pr-6">
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider block mb-1">
                    {registrationModal.itemType === 'club' ? 'Inscripción a Club' : 'Reserva de Cupo'}
                  </span>
                  <h3 className="text-xl font-black text-brand-gray tracking-tight">
                    {registrationModal.itemName}
                  </h3>
                  {registrationModal.time && (
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-blue" /> {registrationModal.time}
                    </p>
                  )}
                  {registrationModal.location && (
                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-blue" /> {registrationModal.location}
                    </p>
                  )}
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Nombre completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre y apellido"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Correo institucional *</label>
                      <input
                        type="email"
                        required
                        placeholder="usuario@u.icesi.edu.co"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Código o Cédula</label>
                      <input
                        type="text"
                        placeholder="Ej: A00123456"
                        value={formData.code}
                        onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                        className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Tipo de vinculación</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none bg-white"
                    >
                      <option value="Estudiante">Estudiante de Pregrado o Posgrado</option>
                      <option value="Profesor">Profesor / Investigador</option>
                      <option value="Graduado">Egresado / Graduado</option>
                      <option value="Colaborador">Colaborador / Administrativo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Comentarios o intereses particulares (opcional)</label>
                    <textarea
                      rows={2}
                      placeholder="¿Tienes alguna sugerencia de libro, juego, temática o técnica que te gustaría explorar?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setRegistrationModal({ ...registrationModal, isOpen: false })}
                    className="px-4 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-black text-white hover:bg-neutral-800 px-6 py-2.5 text-xs font-bold rounded-lg transition-colors"
                  >
                    Confirmar participación
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-brand-gray">¡Inscripción confirmada!</h3>
                <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Gracias, <b>{formData.name}</b>. Te hemos registrado en <b>{registrationModal.itemName}</b>. Hemos enviado los detalles de encuentro y el enlace de calendario a <b>{formData.email}</b>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setRegistrationModal({ ...registrationModal, isOpen: false })}
                    className="bg-black text-white hover:bg-neutral-800 px-8 py-2.5 text-xs font-bold rounded-lg transition-colors"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: Propuesta de Actividad o Club */}
      {proposalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-brand-border relative">
            <button
              onClick={() => {
                setProposalModal(false);
                setProposalSubmitted(false);
              }}
              className="absolute top-5 right-5 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!proposalSubmitted ? (
              <form onSubmit={handleProposalSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider block mb-1">
                    Convocatoria Cultural
                  </span>
                  <h3 className="text-xl font-black text-brand-gray tracking-tight">
                    Proponer actividad, taller o nuevo club
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Presenta tu idea al equipo de Cultura y Creatividad de la Biblioteca. Evaluaremos viabilidad de espacio y recursos en 5 días hábiles.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Nombre de la iniciativa *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Taller de Cómic y Manga / Exposición de Fotografía Análoga"
                      className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Tipo de actividad</label>
                      <select className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none bg-white">
                        <option>Nuevo Club Temático</option>
                        <option>Exposición Artística o Fotográfica</option>
                        <option>Taller Práctico / Creación</option>
                        <option>Cineforo o Charla</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Público estimado</label>
                      <select className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none bg-white">
                        <option>10 a 20 personas</option>
                        <option>20 a 50 personas</option>
                        <option>Comunidad abierta / Hall</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Descripción y objetivo *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Explica brevemente de qué trata la propuesta, requerimientos de espacio (proyector, mesas, tocadiscos) y fechas tentativas."
                      className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Nombre proponente *</label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre completo"
                        className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Correo Icesi *</label>
                      <input
                        type="email"
                        required
                        placeholder="usuario@u.icesi.edu.co"
                        className="w-full text-xs p-3 border border-brand-border rounded-lg focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setProposalModal(false)}
                    className="px-4 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-black text-white hover:bg-neutral-800 px-6 py-2.5 text-xs font-bold rounded-lg transition-colors"
                  >
                    Enviar propuesta
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-brand-gray">Propuesta recibida</h3>
                <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Hemos registrado tu iniciativa cultural. La Coordinación Cultural de la Biblioteca revisará la viabilidad de espacios e insumos y se comunicará contigo en un plazo máximo de 5 días hábiles.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setProposalModal(false);
                      setProposalSubmitted(false);
                    }}
                    className="bg-black text-white hover:bg-neutral-800 px-8 py-2.5 text-xs font-bold rounded-lg transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export const ExtensionCultural = CulturaCreatividad;

export function Tocadiscos() {
  const tocadiscosSLA = [
    { compromiso: 'Asignación del turno de escucha y estación analógica', tiempo: 'Inmediata (según orden de llegada)', canal: 'Mostrador de Servicios (Recepción)' },
    { compromiso: 'Entrega de accesorios (audífonos, agujas y adaptadores)', tiempo: 'Inmediata', canal: 'Mostrador de Servicios (Recepción)' },
    { compromiso: 'Disponibilidad operativa de estaciones de escucha de vinilos', tiempo: '100% de operatividad en jornada habitual', canal: 'Área de audiófilos' },
  ];

  return (
    <div>
      <PageHeader 
        title="Tocadiscos" 
        description="Redescubre el sonido analógico con nuestra colección de vinilos y estaciones de escucha de alta fidelidad."
        breadcrumbs={[{ label: 'Servicios', path: '/servicios' }, { label: 'Tocadiscos' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
          <div className="space-y-8">
            <div className="inline-block bg-brand-yellow text-brand-gray px-4 py-1 text-[10px] font-black uppercase tracking-widest">Experiencia Audiófila</div>
            <h2 className="text-4xl font-black text-brand-gray tracking-tighter leading-tight">Un refugio musical en el campus.</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Contamos con dos estaciones de escucha equipadas con tocadiscos Audio-Technica y audífonos profesionales para que disfrutes de nuestra colección de más de 500 vinilos de jazz, salsa, rock y música clásica.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-brand-light border border-brand-border">
                <Music className="text-brand-blue mb-4" />
                <h4 className="font-bold mb-2">Colección Curada</h4>
                <p className="text-xs text-gray-400">Desde clásicos inmortales hasta joyas ocultas del folclor.</p>
              </div>
              <div className="p-6 bg-brand-light border border-brand-border">
                <Clock className="text-brand-blue mb-4" />
                <h4 className="font-bold mb-2">Sesiones de 1 Hora</h4>
                <p className="text-xs text-gray-400">Tiempo suficiente para disfrutar de un álbum completo.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="wireframe-card p-10 bg-brand-gray text-white">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2 underline decoration-brand-yellow decoration-4 underline-offset-8">Reglas de la sesión</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-center">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">01</span>
                  <p className="text-sm opacity-80">Solicita el acceso en el mostrador de servicios bibliotecarios.</p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">02</span>
                  <p className="text-sm opacity-80">Manipula los discos únicamente por los bordes para evitar daños.</p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">03</span>
                  <p className="text-sm opacity-80">Usa siempre los audífonos proporcionados para no interferir con el estudio.</p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">04</span>
                  <p className="text-sm opacity-80">Entrega el equipo y el vinilo en las mismas condiciones recibidas.</p>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center flex-col items-center">
              <button className="bg-black text-white hover:bg-neutral-800 font-bold px-8 py-3.5 rounded-lg text-sm transition-colors w-full md:w-auto shadow-sm cursor-pointer">
                Reservar turno de escucha
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ServiceSLA 
            title="SLA: Servicio y Estación de Escucha de Vinilos (Tocadiscos)"
            items={tocadiscosSLA}
          />
        </div>
      </section>
    </div>
  );
}

export function PrestamoMaterial() {
  const prestamoMaterialSLA = [
    { compromiso: 'Entrega en mostrador de libros de estantería general', tiempo: 'Menos de 5 minutos', canal: 'Mostrador de Circulación (Piso 1)' },
    { compromiso: 'Procesamiento de renovación automática de ejemplares', tiempo: 'Inmediata', canal: 'Sistema "Mi Cuenta" en línea (24/7)' },
    { compromiso: 'Paz y salvo o levantamiento de observaciones por multas', tiempo: '24 horas hábiles tras radicar pago', canal: 'biblioteca@icesi.edu.co' },
  ];

  return (
    <div>
      <PageHeader 
        title="Préstamo de material impreso" 
        description="Reglas, tiempos y procesos para el préstamo y devolución de libros de nuestras colecciones físicas."
        breadcrumbs={[{ label: 'Servicios y préstamos', path: '/servicios-y-prestamos' }, { label: 'Material impreso' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { cat: 'Colección General', days: '15 días', qty: 'Hasta 10' },
            { cat: 'Reserva (Textos)', days: '2 días', qty: 'Hasta 2' },
            { cat: 'Referencia', days: 'Consulta', qty: 'Interno' },
            { cat: 'Revistas', days: '3 días', qty: 'Hasta 3' },
          ].map((c, i) => (
             <div key={i} className="p-8 border border-brand-border text-center">
               <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-brand-blue">{c.cat}</h4>
               <p className="text-3xl font-black text-brand-gray mb-1">{c.days}</p>
               <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{c.qty} ejemplares</p>
             </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-brand-gray">Renovaciones y Reservas</h3>
            <p className="text-gray-500 leading-relaxed">
              Puedes renovar tus préstamos hasta 2 veces, siempre y cuando el material no haya sido reservado por otro usuario. Las renovaciones se realizan en línea a través de "Mi Cuenta".
            </p>
            <div className="bg-brand-light p-8 border border-brand-border">
               <h4 className="font-bold mb-4 flex items-center gap-2"><UserCheck className="w-5 h-5 text-brand-blue" /> ¿Cómo renovar?</h4>
               <ol className="space-y-3 text-sm text-gray-500 list-decimal pl-4">
                 <li>Ingresa al portal con tu usuario institucional.</li>
                 <li>Selecciona la pestaña "Préstamos".</li>
                 <li>Haz clic en el botón "Renovar" junto al título deseado.</li>
                 <li>Verifica la nueva fecha de vencimiento.</li>
               </ol>
            </div>
          </div>

          <div className="bg-brand-gray text-white p-12">
            <h3 className="text-2xl font-bold mb-8">Sanciones</h3>
            <div className="space-y-6">
              <div className="flex gap-4 border-b border-white/10 pb-6">
                <Clock className="text-brand-yellow shrink-0" />
                <p className="text-sm">La entrega tardía de material de la Colección General genera una multa diaria por cada ejemplar retrasado.</p>
              </div>
              <div className="flex gap-4 border-b border-white/10 pb-6">
                <Clock className="text-brand-yellow shrink-0" />
                <p className="text-sm text-brand-yellow font-bold">Importante: El retraso en material de Reserva (Textos Guía) genera multas por hora.</p>
              </div>
              <Link to="/preguntas-frecuentes" className="wireframe-button-secondary border-white/20 hover:bg-white/10 w-full text-center py-4">Ver detalle de multas y sanciones</Link>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ServiceSLA 
            title="SLA: Préstamo y Circulación de Colecciones Físicas"
            items={prestamoMaterialSLA}
          />
        </div>
      </section>
    </div>
  );
}
