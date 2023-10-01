import React, { useState } from "react";
import logo from "../assets/logo-porta.png";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  FaIdCardAlt,
  FaUserTie,
  FaSkating,
  FaTruckLoading,
  FaSuitcase,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

interface TitleProps {
  title: string;
  animation: any;
  isHover: boolean;
}

interface TitleLink {
  title: string;
}

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.003,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.003,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.1, 0.5, 0.95],
      type: "tween",
    },
  },
};
const letterAnimationTwo = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.1, 0.5, 0.95],
      type: "tween",
    },
  },
};

const linksNav = [
  { path: "/about", name: "About Me", icon: <FaIdCardAlt /> },
  { path: "/skills", name: "Skills", icon: <FaUserTie /> },
  { path: "/hobbies", name: "Hobbies", icon: <FaSkating /> },
  { path: "/Experience", name: "Experience", icon: <FaTruckLoading /> },
  { path: "/Proyect", name: "Proyect", icon: <FaSuitcase /> },
];

const AnimatedLinks = ({ title }: TitleLink) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative cursor-pointer overflow-hidden"
    >
      <AnimatedWord
        title={title}
        animation={letterAnimation}
        isHover={isHover}
      />
      <div className="absolute top-0">
        <AnimatedWord
          title={title}
          animation={letterAnimationTwo}
          isHover={isHover}
        />
      </div>
    </motion.div>
  );
};
const AnimatedWord = ({ title, animation, isHover }: TitleProps) => {
  return (
    <motion.span
      className="relative whitespace-nowrap"
      variants={titleAnimation}
      initial="rest"
      animate={isHover ? "hover" : "rest"}
    >
      {title.split("").map((letter, index) =>
        letter === " " ? (
          <span key={index}>&nbsp;</span>
        ) : (
          <motion.span
            className="relative inline-block whitespace-nowrap"
            variants={animation}
          >
            {letter}
          </motion.span>
        )
      )}
    </motion.span>
  );
};

export default function Navbar() {
  return (
    <nav className="sticky bg-slate-800 top-0 navbar flex items-center justify-between shadow-xl  z-10 text-white">
      <Link to={"/"} className="logo">
        <img src={logo} alt="logo" className="h-10 object-cover md:h-12 " />
      </Link>

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
          <li className=" btn btn-ghost">About Me</li>
          <li className=" btn btn-ghost">Skills</li>
          <li className=" btn btn-ghost">Hobbies</li>
          <li className=" btn btn-ghost">Experience</li>
          <li className=" btn btn-ghost">Proyect</li>
        </ul>
      </div>

      <ul className=" hidden md:flex items-center justify-between gap-6">
        {linksNav.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "underline decoration-white underline-offset-2  flex gap-2 items-center justify-center"
                  : " flex gap-2 items-center justify-center"
              }
            >
              {link.icon}
              <AnimatedLinks title={link.name} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
