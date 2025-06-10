import React from 'react'

import '../styles/Footer.css';
import email from '../assets/icons/email.png';
import instagram from '../assets/icons/instagram.png';
import whatsapp from '../assets/icons/whatsapp.png';

const Footer = () => {
    //Footer
  return (
    <div className='container-footer'>
      <div className='container-footer-social'>
        
      <h1 className='bt-logo'>Amelier Crochet</h1>
          <button className='bt-social'>
            <img className='img-social' src={instagram} alt='instagram'></img>
          </button>
          <button className='bt-social'>
            <img className='img-social' src={whatsapp} alt='whatsapp'></img>
          </button>
          <button className='bt-social'>
            <img className='img-social' src={email} alt='email'></img>
          </button>
      </div>
      <div>
        <input></input>
      </div>
      <div className='container-footer-links'>
        <button className='bt-links'>Sobre</button>          
        <button className='bt-links'>Contato</button>
        <button className='bt-links'>Produtos</button>
        <button className='bt-links'>FAQ</button>
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