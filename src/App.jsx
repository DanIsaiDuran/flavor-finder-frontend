import './App.css';
import React, { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound';
import Loader from './components/Loader';
import CreateRecipePage from './pages/recipes/CreateRecipePage';
import ViewRecipePage from './pages/recipes/ViewRecipePage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="recetas" element={<Recipes/>}/>
          <Route path="receta/crear" element={<CreateRecipePage/>}/>
          <Route path="receta/editar/:recipeId" element={<CreateRecipePage/>}/>
          <Route path="receta/:recipeId" element={<ViewRecipePage/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
