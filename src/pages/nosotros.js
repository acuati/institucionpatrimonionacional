import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const Nosotros = () => (
  <Layout>
    <section>
     <h2>Nuestra historia</h2>
      <p>
        La institución de Patrimonio Nacional se fundó en 1865 con el objetivo de preservar y mantener el patrimonio cultural y natural de nuestra nación
      </p>
    </section>

    <section>
      <h2>Nuestra misión</h2>
      <p>
        Nuestra misión es proteger, conservar y promover el patrimonio cultural y natural para las futuras generaciones
      </p>
    </section>

    <section>
      <h2>Nuestra visión</h2>
      <p>
        Aspiramos a ser una institución líder en la gestión del patrimonio, reconocida por su compromiso y excelencia
      </p>
    </section> 



    
      
  </Layout>
)


export const Head = () => <Seo title="Nosotros" />

export default Nosotros