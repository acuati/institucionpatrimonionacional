import * as React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <>
  <header>
    
    <h1>{siteTitle}</h1>

    <p>Esta es la página de la institución de Patrimonio Nacional donde recogemos todos los aspectos relevantes de nuestra institución.

    <div className="logotipo">
        <StaticImage
              src="../images/logo-patrimonio-nacional.png"
              alt="Logotipo de Patrimonio Nacional"
           />
     </div>

    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/bienvenida">Bienvenida</Link></li>

   
    </p>


  </header>
  </>
)
export default Header
