import React from 'react'

interface ServiciosProps {
  nombre: string;
  descripcion: string;
  icono: string;
}

function Services({servicios}:{servicios:ServiciosProps}) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[100px]">
        {/* <img src={servicios.icono} alt={servicios.nombre} className="w-20 h-20" /> */}
        <h3 className="text-xl font-bold text-center min-h-16">{servicios.nombre}</h3>
        <p className="text-center">{servicios.descripcion}</p>
      </div>
      <hr className="my-4" />
<br />
<br />
    </div>
  )
}

export default Services