import React from "react";
import logo from "../assets/logo-porta.png";
import { AiOutlineMenu } from "react-icons/ai";
import {
  FaIdCardAlt,
  FaUserTie,
  FaSkating,
  FaTruckLoading,
  FaSuitcase,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky bg-slate-800 top-0 navbar flex items-center justify-between shadow-xl mb-4 z-10">
      <div className="logo">
        <img src={logo} alt="logo" className="h-10 object-cover md:h-12 " />
      </div>

      {/* <div className="correo mr-1 text-md md:text-lg lg:text-2xl font-bold text-green-300 font-serif tracking-wider lowercase">
        {" "}
        AraldiGarcia@hotmail.com
      </div> */}

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost m-1 md:hidden text-2xl ">
          <AiOutlineMenu />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow rounded-box w-52 bg-slate-800"
        >
          <li className=" btn btn-ghost"> About Me</li>
          <li className=" btn btn-ghost">Skills</li>
          <li className=" btn btn-ghost">Hobbies</li>
          <li className=" btn btn-ghost">Experience</li>
          <li className=" btn btn-ghost">Proyect</li>
        </ul>
      </div>

      <ul className=" hidden md:flex items-center justify-between gap-4">
        <li className=" btn btn-ghost btn-xs flex gap-2 items-center justify-center">
          <FaIdCardAlt /> About Me
        </li>
        <li className=" btn btn-ghost btn-xs flex gap-2 items-center justify-center">
          <FaUserTie /> Skill
        </li>
        <li className=" btn btn-ghost btn-xs flex gap-2 items-center justify-center">
          <FaSkating /> Hobbies
        </li>
        <li className=" btn btn-ghost btn-xs flex gap-2 items-center justify-center">
          <FaTruckLoading /> Experience
        </li>
        <li className=" btn btn-ghost btn-xs flex gap-2 items-center justify-center">
          <FaSuitcase /> Proyects
        </li>
      </ul>
    </nav>
  );
}
