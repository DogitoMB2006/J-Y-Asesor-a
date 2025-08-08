import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const heroTexts = [
    "Tu visa americana está más cerca de lo que piensas",
    "Especialistas en formulario DS-160 con 95% de éxito",
    "+10 años ayudando dominicanos a viajar a USA",
    "Proceso 100% virtual desde tu hogar",
    "Consulta Ahora - ¡Empieza hoy mismo!"
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentFullText = heroTexts[currentTextIndex];
    let timeout;

    if (!isDeleting && displayText !== currentFullText) {
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
      }, Math.random() * 150 + 50);
    } else if (!isDeleting && displayText === currentFullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayText !== '') {
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
      }, Math.random() * 75 + 30);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
      timeout = setTimeout(() => {}, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, heroTexts]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="hidden sm:block absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="hidden sm:block absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
          <div className="hidden md:block">
            {[...Array(12)].map((_, i) => (
              <div
                key={`md-${i}`}
                className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            
            {/* Content section */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 animate-fadeInUp">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Oficina Virtual Certificada
              </div>

              {/* Title */}
              <div className="space-y-4 animate-fadeInUp delay-200">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    J&Y Visado
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent font-extrabold">
                    Asesoría de Visas USA
                  </span>
                </h1>
              </div>
              
              {/* Typewriter effect */}
              <div className="h-20 flex items-center justify-center lg:justify-start animate-fadeInUp delay-300">
                <div className="relative">
                  <p className="text-lg sm:text-xl text-blue-100 font-medium min-h-[3rem] flex items-center">
                    <span className="inline-block min-w-0">
                      {displayText}
                    </span>
                    <span className={`ml-1 inline-block w-0.5 h-6 bg-yellow-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
                  </p>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg blur-sm"></div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 animate-fadeInUp delay-500">
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm text-blue-200">Visas Aprobadas</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-400">95%</div>
                  <div className="text-sm text-blue-200">Tasa de Éxito</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-400">10+</div>
                  <div className="text-sm text-blue-200">Años de Exp.</div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-6 animate-fadeInUp delay-400">
                {/* Primary CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://wa.me/18496533224"
                    className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/30 hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                    </svg>
                    <span className="relative z-10">Comenzar Mi Proceso</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  
                  <button 
                    onClick={toggleModal}
                    className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Más Información</span>
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-center lg:justify-start gap-6 text-blue-100 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Respuesta inmediata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Sin compromiso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>100% confidencial</span>
                  </div>
                </div>
              </div>

              {/* Feature badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fadeInUp delay-600">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🇺🇸</div>
                  <div className="text-white font-semibold text-sm">Visa USA</div>
                  <div className="text-blue-200 text-xs">B1/B2 Tourism</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">✅</div>
                  <div className="text-white font-semibold text-sm">95% Aprobación</div>
                  <div className="text-blue-200 text-xs">Alta tasa de éxito</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <div className="text-white font-semibold text-sm">Proceso Rápido</div>
                  <div className="text-blue-200 text-xs">Respuesta inmediata</div>
                </div>
              </div>

              {/* Additional info badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-blue-200 text-sm">
                <div className="flex items-center space-x-2 bg-white/5 rounded-full px-3 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>100% Virtual</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 rounded-full px-3 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                  <span>Proceso Seguro</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 rounded-full px-3 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400"></div>
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </div>

            {/* Image section */}
            <div className="flex justify-center lg:justify-end animate-fadeInUp delay-700">
              <div className="relative max-w-md lg:max-w-lg w-full">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl"></div>
                  <img 
                    src="https://i.ibb.co/23m00ZSD/Whats-App-Image-2025-08-06-at-12-33-42-PM.jpg" 
                    alt="J&Y Visado - Asesoría de Visas USA" 
                    className="relative w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700 border-2 border-white/20 ring-4 ring-white/10"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator (tap to go to servicios) */}
        <button
          onClick={() => scrollToSection('servicios')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
          aria-label="Ver servicios"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 group-hover:bg-yellow-300 transition-colors"></div>
          </div>
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={toggleModal}
        >
          <div 
            className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-slideInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
              onClick={toggleModal}
            >
              ✕
            </button>
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  ¡Consulta Ahora!
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Obtén asesoría personalizada para tu visa de turista a Estados Unidos. 
                  Nuestros expertos te ayudarán en cada paso del proceso.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/18496533224" 
                  className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                    </svg>
                    <span>Contactar por WhatsApp</span>
                  </div>
                </a>
                
                <div className="text-center text-sm text-gray-500">
                  📞 +1 (849) 653-3224 • Respuesta inmediata
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </>
  );
};

export default Hero;