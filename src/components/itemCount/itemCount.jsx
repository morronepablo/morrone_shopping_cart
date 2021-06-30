import { useState } from "react"

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

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
            <div>
                <button onClick={() => handleCount('-')}>-</button>
                <p>{count}</p>
                <button onClick={() => handleCount('+')}>+</button>
            </div>
            <button disabled={!stock} onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

//disabled={stock ? false : true}
//disabled={stock === 0}
//disabled={!stock}