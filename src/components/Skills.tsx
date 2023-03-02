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
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="h-screen mt-10 grid place-content-center text-4xl">
      <AiFillHtml5 className="text-orange-400" />
      <FaCss3Alt className="text-blue-600" />
      <SiJavascript className="text-yellow-300" />
      <SiExpress className="text-gray-400" />
      <FaNodeJs className="text-green-600" />
      <SiTailwindcss className="text-blue-500" />
      <FaBootstrap className="text-indigo-700" />
      <FaSass className="text-pink-400" />
      <SiJson className="text-gray-600" />
      <SiJsonwebtokens />
      <SiTypescript className="text-blue-800" />
      <SiMongodb className="text-green-800" />
      <SiMysql className="text-blue-300" />
      <FaReact className="text-blue-400" />
      <FaPython />
    </div>
  );
}
