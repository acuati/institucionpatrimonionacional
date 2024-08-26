import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { QRCode } from "qrcode.react"; // Import QRCode component

import Layout from "../components/layout";
import Seo from "../components/seo";

const AplicacionGeneradora = () => {
  

  return (
    <Layout>
      <section>
        <h1>Aplicación generadora de QR</h1>
        <p>
        <Link href="https://online-qr-generator.com/es/create?step=1&qr_onboarding=active_dpf&fx=c%C3%B3digo-QR&utm_source=google&utm_medium=cpc&utm_id=21105140318&utm_content=b&utm_term=c%C3%B3digo+qr&network=g&matchtype=b&device=c&gaid=ES-ES-C-DPF&gad_source=1&gclid=Cj0KCQjwz7C2BhDkARIsAA_SZKZH_jtIUbS2tz0DE-mAZ69sVvua4sDzfgmZ-dUxzJqTY8l1A3FfyAYaAiwzEALw_wcB">PINCHA AQUÍ</Link>

        </p>
        </section>
        
    </Layout>
  );
};

export const Head = () => <Seo title="Aplicación generadora de QR" />

export default AplicacionGeneradora;
