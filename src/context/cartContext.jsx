import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cantCart, setCantCart] = useState(0)

    console.log('productos: ', products);

    function addItems(item, cantidad) {
        
        const isInCart = products.some( product => product.items.id === item.id)
        if(!isInCart) {
            const newItems = {
                item: {
                    ...item
                },
                quantity: cantidad
            }
            setProducts([...products, newItems])
        } else {
            products.forEach(product => {
                if(product.items.id === item.id) {
                    return product.quantity += cantidad
                }
            })
            setProducts([...products])
        }
        console.log(products);
    }

    return (
        <CartContext.Provider value={{products,addItems,cantCart}}>
            {children}
        </CartContext.Provider>
    )
}