import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/nosotros">Nosotros</Link></li>
      <li><Link to="/actividades">Actividades</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
  </nav>
)

export default Navbar
