import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        
        {/* Lado Izquierdo: Plantita / Marca */}
        <Link href="/" className="navbar-brand">
          <img 
            src="/assets/hoja-1.png" 
            alt="Nutrición con Delfi Logo" 
            className="navbar-logo-hoja" 
          />
          <span className="navbar-titulo-marca">Nutrición con Delfi</span>
        </Link>

        {/* Lado Derecho: Menú de Navegación */}
        <ul className="navbar-links">
          <li>
            <Link href="#sobre-mi">Sobre Mí</Link>
          </li>
          <li>
            <Link href="#turnos">Turnos</Link>
          </li>
          <li>
            <Link href="#faq">Preguntas frecuentes</Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}