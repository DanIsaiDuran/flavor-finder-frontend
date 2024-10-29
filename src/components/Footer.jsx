import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareFacebook, faTiktok, faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
    <div className='mt-6 mb-8 mx-6 md:mx-12 py-3 bg-primary-700 rounded-3xl'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <div className='font-bold flex items-center space-x-1'>
                <img src={logo} alt="Logo" className='w-8'/>
                <div className='flex flex-col leading-none'>
                    <span>Flavor</span>
                    <span>Finder</span>
                </div>
                
            </div>
            <div className='hidden md:flex space-x-8 font-bold'>
                <Link to="/" className='hover:text-white'>Inicio</Link>
                <Link to="/recetas" className='hover:text-white'>Recetas</Link>
                <Link to="/" className='hover:text-white'>Categorias</Link>
                <Link to="/" className='hover:text-white'>Nosotros</Link>
            </div>
            <div className='space-x-4'>
                <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
                <a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>  
            </div>
        </div>
        <div className='mt-3 text-center'>
            <div className='text-sm'>Copyright: © 2024 FlavorFinder.</div>
        </div>
    </div>
      
    </>
  )
}

export default Footer
