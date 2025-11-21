import React from 'react';
import './App.css';
import Home1 from './pages/Home1';
import About from './pages/About';
import Product from './pages/Product';
import Recipes from './pages/Recipes';
import Singleproduct from './pages/Singleproduct';
import Singlerecipe from './pages/Singlerecipe';
import ScrollToTop from './components/Scrolltotop';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home1/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
          <Route path='/single/:ProductId' element={<Singleproduct/>}/>
          <Route path='/single-recipe/:RecipesId' element={<Singlerecipe/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
