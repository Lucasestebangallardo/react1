import React from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { data } from "../../data/data"
import { useEffect,useState } from 'react'

const ItemDetailCointainer = () => {
  const [productoSelected, setProductoSelected] = useState();
  const{id} = useParams ();

  const getProducto= () => {
    const productoFiltered = data.filter ((producto) => {
      return producto.id == id;
    })
    setProductoSelected(...productoFiltered);
  }

  useEffect(() => {
    getProducto();
  },[id]);

  return (
    <div>
      {productoSelected && 
       < ItemDetail  productoSelected={productoSelected}/>
      }
    
    </div>
  )
}

export default ItemDetailCointainer
