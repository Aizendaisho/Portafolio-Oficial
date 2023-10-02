import React from "react";

export default function Contacto() {
  return (
    <div className="grid min-h-screen" id="contacto">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 place-self-center text-black ">
      <div className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nombre</span>
          </label>
          <input type="text" placeholder="Nombre" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Asunto</span>
          </label>
          <input type="text" placeholder="asunto" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mensaje</span>
          </label>
          <textarea  placeholder="Mensaje" className="textarea textarea-bordered resize-none" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
    </div>


  );
}
