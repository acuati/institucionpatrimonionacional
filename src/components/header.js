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

  </header>
  </>
)
export default Header
