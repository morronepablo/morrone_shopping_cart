import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../../components/itemDetail/itemDetail'
import ITEMS from '../../data/items.json'

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        const getItem = () => {
            return ITEMS.filter((item) => item.id === parseInt(id))
        }
        const item = getItem()
        setItem(item[0])
        console.log(item)
    }, [id])
    
    return (
        <section>
            <ItemDetail item={item} />
        </section>
    )
}