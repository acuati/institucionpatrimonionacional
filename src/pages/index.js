import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = () => (
  <Layout>
 {/*  {/* <h1>Esta es la página de la institución de Patrimonio Nacional</h1> */}
  <section>
      

   
      

      
      {/* <h2>Galería</h2> */}
      <StaticImage
        src="../images/PATRIMONIO.png"
        // height={}
        // width={}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Ejemplo de Patrimonio"
        style={{ 
          marginTop: `1.45rem`,
          marginLeft: `2.00em`,
          marginRight: `4.00em`
          // marginBottom: `1.45rem`

         }}
      />
      <StaticImage
        src="../images/Logo_de_Patrimonio_Nacional.svg.png"
        height={120}
        width={500}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Ejemplo de Patrimonio"
        style={{ 
          marginTop: `1.45rem`,
          marginLeft: `4.00em`,
          marginRight: `4.00em`
          // marginBottom: `1.45rem`


        }}
      />
      <StaticImage
        src="../images/PATRIMONIO.png"
        // height={}
        // width={}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Ejemplo de Patrimonio"
        style={{ 
          marginTop: `1.45rem`,
          marginLeft: `2.00em`,
          // marginRight: `4.00em`
          
          // marginBottom: `1.45rem`

         }}
      />
    </section>
  </Layout>
)


export const Head = () => <Seo title="Inicio" />

export default IndexPage
