import React from 'react'
import transition from '../Transition'
import { useLocation } from 'react-router-dom';

function Contact() {
  let { state } = useLocation();
  console.log({ruta: state})
  return (
    <div className='text-center min-h-screen bg-slate-500 grid place-content-center text-6xl text-white'>Contact</div>
  )
}

export default transition(Contact)