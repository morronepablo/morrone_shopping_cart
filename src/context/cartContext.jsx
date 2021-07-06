import { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [product, setProduct] = useState(0)
    console.log(product);

    return (
        <CartContext.Provider value={setProduct}>
            {children}
        </CartContext.Provider>
    )
}