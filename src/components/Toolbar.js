import React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

//Css
import '../styles/Toolbar.css';

import NewProducts from '../pages/NewProducts';
import PromptDelivery from '../pages/PromptDelivery';
import Patterns from '../pages/Patterns';


const Toolbar = ({newproducts, patterns, prompt, buypage}) => {

  // paleta de cores
  const theme = createTheme({
    palette: {
      sage: {
        light: '#757ce8',
        main: '#B5C18E',
        dark: '#002884',
        contrastText: '#fff',
      },
      beige: {
        light: '#ff7961',
        main: '#F7DCB9',
        dark: '#ba000d',
        contrastText: '#000',
      },
      tamara: {
        light: '#ff7961',
        main: '#DEAC80',
        dark: '#ba000d',
        contrastText: '#000',
      },
      castain: {
        light: '#ff7961',
        main: '#B99470',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  

// botoes customizados
      
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[100]),
    backgroundColor: green[300],
    '&:hover': {
      backgroundColor: green[400],
    },
    fontFamily: "Zain",
    fontSize: '20px',
  }));

  // Estado para controlar a aba ativa
  const [activeSection, setActiveSection] = useState(null);

  // Função para alternar a aba ativa
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

// Estado do carrinho
const [cart, setCart] = useState([]);

// Função para adicionar itens ao carrinho
const addToCart = (product) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === product.id);

    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};

// Estado para abrir/fechar o drawer do carrinho
const [cartOpen, setCartOpen] = useState(false);

// Estado para aumentar ou diminuir a quantidade de itens do carrinho
const updateQuantity = (id, amount) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
      .filter((item) => item.quantity > 0) // Remove o item se a quantidade for 0
  );
};

// Estado para deletar o item do carrinho
const DeleteItens = (id) => {
  const confirmDelete = window.confirm("Você tem certeza que deseja remover este item?");
  
  if (confirmDelete) {
    setCart((cart) => cart.filter((item) => item.id !== id));
  }
};

// scroll to section
  
const [newProduct , setNewProduct] = useState();

const newproductsRef = useRef(null);
const patternsRef = useRef(null);
const promptRef = useRef(null);
const buypageRef = useRef(null);

const scrollToNewProducts = () => {
  newproductsRef.current.scrollIntoView({behavior: "smooth"});
  setNewProduct(newproducts);
};

const scrollToPatterns = () => {
  patternsRef.current.scrollIntoView({ behavior: "smooth"});
  setNewProduct(patterns);
};
const scrollToPrompt = () => {
  promptRef.current.scrollIntoView({ behavior: 'smooth'});
  setNewProduct(prompt);
};
const scrollToBuyPage = () => {
  buypageRef.current.scrollIntoView({ behavior: 'smooth'});
  setNewProduct(buypage);
};

//Drawer list ----------------------------------------------------------------

const [state2, setState2] = useState({right: false});


  const toggleUser = (anchor2, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState2({ ...state2, [anchor2]: open });
  };

  const listMenu = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleUser(anchor, false)}
      onKeyDown={toggleUser(anchor, false)}
    >
      <Box
      sx={{ fontSize: '22px', textAlign: 'center' ,padding: '10px' }}
      >Amelier Crochet</Box>
      <Divider />
      <List>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Meus Pedidos</ListItem>
          <ListItem>Meus Downloads</ListItem>      
      </List>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <ColorButton variant="contained">Sair</ColorButton>
        </Box>
    </Box>
  );

  const navigate = useNavigate();

  return (
    <div className="toolbar-app">
      <div className="toolbar">
        <h1 className="toolbar-logo">Amelier Crochet</h1>
        <input type="text" placeholder="Pesquisar..." className="toolbar-filter" />

        <div className="toolbar-buttons">
          <ThemeProvider theme={theme}>
            <Badge badgeContent={cart.length} color="beige">
              <button className="toolbar-shopping" onClick={() => setCartOpen(true)}></button>
            </Badge>
          </ThemeProvider>
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
                  <div className='list-item'>
                    <img className='img-cart' src={item.image}></img>
                    <h4>{item.title}</h4>
                    <IconButton onClick={() => updateQuantity(item.id, -1)}>-</IconButton>
                    <span>{item.quantity}</span>
                    <IconButton onClick={() => updateQuantity(item.id, +1)}>+</IconButton>
                    <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                    <Tooltip title="Delete">
                      <IconButton onClick={()=> DeleteItens(item.id)}>
                        <DeleteIcon/>
                      </IconButton>
                    </Tooltip>
                    <Divider />
                  </div>
                </ListItem>
                
              ))}
            </List>
            
          )}
          <Divider />
          <ColorButton fullWidth onClick={() => alert('Finalizar Compra')}>
            Comprar
          </ColorButton>
        </Box>
      </Drawer>

        {/* Navbar */}
      <div className="toolbar__">
        <div className="navbar">
          <button className="navbar-news" onClick={() => toggleSection('newproducts')}>
            Lançamentos
          </button>
          <button className="navbar-patterns" onClick={() => toggleSection('patterns')}>
            Receitas
          </button>
          <button className="navbar-prompt-delivery" onClick={() => toggleSection('prompt')}>
            Pronta Entrega
          </button>
        </div>
      </div>

        {/* Exibir conteúdo da seção ativa */}
      <div className="content">
        {activeSection === navigate('/newproducts')}
        {activeSection === 'patterns' && <Patterns addToCart={addToCart}/>}
        {activeSection === 'prompt' && <PromptDelivery addToCart={addToCart}/>}
      </div>
    </div>
  );
};
export default Toolbar