import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ArrowLeft, Share2, Printer, Bell, LayoutGrid, ChevronLeft, ChevronRight, ChevronDown, ExternalLink, Download } from 'lucide-react';
import { PageHeader } from '../components/UI';
import { Link, useParams } from 'react-router-dom';

export interface EventType {
  id: number;
  title: string;
  fullTitle: string;
  date: number;
  month: string;
  year: number;
  dayName: string;
  time: string;
  type: string;
  location: string;
  desc: string;
  bullets?: string[];
  detailsExtra?: string;
}

export const ALL_EVENTS: EventType[] = [
  {
    id: 1,
    title: 'Taller: APA 7ma',
    fullTitle: 'Taller: Citación Normas APA 7ma edición',
    date: 22,
    month: 'Mayo',
    year: 2026,
    dayName: 'Jueves',
    time: '10:00 AM - 12:00 PM',
    type: 'Formación',
    location: 'Sala de Co-creación (Edificio L)',
    desc: 'Aprende a realizar citas y referencias bibliográficas según los últimos lineamientos de la American Psychological Association.',
    bullets: [
      'Principios éticos de la investigación y prevención del plagio.',
      'Tipos de citas: directas (cortas y largas) e indirectas (parafraseo).',
      'Estructura general y orden de la lista de referencias final.',
      'Uso de gestores bibliográficos básicos (Mendeley, Zotero) para automatización.'
    ],
    detailsExtra: 'Se recomienda a los asistentes traer sus propios equipos portátiles para realizar ejercicios prácticos durante la sesión. Al finalizar se entregará una guía rápida de bolsillo con los ejemplos más comunes de citación.'
  },
  {
    id: 2,
    title: 'Club lectura',
    fullTitle: 'Club de lectura: Voces Latinoamericanas',
    date: 24,
    month: 'Mayo',
    year: 2026,
    dayName: 'Sábado',
    time: '04:00 PM - 05:30 PM',
    type: 'Cultura',
    location: 'Hall de la Biblioteca',
    desc: 'Conversatorio amigable sobre la obra "Distancia de Rescate" de Samanta Schweblin.',
    bullets: [
      'Introducción al realismo mágico contemporáneo y literatura de tensión.',
      'Análisis de la atmósfera psicológica y las voces narradoras del texto.',
      'Discusión abierta grupal sobre los temas de maternidad y advertencias ecológicas.',
      'Espacio para café, té y networking casual entre apasionados de la lectura.'
    ],
    detailsExtra: 'La lectura previa del libro es opcional pero recomendada para enriquecer la dinámica de debate. Contamos con ejemplares físicos listos para préstamo y acceso digital.'
  },
  {
    id: 3,
    title: 'Webinar: Búsqueda',
    fullTitle: 'Webinar: Estrategias de búsqueda avanzada',
    date: 28,
    month: 'Mayo',
    year: 2026,
    dayName: 'Miércoles',
    time: '02:00 PM - 03:30 PM',
    type: 'Virtual',
    location: 'En línea (Zoom)',
    desc: 'Optimiza tus búsquedas en bases de datos científicas mediante el uso de operadores booleanos y tesauros avanzados.',
    bullets: [
      'Construcción lógica de ecuaciones de búsqueda científica de alta precisión.',
      'Búsqueda avanzada en repertorios de prestigio como Scopus, WoS y IEEE.',
      'Uso eficiente de filtros avanzados por país, área temática y año de publicación.',
      'Configuración autónoma de alertas periódicas automatizadas e indexación.'
    ],
    detailsExtra: 'Este seminario se realizará de manera 100% online con moderadores en vivo. El enlace de conexión vía Zoom será compartido por correo una hora antes de dar inicio.'
  },
  {
    id: 4,
    title: 'Exposición',
    fullTitle: 'Exposición: Patrimonio del Valle',
    date: 2,
    month: 'Junio',
    year: 2026,
    dayName: 'Martes',
    time: '08:00 AM - 08:00 PM',
    type: 'Exposición',
    location: 'Piso 1 - Biblioteca',
    desc: 'Muestra fotográfica histórica de alta definición sobre la evolución arquitectónica de nuestra región.',
    bullets: [
      'Exploración detallada de la arquitectura colonial en el centro de Cali.',
      'Visuales recuperados de archivos municipales históricos del Valle del Cauca.',
      'Visita guiada por el curador de la exhibición (en horarios programados del mediodía).',
      'Acceso libre y abierto para toda la comunidad académica de la Universidad.'
    ],
    detailsExtra: 'La exhibición estará abierta para interacción colectiva durante la jornada diaria general de la biblioteca, ubicada en todo el pasillo del primer piso.'
  }
];

