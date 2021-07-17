import { Link } from 'react-router-dom'
import './item.css'

export const Item = ({item}) => {
    const {id} = item

    return (

        <div className="product">
            <div className="product__info">
                <p className="product__title">{item.title.length > 16 ? item.title.substring(16, -1) + '...' : item.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>
            </div>
            <div className="product__rating">
                {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                ))}
            </div>
            <div className="product__image">
                <img src={item.pictureUrl} alt="" />
            </div>
            <Link className='product__button' to={`/item/${id}`}>
                <div>Detalle Producto</div>
            </Link>
        </div>
    )
}