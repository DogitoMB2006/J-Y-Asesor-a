import React from 'react';
import './home.css';
import Hero from '../../components/Hero';
import Testimonials from '../../components/Testimonials';

function Home() {
  return (
    <div className="home-container">

      <main>
        <Hero />
        <Testimonials />
        <section className="features">
  <div className="feature">
    <div className="feature-icon">
      <i className="fas fa-file-alt"></i>
    </div>
    <h3>Experiencia en Trámites</h3>
    <p>Nuestra experiencia en el diligenciamiento del formulario DS-160 para solicitud de visas de turismo a Estados Unidos, conocimiento del trámite de visado, y profesionalismo, ha permitido aumentar las probabilidades de aprobación a cada uno de nuestros clientes.</p>
  </div>
  <div className="feature">
    <div className="feature-icon">
      <i className="fas fa-robot"></i>
    </div>
    <h3>Innovación Tecnológica</h3>
    <p>Somos de los primeros en ofrecer consultas y diligenciamientos virtuales, permitiéndote gestionar todo el proceso sin que tengas que moverte de tu casa o de tu trabajo. Evita perder tiempo y complicaciones; contamos con más de 10 años de experiencia en la gestión de solicitudes de visa de turismo a Estados Unidos.</p>
  </div>
</section>


        <section className="quienes-somos" id="quienes-somos">
  <div className="quienes-somos-content">
    <h2>¿QUIÉNES SOMOS?</h2>
    <div className="quienes-somos-flex">
      <div className="quienes-somos-image">
        <img src="https://www.buhlerthomaslaw.com/wp-content/uploads/2017/06/Depositphotos_12892153_s-2015.jpg" alt="Formulario DS-160" />
      </div>
      <div className="quienes-somos-text">
        <p>J&Y Visado proporciona un servicio integral de asesoramiento y apoyo para la gestión de la visa estadounidense de turismo. Contamos con un equipo de especialistas altamente calificados y con experiencia en los trámites de visa para ofrecer la orientación necesaria para la obtención de las visas B1 y B2, tanto individual como familiar o grupal.
        </p>
        <p>Nuestros profesionales cuentan con amplios conocimientos en el manejo del formulario DS-160, así como en la preparación adecuada para la entrevista con el oficial cónsular.</p>
        <p>Gracias a nuestra experiencia y habilidades, hemos logrado aumentar significativamente las probabilidades de éxito en las solicitudes de nuestros clientes.</p>
      </div>
    </div>
  </div>
</section>

      </main>

     
    </div>
  );
}

export default Home;
