/**
 * Identidad "Biblioteca · Territorio de saberes".
 * Cada sección del sitio hereda, de forma discreta, el elemento del piso con el que se relaciona:
 *   Aire (piso 3)   → Investigación
 *   Agua (piso 2)   → Creatividad
 *   Tierra (piso 1) → Cultura
 *   Fuego           → Transversal: lo que nos reúne (la biblioteca, su gente, sus encuentros)
 */
import simboloAire from '../assets/territorio/simbolo-aire.svg';
import simboloAgua from '../assets/territorio/simbolo-agua.svg';
import simboloTierra from '../assets/territorio/simbolo-tierra.svg';
import simboloFuego from '../assets/territorio/simbolo-fuego.svg';
import colibri from '../assets/territorio/colibri.svg';
import ballena from '../assets/territorio/ballena.svg';
import arbol from '../assets/territorio/arbol.svg';
import persona from '../assets/territorio/persona.svg';

export type Elemento = 'aire' | 'agua' | 'tierra' | 'fuego';

export const ELEMENTOS: Record<Elemento, { label: string; pillar: string; symbol: string; animal: string; edge: string }> = {
  aire: { label: 'Aire', pillar: 'Investigación', symbol: simboloAire, animal: colibri, edge: 'bg-aire' },
  agua: { label: 'Agua', pillar: 'Creatividad', symbol: simboloAgua, animal: ballena, edge: 'bg-agua' },
  tierra: { label: 'Tierra', pillar: 'Cultura', symbol: simboloTierra, animal: arbol, edge: 'bg-tierra' },
  fuego: { label: 'Fuego', pillar: 'Encuentros', symbol: simboloFuego, animal: persona, edge: 'bg-fuego' },
};

// Primer prefijo que coincida gana. Editable a mano.
const RUTAS: [string, Elemento][] = [
  // Creatividad · Agua: espacios y equipos para crear
  ['/reserva-de-salas', 'agua'],
  ['/prestamo-de-recursos-moviles', 'agua'],
  ['/servicios', 'agua'],
  // Cultura · Tierra
  ['/cultura-y-creatividad', 'tierra'],
  ['/extension-cultural', 'tierra'],
  ['/tocadiscos', 'tierra'],
  // Encuentros · Fuego (transversal)
  ['/agenda', 'fuego'],
  ['/la-biblioteca', 'fuego'],
  ['/sobre-la-biblioteca', 'fuego'],
  ['/quienes-somos', 'fuego'],
  ['/noticias-y-novedades', 'fuego'],
  ['/noticia', 'fuego'],
  ['/preguntas-frecuentes', 'fuego'],
  ['/contacto', 'fuego'],
  ['/yo-soy', 'fuego'],
  // Investigación · Aire: todo lo demás (recursos, formación, préstamo de libros, convenios)
];

export function elementoDeRuta(pathname: string): Elemento {
  const hit = RUTAS.find(([prefix]) => pathname === prefix || pathname.startsWith(prefix + '/') || pathname.startsWith(prefix + '-'));
  return hit ? hit[1] : 'aire';
}
