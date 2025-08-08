import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const overlayRef = useRef(null);
  const scrollLockRef = useRef(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy to set active section
  useEffect(() => {
    const sectionIds = ['home', 'servicios', 'testimonials', 'quienes-somos'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        } else {
          // Fallback: determine by scroll position if nothing is intersecting (edge cases)
          const scrollPosition = window.scrollY + 200;
          for (let i = sections.length - 1; i >= 0; i -= 1) {
            const section = sections[i];
            if (section.offsetTop <= scrollPosition) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      },
      { root: null, rootMargin: '0px 0px -55% 0px', threshold: [0.1, 0.25, 0.5, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close mobile on escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Mark mounted for portal usage
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock scroll when mobile menu is open (prevents background scroll jump on mobile)
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      const currentScrollY = window.scrollY || window.pageYOffset;
      scrollLockRef.current = currentScrollY;
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${currentScrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
    } else {
      const previousScrollY = scrollLockRef.current || 0;
      body.style.overflow = '';
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      if (previousScrollY > 0) {
        window.scrollTo(0, previousScrollY);
      }
    }
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    setActiveSection(sectionId);

    // If mobile menu is open, close first, then scroll after unlock/transition
    if (isOpen) {
      setIsOpen(false);
      // Wait for body unlock/useEffect and overlay fade-out (~300ms)
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 360);
      return;
    }

    // Desktop or already closed
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'quienes-somos', label: 'Nosotros' }
  ];

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      (scrolled || isOpen)
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group cursor-pointer"
            aria-label="Ir al inicio"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-lg">J&Y</span>
              </div>
            </div>
            <div>
              <h1 className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                J&Y <span className="text-blue-600">Visado</span>
              </h1>
              <p className={`text-xs hidden sm:block transition-colors duration-300 ${
                scrolled ? 'text-gray-500' : 'text-blue-100'
              }`}>
                Tu visa americana
              </p>
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 group ${
                    scrolled
                      ? isActive
                        ? 'text-blue-700'
                        : 'text-gray-700 hover:text-blue-600'
                      : isActive
                        ? 'text-yellow-300'
                        : 'text-white hover:text-blue-200'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 shadow-inner'
                        : 'opacity-0 group-hover:opacity-100 bg-blue-50'
                    }`}
                  ></span>
                  {isActive && (
                    <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
                  )}
                </button>
              );
            })}
            
            <a
              href="https://wa.me/18496533224"
              className="ml-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-700 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
              aria-label="Contactar por WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
              </svg>
              <span>Contacto</span>
            </a>
          </div>

       
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden group relative p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              scrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            } ${isOpen ? 'rotate-180' : ''}`}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <div className="relative">
              <svg className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
              {!scrolled && !isOpen && (
                <div className="absolute inset-0 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
      {/* Mobile Menu Overlay Portal */}
      {isMounted &&
        createPortal(
          <div
            id="mobile-menu"
            ref={overlayRef}
            className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-500 ease-out ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Animated background overlay with gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90 backdrop-blur-md transition-all duration-500 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            >
              {/* Floating particles for visual appeal */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float transition-opacity duration-1000 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
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
            
            {/* Main menu panel with slide-up animation */}
            <div className={`absolute inset-x-0 top-0 bottom-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 shadow-2xl overflow-y-auto overscroll-contain transition-all duration-500 ease-out ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
              {/* Header with close button */}
              <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-6 py-4 shadow-lg">
                <div className="flex items-center justify-between pt-[max(env(safe-area-inset-top),0.5rem)]">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20">
                      <span className="text-white font-bold text-sm">J&Y</span>
                    </div>
                    <div className="text-lg font-bold text-white">
                      J&Y <span className="text-yellow-300">Visado</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Cerrar menú"
                    className="group p-2 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-200 hover:scale-110"
                  >
                    <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="text-blue-100 text-sm mt-2">Tu visa americana está más cerca</div>
              </div>

              {/* Navigation menu */}
              <div className="px-6 py-8">
                <div className="space-y-4">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`group w-full text-left px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-between transform hover:scale-[1.02] hover:-translate-y-1 ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                            : 'bg-white/80 text-gray-800 hover:bg-white hover:shadow-lg border border-gray-100'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isActive ? 'bg-yellow-300' : 'bg-blue-500 group-hover:bg-blue-600'
                          }`}></span>
                          <span className="text-lg">{item.label}</span>
                        </div>
                        <svg className={`w-5 h-5 transition-transform duration-300 ${
                          isActive ? 'text-yellow-300' : 'text-gray-400 group-hover:text-blue-600'
                        } ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    );
                  })}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8">
                  <a
                    href="https://wa.me/18496533224"
                    className="group relative block bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-6 py-4 rounded-2xl font-bold text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
                    aria-label="Contactar por WhatsApp"
                  >
                    <div className="relative z-10 flex items-center justify-center space-x-3">
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                      </svg>
                      <span>Contactar por WhatsApp</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>

                {/* Quick stats */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-600">Visas</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-200">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-gray-600">Éxito</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-200">
                    <div className="text-2xl font-bold text-purple-600">10+</div>
                    <div className="text-xs text-gray-600">Años</div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Navbar;