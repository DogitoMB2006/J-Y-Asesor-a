import React from 'react';
import './home.css';
import Hero from '../../components/Hero';
import Testimonials from '../../components/Testimonials';

function Home() {
  return (
    <div className="home-container">
      <header>
        <nav>
          <ul>
            <li><a href="#inicio">INICIO</a></li>
            <li><a href="#quienes-somos">QUIENES SOMOS</a></li>
            <li><a href="#nuestros-servicios">SERVICIOS</a></li>
            <li><a href="#testimonios">TESTIMONIOS</a></li>
            <li><a href="#contactanos">CONTACTO</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <Testimonials />
        <section className="features">
          <div className="feature">
            <p>Nuestra experiencia en el diligenciamiento del formulario DS-160 para solicitud de visas de turismo a Estados Unidos, conocimiento del trámite de visado, y profesionalismo, ha permitido aumentar las probabilidades de aprobación a cada uno de nuestros clientes.</p>
          </div>
          <div className="feature">
            <p>Somos líderes en innovación en América Latina, al integrar inteligencia artificial para analizar y mejorar tus posibilidades de éxito en la solicitud de visa de turismo a Estados Unidos.</p>
          </div>
        </section>

        <section className="video-section">
          {/* Add video component here */}
        </section>

        <section className="cta-section">
          <h3>¡Nuestro compromiso es ofrecerte soluciones efectivas para cualquier consulta o inquietud que tengas!</h3>
          <button className="whatsapp-button">CONTÁCTANOS VÍA WHATSAPP</button>
        </section>
        
        <section className="quienes-somos" id="quienes-somos">
          <div className="quienes-somos-content">
            <h2>¿QUIÉNES SOMOS?</h2>
            <div className="quienes-somos-flex">
              <div className="quienes-somos-image">
                <img src="https://www.buhlerthomaslaw.com/wp-content/uploads/2017/06/Depositphotos_12892153_s-2015.jpg" alt="Formulario DS-160" />
              </div>
              <div className="quienes-somos-text">
                <p>VisaParaTurista.com ofrece un servicio completo de asesoría y acompañamiento para la obtención de la visa americana de turismo. Tenemos un equipo de expertos altamente calificados y con experiencia en trámites de visado para brindar la orientación necesaria para la obtención de la visa B1 Y B2, individual, familiar y/o grupal.</p>
                <p>Nuestros profesionales tienen amplios conocimientos en el diligenciamiento del formulario DS-160, así como en el perfilamiento personalizado para la entrevista con el oficial consular de cada uno de nuestros clientes.</p>
                <p>Gracias a nuestra experiencia y conocimiento, hemos logrado aumentar significativamente las probabilidades de aprobación de nuestros clientes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}

export default Home;
