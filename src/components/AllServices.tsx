import React, { useRef } from "react";
import Services from "./uiComponents/Services";
import { useScroll, motion } from "framer-motion";
import { servicios } from "../data";

function AllServices() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.div
      className="min-h-screen grid place-content-center gap-10 pt-8"
      id="services"
    >
      <h1 className="text-center text-4xl font-bold">Servicios</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-content-center">
        {servicios.map((servicios) => (
          <Services key={servicios.nombre} servicios={servicios} />
        ))}
      </div>
    </motion.div>
  );
}

export default AllServices;
