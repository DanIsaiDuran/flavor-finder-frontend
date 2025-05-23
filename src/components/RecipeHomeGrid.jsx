import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'

const RecipeHomeGrid = ({recipes}) => {

    return (
        <div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>
                {
                    recipes.map(recipe => (
                        <RecipeCard key={recipe.id} 
                        name={recipe.name} 
                        description={recipe.description} 
                        preparationTime={recipe.preparationTime}
                        difficulty={recipe.difficulty}
                        id={recipe.id}
                        />
                    ))
                }
                
            </div>
        </div>
    )
}

export default RecipeHomeGrid