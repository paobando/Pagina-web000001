import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState, FormEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const frequentSearches = [
  'bases de datos medicina',
  'repositorio institucional',
  'reserva de salas',
  'préstamo de libros',
  'scopus',
  'jstor'
];

import { SITE_CONTENT } from '../constants/searchableContent';

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const quickResults = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return SITE_CONTENT.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      navigate(`/buscar-todo?q=${encodeURIComponent(query)}`);
      onClose();
    }
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleFrequentSearch = (search: string) => {
    setQuery(search);
    navigate(`/buscar-todo?q=${encodeURIComponent(search)}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-gray/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest">Búsqueda de Secciones</h2>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <form onSubmit={handleSearch} className="relative mb-8">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-blue" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Secciones, servicios o recursos..."
                  className="w-full bg-transparent border-b-2 border-gray-100 py-4 pl-10 pr-4 text-2xl font-medium focus:outline-none focus:border-brand-blue transition-colors placeholder:text-gray-300"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </form>

              {/* Quick Results */}
              <AnimatePresence mode="wait">
                {quickResults.length > 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8 space-y-2"
                  >
                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Sugerencias rápidas</h3>
                    {quickResults.map(item => (
                      <button
                        key={item.id}
                        onClick={() => handleResultClick(item.path)}
                        className="w-full flex items-center justify-between p-4 bg-brand-light border border-transparent hover:border-brand-blue group transition-all text-left"
                      >
                        <div>
                          <span className="block text-xs font-black text-brand-blue uppercase tracking-widest mb-1">{item.type}</span>
                          <span className="block text-base font-bold text-brand-gray group-hover:text-brand-blue transition-colors">{item.title}</span>
                          <span className="block text-[10px] text-gray-400 font-medium line-clamp-1">{item.description}</span>
                        </div>
                        <Search className="w-4 h-4 text-gray-300 group-hover:text-brand-blue" />
                      </button>
                    ))}
                    <button 
                      onClick={handleSearch}
                      className="w-full py-3 text-xs font-black uppercase tracking-widest text-brand-blue hover:bg-brand-blue/5 transition-colors"
                    >
                      Ver todos los resultados para "{query}"
                    </button>
                  </motion.div>
                ) : query.trim().length > 1 ? (
                   <div className="mb-8 p-4 bg-brand-light border border-dashed border-gray-200 text-center">
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">No hay sugerencias rápidas</p>
                   </div>
                ) : null}
              </AnimatePresence>

              <div>
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Prueba buscando</h3>
                <div className="flex flex-wrap gap-2">
                  {frequentSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => handleFrequentSearch(search)}
                      className="px-5 py-2 border border-gray-100 rounded-sm text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-light transition-all"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
