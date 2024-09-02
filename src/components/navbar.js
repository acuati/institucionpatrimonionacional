import React, { useState } from "react";
import { Link } from "gatsby";
import "./navbar.css"; // Asegúrate de crear este archivo para los estilos

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
     
      
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/consejo">Consejo de Administración</Link></li>
        <li><Link to="/actos">Actos oficiales e institucionales</Link></li>
        <li><Link to="/casa">Casa de S.M. el Rey</Link></li>
        <li><Link to="/retratosoficiales">Retratos oficiales</Link></li>
        <li><Link to="/ministerio">Ministerio de la Presidencia</Link></li>
        <li><Link to="/aplicaciongeneradora">Aplicación generadora de QR</Link></li>
      </ul>
      
     
      
    </nav>
  );
};

export default Navbar;



// import * as React from "react"
// import { Link } from "gatsby"

// const Navbar = () => (
//   <>
//     <nav>
//       <ul>
//         <li><Link to="/">Inicio</Link></li>
//         <li><Link to="/bienvenida">Bienvenida</Link></li>
//         <li><Link to="/nosotros">Nosotros</Link></li>
//         <li><Link to="/consejo">Consejo de Administración</Link></li>
//         <li><Link to="/actos">Actos oficiales e institucionales</Link></li>
//         <li><Link to="/casa">Casa de S.M. el Rey</Link></li>
        
//       </ul>
//     </nav>
//     <nav>
//       <ul>
//       <li><Link to="/retratosoficiales">Retratos oficiales</Link></li>
//         <li><Link to="/ministerio">Ministerio de la Presidencia</Link></li>
//         <li><Link to="/aplicaciongeneradora">Aplicación generadora de QR</Link></li>
//       </ul>
//     </nav>
//   </>
// )

// export default Navbar

