import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import NewProducts from './pages/NewProducts';
import Eletronics from './pages/Eletronics';
import WomensClothing from './pages/WomensClothing';
import MensClothing from './pages/MensClothing.js';
import Home from './pages/Home';
import Jewelery from './pages/Jewelery';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  // Adicionar item ao carrinho
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      return existingItem
        ? prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <BrowserRouter>
      <Header />
      {/* Passando o carrinho e a função de adicionar ao Toolbar */}
      <Toolbar cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newproducts" element={<NewProducts addToCart={addToCart} />} />
        <Route path="/mensclothing" element={<MensClothing addToCart={addToCart} />} />
        <Route path="/womensclothing" element={<WomensClothing addToCart={addToCart} />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/eletronics" element={<Eletronics addToCart={addToCart} />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
