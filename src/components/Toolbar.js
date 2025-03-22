import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';

import '../styles/Toolbar.css';
import theme from '../components/Themes.js';
import { ThemeProvider } from '@mui/material/styles';

const Toolbar = ({ cart, setCart }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  // Atualizar quantidade no carrinho
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + amount } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  // Remover item do carrinho
  const deleteItem = (id) => {
    if (window.confirm('Você tem certeza que deseja remover este item?')) {
      setCart((cart) => cart.filter((item) => item.id !== id));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="toolbar-app">
        <div className="toolbar">
          <h1 className="toolbar-logo" onClick={() => navigate('/') }>Amelier Store</h1>
          <input type="text" placeholder="Pesquisar..." className="toolbar-filter" />

          <div className="toolbar-buttons">
            <Badge badgeContent={cart.length} color="beige">
              <IconButton className="toolbar-shopping" onClick={() => setCartOpen(true)}>
                <ShoppingCartIcon />
              </IconButton>
            </Badge>
          </div>
        </div>

        {/* Drawer do carrinho */}
        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          <Box sx={{ width: 400, padding: 2 }}>
            <h2>Meu Carrinho</h2>
            <Divider />
            {cart.length === 0 ? (
              <p>Carrinho vazio.</p>
            ) : (
              <List>
                {cart.map((item) => (
                  <ListItem key={item.id}>
                    <div className="list-item">
                      <img className="img-cart" src={item.image} alt={item.title} />
                      <h4>{item.title}</h4>
                      <IconButton onClick={() => updateQuantity(item.id, -1)}>-</IconButton>
                      <span>{item.quantity}</span>
                      <IconButton onClick={() => updateQuantity(item.id, 1)}>+</IconButton>
                      <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                      <Tooltip title="Remover">
                        <IconButton onClick={() => deleteItem(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <Divider />
                    </div>
                  </ListItem>
                ))}
              </List>
            )}
            <Divider />
            <button className="bt-purchase" onClick={() => alert('Finalizar Compra')}>
              Comprar
            </button>
          </Box>
        </Drawer>

        {/* Navbar */}
        <div className="toolbar__">
          <div className="navbar">
            <button className="navbar-news" onClick={() => navigate('/newproducts')}>
              Lançamentos
            </button>
            <button className="navbar-prompt-delivery" onClick={() => navigate('/womensclothing')}>
              Vestuário Feminino
            </button>
            <button className="navbar-prompt-delivery" onClick={() => navigate('/mensclothing')}>
              Vestuário Masculino
            </button>
            <button className="navbar-prompt-delivery" onClick={() => navigate('/jewelery')}>
              Jóias
            </button>
            <button className="navbar-patterns" onClick={() => navigate('/eletronics')}>
              Eletrônicos
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Toolbar;
