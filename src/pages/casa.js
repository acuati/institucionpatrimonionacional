import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const Casa = () => (
  <Layout>
     <section>

     <h1>Casa de S.M. el Rey</h1>

     <StaticImage
              src="../images/Captura de pantalla 2024-08-27 131615.png"
              height={200}
              width={350}
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

     <StaticImage
              src="../images/Captura de pantalla 2024-08-27 131719.png"
              height={150}
              width={800}
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

           

            <StaticImage
              src="../images/Captura de pantalla 2024-08-27 131631.png"
              height={150}
              width={800}
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


export const Head = () => <Seo title="Casa de S.M. el Rey" />

export default Casa