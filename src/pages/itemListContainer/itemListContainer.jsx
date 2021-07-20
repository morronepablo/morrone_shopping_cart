import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../../components/itemList/itemList'
import { Loading } from '../../components/loading/loading'
import { firebase } from '../../firebase/firebase'
//import ITEMS from '../../data/items.json'
import './itemListContainer.css'

export const ItemListContainer = () => {
    const { id } = useParams()
    const [ categorias, setCategorias ] = useState([])
    const [ isCategory, setIsCategory ] = useState(false)
    const [ productos, setProductos ] = useState([])
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        const obtenerDatos = async () => {
            const db = firebase.firestore()
            try {
                const cate = await db.collection('categorias').get()
                const arrayCate = cate.docs.map(doc => ({id: doc.id, ...doc.data()}))
                let category = []
                for (let i=0; i < arrayCate.length; i++) {
                    category.push(arrayCate[i].tituloCategoria)
                }
                setCategorias(category)
                const data = await db.collection('items').get()
                const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                if(category.filter((cate) => cate.toLowerCase() === id).length >0 ){
                    setIsCategory(true)
                }
                setProductos(arrayData)
                const getItems = () => {
                    return id ? arrayData.filter((item) => item.categoryId === id) : arrayData
                }
                const items = getItems()
                setItems(items)
                setLoading(false) 
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()
    
    }, [id])
    return (
        <Fragment>
            {loading && <Loading />}
            {id !== undefined ? 
                <Fragment>
                    {isCategory ? <p className='category__title'>{id.toUpperCase().charAt(0)}{id.slice(1)}</p> : <p>{""}</p> }
                     
                </Fragment>
                : 
                <Fragment>
                    <p className='category__title'>{'Todas las Categorias'}</p>
                </Fragment>
            } 
            {!loading && <ItemList key={items.id} id={id} items={items} isCategory={isCategory} />}
        </Fragment>
    )
}