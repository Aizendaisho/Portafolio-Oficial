import React from "react";
import ProyectsComponents from "./uiComponents/ProyectsComponents";

export default function Hobbies() {
  return (

<div className="min-h-screen grid place-content-center gap-10 pt-8" id='hobbies'>

<h1 className="text-center text-4xl font-bold">Proyectos</h1>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 place-content-center'  >
<ProyectsComponents />
<ProyectsComponents />
<ProyectsComponents />


</div>
</div>
  );
}
