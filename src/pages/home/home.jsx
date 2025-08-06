import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero';
import Testimonials from '../../components/Testimonials';

const services = [
  {
    icon: "📝",
    title: "Formulario DS-160",
    description: "Te ayudamos a completar perfectamente tu formulario DS-160 con toda la información correcta y sin errores.",
    features: ["Revisión completa", "Corrección de errores", "Optimización de respuestas"],
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: "🎯",
    title: "Preparación de Entrevista",
    description: "Preparación integral para tu entrevista consular con simulacros y consejos estratégicos.",
    features: ["Simulacro de entrevista", "Preguntas frecuentes", "Estrategias de respuesta"],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: "📋",
    title: "Revisión de Documentos",
    description: "Análisis y verificación de todos tus documentos para asegurar que cumplan los requisitos.",
    features: ["Lista de verificación", "Validación completa", "Recomendaciones"],
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: "💻",
    title: "Consulta Virtual",
    description: "Asesoría personalizada 100% online desde la comodidad de tu hogar u oficina.",
    features: ["Sesiones personalizadas", "Soporte continuo", "Horarios flexibles"],
    gradient: "from-orange-500 to-red-500"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description: "Evaluamos tu perfil y explicamos el proceso completo paso a paso.",
    icon: "💬",
    color: "blue"
  },
  {
    number: "02", 
    title: "Preparación DS-160",
    description: "Te guiamos en el llenado correcto del formulario de solicitud.",
    icon: "📝",
    color: "green"
  },
  {
    number: "03",
    title: "Documentación",
    description: "Verificamos y organizamos todos los documentos requeridos.",
    icon: "📋",
    color: "purple"
  },
  {
    number: "04",
    title: "Entrevista Exitosa",
    description: "Te preparamos para la entrevista y celebramos tu aprobación.",
    icon: "🎉",
    color: "yellow"
  }
];

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (inView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        
        if (progress < 1) {
          setCount(Math.floor(progress * end));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <div id={`counter-${end}`} className="text-3xl lg:text-4xl font-bold text-white">
      {count}{suffix}
    </div>
  );
};

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="servicios" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Nuestros Servicios
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">J&Y Visado</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos especialistas en asesoría de visas con más de 10 años de experiencia 
              ayudando a dominicanos a cumplir su sueño americano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>
                
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <AnimatedCounter end={500} suffix="+" />
                <div className="text-blue-200 text-sm lg:text-base">Visas Aprobadas</div>
              </div>
              <div className="space-y-2">
                <AnimatedCounter end={10} suffix="+" />
                <div className="text-blue-200 text-sm lg:text-base">Años de Experiencia</div>
              </div>
              <div className="space-y-2">
                <AnimatedCounter end={95} suffix="%" />
                <div className="text-blue-200 text-sm lg:text-base">Tasa de Éxito</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm lg:text-base">Soporte Virtual</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="quienes-somos" className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Conoce Nuestro Equipo
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              ¿Quiénes <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">somos</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conoce más sobre nuestro equipo de expertos y nuestra misión de ayudarte a obtener tu visa americana
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    J&Y Visado proporciona un servicio integral de asesoramiento y apoyo para la gestión de la visa estadounidense de turismo. Contamos con un equipo de especialistas altamente calificados.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Nuestra Experiencia</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Más de 10 años de experiencia en el manejo del formulario DS-160 y preparación para entrevistas consulares con alta tasa de éxito.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 border border-yellow-100 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🏆</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Nuestros Resultados</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    95% de tasa de aprobación gracias a nuestra metodología probada y atención personalizada a cada cliente.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="https://wa.me/18496533224"
                  className="group inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                  </svg>
                  Consulta gratuita ahora
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl"></div>
              <img 
                src="https://www.buhlerthomaslaw.com/wp-content/uploads/2017/06/Depositphotos_12892153_s-2015.jpg" 
                alt="Formulario DS-160" 
                className="relative w-full rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-lg animate-float">
                <div className="text-2xl font-bold">DS-160</div>
                <div className="text-sm opacity-90">Especialistas</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-2xl shadow-lg animate-float delay-500">
                <div className="text-2xl font-bold">🇺🇸</div>
                <div className="text-sm opacity-90">USA Visa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Proceso Simplificado
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nuestro <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Proceso</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Te guiamos paso a paso en todo el proceso de solicitud de tu visa americana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
                )}
                
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center group-hover:scale-105">
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${
                    step.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    step.color === 'green' ? 'from-green-500 to-green-600' :
                    step.color === 'purple' ? 'from-purple-500 to-purple-600' :
                    'from-yellow-500 to-orange-500'
                  } rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                    {step.number}
                  </div>
                  
                  <div className="mb-6 mt-4">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${
                      step.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      step.color === 'green' ? 'from-green-500 to-green-600' :
                      step.color === 'purple' ? 'from-purple-500 to-purple-600' :
                      'from-yellow-500 to-orange-500'
                    } rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://wa.me/18496533224"
              className="group inline-flex items-center bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Comenzar mi proceso ahora
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
}

export default Home;