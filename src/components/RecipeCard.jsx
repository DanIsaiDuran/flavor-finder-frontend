import React from 'react'
import testImage from '../assets/estofado-lentejas-chorizo-patatas.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDrumstickBite} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'

const RecipeCard = () => {
  return (
    <div className=''>
        <div class="max-w-sm bg-cardColor-700 border rounded-3xl shadow border-gray-400">
            <a href="#">
                <img class="rounded-t-3xl" src={testImage} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Estofado de papas</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className='mb-2'>
                    <FontAwesomeIcon icon={faClock} /> 50m
                </div>
                <div className='flex items-center justify-between'>
                    <div className=' '>
                        <div className='text-sm'>
                            DIFICULTAD: 
                        </div>
                        <div className='text-lg space-x-1'>
                            <FontAwesomeIcon icon={faDrumstickBite} />
                            <FontAwesomeIcon icon={faDrumstickBite} />
                            <FontAwesomeIcon icon={faDrumstickBite} />
                            <FontAwesomeIcon icon={faDrumstickBite} />
                            <FontAwesomeIcon icon={faDrumstickBite} />
                        </div>
                    </div>
                    <a href="#" class="inline-flex items-center px-4 py-1 text-sm font-medium text-center text-gray-900 bg-cardColor-700 rounded-full border border-gray-800 hover:bg-cardColor-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        VER RECETA
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default RecipeCard
