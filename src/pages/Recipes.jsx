import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../components/context/AuthContext'
import { LoaderContext } from '../components/context/LoaderContext';
import axios from "axios";
import RecipeTagsCard from '../components/recipe/RecipeTagsCard';
import { Select, Button, TextInput, Pagination } from 'flowbite-react';
import { useSearchParams } from 'react-router-dom';

function Recipes() {

  const { user, isAdmin } = useContext(AuthContext);
  const [recipes, setRecipes] = useState();
  const {toogleLoading} = useContext(LoaderContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState();

  const [searchParams, setSearchParams] = useSearchParams();

  const getRecipes = async () => {
    try {
      toogleLoading(true);
      const difficulty = searchParams.get("difficulty");
      const maxPreparationTime = searchParams.get("maxPreparationTime");
      const page = searchParams.get("page");
      const search = searchParams.get("word");

      // Fetch with filters
      const query = new URLSearchParams();
      if (difficulty) query.append("difficulty", difficulty);
      if (maxPreparationTime) query.append("maxPreparationTime", maxPreparationTime);
      if(page) query.append("page", page-1);
      if(search) query.append("word", search);
      const response = await axios.get(`http://localhost:8080/api/v1/recipe?${query.toString()}`);
      console.log(response.data)
      setTotalPages(response.data.totalPages);
      setRecipes(response.data.content);
      toogleLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
      const value = e.target.value;
      const param = e.target.name;

      if (value) {
        searchParams.set(param, value);
      } else {
        searchParams.delete(param);
      }
    setSearchParams(searchParams);
  }

  /* Handle page change */
  const onPageChange = (page) => {
    setCurrentPage(page);
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }

  /* When clear filters button is pressed, the filters are cleared */
  const handleCleanFilters = () => {
    setSearchParams({"page": 1});
    setCurrentPage(1);
  }

  /* UseEffect to handle search filter */
  useEffect(() => {
    const handler = setTimeout(() => {
      if(search){
        searchParams.set('word', search);
      }
      else{
        searchParams.delete('word');
      }
      setSearchParams(searchParams);
    }, 700);

    return () => clearTimeout(handler);
  }, [search]);

  /* When searchParams are updated makes a new fetch to the api */
  useEffect (() => {
    getRecipes();
  }, [searchParams]);


  return (
    <>
      <div className='mx-6 md:mx-12'>
        {/* Filters*/}
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-12 md:col-span-4'>
            <input type="text" id="search" onChange={(e) => setSearch(e.target.value)} value={searchParams.get("word") || ""}  className="w-full bg-secondary text-white text-md rounded-lg p-3 placeholder-white" placeholder='Buscar receta'></input>
          </div>
          
          <div className='col-span-12 md:col-span-2'>
            <select name="difficulty" id="difficulty" onChange={handleChange} value={searchParams.get("difficulty") || ""} className='w-full bg-secondary text-white text-md rounded-lg p-3' >
              <option value="" disabled hidden>Dificultad</option>
              <option value="">Todas</option>
              <option value="0">Muy facil</option>
              <option value="1">Facil</option>
              <option value="2">Intermedio</option>
              <option value="3">Dificil</option>
              <option value="4">Muy dificil</option>
            </select>
          </div>

          <div className='col-span-12 md:col-span-2'>
            <input type="number" id="maxPreparationTime" name='maxPreparationTime' onChange={handleChange} value={searchParams.get("maxPreparationTime") || ""} className="w-full bg-secondary text-white text-md rounded-lg p-3 placeholder-white" placeholder='Tiempo de preparacion' min={1}></input>
          </div>

          <div className='col-span-12 md:col-span-2'>
            <button type='button' onClick={handleCleanFilters} className='bg-primary-700 rounded-lg p-3 text-white font-bold'>Limpiar filtros</button>
          </div>
        </div>

        {/* Recipes grid */} 
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 '>
          {
            recipes && recipes.length > 0 ? (

              recipes.map(recipe => (
              <RecipeTagsCard key={recipe.id} 
                            name={recipe.name} 
                            preparationTime={recipe.preparationTime}
                            difficulty={recipe.difficulty}
                            id={recipe.id}
                            />
              ))
            ):
            (
              <div className='text-black text-lg'>No se encontraron recetas</div>
            )
          }
          
        </div>

        {/* Pagination */}
        <div className='mt-2'>
          <Pagination
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={onPageChange} 
          color='secondary' 
          previousLabel="Atrás"
          nextLabel="Siguiente"/>
        </div>
        
      </div>
    </>
  )
}

export default Recipes
