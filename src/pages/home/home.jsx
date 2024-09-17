import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import { Modal, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const canvasRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true); // Estado para controlar el blur

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const animateArrow = () => {
      let y = 20;
      let direction = 1;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(50, y);
        ctx.lineTo(100, y);
        ctx.lineTo(75, y + 25);
        ctx.closePath();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        y += direction;
        if (y > 30 || y < 20) direction *= -1;
        requestAnimationFrame(animate);
      };
      animate();
    };

    animateArrow();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsBlurred(false); // Quitar el blur al hacer scroll
      } else {
        setIsBlurred(true); // Volver a aplicar el blur
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="home-container">
      <div className="top-sections">
        <div className="container">
          <h2 className="display-4 text-center title-services">Ofrecemos Soluciones Integrales</h2>
          <div className="services-card">
            <div className="card animated-card">
              <div className="card-body text-center">
                <h5 className="card-title">Preparación de Documentos</h5>
                <ul>
                  <li>Revisión de documentos</li>
                  <li>Asesoramiento sobre requisitos</li>
                  <li>Formulario DS-160: Completamos y enviamos el formulario en línea</li>
                  <li>Citas en el VAC y la Embajada</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="display-4 text-center title-why-choose-us">Razones para Confiar en Nosotros</h2>
          <p className="text-center">Somos expertos en brindar la mejor asesoría para obtener tu visa de turista a los Estados Unidos.</p>
          <Testimonials />
        </div>
      </div>

      <div className={`main-content ${isBlurred ? 'blur' : ''}`} style={{ backgroundColor: '#000b82', padding: '20px 0' }}>
        <h2 className="display-4 text-center text-white">Contáctanos</h2>
        <div className="contact-container d-flex flex-column align-items-center justify-content-center mx-auto p-4">
          <img src="https://media.discordapp.net/attachments/1274216273823268926/1285280500600274996/4ed0280c-5cdc-4584-adf6-ffcea6660e6a.jpg?ex=66e9b23e&is=66e860be&hm=3ecb1fb172adcf6cb33b9afd13ec9f20d8c2531684f25664ae927c36b3c29754&=&format=webp&width=638&height=638" alt="Imagen de contacto" className="contact-image img-fluid rounded mb-4"/>
          <div className="canvas-container mb-3">
            <canvas ref={canvasRef} width={150} height={70}></canvas>
          </div>
          <Button variant="success" onClick={handleShowModal}>
            Contactar por WhatsApp
          </Button>

          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Contacto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Teléfono: +1 234 567 890</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

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
      <h2 className="display-4 text-center testimonial-title">Testimonios</h2>
      <div className="testimonial-card">
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
    </div>
  );
}

export default Home;
