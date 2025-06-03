import React from 'react'
import testImage from '../../assets/estofado-lentejas-chorizo-patatas.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDrumstickBite} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const RecipeTagsCard = ({name, preparationTime, difficulty, id}) => {
    const difficultyLevels = {
        VERY_EASY: 1,
        EASY: 2,
        MEDIUM: 3,
        HARD: 4,
        VERY_HARD: 5
    };
    const difficultyValue = difficultyLevels[difficulty];

    return (
        <>
            <Link to={`/receta/${id}`}>
                <div className="max-w-[300px] rounded-xl overflow-hidden shadow-lg transition duration-500 hover:scale-105">
                    <div className="relative">
                        <img className="w-full" src={testImage} alt="imagen de receta"/>
                        <span className="font-bold text-white text-lg mb-2 absolute bottom-4 left-1 bg-gray-800 bg-opacity-5"> {name} </span>
                    </div>
                    <div className='flex justify-between pt-2 px-4'>
                        <div><FontAwesomeIcon icon={faClock} /> {preparationTime}m</div>                 
                        <div>
                            <div className='text-sm'>
                                Dificultad: 
                            </div>
                            <div className='text-lg space-x-1'>
                                {
                                    [...Array(difficultyValue)].map((_, index) => (
                                        <FontAwesomeIcon icon={faDrumstickBite} key={index}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#comida</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#saludable</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cena</span>
                    </div>
                </div>
            </Link>
        </>
  )
}

export default RecipeTagsCard
