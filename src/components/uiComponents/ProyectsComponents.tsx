import React from "react";
import { SingleProyectProps } from "../../interfaces";

function ProyectsComponents({ proyects }: { proyects: SingleProyectProps }) {
  return (
    <div className="p-4">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://dummyimage.com/721x401"
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium  mb-3">
            {proyects.name}
          </h1>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Tecnologys
          </h2>
          <div className="tec flex gap-2">
            {proyects.tecnologys.map((tecnology: string) => {
              return (
                <span className="px-2 py-1 bg-gray-200 rounded-md text-black">
                  {tecnology}
                </span>
              );
            })}
          </div>
          <p className="leading-relaxed mb-3">{proyects.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default ProyectsComponents;
