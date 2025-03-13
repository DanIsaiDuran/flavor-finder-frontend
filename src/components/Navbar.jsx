import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo1.png'
import logosvg from '../assets/Icono Negro.svg'

function Navbar() {
  return (
    <nav className='bg-primary-700 text-black mt-4 mb-8 mx-6 md:mx-12 py-3 rounded-full'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <div className='font-bold flex items-center space-x-1'>
                <img src={logosvg} alt="Logo" className='w-8'/>
                <div className='flex flex-col leading-none'>
                    <span>Flavor</span>
                    <span>Finder</span>
                </div>
            </div>
            <div className='hidden sm:flex space-x-8 font-bold'>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'underline decoration-2 hover:text-white' : 'hover:text-white')}>Inicio</NavLink>
                <NavLink to="/recetas" className={({ isActive }) => (isActive ? 'underline decoration-2 hover:text-white' : 'hover:text-white')}>Recetas</NavLink>
                <NavLink to="/receta/crear" className={({ isActive }) => (isActive ? 'underline decoration-2 hover:text-white' : 'hover:text-white')}>Crear receta</NavLink>
                <NavLink to="/recetas" className={({ isActive }) => (isActive ? 'underline decoration-2 hover:text-white' : 'hover:text-white')}>Nosotros</NavLink>
            </div>
            <div className='hidden sm:flex rounded-full flex-grow-0 font-bold bg-primary-900 px-3 py-2'>
                <button className='hover:text-white'>Iniciar sesión</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
