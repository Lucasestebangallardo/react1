/* import ItemList from "../ItemList/ItemList" */

const Item = ({producto}) => {
  return (
    <div style={{border:'3px solid black'}}>
      <img src={`images/${producto.imagen}.jpg`} alt={producto.nombre} />
      <div>
     {/* <img></img> */}
     
     <h2>Nombre del producto: {producto.nombre}</h2>
      <h2>Talla del producto: {producto.talla}</h2>
      <h2>Color del producto: {producto.color}</h2>
      </div>
       
    </div>
  )
}

export default Item
