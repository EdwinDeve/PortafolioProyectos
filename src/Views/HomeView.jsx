import React from 'react'
import { Link } from 'react-router-dom'

const TextoInicio = () => {
  return (
    <div>
      <p className='text-center' style={{ fontSize: 40 }}>
        Bienvenido
      </p>
      <p>
        Bienvenido a mi portafolio de proyectos web! Aquí encontrarás una
        selección cuidadosamente curada de trabajos que reflejan mi pasión por el
        diseño y desarrollo de software.
        <br></br>
        A lo largo de mi carrera, he tenido la oportunidad de trabajar en una amplia
        gama de proyectos, desde sitios web informativos hasta aplicaciones web
        interactivas y comercio electrónico.
        <br></br>
        Mi enfoque se centra en crear experiencias en línea excepcionales y funcionales
        que no solo cumplan con los objetivos de mis clientes, sino que también cautiven
        a los usuarios finales.
        <br></br>
        Cada proyecto que presento aquí es un testimonio de mi compromiso con la
        calidad, la creatividad y la innovación en el mundo digital.
        <br></br>
        Desde el diseño de interfaces elegantes y responsivas hasta la
        implementación de tecnologías de vanguardia, estoy dedicado a ofrecer
        soluciones web que destaquen en un mercado cada vez más competitivo.
        <br></br>
        En este portafolio, podrás explorar proyectos que abarcan diversas industrias
        y desafíos, demostrando mi versatilidad y capacidad para adaptarme a
        las necesidades específicas de cada cliente.
        <br></br>
        ¡Gracias por visitar mi portafolio y por considerar mi experiencia en
        diseño y desarrollo web para tus proyectos!
        <br></br>
      </p>
    </div>
  )
}


const Boton =  () => {
  return(
    <div className='container text-center'>
      <Link to={'/Proyectos'} className=' btn btn-success' >
       Ver Proyectos
      </Link>
    </div>
  )
}
function HomeView() {

  return (
    <div className='fw container p-3 rounded MyBackgroundColor bg-primary-subtle' >
      <TextoInicio></TextoInicio>
      <Boton></Boton>
    </div>
  )
}

export default HomeView