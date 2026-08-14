'use client';

import { useState } from 'react';
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";

// 6 Testimonios anónimos
const testimonios = [
  {
    id: 1,
    comentario: "Gracias por acompañarme en este proceso",
    estrellas: 5,
  },
  {
    id: 2,
    comentario: "Me siento super bien, te juro. Es la primera vez después de años que siento que me entienden, sos una genia",
    estrellas: 5,
  },
  {
    id: 3,
    comentario: "Vengo súper!!! Me encanta el plan, muy variado y rico todo",
    estrellas: 5,
  },
  {
    id: 4,
    comentario: "Me ayudaste un montón!, ya te adoro",
    estrellas: 5,
  },
  {
    id: 5,
    comentario: "Llego bien a las comidas, no sé cual me gusta más porque todas son riquisimas, estoy feliz de haberte escrito y que seas mi nutri",
    estrellas: 5,
  },
  {
    id: 6,
    comentario: "Me alegro de haber llegado a vos, Me hiciste sentir muy bien y no me está costando para nada incorporar las cosas",
    estrellas: 5,
  }
];

export default function Inicio() {
  const [indiceActual, setIndiceActual] = useState(0);

  // Funciones para avanzar y retroceder en el carrusel
  const anterior = () => {
    setIndiceActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndiceActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  // Esta función obtiene siempre 3 testimonios consecutivos para mostrar en la grilla
  const getTestimoniosVisibles = () => {
    return [
      testimonios[indiceActual],
      testimonios[(indiceActual + 1) % testimonios.length],
      testimonios[(indiceActual + 2) % testimonios.length]
    ];
  };

  return (
    <>
      {/* =========================================
          BARRA DE NAVEGACIÓN
          ========================================= */}
      <Navbar />

      {/* =========================================
          CONTENIDO PRINCIPAL (ACTUALIZADO Y RESPONSIVE)
          ========================================= */}
      <main className="relative w-full max-w-6xl mx-auto px-4 py-8 md:py-16 mt-4 md:mt-8 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          
          {/* Columna Izquierda: Textos y Botones */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A3B32] leading-tight">
              Nutrí tu cuerpo <br />
              Viví con Salud <br />
              <span className="italic text-[#A67C65]">Hoy</span>
            </h1>
            
            <p className="text-[#6B574B] text-base sm:text-lg leading-relaxed max-w-xl mt-4">
              ¡Hola!, soy Delfi, licenciada en Nutrición, <strong>graduada en diciembre de 2024 de la Universidad Nacional de La Plata.</strong><br/><br/>
              Te acompaño a lograr tus objetivos de forma saludable, sin dietas restrictivas y adaptado a tu rutina. Mi enfoque se basa en una alimentación sin restricciones, flexible y sostenible, adaptada a las necesidades y objetivos de cada persona.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Link href="/CalendarioTurnos">
                <img 
                  src="/assets/boton-empezar.png" 
                  className="h-12 md:h-14 hover:scale-105 transition-transform cursor-pointer" 
                  alt="Boton Empezar Ahora" 
                />
              </Link>
              
              <a 
                href="https://wa.me/5492215732060?text=¡Hola%20Delfi!%20Me%20gustaría%20hacerte%20una%20consulta."
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/assets/boton-testimonios.png" 
                  className="h-12 md:h-14 hover:scale-105 transition-transform cursor-pointer" 
                  alt="Contacto por WhatsApp" 
                />
              </a>
            </div>
          </div>

          {/* Columna Derecha: Fotos Polaroids */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[350px] mt-8 md:mt-0">
            <div className="relative w-full max-w-[380px] h-[350px] flex justify-center items-center">
              
              {/* Polaroid 1 (Izquierda) */}
              <div className="absolute w-[180px] sm:w-[220px] bg-[#FAF4EE] p-3 rounded-lg shadow-xl -rotate-6 -translate-x-12 sm:-translate-x-16 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 border border-[#E6D5CC]">
                <img 
                  src="/assets/delfi-foto.png" 
                  alt="Delfi Nutricionista" 
                  className="w-full h-[200px] sm:h-[240px] object-cover rounded bg-white"
                />
                <p className="text-center font-serif text-xs sm:text-sm text-[#4A3B32] mt-2 font-medium">Nutrición real ✨</p>
              </div>

              {/* Polaroid 2 (Derecha) */}
              <div className="absolute w-[180px] sm:w-[220px] bg-[#FAF4EE] p-3 rounded-lg shadow-xl rotate-6 translate-x-12 sm:translate-x-16 translate-y-6 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 border border-[#E6D5CC]">
                <img 
                  src="/assets/delfi-foto.png" 
                  alt="Consulta nutricional" 
                  className="w-full h-[200px] sm:h-[240px] object-cover rounded bg-white"
                />
                <p className="text-center font-serif text-xs sm:text-sm text-[#4A3B32] mt-2 font-medium">Hábitos conscientes 🌿</p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* =========================================
          DIVISORIO: CINTA EN MOVIMIENTO SUAVE
          ========================================= */}
      <div className="cinta-divisoria-container">
        <div className="cinta-divisoria-track">
          <div className="cinta-divisoria-contenido">
            <span>ALIMENTACIÓN FLEXIBLE Y SOSTENIBLE</span>
            <span className="separador">🌿</span>
            <span>SIN DIETAS RESTRICTIVAS</span>
            <span className="separador">✨</span>
            <span>SALUD INTEGRAL Y BIENESTAR</span>
            <span className="separador">🌿</span>
            <span>HÁBITOS QUE PERDURAN EN EL TIEMPO</span>
            <span className="separador">✨</span>
          </div>
          <div className="cinta-divisoria-contenido" aria-hidden="true">
            <span>ALIMENTACIÓN FLEXIBLE Y SOSTENIBLE</span>
            <span className="separador">🌿</span>
            <span>SIN DIETAS RESTRICTIVAS</span>
            <span className="separador">✨</span>
            <span>SALUD INTEGRAL Y BIENESTAR</span>
            <span className="separador">🌿</span>
            <span>HÁBITOS QUE PERDURAN EN EL TIEMPO</span>
            <span className="separador">✨</span>
          </div>
        </div>
      </div>

      {/* =========================================
          SECCIÓN: FRASE DE TRANSICIÓN
          ========================================= */}
      <section className="seccion-frase-transicion">
        <div className="bloque-introduccion-servicios">
          <span className="icono-comillas-texto">“</span>
          <p className="frase-enfoque">
            Aprendé a alimentarte <span className="resaltado-rosa">sin miedo</span>, <span className="resaltado-rosa">con libertad</span> y <span className="resaltado-rosa">disfrutando cada paso</span>.
          </p>
        </div>
      </section>

      {/* =========================================
          SECCIÓN: SOBRE MÍ
          ========================================= */}
      <section className="seccion-sobre-mi" id="sobre-mi">
        <div className="contenedor-sobre-mi">
          
          <div className="columna-imagenes-sobre-mi">
            <img 
              src="/assets/polaroid-1.png" 
              alt="Delfi trabajando" 
              className="imagen-sobre-mi-unica" 
            />
          </div>

          <div className="columna-texto-sobre-mi">
            <span className="tag-destacado-sobre-mi">Conoceme un poco más</span>
            <h2 className="titulo-seccion-sobre-mi">Mi filosofía en el consultorio</h2>
            
            <p className="descripcion-sobre-mi">
              Creo firmemente que la nutrición va mucho más allá de contar calorías. Mi objetivo es brindarte herramientas prácticas para que puedas construir una relación sana con la comida, entendiendo qué necesita tu cuerpo sin dejar de disfrutar lo que te gusta.
            </p>

            <p className="descripcion-sobre-mi">
              Trabajamos en conjunto para encontrar el equilibrio perfecto, adaptando cada recomendación a tus tiempos, tus gustos y tu realidad diaria.
            </p>

            <div className="contenedor-pildoras">
              <span className="pildora-area">Educación Alimentaria</span>
              <span className="pildora-area">Composición Corporal</span>
              <span className="pildora-area">Alimentación Vegetariana</span>
              <span className="pildora-area">Salud Hormonal</span>
              <span className="pildora-area">Nutrición Deportiva</span>
            </div>

            <div className="contenedor-boton-cta-sobre-mi">
              <Link href="/CalendarioTurnos">
                <img 
                  src="/assets/boton-reserva-turno.png" 
                  className="boton-imagen-reserva" 
                  alt="Botón Reserva tu turno" 
                />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECCIÓN DE TESTIMONIOS (DISEÑO ANONIMIZADO Y FUNCIONAL)
          ========================================= */}
      <section className="testimonios-seccion" id="testimonios">
        <div className="testimonios-container">
          
          <div className="testimonios-header">
            <div>
              <span className="testimonios-tag">TESTIMONIOS</span>
              <h2 className="testimonios-titulo">Lo que dicen mis pacientes</h2>
              <p className="testimonios-subtitulo">
                Historias reales de personas que transformaron su relación con la comida.
              </p>
            </div>

            <div className="testimonios-controles">
              <button onClick={anterior} className="btn-carrusel" aria-label="Anterior">
                &#8592;
              </button>
              <button onClick={siguiente} className="btn-carrusel" aria-label="Siguiente">
                &#8594;
              </button>
            </div>
          </div>

          <div className="testimonios-grid">
            {getTestimoniosVisibles().map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="tarjeta-testimonio"
              >
                <span className="comilla-bg">“</span>

                <div className="estrellas-rating">
                  {"★".repeat(item.estrellas)}
                </div>

                <p className="testimonio-texto">
                  "{item.comentario}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          PIE DE PÁGINA (FOOTER)
          ========================================= */}
      <footer className="footer-container" id="contacto">
        <div className="footer-contenido">
          
          <div className="footer-marca">
            <span className="footer-titulo">Nutrición con Delfi</span>
            <p className="footer-texto">
              Transformando hábitos, sin dietas restrictivas y con mucho amor. Tu bienestar es el objetivo principal.
            </p>
          </div>

          <div className="footer-enlaces">
            <h4>Navegación</h4>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/#sobre-mi">Sobre Mí</Link></li>
              <li><Link href="/CalendarioTurnos">Turnos</Link></li>
              <li><Link href="/CalendarioTurnos#faq">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          <div className="footer-contacto">
            <h4>Contacto</h4>
            <div className="footer-redes">
              
              <a href="https://instagram.com/nutricioncondelfi" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.926-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 1.927 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-1.924 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-5.054-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a href="https://wa.me/5492215732060" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              <a href="mailto:Delfinaira@hotmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.574l-12-8.727v11.44h24v-11.44l-12 8.727z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Nutrición con Delfi. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}