import React, { useState } from 'react';
import './Navbar.css'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://media.istockphoto.com/id/1413630345/vector/illustration-of-flying-american-flag-memorial-day-or-constitution-day-of-united-states.jpg?s=612x612&w=0&k=20&c=9gakpue4Kksgin5HIDPhB_Y-AADbO5LDzPNaTSX20MU=" alt="Logo USA" />
        <h1>J&Y Asesoría</h1>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#announcements">Anuncios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
}

export default Navbar;
