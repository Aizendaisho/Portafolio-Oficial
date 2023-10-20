import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import { ServiciosProps } from '../../interfaces';

function Services({servicios}:{servicios:ServiciosProps}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY, scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],})
  return (
    <motion.div
    ref={ref}
    style={{
        scale: scrollYProgress,
        opacity: scrollYProgress}}
    >
      <div className="flex flex-col items-center justify-center min-h-[100px]">
        {/* <img src={servicios.icono} alt={servicios.nombre} className="w-20 h-20" /> */}
        <h3 className="text-xl font-bold text-center min-h-16">{servicios.nombre}</h3>
        <p className="text-center">{servicios.descripcion}</p>
      </div>
      <hr className="my-4" />
<br />
<br />
    </motion.div>
  )
}

export default Services