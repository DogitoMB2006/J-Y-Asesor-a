import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimation();

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
      controls.stop();
    }
  }, [isModalOpen, controls]);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-blue-900" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">J&Y Visado!</span>
                <span className="block text-yellow-400 text-3xl sm:text-4xl lg:text-5xl mt-2">
                  Oficina Virtual
                </span>
              </h1>
              
              <div className="space-y-2 mt-6">
                <p className="text-xl sm:text-2xl text-gray-200 font-semibold">
                  ASESORÍA Y AYUDA PARA REALIZAR
                </p>
                <p className="text-xl sm:text-2xl text-gray-200 font-semibold">
                  TU SOLICITUD DE VISA DE TURISTA
                </p>
              </div>
              
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-3 rounded-full font-bold text-xl mt-6 shadow-lg">
                FÁCIL, RÁPIDA Y ONLINE
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={toggleModal}
                className="group relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-yellow-300/50"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Solicita tu asesoría ahora
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </button>
              
              <a 
                href="https://wa.me/18496533224"
                className="group relative bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-center overflow-hidden border-2 border-green-400/50"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3 group-hover:bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                  </svg>
                  WhatsApp Directo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-300 text-sm"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>+10 años de experiencia</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>100% Virtual</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Alta tasa de aprobación</span>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl blur-lg opacity-20"></div>
              <img 
                src="https://i.ibb.co/JHvZSsj/460c85c8-80db-4fee-b446-afac93ec5375.jpg" 
                alt="J&Y Oficina Virtual" 
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white/20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <motion.div 
              className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
                onClick={toggleModal}
              >
                ✕
              </button>
              
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto text-2xl">
                  💬
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800">
                  ¡Contacta con nosotros!
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  Si tienes alguna pregunta o necesitas más información sobre nuestros servicios de asesoría de visas, no dudes en contactarnos a través de WhatsApp.
                </p>
                
                <motion.a 
                  href="https://wa.me/18496533224" 
                  className="group relative inline-block bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-green-400/50"
                  animate={controls}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-3 group-hover:bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                    </svg>
                    Escríbenos al WhatsApp
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-left"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;