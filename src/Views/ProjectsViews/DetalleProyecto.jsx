import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function DetalleProyecto() {

  const Location = useLocation()
  const proyecto = Location.state;

  const [imagenSelect, SetImagen] = useState()

  return (
    <div className='container bg-light p-3 rounded'>
      <div className='row'>
        <div className='col'>
          <p style={{ fontSize: 50 }} >
            {proyecto.NombreProyecto}
          </p>
        </div>
        <div className='col text-center'>
          <Link to={'/Proyectos'} className='btn btn-warning' style={{ marginTop: '4%' }}>
            Regresar
          </Link>
        </div>
      </div>
      <p>
        {proyecto.Descripcion}
      </p>



      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          {proyecto.Fotos.map((imagen) => (
            <div class="carousel-item active">
              <img src={imagen} class="d-block w-100" alt="Imagen del proyato " />
            </div>
          ))}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
     



      {/* <div className='row'>
        {proyecto.Fotos.map((imagen, index) => (

          <img
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => (
              SetImagen(imagen)
            )}
            key={index}
            src={imagen}
            alt="Imagen del proyecto"
            className='col-md-4 img-thumbnail' />

        ))}

        
      </div> */}

    </div>
  )
}

export default DetalleProyecto