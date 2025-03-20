
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Toolbar from './components/Toolbar';
import NewProducts from './pages/NewProducts';
import Patterns from './pages/Patterns';
import PromptDelivery from './pages/PromptDelivery';
import Home from './pages/Home';
import BuyPage from './pages/BuyPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header className="App-header" />
      <Toolbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/newproducts' element = {<NewProducts />} />
        <Route path='/prompt' element = {<PromptDelivery />} />
        <Route path='/patterns' element = {<Patterns />} />
        <Route path='/buypage' element = {<BuyPage />} />
      </Routes>
      </BrowserRouter>   
      <Footer/>
    </div>
  );
}

export default App;
