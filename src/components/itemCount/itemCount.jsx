import { useState } from "react"
import './itemCount.css'
export const ItemCount = ({ initial, stock, onAdd=()=>{} }) => {
    const [count, setCount] = useState(initial)

    //const setProduct = useContext(CartContext)

    const handleCount = (operator) => {
        if(operator === '+') {
            if(stock > count) {
                setCount(count + 1)
            }
        } else if(operator === '-') {
            if(count > 1) {
                setCount(count - 1)
            }
        }
    }
    
    return (
        <div>
            <div className="item__count">
                <button disabled={!stock} className="item__count-btn1" onClick={() => handleCount('-')}><i class="fas fa-minus"></i></button>
                <p className="item__count-display">{count}</p>
                <button disabled={!stock} className="item__count-btn2" onClick={() => handleCount('+')}><i class="fas fa-plus"></i></button>
                <p className="item__count-display-stock">Stock disponible : <span>{stock}</span></p>
            </div>

            <button className="detail__info__buy-btn" disabled={!stock} onClick={() => onAdd(count)}><i class="fas fa-cart-plus"></i> Al Carrito</button>
        </div>
    )
}
