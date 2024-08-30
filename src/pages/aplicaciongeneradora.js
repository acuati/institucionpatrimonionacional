import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { QRCode } from "qrcode.react"; // Import QRCode component

import Layout from "../components/layout";
import Seo from "../components/seo";

const AplicacionGeneradora = () => {
 
  return (
    <Layout>
      <section>
        <h1>Aplicación generadora de QR</h1>

        <StaticImage
          src="../images/decoraciondeaplicacionqr.jpg"
          height={350}
          width={500}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Ejemplo de Patrimonio"
          style={{
            marginTop: `1.45rem`,
            marginLeft: `4.00em`,
            marginRight: `4.00em`,
            marginBottom: `1.45rem`,
          }}
        />

       
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Aplicación generadora de QR" />

export default AplicacionGeneradora;



