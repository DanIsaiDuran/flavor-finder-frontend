import React, { useEffect, useState } from 'react'
import image from '../assets/estofado-lentejas-chorizo-patatas.avif'
import homeImage from '../assets/HomeImage.jpg'
import RecipeHomeGrid from '../components/RecipeHomeGrid'
import axios from "axios";


function Home({ toggleLoading }) {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const getBestRatedRecipes = async () => {
    /* toggleLoading(true); */
    try {
      const response = await axios.get('http://localhost:8080/api/v1/recipe/best-five');
      setRecipes(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      /* toggleLoading(false); */
    }
  }

  useEffect(() => {
    getBestRatedRecipes();
  }, []);

  return (
    <>
      <div className='mx-6 md:mx-12'>
        <div className=' relative text-center'>
            <img src={homeImage} alt="estofado" className="w-full object-cover rounded-3xl" style={{ height: "35rem" }}/>
            <div className='w-full absolute top-0 left-0 text-center'>
              <h2 className='text-4xl mt-32 md:text-7xl text-textBackground font-bold'>EXCELENCIA</h2>
              <h2 className='text-4xl md:text-7xl text-textBackground font-bold'>CULINARIA</h2>
              <p className='text-textBackground text-balance text-md mt-4 max-w-md mx-auto'>
                Explora un mundo de sabores, descubre recetas 
                caseras y deja que el aroma de nuestra pasión por la cocina llene tu cocina
              </p>
              <button className='mt-12 bg-primary-700 rounded-full px-3 py-2 hover:bg-primary-900 text-textBackground font-bold'>
                EXPLORAR RECETAS
              </button>
            </div>
        </div>

        <div className=' mt-12 flex flex-wrap-reverse'>
          <div className='mr-6'>
            <h2 className='font-bold text-4xl'>MEJORES RECETAS</h2>
          </div>
          <div className='grow place-content-center w-64 md:w-max-full mb-5 sm:mb-0'>
            <hr className="border-primary-900 border-2" />
          </div>
        </div>

        <RecipeHomeGrid recipes={recipes}/>
        

        <div className='mt-12 bg-secondary text-center rounded-3xl h-64 place-content-center'>
            <h2 className='text-textBackground text-center font-bold text-4xl max-w-md mx-auto'>
              ¡SUSCRIBETE A NUESTRO BOLETIN!
            </h2>
            <p className='text-textBackground text-sm text-balance max-w-md mx-auto mt-4'>
              Obten recomendaciones de nuestras mejores recetas cada semana ademas de información nutricional.
            </p>
            <div className='relative w-full max-w-sm mx-auto mt-4'>
              <input type="text" placeholder='Correo electrónico' className='rounded-full px-4 py-2 w-full pr-24' />
              <button type='button' className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-900 rounded-full text-white px-4 py-1'>
                SUSCRIBIRTE
              </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
