import { useState } from 'react'
import { ItemCount } from '../itemCount/itemCount'
import './itemDetail.css'

export const ItemDetail = ({ item }) => {

    // Estock Aleatorio para productos (hasta que venga de la BD)
    var min = 1;
    var max = 20;
    var Rand =  min + (Math.random() * (max-min));
    const stockInicial = Math.round(Rand)
    const [stock, setStock] = useState(stockInicial)

    // ---------------------------------------------------------
    
    const handleCarrito = () => {
        console.log("ir al carrito")
        document.getElementById('alCarrito').style.display='none'
        document.getElementById('irCarrito').style.display='block'
        document.getElementById('contadorProducto').style.display='none'
    }

    return (

        <div className='detail'>
            <div className='detail__image'> 
                {item !== undefined ? <img src={item.pictureUrl} alt="" /> : <p>{''}</p>}
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
                        {item !== undefined ? <p>Precio de venta al publico: $ {item.price.toFixed(2)}</p> : <p>{''}</p>}
                        <div className="detail__info__buy-price-actions">
                            {item !== undefined ? <p>-{item.discount}%</p> : <p>{''}</p>}
                            {item !== undefined ? <p> $ {(item.price - Math.floor(item.price * item.discount) / 100).toFixed(2)}</p> : <p>{''}</p>} 
                        </div>
                        <div id="contadorProducto" className="detail__info__itemcount">
                            <ItemCount stock={stock} initial={1} onAdd={() => console.log('onAdd')}  />
                        </div>
                    </div>
                    <button disabled={!stock} id="alCarrito" className="detail__info__buy-btn" onClick={handleCarrito}><i class="fas fa-cart-plus"></i> Al Carrito</button>
                    <button id="irCarrito" className="detail__info__buy-btn2"><i class="fab fa-opencart"></i> Ir al Carrito</button>
                </div>
                <div>
                </div>
            </div>
        </div>
                
    )
}

