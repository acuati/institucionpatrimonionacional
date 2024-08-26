import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <>
  <header>
    <div className="logotipo">
        <StaticImage
              src="../images/logo-patrimonio-nacional.png"
              alt="Logotipo de Patrimonio Nacional"
           />
     </div>
    <h1>{siteTitle}</h1>

    <p>Esta es la página de la institución de Patrimonio Nacional donde recogemos todos los aspectos relevantes de nuestra institución.</p>


  </header>
  </>
)
export default Header
