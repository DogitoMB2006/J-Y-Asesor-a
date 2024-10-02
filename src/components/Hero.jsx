import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import './hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimation(); // Inicializa el control de animación

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      controls.start({
        rotate: [0, -5, 5, -5, 5, 0],
        transition: { 
          duration: 0.5, 
          repeat: 5, 
          repeatType: "reverse" 
        }
      });
    } else {
      controls.stop(); // Detiene la animación cuando el modal se cierra
    }
  }, [isModalOpen, controls]);

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-title"
        >
          J&Y Visado! 
          <br />
          Oficina virtual.
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-subtitle"
        >
          <h4>ASESORÍA Y AYUDA PARA REALIZAR</h4>
          <h4>TU SOLICITUD DE VISA DE TURISTA.</h4>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-tagline"
        >
          FÁCIL, RÁPIDA Y ONLINE.
        </motion.h3>
        <motion.button 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hero-cta"
          onClick={toggleModal}
        >
          Solicita tu asesoría ahora
        </motion.button>
      </div>
      <div className="hero-image-container">
        <motion.img 
          src="https://i.ibb.co/VJ4Lj7V/b30f7fa8-8d1d-4435-950f-c137340f7cce.jpg" 
          alt="J&C Oficina Virtual" 
          className="hero-image"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Modal para WhatsApp */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h2>Contacta con nosotros</h2>
              <p>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos a través de WhatsApp.</p>
              <motion.a 
                href="https://wa.me/18496533224" 
                className="whatsapp-button"
                animate={controls} // Aplica la animación al botón
              >
                Escríbenos al WhatsApp
              </motion.a>
              <motion.button 
                className="modal-close"
                onClick={toggleModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                X
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
