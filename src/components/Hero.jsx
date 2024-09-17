import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-title"
        >
          J&Y Oficina Virtual
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-subtitle"
        >
          <h2>ASESORÍA Y AYUDA PARA REALIZAR</h2>
          <h2>TU SOLICITUD DE VISA</h2>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-tagline"
        >
          FÁCIL, RÁPIDA Y ONLINE
        </motion.h3>
        <motion.button 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hero-cta"
        >
          Solicita tu asesoría ahora
        </motion.button>
      </div>
      <div className="hero-image-container">
        <motion.img 
          src="https://media.discordapp.net/attachments/1274216273823268926/1285417797513510922/7837668a-614b-495f-b99c-3fd6f91455ef.jpg?ex=66ea321c&is=66e8e09c&hm=afd91f179f2ba87600f8f8ecd5ad175aef2dfc09cb2cab019526e0a5adc21d18&=&format=webp&width=638&height=638" 
          alt="J&C Oficina Virtual" 
          className="hero-image"
          whileHover={{ scale: 1.05 }}
          onClick={toggleModal}
        />
      </div>
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
              <img 
                src="https://media.discordapp.net/attachments/1274216273823268926/1285417797513510922/7837668a-614b-495f-b99c-3fd6f91455ef.jpg?ex=66ea321c&is=66e8e09c&hm=afd91f179f2ba87600f8f8ecd5ad175aef2dfc09cb2cab019526e0a5adc21d18&=&format=webp&width=638&height=638" 
                alt="J&C Oficina Virtual" 
                className="modal-image"
              />
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