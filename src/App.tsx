import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header, Footer } from './components/Layout';
import Inicio from './pages/Inicio';
import { RecursosInformacion, BuscarTodo, BasesDeDatos } from './pages/RecursosInformacion';
import { CatalogoPublico, RepositorioInstitucional, RepositorioAcademico, RepositorioAudiovisual, Datover, GuiasTutoriales } from './pages/RecursosEspecializados';
import { ServiciosPrestamos, ReservaSalas, PrestamoMaterial, PrestamoRecursosMoviles, ExtensionCultural, CulturaCreatividad, Tocadiscos } from './pages/ServiciosPrestamos';
import { ApoyoAcademico, FormacionInvestigacion, FormacionAsesoria, CheckBit, VigilanciaEstrategica, CompraMaterial } from './pages/ApoyoAcademico';
import { YoSoy, EstudianteDashboard, ProfesorDashboard, GraduadoDashboard } from './pages/YoSoy';
import { SobreBiblioteca, LaBiblioteca, PreguntasFrecuentes, Contacto, QuienesSomos, NoticiasNovedades } from './pages/SobreBiblioteca';
import NoticiaDetalle from './pages/NoticiaDetalle';
import Agenda, { EventoDetalle } from './pages/Agenda';
import Login from './pages/Login';
import { CategoriaBasesDatos, ConveniosInterbibliotecarios } from './pages/CategoriasConvenios';
import AIChatBot from './components/AIChatBot';
import { motion, AnimatePresence } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex-grow flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio" element={<Inicio />} />
          
          {/* Recursos de información */}
          <Route path="/recursos-de-informacion" element={<RecursosInformacion />} />
          <Route path="/buscar-todo" element={<BuscarTodo />} />
          <Route path="/bases-de-datos" element={<BasesDeDatos />} />
          <Route path="/ciencias-de-la-salud" element={<CategoriaBasesDatos title="Ciencias de la salud" description="Recursos especializados en medicina, enfermería y ciencias básicas de la salud." />} />
          <Route path="/ciencias-humanas" element={<CategoriaBasesDatos title="Ciencias humanas" description="Bases de datos sobre psicología, sociología, artes y humanidades." />} />
          <Route path="/ingenieria-diseno-ciencias-aplicadas" element={<CategoriaBasesDatos title="Ingeniería y diseño" description="Recursos técnicos para ingeniería, diseño industrial y ciencias aplicadas." />} />
          <Route path="/multidisciplinares" element={<CategoriaBasesDatos title="Multidisciplinares" description="Grandes agregadores de contenido que cubren múltiples áreas del conocimiento." />} />
          <Route path="/negocios-y-economia" element={<CategoriaBasesDatos title="Negocios y economía" description="Bases de datos especializadas en administración, finanzas y mercadeo." />} />
          <Route path="/libros-electronicos" element={<CategoriaBasesDatos title="Libros electrónicos" description="Colecciones de libros digitales de diversas editoriales académicas." />} />
          
          <Route path="/catalogo-publico" element={<CatalogoPublico />} />
          <Route path="/repositorio-academico" element={<RepositorioAcademico />} />
          <Route path="/repositorio-institucional" element={<RepositorioInstitucional />} />
          <Route path="/repositorio-audiovisual" element={<RepositorioAudiovisual />} />
          <Route path="/datover" element={<Datover />} />
          <Route path="/guias-y-tutoriales" element={<GuiasTutoriales />} />
          
          {/* Servicios */}
          <Route path="/servicios" element={<ServiciosPrestamos />} />
          <Route path="/servicios-y-prestamos" element={<ServiciosPrestamos />} />
          <Route path="/reserva-de-salas" element={<ReservaSalas />} />
          <Route path="/prestamo-de-material-impreso" element={<PrestamoMaterial />} />
          <Route path="/prestamo-de-recursos-moviles" element={<PrestamoRecursosMoviles />} />
          <Route path="/prestamo-interbibliotecario" element={<ConveniosInterbibliotecarios />} />
          <Route path="/convenios-interbibliotecarios" element={<ConveniosInterbibliotecarios />} />
          <Route path="/ruav" element={<ConveniosInterbibliotecarios />} />
          <Route path="/alianza-4u" element={<ConveniosInterbibliotecarios />} />
          <Route path="/convenios-nacionales" element={<ConveniosInterbibliotecarios />} />
          <Route path="/cultura-y-creatividad" element={<CulturaCreatividad />} />
          <Route path="/extension-cultural" element={<ExtensionCultural />} />
          <Route path="/tocadiscos" element={<Tocadiscos />} />
          
          {/* Formación e investigación */}
          <Route path="/formacion-e-investigacion" element={<FormacionInvestigacion />} />
          <Route path="/apoyo-academico-e-investigacion" element={<ApoyoAcademico />} />
          <Route path="/formacion-y-asesoria" element={<FormacionAsesoria />} />
          <Route path="/check-bit" element={<CheckBit />} />
          <Route path="/vigilancia-estrategica" element={<VigilanciaEstrategica />} />
          <Route path="/compra-de-material-bibliografico" element={<CompraMaterial />} />
          
          {/* Yo soy */}
          <Route path="/yo-soy" element={<YoSoy />} />
          <Route path="/yo-soy/estudiante" element={<EstudianteDashboard />} />
          <Route path="/yo-soy/profesor" element={<ProfesorDashboard />} />
          <Route path="/yo-soy/graduado" element={<GraduadoDashboard />} />
          
          {/* La biblioteca */}
          <Route path="/la-biblioteca" element={<LaBiblioteca />} />
          <Route path="/sobre-la-biblioteca" element={<SobreBiblioteca />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/noticias-y-novedades" element={<NoticiasNovedades />} />
          <Route path="/noticia/:id" element={<NoticiaDetalle />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/agenda/evento/:id" element={<EventoDetalle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/contacto" element={<Contacto />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/inicio" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <AnimatedRoutes />
        <Footer />
        <AIChatBot />
      </div>
    </Router>
  );
}
