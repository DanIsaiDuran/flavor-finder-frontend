import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="recetas" element={<Recipes/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
