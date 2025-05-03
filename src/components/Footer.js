import React from 'react'

import '../styles/Footer.css';

const Footer = () => {
    //Footer
  return (
    <div className='container-footer'>
      <div className='container-footer-social'>
        
      <h1 className='toolbar-logo'>Amelier Store</h1>
          <button className='bt-social'>
            <img alt='instagram'></img>
          </button>
          <button className='bt-social'>
            <img alt='whatsapp'></img>
          </button>
          <button className='bt-social'>
            <img alt='email'></img>
          </button>
      </div>
      <div className='container-footer-links'>
        <button className='bt-links'>Sobre</button>          
        <button className='bt-links'>Contato</button>
        <button className='bt-links'>Produtos</button>
        <button className='bt-links'>FAQ</button>
        <button className='bt-links'>Trabalhe conosco</button>
      </div>
      <div className='container-footer-terms'>
        <p className='p-copy'>Copyright © 2025 Amelier Store</p>
        <button className='bt-terms'>Termos de uso</button>
        <button className='bt-terms'>Política de privacidade</button>
      </div>
    </div>
  )
}

export default Footer