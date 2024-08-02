import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>>
      <li><Link to="/bienvenida">Bienvenida</Link></li>
      <li><Link to="/nosotros">Nosotros</Link></li>

      <li><Link to="/consejoadministracion">Consejo de Administración</Link></li>
      <li><Link to="/actos">Actos oficiales e institucionales</Link></li>
      <li><Link to="/retratosoficiales">Retratos oficiales</Link></li>
      
      <li><Link to="/aplicaciongeneradora">Aplicación generadora de QR</Link></li>






    </ul>
  </nav>
)

export default Navbar
