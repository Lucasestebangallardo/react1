
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartWidget from './components/CartWidget/CartWidget';
/* import ItemsContainer from './pages/ItemsListContainer/ItemsContainer'; */
import ItemsListContainer from './pages/ItemsListContainer/ItemsListContainer';
/* import ItemsListContainer from './pages/ItemsListContainer/ItemsListContainer'; */
import NavBar from './components/NavBar/Navbar';
import ItemDetailCointainer from './pages/itemDetailContainer/ItemDetailContainer';
import cart from './pages/Cart/cart';

function App() {
  return (
    <>
     <BrowserRouter>
    <NavBar/>
    
   
    <Routes>
      <Route path="/" element={< ItemsListContainer />
   } />
    <Route path="/category/:categoriaId" element={< ItemsListContainer />
   } />
      <Route path="ItemDetailContainer" element={<ItemDetailCointainer/>}/>
      <Route path="cart" element={<cart/>} />

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
