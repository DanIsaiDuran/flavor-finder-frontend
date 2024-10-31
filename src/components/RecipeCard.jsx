import React from 'react'
import testImage from '../assets/estofado-lentejas-chorizo-patatas.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDrumstickBite} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'

const RecipeCard = ({name, description, preparationTime, difficulty}) => {
    const difficultyLevels = {
        VERY_EASY: 1,
        EASY: 2,
        MEDIUM: 3,
        HARD: 4,
        VERY_HARD: 5
    };
    const difficultyValue = difficultyLevels[difficulty];

    return (
        <div>
            <div className="max-w-lg min-h-[505px] bg-cardColor-700 border rounded-3xl shadow border-gray-400">
                <a href="#">
                    <img className="rounded-t-3xl" src={testImage} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                    </a>
                    <p className="mb-3 min-h-[50px] font-normal text-gray-700">{description}</p>
                    <div className='mb-2'>
                        <FontAwesomeIcon icon={faClock} /> {preparationTime}m
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className=' '>
                            <div className='text-sm'>
                                DIFICULTAD: 
                            </div>
                            <div className='text-lg space-x-1'>
                                {
                                    [...Array(difficultyValue)].map((_, index) => (
                                        <FontAwesomeIcon icon={faDrumstickBite} key={index}/>
                                    ))
                                }
                            </div>
                        </div>
                        <a href="#" className="inline-flex items-center px-4 py-1 text-sm font-medium text-center text-gray-900 bg-cardColor-700 rounded-full border border-gray-800 hover:bg-cardColor-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            VER RECETA
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
