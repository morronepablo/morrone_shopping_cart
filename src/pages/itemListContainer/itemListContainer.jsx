import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../../components/itemList/itemList'
import ITEMS from '../../data/items.json'
import './itemListContainer.css'

export const ItemListContainer = () => {
    const { id } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = () => {
            return id ? ITEMS.filter((item) => item.categoryId === id) : ITEMS
        }

        const items = getItems()
        setItems(items)
    }, [id])
  
    return (
        <section>
            {id !== undefined ? <p className='category__title'>{id.toUpperCase().charAt(0)}{id.slice(1)}</p> : <p className='category__title'>{'Todas las Categorias'}</p>}
            <ItemList items={items} />
        </section>
    )
}