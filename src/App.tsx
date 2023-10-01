import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';


export default function App() {
  const location = useLocation();

  return (
    <>
    <Navbar/>   
    <AnimatePresence mode='wait'>

    <Routes location={location} key={location.pathname}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<h1 className="text-center text-white text-xl font-bold">404</h1>} />
    </Routes >
    </AnimatePresence>

    </>
  );
}
