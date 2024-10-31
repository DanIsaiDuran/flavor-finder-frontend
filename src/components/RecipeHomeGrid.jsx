import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import axios from "axios";

const RecipeHomeGrid = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    const getBestRatedRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/recipe/best-five');
            setRecipes(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBestRatedRecipes();
    }, []);

    return (
        <div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
                {
                    recipes.map(recipe => (
                        <RecipeCard key={recipe.id} 
                        name={recipe.name} 
                        description={recipe.description} 
                        preparationTime={recipe.preparationTime}
                        difficulty={recipe.difficulty}
                        />
                    ))
                }
                
            </div>
        </div>
    )
}

export default RecipeHomeGrid