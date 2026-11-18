import { Info, Newspaper, HelpCircle, Mail, Phone, Globe, ArrowRight, ChevronDown, Send, Calendar } from 'lucide-react';
import { PageHeader, WireframeCard } from '../components/UI';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SobreBiblioteca() {
  const links = [
    { title: 'Quiénes somos', description: 'Conoce nuestro equipo, misión y visión institucional.', path: '/quienes-somos', icon: <Info /> },
    { title: 'Noticias y novedades', description: 'Mantente al día con las últimas actualizaciones y novedades.', path: '/noticias-y-novedades', icon: <Newspaper /> },
    { title: 'Agenda de eventos', description: 'Consulta el calendario de talleres, clubes de lectura y exposiciones.', path: '/agenda', icon: <Calendar /> },
    { title: 'Preguntas frecuentes', description: 'Resuelve tus dudas sobre servicios y recursos.', path: '/preguntas-frecuentes', icon: <HelpCircle /> },
    { title: 'Contacto', description: 'Canales de atención y ubicación de la biblioteca.', path: '/contacto', icon: <Mail /> },
  ];

  return (
    <div>
      <PageHeader 
        title="La biblioteca" 
        description="Información institucional, noticias, agenda de eventos y canales de atención para toda la comunidad universitaria."
        breadcrumbs={[{ label: 'La biblioteca' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {links.map((link) => (
            <div key={link.path}>
              <WireframeCard {...link} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-light py-20 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-brand-gray mb-6 tracking-tight">Nuestra misión</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Contribuir a la formación integral de la comunidad universitaria y al desarrollo de la investigación, mediante la gestión de recursos de información y la prestación de servicios innovadores que faciliten el aprendizaje y la generación de conocimiento.
              </p>
              <Link to="/quienes-somos" className="bg-black text-white hover:bg-neutral-800 font-bold px-6 py-3 rounded-lg text-sm inline-block transition-colors">
                Conoce más sobre nosotros
              </Link>
            </div>
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold">
              IMAGEN INSTITUCIONAL
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const LaBiblioteca = SobreBiblioteca;

export function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: '¿Cómo puedo renovar mis libros en línea?', a: 'Ingresa a la sección "Yo soy", selecciona tu perfil y entra a "Mi Cuenta". Allí podrás ver tus préstamos vigentes y renovarlos si no tienen reserva.' },
    { q: '¿Cuántos libros puedo llevar en préstamo?', a: 'Los estudiantes de pregrado pueden llevar hasta 10 libros de la colección general por un periodo de 15 días.' },
    { q: '¿Cómo accedo a las bases de datos desde fuera de la universidad?', a: 'Debes ingresar a través del sitio web de la biblioteca con tu usuario y contraseña institucional de Icesi.' },
    { q: '¿Qué debo hacer si pierdo un libro?', a: 'Debes informar inmediatamente al punto de circulación y préstamo. Se te indicará el proceso para la reposición del material.' },
    { q: '¿Cómo reservo una sala de estudio?', a: 'Puedes hacerlo a través de nuestra plataforma de reservas en línea o directamente en el punto de atención de la biblioteca.' },
  ];

  return (
    <div>
      <PageHeader 
        title="Preguntas frecuentes" 
        description="Encuentra respuestas rápidas a las inquietudes más comunes sobre el uso de la biblioteca."
        breadcrumbs={[{ label: 'La biblioteca', path: '/la-biblioteca' }, { label: 'Preguntas frecuentes' }]}
      />
      
      <section className="wireframe-section">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-brand-border">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-light transition-colors"
              >
                <span className="font-bold text-brand-gray">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-blue transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-sm text-gray-500 leading-relaxed border-t border-brand-border bg-brand-light/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-brand-blue p-12 text-white text-center rounded-sm">
          <h3 className="text-2xl font-bold mb-4">¿No encontraste la respuesta?</h3>
          <p className="text-white/80 mb-8">Estamos aquí para ayudarte. Contáctanos a través de nuestros canales oficiales.</p>
          <Link to="/contacto" className="bg-brand-yellow text-brand-gray px-8 py-3 font-bold hover:opacity-90 transition-all">
            Contactar soporte
          </Link>
        </div>
      </section>
    </div>
  );
}

export function QuienesSomos() {
  return (
    <div>
      <PageHeader 
        title="Quiénes somos" 
        description="Conoce la historia, misión y el equipo humano que hace de la biblioteca el corazón académico de la Icesi."
        breadcrumbs={[{ label: 'La biblioteca', path: '/la-biblioteca' }, { label: 'Quiénes somos' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-brand-gray tracking-tighter mb-8 leading-tight">Nuestra identidad institucional.</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-blue pl-6">
                <h3 className="text-lg font-bold text-brand-gray uppercase tracking-widest mb-3">Misión</h3>
                <p className="text-gray-500 leading-relaxed uppercase text-[10px] font-bold tracking-widest opacity-60">Impulsar el éxito académico.</p>
                <p className="text-sm text-gray-500 mt-2">Contribuimos a la excelencia académica y la investigación mediante servicios bibliotecarios innovadores y la gestión eficiente de recursos de conocimiento.</p>
              </div>
              <div className="border-l-4 border-brand-yellow pl-6">
                <h3 className="text-lg font-bold text-brand-gray uppercase tracking-widest mb-3">Visión</h3>
                <p className="text-gray-500 leading-relaxed uppercase text-[10px] font-bold tracking-widest opacity-60">Ser referentes regionales.</p>
                <p className="text-sm text-gray-500 mt-2">Ser el principal aliado estratégico de la comunidad universitaria en la búsqueda, creación y difusión de la información científica y cultural.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square bg-brand-light border border-brand-border flex items-center justify-center text-[10px] text-gray-300 font-black uppercase">Espacios</div>
             <div className="aspect-square bg-brand-gray text-white flex items-center justify-center text-[10px] font-black uppercase">Tecnología</div>
             <div className="aspect-square bg-brand-yellow text-brand-gray flex items-center justify-center text-[10px] font-black uppercase">Cultura</div>
             <div className="aspect-square bg-brand-blue text-white flex items-center justify-center text-[10px] font-black uppercase">Comunidad</div>
          </div>
        </div>

        <div className="bg-brand-light p-12 border border-brand-border mb-20 text-center">
          <h3 className="text-2xl font-black mb-12 uppercase tracking-widest">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Excelencia', desc: 'Buscamos la máxima calidad en cada servicio.' },
              { title: 'Integridad', desc: 'Promovemos la honestidad intelectual y la ética.' },
              { title: 'Innovación', desc: 'Evolucionamos con las nuevas tecnologías.' },
            ].map((v, i) => (
              <div key={i}>
                <h4 className="text-lg font-bold mb-2 text-brand-blue">{v.title}</h4>
                <p className="text-sm text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function NoticiasNovedades() {
  const news = [
    { title: 'Nuevas bases de datos especializadas en medicina', date: 'Mayo 02, 2026', category: 'Recursos', desc: 'Ampliamos nuestra colección digital para la Facultad de Ciencias de la Salud con 5 nuevos recursos de suscripción.' },
    { title: 'Exposición fotográfica: Caminos del Valle', date: 'Abril 28, 2026', category: 'Cultura', desc: 'Visita el hall de la biblioteca y conoce la muestra artística de los estudiantes de Diseño.' },
    { title: 'Horarios especiales por temporada de exámenes', date: 'Abril 25, 2026', category: 'Servicios', desc: 'La biblioteca extenderá su horario hasta media noche de lunes a jueves durante las próximas dos semanas.' },
    { title: 'Taller de normalización APA Séptima Edición', date: 'Abril 20, 2026', category: 'Apoyo', desc: 'Únete a nuestra sesión virtual sobre las actualizaciones más importantes de las normas APA.' },
  ];

  return (
    <div>
      <PageHeader 
        title="Noticias y novedades" 
        description="Explora las últimas noticias, eventos y actualizaciones de los servicios y recursos de la biblioteca."
        breadcrumbs={[{ label: 'La biblioteca', path: '/la-biblioteca' }, { label: 'Noticias y novedades' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 border-r border-brand-border pr-8">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Filtrar por categoría</h3>
            <div className="space-y-2">
              {['Todas', 'Servicios', 'Recursos', 'Cultura', 'Investigación', 'Apoyo Académico'].map(cat => (
                <button key={cat} className="w-full text-left py-2 px-4 text-sm font-bold text-brand-gray hover:bg-brand-light transition-all rounded-sm flex items-center justify-between group">
                  {cat}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-blue" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-12">
            <div className="grid grid-cols-1 gap-12">
              {news.map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 group">
                  <div className="w-full md:w-1/3 aspect-video bg-brand-light border border-brand-border flex items-center justify-center text-[10px] text-gray-300 font-bold uppercase overflow-hidden">
                    <div className="group-hover:scale-110 transition-transform duration-500">IMAGEN NOTICIA</div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue px-2 py-0.5 bg-brand-blue/5 border border-brand-blue/10">{item.category}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-gray mb-3 group-hover:text-brand-blue transition-colors leading-tight">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-6 line-clamp-2">{item.desc}</p>
                    <Link to={`/noticia/${i}`} className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-brand-gray border-b-2 border-brand-yellow pb-1 self-start w-fit">Leer más</Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-12">
               <button className="wireframe-button-secondary py-3 px-12">Cargar más noticias</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Contacto() {
  return (
    <div>
      <PageHeader 
        title="Contacto" 
        description="Estamos disponibles para resolver tus dudas y recibir tus sugerencias a través de nuestros diferentes canales."
        breadcrumbs={[{ label: 'La biblioteca', path: '/la-biblioteca' }, { label: 'Contacto' }]}
      />
      
      <section className="wireframe-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-black text-brand-gray mb-8 tracking-tight">Envíanos un mensaje</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nombre completo</label>
                  <input type="text" className="wireframe-input py-2 text-sm" placeholder="Ej: Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Correo institucional</label>
                  <input type="email" className="wireframe-input py-2 text-sm" placeholder="ejemplo@icesi.edu.co" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Asunto</label>
                <select className="wireframe-input py-2 text-sm bg-white">
                  <option>Consulta general</option>
                  <option>Problemas de acceso</option>
                  <option>Sugerencia de compra</option>
                  <option>Felicitaciones / Quejas</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Mensaje</label>
                <textarea className="wireframe-input h-32 resize-none py-2 text-sm" placeholder="Describe tu inquietud detalladamente..."></textarea>
              </div>
              <button className="bg-black text-white hover:bg-neutral-800 font-bold w-full flex items-center justify-center gap-2 py-4 rounded-lg text-sm transition-colors cursor-pointer shadow-sm">
                Enviar mensaje <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-black text-brand-gray mb-8 tracking-tight">Canales de atención</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-light text-brand-blue flex items-center justify-center rounded-sm shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Teléfono</h4>
                    <p className="text-sm text-gray-500">(602) 555 2334 ext. 4120</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-light text-brand-blue flex items-center justify-center rounded-sm shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Correo electrónico</h4>
                    <p className="text-sm text-gray-500">biblioteca@icesi.edu.co</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-light text-brand-blue flex items-center justify-center rounded-sm shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Ubicación</h4>
                    <p className="text-sm text-gray-500">Calle 18 No. 122-135, Cali, Colombia. Edificio L.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-light p-8 border border-brand-border">
              <h3 className="text-xl font-bold mb-4">Síguenos en redes</h3>
              <div className="flex flex-wrap gap-3">
                {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map(social => (
                  <button key={social} className="px-5 py-2 bg-white border border-brand-border text-[10px] font-black uppercase tracking-widest text-brand-gray hover:bg-brand-blue hover:text-white transition-all">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
