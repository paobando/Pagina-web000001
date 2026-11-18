import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Printer, Tag, Clock, ChevronRight } from 'lucide-react';
import { PageHeader } from '../components/UI';

export default function NoticiaDetalle() {
  const { id } = useParams();
  
  const newsData: Record<string, any> = {
    '0': {
      title: 'Nuevas bases de datos especializadas en medicina',
      category: 'Recursos',
      date: 'Mayo 02, 2026',
      excerpt: 'La Universidad Icesi, a través de su biblioteca, anuncia la adquisición de cinco nuevas plataformas digitales especializadas para fortalecer los procesos de investigación y docencia de la Facultad de Ciencias de la Salud.',
      content: [
        'Estas nuevas bases de datos incluyen acceso a revistas de alto impacto, atlas anatómicos interactivos y bases de datos de medicina basada en la evidencia. Con esta inversión, la universidad reafirma su compromiso con la excelencia académica y provee a sus estudiantes y docentes herramientas de vanguardia mundial.',
        'Recursos destacados:',
        'DynaMed: Herramienta clínica de próxima generación para la toma de decisiones rápidas en el punto de atención.',
        'LWW Health Library: Acceso a textos fundamentales de medicina, videos y casos de estudio.',
        'ClinicalKey (Ampliación): Ahora con mayor cobertura en especialidades quirúrgicas.',
        'Acland\'s Video Atlas: Atlas de anatomía humana en videos de alta definición.'
      ]
    },
    '1': {
      title: 'Exposición fotográfica: Caminos del Valle',
      category: 'Cultura',
      date: 'Abril 28, 2026',
      excerpt: 'Una mirada profunda a la geografía y arquitectura del Valle del Cauca a través del lente de nuestros estudiantes de artes y diseño.',
      content: [
        'La exposición "Caminos del Valle" reúne más de 50 piezas fotográficas que capturan la esencia de la región. Desde los paisajes cañeros hasta la arquitectura colonial de los pueblos del norte del departamento.',
        'Detalles de la muestra:',
        'Ubicación: Hall principal de la Biblioteca, Piso 1.',
        'Duración: Hasta el 30 de Mayo.',
        'Curaduría: Departamento de Artes y Diseño Icesi.',
        'Entrada libre para toda la comunidad universitaria y visitantes externos con registro previo.'
      ]
    },
    '2': {
      title: 'Horarios especiales por temporada de exámenes',
      category: 'Servicios',
      date: 'Abril 25, 2026',
      excerpt: 'Con el fin de apoyar el estudio intensivo durante el cierre de semestre, la biblioteca amplía sus horarios de atención nocturna.',
      content: [
        'Sabemos que esta es la época más exigente del año académico. Por eso, hemos decidido extender nuestra jornada para que tengas un espacio seguro y tranquilo donde estudiar.',
        'Nuevo esquema de horarios:',
        'Lunes a Viernes: 7:00 AM - 12:00 MIDNIGHT.',
        'Sábados: 8:00 AM - 8:00 PM.',
        'Domingos: 10:00 AM - 4:00 PM (Servicio solo en Piso 1 y 2).',
        'Recuerda que el servicio de café estará disponible hasta las 10:00 PM en el área de descanso.'
      ]
    }
  };

  const item = newsData[id as string] || newsData['0'];

  return (
    <div>
      <div className="bg-white border-b border-brand-border py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/noticias-y-novedades" className="text-[10px] font-black uppercase tracking-widest text-brand-blue flex items-center gap-2 mb-10 hover:-translate-x-1 transition-transform">
             <ArrowLeft className="w-4 h-4" /> Volver a noticias
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue px-2 py-0.5 bg-brand-blue/5 border border-brand-blue/10">{item.category}</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Publicado: {item.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-brand-gray tracking-tighter leading-tight mb-8">{item.title}</h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-brand-border pt-8">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-[10px] font-black text-brand-blue uppercase overflow-hidden border border-brand-border">EQUIPO</div>
               <div>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Por:</span>
                  <span className="text-sm font-black text-brand-gray">Comunicaciones Biblioteca Icesi</span>
               </div>
            </div>
            <div className="flex gap-2">
               <button className="w-10 h-10 border border-brand-border flex items-center justify-center hover:bg-brand-light transition-colors text-brand-gray" title="Compartir"><Share2 className="w-4 h-4" /></button>
               <button className="w-10 h-10 border border-brand-border flex items-center justify-center hover:bg-brand-light transition-colors text-brand-gray" title="Imprimir"><Printer className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>

      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="aspect-[21/9] bg-brand-light border border-brand-border mb-12 flex items-center justify-center text-gray-200 font-black text-3xl">
               IMAGEN PRINCIPAL NOTICIA
            </div>
            
            <div className="prose prose-brand max-w-none">
              <p className="text-xl font-medium text-brand-gray leading-relaxed mb-8">
                {item.excerpt}
              </p>
              
              <div className="space-y-6 text-gray-500 leading-relaxed">
                {item.content.map((p: string, i: number) => {
                  if (p.includes(':')) {
                    if (i === 1) return <h3 key={i} className="text-2xl font-black text-brand-gray mt-12 mb-6">{p}</h3>;
                    return <li key={i} className="list-none font-bold text-brand-gray">{p}</li>;
                  }
                  return <p key={i}>{p}</p>;
                })}
              </div>

              <div className="mt-16 p-8 bg-brand-light border border-brand-border">
                 <h4 className="font-bold text-sm mb-4">Más información</h4>
                 <p className="text-sm text-gray-500 mb-6">Si tienes dudas sobre esta noticia o quieres más detalles, no dudes en contactar al equipo de comunicaciones.</p>
                 <Link to="/contacto" className="wireframe-button-primary py-3 px-8 text-[10px]">Contactar con nosotros</Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8 pb-3 border-b border-brand-border">Otras noticias</h4>
              <div className="space-y-8">
                {[
                  { title: 'Exposición fotográfica: Caminos del Valle', date: 'Abril 28', category: 'Cultura' },
                  { title: 'Horarios especiales exámenes finales', date: 'Abril 25', category: 'Servicios' },
                  { title: 'Taller de normalización APA 7ma', date: 'Abril 20', category: 'Apoyo' }
                ].map((item, i) => (
                  <Link key={i} to="#" className="group block">
                    <span className="text-[9px] font-black uppercase tracking-widest text-brand-blue mb-2 block">{item.category}</span>
                    <h5 className="font-bold text-sm text-brand-gray group-hover:text-brand-blue transition-colors leading-tight mb-2">{item.title}</h5>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.date}, 2026</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-8 border border-brand-border flex flex-col items-center text-center">
              <Clock className="w-8 h-8 text-brand-yellow mb-4" />
              <h4 className="font-bold text-sm mb-2 uppercase tracking-widest">¿Quieres recibir estas noticias?</h4>
              <p className="text-[10px] text-gray-400 mb-6">Suscríbete a nuestro boletín mensual y no te pierdas ninguna novedad.</p>
              <button className="text-[10px] font-black uppercase tracking-widest text-brand-blue border-b border-brand-blue pb-1">Suscribirme ahora</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
