import React from 'react'
import Services from './uiComponents/Services';

const servicios = [
    {
        nombre: 'Front End Development',
        icono: 'fas fa-code',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        nombre: 'Back End Developemnt',
        icono: 'fas fa-paint-brush',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        nombre: 'Database Administration',
        icono: 'fas fa-bullhorn',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        nombre: 'Front End Development',
        icono: 'fas fa-code',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        nombre: 'Back End Developemnt',
        icono: 'fas fa-paint-brush',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        nombre: 'Database Administration',
        icono: 'fas fa-bullhorn',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }
]

function AllServices() {
  return (
    <div className="min-h-screen grid place-content-center gap-10 pt-8" id='services'>

        <h1 className="text-center text-4xl font-bold">Servicios</h1>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 place-content-center'  >
        {servicios.map((servicios) => (
            <Services key={servicios.nombre} servicios={servicios} />
            ))}

    </div>
    </div>
  )
}

export default AllServices