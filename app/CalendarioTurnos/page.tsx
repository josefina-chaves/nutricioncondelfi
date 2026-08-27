"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const PLANES_CATEGORIAS = [
  /* Ocultamos temporalmente el programa completo de 82.000
  {
    titulo: "Programas Completos",
    planes: [
      { 
        id: 'pack-3', 
        nombre: 'Pack de 3 Consultas', 
        desc: 'Online · 3 planes cada mes y medio (1h c/u)', 
        precio: 82000, 
        sena: 15000, 
        recomendado: true, 
        modalidad: 'virtual',
        tipoHorario: 'virtual'
      }
    ]
  },
  */
  {
    titulo: "Sesiones 1:1 (Individuales)",
    planes: [
      { 
        id: 'presencial-1', 
        nombre: 'Sesión 1:1 Presencial', 
        desc: 'Presencial · Incluye Antropometría (1h)', 
        precio: 70000, 
        sena: 15000, 
        recomendado: true, 
        modalidad: 'presencial',
        tipoHorario: 'presencial-antropometria'
      },
      { 
        id: 'presencial-seg', 
        nombre: 'Seguimiento Presencial', 
        desc: 'Presencial · Consulta de seguimiento (1h)', 
        precio: 55000, 
        sena: 15000, 
        recomendado: false, 
        modalidad: 'presencial',
        tipoHorario: 'presencial-seguimiento'
      },
      { 
        id: 'virtual-1', 
        nombre: 'Sesión 1:1 Virtual', 
        desc: 'Online · Por Google Meet (1 hora)', 
        precio: 60000, 
        sena: 15000, 
        recomendado: false, 
        modalidad: 'virtual',
        tipoHorario: 'virtual'
      },
      { 
        id: 'virtual-seg', 
        nombre: 'Seguimiento Virtual', 
        desc: 'Online · Consulta + ajustes en el plan (1h)', 
        precio: 45000, 
        sena: 15000, 
        recomendado: false, 
        modalidad: 'virtual',
        tipoHorario: 'virtual'
      },
    ]
  }
];

const DISPONIBILIDAD = {
  1: { 
    'virtual': ["08:00", "09:00", "10:00", "11:00"],
    'presencial-antropometria': ["16:00", "17:00", "18:00", "19:00"],
    'presencial-seguimiento': ["16:00", "17:00", "18:00", "19:00"],
  },
  2: { 
    'virtual': ["08:00", "09:00", "10:00", "11:00", "12:00"],
    'presencial-antropometria': ["14:30", "15:30", "16:30", "17:30"],
    'presencial-seguimiento': ["14:30", "15:30", "16:30", "17:30"],
  },
  3: { 
    'virtual': ["08:00", "09:00", "10:00", "11:00", "16:00", "17:00", "18:00", "19:00"],
    'presencial-antropometria': [],
    'presencial-seguimiento': [],
  },
  4: { 
    'virtual': ["16:00", "17:00", "18:00", "19:00"],
    'presencial-antropometria': ["08:00", "09:00", "10:00", "11:00"],
    'presencial-seguimiento': ["08:00", "09:00", "10:00", "11:00"],
  },
  5: { 
    'virtual': ["08:00", "09:00", "10:00", "11:00", "16:00", "17:00", "18:00", "19:00"],
    'presencial-antropometria': [],
    'presencial-seguimiento': [],
  },
  6: { 'virtual': [], 'presencial-antropometria': [], 'presencial-seguimiento': [] },
  0: { 'virtual': [], 'presencial-antropometria': [], 'presencial-seguimiento': [] }
};

const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const DIAS_SEMANA = ["LU", "MA", "MI", "JU", "VI", "SÁ", "DO"];

