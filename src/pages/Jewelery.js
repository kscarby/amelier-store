import React, { useState, useEffect } from 'react';

const Jewelery = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((data) => {
        // Filtra apenas os produtos da categoria "jewelery"
        const filteredProducts = data.filter((item) => item.category === "jewelery");
        setProducts(filteredProducts);
      });
  }, []);

  return (
    <div className='app'>
      <h1 className='new-title'>Jóias</h1>
      {products.length > 0 ? (
        products.map((item) => (
          <div key={item.id} className='card-newproduct'>
            <img className='img-newproduct' src={item.image} alt={item.description} />

            <div className='card-price'>
              <h1>{item.title}</h1>
              <h2>R$ {item.price}</h2>
              <p>R$ {item.price} à vista com desconto ou 3x {(item.price / 3).toFixed(2)} Sem juros</p>
              <div className='card-buy'>
                <button className='button-buy' onClick={() => addToCart(item)}>Comprar</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Carregando produtos...</p>
      )}
    </div>
  );
};

export default Jewelery;
