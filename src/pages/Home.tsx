import { Navbar, Footer } from 'flowbite-react'
import React from 'react'
import AboutMe from '../components/AboutMe'
import Contacto from '../components/Contacto'
import Experiencia from '../components/Experiencia'
import Formacion from '../components/Formacion'
import Header from '../components/Header'
import Hobbies from '../components/Hobbies'
import Skills from '../components/Skills'
import transition from '../Transition'
import AllServices from '../components/AllServices'

function Home() {
  return (
    <div className=" bg-slate-800 text-white ">
    <div className="content container mx-auto scroll-smooth">
      <Header />
      <AllServices />
      {/* <AboutMe /> */}
      <Skills />
      <Hobbies />
      {/* <Formacion />
      <Experiencia /> */}
      <Contacto />
    </div>
  </div>
  )
}

export default transition(Home)