import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import{Link, NavLink} from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
  return (
    <div className='menu-navbar-container'>
      
      <h1 className='menu-title'>Tienda online</h1>
      <div>
      <ul className='menu-items'>
        <li >
          <NavLink to="/" Id='menu-list'
          /* className={({isActive})=> isActive ? 'active' :'inactive' }  */
          activeClassName="active"
             >Productos</NavLink>
        </li>
        <li >
          <NavLink to="/category/pantalones" Id='menu-list'  activeClassName="active"
             >Pantalones</NavLink>
           
        </li>
        <li >
        <NavLink to="/category/remeras" Id='menu-list'activeClassName="active"
             >Remeras</NavLink>
        </li>
      </ul>
      </div>
      
        {/* <a href='/cart' className='menu-list'>Carrito</a> */}
        {/* <Link to="/cart">Carrito</Link> */}
       <div>
        <Link to="/cart" Id='menu-list'> Carrito</Link>
      Carrito
       </div>
      {/* </div>
      <CartWidget/> */}
      
    </div>
  )
}

export default Navbar
