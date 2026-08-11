'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF4EE] border-b border-[#E6D5CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo / Marca */}
        <Link href="/" className="font-serif text-lg md:text-xl font-bold text-[#4A3B32]">
          Nutrición con Delfí
        </Link>

        {/* Links para PC (Ocultos en celular) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#4A3B32] hover:text-[#A67C65] font-medium transition-colors">Inicio</Link>
          <Link href="/SobreMi" className="text-[#4A3B32] hover:text-[#A67C65] font-medium transition-colors">Sobre Mí</Link>
          <Link href="/Turnos" className="text-[#4A3B32] hover:text-[#A67C65] font-medium transition-colors">Turnos</Link>
          <Link href="/PreguntasFrecuentes" className="text-[#4A3B32] hover:text-[#A67C65] font-medium transition-colors">Preguntas frecuentes</Link>
          <Link href="/Contacto" className="bg-[#A67C65] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#8F6A55] transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Botón Menú Hamburguesa para Celular */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-[#4A3B32] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#4A3B32] transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#4A3B32] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menú Desplegable para Celular (Aparece cuando isOpen es true) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#FAF4EE] border-b border-[#E6D5CC] shadow-lg py-6 px-6 flex flex-col items-center gap-5 transition-all">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-[#4A3B32] text-lg font-medium">Inicio</Link>
          <Link href="/SobreMi" onClick={() => setIsOpen(false)} className="text-[#4A3B32] text-lg font-medium">Sobre Mí</Link>
          <Link href="/Turnos" onClick={() => setIsOpen(false)} className="text-[#4A3B32] text-lg font-medium">Turnos</Link>
          <Link href="/PreguntasFrecuentes" onClick={() => setIsOpen(false)} className="text-[#4A3B32] text-lg font-medium">Preguntas frecuentes</Link>
          <Link href="/Contacto" onClick={() => setIsOpen(false)} className="bg-[#A67C65] text-white px-6 py-2.5 rounded-full font-medium text-lg w-full text-center">
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}