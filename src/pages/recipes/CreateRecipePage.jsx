import React, { useState } from 'react'
import axios from "axios";

const CreateRecipePage = () => {
  
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    steps: '',
    ingredients: '',
    difficulty: '',
    preparetionTime: '',
    status: '',
    tools: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({...recipe, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/recipe/1', recipe, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Datos enviados exitosamente');
      } else {
        console.error('Error al enviar los datos');
      }

    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <>
      <div className='max-w-sm sm:max-w-7xl mx-auto p-4 bg-secondary rounded-3xl'>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-3">
          <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input id="name" name='name' type="text" placeholder="Nombre" value={recipe.name} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  />
          </div>
          <div className="w-full sm:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="description">
              Dificultad
            </label>
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="">Seleccione una opción</option>
                <option value="VERY_EASY">Muy facil</option>
                <option value="EASY">Facil</option>
                <option value="MEDIUM">Media</option>
                <option value="HARD">Dificil</option>
                <option value="VERY_HARD">Muy dificil</option>
              </select>
          </div>
          <div className="w-full sm:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="preparationTime">
              Tiempo de preparación
            </label>
            <input type="text" name="preparationTime" id="preparationTime" value={recipe.preparetionTime} onChange={handleChange} className="appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"/>
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="description">
              Descripción
            </label>
            <textarea name="description" id="description" value={recipe.description} onChange={handleChange} className="appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="description">
              Pasos
            </label>
            <textarea name="steps" id="steps" value={recipe.steps} onChange={handleChange} className="appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-72"></textarea>
          </div>
        </div>
        <div className="flex flex-wrap mb-2">
          <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">
              Ingredientes
            </label>
            <textarea name="ingredients" id="ingredients" value={recipe.ingredients} onChange={handleChange} className="appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
          </div>
          <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">
              Herramientas
            </label>
            <textarea name="tools" id="tools" value={recipe.tools} onChange={handleChange} className="appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
          </div>
        </div>
      </form>
      </div>
    </>
  )
}

export default CreateRecipePage
