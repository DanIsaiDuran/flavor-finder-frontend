import React from 'react'
import testImage from '../assets/estofado-lentejas-chorizo-patatas.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDrumstickBite} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

const RecipeCard = ({name, description, preparationTime, difficulty, id}) => {
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
            <div className="w-[440px] h-[470px] lg:flex lg:flex-row lg:w-[500px] lg:h-[320px] xl:w-[620px] xl:h-[270px] bg-cardColor-700 border rounded-3xl shadow border-gray-400 overflow-hidden">
                <img className="w-full h-[200px] object-cover lg:w-[250px] lg:h-auto" src={testImage} alt="" />
                <div className="p-5 flex flex-col justify-between flex-1">
                    <h5 className=" h-[70px] mb-1 lg:mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                    <p className="mb-3 h-[65px] font-normal text-sm text-gray-700">{description}</p>
                    <div className='py-2'>
                        <FontAwesomeIcon icon={faClock} /> {preparationTime}m
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
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
                       
                        <Link to={`/receta/${id}`} className="inline-flex items-center px-4 py-1 text-sm font-medium text-center text-gray-900 bg-cardColor-700 rounded-full border border-gray-800 hover:bg-cardColor-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Ver Receta
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
