import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, FileSearch, ShieldCheck, ShoppingCart, FileText, Globe, ArrowRight, Mail, Phone, Clock, CheckCircle, Calendar, User, Search, BookOpen, Video, MapPin, Award, Filter, HelpCircle, Check, ArrowLeft, Users } from 'lucide-react';
import { PageHeader, WireframeCard, ServiceSLA } from '../components/UI';
import { Link } from 'react-router-dom';

export function FormacionInvestigacion() {
  const services = [
    { 
      title: 'Formación y asesoría', 
      description: 'Talleres formativos en normas APA, gestores bibliográficos y asesorías personalizadas.', 
      path: '/formacion-y-asesoria', 
      icon: <GraduationCap /> 
    },
    { 
      title: 'Guías y tutoriales', 
      description: 'Instructivos paso a paso para el uso efectivo de bases de datos, catálogos y herramientas.', 
      path: '/guias-y-tutoriales', 
      icon: <BookOpen /> 
    },
    { 
      title: 'Análisis de similitud', 
      description: 'Validación de integridad académica y prevención de coincidencias textuales (Check BIT).', 
      path: '/check-bit', 
      icon: <ShieldCheck /> 
    },
    { 
      title: 'Vigilancia estratégica', 
      description: 'Estudios de tendencias científicas, patentes e inteligencia investigativa para proyectos.', 
      path: '/vigilancia-estrategica', 
      icon: <FileSearch /> 
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Formación e investigación" 
        description="Acompañamos a estudiantes, docentes e investigadores en el fortalecimiento de competencias informacionales y análisis de impacto científico."
        breadcrumbs={[{ label: 'Formación e investigación' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.path}>
              <WireframeCard {...service} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-light py-20 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Acompañamiento docente</span>
          <h2 className="text-3xl font-black text-brand-gray mb-6 tracking-tight">¿Eres profesor o investigador?</h2>
          <p className="text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Ofrecemos servicios diseñados específicamente para acompañar tus programas de docencia, elaboración de sílabos, vigilancia tecnológica y producción científica.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/yo-soy/profesor" className="bg-black text-white hover:bg-neutral-800 font-bold px-8 py-3.5 rounded-lg text-sm transition-colors shadow-sm">
              Ver servicios para profesores
            </Link>
            <Link to="/contacto" className="border border-gray-300 hover:border-black text-brand-gray font-bold px-8 py-3.5 rounded-lg text-sm transition-colors">
              Contactar a un especialista
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export const ApoyoAcademico = FormacionInvestigacion;

const CAPACITACIONES = [
  {
    id: 1,
    title: 'Taller: Citación y Referencias con Normas APA 7ma',
    organizer: 'Biblioteca Icesi',
    type: 'biblioteca',
    date: '15 Mayo, 2026',
    time: '10:00 AM - 12:00 PM',
    location: 'Sala de Co-creación (Piso L)',
    speaker: 'Elena María Vivas (Formadora)',
    desc: 'Aprende a estructurar tus trabajos académicos y citas bibliográficas bajo los lineamientos de APA 7ma, evitando el plagio de forma práctica.',
  },
  {
    id: 2,
    title: 'Búsqueda Científica Eficiente en IEEE Xplore',
    organizer: 'IEEE Xplore (Proveedor)',
    type: 'proveedor',
    date: '19 Mayo, 2026',
    time: '02:00 PM - 03:30 PM',
    location: 'En línea (Microsoft Teams)',
    speaker: 'Ing. Carlos Gómez (Especialista IEEE)',
    desc: 'Uso avanzado de términos de búsqueda, operadores booleanos y descarga de papers científicos en la plataforma IEEE para ingeniería.',
  },
  {
    id: 3,
    title: 'Gestión de Bibliografía con Zotero Avanzado',
    organizer: 'Biblioteca Icesi',
    type: 'biblioteca',
    date: '21 Mayo, 2026',
    time: '03:00 PM - 04:30 PM',
    location: 'Sala de Cómputo (Piso 3 - Biblioteca)',
    speaker: 'Andrés Felipe Solarte (Formador)',
    desc: 'Sincroniza tus referencias, organiza colecciones, crea grupos de colaboración y genera citas automáticas en tus documentos de texto.',
  },
  {
    id: 4,
    title: 'Estrategias de Investigación con Scopus y ScienceDirect',
    organizer: 'Elsevier / Scopus (Proveedor)',
    type: 'proveedor',
    date: '26 Mayo, 2026',
    time: '09:00 AM - 10:30 AM',
    location: 'En línea (Zoom)',
    speaker: 'Dra. Maria Clara Silva (Trainer Elsevier)',
    desc: 'Optimiza la búsqueda de fuentes de alto impacto, analiza co-citaciones, mide métricas de autor e identifica revistas de prestigio para publicar.',
  },
  {
    id: 5,
    title: 'Búsqueda de Patentes y Vigilancia con Derwent Innovation',
    organizer: 'Clarivate (Proveedor)',
    type: 'proveedor',
    date: '29 Mayo, 2026',
    time: '11:00 AM - 12:30 PM',
    location: 'En línea (Webex)',
    speaker: 'Dr. José Luis Rúa (Consultor Clarivate)',
    desc: 'Aprende cómo rastrear patentes mundiales, patentes equivalentes y realizar vigilancia tecnológica sobre tendencias competitivas de patentes.',
  },
  {
    id: 6,
    title: 'Búsqueda para Ciencias de la Salud (PubMed y ClinicalKey)',
    organizer: 'Biblioteca Icesi',
    type: 'biblioteca',
    date: '02 Junio, 2026',
    time: '08:00 AM - 10:00 AM',
    location: 'Sala de Aprendizaje Activo (Edificio Medicina)',
    speaker: 'Marta Lucía González (Formadora)',
    desc: 'Taller especializado en la formulación de búsquedas médicas estructuradas con términos MeSH en bases de datos clínicas.',
  }
];

export function FormacionAsesoria() {
  const [activeTab, setActiveTab] = useState<'individual' | 'grupal' | 'abiertos'>('individual');
  
  // States for Custom Advisory Booking
  const [step, setStep] = useState(1);
  const [selectedTrainer, setSelectedTrainer] = useState<string | null>(null);
  const [selectedTrainerId, setSelectedTrainerId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingTopic, setBookingTopic] = useState('');
  const [bookingProfile, setBookingProfile] = useState('Estudiante Pregrado');
  const [bookingFaculty, setBookingFaculty] = useState('');
  
  const [showBookingEmailSimulator, setShowBookingEmailSimulator] = useState(false);

  // States for Custom Group Workshop Request (Talleres Grupales)
  const [groupStep, setGroupStep] = useState(1);
  const [selectedGroupTopic, setSelectedGroupTopic] = useState<string | null>(null);
  const [groupDate, setGroupDate] = useState<string>('');
  const [groupTime, setGroupTime] = useState<string>('');
  const [groupSize, setGroupSize] = useState<string>('5 - 15 personas');
  const [groupMode, setGroupMode] = useState<string>('Presencial (Sala de Cómputo de Biblioteca)');
  
  const [groupRequesterName, setGroupRequesterName] = useState('');
  const [groupRequesterEmail, setGroupRequesterEmail] = useState('');
  const [groupRequesterRole, setGroupRequesterRole] = useState('Profesor de Planta');
  const [groupCourseName, setGroupCourseName] = useState('');
  const [groupFaculty, setGroupFaculty] = useState('');
  const [groupNotes, setGroupNotes] = useState('');
  
  const [showGroupEmailSimulator, setShowGroupEmailSimulator] = useState(false);

  // States for Workshops & Open Trainings
  const [trainingFilter, setTrainingFilter] = useState<'todos' | 'biblioteca' | 'proveedor'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [registeredTrainings, setRegisteredTrainings] = useState<number[]>([]);
  const [registeringId, setRegisteringId] = useState<number | null>(null);
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerProfile, setRegisterProfile] = useState('Estudiante Pregrado');
  const [registerFaculty, setRegisterFaculty] = useState('');
  
  const [showEmailSimulator, setShowEmailSimulator] = useState(false);
  const [simulatedEmail, setSimulatedEmail] = useState<{
    userName: string;
    userEmail: string;
    trainingTitle: string;
    organizer: string;
    date: string;
    time: string;
    location: string;
    speaker: string;
  } | null>(null);

  const trainers = [
    { id: '1', name: 'Marta Lucía González', specialty: 'Ciencias de la Salud & Medicina', img: 'ML', desc: 'Experta en PubMed, ClinicalKey, Cochrane Library y formulación de estrategias MeSH/DeCS.' },
    { id: '2', name: 'Claudia Patricia Restrepo', specialty: 'Negocios, Economía & Leyes', img: 'CR', desc: 'Especialista en Bloomberg, Scopus, EMIS y recursos de bases de datos mercantiles y legales.' },
    { id: '3', name: 'Elena María Vivas', specialty: 'Ciencias Humanas & Educación', img: 'EV', desc: 'Asesoría experta en Normas APA 7ma, gestores como Mendeley y bases de datos socio-humanísticas.' },
    { id: '4', name: 'Andrés Felipe Solarte', specialty: 'Ingeniería, Diseño & Tecnología', img: 'AS', desc: 'Especialista en IEEE Xplore, ScienceDirect, Zotero Avanzado, patentes y propiedad intelectual.' },
  ];

  const currentTrainer = trainers.find(t => t.id === selectedTrainerId || t.name === selectedTrainer);

  // Filter workshops based on categories AND search input
  const filteredCapacitaciones = CAPACITACIONES.filter(cap => {
    const matchesCategory = trainingFilter === 'todos' || cap.type === trainingFilter;
    const matchesSearch = 
      cap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cap.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cap.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cap.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const timeSlotsMorning = ['08:00 AM', '09:30 AM', '11:00 AM'];
  const timeSlotsAfternoon = ['02:00 PM', '03:30 PM', '05:00 PM'];
  
  // Real calendar of May 2026: Starts on a Friday (4 empty offset slots for Mon, Tue, Wed, Thu)
  const calendarOffsetSlots = Array.from({ length: 4 });
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const getDayOfWeek = (day: number) => {
    // Offset is 4. Day 1 is Friday (index 4).
    // Days 1 to 31.
    // Index: (day - 1 + 4) % 7
    // 0: Mon, 1: Tue, 2: Wed, 3: Thu, 4: Fri, 5: Sat, 6: Sun
    return (day - 1 + 4) % 7;
  };

  const handleResetBooking = () => {
    setStep(1);
    setSelectedTrainer(null);
    setSelectedTrainerId(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingName('');
    setBookingEmail('');
    setBookingTopic('');
    setBookingProfile('Estudiante Pregrado');
    setBookingFaculty('');
  };

  const handleResetGroupBooking = () => {
    setGroupStep(1);
    setSelectedGroupTopic(null);
    setGroupDate('');
    setGroupTime('');
    setGroupSize('5 - 15 personas');
    setGroupMode('Presencial (Sala de Cómputo de Biblioteca)');
    setGroupRequesterName('');
    setGroupRequesterEmail('');
    setGroupRequesterRole('Profesor de Planta');
    setGroupCourseName('');
    setGroupFaculty('');
    setGroupNotes('');
    setShowGroupEmailSimulator(false);
  };

  return (
    <div className="min-h-screen bg-slate-50/40">
      <PageHeader 
        title="Formación y asesoría" 
        description="Desarrolla habilidades profesionales para buscar, evaluar y referenciar información de manera ética y científica."
        breadcrumbs={[{ label: 'Apoyo académico', path: '/apoyo-academico-e-investigacion' }, { label: 'Formación y asesoría' }]}
      />
      
      {/* 🧭 Interactive Task Tabs Navigation */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tab 1: Asesorías individuales o personalizadas */}
          <button
            type="button"
            onClick={() => setActiveTab('individual')}
            className={`text-left p-6 border transition-all relative flex items-start gap-4 cursor-pointer rounded-sm ${
              activeTab === 'individual'
                ? 'bg-white border-brand-blue ring-2 ring-brand-blue/20 shadow-md'
                : 'bg-white/80 border-brand-border hover:border-brand-blue/40 hover:bg-white shadow-xs'
            }`}
          >
            <div className={`p-3 rounded-sm ${activeTab === 'individual' ? 'bg-brand-blue text-white' : 'bg-brand-light text-gray-500'}`}>
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase tracking-widest text-brand-blue block">Soporte Individual</span>
              <h3 className="font-black text-brand-gray text-base tracking-tight leading-none">Asesorías Individuales o Personalizadas</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed max-w-sm">
                Agenda sesiones de 30 a 60 minutos con formadoras expertas en bases de datos y normas de citación.
              </p>
            </div>
            {activeTab === 'individual' && (
              <div className="absolute right-4 top-4 bg-brand-blue text-white w-5 h-5 rounded-full flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
              </div>
            )}
          </button>

          {/* Tab 2: Talleres grupales */}
          <button
            type="button"
            onClick={() => setActiveTab('grupal')}
            className={`text-left p-6 border transition-all relative flex items-start gap-4 cursor-pointer rounded-sm ${
              activeTab === 'grupal'
                ? 'bg-white border-brand-blue ring-2 ring-brand-blue/20 shadow-md'
                : 'bg-white/80 border-brand-border hover:border-brand-blue/40 hover:bg-white shadow-xs'
            }`}
          >
            <div className={`p-3 rounded-sm ${activeTab === 'grupal' ? 'bg-brand-blue text-white' : 'bg-brand-light text-gray-500'}`}>
              <Users className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase tracking-widest text-brand-blue block">Soporte Grupal / Docentes</span>
              <h3 className="font-black text-brand-gray text-base tracking-tight leading-none">Talleres Grupales</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed max-w-sm">
                Solicita capacitaciones a la medida para tus cursos académicos, semilleros o equipos de investigación.
              </p>
            </div>
            {activeTab === 'grupal' && (
              <div className="absolute right-4 top-4 bg-brand-blue text-white w-5 h-5 rounded-full flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
              </div>
            )}
          </button>

          {/* Tab 3: Talleres abiertos */}
          <button
            type="button"
            onClick={() => setActiveTab('abiertos')}
            className={`text-left p-6 border transition-all relative flex items-start gap-4 cursor-pointer rounded-sm ${
              activeTab === 'abiertos'
                ? 'bg-white border-brand-blue ring-2 ring-brand-blue/20 shadow-md'
                : 'bg-white/80 border-brand-border hover:border-brand-blue/40 hover:bg-white shadow-xs'
            }`}
          >
            <div className={`p-3 rounded-sm ${activeTab === 'abiertos' ? 'bg-brand-blue text-white' : 'bg-brand-light text-gray-500'}`}>
              <Calendar className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase tracking-widest text-brand-blue block">Formación Abierta</span>
              <h3 className="font-black text-brand-gray text-base tracking-tight leading-none">Talleres Abiertos</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed max-w-sm">
                Participa en talleres organizados por la biblioteca y webinars liderados por proveedores científicos mundiales.
              </p>
            </div>
            {activeTab === 'abiertos' && (
              <div className="absolute right-4 top-4 bg-brand-blue text-white w-5 h-5 rounded-full flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
              </div>
            )}
          </button>
        </div>
      </section>

      {/* Main Content Area based on Active Tab */}
      <section className="wireframe-section pt-8 pb-20">
        <AnimatePresence mode="wait">
          {activeTab === 'individual' ? (
            <motion.div
              key="individual-advisory"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              {/* Left Side: General Info & Tips */}
              <div className="lg:col-span-1 space-y-8">
                {/* Advisory Topics Card */}
                <div className="bg-white border border-brand-border p-6 shadow-xs">
                  <h3 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-5 flex items-center gap-2">
                    <Award className="w-4 h-4" /> Temas de acompañamiento
                  </h3>
                  <div className="space-y-2.5">
                    {[
                      { t: 'Búsqueda en bases de datos', d: 'Filtros y operadores booleanos en recursos científicos.' },
                      { t: 'Gestores bibliográficos', d: 'Creación de citas y organización de bibliografía con Zotero.' },
                      { t: 'Normas de citación', d: 'Uso práctico de lineamientos de citación APA 7ma o IEEE.' },
                      { t: 'Visibilidad académica', d: 'Creación de perfil Orcid, Google Scholar y métricas de impacto.' },
                      { t: 'Revisión preliminar de textos', d: 'Buenas prácticas éticas de citación para evitar plagio.' },
                    ].map((topic, i) => (
                      <div key={i} className="p-3 bg-brand-light border border-brand-border/60 hover:bg-white hover:border-brand-blue/30 transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle className="text-brand-blue w-3.5 h-3.5 shrink-0" />
                          <span className="text-[11px] font-black text-brand-gray leading-none">{topic.t}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 pl-5 leading-normal">{topic.d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info Card: Group Classrooms */}
                <div className="bg-[#1E293B] text-white p-6 border border-slate-800 shadow-sm relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 opacity-10 text-white">
                    <GraduationCap className="w-28 h-28" />
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-brand-yellow px-2 py-0.5 bg-brand-yellow/10 border border-brand-yellow/20 inline-block mb-3">
                    Docentes & Directores
                  </span>
                  <h3 className="text-sm font-black uppercase tracking-wider mb-2">¿Talleres para tus cursos?</h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mb-5">
                    ¿Quieres capacitar a todo tu grupo en una clase específica? Agenda un taller grupal personalizado sobre el uso de recursos específicos para tu asignatura.
                  </p>
                  <Link 
                    to="/contacto" 
                    className="text-brand-yellow hover:text-white font-black text-[11px] uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors group"
                  >
                    Solicitar sesión grupal 
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Booking Policies / SLA Tips */}
                <div className="p-6 border-2 border-dashed border-brand-border">
                  <h4 className="font-bold text-brand-gray text-xs uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-brand-blue" /> Ten en cuenta
                  </h4>
                  <ul className="space-y-2 text-[10px] text-gray-400 leading-relaxed font-medium">
                    <li className="flex gap-2">
                      <span className="text-brand-blue font-bold">•</span>
                      <span>La sesión se realiza por Microsoft Teams o en la sala del Piso 3 de Biblioteca.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-blue font-bold">•</span>
                      <span>Puedes cancelar o reprogramar hasta con 4 horas de anticipación desde tu correo.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-blue font-bold">•</span>
                      <span>Te recomendamos adjuntar tu borrador o tema de interés en el formulario final.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side: Step-by-Step Interactive Advisory Scheduler */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-brand-border shadow-xs overflow-hidden">
                  <div className="bg-brand-blue p-6 text-white flex justify-between items-center">
                    <div>
                      <h2 className="text-base font-black uppercase tracking-wider">Reserva tu asesoría personalizada</h2>
                      <p className="text-white/70 text-[11px]">Asistencia experta individualizada en investigación y normas académicas.</p>
                    </div>
                    {step > 1 && (
                      <button 
                        type="button" 
                        onClick={handleResetBooking}
                        className="text-[10px] bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Reiniciar reserva
                      </button>
                    )}
                  </div>

                  <div className="p-6 sm:p-8">
                    {/* Stepper with beautiful visual lines */}
                    <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
                      {[
                        { num: 1, label: 'Formadora experta' },
                        { num: 2, label: 'Agenda y Horario' },
                        { num: 3, label: 'Tus datos académicos' }
                      ].map((s) => {
                        const isActive = step === s.num;
                        const isDone = step > s.num;
                        return (
                          <div key={s.num} className="flex items-center gap-2.5 shrink-0">
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs border transition-all ${
                              isActive 
                                ? 'bg-brand-blue text-white border-brand-blue ring-4 ring-brand-blue/15' 
                                : isDone 
                                  ? 'bg-brand-blue/10 text-brand-blue border-brand-blue/20' 
                                  : 'bg-gray-100 text-gray-400 border-gray-200'
                            }`}>
                              {isDone ? <Check className="w-3.5 h-3.5" /> : s.num}
                            </div>
                            <span className={`text-[10px] uppercase font-black tracking-widest ${
                              isActive ? 'text-brand-gray' : isDone ? 'text-brand-blue' : 'text-gray-300'
                            }`}>
                              {s.label}
                            </span>
                            {s.num < 3 && <div className={`w-6 h-px ${isDone ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>}
                          </div>
                        );
                      })}
                    </div>

                    {/* Step 1: Expert Selection with detailed profile cards */}
                    {step === 1 && (
                      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Selecciona la especialista según tu área de conocimiento:</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {trainers.map((t) => (
                            <button 
                              key={t.id}
                              type="button"
                              onClick={() => { 
                                setSelectedTrainer(t.name); 
                                setSelectedTrainerId(t.id);
                                setStep(2); 
                              }}
                              className={`flex flex-col p-5 border text-left transition-all cursor-pointer relative group rounded-sm ${
                                selectedTrainerId === t.id 
                                  ? 'border-brand-blue bg-brand-blue/5 ring-1 ring-brand-blue' 
                                  : 'border-brand-border hover:border-brand-blue/60 hover:bg-slate-50/50'
                              }`}
                            >
                              <div className="flex items-center gap-3.5 mb-3">
                                <div className="w-10 h-10 bg-brand-light flex items-center justify-center font-black text-xs text-brand-blue rounded-full border border-brand-border group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all shrink-0">
                                  {t.img}
                                </div>
                                <div>
                                  <h4 className="font-black text-xs text-brand-gray leading-tight">{t.name}</h4>
                                  <p className="text-[9px] text-brand-blue font-black uppercase tracking-widest mt-0.5">{t.specialty}</p>
                                </div>
                              </div>
                              <p className="text-gray-400 text-[10px] leading-relaxed font-medium">
                                {t.desc}
                              </p>
                              <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-brand-blue w-full">
                                <span>Ver disponibilidad</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Calendar & Time Grid representing Mayo 2026 */}
                    {step === 2 && (
                      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="flex items-center justify-between border-b border-brand-border pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-brand-blue rounded-full inline-block"></span>
                            <span className="text-xs font-black text-brand-gray uppercase tracking-wider">Especialista seleccionada: {selectedTrainer}</span>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => setStep(1)} 
                            className="text-[9px] font-black text-brand-blue uppercase tracking-widest hover:underline cursor-pointer"
                          >
                            Cambiar asesora
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                          {/* Calendar Picker (7 cols) */}
                          <div className="md:col-span-7">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 text-brand-blue" /> 1. Elige un Día de Mayo 2026
                            </h4>
                            <div className="border border-brand-border/80 bg-brand-light/50 p-4 rounded-sm">
                              {/* Days labels */}
                              <div className="grid grid-cols-7 gap-1.5 text-center mb-2">
                                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
                                  <div key={i} className="text-[9px] font-black text-slate-400 py-1 uppercase">{d}</div>
                                ))}
                              </div>
                              
                              {/* Actual Calendar Days Grid */}
                              <div className="grid grid-cols-7 gap-1.5">
                                {/* Offset cells for Mon-Thu */}
                                {calendarOffsetSlots.map((_, i) => (
                                  <div key={`offset-${i}`} className="aspect-square bg-transparent"></div>
                                ))}
                                
                                {/* 31 Days of May */}
                                {calendarDays.map(day => {
                                  const dayOfWeek = getDayOfWeek(day);
                                  const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // index 5: Sat, 6: Sun
                                  const isSelected = selectedDate === day;
                                  
                                  return (
                                    <button 
                                      key={`day-${day}`}
                                      type="button"
                                      disabled={isWeekend}
                                      onClick={() => setSelectedDate(day)}
                                      className={`aspect-square text-[10px] font-bold border rounded-xs transition-all cursor-pointer flex flex-col items-center justify-center relative ${
                                        isWeekend 
                                          ? 'bg-gray-100/50 text-gray-300 border-gray-150 cursor-not-allowed'
                                          : isSelected
                                            ? 'bg-brand-blue text-white border-brand-blue font-black scale-105 shadow-sm'
                                            : 'bg-white text-slate-700 border-brand-border hover:border-brand-blue hover:text-brand-blue'
                                      }`}
                                    >
                                      <span>{day}</span>
                                      {!isWeekend && !isSelected && (
                                        <span className="absolute bottom-1 w-1 h-1 bg-brand-blue/30 rounded-full"></span>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                            <p className="text-[9px] text-gray-400 mt-2 font-medium">
                              * Las citas individuales operan de Lunes a Viernes. Los fines de semana la biblioteca no programa tutorías presenciales.
                            </p>
                          </div>

                          {/* Time Slots Picker (5 cols) */}
                          <div className="md:col-span-5 space-y-5">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">
                              2. Selecciona la Hora
                            </h4>
                            
                            {selectedDate ? (
                              <div className="space-y-4">
                                <span className="text-[10px] font-bold text-brand-blue uppercase bg-brand-blue/5 border border-brand-blue/10 px-2.5 py-1 rounded-xs inline-block">
                                  Día seleccionado: {selectedDate} de Mayo
                                </span>
                                
                                {/* Morning hours */}
                                <div className="space-y-1.5">
                                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block">Jornada Mañana</span>
                                  <div className="grid grid-cols-1 gap-1.5">
                                    {timeSlotsMorning.map(time => (
                                      <button 
                                        key={time}
                                        type="button"
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-2 px-3 border text-[10px] font-bold tracking-wider transition-all cursor-pointer text-left rounded-xs flex justify-between items-center ${
                                          selectedTime === time 
                                            ? 'bg-brand-blue text-white border-brand-blue font-black' 
                                            : 'bg-white border-brand-border text-slate-700 hover:border-brand-blue'
                                        }`}
                                      >
                                        <span>☀️ {time}</span>
                                        {selectedTime === time && <Check className="w-3.5 h-3.5" />}
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Afternoon hours */}
                                <div className="space-y-1.5">
                                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block">Jornada Tarde</span>
                                  <div className="grid grid-cols-1 gap-1.5">
                                    {timeSlotsAfternoon.map(time => (
                                      <button 
                                        key={time}
                                        type="button"
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-2 px-3 border text-[10px] font-bold tracking-wider transition-all cursor-pointer text-left rounded-xs flex justify-between items-center ${
                                          selectedTime === time 
                                            ? 'bg-brand-blue text-white border-brand-blue font-black' 
                                            : 'bg-white border-brand-border text-slate-700 hover:border-brand-blue'
                                        }`}
                                      >
                                        <span>🌙 {time}</span>
                                        {selectedTime === time && <Check className="w-3.5 h-3.5" />}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="h-44 border border-dashed border-brand-border flex flex-col items-center justify-center text-center p-4 bg-slate-50/50">
                                <Clock className="w-8 h-8 text-slate-300 mb-2 animate-pulse" />
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-relaxed">
                                  Por favor selecciona un día del calendario para habilitar los horarios.
                                </span>
                              </div>
                            )}

                            {/* Stepper controls */}
                            <div className="pt-6 border-t border-brand-border flex justify-between items-center">
                              <button 
                                type="button"
                                onClick={() => setStep(1)} 
                                className="text-[9px] font-black text-gray-400 uppercase tracking-widest hover:text-brand-gray cursor-pointer"
                              >
                                Regresar
                              </button>
                              <button 
                                type="button"
                                disabled={!selectedDate || !selectedTime}
                                onClick={() => setStep(3)}
                                className={`wireframe-button-primary py-2.5 px-6 text-[10px] cursor-pointer font-black uppercase tracking-widest ${
                                  (!selectedDate || !selectedTime) && 'opacity-50 cursor-not-allowed'
                                }`}
                              >
                                Siguiente paso
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Confirmation Form & Custom Personal Data */}
                    {step === 3 && (
                      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        {/* Selected info card */}
                        <div className="bg-brand-light p-5 border border-brand-border rounded-sm flex flex-col sm:flex-row justify-between gap-4">
                          <div className="text-left space-y-1">
                            <span className="text-[8px] font-black uppercase tracking-widest text-brand-blue">Resumen de tu cita</span>
                            <h4 className="font-black text-brand-gray text-sm leading-tight">{selectedTrainer}</h4>
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                              Especialidad: {currentTrainer?.specialty}
                            </p>
                          </div>
                          <div className="border-t sm:border-t-0 sm:border-l border-brand-border/80 pt-3 sm:pt-0 sm:pl-5 text-left flex flex-col justify-center">
                            <div className="text-[10px] font-bold text-brand-gray flex items-center gap-1.5 mb-1">
                              <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                              <span>Mayo {selectedDate}, 2026</span>
                            </div>
                            <div className="text-[10px] font-bold text-brand-gray flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-brand-blue" />
                              <span>{selectedTime} ({selectedTime?.includes('AM') ? 'Mañana' : 'Tarde'})</span>
                            </div>
                          </div>
                        </div>

                        {/* Booking fields */}
                        <form 
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (bookingName.trim() && bookingEmail.trim() && bookingTopic.trim()) {
                              setStep(4); // Success State!
                            }
                          }}
                          className="space-y-4 text-left"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Nombre completo *
                              </label>
                              <input 
                                type="text" 
                                required
                                value={bookingName}
                                onChange={(e) => setBookingName(e.target.value)}
                                placeholder="Ej. Isabella Martínez" 
                                className="wireframe-input py-2 text-xs font-semibold" 
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Correo institucional *
                              </label>
                              <input 
                                type="email" 
                                required
                                value={bookingEmail}
                                onChange={(e) => setBookingEmail(e.target.value)}
                                placeholder="isabella@icesi.edu.co" 
                                className="wireframe-input py-2 text-xs font-semibold" 
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Rol en la Universidad *
                              </label>
                              <select 
                                value={bookingProfile}
                                onChange={(e) => setBookingProfile(e.target.value)}
                                className="wireframe-input py-2 text-xs bg-white font-semibold"
                              >
                                <option>Estudiante Pregrado</option>
                                <option>Estudiante Posgrado</option>
                                <option>Profesor de Planta</option>
                                <option>Profesor Hora Cátedra</option>
                                <option>Investigador</option>
                                <option>Graduado Icesi</option>
                              </select>
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Facultad o Programa Académico
                              </label>
                              <input 
                                type="text" 
                                value={bookingFaculty}
                                onChange={(e) => setBookingFaculty(e.target.value)}
                                placeholder="Ej. Ingeniería de Sistemas" 
                                className="wireframe-input py-2 text-xs font-semibold" 
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Describe tu tema de interés o necesidades específicas *
                            </label>
                            <textarea 
                              required
                              value={bookingTopic}
                              onChange={(e) => setBookingTopic(e.target.value)}
                              placeholder="Ej. Requiero ayuda para estructurar los filtros de búsqueda avanzada en Scopus y configurar mi cuenta en Zotero para recopilar las citas de mi proyecto de grado..." 
                              className="wireframe-input py-2 text-xs font-semibold min-h-[90px]" 
                            />
                          </div>

                          <div className="text-[9px] text-gray-400 leading-normal bg-brand-light p-3 border border-brand-border/60">
                            🔒 <strong>Integridad de datos:</strong> La información capturada se usará exclusivamente para la planeación y asignación de recursos virtuales para tu tutoría. Te enviaremos el código de Teams y las diapositivas de soporte a tu correo institucional.
                          </div>

                          {/* Footer action buttons */}
                          <div className="flex gap-4 pt-4 border-t border-brand-border">
                            <button 
                              type="button"
                              onClick={() => setStep(2)} 
                              className="flex-1 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest border border-brand-border hover:bg-gray-50 transition-colors cursor-pointer text-center"
                            >
                              Regresar
                            </button>
                            <button 
                              type="submit"
                              className="flex-1 wireframe-button-primary py-3 text-[10px] cursor-pointer font-black uppercase tracking-widest"
                            >
                              Agendar asesoría
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}

                    {/* Step 4: SUCCESS OVERLAY AND INVOICE / TICKET SYSTEM */}
                    {step === 4 && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="text-center py-6 max-w-md mx-auto space-y-6"
                      >
                        <div className="w-14 h-14 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                          <Check className="w-8 h-8 stroke-[3]" />
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-green-600 px-2.5 py-1 bg-green-50 border border-green-200 rounded-sm mb-2 inline-block">
                            Cita Agendada
                          </span>
                          <h3 className="text-xl font-black text-brand-gray tracking-tight leading-tight mt-1">
                            ¡Tu reserva se procesó con éxito!
                          </h3>
                          <p className="text-gray-400 text-[11px] leading-relaxed mt-2">
                            Hemos reservado un bloque de 45 minutos con nuestra especialista para tu sesión personalizada de acompañamiento.
                          </p>
                        </div>

                        {/* Physical Receipt/Ticket layout */}
                        <div className="bg-brand-light border-2 border-dashed border-brand-border p-5 text-left space-y-3.5 relative overflow-hidden rounded-sm">
                          <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-2 rotate-45 bg-brand-blue text-white text-[7px] font-black uppercase tracking-widest py-1 px-8 text-center">
                            CONFIRMADO
                          </div>
                          
                          <h4 className="font-black text-xs text-brand-gray border-b border-brand-border pb-2 uppercase tracking-wider">
                            Ticket de Reserva #ADV-2026-{selectedDate}
                          </h4>
                          
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-bold text-[10px] uppercase">Asesora:</span>
                              <span className="text-brand-gray font-bold">{selectedTrainer}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-bold text-[10px] uppercase">Fecha:</span>
                              <span className="text-brand-gray font-bold">Mayo {selectedDate}, 2026</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-bold text-[10px] uppercase">Hora:</span>
                              <span className="text-brand-blue font-black">{selectedTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-bold text-[10px] uppercase">Ubicación:</span>
                              <span className="text-brand-gray font-bold">Microsoft Teams / Virtual</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-bold text-[10px] uppercase">Estudiante:</span>
                              <span className="text-brand-gray font-medium truncate max-w-[180px]">{bookingName}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 p-4 text-left rounded-sm space-y-2">
                          <p className="text-[10px] text-amber-800 leading-relaxed font-semibold">
                            📩 <strong>Simulador SMTP Activo:</strong> Hemos enviado un correo corporativo de confirmación a tu buzón <strong>{bookingEmail}</strong> con el enlace directo de conexión para Microsoft Teams.
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setSimulatedEmail({
                                userName: bookingName,
                                userEmail: bookingEmail,
                                trainingTitle: `Asesoría Individual: ${bookingTopic.slice(0, 45)}...`,
                                organizer: 'Biblioteca Icesi (Soporte Académico)',
                                date: `${selectedDate} de Mayo, 2026`,
                                time: selectedTime || '',
                                location: 'Microsoft Teams (Canal Asesoría)',
                                speaker: selectedTrainer || '',
                              });
                              setShowBookingEmailSimulator(true);
                            }}
                            className="bg-amber-600 hover:bg-amber-700 text-white text-[9px] font-black uppercase tracking-widest py-2 px-4 rounded-xs w-full transition-colors cursor-pointer text-center"
                          >
                            ⚡ Ver Bandeja de Entrada de Correo (Simulada)
                          </button>
                        </div>

                        <button 
                          type="button"
                          onClick={handleResetBooking}
                          className="wireframe-button-secondary py-3 text-[10px] w-full cursor-pointer font-black uppercase tracking-widest"
                        >
                          Hacer otra reserva académica
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : activeTab === 'grupal' ? (
            <motion.div
              key="group-custom-advisory"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              {/* Left Side: General Info & Requirements */}
              <div className="lg:col-span-1 space-y-8">
                {/* Benefits Card */}
                <div className="bg-white border border-brand-border p-6 shadow-xs">
                  <h3 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-5 flex items-center gap-2">
                    <Award className="w-4 h-4" /> Beneficios para tu curso
                  </h3>
                  <div className="space-y-3.5">
                    {[
                      { t: 'Contenido Personalizado', d: 'Alineamos los recursos, bases de datos y normas al tema específico del curso.' },
                      { t: 'Ejercicios Prácticos', d: 'Sesiones hands-on donde los estudiantes buscan y guardan fuentes reales.' },
                      { t: 'Seguimiento de Asistencia', d: 'Enviamos el listado oficial de asistencia al docente al finalizar la sesión.' },
                      { t: 'Soporte Post-Taller', d: 'Las formadoras quedan disponibles para resolver dudas específicas de los estudiantes.' },
                    ].map((benefit, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckCircle className="text-brand-blue w-4 h-4 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[11px] font-black text-brand-gray block leading-tight">{benefit.t}</span>
                          <span className="text-[10px] text-gray-400 leading-normal font-medium block mt-0.5">{benefit.d}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Policies / Conditions Card */}
                <div className="p-6 border-2 border-dashed border-brand-border space-y-4">
                  <h4 className="font-bold text-brand-gray text-xs uppercase tracking-widest flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-brand-blue" /> Condiciones del servicio
                  </h4>
                  <ul className="space-y-3 text-[10px] text-gray-400 leading-relaxed font-medium">
                    <li className="flex gap-2">
                      <span className="text-brand-blue font-bold">•</span>
                      <span><strong>Grupo mínimo:</strong> Las sesiones requieren la asistencia de al menos 5 personas.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-blue font-bold">•</span>
                      <span><strong>Anticipación:</strong> Agenda tu solicitud con un mínimo de 3 días hábiles para garantizar disponibilidad.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-blue font-bold">•</span>
                      <span><strong>Espacio físico:</strong> Podemos realizar la sesión en tu mismo salón de clase o en una Sala de Cómputo de la biblioteca.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side: Request form with steps */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-brand-border shadow-xs overflow-hidden">
                  <div className="bg-brand-blue p-6 text-white flex justify-between items-center">
                    <div>
                      <h2 className="text-base font-black uppercase tracking-wider">Solicitud de Taller o Asesoría Grupal</h2>
                      <p className="text-white/70 text-[11px]">Diseñamos una sesión académica a la medida de tus necesidades curriculares o grupales.</p>
                    </div>
                    {groupStep > 1 && (
                      <button 
                        type="button" 
                        onClick={handleResetGroupBooking}
                        className="text-[10px] bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Reiniciar
                      </button>
                    )}
                  </div>

                  <div className="p-6 sm:p-8">
                    {/* Stepper with visual lines */}
                    <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
                      {[
                        { num: 1, label: 'Eje Temático' },
                        { num: 2, label: 'Fecha y Detalles' },
                        { num: 3, label: 'Contacto Académico' }
                      ].map((s) => {
                        const isActive = groupStep === s.num;
                        const isDone = groupStep > s.num;
                        return (
                          <div key={s.num} className="flex items-center gap-2.5 shrink-0">
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs border transition-all ${
                              isActive 
                                ? 'bg-brand-blue text-white border-brand-blue ring-4 ring-brand-blue/15' 
                                : isDone 
                                  ? 'bg-brand-blue/10 text-brand-blue border-brand-blue/20' 
                                  : 'bg-gray-100 text-gray-400 border-gray-200'
                            }`}>
                              {isDone ? <Check className="w-3.5 h-3.5" /> : s.num}
                            </div>
                            <span className={`text-[10px] uppercase font-black tracking-widest ${
                              isActive ? 'text-brand-gray' : isDone ? 'text-brand-blue' : 'text-gray-300'
                            }`}>
                              {s.label}
                            </span>
                            {s.num < 3 && <div className={`w-6 h-px ${isDone ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>}
                          </div>
                        );
                      })}
                    </div>

                    {/* Step 1: Topic / Focus selection */}
                    {groupStep === 1 && (
                      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Selecciona la temática principal para tu grupo o asignatura:</span>
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { title: 'Búsqueda de Información y Bases de Datos Especializadas', desc: 'Operadores booleanos, filtros avanzados y formulación de estrategias de búsqueda científica.' },
                            { title: 'Gestores de Referencias Bibliográficas (Zotero Avanzado)', desc: 'Instalación, sincronización de bibliotecas, creación de citas dinámicas y grupos colaborativos.' },
                            { title: 'Normas de Citación y Estilo Académico (APA, IEEE, Vancouver)', desc: 'Formato del manuscrito, citas textuales y parafraseo, estructuración ética de listas de referencias.' },
                            { title: 'Vigilancia Tecnológica, Patentes y Propiedad Intelectual', desc: 'Uso de recursos de patentes, estados del arte competitivos y tendencias emergentes de diseño.' },
                            { title: 'Visibilidad Científica, Métricas e Identidad Digital', desc: 'Manejo de ORCID, Google Académico, análisis de citación e identificación de revistas indexadas de impacto.' }
                          ].map((topic, i) => (
                            <button 
                              key={i}
                              type="button"
                              onClick={() => { 
                                setSelectedGroupTopic(topic.title); 
                                setGroupStep(2); 
                              }}
                              className={`flex flex-col p-4 border text-left transition-all cursor-pointer relative group rounded-sm ${
                                selectedGroupTopic === topic.title 
                                  ? 'border-brand-blue bg-brand-blue/5 ring-1 ring-brand-blue' 
                                  : 'border-brand-border hover:border-brand-blue/60 hover:bg-slate-50/50'
                              }`}
                            >
                              <h4 className="font-black text-xs text-brand-gray leading-tight group-hover:text-brand-blue transition-colors">{topic.title}</h4>
                              <p className="text-gray-400 text-[10px] leading-relaxed font-medium mt-1">
                                {topic.desc}
                              </p>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Date, Time and Details */}
                    {groupStep === 2 && (
                      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="flex items-center justify-between border-b border-brand-border pb-3">
                          <span className="text-xs font-black text-brand-gray uppercase tracking-wider">Eje temático: {selectedGroupTopic}</span>
                          <button 
                            type="button" 
                            onClick={() => setGroupStep(1)} 
                            className="text-[9px] font-black text-brand-blue uppercase tracking-widest hover:underline cursor-pointer"
                          >
                            Cambiar tema
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Fecha sugerida *
                            </label>
                            <input 
                              type="date" 
                              required
                              value={groupDate}
                              onChange={(e) => setGroupDate(e.target.value)}
                              className="wireframe-input py-2 text-xs font-semibold bg-white" 
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Hora sugerida *
                            </label>
                            <input 
                              type="time" 
                              required
                              value={groupTime}
                              onChange={(e) => setGroupTime(e.target.value)}
                              className="wireframe-input py-2 text-xs font-semibold bg-white" 
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Tamaño estimado del grupo *
                            </label>
                            <select 
                              value={groupSize}
                              onChange={(e) => setGroupSize(e.target.value)}
                              className="wireframe-input py-2 text-xs bg-white font-semibold"
                            >
                              <option>5 - 15 personas</option>
                              <option>16 - 30 personas</option>
                              <option>31 - 50 personas</option>
                              <option>Más de 50 personas</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Modalidad solicitada *
                            </label>
                            <select 
                              value={groupMode}
                              onChange={(e) => setGroupMode(e.target.value)}
                              className="wireframe-input py-2 text-xs bg-white font-semibold"
                            >
                              <option>Presencial (Sala de Cómputo de Biblioteca)</option>
                              <option>Presencial (En tu mismo salón de clase)</option>
                              <option>Virtual (Sesión Microsoft Teams dedicada)</option>
                            </select>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-brand-border flex justify-between items-center">
                          <button 
                            type="button"
                            onClick={() => setGroupStep(1)} 
                            className="text-[9px] font-black text-gray-400 uppercase tracking-widest hover:text-brand-gray cursor-pointer"
                          >
                            Regresar
                          </button>
                          <button 
                            type="button"
                            disabled={!groupDate || !groupTime}
                            onClick={() => setGroupStep(3)}
                            className={`wireframe-button-primary py-2.5 px-6 text-[10px] cursor-pointer font-black uppercase tracking-widest ${
                              (!groupDate || !groupTime) && 'opacity-50 cursor-not-allowed'
                            }`}
                          >
                            Siguiente paso
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Contact details and send request */}
                    {groupStep === 3 && (
                      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="bg-brand-light p-4 border border-brand-border rounded-sm text-left text-xs font-semibold space-y-1 text-slate-700">
                          <span className="text-[8px] font-black uppercase tracking-widest text-brand-blue block">Resumen de tu solicitud grupal</span>
                          <p>🎯 <span className="text-gray-400">Tema:</span> {selectedGroupTopic}</p>
                          <p>📅 <span className="text-gray-400">Programación:</span> {groupDate} a las {groupTime}</p>
                          <p>👥 <span className="text-gray-400">Grupo:</span> {groupSize} | {groupMode}</p>
                        </div>

                        <form 
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (groupRequesterName.trim() && groupRequesterEmail.trim()) {
                              setGroupStep(4); // Success State!
                            }
                          }}
                          className="space-y-4 text-left"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Nombre del docente o líder *
                              </label>
                              <input 
                                type="text" 
                                required
                                value={groupRequesterName}
                                onChange={(e) => setGroupRequesterName(e.target.value)}
                                placeholder="Ej. Dr. Alberto Restrepo" 
                                className="wireframe-input py-2 text-xs font-semibold" 
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Correo institucional *
                              </label>
                              <input 
                                type="email" 
                                required
                                value={groupRequesterEmail}
                                onChange={(e) => setGroupRequesterEmail(e.target.value)}
                                placeholder="alberto.restrepo@icesi.edu.co" 
                                className="wireframe-input py-2 text-xs font-semibold" 
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Rol del solicitante *
                              </label>
                              <select 
                                value={groupRequesterRole}
                                onChange={(e) => setGroupRequesterRole(e.target.value)}
                                className="wireframe-input py-2 text-xs bg-white font-semibold"
                              >
                                <option>Profesor de Planta</option>
                                <option>Profesor Hora Cátedra</option>
                                <option>Investigador Principal</option>
                                <option>Estudiante / Monitor Académico</option>
                                <option>Coordinador / Director de Programa</option>
                              </select>
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Nombre de la Asignatura o Semillero
                              </label>
                              <input 
                                type="text" 
                                value={groupCourseName}
                                onChange={(e) => setGroupCourseName(e.target.value)}
                                placeholder="Ej. Metodología de Investigación II" 
                                className="wireframe-input py-2 text-xs font-semibold" 
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Observaciones especiales o requerimientos de bases de datos específicas
                            </label>
                            <textarea 
                              value={groupNotes}
                              onChange={(e) => setGroupNotes(e.target.value)}
                              placeholder="Ej. Se requiere enfoque especial en búsquedas especializadas de Cochrane y PubMed, ya que los estudiantes formularán preguntas con metodología PICO." 
                              className="wireframe-input py-2 text-xs font-semibold min-h-[80px]" 
                            />
                          </div>

                          <div className="text-[9px] text-gray-400 bg-brand-light p-3 border border-brand-border/60">
                            🔒 <strong>Asignación institucional:</strong> Una vez enviada la solicitud, el equipo de formadores de Biblioteca evaluará la solicitud y te contactará en un plazo máximo de 48 horas hábiles para coordinar el enlace virtual o la reserva física del laboratorio.
                          </div>

                          <div className="flex gap-4 pt-4 border-t border-brand-border">
                            <button 
                              type="button"
                              onClick={() => setGroupStep(2)} 
                              className="flex-1 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest border border-brand-border hover:bg-gray-50 transition-colors cursor-pointer text-center"
                            >
                              Regresar
                            </button>
                            <button 
                              type="submit"
                              className="flex-1 wireframe-button-primary py-3 text-[10px] cursor-pointer font-black uppercase tracking-widest"
                            >
                              Enviar Solicitud
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}

                    {/* Step 4: Group Workshop Booking Success */}
                    {groupStep === 4 && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="text-center py-6 max-w-md mx-auto space-y-6"
                      >
                        <div className="w-14 h-14 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                          <Check className="w-8 h-8 stroke-[3]" />
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-green-600 px-2.5 py-1 bg-green-50 border border-green-200 rounded-sm mb-2 inline-block">
                            Solicitud Recibida
                          </span>
                          <h3 className="text-xl font-black text-brand-gray tracking-tight leading-tight mt-1">
                            ¡Petición enviada con éxito!
                          </h3>
                          <p className="text-gray-400 text-[11px] leading-relaxed mt-2">
                            Hemos registrado tu solicitud para el taller grupal. Nuestro equipo de formadores académicos iniciará la estructuración del material de apoyo.
                          </p>
                        </div>

                        {/* Physical Receipt/Ticket layout */}
                        <div className="bg-brand-light border-2 border-dashed border-brand-border p-5 text-left space-y-3.5 relative overflow-hidden rounded-sm">
                          <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-2 rotate-45 bg-amber-500 text-white text-[7px] font-black uppercase tracking-widest py-1 px-8 text-center">
                            PENDIENTE
                          </div>
                          
                          <h4 className="font-black text-xs text-brand-gray border-b border-brand-border pb-2 uppercase tracking-wider">
                            Petición de Taller Grupal #GRP-2026-N
                          </h4>
                          
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-bold text-[10px] uppercase">Eje Temático:</span>
                              <span className="text-brand-gray font-bold text-right truncate max-w-[180px]">{selectedGroupTopic}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-bold text-[10px] uppercase">Fecha Propuesta:</span>
                              <span className="text-brand-gray font-bold">{groupDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-bold text-[10px] uppercase">Hora Sugerida:</span>
                              <span className="text-brand-blue font-black">{groupTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-bold text-[10px] uppercase">Modalidad:</span>
                              <span className="text-brand-gray font-bold truncate max-w-[180px]">{groupMode}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-bold text-[10px] uppercase">Solicitante:</span>
                              <span className="text-brand-gray font-medium truncate max-w-[180px]">{groupRequesterName} ({groupRequesterRole})</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 p-4 text-left rounded-sm space-y-2">
                          <p className="text-[10px] text-amber-800 leading-relaxed font-semibold">
                            📩 <strong>Simulador SMTP Activo:</strong> Hemos despachado un reporte con tu petición de taller grupal a la coordinación de apoyo de la Biblioteca e investigación. Recibirás respuesta oficial en tu correo <strong>{groupRequesterEmail}</strong>.
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setSimulatedEmail({
                                userName: groupRequesterName,
                                userEmail: groupRequesterEmail,
                                trainingTitle: `Solicitud de Taller Grupal: ${selectedGroupTopic}`,
                                organizer: 'Biblioteca Universidad Icesi',
                                date: groupDate,
                                time: groupTime,
                                location: groupMode,
                                speaker: 'Especialista Asignado según área',
                              });
                              setShowGroupEmailSimulator(true);
                            }}
                            className="bg-amber-600 hover:bg-amber-700 text-white text-[9px] font-black uppercase tracking-widest py-2 px-4 rounded-xs w-full transition-colors cursor-pointer text-center"
                          >
                            ⚡ Ver Bandeja de Entrada de Correo (Simulada)
                          </button>
                        </div>

                        <button 
                          type="button"
                          onClick={handleResetGroupBooking}
                          className="wireframe-button-secondary py-3 text-[10px] w-full cursor-pointer font-black uppercase tracking-widest"
                        >
                          Solicitar otro taller académico grupal
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="group-workshops"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              {/* 🔍 Advanced Filter and Live Search Area */}
              <div className="bg-white border border-brand-border p-6 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                {/* Real-time Search Input */}
                <div className="relative flex-grow max-w-xl">
                  <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar talleres por título, ponente, palabras clave (Zotero, APA, Scopus)..."
                    className="w-full border border-brand-border pl-10 pr-4 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                  {searchQuery && (
                    <button 
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-gray font-black text-xs cursor-pointer"
                    >
                      Limpiar
                    </button>
                  )}
                </div>

                {/* Filter category tabs with count badges */}
                <div className="flex gap-1.5 p-1 bg-brand-light border border-brand-border self-start md:self-stretch overflow-x-auto">
                  {[
                    { label: 'Todas las Sesiones', value: 'todos', count: CAPACITACIONES.length },
                    { label: 'De Biblioteca', value: 'biblioteca', count: CAPACITACIONES.filter(c => c.type === 'biblioteca').length },
                    { label: 'Con Proveedores', value: 'proveedor', count: CAPACITACIONES.filter(c => c.type === 'proveedor').length }
                  ].map(btn => (
                    <button
                      key={btn.value}
                      type="button"
                      onClick={() => setTrainingFilter(btn.value as any)}
                      className={`px-3 py-2 text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        trainingFilter === btn.value
                          ? 'bg-brand-blue text-white shadow-sm'
                          : 'text-gray-400 hover:text-brand-gray'
                      }`}
                    >
                      <span>{btn.label}</span>
                      <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded-full ${
                        trainingFilter === btn.value ? 'bg-white text-brand-blue' : 'bg-slate-200/60 text-slate-500'
                      }`}>
                        {btn.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Workshops */}
              {filteredCapacitaciones.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCapacitaciones.map(cap => {
                    const isRegistered = registeredTrainings.includes(cap.id);
                    return (
                      <div 
                        key={cap.id} 
                        className={`wireframe-card flex flex-col justify-between border-t-4 transition-all duration-300 ${
                          cap.type === 'biblioteca' ? 'border-t-brand-blue' : 'border-t-brand-yellow'
                        } ${isRegistered ? 'bg-green-50/10 border-green-200 shadow-sm' : 'hover:border-brand-blue'}`}
                      >
                        <div>
                          {/* Header: Organizer & Date */}
                          <div className="flex justify-between items-start gap-3 mb-4">
                            <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm border ${
                              cap.type === 'biblioteca'
                                ? 'bg-brand-blue/5 border-brand-blue/15 text-brand-blue'
                                : 'bg-brand-yellow/10 border-brand-yellow/30 text-brand-gray'
                            }`}>
                              {cap.organizer}
                            </span>
                            <span className="flex items-center gap-1 text-gray-400 text-[9px] font-black uppercase tracking-widest shrink-0">
                              <Calendar className="w-3 h-3 text-brand-blue" />
                              {cap.date}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-black text-brand-gray text-sm tracking-tight mb-2 leading-snug hover:text-brand-blue transition-colors">
                            {cap.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-400 text-[10px] leading-relaxed mb-4 line-clamp-3 font-medium">
                            {cap.desc}
                          </p>

                          {/* Details: Time, Location, Speaker */}
                          <div className="space-y-1.5 border-t border-brand-border/60 pt-3 mb-6 text-[10px] text-gray-500 font-bold">
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                              <span>{cap.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {cap.location.toLowerCase().includes('línea') || cap.location.toLowerCase().includes('zoom') || cap.location.toLowerCase().includes('teams') ? (
                                <Video className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                              ) : (
                                <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                              )}
                              <span className="truncate">{cap.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                              <span className="truncate text-[9px] uppercase tracking-wider">{cap.speaker}</span>
                            </div>
                          </div>
                        </div>

                        {/* Button */}
                        <div>
                          {isRegistered ? (
                            <div className="w-full bg-green-50 text-green-700 border border-green-200 py-3 text-center text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-1.5 rounded-xs">
                              <CheckCircle className="w-4 h-4 text-green-600 animate-bounce" />
                              ¡Inscrito con éxito!
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setRegisteringId(cap.id)}
                              className={`w-full text-center py-2.5 text-[9px] font-black uppercase tracking-widest border transition-all cursor-pointer rounded-xs ${
                                cap.type === 'biblioteca'
                                  ? 'bg-white border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
                                  : 'bg-white border-brand-gray text-brand-gray hover:bg-brand-gray hover:text-white'
                              }`}
                            >
                              Inscribirme al taller
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="border border-dashed border-brand-border text-center py-16 px-4 bg-white">
                  <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h4 className="text-sm font-black text-brand-gray uppercase tracking-wider">No se encontraron talleres</h4>
                  <p className="text-gray-400 text-xs mt-1.5 max-w-sm mx-auto">
                    Intenta modificando los términos de búsqueda o selecciona otra categoría de filtros en las pestañas superiores.
                  </p>
                  {searchQuery && (
                    <button 
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="mt-4 wireframe-button-secondary text-[9px] py-2 px-5 cursor-pointer font-black uppercase tracking-widest"
                    >
                      Limpiar filtros de búsqueda
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal de Inscripción (Workshop Enrollment) */}
        <AnimatePresence>
          {registeringId !== null && (() => {
            const selectedCap = CAPACITACIONES.find(c => c.id === registeringId);
            if (!selectedCap) return null;
            return (
              <div className="fixed inset-0 bg-brand-gray/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="bg-white border-2 border-brand-blue shadow-2xl max-w-md w-full overflow-hidden flex flex-col rounded-sm"
                >
                  {/* Modal Header */}
                  <div className="bg-brand-blue p-6 text-white relative">
                    <button 
                      type="button"
                      onClick={() => setRegisteringId(null)}
                      className="absolute top-4 right-4 text-white/85 hover:text-white font-black text-xl w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 cursor-pointer"
                    >
                      ×
                    </button>
                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-yellow px-2 py-0.5 bg-brand-yellow/10 border border-brand-yellow/20 mb-2 inline-block">
                      Formulario de Inscripción
                    </span>
                    <h3 className="text-base font-black leading-tight tracking-tight mt-1">
                      {selectedCap.title}
                    </h3>
                    <p className="text-white/70 text-[9px] font-bold uppercase tracking-widest mt-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {selectedCap.date} | <Clock className="w-3.5 h-3.5" /> {selectedCap.time}
                    </p>
                  </div>

                  {/* Modal Body */}
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (registerName.trim() && registerEmail.trim()) {
                        setRegisteredTrainings([...registeredTrainings, selectedCap.id]);
                        setSimulatedEmail({
                          userName: registerName,
                          userEmail: registerEmail,
                          trainingTitle: selectedCap.title,
                          organizer: selectedCap.organizer,
                          date: selectedCap.date,
                          time: selectedCap.time,
                          location: selectedCap.location,
                          speaker: selectedCap.speaker,
                        });
                        setRegisteringId(null);
                        setRegisterName('');
                        setRegisterEmail('');
                        setShowEmailSimulator(true);
                      }
                    }}
                    className="p-6 sm:p-8 space-y-4 text-left"
                  >
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        Nombre completo *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        placeholder="Ej. Juan Pérez" 
                        className="wireframe-input py-2 text-xs font-semibold" 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        Correo institucional *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        placeholder="ejemplo@icesi.edu.co" 
                        className="wireframe-input py-2 text-xs font-semibold" 
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          Rol o Perfil *
                        </label>
                        <select 
                          value={registerProfile}
                          onChange={(e) => setRegisterProfile(e.target.value)}
                          className="wireframe-input py-2 text-xs font-semibold bg-white"
                        >
                          <option>Estudiante Pregrado</option>
                          <option>Estudiante Posgrado</option>
                          <option>Docente</option>
                          <option>Investigador</option>
                          <option>Graduado</option>
                          <option>Colaborador / Administrativo</option>
                        </select>
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          Programa o Facultad
                        </label>
                        <input 
                          type="text" 
                          value={registerFaculty}
                          onChange={(e) => setRegisterFaculty(e.target.value)}
                          placeholder="Ej. Medicina, Diseño" 
                          className="wireframe-input py-2 text-xs font-semibold" 
                        />
                      </div>
                    </div>

                    <div className="text-[10px] text-gray-400 leading-relaxed bg-brand-light p-3 border border-brand-border/60">
                      <strong>Información de acceso:</strong> Una vez inscrito, recibirás de forma automática las credenciales o el enlace directo de conexión en tu correo institucional una hora antes del inicio del taller.
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-brand-border">
                      <button 
                        type="button"
                        onClick={() => setRegisteringId(null)}
                        className="flex-1 py-2.5 text-[9px] font-black text-gray-400 uppercase tracking-widest border border-brand-border hover:bg-gray-50 transition-colors cursor-pointer text-center"
                      >
                        Cancelar
                      </button>
                      <button 
                        type="submit"
                        className="flex-1 wireframe-button-primary py-2.5 text-[9px] cursor-pointer font-black uppercase tracking-widest"
                      >
                        Confirmar registro
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            );
          })()}
        </AnimatePresence>

        {/* Modal de Simulación de Correo Recibido - Compatible both with Advisory Booking, Group Requests, and Workshops */}
        <AnimatePresence>
          {((showEmailSimulator || showBookingEmailSimulator || showGroupEmailSimulator) && simulatedEmail) && (
            <div className="fixed inset-0 bg-brand-gray/75 backdrop-blur-xs flex items-center justify-center z-50 p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="bg-white border-2 border-brand-gray shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col rounded-sm"
              >
                {/* Email Client Header */}
                <div className="bg-[#1E293B] px-6 py-4 text-white flex justify-between items-center border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-[10px] font-black tracking-wider text-slate-400 uppercase ml-3 font-mono">
                      Icesi Webmail Simulator v1.0
                    </span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => {
                      setShowEmailSimulator(false);
                      setShowBookingEmailSimulator(false);
                      setShowGroupEmailSimulator(false);
                    }}
                    className="text-slate-400 hover:text-white font-black text-xl w-7 h-7 flex items-center justify-center rounded-sm hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    ×
                  </button>
                </div>

                {/* Email Envelope Header */}
                <div className="bg-slate-50 p-6 border-b border-brand-border space-y-2.5 text-left">
                  <div className="flex items-center text-xs">
                    <span className="w-16 text-gray-400 font-bold uppercase tracking-wider">De:</span>
                    <span className="font-bold text-slate-800">
                      Biblioteca Icesi <span className="text-brand-blue text-[11px] font-normal">&lt;formacion.biblioteca@icesi.edu.co&gt;</span>
                    </span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-16 text-gray-400 font-bold uppercase tracking-wider">Para:</span>
                    <span className="font-semibold text-slate-700">
                      {simulatedEmail.userName} <span className="text-gray-400 text-[11px] font-normal">&lt;{simulatedEmail.userEmail}&gt;</span>
                    </span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-16 text-gray-400 font-bold uppercase tracking-wider">Asunto:</span>
                    <span className="font-black text-brand-blue text-sm flex items-center gap-1.5">
                      <span className="bg-brand-blue/10 text-brand-blue text-[9px] px-1.5 py-0.5 rounded-sm border border-brand-blue/20 font-black uppercase">CONFIRMACIÓN OFICIAL</span>
                      {simulatedEmail.trainingTitle}
                    </span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-16 text-gray-400 font-bold uppercase tracking-wider">Fecha:</span>
                    <span className="text-gray-500 font-medium">{new Date().toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} a las {new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>

                {/* Email Body Content Area */}
                <div className="p-8 overflow-y-auto max-h-[480px] bg-slate-100/50 flex-grow text-left">
                  {/* Actual Formatted Email Newsletter Style Container */}
                  <div className="bg-white border border-brand-border shadow-sm max-w-xl mx-auto p-8 rounded-sm">
                    {/* Fake Header Branding inside Email */}
                    <div className="flex justify-between items-center border-b-2 border-brand-blue pb-5 mb-6">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">UNIVERSIDAD ICESI</span>
                        <h4 className="text-lg font-black text-brand-gray tracking-tight leading-none mt-1">Servicios de Biblioteca</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-bold uppercase text-gray-400 block">Soporte Académico</span>
                        <span className="text-[10px] font-black text-brand-blue uppercase tracking-wider">Formación y Asesoría</span>
                      </div>
                    </div>

                    {/* Email Content */}
                    <div className="space-y-5">
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        Hola <strong className="text-brand-gray font-black">{simulatedEmail.userName}</strong>,
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Tu solicitud de registro se ha completado exitosamente en nuestra plataforma de apoyo académico. A continuación te adjuntamos los detalles específicos de tu agenda:
                      </p>

                      {/* Training Info Box inside Email */}
                      <div className="bg-brand-light border border-brand-border p-5 space-y-4 rounded-sm">
                        <h5 className="font-black text-xs text-brand-gray tracking-tight uppercase border-b border-brand-border/60 pb-2">
                          Detalles del Evento o Tutoría
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
                          <div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase block mb-0.5">Asunto / Taller:</span>
                            <span className="text-brand-gray font-black block text-[12px] leading-tight">{simulatedEmail.trainingTitle}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase block mb-0.5">Organizado por:</span>
                            <span className="text-brand-gray font-bold block">{simulatedEmail.organizer}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase block mb-0.5">Fecha y Hora:</span>
                            <span className="text-brand-blue font-bold block">{simulatedEmail.date}</span>
                            <span className="text-slate-500 font-normal text-[11px]">{simulatedEmail.time}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase block mb-0.5">Ubicación / Plataforma:</span>
                            <span className="text-brand-gray font-bold block">{simulatedEmail.location}</span>
                          </div>
                          <div className="sm:col-span-2">
                            <span className="text-[10px] text-gray-400 font-bold uppercase block mb-0.5">Tutor o Ponente asignado:</span>
                            <span className="text-brand-gray font-bold block">{simulatedEmail.speaker}</span>
                          </div>
                        </div>
                      </div>

                      {/* Main Action Button in Email */}
                      <div className="text-center py-4">
                        <button 
                          type="button"
                          onClick={() => {
                            alert(`Simulador: Abriendo canal de Teams o mapa del campus Icesi para la tutoría: "${simulatedEmail.trainingTitle}"`);
                          }}
                          className="inline-block bg-brand-blue text-white px-8 py-3.5 text-xs font-black uppercase tracking-widest hover:bg-opacity-90 transition-all rounded-sm shadow-sm cursor-pointer"
                        >
                          {simulatedEmail.location.toLowerCase().includes('teams') || simulatedEmail.location.toLowerCase().includes('línea') || simulatedEmail.location.toLowerCase().includes('zoom')
                            ? '🔗 Acceder a Sala de Videoconferencia'
                            : '📍 Ver Ubicación en Campus Icesi'}
                        </button>
                        <p className="text-[10px] text-gray-400 mt-2">
                          (La conexión se activará automáticamente con tus credenciales Icesi)
                        </p>
                      </div>

                      {/* Google / Outlook Calendar Add */}
                      <div className="border-t border-brand-border/60 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="text-[11px] text-gray-500 font-medium">¿Deseas agregarlo a tu agenda personal?</span>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => alert('Simulador: Archivo de invitación .ics generado para Google Calendar.')}
                            className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 border border-brand-border hover:bg-slate-50 rounded-sm text-slate-600 flex items-center gap-1.5 cursor-pointer"
                          >
                            <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                            Google
                          </button>
                          <button
                            type="button"
                            onClick={() => alert('Simulador: Archivo de invitación .ics generado para Outlook / Apple Calendar.')}
                            className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 border border-brand-border hover:bg-slate-50 rounded-sm text-slate-600 flex items-center gap-1.5 cursor-pointer"
                          >
                            <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                            Outlook
                          </button>
                        </div>
                      </div>

                      {/* Pre-Requisites Box */}
                      <div className="border-t border-brand-border/60 pt-4 space-y-2 text-[11px] text-slate-500">
                        <span className="font-bold text-brand-gray block text-xs">Instrucciones y preparación para el taller:</span>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Recomendamos conectarte o llegar al espacio asignado 5 minutos antes para validar tu asistencia oficial.</li>
                          <li>Para talleres interactivos de Zotero, recuerda tener el instalador y conector del navegador ya cargados en tu laptop.</li>
                          <li>Ten a la mano tus credenciales únicas de la Universidad Icesi para interactuar con los agregadores de bases de datos de forma autónoma.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Email Footer */}
                    <div className="border-t border-brand-border/60 pt-5 mt-6 text-center text-[10px] text-gray-400 space-y-1">
                      <p className="font-bold">Biblioteca Universidad Icesi</p>
                      <p>Cali, Colombia - PBX: 555 23 34 Ext. 4321</p>
                      <p className="text-[9px]">Este es un correo de confirmación de registro automatizado. Por favor no respondas a este mensaje.</p>
                    </div>
                  </div>

                  {/* Simulator Sandbox info bar */}
                  <div className="max-w-xl mx-auto mt-4 text-center text-[10px] text-slate-500 font-mono bg-amber-50 border border-amber-200/60 p-3 rounded-sm leading-relaxed">
                    ⚠️ <strong>Información del Entorno de Prototipo:</strong> Esta ventana representa el correo electrónico real de confirmación que es despachado por el backend de la Biblioteca a través del servidor SMTP corporativo. En producción, este HTML se envía directamente al buzón del estudiante en Microsoft 365.
                  </div>
                </div>

                {/* Email Client Footer Actions */}
                <div className="bg-slate-50 p-4 border-t border-brand-border flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEmailSimulator(false);
                      setShowBookingEmailSimulator(false);
                    }}
                    className="wireframe-button-primary py-2.5 px-6 text-xs cursor-pointer"
                  >
                    Entendido, Cerrar Correo
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="max-w-4xl mx-auto mt-16">
          <ServiceSLA 
            title="SLA: Formación y Acompañamiento Académico"
            items={[
              { compromiso: 'Confirmación y agendamiento automático de asesorías personalizadas', tiempo: 'Inmediata', canal: 'Software de Reservas en línea' },
              { compromiso: 'Solicitud e impartición de talleres grupales o capacitación docente', tiempo: '3 días hábiles', canal: 'Coordinación de Formación (Correo)' },
              { compromiso: 'Envío de memorias, grabaciones y material complementario de asesoría', tiempo: '24 horas hábiles', canal: 'Correo de la formadora asignada' }
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export function VigilanciaEstrategica() {
  return (
    <div>
      <PageHeader 
        title="Vigilancia estratégica" 
        description="Analizamos tendencias y producimos inteligencia investigativa para fortalecer la toma de decisiones académicas."
        breadcrumbs={[{ label: 'Apoyo académico', path: '/apoyo-academico-e-investigacion' }, { label: 'Vigilancia' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-brand-gray tracking-tight uppercase text-xs tracking-[0.2em] text-brand-blue">Inteligencia Investigativa</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              El servicio de Vigilancia Estratégica busca identificar, capturar y analizar información científica y tecnológica relevante para los grupos de investigación y las facultades de la universidad.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Estados del arte', desc: 'Revisiones exhaustivas sobre temas específicos de investigación.' },
                { title: 'Análisis bibliométrico', desc: 'Medición del impacto y visibilidad de la producción científica.' },
                { title: 'Alertas de convocatorias', desc: 'Identificación de oportunidades de financiación externa.' },
                { title: 'Tendencias emergentes', desc: 'Reportes sobre nuevas áreas del conocimiento y tecnologías.' },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-brand-border bg-brand-light">
                  <h4 className="font-bold text-brand-gray mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-gray text-white p-10 rounded-sm">
            <h3 className="text-xl font-bold mb-8">Solicitud de informe</h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Este servicio está dirigido principalmente a directores de programas, grupos de investigación y líderes de proyectos institucionales.
            </p>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Facultad / Unidad</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Tema o área de interés</label>
                <textarea className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors h-32"></textarea>
              </div>
              <button className="wireframe-button-primary w-full py-4 text-xs">Enviar solicitud de análisis</button>
            </form>
          </div>
        </div>
        
        <div className="bg-brand-light p-12 border border-brand-border flex flex-col items-center text-center mb-12">
          <FileSearch className="w-12 h-12 text-brand-blue mb-6" />
          <h3 className="text-2xl font-bold mb-4">Reportes de Vigilancia</h3>
          <p className="text-gray-400 text-sm max-w-2xl mb-8">
            Consulta los últimos informes públicos sobre tendencias globales en educación superior, tecnología y bibliometría producidos por nuestro equipo.
          </p>
          <Link to="/recursos-de-informacion" className="text-brand-blue font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">Ir al repositorio de informes <ArrowRight className="w-4 h-4" /></Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <ServiceSLA 
            title="SLA: Vigilancia Tecnológica e Inteligencia Investigativa"
            items={[
              { compromiso: 'Evaluación inicial de viabilidad técnica y temática del reporte', tiempo: '3 días hábiles', canal: 'Formulario de Solicitud / Teams' },
              { compromiso: 'Entrega formal del informe de Vigilancia Tecnológica finalizado', tiempo: '10 a 15 días hábiles', canal: 'Especialista de Referencia (Correo)' },
              { compromiso: 'Asesoría remota para aclaración de resultados del estado del arte', tiempo: '48 horas de preaviso', canal: 'Agendamiento virtual Teams' }
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export function CompraMaterial() {
  return (
    <div>
      <PageHeader 
        title="Compra de material bibliográfico" 
        description="Participa en el crecimiento de nuestra colección sugiriendo la compra de nuevos libros y recursos para docencia e investigación."
        breadcrumbs={[{ label: 'Servicios', path: '/servicios' }, { label: 'Compra de material' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="wireframe-card p-8 bg-brand-light">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><ShoppingCart className="w-5 h-5 text-brand-blue" /> Criterios base de compra</h3>
              <ul className="space-y-4 text-xs text-gray-500">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-black">•</span>
                  <p>Prioridad para material solicitado en sílabos de cursos vigentes.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-black">•</span>
                  <p>Adquisición de libros electrónicos preferiblemente sobre material impreso.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-black">•</span>
                  <p>Evaluación de pertinencia académica y disponibilidad presupuestal.</p>
                </li>
              </ul>
            </div>
            
            <div className="p-8 border-2 border-dashed border-brand-border rounded-xl">
              <h3 className="text-lg font-bold mb-4">¿Ya revisaste el catálogo?</h3>
              <p className="text-sm text-gray-400 mb-6">Antes de solicitar una compra, por favor verifica que el material no se encuentre ya disponible en nuestras colecciones físicas o digitales.</p>
              <Link to="/catalogo-publico" className="bg-black text-white hover:bg-neutral-800 font-bold px-6 py-3 rounded-lg w-full text-xs text-center block transition-colors">
                Abrir catálogo público (EDS)
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white border border-brand-border p-10 shadow-sm rounded-xl">
              <h2 className="text-2xl font-black text-brand-gray mb-10 tracking-tight">Formulario de sugerencia</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Título del recurso *</label>
                  <input type="text" className="wireframe-input py-3" placeholder="Nombre completo de la obra" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Autor(es) / Editor</label>
                  <input type="text" className="wireframe-input py-3" placeholder="Apellidos, Nombres" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">ISBN / ISSN</label>
                  <input type="text" className="wireframe-input py-3" placeholder="978-..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Formato preferido</label>
                  <select className="wireframe-input py-3">
                    <option>Digital (E-book)</option>
                    <option>Físico (Impreso)</option>
                    <option>Cualquiera</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2 mb-10">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Justificación académica o curso asociado</label>
                <textarea className="wireframe-input py-3 h-32" placeholder="Indica el curso, programa académico o línea de investigación donde se requiere..."></textarea>
              </div>
              <div className="flex justify-end pt-6 border-t border-brand-border">
                <button className="bg-black text-white hover:bg-neutral-800 font-bold px-12 py-4 rounded-lg text-sm transition-colors cursor-pointer shadow-sm">
                  Enviar sugerencia de compra
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pb-12">
           {[
             { step: '01', title: 'Solicitud', desc: 'El usuario envía el formulario con los detalles del material.' },
             { step: '02', title: 'Evaluación', desc: 'Se revisa la pertinencia, costo y disponibilidad con proveedores.' },
             { step: '03', title: 'Procesamiento', desc: 'Si se aprueba, se realiza la compra y se cataloga el recurso.' },
           ].map(s => (
             <div key={s.step} className="flex gap-4 items-center bg-white p-6 border border-brand-border rounded-xl">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-bold text-brand-gray text-sm">{s.title}</h4>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">{s.desc}</p>
                </div>
             </div>
           ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <ServiceSLA 
            title="SLA: Adquisición de Nuevos Recursos y Material Bibliográfico"
            items={[
              { compromiso: 'Evaluación de pertinencia de la sugerencia hecha por el usuario', tiempo: '3 días hábiles', canal: 'Formulario de sugerencia en línea' },
              { compromiso: 'Adquisición y activación de recursos y libros electrónicos (E-books)', tiempo: '5 a 10 días hábiles', canal: 'Catálogo de recursos / Alerta de Correo' },
              { compromiso: 'Compra, catalogación física y habilitación de material impreso nacional o importado', tiempo: '30 a 60 días calendario', canal: 'Alerta de disponibilidad física' }
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export function CheckBit() {
  return (
    <div>
      <PageHeader 
        title="Check BIT" 
        description="Servicio de revisión de similitud de textos para apoyar la integridad académica y el correcto uso de citas."
        breadcrumbs={[{ label: 'Apoyo académico', path: '/apoyo-academico-e-investigacion' }, { label: 'Check BIT' }]}
      />
      
      <section className="wireframe-section">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-brand-border p-12 mb-12">
            <h2 className="text-2xl font-black text-brand-gray mb-6 tracking-tight">¿En qué consiste el servicio?</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Utilizamos herramientas especializadas para identificar coincidencias entre tu documento y millones de fuentes académicas y web, ayudándote a verificar que todas las referencias estén correctamente citadas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-light text-brand-blue flex items-center justify-center rounded-sm shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Integridad</h4>
                  <p className="text-xs text-gray-400">Promueve la honestidad académica en la producción de textos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-light text-brand-blue flex items-center justify-center rounded-sm shrink-0">
                  <FileSearch className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Verificación</h4>
                  <p className="text-xs text-gray-400">Identifica posibles omisiones en la citación de fuentes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-blue p-12 text-white rounded-sm text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">¿Cómo solicitar la revisión?</h3>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Envía tu documento al correo institucional del servicio y recibe el informe de similitud en un plazo de 24 a 48 horas.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-sm">
                <Mail className="w-5 h-5 text-brand-yellow" />
                <span className="font-bold">checkbit@icesi.edu.co</span>
              </div>
              <button className="bg-brand-yellow text-brand-gray px-8 py-3 font-bold hover:opacity-90 transition-all">
                Ver guía de envío
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ServiceSLA 
            title="SLA: Análisis de Coherencia e Integridad Académica (Check BIT)"
            items={[
              { compromiso: 'Emisión de informe detallado de similitud de textos', tiempo: '24 a 48 horas hábiles', canal: 'checkbit@icesi.edu.co' },
              { compromiso: 'Agendamiento para asesoría interpretativa de coincidencias', tiempo: '24 horas de antelación', canal: 'Oficina de Referencia / Teams' },
              { compromiso: 'Formatos admitidos para el procesamiento de archivos', tiempo: 'Inmediato (PDF, DOCX, TXT)', canal: 'Canal de recepción del correo' }
            ]}
          />
        </div>
      </section>
    </div>
  );
}
