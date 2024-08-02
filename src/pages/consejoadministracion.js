import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const ConsejoAdministracion = () => (
  <Layout>
   <section>
      <h1>Consejo de Administración</h1>
      <h2>Miembros natos</h2>
      <p><strong>ANA DE LA CUEVA FERNÁNDEZ: </strong>PRESIDENTA DE PATRIMONIO NACIONAL</p>

      <p><strong>MARÍA DOLORES MENÉNDEZ COMPANY: </strong>GERENTE DE PATRIMONIO NACIONAL</p>

      <h2>Consejeros</h2>

      <p><strong>ANA MARÍA ARIAS DE COSSÍO </strong></p>
      <p><strong>FRANCISCO BELIL CREIXELL</strong></p>
      <p><strong>Mª ÁNGELES HERMOSILLA ÁLVAREZ</strong></p>
      <p><strong>ALBERTO HERRERA RODRÍGUEZ</strong></p>
      <p><strong>MARÍA DEL CARMEN IGLESIAS CANO</strong></p>
      <p><strong>GREGORIO MARAÑÓN Y BERTRÁN DE LIS</strong></p>
      <p><strong>JUDIT ALEXANDRA GONZÁLEZ PEDRAZ</strong></p>
      <p><strong>JOSÉ LUIS MARTÍNEZ-ALMEIDA NAVASQÜÉS</strong></p>
      <p><strong>DOMINGO MARTÍNEZ PALOMO</strong></p>
      <p><strong>JAVIER SOLANA DE MADARIAGA</strong></p>
      <p><strong>JUAN TEJEDOR CARNERO</strong></p>
      <p><strong>MARÍA PÉREZ SÁNCHEZ-LAULHÉ</strong></p>
      <p><strong>SAMUEL ALONSO LLORENTE</strong></p>



      <h2>Secretario</h2>
      <p><strong>TOMÁS SUÁREZ-INCLÁN GONZÁLEZ</strong></p>

    </section> 
   
   
  </Layout>
)


export const Head = () => <Seo title="Consejo de Administración" />

export default ConsejoAdministracion