import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Excelente servicio. Me ayudaron paso a paso con mi solicitud de visa y todo salió perfecto. Muy profesionales y confiables.",
    author: "María González",
    rating: 5,
    location: "Santo Domingo"
  },
  {
    text: "Gracias a su ayuda, obtuve mi visa de turista sin problemas. El proceso fue muy claro y me sentí acompañada en todo momento. ¡Altamente recomendado!",
    author: "Carlos Rodríguez",
    rating: 5,
    location: "Santiago"
  },
  {
    text: "El servicio personalizado y la atención al detalle de J&Y realmente marcan la diferencia. Muy satisfecha con los resultados.",
    author: "Ana Martínez",
    rating: 5,
    location: "La Vega"
  },
  {
    text: "Su conocimiento del proceso de visado es impresionante. Me sentí seguro y bien preparado para mi entrevista. Definitivamente los recomiendo.",
    author: "José Fernández",
    rating: 5,
    location: "San Pedro de Macorís"
  },
  {
    text: "La asesoría de J&Y fue fundamental para el éxito de mi solicitud de visa. Proceso 100% virtual y muy eficiente. ¡Gracias!",
    author: "Luisa Pérez",
    rating: 5,
    location: "Puerto Plata"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-slate-900" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                           linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
                           linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%)`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 0 50px, 50px -50px, -50px 0px'
        }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros <span className="text-yellow-400">clientes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Testimonios reales de personas que han confiado en nosotros para obtener su visa de turista
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 lg:p-12 shadow-2xl mx-auto max-w-4xl">
                    {/* Quote icon */}
                    <div className="text-yellow-400 text-4xl mb-6 text-center">
                      "
                    </div>
                    
                    {/* Testimonial text */}
                    <blockquote className="text-white text-lg lg:text-xl leading-relaxed text-center mb-8 italic">
                      {testimonial.text}
                    </blockquote>
                    
                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    
                    {/* Author info */}
                    <div className="text-center">
                      <div className="font-semibold text-yellow-400 text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-300 text-sm mt-1">
                        📍 {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all duration-200 group"
          >
            <svg className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all duration-200 group"
          >
            <svg className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6 text-lg">
            ¿Listo para ser nuestro próximo caso de éxito?
          </p>
          <a 
            href="https://wa.me/18496533224"
            className="group relative inline-block bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-green-400/50"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-6 h-6 mr-3 group-hover:bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
              </svg>
              Comienza tu proceso ahora
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-left"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;