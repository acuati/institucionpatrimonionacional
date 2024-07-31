import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = () => (
  <Layout>
  <h1>Esta es la página de la institución de Patrimonio Nacional</h1>
    
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
