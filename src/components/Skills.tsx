import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaBootstrap,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiJson,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import IconNextdotjs from "./icons/NextIcon";
import IconAstro from "./icons/AstroIcon";
import IconBxlRedux from "./icons/ReduxIcon";
import { motion } from "framer-motion";
import SkillMagnetic from "./SkillMagnetic";
import { varList } from "../animation";

const iconsAndName = [
  {
    icon: <AiFillHtml5 />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    icon: <SiExpress />,
    name: "Express",
  },
  {
    icon: <SiTailwindcss />,
    name: "TailwindCSS",
  },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
  },
  {
    icon: <SiJson />,
    name: "JSON",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
  },
  {
    icon: <FaNodeJs />,
    name: "NodeJS",
  },
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <FaSass />,
    name: "Sass",
  },
  {
    icon: <FaPython />,
    name: "Python",
  },
  {
    icon: <IconNextdotjs />,
    name: "Next.js",
  },
  {
    icon: <IconAstro />,
    name: "Astro",
  },
  {
    icon: <IconBxlRedux />,
    name: "Redux",
  },
];


export default function Skills() {
  return (
    <div className="min-h-screen grid place-content-center gap-10 pt-8" id="skills">
      <h1 className="text-center text-4xl font-bold">Skills</h1>
      <div className="grid lg:grid-cols-8 place-content-center text-xl gap-6 grid-cols-4 md:grid-cols-6">
        {iconsAndName.map((iconAndName, index) => (
          <SkillMagnetic>
            <motion.div
              key={index}
              variants={varList}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              custom={index}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-3xl">{iconAndName.icon}</span>
              <p className="text-center">{iconAndName.name}</p>
            </motion.div>
          </SkillMagnetic>
        ))}
      </div>
    </div>
  );
}
