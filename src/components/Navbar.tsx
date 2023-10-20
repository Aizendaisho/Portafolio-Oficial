import React, { useEffect, useState } from "react";
import logo from "../assets/logo-porta.png";
import {
  AiFillHome,
  AiOutlineClose,
  AiOutlineMenu,
  AiFillExperiment,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaIdCardAlt,
  FaUserTie,
  FaSkating,
  FaTruckLoading,
  FaSuitcase,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { MobilLinks, TitleLink, TitleProps } from "../interfaces";
import {
  menuLinksVariants,
  letterAnimation,
  letterAnimationTwo,
  titleAnimation,
  menuContainerVariants,
  menuVariants,
} from "../animation";

const MobileLinks = ({ title, href, onClick }: MobilLinks) => {
  return (
    <motion.div
      variants={menuLinksVariants}
      initial="initial"
      animate="open"
      className="flex flex-col items-center hover:underline transition-transform"
      onClick={onClick}
    >
      <a href={`#${href}`} className="text-lg font-bold text-center">
        {title}
      </a>
    </motion.div>
  );
};

const linksNav = [
  { path: "home", name: "Home", icon: <AiFillHome /> },
  { path: "services", name: "Services", icon: <AiFillExperiment /> },
  { path: "skills", name: "Skills", icon: <FaUserTie /> },
  { path: "hobbies", name: "Proyects", icon: <FaSkating /> },
  { path: "contacto", name: "Contact", icon: <FaTruckLoading /> },
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
  const [open, setOpen] = useState(false);
  const toogleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const [currentSection, setCurrentSection] = useState("");
  const determineCurrentSection = () => {
    const sections = linksNav.map((link) => link.path);
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          setCurrentSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", determineCurrentSection);
    return () => {
      window.removeEventListener("scroll", determineCurrentSection);
    };
  }, []);

  return (
    <nav className="sticky bg-slate-800 top-0 navbar flex items-center justify-between shadow-xl  z-10 text-white">
      <a href="#header" className="logo">
        <img src={logo} alt="logo" className="h-10 object-cover md:h-12 " />
      </a>

      <div className="">
        <AiOutlineMenu
          onClick={toogleMenu}
          className="md:hidden cursor-pointer mr-8"
        />

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="md:hidden fixed left-0 top-0 w-full h-screen origin-top bg-slate-500 text-white p-10"
            >
              <div className="flex h-full  flex-col">
                <div className="flex justify-between">
                  <h1 className="text-lq">Portafolio</h1>
                  <AiOutlineClose
                    onClick={toogleMenu}
                    className="cursor-pointer text-2xl"
                  />
                </div>

                <motion.div
                  variants={menuContainerVariants}
                  initial="initial"
                  animate="open"
                  className="flex flex-col items-center justify-center h-full gap-10 text-center text-xl font-bold uppercase tracking-wider font-serif "
                >
                  {linksNav.map((links, index) => (
                    <div className="overflow-hidden">
                      <MobileLinks
                        href={`${links.path}`}
                        title={links.name}
                        key={index}
                        onClick={toogleMenu}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ul className=" hidden md:flex items-center justify-between gap-6 transition-all">
        {linksNav.map((link) => (
          <li key={link.name}>
            <a
              href={`#${link.path}`}
              className={`flex gap-2 items-center justify-center ${
                currentSection === link.path
                  ? "bg-blue-500 px-2.5 py-1 rounded-md"
                  : ""
              }`}
            >
              {link.icon}
              <AnimatedLinks title={link.name} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
