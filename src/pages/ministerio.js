import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const Ministerio = () => (
  <Layout>
     <section>
        <h1>Ministerio de la Presidencia</h1>

        <StaticImage
              src="../images/Captura de pantalla 2024-08-27 131430.png"
              height={100}
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
      
    
    
    
    
    </section>

   
  </Layout>
)


export const Head = () => <Seo title="Ministerio de la Presidencia" />

export default Ministerio