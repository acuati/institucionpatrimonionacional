/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"  // Importar el componente Navbar
import Footer from "./footer"  // Importar el componente Footer
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div className="container">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      

        <main>
          {children}
          </main>

          <Navbar /> 
          
    <Footer></Footer>
    </div>
      
    </>
     
  )
}

export default Layout
