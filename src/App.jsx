import './App.css';
import React, { useContext, useState } from 'react'
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
import { AuthenticatedRoute } from './components/auth/AuthenticatedRoute';
import { AuthContext } from './components/context/AuthContext';

function App() {

  const {user, loading} = useContext(AuthContext);
  
  if (loading) return <Loader/>;

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="recetas" element={<Recipes/>}/>

          <Route element={<AuthenticatedRoute isAuthenticated={user? true:false}/>}>
            <Route path="receta/crear" element={<CreateRecipePage/>}/>
            <Route path="receta/editar/:recipeId" element={<CreateRecipePage/>}/>
          </Route>
          
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
