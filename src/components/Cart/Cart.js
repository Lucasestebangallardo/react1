import './cart.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import swal from 'sweetalert2'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();


    const order = {
        buyer: {
            name: 'Lucas',
            email: 'gallardolucasesteban@gmail.com',
            phone: '3547507476',
            address: 'Avenida de Mayo 456, Cordoba, Alta Gracia'
        },
        items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
        swal.fire({
            title: '¡Usted a emitido una orden de Compra!'
        });
    }

    if (cart.length === 0) {
        return (
            <>
                <p className="m-5 noElements">No hay elementos en el carrito.</p>
                <Link to='/' className="ml-5 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">Hacer compras</Link>
            </>
        );
    }

    return (
        <>
            <div className='cartItems'>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            
        </div>
        <div className="buttonFinish flex flex-col items-center mt-10">
                <p>
                    TOTAL: ${totalPrice()}
                </p>
                <button onClick={handleClick} className="mt-2 mb-20 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">Emitir Compra</button>
            </div>
        </>
    )
}

export default Cart;