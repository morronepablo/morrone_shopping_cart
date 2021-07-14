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
    const category = (ITEMS.filter((item) => item.categoryId === id));

    if(category.length === 0){
        const id = undefined;
    }
    return (
        <section>
            {category.length === 0 ? <h1>{category}</h1> : id !== undefined ? <p className='category__title'>{id.toUpperCase().charAt(0)}{id.slice(1)}</p> : <p className='category__title'>{'Todas las Categorias'}</p>}
            {/* {id !== undefined ? <p className='category__title'>{id.toUpperCase().charAt(0)}{id.slice(1)}</p> : <p className='category__title'>{'Todas las Categorias'}</p>} */}
            <ItemList items={items} />
        </section>
    )
}