import React from 'react'

import { ListadoSoftware } from '../../ProjectsData/ProjectsData'
import { Link } from 'react-router-dom'



function ListadoProyectos() {
  return (
      <div className='row p-5'>
        {ListadoSoftware.map((Proyecto) => (
          <div className='col-md-4 text-center'>
            <Link to={'/Detalles'} state={Proyecto} className='p-3 link-underline link-underline-opacity-0'>
              <div className=' card bg-primary-subtle'>
                {/* encabezado */}
                <div className=' card-header'>
                <p style={{fontWeight: 'bold', fontSize: 20}}>
                {Proyecto.NombreProyecto}
                </p>
                </div>
                {/* cuerpo */}
                <div className=' card-body'>
                <p>
                {Proyecto.Descripcion}
                </p>
                </div>
                <div className='card-footer'>
                  <p style={{fontStyle: 'italic'}}>
                    click en la tarjeta para saber mas
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
  )
}

export default ListadoProyectos