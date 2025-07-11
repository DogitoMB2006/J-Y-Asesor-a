import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-xl border-b border-blue-700 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-white to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-blue-900 font-bold text-sm">🇺🇸</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              J&Y <span className="text-yellow-400">Visado</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-100 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-800 rounded-md"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-100 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-800 rounded-md"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="text-gray-100 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-800 rounded-md"
              >
                Nosotros
              </button>
              <a 
                href="https://wa.me/18496533224"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-100 hover:text-yellow-400 focus:outline-none focus:text-yellow-400 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-900/95 backdrop-blur-sm border-t border-blue-700">
          <button 
            onClick={() => { scrollToSection('home'); setIsOpen(false); }}
            className="text-gray-100 hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-blue-800 rounded-md"
          >
            Inicio
          </button>
          <button 
            onClick={() => { scrollToSection('testimonials'); setIsOpen(false); }}
            className="text-gray-100 hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-blue-800 rounded-md"
          >
            Testimonios
          </button>
          <button 
            onClick={() => { scrollToSection('quienes-somos'); setIsOpen(false); }}
            className="text-gray-100 hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-blue-800 rounded-md"
          >
            Nosotros
          </button>
          <a 
            href="https://wa.me/18496533224"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 block px-3 py-2 text-base font-semibold rounded-md text-center mx-3 mt-2 hover:from-yellow-300 hover:to-yellow-400 transition-all duration-200"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;