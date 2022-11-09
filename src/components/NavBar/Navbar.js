import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

import './NavBar.css'

const Navbar = () => {
  return (
    <div className='menu-navbar-container'>
      <h1 className='menu-title'>Tienda online</h1>
      <ul className='menu-items'>
        <li >
            <a href='' className='menu-list'>Productos</a>
        </li>
        <li >
            <a href='' className='menu-list'>Buscar</a>
        </li>
        <li >
            <a href='' className='menu-list'>Pedidos</a>
        </li>
      </ul>
      <CartWidget/>
    </div>
  )
}

export default Navbar
