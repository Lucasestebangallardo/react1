/* import ItemList from "../ItemList/ItemList" */

import {Link} from 'react-router-dom';
const Item = ({producto}) => {
  return (
   
     <Link to={`item/${producto.id}`}>
      <div style={{border:'3px solid black'}}>
      <img src={`images/${producto.imagen}.jpg`} alt={producto.nombre} />
      <div>
     {/* <img></img> */}
     <h2>Nombre del producto: {producto.nombre}</h2>
      <h2>Talla del producto: {producto.talla}</h2>
      <h2>Color del producto: {producto.color}</h2>
      </div>
       
    </div>
     </Link>
     
  )
}

export default Item
