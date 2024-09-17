import React from 'react';
import { Carousel } from 'react-bootstrap';

function Testimonials() {
  const testimonials = [
    {
      text: "Gracias a J&Y Asesoría, obtuve mi visa sin complicaciones.",
      author: "Cliente 1"
    },
    {
      text: "El servicio fue excelente y muy profesional.",
      author: "Cliente 2"
    },
    {
      text: "Recomiendo totalmente esta asesoría, son los mejores.",
      author: "Cliente 3"
    },
    {
      text: "Me ayudaron en cada paso del proceso, ¡fantástico!",
      author: "Cliente 4"
    },
    {
      text: "Una experiencia increíble, muy satisfecho con el resultado.",
      author: "Cliente 5"
    }
  ];

  return (
    <div className="testimonials-section">
      <h2 className="display-4 text-center">Testimonios</h2>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="testimonial-text text-center">
              <p>"{testimonial.text}"</p>
              <h5>- {testimonial.author}</h5>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;
