import './cart.css'
import { CartContext } from '../../context/cartContext'
import { useContext } from 'react'


export const Cart = () => {
    const {products} = useContext(CartContext)
    let cart = false
    if(products.length > 0) {
        cart = true
    }

    return (
        <div className="cart"> 
            <div className="title">Resumen del carrito</div> 
            <div className="data">
                {/* <h1>Carrito</h1> */}
                {cart && products.map(product => 
                    <div className="item__fila" key={product.item.id}>
                        <ul>
                            <li>{product.item.title}</li>
                            <li><button>Eliminar producto</button></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
