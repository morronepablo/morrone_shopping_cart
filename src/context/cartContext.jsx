import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cantCart, setCantCart] = useState(0)

    console.log('productos: ', products);

    function addItems(item, cantidad) {
        // // console.log("Producto ",products);

        // // console.log("item ",item.id);
        // // if(products.length === 0){
        // //     console.log("productossss 0");
        // // } else {
        // //     console.log("producto ", products[0].item.id);
        // //     for (let i=0; i < products.length; i++) {
        // //         console.log(i);
        // //         //console.log(products[i].item);
        // //         let array = products[i].item

        // //         console.log("array ", array);
        // //         console.log(item.id);

        // //         console.log(array.id);

        // //         console.log(products[i].quantity);

        // //         const isInCart = (array.id === item.id)

        // //         console.log("isInCart ", isInCart);

        // //         if(isInCart) {
        // //             return products[i].quantity += cantidad
        // //             setProducts([...products])
        // //         }

        //         // if(array.id === item.id){
        //         //     console.log(true);
        //         //     console.log("ola");
        //         //     return products[i].quantity += cantidad
        //         //     setProducts([...products])
        //         // }


        //         //const resultado = array.some(product => product.id === item.id)

        //         //console.log(resultado)
        //         //console.log("Verdad o falso ", products[i].item.some(product => product.id === item[0]))
        //     // }
        //     // let array = Object.values(products)
        //     // console.log("mostrar array ", array);
        //     // let valorBuscado = item.id
        //     // console.log("item[0] ", valorBuscado[0]);
        //     // console.log("Persona ", products.id);
        //     // const resultado = array.filter(product => product[0][item].id === valorBuscado[0])
        //     // console.log("resultado  ", resultado)
        // }

        // // const even = (element) => element % item.id === 0;

        // // console.log(products.some(even));

        // // const newItems = {
        // //     item: {
        // //         ...item
        // //     },
        // //     quantity: cantidad
        // // }
        // // setProducts([...products, newItems])

        console.log("laaaaaa ",products);

        const isInCart = products.some( product => product.items.id === item[0].id)
        console.log(isInCart);
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