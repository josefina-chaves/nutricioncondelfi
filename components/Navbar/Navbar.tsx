'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        {/* Logo o Marca */}
        <Link href="/" className="navbar-logo">
          Nutrición con Delfi
        </Link>

        {/* Links de navegación */}
        <div className={`nav-links ${isOpen ? 'open-menu' : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/SobreMi" onClick={() => setIsOpen(false)}>Sobre Mí</Link>
          <Link href="/Servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link href="/CalendarioTurnos" onClick={() => setIsOpen(false)} className="nav-btn-turno">
            Reservar Turno
          </Link>
        </div>

        {/* Botón Hamburguesa */}
        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Menú">
          <span className={`line ${isOpen ? 'rotate1' : ''}`}></span>
          <span className={`line ${isOpen ? 'fade' : ''}`}></span>
          <span className={`line ${isOpen ? 'rotate2' : ''}`}></span>
        </button>
      </nav>

      <style jsx>{`
        .navbar-wrapper {
          width: 100%;
          background-color: #FAF4EE;
          border-bottom: 1px solid #E6D5CC;
          position: sticky;
          top: 0;
          z-index: 9999;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
        }

        .navbar-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: bold;
          color: #4A3B32;
          text-decoration: none;
        }

        /* Estilos de los links en PC */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .nav-links :global(a) {
          color: #4A3B32;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s;
        }

        .nav-links :global(a:hover) {
          color: #A67C65;
        }

        .nav-btn-turno {
          background-color: #A67C65 !important;
          color: #FFF !important;
          padding: 8px 18px !important;
          border-radius: 20px;
        }

        /* Botón hamburguesa oculto en PC */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .line {
          width: 100%;
          height: 3px;
          background-color: #4A3B32;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* =========================================
           VERSION CELULAR (Pantallas menores a 768px)
           ========================================= */
        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex; /* Aparece el botón de las rayitas */
          }

          /* Ocultamos los links por defecto y los transformamos en menú flotante */
          .nav-links {
            display: flex;
            position: fixed;
            top: 60px; /* Queda justo debajo del navbar */
            left: -100%; /* Escondido fuera de la pantalla a la izquierda */
            width: 100%;
            height: calc(100vh - 60px);
            background-color: #FAF4EE;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
            transition: left 0.35s ease-in-out;
            box-shadow: 0 10px 15px rgba(0,0,0,0.05);
          }

          /* Cuando se hace clic, el menú entra a la pantalla */
          .nav-links.open-menu {
            left: 0;
          }

          .nav-links :global(a) {
            font-size: 1.2rem;
          }

          /* Animación del botón hamburguesa a cruz (X) */
          .hamburger-btn .line.rotate1 {
            transform: translateY(8.5px) rotate(45deg);
          }
          .hamburger-btn .line.fade {
            opacity: 0;
          }
          .hamburger-btn .line.rotate2 {
            transform: translateY(-8.5px) rotate(-45deg);
          }
        }
      `}</style>
    </header>
  );
}