export function AddToCalendarButton({ event }: { event: EventType }) {
  const [isOpen, setIsOpen] = useState(false);

  const months: { [key: string]: string } = {
    'Enero': '01', 'Febrero': '02', 'Marzo': '03', 'Abril': '04', 'Mayo': '05', 'Junio': '06',
    'Julio': '07', 'Agosto': '08', 'Septiembre': '09', 'Octubre': '10', 'Noviembre': '11', 'Diciembre': '12'
  };

  const getCalendarDates = () => {
    const m = months[event.month] || '05';
    const d = String(event.date).padStart(2, '0');
    const y = String(event.year || 2026);
    
    let startHour = "10";
    let startMin = "00";
    let endHour = "12";
    let endMin = "00";
    
    try {
      const parts = event.time.split(' - ');
      const startPart = parts[0];
      const endPart = parts[1];
      
      const sParts = startPart.split(' ');
      const sTime = sParts[0];
      const sAmpm = sParts[1];
      let [sH, sM] = sTime.split(':');
      let sHNum = parseInt(sH, 10);
      if (sAmpm === 'PM' && sHNum < 12) sHNum += 12;
      if (sAmpm === 'AM' && sHNum === 12) sHNum = 0;
      startHour = String(sHNum).padStart(2, '0');
      startMin = sM;

      const eParts = endPart.split(' ');
      const eTime = eParts[0];
      const eAmpm = eParts[1];
      let [eH, eM] = eTime.split(':');
      let eHNum = parseInt(eH, 10);
      if (eAmpm === 'PM' && eHNum < 12) eHNum += 12;
      if (eAmpm === 'AM' && eHNum === 12) eHNum = 0;
      endHour = String(eHNum).padStart(2, '0');
      endMin = eM;
    } catch(e){}

    const startISO = `${y}${m}${d}T${startHour}${startMin}00`;
    const endISO = `${y}${m}${d}T${endHour}${endMin}00`;
    
    return { startISO, endISO };
  };

  const downloadICS = (e: React.MouseEvent) => {
    e.preventDefault();
    const { startISO, endISO } = getCalendarDates();
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Biblioteca Universidad Icesi//Agenda//ES',
      'BEGIN:VEVENT',
      `UID:event-${event.id}@icesi.edu.co`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${startISO}`,
      `DTEND:${endISO}`,
      `SUMMARY:${event.fullTitle || event.title}`,
      `DESCRIPTION:${event.desc.replace(/\n/g, '\\n')}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const getGoogleUrl = () => {
    const { startISO, endISO } = getCalendarDates();
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.fullTitle || event.title)}&dates=${startISO}/${endISO}&details=${encodeURIComponent(event.desc)}&location=${encodeURIComponent(event.location)}`;
  };

  const getOutlookUrl = () => {
    const { startISO, endISO } = getCalendarDates();
    return `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(event.fullTitle || event.title)}&startdt=${startISO}&enddt=${endISO}&body=${encodeURIComponent(event.desc)}&location=${encodeURIComponent(event.location)}`;
  };

  const getYahooUrl = () => {
    const { startISO, endISO } = getCalendarDates();
    return `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURIComponent(event.fullTitle || event.title)}&st=${startISO}&et=${endISO}&desc=${encodeURIComponent(event.desc)}&in_loc=${encodeURIComponent(event.location)}`;
  };

  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-brand-border bg-white text-brand-gray hover:border-brand-blue hover:text-brand-blue font-bold text-xs uppercase tracking-widest transition-all rounded-sm shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
        Agregar al calendario
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-56 bg-white border border-brand-border md:rounded-sm shadow-lg z-50 overflow-hidden divide-y divide-brand-border animate-in fade-in slide-in-from-top-2 duration-100">
            <div className="px-4 py-2 bg-brand-light/50">
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Opciones de calendario</span>
            </div>
            <div className="py-1">
              <a 
                href={getGoogleUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-xs text-brand-gray hover:bg-brand-blue/5 hover:text-brand-blue font-semibold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Google Calendar
                </span>
                <ExternalLink className="w-3 h-3 text-gray-300" />
              </a>
              <a 
                href={getOutlookUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-xs text-brand-gray hover:bg-brand-blue/5 hover:text-brand-blue font-semibold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Outlook Web
                </span>
                <ExternalLink className="w-3 h-3 text-gray-300" />
              </a>
              <a 
                href={getYahooUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-xs text-brand-gray hover:bg-brand-blue/5 hover:text-brand-blue font-semibold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Yahoo Calendar
                </span>
                <ExternalLink className="w-3 h-3 text-gray-300" />
              </a>
            </div>
            <div className="py-1">
              <button 
                type="button"
                onClick={downloadICS}
                className="w-full flex items-center justify-between px-4 py-2.5 text-xs text-brand-gray hover:bg-brand-blue/5 hover:text-brand-blue font-semibold text-left transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gray" />
                  Archivo iCal / ICS
                </span>
                <Download className="w-3 h-3 text-gray-300 hover:text-brand-blue" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Agenda() {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  
  const events = ALL_EVENTS;

  return (
    <div>
      <PageHeader 
        title="Agenda de eventos" 
        description="Mantente al día con nuestros talleres, conversatorios, exposiciones y actividades culturales."
        breadcrumbs={[{ label: 'Sobre la biblioteca', path: '/sobre-la-biblioteca' }, { label: 'Agenda' }]}
      />
      
      <section className="wireframe-section">
        {/* Tabs for View Mode */}
        <div className="flex items-center gap-1 mb-8 border-b border-brand-border pb-px">
          <button 
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'list' ? 'text-brand-gray border-b-2 border-brand-blue bg-brand-light' : 'text-gray-400 hover:text-brand-gray hover:bg-brand-light'}`}
          >
            <LayoutGrid className="w-4 h-4" />
            Viste Lista
          </button>
          <button 
            onClick={() => setViewMode('calendar')}
            className={`flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'calendar' ? 'text-brand-gray border-b-2 border-brand-blue bg-brand-light' : 'text-gray-400 hover:text-brand-gray hover:bg-brand-light'}`}
          >
            <CalendarIcon className="w-4 h-4" />
            Vista Calendario
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Filters Sidebar - Hide on Calendar scroll if needed, but keeping for now */}
          <div className="lg:col-span-1 space-y-8">
             <div className="p-8 border border-brand-border bg-brand-light">
               <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 font-sans">Filtrar eventos</h3>
               <div className="space-y-3">
                 {['Todos', 'Formación', 'Cultura', 'Virtual', 'Exposición'].map(f => (
                   <label key={f} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 border border-brand-border group-hover:border-brand-blue transition-colors"></div>
                     <span className="text-xs font-bold text-brand-gray group-hover:text-brand-blue">{f}</span>
                   </label>
                 ))}
               </div>
             </div>

             <div className="p-8 border border-brand-border text-center">
               <Bell className="w-8 h-8 text-brand-blue mx-auto mb-4" />
               <h4 className="text-sm font-bold mb-2">Notificaciones</h4>
               <p className="text-[10px] text-gray-400 mb-6">Recibe alertas sobre nuevos eventos y cambios en la programación en tu correo.</p>
               <button className="wireframe-button-secondary py-2 text-[10px] w-full">Suscribirme a la agenda</button>
             </div>
          </div>

          <div className="lg:col-span-3">
            {viewMode === 'list' ? (
              <div className="space-y-8">
                {events.map((event) => (
                  <div key={event.id} className="group border border-brand-border hover:border-brand-blue transition-all bg-white flex flex-col md:flex-row overflow-hidden">
                    <div className="w-full md:w-32 bg-brand-gray text-white flex flex-col items-center justify-center p-6 shrink-0 group-hover:bg-brand-blue transition-colors">
                      <span className="text-4xl font-black leading-none mb-1">{event.date}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{event.month}</span>
                    </div>
                    <div className="p-8 flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue px-2 py-0.5 bg-brand-blue/5 border border-brand-blue/10">{event.type}</span>
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">{event.time}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-brand-gray mb-4 tracking-tight group-hover:text-brand-blue transition-colors leading-tight">{event.fullTitle}</h3>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-2">{event.desc}</p>
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-brand-border">
                         <span className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest"><MapPin className="w-3 h-3 text-brand-yellow" /> {event.location}</span>
                         <Link to={`/agenda/evento/${event.id}`} className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-brand-gray border-b-2 border-brand-yellow pb-1">Ver detalles</Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center pt-12">
                  <button className="wireframe-button-secondary py-3 px-12 text-xs">Cargar más eventos</button>
                </div>
              </div>
            ) : (
              <CalendarView events={events} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function CalendarView({ events }: { events: any[] }) {
  // Simple Calendar for May 2026
  // May 1st 2026 is Fri (5)
  const daysInMonth = 31;
  const startDay = 5; // Fri
  const prevMonthDays = 30; // April
  
  const calendarDays = [];
  
  // Prev month padding
  for (let i = startDay - 1; i >= 0; i--) {
    calendarDays.push({ day: prevMonthDays - i, currentMonth: false });
  }
  
  // Current month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({ day: i, currentMonth: true });
  }
  
  // Next month padding to fill 6 weeks (42 cells)
  const remainingCells = 42 - calendarDays.length;
  for (let i = 1; i <= remainingCells; i++) {
    calendarDays.push({ day: i, currentMonth: false });
  }

  const weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  return (
    <div className="bg-white border border-brand-border overflow-hidden flex flex-col h-[700px]">
      {/* Calendar Header */}
      <div className="p-4 border-b border-brand-border flex items-center justify-between bg-brand-light">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-black text-brand-gray tracking-tight">Mayo 2026</h3>
          <div className="flex border border-brand-border bg-white">
            <button className="p-1 hover:bg-brand-light transition-colors border-r border-brand-border"><ChevronLeft className="w-4 h-4" /></button>
            <button className="p-1 hover:bg-brand-light transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
          <button className="text-[10px] font-black uppercase tracking-widest border border-brand-border px-3 py-1 bg-white hover:bg-brand-light transition-colors">Hoy</button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 border-b border-brand-border">
        {weekdays.map(day => (
          <div key={day} className="py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center bg-brand-light/50 border-r border-brand-border last:border-r-0">
            {day}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="flex-grow grid grid-cols-7 grid-rows-6">
        {calendarDays.map((date, i) => {
          const dayEvents = events.filter(e => e.date === date.day && e.month === 'Mayo' && date.currentMonth);
          const isToday = date.day === 13 && date.currentMonth; // Mock today as May 13

          return (
            <div 
              key={i} 
              className={`border-r border-b border-brand-border last:border-r-0 p-2 min-h-[100px] transition-colors relative group ${!date.currentMonth ? 'bg-gray-50' : 'bg-white hover:bg-brand-light/20'}`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`text-xs font-bold leading-none ${!date.currentMonth ? 'text-gray-300' : 'text-brand-gray'} ${isToday ? 'bg-brand-blue text-white w-6 h-6 flex items-center justify-center rounded-full -mt-1 -ml-1' : ''}`}>
                  {date.day}
                </span>
                {date.day === 1 && !date.currentMonth && i > 20 && (
                   <span className="text-[8px] font-black uppercase text-gray-300">Jun</span>
                )}
                {date.day === 1 && date.currentMonth && (
                   <span className="text-[8px] font-black uppercase text-brand-gray">May</span>
                )}
              </div>
              
              <div className="space-y-1">
                {dayEvents.map(event => (
                  <Link 
                    key={event.id}
                    to={`/agenda/evento/${event.id}`}
                    className="block p-1 text-[9px] font-bold bg-brand-blue/10 border-l-2 border-brand-blue text-brand-blue truncate hover:bg-brand-blue hover:text-white transition-colors"
                    title={event.fullTitle}
                  >
                    {event.title}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function EventoDetalle() {
  const { id } = useParams();
  const event = ALL_EVENTS.find(e => e.id === Number(id)) || ALL_EVENTS[0];
  
  return (
    <div>
      <div className="bg-brand-light py-12 border-b border-brand-border">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Link to="/agenda" className="text-[10px] font-black uppercase tracking-widest text-brand-blue flex items-center gap-2 mb-8 hover:-translate-x-1 transition-transform">
               <ArrowLeft className="w-4 h-4" /> Volver a la agenda
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
               <div className="lg:col-span-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue px-2 py-0.5 bg-brand-blue/5 border border-brand-blue/10 mb-6 inline-block">{event.type}</span>
                  <h1 className="text-4xl md:text-6xl font-black text-brand-gray tracking-tighter leading-tight mb-0">{event.fullTitle}</h1>
               </div>
               <div className="lg:col-span-4 flex flex-wrap items-center lg:justify-end gap-3 pb-2">
                  <AddToCalendarButton event={event} />
                  <button className="w-10 h-10 border border-brand-border flex items-center justify-center hover:bg-white transition-colors" title="Compartir"><Share2 className="w-4 h-4 text-brand-gray" /></button>
                  <button className="w-10 h-10 border border-brand-border flex items-center justify-center hover:bg-white transition-colors" title="Imprimir"><Printer className="w-4 h-4 text-brand-gray" /></button>
               </div>
            </div>
         </div>
      </div>

      <section className="wireframe-section">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
               <div className="aspect-video bg-brand-light border border-brand-border mb-12 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-gray/5 group-hover:scale-105 transition-transform duration-700" />
                  <CalendarIcon className="w-16 h-16 text-brand-blue/20 mb-4 relative z-10" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-2 relative z-10">{event.type}</span>
                  <h2 className="text-2xl font-black text-brand-gray tracking-tight relative z-10 max-w-lg mb-1">{event.fullTitle}</h2>
                  <span className="text-xs font-semibold text-gray-400 relative z-10">{event.dayName}, {event.date} de {event.month} de {event.year}</span>
               </div>
               
               <div className="prose prose-brand max-w-none">
                  <h3 className="text-2xl font-black mb-6">Descripción del evento</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                     {event.desc}
                  </p>
                  
                  {event.bullets && event.bullets.length > 0 && (
                     <>
                        <h4 className="text-xl font-bold mb-4">Temario / Aspectos Clave:</h4>
                        <ul className="space-y-3 text-gray-500 list-disc pl-6 mb-8">
                           {event.bullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                           ))}
                        </ul>
                     </>
                  )}

                  {event.detailsExtra && (
                     <p className="text-gray-500 leading-relaxed">
                        {event.detailsExtra}
                     </p>
                  )}
               </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
               <div className="bg-brand-gray text-white p-10 rounded-sm">
                  <h3 className="text-xl font-bold mb-8 underline decoration-brand-yellow decoration-4 underline-offset-8">Cuándo y Dónde</h3>
                  <div className="space-y-8">
                     <div className="flex gap-4">
                        <CalendarIcon className="text-brand-yellow w-6 h-6 shrink-0" />
                        <div>
                           <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-brand-yellow">Fecha</h4>
                           <p className="text-sm font-medium">{event.dayName}, {event.date} de {event.month} de {event.year}</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <Clock className="text-brand-yellow w-6 h-6 shrink-0" />
                        <div>
                           <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-brand-yellow">Horario</h4>
                           <p className="text-sm font-medium">{event.time}</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <MapPin className="text-brand-yellow w-6 h-6 shrink-0" />
                        <div>
                           <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-brand-yellow">Lugar</h4>
                           <p className="text-sm font-medium">{event.location}</p>
                        </div>
                     </div>
                  </div>
                  <button className="wireframe-button-primary w-full mt-12 py-4 bg-brand-yellow text-brand-gray hover:bg-white hover:text-brand-gray transition-colors border-none text-[10px] font-black uppercase tracking-[0.2em] relative z-20">
                     Registrarme al taller
                  </button>
               </div>

               <div className="p-8 border border-brand-border bg-brand-light">
                  <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-gray-400">Dirigido a:</h4>
                  <div className="flex flex-wrap gap-2">
                     {['Estudiantes', 'Profesores', 'Graduados'].map(p => (
                        <span key={p} className="px-3 py-1 bg-white border border-brand-border text-[10px] font-bold text-brand-gray uppercase tracking-widest">{p}</span>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
