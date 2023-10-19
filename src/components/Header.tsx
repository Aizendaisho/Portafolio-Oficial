import React from "react";
import heroPhoto from "../assets/foto2.jpg";

export default function Header() {
  return (
    <div className=" min-h-screen grid place-content-center pt-8" id="home">
      <div className=" flex-row md:flex items-center gap-12">
        <img src={heroPhoto} className="max-w-sm rounded-lg shadow-2xl animate-fade-right animate-fill-forwards" />
        <div className="flex gap-12 flex-col items-start">
          <h1 className="text-5xl font-bold animate-fade-up animate-fill-forwards">Hi There</h1>
          <p className="text-truncate max-w-[500px] min-w-[200px]">
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
