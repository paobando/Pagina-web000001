import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, BookOpen, X, MapPin, CheckCircle, HelpCircle, Bookmark, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookCopy {
  barcode: string;
  type: string;
  status: 'Disponible' | 'En Préstamo';
  returnDate?: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  categoryLabel: string;
  year: string;
  rating: number;
  accentColor: string;
  synopsis: string;
  pages: number;
  isbn: string;
  location: string;
  callNumber: string;
  available: boolean;
  copies: string;
  copiesList?: BookCopy[];
}

const BOOKS_DATA: Book[] = [
  {
    id: 1,
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    category: 'literatura',
    categoryLabel: 'Ficción & Ensayo',
    year: '1967',
    rating: 4.9,
    accentColor: '#5454E9', // brand-blue
    synopsis: 'La obra maestra del realismo mágico, que relata la historia de siete generaciones de la familia Buendía en el pueblo ficticio de Macondo.',
    pages: 496,
    isbn: '978-0307351944',
    location: 'Piso 2 - Colección General',
    callNumber: 'COL-863.6 G216c',
    available: true,
    copies: '4 de 5 Copias disponibles',
    copiesList: [
      { barcode: 'BAR-1001', type: 'Colección General', status: 'Disponible' },
      { barcode: 'BAR-1002', type: 'Colección General', status: 'En Préstamo', returnDate: '03-Aug-2026' },
      { barcode: 'BAR-1003', type: 'Colección General', status: 'Disponible' },
      { barcode: 'BAR-1004', type: 'Colección General', status: 'Disponible' },
      { barcode: 'BAR-1005', type: 'Colección General', status: 'Disponible' }
    ]
  },
  {
    id: 2,
    title: 'Inteligencia Artificial y Sociedad',
    author: 'Elena Rostova',
    category: 'tecnologia',
    categoryLabel: 'Ciencia & Tecno',
    year: '2025',
    rating: 4.8,
    accentColor: '#10B981', // emerald
    synopsis: 'Un examen riguroso de la transformación digital de nuestra cultura, explorando la ética, el procesamiento natural de datos y su impacto humano.',
    pages: 324,
    isbn: '978-8419234856',
    location: 'Piso 3 - Sala de Ciencias Exactas',
    callNumber: 'TEC-006.3 R839i',
    available: true,
    copies: '2 de 2 Copias disponibles',
    copiesList: [
      { barcode: 'BAR-2001', type: 'Reserva', status: 'Disponible' },
      { barcode: 'BAR-2002', type: 'Colección General', status: 'Disponible' }
    ]
  },
  {
    id: 3,
    title: 'Diseño para un Mundo Sostenible',
    author: 'Carlos Alberto Sierra',
    category: 'diseno',
    categoryLabel: 'Diseño & Arte',
    year: '2024',
    rating: 4.7,
    accentColor: '#F59E0B', // amber
    synopsis: 'Estrategias y principios prácticos para diseñadores de productos y arquitectos que buscan minimizar el impacto ecológico y maximizar la economía circular.',
    pages: 280,
    isbn: '978-3836584612',
    location: 'Piso 2 - Estantería Especializada',
    callNumber: 'DIS-745.2 S572d',
    available: false,
    copies: 'Prestando (Retorno esperado el 28 de Mayo)',
    copiesList: [
      { barcode: 'BAR-3001', type: 'Colección General', status: 'En Préstamo', returnDate: '28-May-2026' }
    ]
  },
  {
    id: 4,
    title: 'El Algoritmo de la Creatividad',
    author: 'Marcus Du Sautoy',
    category: 'tecnologia',
    categoryLabel: 'Ciencia & Tecno',
    year: '2023',
    rating: 4.6,
    accentColor: '#8B5CF6', // violet
    synopsis: 'El célebre matemático de Oxford explora lo que sucede cuando las máquinas se adentran en territorios considerados únicamente humanos: pintar, componer y escribir.',
    pages: 384,
    isbn: '978-8417863111',
    location: 'Piso 3 - Reserva Científica',
    callNumber: 'TEC-510.9 D812a',
    available: true,
    copies: '3 de 3 Copias disponibles',
    copiesList: [
      { barcode: 'BAR-4001', type: 'Colección General', status: 'Disponible' },
      { barcode: 'BAR-4002', type: 'Colección General', status: 'Disponible' },
      { barcode: 'BAR-4003', type: 'Colección General', status: 'Disponible' }
    ]
  },
  {
    id: 5,
    title: 'Economía Circular en América Latina',
    author: 'Mariana Mazzucato, Ana Gómez',
    category: 'economia',
    categoryLabel: 'Economía & Negocios',
    year: '2025',
    rating: 4.9,
    accentColor: '#EC4899', // pink
    synopsis: 'Una propuesta detallada para repensar las cadenas de suministro y el desarrollo industrial en el continente para lograr soberanía productiva y ecológica.',
    pages: 412,
    isbn: '978-6073199852',
    location: 'Piso 2 - Ciencias Económicas',
    callNumber: 'ECO-338.92 M467e',
    available: true,
    copies: '1 de 3 Copias disponibles',
    copiesList: [
      { barcode: 'BAR-5001', type: 'Colección General', status: 'En Préstamo', returnDate: '14-Jul-2026' },
      { barcode: 'BAR-5002', type: 'Colección General', status: 'Disponible' },
      { barcode: 'BAR-5003', type: 'Reserva', status: 'En Préstamo', returnDate: '03-Aug-2026' }
    ]
  },
  {
    id: 6,
    title: 'La invención de la naturaleza',
    author: 'Andrea Wulf',
    category: 'literatura',
    categoryLabel: 'Ficción & Ensayo',
    year: '2022',
    rating: 4.8,
    accentColor: '#3B82F6', // blue
    synopsis: 'La asombrosa historia de Alexander von Humboldt, el naturalista que propuso una visión global del planeta como ecosistema interconectado mucho antes de que se acuñara la palabra.',
    pages: 576,
    isbn: '978-8416290840',
    location: 'Piso 2 - Colección General',
    callNumber: 'COL-508.09 W961i',
    available: true,
    copies: '3 de 4 Copias disponibles',
    copiesList: [
      { barcode: 'BAR-6001', type: 'Colección General', status: 'Disponible' },
      { barcode: 'BAR-6002', type: 'Colección General', status: 'Disponible' },
      { barcode: 'BAR-6003', type: 'Colección General', status: 'En Préstamo', returnDate: '18-Jul-2026' },
      { barcode: 'BAR-6004', type: 'Colección General', status: 'Disponible' }
    ]
  }
];

