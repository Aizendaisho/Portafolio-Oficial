import React from 'react'
import Contacto from '../components/Contacto'
import Header from '../components/Header'
import Hobbies from '../components/Hobbies'
import Skills from '../components/Skills'
import transition from '../Transition'
import AllServices from '../components/AllServices'
import HeaderParallax from '../components/HeaderParallax';

function Home() {
  return (
    <div className=" bg-slate-800 text-white ">
    <div className="content container mx-auto scroll-smooth">
      {/* <HeaderParallax /> */}
      <Header />
      <AllServices />
      <Skills />
      <Hobbies />
      <Contacto />
    </div>
  </div>
  )
}

export default transition(Home)