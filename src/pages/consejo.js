import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Modal from "react-modal";
import Layout from "../components/layout"
import Seo from "../components/seo"

// Es necesario configurar el elemento root para accesibilidad con react-modal
Modal.setAppElement('#___gatsby');


const Consejo = () => {
  // Definir estados para los modales
  const [modalIsOpen, setModalIsOpen] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
    modal15: false,
    modal16: false,
    

    // Puedes agregar más modales según sea necesario
  });

  // Funciones para abrir y cerrar modales
  const openModal = (modalName) => {
    setModalIsOpen((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setModalIsOpen((prev) => ({ ...prev, [modalName]: false }));
  };
  return (
  <Layout>
   <section>
      <h1>Consejo de Administración</h1>
      <h2>Miembros natos</h2>

      <h3>ANA DE LA CUEVA FERNÁNDEZ: PRESIDENTA DE PATRIMONIO NACIONAL</h3>

      <div>
          <button onClick={() => openModal('modal1')}>Leer más sobre Ana de la Cueva Fernández. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal1}
            onRequestClose={() => closeModal('modal1')}
            contentLabel="Ana de la Cueva Fernández"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            
            <StaticImage
              src="../images/presidentapatrimonio.jpg"
              height={300}
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Ejemplo de Patrimonio"
            />
            <p>Es licenciada en Ciencias Económicas y Empresariales por la Universidad Autónoma de Madrid en la especialidad de Economía Cuantitativa.</p>
            <p>Ha desarrollado toda su carrera profesional en el Ministerio de Asuntos Económicos y Transformación Digital, donde ingresó por oposición en el Cuerpo de Técnicos Comerciales y Economistas del Estado en 1991.</p>
            <p>Ha sido secretaria de Estado de Economía y Apoyo a la Empresa desde junio de 2018 hasta mayo de 2021, ostentando la Secretaría de la Comisión Delegada del Gobierno para Asuntos Económicos.</p>
            <p>Anteriormente había desempeñado diversos cargos de responsabilidad en el Ministerio, en la Dirección General de Política Comercial e Inversiones Exteriores, la Dirección General de Política Económica y la Dirección General del Tesoro y fue directora del Gabinete del secretario de Estado de Economía.</p>
            <p>Ha sido miembro de los siguientes Consejos de Administración e instituciones nacionales e internacionales: consejera de la Casa de la Moneda y Timbre, consejera de Expansión Exterior (actualmente ICEX), Consejera de la Compañía Española de Crédito a la Exportación (CESCE), consejera de RENFE, consejera de la Sociedad Estatal de Participaciones Industriales (SEPI), consejera de la Autoridad Macroprudencial Consejo de Estabilidad Financiera (AMCESFI), gobernadora alterna por España en el Grupo Banco Mundial, en el Banco Interamericano de Desarrollo, el Banco Centroamericano de Integración Económica, el Banco Asiático de Desarrollo, el Banco Asiático para Inversión en Infraestructuras, el Banco Africano de Desarrollo y el Banco Europeo de Reconstrucción y Desarrollo, presidenta de la Comisión para la prevención del blanqueo de capitales y las infracciones monetarias, miembro de la Comisión de Coordinación del Plan de Recuperación, Transformación y Resiliencia.</p>
            <button onClick={() => closeModal('modal1')}>Cerrar</button>
          </Modal>
        </div>


      



      <h3>MARÍA DOLORES MENÉNDEZ COMPANY: GERENTE DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal2')}>Leer más sobre María Dolores Menéndez Company. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal2}
            onRequestClose={() => closeModal('modal2')}
            contentLabel="María Dolores Menéndez Company"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            
           <StaticImage
              src="../images/gerentepatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Es Licenciada en Ciencias Económicas y Empresariales, rama de Economía de la Empresa, por la Universidad Complutense de Madrid. Funcionaria en servicio activo de la Escala Técnica de Gestión de Organismos Autónomos y en excedencia del Cuerpo Técnico de Auditoría y Contabilidad, Executive Master in Public Administration (EMPA). ESADE.</p>
            <p>Ha trabajado como Subdirectora General de Administración Financiera y Oficialía Mayor en el Ministerio de Asuntos Económicos y Transformación Digital. Ha sido Secretaria General del Consejo Superior de Deportes y del Instituto Español de Oceanografía y Subdirectora General Adjunta de Administración Económica en la Secretaría General de la Dirección General de Tráfico.</p>
            <p>Miembro del Consejo de Administración del Centro para el Desarrollo Tecnológico Industrial E.P.E. (CDTI).</p>
            <button onClick={() => closeModal('modal2')}>Cerrar</button>
          </Modal>
        </div>
      

      <h2>Consejeros</h2>

      <h3>ANA MARÍA ARIAS DE COSSÍO: CONSEJERA DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal3')}>Leer más sobre Ana María Arias de Cossío. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal3}
            onRequestClose={() => closeModal('modal3')}
            contentLabel="Ana María Arias de Cossío"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            
            <StaticImage
              src="../images/primerconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Doctora en Historia del Arte y catedrática emérita de la Universidad Complutense de Madrid.</p>
            <p>Ha desempeñado una amplia actividad investigadora, con 6 sexenios de investigación reconocidos por la Comisión Nacional Evaluadora. Cuenta en su haber con publicaciones sobre estudios de pintura y sobre historia intelectual referida a la Institución Libre de Enseñanza y a Manuel B. Cossío. También ha realizado estudios sobre escenografía teatral, ha publicado 14 libros individuales y 10 con otros autores, numerosos artículos en revistas especializadas y participado en ponencias a congresos.</p>
            <p>Cuenta con una reconocida trayectoria vinculada a los organismos de conservación del arte. Es académica de la Real Academia de Bellas Artes de Santa Isabel de Hungría de Sevilla y de la Real Academia Canaria de Bellas Artes de San Miguel Arcángel.</p>
            <p>Es presidenta de la Fundación Jiménez-Cossío.</p>
            <button onClick={() => closeModal('modal3')}>Cerrar</button>
          </Modal>
        </div>
     

      <h3>FRANCISCO BELIL CREIXEL: CONSEJERO DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal4')}>Leer más sobre Francisco Belil Creixel. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal4}
            onRequestClose={() => closeModal('modal4')}
            contentLabel="Francisco Belil Creixel"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            
            <StaticImage
              src="../images/segundoconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Ingeniero Superior en la Universidad Politécnica de Cataluña.</p>
            <p>Amplió sus estudios de ingeniería en la Universidad de Pittsburgh (EE.UU.) e INSEAD, en Fontainebleau (Francia). En julio de 1972 ingresó en Bayer AG, desempeñando diversas funciones en las fábricas alemanas de Leverkusen, Dormagen y Uerdingen. En 1978 fue destinado a Mobay en USA, donde trabajó en la central de Pittsburgh y la fábrica de New Martinsville. En 1981, fue nombrado Director en el Grupo Bayer de México hasta julio de 1987.</p>
            <p>El 1 de abril de 1996 fue nombrado Consejero Delegado de Bayer Hispania, S.A., máximo responsable del Grupo España y en 1997 del Grupo Bayer en la Región Iberia (España y Portugal). El 1 de agosto de 2006, se incorporó a Siemens, S.A. como Vicepresidente y Consejero Delegado. En abril de 2008 fue nombrado CEO de la Región Suroeste de Europa, formada por 15 países. En junio de 2013 fue nombrado Vicepresidente de la Fundación Bertelsmann. En julio de 2015, Presidente de la Fundación Princesa de Girona.</p>
            <p>Otros cargos que ha desempeñado: 2000-2006 Presidente de FEIQUE; 2005-2010 Presidente de la Cámara de Comercio alemana para España · Vicepresidente de la Fundación CEDE · Vicepresidente Alumni UPC; Consejos de Administración/ Consejos Asesores: Naturgy, Linde, Uriach, KPMG, Caixabank Banca Privada, APD, Foment, CEOE; 2010 Cruz de Caballero de la Orden del Mérito de la República Federal de Alemania · 1999 "Directivo del año" AED; 2011 Premio a la Excelencia Empresarial por la Cámara Alemana de Comercio; 2017 Encomienda con placa de la Orden Civil de Alfonso X el Sabio en el ámbito de educación.</p>
            <button onClick={() => closeModal('modal4')}>Cerrar</button>
          </Modal>
        </div>
     

      <h3>Mª ÁNGELES HERMOSILLA ÁLVAREZ: CONSEJERA DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal5')}>Leer más sobre Mª Ángeles Hermosilla Álvarez. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal5}
            onRequestClose={() => closeModal('modal5')}
            contentLabel="Mª Ángeles Hermosilla Álvarez"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            
            <StaticImage
              src="../images/tercerconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Catedrática de Teoría de la Literatura y Literatura Comparada en la Universidad de Córdoba.</p>
            <p>Ha impartido conferencias en distintas universidades españolas y ha sido Profesora Visitante o docente de Postgrado en universidades extranjeras, como París 8, Pau et des pays de l´Adour, La República de Uruguay o Yale University.</p>
            <p>Autora de más de medio centenar de publicaciones, cuenta con 4 sexenios de investigación reconocidos, ha formado parte del equipo parisino “Traverses” (1994-2008) y es directora del grupo “Lenguajes” (HUM-224) desde 1995, donde estudia la interacción de códigos (sobre todo pintura y poesía) y las creaciones de mujeres.</p>
            <p>Además, ha colaborado con instituciones públicas: Consejería de Cultura de la Junta de Andalucía (Consejo de Bibliotecas) y, en Córdoba, Real Academia, de la que es académica correspondiente; Ateneo, que le concedió el premio “Fiambrera de plata” y Diputación Provincial (comisión de Publicaciones y Consejo Rector de la Fundación de Artes Plásticas “Rafael Botí”).</p>
            <button onClick={() => closeModal('modal5')}>Cerrar</button>
          </Modal>
        </div>
      
      <h3>ALBERTO HERRERA RODRÍGUEZ: CONSEJERO DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal6')}>Leer más sobre Alberto Herrera Rodríguez. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal6}
            onRequestClose={() => closeModal('modal6')}
            contentLabel="Alberto Herrera Rodríguez"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            
           <StaticImage
              src="../images/cuartoconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Subsecretario del Ministerio de Presidencia, Justicia y Relaciones con las Cortes .</p>
            <p>Nacido en Madrid en 1983. Pertenece al Cuerpo Superior de Administradores Civiles del Estado. Licenciado en Derecho y en Administración y Dirección de Empresas por la Universidad Autónoma de Madrid, máster oficial en Intervención de la Administración en la Sociedad por la UNED, habiendo completado formación con distintos programas cursados en IESE-Universidad de Navarra, LSE-London School of Economics and Political Science, Middlesex University London o el Centro Superior de Estudios de la Defensa Nacional (CESEDEN).</p>
            <p>Ha desarrollado labor investigadora en el marco del Programa de Doctorado en Derecho y Políticas Públicas de la UAM, con la preparación de una tesis sobre la dimensión constitucional del acceso a información pública. Ha participado como ponente en diferentes cursos y conferencias en el INAP, la AECID, el Ministerio de la Presidencia, las Delegaciones del Gobierno, o la Escuela Nacional de Administración Pública de Colombia, sobre gestión y dirección pública.</p>
            <p>En la Administración General del Estado ha desempeñado distintos puestos en el ámbito de los Ministerios de Sanidad, Asuntos Exteriores y Cooperación, y Hacienda y Administraciones Públicas. Entre 2014 y 2018, desempeñó el puesto de subdirector general de la Inspección de servicios de la Administración Periférica del Estado en el Ministerio de la Presidencia y para las Administraciones Territoriales. Durante 2018 y 2019, fue director general de Protección Civil y Emergencias en el Ministerio del Interior. Entre enero de 2020 y febrero de 2021 fue subsecretario de Sanidad. Actualmente desempeñaba el puesto de subsecretario de Política Territorial y Función Pública. Está en posesión de la Cruz de Plata de la Orden del Mérito de la Guardia Civil.</p>
            <button onClick={() => closeModal('modal6')}>Cerrar</button>
          </Modal>
        </div>
      
      <h3>MARÍA DEL CARMEN IGLESIAS CANO: CONSEJERA DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal7')}>Leer más sobre María del Carmen Iglesias Cano. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal7}
            onRequestClose={() => closeModal('modal7')}
            contentLabel="María del Carmen Iglesias Cano"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            <StaticImage
              src="../images/quintoconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Directora de la Real Academia de la Historia desde diciembre de 2014 (reelegida en 2018).</p>
            <p>Académica numeraria de la Real Academia de la Historia desde 1991 y de la Real Academia Española desde 2000, es catedrática de Historia de las Ideas y Formas Políticas de la Universidad Complutense (1984-2000), catedrática de Historia de las Ideas Morales y Políticas de la Universidad Rey Juan Carlos (2000-09) y Sillón Montesquieu de la Real Academia Europea de Yuste.</p>
            <p>Ha sido directora del Centro de Estudios Políticos y Constitucionales, consejera nata del Consejo de Estado y presidenta del consejo de administración del Grupo Unidad Editorial. Profesora de Historia y de Ciencias Sociales de S.A.R. el Príncipe de Asturias y tutora universitaria de S.A.R. Dª Cristina de Borbón en la Universidad Complutense. Especialista en Historia Moderna europea y española y en otros temas de historia y filosofía política de distintas épocas, es autora de más de doscientas publicaciones entre libros, monografías y artículos varios. Comisaria de diez relevantes exposiciones históricas y directora de sus correspondientes catálogos, ha recibido diversos premios y distinciones honoríficas nacionales e internacionales por sus investigaciones y su labor académica y docente, así como por otras contribuciones culturales.</p>
           
            <button onClick={() => closeModal('modal7')}>Cerrar</button>
          </Modal>
        </div>
      

      <h3>GREGORIO MARAÑÓN Y BERTRÁN DE LIS: CONSEJERO DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal8')}>Leer más sobre Gregorio Marañón y Bertrán de Lis. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal8}
            onRequestClose={() => closeModal('modal8')}
            contentLabel="Gregorio Marañón y Bertrán de Lis"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            <StaticImage
              src="../images/sextoconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Presidente del Teatro Real y de la Fundación Ortega-Marañón.</p>
            <p>Es presidente del Consejo de Administración de Logista, del Consejo de Administración de Universal Music Spain y del Consejo de Administración de Air City Madrid Sur. Es patrono del Museo del Ejército, del Archivo Histórico de la Nobleza y vocal del Consejo Asesor de Cáritas.</p>
            <p>Es académico de número de la Real Academia de Bellas Artes de San Fernando y vocal de su Comisión de Administración; académico correspondiente de la Real Academia de Bellas Artes de San Telmo; académico honorario de la Real Academia de Bellas Artes y Ciencias Históricas de Toledo; y académico numerario de la Academia Europea de Ciencias, Artes y Letras. </p>
            <p>Gregorio Marañón está en posesión de la Gran Cruz de Alfonso X el Sabio, la Medalla de Oro al Mérito en las Bellas Artes, la Medalla de Oro de la Comunidad de Madrid y la Medalla de Oro de Castilla-La Mancha. Es comendador de la Legión de Honor francesa y doctor Honoris Causa por la Universidad de Castilla-La Mancha. Tiene el Premio de periodismo Mariano de Cavia 2017.</p>
            
            <button onClick={() => closeModal('modal8')}>Cerrar</button>
          </Modal>
        </div>
      

      <h3>JUDIT ALEXANDRA GONZÁLEZ PEDRAZ: CONSEJERA DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal9')}>Leer más sobre Judit Alexandra González Pedraz. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal9}
            onRequestClose={() => closeModal('modal9')}
            contentLabel="Judit Alexandra González Pedraz"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            <StaticImage
              src="../images/septimoconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Secretaria general de la Presidencia del Gobierno.</p>
            <p>Nacida en 1979 en Madrid. Licenciada en Derecho por la Universidad Autónoma de Madrid. Ingresó en el Cuerpo Superior de Administradores Civiles del Estado en el 2006.</p>
            <p>Ha sido directora del Departamento de Coordinación Técnica y Jurídica, dependiente del Gabinete del Presidente del Gobierno; secretaria general de la Escuela de Organización Industrial (EOI), fundación pública dependiente del Ministerio de Industria, Comercio y Turismo; subdirectora de cooperación y Coordinación Territorial en el Ministerio de Justicia. Asimismo, ha ocupado puestos de responsabilidad en la secretaría general de la Dirección General del Patrimonio del Estado del Ministerio de Hacienda y en la Agencia Española de Protección de Datos. Con anterioridad ha sido subdirectora general de Relaciones con la Administración de Justicia y el Ministerio Fiscal y asesora en el Gabinete del secretario de Estado de Justicia.</p>
            <p>Ha colaborado como profesora asociada en la Universidad Carlos III de Madrid y participado en diversos proyectos de investigación.</p>
            <p>Condecorada con la Cruz Distinguida de 1ª Clase de la Orden de San Raimundo de Peñafort.</p>
            
            <button onClick={() => closeModal('modal9')}>Cerrar</button>
          </Modal>
        </div>
      
      <h3>JOSÉ LUIS MARTÍNEZ-ALMEIDA NAVASQÜÉS: CONSEJERO DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal10')}>Leer más sobre José Luis Martinez-Almeida Navasqües. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal10}
            onRequestClose={() => closeModal('modal10')}
            contentLabel="José Luis Martinez-Almeida Navasqües"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
             <StaticImage
              src="../images/octavoconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Alcalde de Madrid.</p>
            <p>Licenciado en Derecho por la Universidad Pontificia de Comillas (ICAI-ICADE), Abogado del Estado desde 2001. Su carrera como abogado del Estado es amplia y en concreto ante los Juzgados de lo Social y en la Sala de lo Contencioso Administrativo.</p>
            <p>En 2007 es propuesto como Director General de Patrimonio Histórico de la Comunidad de Madrid hasta 2011. Entre los años 2011 y 2013 fue Secretario General del Consejo de Gobierno de la Comunidad Autónoma de Madrid, Secretario General del Consejo de Administración de SEPI Desarrollo Empresarial (SEPIDES) desde septiembre de 2013 hasta abril de 2014, asumiendo también la Dirección de la Asesoría Jurídica.</p>
            <p>En abril de 2014 es nombrado por acuerdo del Consejo de Ministros Director de la División Jurídico Institucional de la Autoridad Independiente de Responsabilidad Fiscal.</p>
            <p>Tras las Elecciones Municipales y Autonómicas de 2015 toma posesión como Concejal del GM PP y el 28 de abril de 2017 es elegido Portavoz del Grupo Municipal Partido Popular.</p>
            <p>El 13 de enero de 2019 fue designado Candidato a la Alcaldía de Madrid por el Partido Popular y, tras las elecciones municipales de 26 de mayo de 2020, fue elegido Alcalde de Madrid (Sesión de Investidura de 15 de junio de 2020).</p>
           
            <button onClick={() => closeModal('modal10')}>Cerrar</button>
          </Modal>
        </div>
     

      <h3>DOMINGO MARTÍNEZ PALOMO: CONSEJERO DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal11')}>Leer más sobre Domingo Martínez Palomo. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal11}
            onRequestClose={() => closeModal('modal11')}
            contentLabel="Domingo Martínez Palomo"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            <StaticImage
              src="../images/novenoconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Secretario general de la Casa de su Majestad el Rey.</p>
            <p>Tras superar el Curso Selectivo, ingresó en la Academia General Militar en 1974, siendo promovido al empleo de Teniente de la Guardia Civil en 1978. Es licenciado en Derecho por la Universidad Complutense de Madrid.</p>
            <p>Por Real Decreto 654/1996, de 18 de abril, fue nombrado Jefe del Gabinete de Planificación y Coordinación de la Secretaría General de la Casa de SM el Rey, cargo que desempeñó hasta junio del 2014.</p>
            <p>Por Real Decreto 566/2014, de 27 de junio de 2014, fue nombrado Secretario General de la Casa de Su Majestad el Rey. </p>
            <p>Por Real Decreto 888/2015, de 2 de octubre, fue promovido al empleo de Teniente General del Cuerpo de la Guardia Civil. Por Real Decreto 85/2017, de 10 de febrero, fue nombrado Vocal del Consejo de Administración del Patrimonio Nacional.</p>
            
            <button onClick={() => closeModal('modal11')}>Cerrar</button>
          </Modal>
        </div>
      
      <h3>JAVIER SOLANA DE MADARIAGA: CONSEJERO DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal12')}>Leer más sobre Javier Solana de Madariaga. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal12}
            onRequestClose={() => closeModal('modal12')}
            contentLabel="Javier Solana de Madariaga"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
             <StaticImage
              src="../images/decimoconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Doctor en Ciencias Físicas y catedrático por la Universidad Complutense de Madrid.</p>
            <p>Ha sido durante trece años miembro del Gobierno de España, donde ostentó varios cargos ministeriales incluidos el de Cultura, Educación, y Asuntos Exteriores. En 1995 fue nombrado Secretario General de la OTAN; y en 1999, el primer Alto Representante para la Política Exterior y de Seguridad Común (PESC) de la Unión Europea. Regresó a España en enero de 2010.</p>
            <p>Actualmente, preside EsadeGeo–Centro de Economía y Geopolítica Global de Esade, el Real patronato del Museo del Prado; Aspen Institute España, y el Comité Ejecutivo del Instituto de Salud Global Barcelona. Pertenece a los patronatos de la Fundación la Caixa y Fundación Telefónica; así como al del Council on Foreign Relations y European Council on Foreign Relations, el Real Instituto Elcano, y la Comisión Global sobre las Drogas. Es distinguido fellow de Brookings Institution (Washington, DC), y profesor visitante senior de la London School of Economics, donde fue investido Doctor Honoris Causa en diciembre de 2010.</p>
           
            <button onClick={() => closeModal('modal12')}>Cerrar</button>
          </Modal>
        </div>
     

      <h3>JUAN TEJEDOR CARNERO: CONSEJERO DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal13')}>Leer más sobre Juan Tejedor Carnero. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal13}
            onRequestClose={() => closeModal('modal13')}
            contentLabel="Juan Tejedor Carnero"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
           <StaticImage
              src="../images/undecimoconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Licenciado en Ciencias Económicas y Empresariales por la Universidad Complutense de Madrid y funcionario del Cuerpo Superior de Interventores y Auditores del Estado.</p>
            <p>Ha desarrollado su labor profesional en el Ministerio de Hacienda, inicialmente en la Oficina Nacional de Auditoría (ONA) de la Intervención General de la Administración del Estado, y posteriormente en la Dirección General del Patrimonio del Estado, como Vocal Asesor de Empresas Públicas y como Subdirector General de Empresas y Participaciones Estatales.</p>
            <p>Asimismo, ha sido ponente en cursos del Instituto de Estudios Fiscales, así como vocal del Consejo de Administración de diversas sociedades mercantiles estatales y patrono de fundaciones del sector público estatal.</p>
            <p>Actualmente, desde julio de 2018, es Director General del Patrimonio del Estado.</p> 
            
            <button onClick={() => closeModal('modal13')}>Cerrar</button>
          </Modal>
        </div>
      

      <h3>MARÍA PÉREZ SÁNCHEZ-LAULHÉ: CONSEJERA DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal14')}>Leer más sobre María Pérez Sánchez-Laulhé. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal14}
            onRequestClose={() => closeModal('modal14')}
            contentLabel="María Pérez Sánchez-Laulhé"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            
            <StaticImage
              src="../images/duodecimoconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Licenciada en Derecho por la Universidad Pontificia de Comillas (ICADE). Curso de Posgrado ("Título de Experto") en Gestión Cultural en el Exterior por la Universidad Carlos III de Madrid (coorganizado por la AECID).</p>
            <p>En 2006 ingresa en la carrera diplomática, entre 2006 y 2008, desempeña diversos puestos de carácter técnico en la Secretaría de Estado para la Unión Europea. En 2008 se incorpora como consejera técnica al Gabinete de la Secretaria de Estado para Iberoamérica, entre 2009 y 2010 forma parte, como vocal asesora, del Gabinete de la Ministra de Sanidad y Asuntos Sociales. Entre 2010 y 2013 es destinada a la Embajada de España en La Paz (Bolivia) como secretaria de Embajada y encargada de los asuntos culturales. Entre 2013 y 2016 es destinada a la Embajada de Costa Rica como consejera cultural y encargada de los Asuntos Consulares en la Embajada de España en San José (Costa Rica). Entre 2014 y 2015, ejerció, además, como directora del Centro Cultural de España en Costa Rica. Desde 2016 a 2019 es destinada de nuevo a Bolivia, como Segunda Jefatura de la Embajada de España en La Paz; además, ejerció como directora del Centro Cultural de España en La Paz entre 2016 y 2018.</p>
            <p>En septiembre de 2019  se incorpora a la Agencia Española de Cooperación Internacional para el Desarrollo (AECID) como jefa de la Unidad de Apoyo de la directora de Cooperación con América Latina y el Caribe y, desde marzo de 2020, como jefa del Departamento de Cooperación con los Países Andinos y el Cono Sur. En agosto de 2021 se incorpora Ministerio de Cultura y Deporte, como jefa del Gabinete del Secretario General de Cultura y Deporte.</p>
            <p>Desde febrero de 2023 es Subsecretaria de Cultura.</p>
            <button onClick={() => closeModal('modal14')}>Cerrar</button>
          </Modal>
        </div>
      
      <h3>SAMUEL ALONSO LLORENTE: CONSEJERO DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal15')}>Leer más sobre Samuel Alonso Llorente. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal15}
            onRequestClose={() => closeModal('modal15')}
            contentLabel="Samuel Alonso Llorente"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            <StaticImage
              src="../images/decimotercerconsejeropatrimonio.jpg"
              height={200}
              width={150}
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
            <p>Maestro de Educación primaria.</p>
            <p>Diputado provincial por la provincia de Segovia desde el año 2019. Ha sido concejal del Ayuntamiento del Real Sitio de San Ildefonso y teniente de alcalde del Ayuntamiento del Real Sitio de San Ildefonso.</p>
            <p>Actualmente es alcalde del Real Sitio de San Ildefonso. </p>
            
            <button onClick={() => closeModal('modal15')}>Cerrar</button>
          </Modal>
        </div>
      


      <h2>Secretario</h2>
      <h3>TOMÁS SUÁREZ-INCLÁN GONZÁLEZ: SECRETARIO DE PATRIMONIO NACIONAL</h3>
      <div>
          <button onClick={() => openModal('modal16')}>Leer más sobre Tomás Suárez-Inclán González. Y ver su foto</button>
          <Modal
            isOpen={modalIsOpen.modal16}
            onRequestClose={() => closeModal('modal16')}
            contentLabel="Tomás Suárez-Inclán González"
            style={{
              content: {
                margin: 'auto',
                maxWidth: '600px',
                padding: '20px',
              },
            }}
          >
            <StaticImage
              src="../images/secretariopatrimonio.jpeg"
              height={200}
              width={150}
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

            <p>Abogado del Estado (1992) y abogado del Estado Jefe en Patrimonio Nacional. Marzo 2019.</p>
            <p>De entre los cargos desempeñados anteriormente destacan:</p>
            <p>Secretario del Consejo de la Comisión Nacional de los Mercados y la Competencia. Septiembre 2013- Febrero 2017.</p>
            <p>Secretario general técnico-director del Secretariado del Gobierno. Ministerio de la Presidencia. Enero 2012- Septiembre 2013 (secretario adjunto de la Comisión General de Secretarios de Estado y Subsecretarios).

</p>
            <p>Secretario general técnico del Ministerio de la Presidencia. Noviembre 2010-Enero 2012.</p>
            <p>Secretario general técnico Ministerio de Defensa. Abril 2007 - Noviembre 2010.</p>
            <p>Presidente del Comisionado para el Mercado de Tabacos. Julio 2000-Mayo 2004.</p>
            <p>Ha prestado servicios en las Abogacías del Estado en Burgos, Soria, Asturias, Madrid y en los ministerios del Interior y Agricultura.</p>
           
            <button onClick={() => closeModal('modal16')}>Cerrar</button>
          </Modal>
        </div>
      
           


    </section> 
   
   
  </Layout>
  )
}


export const Head = () => <Seo title="Consejo de Administración" />

export default Consejo