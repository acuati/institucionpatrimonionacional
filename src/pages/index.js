import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const IndexPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <Layout>
      <section className="slider-container">
        <Slider {...settings}>
          <div>
            <StaticImage
              src="../images/palaciodearanjuez.jpg"
              alt="Palacio de Aranjuez"
              className="slider-image"
            />
          </div>
          <div>
            <StaticImage
              src="../images/pardo.jpg"
              alt="Pardo"
              className="slider-image"
            />
          </div>
          <div>
            <StaticImage
              src="../images/sanlorenzodelescorial.jpg"
              alt="San Lorenzo del Escorial"
              className="slider-image"
            />
          </div>
          <div>
            <StaticImage
              src="../images/vista_del_palacio_de_la_granja.jpg"
              alt="Vista del Palacio de la Granja"
              className="slider-image"
            />
          </div>
          <div>
            <StaticImage
              src="../images/sanjeronimodeyuste.jpg"
              alt="San Jerónimo de Yuste"
              className="slider-image"
            />
          </div>
          <div>
            <StaticImage
              src="../images/almudaina.jpg"
              alt="Almudaina"
              className="slider-image"
            />
          </div>
        </Slider>
      </section>
      
    </Layout>
    
  );
};

export const Head = () => <Seo title="Inicio" />

export default IndexPage;




