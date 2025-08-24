import React from 'react';
import './SobreMi.css';

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0B2A3D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0B2A3D]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#0B2A3D]/10 rounded-full text-[#0B2A3D] text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#0B2A3D] rounded-full mr-2"></span>
            Tu Asesor Personal
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0B2A3D] mb-6 font-inter">
            Sobre <span className="text-[#0B2A3D]">Mí</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conoce a tu asesor experto en visas americanas con más de una década de experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {/* Nombre y Rol con jerarquía clara */}
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-4xl lg:text-5xl font-bold text-[#0B2A3D] mb-3">
                Jesús Manuel Reyes de la Cruz
              </h3>
              <p className="text-xl text-[#0B2A3D]/80 font-medium">
                Tu Asesor Personal de Visas
              </p>
            </div>

            {/* Tarjetas mejoradas con mejor contraste y iconos consistentes */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B2A3D] to-[#0F4054] rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B2A3D]">Mi Experiencia</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Especialista certificado con más de 10 años ayudando a dominicanos a cumplir su sueño de viajar a Estados Unidos.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B2A3D] to-[#0F4054] rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B2A3D]">Mi Especialidad</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Formulario DS-160 y preparación integral para entrevistas consulares con enfoque personalizado.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B2A3D] to-[#0F4054] rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B2A3D]">Mi Compromiso</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Brindarte la mejor asesoría posible para maximizar tus posibilidades de obtener la visa americana.
                </p>
              </div>
            </div>

            {/* Botón principal más prominente */}
            <div className="pt-6">
              <a 
                href="https://wa.me/18496533224"
                className="group inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
                Consulta conmigo ahora
              </a>
            </div>
          </div>

          {/* Foto mejorada con mejor integración */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-[#0B2A3D]/20 to-[#0F4054]/20 rounded-full blur-2xl"></div>
            
                         {/* Foto circular con marco sutil y mejoras profesionales */}
             <div className="relative">
                               <div className="w-96 h-96 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-white photo-container">
                  <img 
                    src="/sobremi.jpg" 
                    alt="Jesús Manuel Reyes de la Cruz - Asesor de Visas" 
                    className="filter-enhancement"
                  />
                 {/* Overlay sutil para mejor legibilidad del texto */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/10 via-transparent to-transparent"></div>
                 
                 {/* Overlay de mejora profesional */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#0B2A3D]/5"></div>
               </div>
              
              {/* Badges flotantes mejorados */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#0B2A3D] to-[#0F4054] text-white p-4 rounded-2xl shadow-xl animate-float">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm opacity-90">Años Exp.</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#0B2A3D] to-[#0F4054] text-white p-4 rounded-2xl shadow-xl animate-float delay-500">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Éxito</div>
              </div>

              {/* Etiqueta de asesor personal */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0B2A3D]/95 to-[#0F4054]/95 backdrop-blur-sm text-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-lg font-bold">Tu Asesor Personal</div>
                  <div className="text-sm opacity-90">Jesús Manuel Reyes de la Cruz</div>
                </div>
              </div>
            </div>

            {/* Botón secundario debajo de la foto */}
            <div className="text-center lg:text-left mt-8">
              <a 
                href="https://wa.me/18496533224"
                className="group inline-flex items-center bg-gradient-to-r from-[#0B2A3D] via-[#0D3548] to-[#0F4054] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-[#0B2A3D]/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-500 { animation-delay: 0.5s; }

        /* Mejoras profesionales para la foto */
        .filter-enhancement {
          filter: 
            brightness(1.1) 
            contrast(1.15) 
            saturate(1.05) 
            sepia(0.02);
          transition: filter 0.3s ease-in-out;
        }

        .filter-enhancement:hover {
          filter: 
            brightness(1.15) 
            contrast(1.2) 
            saturate(1.08) 
            sepia(0.03);
        }

        /* Efecto de enfoque profesional */
        .filter-enhancement::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            transparent 30%,
            rgba(11, 42, 61, 0.05) 70%
          );
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default SobreMi;
