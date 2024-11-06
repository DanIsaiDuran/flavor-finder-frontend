import './App.css';
import React, { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(false);

  const toggleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  return (
    <>
      {loading ? <Loader /> :
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home toggleLoading={toggleLoading} />}/>
            <Route path="recetas" element={<Recipes/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
