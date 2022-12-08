import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext} from "react";
import { cartContext } from "../../context/CartProvider";



const ItemDetail = ({productoSelected}) => {
  const [count, setCount] = useState(0);
  const {cart,addToCart} = useContext(cartContext);
  return (
    <div>
      {/* <h1>Esta es la cantidad de productos en el carrito{cart.length}</h1> */}
      <h2>{productoSelected.id}</h2>
      <h2>{productoSelected.nombre}</h2>
      <h2>{productoSelected.category}</h2>
      <h2>{productoSelected.precio}</h2>
      <h2> {count}</h2>
      <ItemCount setCount={setCount}/>
     <button onClick={()=> addToCart(productoSelected, count)}>Agregar al carrito</button>
      
      
    </div>
  )
}

export default ItemDetail
