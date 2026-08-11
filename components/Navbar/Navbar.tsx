'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Logo o Marca */}
        <Link href="/" className="navbar-logo">
          Nutrición con Delfi
        </Link>

        {/* Links de navegación para PC (Desktop) */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/SobreMi" onClick={() => setIsOpen(false)}>Sobre Mí</Link>
          <Link href="/Servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link href="/CalendarioTurnos" onClick={() => setIsOpen(false)} className="nav-btn-turno">
            Reservar Turno
          </Link>
        </div>

        {/* Botón Hamburguesa para Celular */}
        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Abrir menú">
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Estilos CSS integrados para que funcione al instante */}
      <style jsx>{`
        .navbar-container {
          width: 100%;
          background-color: #FAF4EE;
          border-bottom: 1px solid #E6D5CC;
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 15px 0;
        }

        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .navbar-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: bold;
          color: #4A3B32;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-links :global(a) {
          color: #4A3B32;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links :global(a:hover) {
          color: #A67C65;
        }

        .nav-btn-turno {
          background-color: #A67C65 !important;
          color: #FFF !important;
          padding: 10px 20px;
          border-radius: 25px;
          transition: background-color 0.3s ease;
        }

        .nav-btn-turno:hover {
          background-color: #7A6354 !important;
        }

        /* Botón hamburguesa oculto por defecto en PC */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }

        .bar {
          width: 100%;
          height: 3px;
          background-color: #4A3B32;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        /* Adaptación Responsive para Celulares */
        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #FAF4EE;
            flex-direction: column;
            align-items: center;
            padding: 30px 0;
            gap: 20px;
            border-bottom: 1px solid #E6D5CC;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            /* Animación de despliegue */
            opacity: 0;
            pointer-events: none;
            transform: translateY(-10px);
            transition: all 0.3s ease;
          }

          .nav-links.active {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          /* Animación de las rayitas a una cruz X cuando se abre */
          .hamburger-btn .bar.open:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
          }
          .hamburger-btn .bar.open:nth-child(2) {
            opacity: 0;
          }
          .hamburger-btn .bar.open:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
          }
        }
      `}</style>
    </nav>
  );
}