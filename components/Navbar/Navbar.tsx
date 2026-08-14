'use client';
import { useState } from 'react';
import Link from 'next/link';

const ENLACES = [
  { href: '/#sobre-mi', label: 'Sobre Mí' },
  { href: '/CalendarioTurnos', label: 'Turnos' },
  { href: '/CalendarioTurnos#faq', label: 'Preguntas frecuentes' },
];

const WHATSAPP_HREF =
  'https://wa.me/5492215732060?text=¡Hola%20Delfi!%20Me%20gustaría%20hacerte%20una%20consulta.';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <Link href="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
          <img
            src="/assets/hoja-1.png"
            alt="Nutrición con Delfi Logo"
            className="navbar-logo-hoja"
          />
          <span className="navbar-titulo-marca">Nutrición con Delfi</span>
        </Link>

        <div className="navbar-derecha">
          <ul className="navbar-links">
            {ENLACES.map((enlace) => (
              <li key={enlace.href}>
                <Link href={enlace.href}>{enlace.label}</Link>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-navbar-contacto"
          >
            Contacto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {isOpen && (
        <div className="navbar-mobile-menu">
          <ul className="navbar-mobile-links">
            {ENLACES.map((enlace) => (
              <li key={enlace.href}>
                <Link href={enlace.href} onClick={() => setIsOpen(false)}>
                  {enlace.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-navbar-contacto navbar-mobile-contacto"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
