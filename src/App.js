
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartWidget from './components/CartWidget/CartWidget';
/* import ItemsContainer from './pages/ItemsListContainer/ItemsContainer'; */
import ItemsListContainer from './pages/ItemsListContainer/ItemsListContainer';
/* import ItemsListContainer from './pages/ItemsListContainer/ItemsListContainer'; */
import NavBar from './components/NavBar/Navbar';
import ItemDetailCointainer from './pages/itemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/cart'
import CartProvider from './context/CartProvider'

function App() {
  return (
    
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    
   
    <Routes>
      <Route path="/" element={< ItemsListContainer />
   } />
    <Route path="/category/:categoriaId" element={< ItemsListContainer />
   } />
      <Route path="item/:id"/* ItemDetailContainer  */element={<ItemDetailCointainer/>}/>
      <Route path="cart" element={<Cart/>} />

    </Routes>
    </BrowserRouter>

    </CartProvider>
     
    
    </>
  );
}

export default App;
