import React, { useState } from 'react'
import { ItemCount } from '../itemCount/itemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import './itemDetail.css'

export const ItemDetail = ({ item }) => {

    // Formato numeros a Moneda Local
    function formatNumber(number) {
        return new Intl.NumberFormat( "ES-AR", {
            style: 'currency',
            currency: 'ARS',
        }).format(number)
    }
    //----------------------------------------------

    // Estock Aleatorio para productos (hasta que venga de la BD)

    var min = 1;
    var max = 20;
    var Rand =  min + (Math.random() * (max-min));
    const stockInicial = Math.round(Rand)
    const [stock, setStock] = useState(stockInicial)
    const [count, setCount] = useState(0)
    

    // ---------------------------------------------------------

    const { addItems } = useContext(CartContext)


    const onAdd = (cantidad) => {
        document.getElementById('irCarrito').style.display='block'
        setCount(cantidad)
        addItems(item, cantidad)
    }

    const irAlCarrito = () => {
        window.location = '/cart';
    }
    
    return (

        <div className='detail'>
            <div className='detail__image'> 
                <div className='detal__image-tamano'>
                    {item !== undefined ? <img src={item.pictureUrl} alt="" /> : <p>{''}</p>}
                </div>
            </div>
            <div className='detail__info'>
                <div className='detail__info-title'>
                    {item !== undefined ? <p key={item.id}>{item.title}</p> : <p>{''}</p>}
                </div>
                <div className='detail__info-delivery'>
                    Entrega en 24/48hs.
                </div>
                <div className='detail__info-description'>
                    {item !== undefined ? <p>{item.description}</p> : <p>{''}</p>}
                </div>
                <div className='detail__info__buy'>
                    <div className='detail__info__buy-price'>
                        {item !== undefined ? <p>Precio de venta al publico:  {formatNumber((item.price.toFixed(2)))}</p> : <p>{''}</p>}
                        <div className="detail__info__buy-price-actions">
                            {item !== undefined ? <p>-{item.discount}%</p> : <p>{''}</p>}
                            {item !== undefined ? <p> {formatNumber((item.price - Math.floor(item.price * item.discount) / 100).toFixed(2))}</p> : <p>{''}</p>} 
                        </div>
                    </div>
                    <div id="contadorProducto" className="detail__info__itemcount">
                        {!count && <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>}
                        <button id="irCarrito" className="detail__info__buy-btn2" onClick={irAlCarrito  }><i class="fab fa-opencart"></i> Ir al Carrito</button>
                        {/* {!!count && <button className="detail__info__buy-btn2" onClick={finishPurchase}><i class="fab fa-opencart"></i> Ir al Carrito</button>} */}
                    </div>
                </div>
            </div>
        </div>
                
    )
}

