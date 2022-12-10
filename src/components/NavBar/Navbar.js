import './NavBar.css';

import logo from '../../images/logos/logopc.jpg';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    
    <div className="navbar bg-base-100 flex headerNav">
        <div className="flex-5">
          <Link to='/' className=" logoNavBar btn btn-ghost normal-case text-xl" href='https://www.google.com'><img src={logo} alt={logo}/></Link>
        </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/pc/'}>Pc completa</NavLink></li>
          <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/placas'}>Placas de video</NavLink></li>
          <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/monitores'}>Monitores</NavLink></li>
          <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/perifericos'}>Perifericos</NavLink></li>
        </ul>
      </div>
    
      <NavLink className="mr-5 scaleCss nav__link btn btn-square btn-ghost" to='cart'>
                            <CartWidget />
                        </NavLink>

    </div>

  );
};

export default NavBar;