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
    <StaticImage
              src="../images/nuestra_historia.jpg"
              height={300}
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Ejemplo de Patrimonio"
              style={{ 
                marginTop: `1.45rem`,
                marginLeft: `4.00em`,
                marginRight: `4.00em`,
                marginBottom: `1.45rem`
      
      
              }}
            />




      
  </Layout>
)


export const Head = () => <Seo title="Nosotros" />

export default Nosotros