import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDrumstickBite, faCircle} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import testImage from '../../assets/estofado-lentejas-chorizo-patatas.avif'
import { LoaderContext } from '../../components/context/LoaderContext';

const ViewRecipePage = () => {

    const [recipe, setRecipe] = useState({});
    const {recipeId} = useParams();
    const {toogleLoading} = useContext(LoaderContext);

    const difficultyLevels = {
        VERY_EASY: 1,
        EASY: 2,
        MEDIUM: 3,
        HARD: 4,
        VERY_HARD: 5
    };
    
    const difficultyValue = difficultyLevels[recipe.difficulty];
    const formattedSteps = recipe?.steps ? recipe.steps.replace(/\n/g, '<br>') : "";
    const formattedIngredients = recipe?.ingredients ? recipe.ingredients.split(/\n/g) : [];
    const formattedTools = recipe?.tools ? recipe.tools.split(/\n/g) : [];

    useEffect(() => {
        toogleLoading(true);
        if(recipeId) {
            axios.get(`http://localhost:8080/api/v1/recipe/${recipeId}` , {
                validateStatus: (status) => status >= 200 && status <= 302,
            })
            .then(response => {
            setRecipe(response.data);
            })
            .catch(error => {
            console.error('Error al cargar la receta', error);
            });
        }
        toogleLoading(false);
    }, [recipeId]);

    return (
        <>
            <div className='rounded-3xl mx-6 md:mx-12 sm:max-w-5xl lg:max-w-full xl:mx-12 p-4 shadow-lg'>
                <div className='max-w-xl mx-auto mt-3'>
                    <h1 className='text-center text-2xl md:text-5xl uppercase font-bold mb-3'>{recipe.name}</h1>
                    <p className='text-center text-gray-800 mb-3'>{recipe.description}</p>
                    <div className='flex justify-center space-x-6'>
                        <div><FontAwesomeIcon icon={faClock} /> {recipe.preparationTime}m</div>
                        <div className='text-md font-bold'> - </div>
                        <div className='text-lg space-x-1'>
                            {
                                [...Array(difficultyValue)].map((_, index) => (
                                    <FontAwesomeIcon icon={faDrumstickBite} key={index}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={testImage} alt="estofado" className="w-full max-w-sm md:max-w-7xl rounded-3xl m-6 object-fill mx-auto" style={{ height: "25rem" }}/>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-sm mx-auto md:max-w-7xl'>
                    <div className='col-span-12 lg:col-span-8 order-2 lg:order-1 '>
                        <h2 className='text-2xl mb-3'>Preparación</h2>
                        <div dangerouslySetInnerHTML={{ __html: formattedSteps }}></div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 rounded-3xl bg-secondary p-4 order-1 lg:order-2'>
                        <div className='bg-cardColor-700 rounded-2xl p-4 mb-3'>
                            <h2 className='text-red-700'>Ingredientes</h2>
                            <ul className=' list-disc px-4'>
                                {
                                    formattedIngredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))
                                }
                            </ul> 
                        </div>
                        <div className='bg-cardColor-700 rounded-2xl p-4'>
                            <h2 className='text-red-700'>Herramientas</h2>
                            <ul className=' list-disc px-4'>
                                {
                                    formattedTools.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))
                                }
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewRecipePage
