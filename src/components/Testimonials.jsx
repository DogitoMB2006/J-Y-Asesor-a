import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: "esto es una prueba",
    author: "Usuario"
  },
  {
    text: "Gracias a su ayuda, obtuve mi visa de turista sin problemas. ¡Altamente recomendado!",
    author: "Usuario2"
  },
  {
    text: "El servicio personalizado y la atención al detalle de J&Y realmente marcan la diferencia.",
    author: "Usuario3"
  },
  {
    text: "Su conocimiento del proceso de visado es impresionante. Me sentí seguro y bien preparado para mi entrevista.",
    author: "usuario4"
  },
  {
    text: "La asesoría de VisaParaTurista.com fue fundamental para el éxito de mi solicitud de visa. ¡Gracias!",
    author: "usuario5"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2>Testimonios</h2>
      <div className="testimonial-slider">
  {testimonials.map((testimonial, index) => (
    <div
      key={index}
      className={`testimonial ${index === currentIndex ? 'active' : ''}`}
    >
      <div className="testimonial-content">
        <p className="testimonial-text">"{testimonial.text}"</p>
        <p className="testimonial-author">- {testimonial.author}</p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}

export default Testimonials;
