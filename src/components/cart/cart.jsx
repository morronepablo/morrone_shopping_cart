import './cart.css'
import { CartContext } from '../../context/cartContext'
import { useContext } from 'react'


export const Cart = () => {
    const {products, removeItem, clear} = useContext(CartContext)
    let cart = false
    if(products.length > 0) {
        cart = true
    }

    function formatNumber(number) {
        return new Intl.NumberFormat( "ES-AR", {
            style: 'currency',
            currency: 'ARS',
        }).format(number)
    }

    if(cart) {
        return (
            <div className="cart"> 
                <div className="title">Resumen del carrito</div> 
                <div className="data">
                    {cart && products.map(product => 
                        <div className="item__fila" key={product.item.id}>
                            <ul>
                                <li>{product.item.title}</li>
                                <li>{formatNumber((product.item.price - Math.floor(product.item.price * product.item.discount) / 100).toFixed(2))}</li>
                                <li><button onClick={()=>{removeItem(product.item.id)}}>Eliminar producto</button></li>
                            </ul>
                        </div>
                    )}
                    <div className="vaciar_carrito">
                        <button onClick={()=>{clear()}}>Vaciar carrito</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="cart"> 
                <div className="title">Resumen del carrito</div> 
                <div className="data">
                    <h3>Carrito Vacio</h3>
                </div>
            </div>
        )
    }


    
}
