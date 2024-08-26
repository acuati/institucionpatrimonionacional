import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const RetratosOficiales = () => (
  <Layout>
   <section>
      <h1>Retratos oficiales</h1>
      <h2>Retrato oficial conjunto de los 4 miembros de la familia real española, más cercana al trono:</h2>
      {/* <h2>Retratos de SS.MM.</h2> */}
      
      
      {/* <p>Aqui irá un retrato conjunto de la familia real</p> */}


      <StaticImage
              src="../images/los4defamiliarealespañolamascercanaaltrono.jpg"
              height={200}
              width={200}
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

            <p>En el que sale:</p>
   
              <h3><strong>SS.MM.(Sus Majestades):</strong></h3>

       <h4><strong>S.M. / SU MAJESTAD:</strong> EL REY</h4>
       <StaticImage
              src="../images/smelrey.jpg"
              height={200}
              width={200}
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
       <h4><strong>S.M. / SU MAJESTAD:</strong> LA REINA</h4>
       <StaticImage
              src="../images/smlareina.jpg"
              height={200}
              width={200}
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



       <p><strong>S.A.R. / SU ALTEZA REAL:</strong> LA PRINCESA DE ASTURIAS</p>
       <StaticImage
              src="../images/sarprincesaasturias.jpg"
              height={200}
              width={200}
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
      

       <p><strong>S.A.R. / SU ALTEZA REAL:</strong> LA INFANTA DOÑA SOFÍA</p>
       <StaticImage
              src="../images/sarinfantadonasofia.jpg"
              height={200}
              width={200}
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


export const Head = () => <Seo title="Retratos oficiales" />

export default RetratosOficiales