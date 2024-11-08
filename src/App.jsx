import './App.css';
import React, { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound';
import Loader from './components/Loader';
import CreateRecipePage from './pages/recipes/CreateRecipePage';

function App() {
  const [loading, setLoading] = useState(false);

  const toggleLoading = (isLoading) => {
    console.log("Toggle loading called with:", isLoading);
    setLoading(isLoading);
  };

  return (
    <>
      {loading ? <Loader /> :
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home toggleLoading={toggleLoading} />}/>
            <Route path="recetas" element={<Recipes/>}/>
            <Route path="receta/crear" element={<CreateRecipePage/>}/>
            <Route path="receta/editar/:recipeId" element={<CreateRecipePage/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
