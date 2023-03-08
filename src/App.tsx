import React from 'react'
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Formacion from "./components/Formacion";
import Experiencia from "./components/Experiencia";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className=" bg-slate-800 text-white">
      <Navbar />
      <div className="content container mx-auto">
        <Header />
        <AboutMe />
        <Skills />
        <Hobbies />
        <Formacion />
        <Experiencia />
        <Contacto />
      </div>
        <Footer />
    </div>
  );
}
