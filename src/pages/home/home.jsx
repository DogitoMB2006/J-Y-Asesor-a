import React from 'react';
import Hero from '../../components/Hero';
import Testimonials from '../../components/Testimonials';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-blue-100" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(79, 70, 229, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)`
            }}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir <span className="text-blue-600">J&Y Visado</span>?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Somos especialistas en asesoría de visas con más de 10 años de experiencia ayudando a dominicanos a cumplir su sueño americano
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Experiencia en Trámites
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nuestra experiencia en el diligenciamiento del formulario DS-160 para solicitud de visas de turismo a Estados Unidos, conocimiento del trámite de visado, y profesionalismo, ha permitido aumentar las probabilidades de aprobación a cada uno de nuestros clientes.
                </p>
                <div className="mt-6 flex items-center space-x-2 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Alta tasa de éxito</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  100% Virtual
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Somos de los primeros en ofrecer consultas y diligenciamientos virtuales, permitiéndote gestionar todo el proceso sin que tengas que moverte de tu casa o de tu trabajo. Evita perder tiempo y complicaciones.
                </p>
                <div className="mt-6 flex items-center space-x-2 text-sm text-blue-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Desde la comodidad de tu hogar</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Proceso Rápido
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Contamos con más de 10 años de experiencia en la gestión de solicitudes de visa de turismo a Estados Unidos. Nuestro proceso optimizado garantiza rapidez y eficiencia en cada paso.
                </p>
                <div className="mt-6 flex items-center space-x-2 text-sm text-yellow-600">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium">+10 años de experiencia</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-blue-200 text-sm lg:text-base">Visas Aprobadas</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10+</div>
                  <div className="text-blue-200 text-sm lg:text-base">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">95%</div>
                  <div className="text-blue-200 text-sm lg:text-base">Tasa de Éxito</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-200 text-sm lg:text-base">Soporte Virtual</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* About Us Section */}
        <section id="quienes-somos" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ¿Quiénes <span className="text-blue-600">somos</span>?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Conoce más sobre nuestro equipo de expertos y nuestra misión de ayudarte a obtener tu visa americana
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-20"></div>
                <img 
                  src="https://www.buhlerthomaslaw.com/wp-content/uploads/2017/06/Depositphotos_12892153_s-2015.jpg" 
                  alt="Formulario DS-160" 
                  className="relative w-full rounded-2xl shadow-2xl border-4 border-white"
                />
                
                {/* Floating cards */}
                <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">DS-160</div>
                  <div className="text-sm opacity-90">Especialistas</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">🇺🇸</div>
                  <div className="text-sm opacity-90">USA Visa</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">🎯</span>
                    </div>
                    Nuestra Misión
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    J&Y Visado proporciona un servicio integral de asesoramiento y apoyo para la gestión de la visa estadounidense de turismo. Contamos con un equipo de especialistas altamente calificados y con experiencia en los trámites de visa para ofrecer la orientación necesaria para la obtención de las visas B1 y B2, tanto individual como familiar o grupal.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    Nuestra Experiencia
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestros profesionales cuentan con amplios conocimientos en el manejo del formulario DS-160, así como en la preparación adecuada para la entrevista con el oficial consular.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">🏆</span>
                    </div>
                    Nuestros Resultados
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Gracias a nuestra experiencia y habilidades, hemos logrado aumentar significativamente las probabilidades de éxito en las solicitudes de nuestros clientes.
                  </p>
                </div>

                {/* Call to action */}
                <div className="pt-6">
                  <a 
                    href="https://wa.me/18496533224"
                    className="group relative inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-blue-400/50"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-6 h-6 mr-3 group-hover:bounce" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                      </svg>
                      Consulta gratuita ahora
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-left"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nuestro <span className="text-blue-600">Proceso</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Te guiamos paso a paso en todo el proceso de solicitud de tu visa americana
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">💬</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consulta Inicial</h3>
                <p className="text-gray-600 text-sm">Evaluamos tu caso y te explicamos el proceso completo</p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">📝</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparación DS-160</h3>
                <p className="text-gray-600 text-sm">Te ayudamos a completar perfectamente tu formulario</p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">🎯</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prep. Entrevista</h3>
                <p className="text-gray-600 text-sm">Te preparamos para tu entrevista en el consulado</p>
              </div>

              {/* Step 4 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">✅</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">¡Visa Aprobada!</h3>
                <p className="text-gray-600 text-sm">Celebramos contigo tu éxito y nueva aventura</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a 
                href="https://wa.me/18496533224"
                className="group relative inline-block bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-green-400/50"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-7 h-7 mr-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Comenzar mi proceso ahora
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;