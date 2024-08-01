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
      <Seo title="Inicio" />
      {/*  {/* <h1>Esta es la página de la institución de Patrimonio Nacional</h1> */}  
      {/* <div className="background-container">
      <StaticImage
        src="../images/nuetra_historia.jpg"
        alt="Fondo de la página"
        className="background-image"
        layout="fullWidth"
      />
      <div className="content">
        <h1>Bienvenido a Patrimonio Nacional</h1>
        <p>Explora nuestro patrimonio histórico y cultural.</p>
        {/* Aquí puedes añadir más contenido */}
      {/* </div>
      </div> */}
  
    
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
                marginRight: `4.00em`,
                marginBottom: `1.45rem`
      
      
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
                
                marginBottom: `1.45rem`
      
               }}
            />
          </section>
      
      
  
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

export default IndexPage;




// import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"







// const IndexPage = () => (
//   <Layout>
//  {/*  {/* <h1>Esta es la página de la institución de Patrimonio Nacional</h1> */}
//   <section>
      

   
      

      
//       {/* <h2>Galería</h2> */}
//       <StaticImage
//         src="../images/PATRIMONIO.png"
//         // height={}
//         // width={}
//         quality={95}
//         formats={["AUTO", "WEBP", "AVIF"]}
//         alt="Ejemplo de Patrimonio"
//         style={{ 
//           marginTop: `1.45rem`,
//           marginLeft: `2.00em`,
//           marginRight: `4.00em`
//           // marginBottom: `1.45rem`

//          }}
//       />
//       <StaticImage
//         src="../images/Logo_de_Patrimonio_Nacional.svg.png"
//         height={120}
//         width={500}
//         quality={95}
//         formats={["AUTO", "WEBP", "AVIF"]}
//         alt="Ejemplo de Patrimonio"
//         style={{ 
//           marginTop: `1.45rem`,
//           marginLeft: `4.00em`,
//           marginRight: `4.00em`
//           // marginBottom: `1.45rem`


//         }}
//       />
//       <StaticImage
//         src="../images/PATRIMONIO.png"
//         // height={}
//         // width={}
//         quality={95}
//         formats={["AUTO", "WEBP", "AVIF"]}
//         alt="Ejemplo de Patrimonio"
//         style={{ 
//           marginTop: `1.45rem`,
//           marginLeft: `2.00em`,
//           // marginRight: `4.00em`
          
//           // marginBottom: `1.45rem`

//          }}
//       />
//     </section>

//     <div>
//     <StaticImage
//         src="../images/palaciodearanjuez.jpg"
//         // height={}
//         // width={}
//         quality={95}
//         formats={["AUTO", "WEBP", "AVIF"]}
//         alt="Ejemplo de Patrimonio"
        
//         style={{ 
//         marginTop: `1.45rem`,
//         marginLeft: `2.00em`,
//         //   // marginRight: `4.00em`
          
//         //   // marginBottom: `1.45rem`

//         }}
//       />
//       <StaticImage
//         src="../images/pardo.jpg"
//         // height={}
//         // width={}
//         quality={95}
//         formats={["AUTO", "WEBP", "AVIF"]}
//         alt="Ejemplo de Patrimonio"
        
//         style={{ 
//         marginTop: `1.45rem`,
//         marginLeft: `2.00em`,
//         //   // marginRight: `4.00em`
          
//         //   // marginBottom: `1.45rem`

//         }}
//       />
//       <StaticImage
//         src="../images/sanlorenzodelescorial.jpg"
//         // height={}
//         // width={}
//         quality={95}
//         formats={["AUTO", "WEBP", "AVIF"]}
//         alt="Ejemplo de Patrimonio"
        
//         style={{ 
//           marginTop: `1.45rem`,
//           marginLeft: `2.00em`,
//         //   // marginRight: `4.00em`
          
//         //   // marginBottom: `1.45rem`

//         }}
//       />
//       <StaticImage
//         src="../images/vista_del_palacio_de_la_granja.jpg"
//         // height={}
//         // width={}
//         quality={95}
//         formats={["AUTO", "WEBP", "AVIF"]}
//         alt="Ejemplo de Patrimonio"
       
//         style={{ 
//           marginTop: `1.45rem`,
//           marginLeft: `2.00em`,
//         //   // marginRight: `4.00em`
          
//         //   // marginBottom: `1.45rem`

//         }}
//       />
//       <StaticImage
//         src="../images/sanjeronimodeyuste.jpg"
//         // height={}
//         // width={}
//         quality={95}
//         formats={["AUTO", "WEBP", "AVIF"]}
//         alt="Ejemplo de Patrimonio"
        
//         style={{ 
//           marginTop: `1.45rem`,
//           marginLeft: `2.00em`,
//         //   // marginRight: `4.00em`
          
//         //   // marginBottom: `1.45rem`

//         }}
//       />
//       <StaticImage
//         src="../images/almudaina.jpg"
//         // height={}
//         // width={}
//         quality={95}
//         formats={["AUTO", "WEBP", "AVIF"]}
//         alt="Ejemplo de Patrimonio"
        
//         style={{ 
//           marginTop: `1.45rem`,
//           marginLeft: `2.00em`,
//         //   // marginRight: `4.00em`
          
//         //   // marginBottom: `1.45rem`

//         }}
//       />
       
//     </div>
    

   

   
//   </Layout>

  
// )


// export const Head = () => <Seo title="Inicio" />

// export default IndexPage
