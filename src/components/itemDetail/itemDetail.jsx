//import { Item } from "../item/item"
import './itemDetail.css'

export const ItemDetail = ({ item }) => {

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
                        {/* <p>Precio de venta al publico: $ {100}</p> */}
                        <div className="detail__info__buy-price-actions">
                            {item !== undefined ? <p>-{item.discount}%</p> : <p>{''}</p>}
                            {/* <p>-{5}%</p> */}
                            {item !== undefined ? <p> $ {(item.price - Math.floor(item.price * item.discount) / 100).toFixed(2)}</p> : <p>{''}</p>} 
                            {/* <p> ${(100 - Math.floor(100 * 5) / 100).toFixed(2)}</p> */}
                        </div>
                    </div>
                    <button className="detail__info__buy-btn">Comprar</button>
                </div>
            </div>
        </div>
                
    )
}


//{/* {item !== undefined ? <p>{item.title}</p> : <p>Hola que tal</p>} */}
//{/* <p>{item[0].title}</p> */}
//{/* <h3 key={item.id}>{item.title}</h3> */}
//{/* <Item key={item.id} item={item} />  */}

