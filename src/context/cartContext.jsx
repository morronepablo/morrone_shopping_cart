import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cantCart, setCantCart] = useState(0)
    

    console.log('productos: ', products);

    // Agragar un producto al carrito
    function addItems(item, cantidad) {

        // buscar si existe el producto en el carrito para no duplicados
        const isInCart = products.some( product => product.item.id === item.id)

        if(!isInCart) {

            // Si no existe producto en el carrito agrega uno nuevo
            const newItems = {
                item: {
                    ...item
                },
                quantity: cantidad
            }
            setProducts([...products, newItems])
        } else {

            // Si existe el producto en el carrito solo agrega cantidad
            products.forEach(product => {
                if(product.item.id === item.id) {
                    return product.quantity += cantidad
                }
            })
            setProducts([...products])
        }
    }

    // Actualiza el CartWidget
    function cantWidget() {
        let total = 0
        if(products.length > 0){
            products.forEach((product) => {
                total += product.quantity
            })
        }
        console.log("Total: ", total);
        setCantCart(total)
    }

    // Efecto si hay algun cambio en el estado de productos
    useEffect(() => {
        cantWidget()
    }, [products])

    // Eliminar item del carrito por su Id
    function removeItem(itemId) {
        setProducts(products.filter(product => product.item.id !== itemId))
    }

    // Vaciar por completo todo el carrito
    function clear(){
        setProducts([])
        setCantCart(0)
    }

    return (
        <CartContext.Provider value={{products, addItems, removeItem, clear, cantCart, cantWidget}}>
            {children}
        </CartContext.Provider>
    )
}