const FAQS = [
  {
    pregunta: "¿Cómo son las consultas?",
    respuesta: "La consulta dura aproximadamente 1 hora. Vamos a charlar sobre vos, tus hábitos, tu alimentación, rutina, actividad física y objetivos. Además, te voy a explicar algunos conceptos importantes para que entiendas el porqué de cada recomendación. Con toda esa información, después preparo tu plan de alimentación 100% personalizado y te lo envío."
  },
  {
    pregunta: "¿Las consultas son presenciales u online?",
    respuesta: "¡Ambas! Podés elegir realizar tu consulta de manera presencial o virtual, según lo que te quede más cómodo."
  },
  {
    pregunta: "¿Qué incluye la consulta?",
    respuesta: "Incluye tu plan de alimentación personalizado, material complementario y recetario. Además, vas a contar con seguimiento online para acompañarte y resolver las dudas que puedan surgir en el proceso."
  },
  {
    pregunta: "¿Cada cuánto son los controles?",
    respuesta: "Generalmente, los controles los realizamos cada 1 mes y medio. En cada encuentro evaluamos cómo venís, qué cambios hubo y hacemos los ajustes necesarios según tu progreso, objetivos y rutina."
  }
];

export default function CalendarioTurnosPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(PLANES_CATEGORIAS[0].planes[0]);
  
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const [currentMonthView, setCurrentMonthView] = useState(new Date()); 
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);  
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getAvailableSlots = (dayIndex: number, tipoHorario: string): string[] => {
    // @ts-ignore
    const horariosDelDia = DISPONIBILIDAD[dayIndex];
    if (!horariosDelDia) return [];
    // @ts-ignore
    return horariosDelDia[tipoHorario] || [];
  };

  const timeSlots: string[] = selectedDate ? getAvailableSlots(selectedDate.getDay(), selectedPlan.tipoHorario) : [];

  const year = currentMonthView.getFullYear();
  const month = currentMonthView.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let startDay = new Date(year, month, 1).getDay();
  startDay = startDay === 0 ? 6 : startDay - 1;

  const emptyDays = Array(startDay).fill(null); 
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handlePrevMonth = () => setCurrentMonthView(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentMonthView(new Date(year, month + 1, 1));

  const handleConfirmarTurno = () => {
    const numeroWhatsApp = "5492215732060"; 

    const fechaFormateada = selectedDate 
      ? `${selectedDate.getDate()} de ${MESES[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`
      : "";

    const ubicacionFinal = selectedPlan.modalidad === 'presencial'
      ? "Presencial · Consultorio (Calle 39 n° 16 y 17, La Plata)"
      : "Virtual · Videollamada por Google Meet";

    const duracion = '1 hora';

    const mensaje = `¡Hola! Ya agendé mi turno para ${selectedPlan.nombre}.

*Mis datos:*
- Nombre y Apellido: ${nombre}
- Teléfono: ${telefono}

*Detalles del turno:*
- Servicio: ${selectedPlan.nombre}
- Modalidad: ${ubicacionFinal}
- Duración estimada: ${duracion}
- Fecha: ${fechaFormateada}
- Horario: ${selectedTime} hs

*Pago de la seña:*
- Valor total: $${selectedPlan.precio.toLocaleString('es-AR')}
- Seña transferida: $${selectedPlan.sena.toLocaleString('es-AR')}
- Alias utilizado: Delfina.iraneta

¡Aquí abajo te adjunto el comprobante de la transferencia! Muchas gracias.`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const isFormValid = selectedDate && selectedTime && nombre.trim() !== "" && telefono.trim() !== "";

  return (
    <>
      <header className="navbar-header">
        <nav className="navbar-container">
          
          <Link href="/" className="navbar-brand">
            <img 
              src="/assets/hoja-1.png" 
              alt="Nutrición con Delfi Logo" 
              className="navbar-logo-hoja" 
            />
            <span className="navbar-titulo-marca">Nutrición con Delfi</span>
          </Link>

          <div className="navbar-derecha">
            <ul className="navbar-links">
              <li><Link href="/#sobre-mi">Sobre Mí</Link></li>
              <li><Link href="/CalendarioTurnos">Turnos</Link></li>
              <li><Link href="/CalendarioTurnos#faq">Preguntas frecuentes</Link></li>
            </ul>
            <Link href="/#contacto" className="boton-navbar-contacto">
              Contacto
            </Link>
          </div>

        </nav>
      </header>

      <main className="cal-main" style={{ paddingTop: '140px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="cal-container"
        >
          <div className="cal-header">
            <span className="cal-tag">— Reservar —</span>
            <h1 className="cal-title">
              Reservá tu <span>turno</span>
            </h1>
            <p className="cal-subtitle">
              Elegí el servicio, día y horario · confirmás la seña online
            </p>
          </div>

          <div className="cal-layout">
            
            {/* COLUMNA IZQUIERDA */}
            <div>
              <section className="cal-section">
                <span className="cal-section-title">Elegí tu plan</span>
                
                <div className="cal-dropdown-wrapper">
                  <div 
                    className="cal-dropdown-header-btn"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <div className="cal-dropdown-info">
                      <h3>{selectedPlan.nombre}</h3>
                      <p>{selectedPlan.desc}</p>
                    </div>
                    <div className="cal-dropdown-price-wrap">
                      <span>$ {selectedPlan.precio.toLocaleString('es-AR')}</span>
                      <svg
                        className={`cal-chevron ${isDropdownOpen ? 'open' : ''}`}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="cal-dropdown-menu"
                      >
                        <div className="cal-dropdown-scroll">
                          {PLANES_CATEGORIAS.map((categoria, catIndex) => (
                            <div key={catIndex}>
                              <div className="cal-dropdown-category-title">
                                {categoria.titulo}
                              </div>
                              
                              {categoria.planes.map((plan) => {
                                const isActive = selectedPlan.id === plan.id;
                                return (
                                  <div 
                                    key={plan.id}
                                    onClick={() => {
                                      setSelectedPlan(plan);
                                      setIsDropdownOpen(false);
                                      setSelectedDate(null);
                                      setSelectedTime(null);
                                    }}
                                    className={`cal-dropdown-item ${isActive ? 'active' : ''}`}
                                  >
                                    {plan.recomendado && (
                                      <span className="cal-badge-recomendado">Recomendado</span>
                                    )}
                                    <div className="cal-dropdown-info">
                                      <h3>{plan.nombre}</h3>
                                      <p>{plan.desc}</p>
                                    </div>
                                    <div className="cal-dropdown-price-wrap">
                                      <span>$ {plan.precio.toLocaleString('es-AR')}</span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>

              <section className="cal-section" style={{ zIndex: 1, position: 'relative' }}>
                <span className="cal-section-title">Elegí día</span>
                
                <div className="cal-month-header">
                  <h3>{MESES[month]} {year}</h3>
                  <div className="cal-nav-btns">
                    <button onClick={handlePrevMonth}>‹</button>
                    <button onClick={handleNextMonth}>›</button>
                  </div>
                </div>

                <div className="cal-grid">
                  {DIAS_SEMANA.map((day) => (
                    <div key={day} className="cal-weekday">{day}</div>
                  ))}
                  
                  {emptyDays.map((_, i) => (
                    <div key={`empty-${i}`}></div>
                  ))}

                  {days.map((day) => {
                    const cellDate = new Date(year, month, day);
                    const isPast = cellDate < today;
                    
                    const dayIndex = cellDate.getDay();
                    const hasAvailableSlots = getAvailableSlots(dayIndex, selectedPlan.tipoHorario).length > 0;
                    const isDisabled = isPast || !hasAvailableSlots;
                    
                    const isSelected = selectedDate?.getDate() === day && 
                                       selectedDate?.getMonth() === month && 
                                       selectedDate?.getFullYear() === year;

                    return (
                      <button
                        key={day}
                        disabled={isDisabled}
                        onClick={() => {
                          setSelectedDate(cellDate);
                          setSelectedTime(null);
                        }}
                        className={`cal-day-btn ${isSelected ? "cal-day-active" : "cal-day-inactive"}`}
                        style={isDisabled ? { opacity: 0.25, cursor: 'not-allowed', backgroundColor: 'transparent' } : {}}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* COLUMNA DERECHA */}
            <div>
              <section className="cal-section">
                <span className="cal-section-title">Tus Datos</span>
                <div className="cal-inputs-wrap">
                  <input 
                    type="text" 
                    placeholder="Nombre y Apellido" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="cal-input"
                  />
                  <input 
                    type="tel" 
                    placeholder="Teléfono de contacto" 
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="cal-input"
                  />
                </div>
              </section>

              <section className="cal-section">
                <span className="cal-section-title">
                  Horarios — {selectedDate ? `${selectedDate.getDate()} de ${MESES[selectedDate.getMonth()]}` : 'Seleccioná un día'}
                </span>
                
                {selectedDate && timeSlots.length === 0 && (
                   <p style={{ color: '#9E8675', fontSize: '0.9rem', fontStyle: 'italic' }}>
                     No hay turnos disponibles para esta modalidad en el día seleccionado.
                   </p>
                )}

                <div className="cal-times-grid">
                  {timeSlots.map((time: string) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`cal-time-btn ${isSelected ? "cal-time-active" : "cal-time-inactive"}`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* SECCIÓN DINÁMICA: UBICACIÓN Y PAGO */}
              <section className="cal-section" style={{ marginTop: '2rem' }}>
                <span className="cal-section-title">Ubicación y Pago</span>
                <div className="cal-plan-card" style={{ cursor: 'default', backgroundColor: '#F7EFE8', borderColor: '#DDBEA9', flexDirection: 'column', alignItems: 'flex-start', gap: '15px' }}>
                  
                  <div style={{ width: '100%', borderBottom: '1px solid #EAD8C8', paddingBottom: '12px' }}>
                    <h3 style={{ fontSize: '0.95rem', color: '#A67C65', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Lugar y Duración</h3>
                    <p style={{ color: '#4A3B32', fontWeight: '600' }}>
                      {selectedPlan.modalidad === 'virtual' 
                        ? '💻 Online (Google Meet) · 1 hora' 
                        : '📍 Presencial: Calle 39 nº 16 y 17, La Plata · 1 hora'}
                    </p>
                  </div>

                  <div style={{ width: '100%' }}>
                    <h3 style={{ fontSize: '0.95rem', color: '#A67C65', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Datos para transferir la seña</h3>
                    <p style={{ color: '#4A3B32' }}>Alias: <strong>Delfina.iraneta</strong></p>
                    <p style={{ color: '#4A3B32' }}>Seña requerida: <strong>$ 15.000</strong> (Valor total: ${selectedPlan.precio.toLocaleString('es-AR')})</p>
                  </div>

                </div>
              </section>

              <div>
                <button 
                  onClick={handleConfirmarTurno}
                  disabled={!isFormValid}
                  className={`cal-submit-btn ${isFormValid ? "cal-submit-active" : "cal-submit-inactive"}`}
                >
                  Enviar comprobante por WhatsApp ↗
                </button>
                
                <p className="cal-disclaimer">
                  Al hacer clic, se abrirá tu WhatsApp para enviar el comprobante de la transferencia. <strong>Tu turno quedará confirmado únicamente al recibir la foto del comprobante.</strong> Cancelaciones o reprogramaciones con 24 hs hábiles de anticipación.
                </p>
              </div>
            </div>

          </div>

          {/* =========================================
              SECCIÓN PREGUNTAS FRECUENTES (FAQ)
              ========================================= */}
          <div className="seccion-faq-turnos" id="faq">
            <div className="faq-turnos-header">
              <div className="faq-tag-wrapper">
                <span className="faq-numero">08</span>
                <span className="faq-linea"></span>
                <span className="faq-tag">PREGUNTAS</span>
              </div>
              <h2 className="faq-titulo">Antes de la primera consulta.</h2>
              <p className="faq-subtitulo">
                Las dudas más comunes, respondidas con claridad.
              </p>
            </div>

            <div className="faq-grid-turnos">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="faq-item-turnos">
                    <button 
                      type="button"
                      className="faq-btn-turnos"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="faq-txt-turnos">{faq.pregunta}</span>
                      <span className={`faq-plus-turnos ${isOpen ? 'open' : ''}`}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="faq-ans-turnos"
                        >
                          <p>{faq.respuesta}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </main>
    </>
  );
}