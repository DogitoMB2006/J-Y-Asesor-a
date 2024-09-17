import React from 'react';
import './Footer.css'; // Asegúrate de crear también el archivo CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>J&Y Asesoría de Visas de Turista USA</h2>
        <p>© 2024 J&Y Asesoría. Todos los derechos reservados.</p>
        <div className="footer-social">
          <a href="#facebook" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#twitter" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
