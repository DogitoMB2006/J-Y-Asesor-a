import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-white to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-blue-900 font-bold text-sm">🇺🇸</span>
              </div>
              <h3 className="text-2xl font-bold">
                J&Y <span className="text-yellow-400">Visado</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tu socio confiable para obtener la visa de turista a Estados Unidos. 
              Más de 10 años de experiencia respaldándonos.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Oficina 100% Virtual</span>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                ✓ Asesoría personalizada DS-160
              </li>
              <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                ✓ Preparación para entrevista
              </li>
              <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                ✓ Revisión de documentos
              </li>
              <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                ✓ Consultas virtuales
              </li>
              <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                ✓ Seguimiento del proceso
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <a 
                href="https://wa.me/18496533224" 
                className="flex items-center justify-center md:justify-start space-x-3 hover:text-green-400 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors duration-200">
                  <span className="text-white text-sm">📱</span>
                </div>
                <span>+1 (849) 653-3224</span>
              </a>
              
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📧</span>
                </div>
                <span>info@jyvisado.com</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⏰</span>
                </div>
                <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-yellow-400 mb-3">Síguenos</h5>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <span className="text-white text-sm group-hover:scale-110 transition-transform duration-200">f</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-400 hover:bg-blue-300 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <span className="text-white text-sm group-hover:scale-110 transition-transform duration-200">t</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <span className="text-white text-sm group-hover:scale-110 transition-transform duration-200">📷</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 J&Y Asesoría. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Servicios de asesoría para visa de turista estadounidense
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-6 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Consultas seguras</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>Información confidencial</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Expertos certificados</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;