import React from "react";
import heroPhoto from "../assets/foto2.jpg";

export default function Header() {
  return (
    <div className="hero min-h-screen" id="home">
      <div className="hero-content flex-col lg:flex-row">
        <img src={heroPhoto} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Hi There</h1>
          <p className="py-6">
            I am a Psychiatric Nurse who is in a career transition to Front-End
            Development. My main objective is to develop professionally and
            evolve in my sector, so I look for opportunities that allow me to do
            so, while trying to fully align with the objectives of the business.
          </p>
        </div>
      </div>
    </div>
  );
}
