import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import './cart.css'

export const Cart = () => {
    const {products, removeItem, clear, totalCart} = useContext(CartContext)
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

    return (
        <Fragment>
            {cart ?
                <Fragment>
                    <div className="cart">
                        <div className="title">Resumen del carrito</div>
                        <div className="data">
                            <div className="data__header">
                                <div className="data__header-titulos1">
                                    <h3>Imagen</h3>
                                </div>
                                <div className="data__header-titulos2">
                                    <h3>Descripcion</h3>
                                </div>
                                <div className="data__header-titulos3">
                                    <h3>Precio Lista</h3>
                                </div>
                                <div className="data__header-titulos4">
                                    <h3>Des.</h3>
                                </div>
                                <div className="data__header-titulos5">
                                    <h3>Precio Final</h3>
                                </div>
                                <div className="data__header-titulos6">
                                    <h3>Subtotal</h3>
                                </div>
                            </div>
                            {products.map(product =>
                                <div className="item__fila" key={product.item.id}>
                                    <div className="item__fila-img">
                                        <img src={product.item.pictureUrl} alt="" />
                                        <br />
                                        <h4>{(product.item.title).substring(12, -1) + '...'}</h4>
                                    </div>
                                    <div className="item__fila-descripcion">
                                        <h3>{product.item.description}</h3>
                                    </div>
                                    <div className="item__fila-precio">
                                        <h3>{formatNumber((product.item.price).toFixed(2))}</h3>
                                    </div>
                                    <div className="item__fila-descuento">
                                        <h2> - {product.item.discount}%</h2>
                                    </div>
                                    <div className="item__fila-subtotal">
                                        <h2>{formatNumber((product.item.price - Math.floor(product.item.price * product.item.discount) / 100).toFixed(2))} x {" "} {product.quantity}</h2>
                                    </div>
                                    <div className="item__fila-subtotal2">
                                        <h2>{formatNumber((product.item.price - Math.floor(product.item.price * product.item.discount) / 100) * product.quantity)}</h2>
                                    </div>
                                    <div className="item__fila-eliminar">
                                        <button onClick={() => { removeItem(product.item.id) }}><i class="fas fa-backspace"></i></button>
                                    </div>
                                </div>
                            )}
                            <div className="totalCarrito">
                                <div className="totalCarrito__grupo">
                                    <h1 className="totalCarrito__grupo-label">Total Carrito :</h1>
                                    <h1 className="totalCarrito__grupo-total">{formatNumber(totalCart)}</h1>
                                </div>
                            </div>
                            <div className="acciones">
                                <div className="acciones__carrito">
                                    <button onClick={() => { clear() }}><i class="fas fa-broom"></i> Vaciar carrito</button>
                                </div>
                                <div className="acciones__carrito">
                                    
                                    <button><i class="fas fa-store"></i>
                                    
                                    <Link to="/checkOut" className="acciones__carrito-procesar">

                                     Procesar compra
                                    </Link>
                                     
                                     </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
                :
                <Fragment>
                    <div className="cart">
                        <div className="title">Resumen del carrito</div>
                        <div className="data">
                            <h3>Carrito Vacio</h3>
                        </div>
                    </div>
                </Fragment>}
        </Fragment>
    )
    
}
