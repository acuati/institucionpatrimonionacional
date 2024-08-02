import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const RetratosOficiales = () => (
  <Layout>
   <section>
      <h1>Retratos oficiales</h1>
      <h2>Retratos de SS.MM.</h2>
      <p>Aqui irá un retrato conjunto de la familia real</p>
      <p><ul>En el que saldrá:

        <li>SU MAJESTAD EL REY</li>
        <li>SU MAJESTAD LA REINA</li>
        <li>SU ALTEZA REAL LA PRINCESA DE ASTURIAS</li>
        <li>SU ALTEZA REAL LA INFANTA DOÑA SOFÍA</li>

      </ul>
      </p>


      
    </section> 
   
   
  </Layout>
)


export const Head = () => <Seo title="Retratos oficiales" />

export default RetratosOficiales