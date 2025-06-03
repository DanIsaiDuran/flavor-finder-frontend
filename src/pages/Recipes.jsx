import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../components/context/AuthContext'
import { LoaderContext } from '../components/context/LoaderContext';
import axios from "axios";
import RecipeTagsCard from '../components/recipe/RecipeTagsCard';

function Recipes() {

  const { user, isAdmin } = useContext(AuthContext);
  const [recipes, setRecipes] = useState();
  const {toogleLoading} = useContext(LoaderContext);
  const [url, setUrl] = useState('http://localhost:8080/api/v1/recipe?size=10')

  const getRecipes = async () => {
    try {
      toogleLoading(true);
      const response = await axios.get(url);
      console.log(response.data.content);
      setRecipes(response.data.content);
      toogleLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const addFilters = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
  }

  useEffect(() => {
    getRecipes();
  }, [url]);

  return (
    <>
      {/* Filters here */}
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" name='page' value={1} onClick={addFilters}>
        1
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        2
      </button>
      */}
      {/* Recipes grid */} 
      <div className='mx-6 md:mx-12'>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
          {
            recipes && recipes.map(recipe => (
              <RecipeTagsCard key={recipe.id} 
                            name={recipe.name} 
                            preparationTime={recipe.preparationTime}
                            difficulty={recipe.difficulty}
                            id={recipe.id}
                            />
            ))
          }
        </div>
      </div>
      
      
    </>
  )
}

export default Recipes
