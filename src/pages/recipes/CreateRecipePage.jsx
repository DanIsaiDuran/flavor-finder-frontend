import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import recipeFormValidation from '../../services/recipeFormValidation';
import { AuthContext } from '../../components/context/AuthContext';

const CreateRecipePage = () => {
  
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    steps: '',
    ingredients: '',
    difficulty: '',
    preparationTime: 0,
    status: 'ACTIVE',
    tools: ''
  });

  const [errors, setErrors] = useState({});

  const { recipeId } = useParams();
  const navigate = useNavigate();

  const {user} = useContext(AuthContext);

  useEffect(() => {
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
  }, [recipeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({...recipe, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = recipeFormValidation(recipe);
    setErrors(newErrors);
    if(Object.keys(newErrors).length > 0) {
      return;
    }
    try {
      const url = recipeId ? `http://localhost:8080/api/v1/recipe/update/${recipeId}` : `http://localhost:8080/api/v1/recipe`;
      const method = recipeId ? 'put' : 'post';

      const response = await axios({
        method: method,
        url: url,
        data: recipe,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.jwt}`
        }
      });

      if (response.status === 201 || response.status === 200) {
        console.log('Datos enviados exitosamente');
        navigate('/');
      } else {
        console.error('Error al enviar los datos');
      }

    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <>
      <div className='max-w-sm mx-6 md:mx-12 sm:max-w-5xl lg:max-w-full xl:mx-12 p-4 bg-primary-400 rounded-3xl shadow-xl'>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-3">
          <div className="w-full sm:w-1/2 px-3 mb-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="name">
              Nombre <span className='text-red-700'>*</span>
            </label>
            <input id="name" name='name' type="text" placeholder="Nombre" value={recipe.name} onChange={handleChange} className=" block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"  />
            {errors.name && <p className="mt-2 text-sm text-red-700 dark:text-red-700">{errors.name}</p>}
          </div>
          <div className="w-full sm:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="difficulty">
              Dificultad <span className='text-red-700'>*</span>
            </label>
            <select value={recipe.difficulty} onChange={handleChange} id="difficulty" name='difficulty' className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-3">
              <option value="">Seleccione una opción</option>
              <option value='VERY_EASY'>Muy facil</option>
              <option value='EASY'>Facil</option>
              <option value='MEDIUM'>Media</option>
              <option value='HARD'>Dificil</option>
              <option value='VERY_HARD'>Muy dificil</option>
            </select>
            {errors.difficulty && <p className="mt-2 text-sm text-red-700 dark:text-red-700">{errors.difficulty}</p>}
          </div>
          <div className="w-full sm:w-1/4 px-3 ">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="preparationTime">
              Tiempo de preparación <span className='text-red-700'>*</span>
            </label>
            <input type="number" name="preparationTime" id="preparationTime" value={recipe.preparationTime} onChange={handleChange} className="appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"/>
            {errors.preparationTime && <p className=" text-sm text-red-700 dark:text-red-700">{errors.preparationTime}</p>}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="description">
              Descripción <span className='text-red-700'>*</span>
            </label>
            <textarea name="description" id="description" value={recipe.description} onChange={handleChange} className="appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
            {errors.description && <p className="text-sm text-red-700 dark:text-red-700">{errors.description}</p>}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="description">
              Pasos <span className='text-red-700'>*</span>
            </label>
            <textarea name="steps" id="steps" value={recipe.steps} onChange={handleChange} className="appearance-none w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-72"></textarea>
            {errors.steps && <p className="text-sm text-red-700 dark:text-red-700">{errors.steps}</p>}
          </div>
        </div>
        <div className="flex flex-wrap mb-2">
          <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="grid-city">
              Ingredientes <span className='text-red-700'>*</span>
            </label>
            <textarea name="ingredients" id="ingredients" value={recipe.ingredients} onChange={handleChange} className="appearance-none w-full h-24 bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
            {errors.ingredients && <p className="text-sm text-red-700 dark:text-red-700">{errors.ingredients}</p>}
          </div>
          <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="grid-city">
              Herramientas <span className='text-red-700'>*</span>
            </label>
            <textarea name="tools" id="tools" value={recipe.tools} onChange={handleChange} className="appearance-none w-full h-24 bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
            {errors.tools && <p className="text-sm text-red-700 dark:text-red-700">{errors.tools}</p>}
          </div>
        </div>
        <div className='flex flex-row-reverse'>
          <div>
            <button type='submit' className='bg-secondary rounded-full px-3 py-2 mx-3 text-white font-bold'>Enviar</button>
          </div>
          <div>
            <button type='button' onClick={() => navigate('/')} className='bg-secondary rounded-full px-3 py-2 mx-3 text-white font-bold'>Cancelar</button>
          </div>
        </div>
      </form>
      </div>
    </>
  )
}

export default CreateRecipePage
