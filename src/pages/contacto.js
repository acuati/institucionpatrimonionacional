import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const Contacto = () => (
  <Layout>
   <section>
      <h2>Contacto</h2>
      <p>
        Para información general al público, puedes contactarnos a través de nuestro correo electrónico: info@patrimonionacional.es
      </p>
      {/* <p>
        Para más información, puedes contactarnos a través de nuestro correo electrónico: info@patrimonio.org o llamarnos al número: +34 123 456 789.
      </p> */}
    </section> 
   
   
  </Layout>
)


export const Head = () => <Seo title="Contacto" />

export default Contacto