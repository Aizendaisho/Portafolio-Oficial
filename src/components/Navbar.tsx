import React, { useEffect, useState } from "react";
import logo from "../assets/logo-porta.png";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  FaIdCardAlt,
  FaUserTie,
  FaSkating,
  FaTruckLoading,
  FaSuitcase,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

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
  { path: "home", name: "Home", icon: <AiFillHome /> },
  { path: "about", name: "About Me", icon: <FaIdCardAlt /> },
  { path: "skills", name: "Skills", icon: <FaUserTie /> },
  { path: "hobbies", name: "Hobbies", icon: <FaSkating /> },
  { path: "proyect", name: "Proyect", icon: <FaSuitcase /> },
  { path: "experience", name: "Experience", icon: <FaTruckLoading /> },
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
  const [currentSection, setCurrentSection] = useState(''); 
  const determineCurrentSection = () => {
    const sections = linksNav.map((link) => link.path); // Lista de secciones
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          setCurrentSection(section);
          break; // Solo marcamos la primera sección que se encuentre en la vista
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', determineCurrentSection);
    return () => {
      window.removeEventListener('scroll', determineCurrentSection);
    };
  }, []);

  return (
    <nav className="sticky bg-slate-800 top-0 navbar flex items-center justify-between shadow-xl  z-10 text-white">
      <a href="#header" className="logo">
        <img src={logo} alt="logo" className="h-10 object-cover md:h-12 " />
      </a>

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
            <a
            href={`#${link.path}`}
              className={`flex gap-2 items-center justify-center ${currentSection === link.path ? 'bg-blue-500' : ''}`}    >
              {link.icon}
              <AnimatedLinks title={link.name} />
            </a>
          </li>
        ))}
                {/* {linksNav.map((link) => (
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
        ))} */}
      </ul>
    </nav>
  );
}
