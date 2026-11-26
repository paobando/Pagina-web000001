import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ELEMENTOS, elementoDeRuta, type Elemento } from '../constants/territorio';
import { ChevronRight, ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface WireframeCardProps {
  title: string;
  description: string;
  path: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'outline' | 'compact';
  index?: number;
  externalUrl?: string;
}

export const WireframeCard: React.FC<WireframeCardProps> = ({ 
  title, 
  description, 
  path, 
  icon, 
  variant = 'default', 
  index = 0,
  externalUrl
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`wireframe-card flex flex-col h-full group relative overflow-hidden ${variant === 'compact' ? 'p-4' : 'p-6 md:p-8'}`}
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-brand-blue group-hover:h-full transition-all duration-300" />
      
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="w-12 h-12 bg-brand-light flex items-center justify-center text-brand-blue rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
          {icon || <ChevronRight className="w-6 h-6" />}
        </div>
        <motion.div 
          whileHover={{ x: 3 }}
          className="p-2 rounded-full hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-blue transition-colors" />
        </motion.div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-brand-gray group-hover:text-brand-blue transition-colors relative z-10">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow relative z-10">{description}</p>
      
      {externalUrl ? (
        <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 relative z-10 w-full border-t border-brand-border/40">
          <Link 
            to={path} 
            className="flex-1 text-center py-2 px-2 border border-brand-border hover:border-brand-blue text-brand-gray hover:text-brand-blue font-bold text-[10px] uppercase tracking-wider rounded-sm transition-all inline-flex items-center justify-center gap-1 cursor-pointer bg-brand-light/40 hover:bg-brand-blue/5"
          >
            <span>Ver detalles</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <a 
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 text-center py-2 px-2 bg-brand-blue border border-brand-blue text-white font-bold text-[10px] uppercase tracking-wider rounded-sm transition-all inline-flex items-center justify-center gap-1 cursor-pointer hover:bg-brand-blue/90 hover:border-brand-blue/90 shadow-2xs"
          >
            <span>Ir al servicio</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      ) : (
        <Link 
          to={path} 
          className="text-brand-blue font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all relative z-10 mt-auto"
        >
          <span>Ver más</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </motion.div>
  );
};

export function Breadcrumbs({ items }: { items: { label: string; path?: string }[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm text-brand-muted mb-6">
      <Link to="/inicio" className="hover:text-brand-blue transition-colors">Inicio</Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          {item.path ? (
            <Link to={item.path} className="hover:text-brand-blue transition-colors">{item.label}</Link>
          ) : (
            <span className="text-brand-gray" aria-current="page">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

/**
 * Cabecera de las páginas internas. Hereda, de forma discreta, el elemento del piso con el que se
 * relaciona la sección (ver src/constants/territorio.ts): una etiqueta con su símbolo, una línea fina
 * de color y el animal del elemento como marca de agua.
 */
export function PageHeader({ title, description, breadcrumbs, element }: { title: string; description: string; breadcrumbs: { label: string; path?: string }[]; element?: Elemento }) {
  const { pathname } = useLocation();
  const el = ELEMENTOS[element ?? elementoDeRuta(pathname)];
  return (
    <section className="bg-brand-light border-b border-brand-border py-12 md:py-20 relative overflow-hidden">
      <span className={`absolute bottom-0 inset-x-0 h-[3px] ${el.edge}`} aria-hidden="true" />
      <img
        src={el.animal}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute right-8 lg:right-24 bottom-0 h-[80%] max-h-[260px] w-auto opacity-15 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Breadcrumbs items={breadcrumbs} />
          <p className="flex items-center gap-2 text-sm text-brand-gray mb-3">
            <img src={el.symbol} alt="" className="w-5 h-5" />
            <span className="font-bold">{el.pillar}</span>
            <span className="font-extralight">· {el.label}</span>
          </p>
          <h1 className="text-4xl md:text-[56px] font-bold text-brand-gray mb-5 leading-[1.15] max-w-4xl">
            {title}
          </h1>
          <p className="text-lg md:text-2xl font-extralight text-brand-gray max-w-2xl leading-[1.3]">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

interface SLALine {
  compromiso: string;
  tiempo: string;
  canal: string;
}

interface ServiceSLAProps {
  title?: string;
  items: SLALine[];
}

export const ServiceSLA: React.FC<ServiceSLAProps> = ({ title = "Acuerdo de Niveles de Servicio (ANS)", items }) => {
  return (
    <div className="mt-12 bg-white border border-brand-border rounded-sm overflow-hidden shadow-sm">
      <div className="bg-brand-gray/5 border-b border-brand-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <h4 className="text-xs font-black uppercase tracking-widest text-brand-gray">
            {title}
          </h4>
        </div>
        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest bg-brand-light px-2 py-1 border border-brand-border">
          Calidad Certificada
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-light/30 border-b border-brand-border">
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-400 w-1/2">Compromiso / Servicio</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-400 w-1/4">Tiempo de respuesta</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-gray-400 w-1/4">Canal o Requisito</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {items.map((item, idx) => (
              <tr key={idx} className="hover:bg-brand-light/10 transition-colors">
                <td className="p-4 text-sm font-medium text-brand-gray">
                  {item.compromiso}
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-brand-blue bg-brand-blue/5 border border-brand-blue/10">
                    <Clock className="w-3 h-3 shrink-0" />
                    {item.tiempo}
                  </span>
                </td>
                <td className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {item.canal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-brand-light/50 p-4 border-t border-brand-border flex items-center justify-between text-[10px] text-gray-400 font-medium">
        <span>* El cumplimiento de los tiempos está supeditado a solicitudes enviadas en jornada laboral ordinaria.</span>
        <span className="font-bold text-brand-blue">Biblioteca Universidad Icesi</span>
      </div>
    </div>
  );
};
