import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const Actividades = () => (
  <Layout>
     <section>
      <h2>Actividades</h2>
      <p>
        Realizamos diversas actividades como visitas guiadas, exposiciones, talleres educativos y programas de voluntariado
      </p>
      <ul>
        <li>Visitas guiadas</li>
        <li>Exposiciones</li>
        <li>Talleres educativos</li>
        <li>Programas de voluntariado</li>
      </ul> 
    </section>

   
  </Layout>
)


export const Head = () => <Seo title="Actividades" />

export default Actividades