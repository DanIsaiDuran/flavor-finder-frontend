import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo1.png'

function Navbar() {
  return (
    <nav className='bg-primary-700 text-black mt-4 mb-8 mx-12 py-3 rounded-full'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <div className='font-bold flex items-center space-x-1'>
                <img src={logo} alt="Logo" className='w-8'/>
                <span className=''>Flavor Finder</span>
            </div>
            <div className='hidden md:flex space-x-8 font-bold'>
                <Link to="/" className='hover:text-white'>Inicio</Link>
                <Link to="/recetas" className='hover:text-white'>Recetas</Link>
                <Link to="/" className='hover:text-white'>Categorias</Link>
                <Link to="/" className='hover:text-white'>Nosotros</Link>
            </div>
            <div className='rounded-full flex-grow-0 font-bold bg-primary-900 px-3 py-2'>
                <button className='hover:text-white'>Iniciar sesión</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