const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'mas-consultados', label: 'Más consultados' },
  { id: 'literatura', label: 'Ficción & Ensayo' },
  { id: 'tecnologia', label: 'Ciencia & Tecno' },
  { id: 'diseno', label: 'Diseño & Arte' },
  { id: 'economia', label: 'Economía & Negocios' }
];

export default function BookSlider({ eyebrow }: { eyebrow?: React.ReactNode } = {}) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const filteredBooks = BOOKS_DATA.filter(book => {
    if (selectedCategory === 'todos') return true;
    if (selectedCategory === 'mas-consultados') return book.rating >= 4.8;
    return book.category === selectedCategory;
  });

  // Tracks horizontal scroll progress for the progress indicator
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const totalScrollable = scrollWidth - clientWidth;
    if (totalScrollable <= 0) {
      setScrollProgress(0);
      return;
    }
    setScrollProgress((scrollLeft / totalScrollable) * 100);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const { clientWidth } = sliderRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    // Reset indicators when filtering
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
      setScrollProgress(0);
    }
  }, [selectedCategory]);

  return (
    <section className="py-14 bg-white relative overflow-hidden border-t border-brand-border">
      {/* Decorative shelf alignment */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            {eyebrow ?? <p className="eyebrow text-brand-gray">Colección destacada</p>}
            <h2 className="section-title mb-3">
              Novedades <span className="text-brand-blue">bibliográficas</span>
            </h2>
            <p className="text-brand-gray/80 text-base leading-[1.3] max-w-2xl">
              Descubre las adquisiciones más recientes, títulos recomendados y obras más solicitadas por la comunidad.
            </p>
          </div>

          {/* Navigation Handles */}
          <div className="flex gap-3 justify-end items-center">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-brand-border hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all bg-white"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-brand-border hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all bg-white"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters Grid */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs border transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-black border-black text-white'
                  : 'bg-white border-brand-border text-brand-gray/70 hover:text-brand-blue hover:border-brand-blue'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Slider Containment */}
        <div className="relative group/track">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 cursor-grab active:cursor-grabbing no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredBooks.map((book, idx) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="snap-start shrink-0 w-[280px] md:w-[320px] select-none"
                >
                  <div 
                    onClick={() => setSelectedBook(book)}
                    className="flex flex-col group/book cursor-pointer text-left h-full"
                  >
                    {/* Visual 3D Book Cover Simulator */}
                    <div className="aspect-[3/4] rounded-2xl relative mb-6 overflow-hidden transition-all duration-500 transform group-hover/book:-translate-y-4 group-hover/book:rotate-[-2deg] group-hover/book:shadow-[0_24px_45px_0_rgba(0,0,0,0.12)] bg-brand-light border border-brand-border flex flex-col justify-between p-7 shadow-md">
                      
                      {/* Paper Thickness/Edge Simulation (Modern Wireframe Detail) */}
                      <div className="absolute right-0 top-0 w-3 h-full bg-slate-100 opacity-60 border-l border-brand-border/40 origin-right transform tracking-normal skew-y-3 z-10" />
                      <div className="absolute left-0 top-0 w-2 h-full bg-black/10 rounded-l-2xl z-20 pointer-events-none" />

                      {/* Spine shading accent */}
                      <div className="absolute left-2.5 top-0 w-[1px] h-full bg-white/20 z-10" />

                      {/* Dynamic accent sidebar bar */}
                      <div 
                        className="absolute top-0 left-0 w-[6px] h-full"
                        style={{ backgroundColor: book.accentColor }}
                      />

                      {/* Top Row: Year and Star */}
                      <div className="flex justify-between items-center relative z-10">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">
                          {book.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-brand-blue fill-brand-blue" />
                          <span className="text-[10px] font-black text-brand-gray">{book.rating}</span>
                        </div>
                      </div>

                      {/* Cover Core Content */}
                      <div className="my-auto relative z-10 pt-4">
                        <span className="text-[9px] font-black uppercase text-brand-blue tracking-widest mb-1.5 block">
                          EDICIÓN {book.year}
                        </span>
                        <h4 className="text-xl md:text-2xl font-black text-brand-gray leading-tight tracking-tight line-clamp-3 group-hover/book:text-brand-blue transition-colors">
                          {book.title}
                        </h4>
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mt-3 whitespace-nowrap overflow-hidden text-ellipsis">
                          {book.author}
                        </p>
                      </div>

                      {/* Bottom Details panel */}
                      <div className="flex items-center justify-between border-t border-brand-border/50 pt-4 mt-2 relative z-10">
                        <span className="text-[9px] font-bold text-gray-400">
                          {book.pages} Páginas
                        </span>
                        <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-1 rounded-xs border ${
                          book.available 
                            ? 'bg-green-50 border-green-200 text-green-700' 
                            : 'bg-amber-50 border-amber-200 text-amber-700'
                        }`}>
                          {book.available ? 'Disponible' : 'En Préstamo'}
                        </span>
                      </div>
                    </div>

                    {/* Meta labels outside cover: floor and call number (piso y signatura) */}
                    <div className="px-1 mt-1">
                      <h5 className="text-base font-bold text-brand-gray mb-1.5 line-clamp-1 group-hover/book:text-brand-blue transition-colors">
                        {book.title}
                      </h5>
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md mb-2">
                        <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                        <span className="font-bold text-gray-900">{book.location.split(' - ')[0]}</span>
                        <span className="text-gray-300">·</span>
                        <span className="font-mono text-[10px] text-gray-600 font-bold tracking-tight">{book.callNumber}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-gray-400 font-medium truncate max-w-[170px]">{book.author}</span>
                        <span className={`font-black uppercase tracking-wider flex items-center gap-1 ${book.available ? 'text-green-600' : 'text-amber-600'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${book.available ? 'bg-green-500' : 'bg-amber-500'}`} />
                          {book.available ? 'Disponible' : 'Prestado'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Smooth shadow fade on margins */}
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none opacity-0 group-hover/track:opacity-100 transition-opacity" />
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none opacity-0 group-hover/track:opacity-100 transition-opacity" />
        </div>

        {/* Slidable Progress Scrollbar Indicator bar */}
        <div className="max-w-md mx-auto h-[3px] bg-slate-100 rounded-full mt-4 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-brand-blue"
            animate={{ width: `${scrollProgress}%` }}
            transition={{ type: 'tween', ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Slide-out Sidebar Inspector Panel Drawer (AnimatePresence details modal) */}
      <AnimatePresence>
        {selectedBook && (
          <>
            {/* Backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="fixed inset-0 bg-black z-50 cursor-zoom-out"
            />

            {/* Cabinet body */}
            <motion.div
              initial={{ x: '100%', filter: 'blur(5px)' }}
              animate={{ x: 0, filter: 'blur(0px)' }}
              exit={{ x: '100%', filter: 'blur(5px)' }}
              transition={{ type: 'spring', damping: 24, stiffness: 180 }}
              className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl z-50 overflow-y-auto flex flex-col border-l border-brand-border"
            >
              {/* Cover visual header */}
              <div className="p-8 md:p-10 border-b border-brand-border relative flex flex-col justify-between" style={{ borderTop: `8px solid ${selectedBook.accentColor}` }}>
                {/* Dismiss control */}
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-2 bg-brand-light/70 px-4 py-1.5 border border-brand-border rounded-full">
                    <BookOpen className="w-3.5 h-3.5 text-brand-blue" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#333]">Consulta Biblioteca</span>
                  </div>
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="w-10 h-10 border border-brand-border hover:border-brand-gray rounded-full flex items-center justify-center transition-all bg-white text-brand-gray"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex gap-6 items-start">
                  {/* Book structural blueprint cover (mini) */}
                  <div className="w-28 md:w-32 aspect-[3/4] bg-brand-light border border-brand-border shadow-md rounded-lg p-4 shrink-0 relative flex flex-col justify-between overflow-hidden">
                    <div className="absolute left-0 top-0 w-[4px] h-full" style={{ backgroundColor: selectedBook.accentColor }} />
                    <span className="text-[8px] font-black uppercase text-gray-400">{selectedBook.year}</span>
                    <h5 className="text-xs font-black text-brand-gray leading-tight line-clamp-3">{selectedBook.title}</h5>
                    <span className="text-[8px] font-bold text-brand-blue uppercase overflow-hidden text-ellipsis whitespace-nowrap">{selectedBook.author.split(',')[0]}</span>
                  </div>

                   {/* Core detail summary */}
                  <div className="flex-grow">
                    <span className="text-[10px] font-black uppercase text-brand-blue tracking-[0.22em] mb-1.5 block">
                      {selectedBook.categoryLabel}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-brand-gray leading-tight tracking-tight mb-2">
                      {selectedBook.title}
                    </h3>
                    <p className="text-brand-gray font-bold text-sm">
                      Por <span className="underline decoration-brand-blue/30">{selectedBook.author}</span>
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 mb-3">
                      <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
                      <span className="text-xs font-black text-brand-gray">{selectedBook.rating}</span>
                      <span className="text-xs text-gray-400">| de la crítica Icesi</span>
                    </div>

                    {/* Integrated Quick Badges: Availability Status and Physical Location */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-sm border ${
                        selectedBook.available 
                          ? 'bg-green-50 border-green-200 text-green-700' 
                          : 'bg-amber-50 border-amber-200 text-amber-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${selectedBook.available ? 'bg-green-500' : 'bg-amber-500'}`} />
                        {selectedBook.available ? 'Disponible' : 'En Préstamo'}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-sm border bg-slate-50 border-slate-200 text-slate-600">
                        <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                        {selectedBook.location.split(' - ')[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Information Stack */}
              <div className="p-8 md:p-10 flex-grow space-y-8">
                {/* Synopsis box */}
                <div>
                  <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-3">Sinopsis del Libro</h4>
                  <p className="text-gray-500 text-sm leading-relaxed p-5 bg-brand-light border border-brand-border rounded-xl">
                    {selectedBook.synopsis}
                  </p>
                </div>

                {/* Library location and status system - Beautiful Single Panel */}
                <div className="border border-brand-border rounded-xl overflow-hidden bg-white shadow-xs">
                  <div className="bg-brand-light border-b border-brand-border p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-blue" />
                      <span className="text-xs font-black text-brand-gray uppercase tracking-wider">Localización en Biblioteca</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-white border border-brand-border px-2.5 py-1 text-brand-gray rounded-sm shadow-2xs">
                      Código: {selectedBook.callNumber}
                    </span>
                  </div>
                  
                  <div className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h5 className="text-[10px] font-black uppercase text-gray-400 tracking-wider mb-1">Ubicación de Colección</h5>
                      <p className="text-sm font-black text-brand-gray">{selectedBook.location}</p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                        selectedBook.available 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${selectedBook.available ? 'bg-green-500' : 'bg-amber-500'}`} />
                        {selectedBook.copies.split(' Copias')[0]} Disponibles
                      </span>
                    </div>
                  </div>
                </div>

                {/* Detailed Copies / Ejemplares Table */}
                {selectedBook.copiesList && selectedBook.copiesList.length > 0 && (
                  <div className="pt-4 border-t border-brand-border">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest">Ejemplares Físicos</h4>
                      <span className="text-[9px] font-black uppercase tracking-wider text-brand-blue bg-brand-blue/5 border border-brand-blue/20 px-2.5 py-1 rounded-sm">
                        Total: {selectedBook.copiesList.length} {selectedBook.copiesList.length === 1 ? 'ejemplar' : 'ejemplares'}
                      </span>
                    </div>
                    
                    <div className="border border-brand-border overflow-hidden rounded-lg bg-white shadow-xs">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-brand-light border-b border-brand-border text-[9px] font-black uppercase tracking-widest text-gray-400">
                            <th className="py-2 px-4">Código</th>
                            <th className="py-2 px-4">Tipo de Ítem</th>
                            <th className="py-2 px-4 text-right">Estado</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-border text-xs">
                          {selectedBook.copiesList.map((copy, idx) => (
                            <tr key={idx} className="hover:bg-brand-light/30 transition-colors">
                              <td className="py-3 px-4 font-mono font-bold text-brand-gray">{copy.barcode}</td>
                              <td className="py-3 px-4 font-medium text-gray-500">
                                <span className="inline-block px-2 py-0.5 bg-gray-50 border border-gray-200 text-[10px] rounded-sm uppercase tracking-wide">
                                  {copy.type}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-right">
                                {copy.status === 'Disponible' ? (
                                  <span className="inline-flex items-center gap-1.5 text-green-600 font-bold justify-end">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Disponible
                                  </span>
                                ) : (
                                  <span className="inline-flex flex-col text-amber-600 font-bold items-end leading-none">
                                    <span className="inline-flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                      En Préstamo
                                    </span>
                                    {copy.returnDate && (
                                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-1 block">
                                        Devolución: {copy.returnDate}
                                      </span>
                                    )}
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* technical metadata */}
                <div className="pt-4 border-t border-brand-border">
                  <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-3.5">Detalles Técnicos</h4>
                  <div className="grid grid-cols-2 gap-y-3.5 text-xs text-gray-500 font-medium">
                    <div>
                      <span className="block text-gray-400 uppercase tracking-widest text-[9px]">ISBN-13</span>
                      <span className="font-bold text-brand-gray">{selectedBook.isbn}</span>
                    </div>
                    <div>
                      <span className="block text-gray-400 uppercase tracking-widest text-[9px]">Año Publicación</span>
                      <span className="font-bold text-brand-gray">{selectedBook.year}</span>
                    </div>
                    <div>
                      <span className="block text-gray-400 uppercase tracking-widest text-[9px]">Extensión</span>
                      <span className="font-bold text-brand-gray">{selectedBook.pages} páginas</span>
                    </div>
                    <div>
                      <span className="block text-gray-400 uppercase tracking-widest text-[9px]">Suscripción</span>
                      <span className="font-bold text-brand-blue">Ecosistema Físico & Digital</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions panel */}
              <div className="p-8 md:p-10 border-t border-brand-border bg-brand-light flex gap-3.5 sticky bottom-0">
                <button 
                  onClick={() => alert(`El comando de reserva para "${selectedBook.title}" ha sido enviado. Por favor inicia sesión para completar la reserva física.`)}
                  className="wireframe-button-primary rounded-full hover:scale-[1.02] transform transition-transform active:scale-[0.98] cursor-pointer flex-grow text-xs uppercase tracking-wider py-4"
                >
                  Reservar Copia
                </button>
                <button 
                  onClick={() => alert(`Enlace directo al catálogo virtual copiado para "${selectedBook.title}".`)}
                  className="w-12 h-12 border border-brand-border hover:border-brand-blue hover:text-brand-blue rounded-full flex items-center justify-center transition-all bg-white shrink-0 shadow-sm"
                  title="Compartir recurso"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => alert(`Ponte en contacto con referencia al código ${selectedBook.callNumber} para asistencia.`)}
                  className="w-12 h-12 border border-brand-border hover:border-brand-blue hover:text-brand-blue rounded-full flex items-center justify-center transition-all bg-white shrink-0 shadow-sm"
                  title="Ayuda bibliotecaria"
                >
                  <HelpCircle className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
