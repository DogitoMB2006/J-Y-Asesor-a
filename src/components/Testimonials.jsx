import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    text: "Excelente servicio. Me ayudaron paso a paso con mi solicitud de visa y todo salió perfecto. Muy profesionales y confiables. El proceso fue súper claro y me sentí acompañada en todo momento.",
    author: "María González",
    rating: 5,
    location: "Santo Domingo",
    avatar: "MG",
    profession: "Enfermera",
    bgColor: "from-pink-500 to-rose-500"
  },
  {
    text: "Gracias a su ayuda, obtuve mi visa de turista sin problemas. El proceso fue muy claro y me sentí acompañado en todo momento. ¡Altamente recomendado! Su conocimiento es impresionante.",
    author: "Carlos Rodríguez",
    rating: 5,
    location: "Santiago",
    avatar: "CR",
    profession: "Ingeniero",
    bgColor: "from-blue-500 to-cyan-500"
  },
  {
    text: "El servicio personalizado y la atención al detalle de J&Y realmente marcan la diferencia. Muy satisfecha con los resultados. Me prepararon perfectamente para la entrevista.",
    author: "Ana Martínez",
    rating: 5,
    location: "La Vega",
    avatar: "AM",
    profession: "Doctora",
    bgColor: "from-green-500 to-emerald-500"
  },
  {
    text: "Su conocimiento del proceso de visado es impresionante. Me sentí seguro y bien preparado para mi entrevista. Definitivamente los recomiendo a todos mis amigos y familiares.",
    author: "José Fernández",
    rating: 5,
    location: "San Pedro de Macorís",
    avatar: "JF",
    profession: "Contador",
    bgColor: "from-purple-500 to-violet-500"
  },
  {
    text: "La asesoría de J&Y fue fundamental para el éxito de mi solicitud de visa. Proceso 100% virtual y muy eficiente. ¡Gracias por hacer realidad mi sueño americano!",
    author: "Luisa Pérez",
    rating: 5,
    location: "Puerto Plata",
    avatar: "LP",
    profession: "Empresaria",
    bgColor: "from-orange-500 to-red-500"
  },
  {
    text: "Increíble experiencia con J&Y Visado. Su metodología es muy efectiva y el trato es excepcional. Obtuve mi visa en el primer intento gracias a su excelente preparación.",
    author: "Roberto Silva",
    rating: 5,
    location: "San Cristóbal",
    avatar: "RS",
    profession: "Arquitecto",
    bgColor: "from-indigo-500 to-purple-500"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isVisible, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      id="testimonials" 
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
 
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 backdrop-blur-sm rounded-full text-yellow-400 text-sm font-medium mb-6 border border-yellow-400/20">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
            Testimonios Reales
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Historias reales de personas que han confiado en nosotros para obtener su visa de turista americana
          </p>
        </div>

      
        <div className="relative mb-16">
     
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl mx-auto max-w-4xl overflow-hidden">
                 
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
                    
           
                    <div className="text-yellow-400 text-6xl mb-6 text-center leading-none">
                      "
                    </div>
                    
                
                    <blockquote className="text-white text-lg lg:text-xl leading-relaxed text-center mb-8 font-light italic relative">
                      {testimonial.text}
                    </blockquote>
                    

                    <div className="flex justify-center space-x-1 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-6 h-6 text-yellow-400 fill-current transform hover:scale-110 transition-transform duration-200" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4">
              
                      <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      
               
                      <div className="text-center">
                        <div className="font-bold text-yellow-400 text-xl">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-300 text-sm">
                          {testimonial.profession}
                        </div>
                        <div className="text-gray-400 text-xs flex items-center justify-center mt-1">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {testimonial.location}
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-6 right-6 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-semibold flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Visa Aprobada
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 transition-all duration-300 group hover:scale-110"
          >
            <svg className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 transition-all duration-300 group hover:scale-110"
          >
            <svg className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>


        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 p-4 rounded-2xl transition-all duration-300 border-2 ${
                index === currentIndex 
                  ? 'bg-white/20 border-yellow-400 scale-105' 
                  : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/40'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.avatar}
                </div>
                <div className="text-left hidden sm:block">
                  <div className={`font-semibold text-sm transition-colors duration-300 ${
                    index === currentIndex ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 text-xs">{testimonial.location}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative w-12 h-1 bg-white/20 rounded-full overflow-hidden"
            >
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-full' : 'w-0'
                }`}
              ></div>
            </button>
          ))}
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300">Clientes Satisfechos</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-gray-300">Tasa de Aprobación</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
            <div className="text-gray-300">Años de Experiencia</div>
          </div>
        </div>

 
        <div className="text-center">
          <p className="text-gray-300 mb-8 text-lg">
            ¿Listo para ser nuestro próximo caso de éxito?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/18496533224"
              className="group relative bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
                Comienza tu proceso
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </a>

            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Ver más testimonios
              </span>
            </button>
          </div>
        </div>
      </div>

    
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Testimonials;