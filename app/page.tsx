'use client';

import { useState } from 'react';
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";

// 6 Testimonios anónimos
const testimonios = [
  { id: 1, comentario: "Gracias por acompañarme en este proceso", estrellas: 5 },
  { id: 2, comentario: "Me siento super bien, te juro. Es la primera vez después de años que siento que me entienden, sos una genia", estrellas: 5 },
  { id: 3, comentario: "Vengo súper!!! Me encanta el plan, muy variado y rico todo", estrellas: 5 },
  { id: 4, comentario: "Me ayudaste un montón!, ya te adoro", estrellas: 5 },
  { id: 5, comentario: "Llego bien a las comidas, no sé cual me gusta más porque todas son riquisimas, estoy feliz de haberte escrito y que seas mi nutri", estrellas: 5 },
  { id: 6, comentario: "Me alegro de haber llegado a vos, Me hiciste sentir muy bien y no me está costando para nada incorporar las cosas", estrellas: 5 }
];

export default function Inicio() {
  const [indiceActual, setIndiceActual] = useState(0);

  const anterior = () => {
    setIndiceActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndiceActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  const getTestimoniosVisibles = () => {
    return [
      testimonios[indiceActual],
      testimonios[(indiceActual + 1) % testimonios.length],
      testimonios[(indiceActual + 2) % testimonios.length]
    ];
  };

  return (
    <>
      <Navbar />

      {/* BLOQUE CENTRAL / HERO */}
      <main className="hero-container">
        <section className="hero-grid">
          
          <div className="columna-izquierda">
            <h1 className="titulo-principal">
              Nutrí tu cuerpo <br />
              Viví con Salud <br />
              <span className="titulo-cursiva">Hoy</span>
            </h1>
            <div className="contenedor-boton-cta">
              <Link href="/CalendarioTurnos">
                <img src="/assets/boton-empezar.png" className="boton-imagen" alt="Boton Empezar Ahora" />
              </Link>
            </div>
          </div>

          <div className="columna-centro">
            <div className="contenedor-foto">
              <img src="/assets/hoja-1.png" className="hoja-flotante hoja-arriba-izq" alt="Hoja decorativa 1" />
              <img src="/assets/hoja-2.png" className="hoja-flotante hoja-arriba-der" alt="Hoja decorativa 2" />
              <img src="/assets/hoja-3.png" className="hoja-flotante hoja-abajo-izq" alt="Hoja decorativa 3" />
              <img src="/assets/hoja-4.png" className="hoja-flotante hoja-abajo-der" alt="Hoja decorativa 4" />
              <img src="/assets/delfi-foto.png" className="foto-arco" alt="Delfi Irañeta - Nutricionista" />
            </div>
          </div>

          <div className="columna-derecha">
            <p className="texto-presentacion">
              ¡Hola!, soy Delfi, licenciada en Nutrición, <strong>graduada en diciembre de 2024 de la Universidad Nacional de La Plata.</strong><br/><br/>
              Te acompaño a lograr tus objetivos de forma saludable, sin dietas restrictivas y adaptado a tu rutina.
              Mi enfoque se basa en una alimentación sin restricciones, flexible y sostenible, adaptada a las necesidades y objetivos de cada persona.
            </p>
            <div className="contenedor-boton-testimonios">
              <a href="https://wa.me/5492215732060?text=¡Hola%20Delfi!%20Me%20gustaría%20hacerte%20una%20consulta." target="_blank" rel="noopener noreferrer">
                <img src="/assets/boton-testimonios.png" className="imagen-testimonios" alt="Contacto por WhatsApp" />
              </a>
            </div>
          </div>

        </section>
      </main>

      {/* DIVISORIO */}
      <div className="cinta-divisoria-container">
        <div className="cinta-divisoria-track">
          <div className="cinta-divisoria-contenido">
            <span>ALIMENTACIÓN FLEXIBLE Y SOSTENIBLE</span><span className="separador">🌿</span>
            <span>SIN DIETAS RESTRICTIVAS</span><span className="separador">✨</span>
            <span>SALUD INTEGRAL Y BIENESTAR</span><span className="separador">🌿</span>
            <span>HÁBITOS QUE PERDURAN EN EL TIEMPO</span><span className="separador">✨</span>
          </div>
        </div>
      </div>

      <section className="seccion-frase-transicion">
        <div className="bloque-introduccion-servicios">
          <span className="icono-comillas-texto">“</span>
          <p className="frase-enfoque">
            Aprendé a alimentarte <span className="resaltado-rosa">sin miedo</span>, <span className="resaltado-rosa">con libertad</span> y <span className="resaltado-rosa">disfrutando cada paso</span>.
          </p>
        </div>
      </section>

      {/* BLOQUE SOBRE MÍ */}
      <section className="seccion-sobre-mi" id="sobre-mi">
        <div className="contenedor-sobre-mi">
          
          <div className="columna-imagenes-sobre-mi">
            <img src="/assets/polaroid-1.png" alt="Delfi trabajando" className="imagen-sobre-mi-unica" />
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
                <img src="/assets/boton-reserva-turno.png" className="boton-imagen-reserva" alt="Botón Reserva tu turno" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonios-seccion" id="testimonios">
        <div className="testimonios-container">
          <div className="testimonios-header">
            <div>
              <span className="testimonios-tag">TESTIMONIOS</span>
              <h2 className="testimonios-titulo">Lo que dicen mis pacientes</h2>
              <p className="testimonios-subtitulo">Historias reales de personas que transformaron su relación con la comida.</p>
            </div>
            <div className="testimonios-controles">
              <button onClick={anterior} className="btn-carrusel" aria-label="Anterior">&#8592;</button>
              <button onClick={siguiente} className="btn-carrusel" aria-label="Siguiente">&#8594;</button>
            </div>
          </div>
          <div className="testimonios-grid">
            {getTestimoniosVisibles().map((item, index) => (
              <div key={`${item.id}-${index}`} className="tarjeta-testimonio">
                <span className="comilla-bg">“</span>
                <div className="estrellas-rating">{"★".repeat(item.estrellas)}</div>
                <p className="testimonio-texto">"{item.comentario}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-container" id="contacto">
        <div className="footer-contenido">
          <div className="footer-marca">
            <span className="footer-titulo">Nutrición con Delfi</span>
            <p className="footer-texto">Transformando hábitos, sin dietas restrictivas y con mucho amor.</p>
          </div>
          <div className="footer-enlaces">
            <h4>Navegación</h4>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/#sobre-mi">Sobre Mí</Link></li>
              <li><Link href="/CalendarioTurnos">Turnos</Link></li>
            </ul>
          </div>
          <div className="footer-contacto">
            <h4>Contacto</h4>
            <div className="footer-redes">
              <a href="https://instagram.com/nutricioncondelfi" target="_blank" rel="noreferrer">IG</a>
              <a href="https://wa.me/5492215732060" target="_blank" rel="noreferrer">WA</a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Nutrición con Delfi.</p>
        </div>
      </footer>
    </>
  );
}