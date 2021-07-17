import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../../components/itemDetail/itemDetail'
import { Loading } from '../../components/loading/loading'
import { firebase } from '../../firebase/firebase'

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [ productos, setProductos ] = useState([])
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const obtenerDatos = async () => {
            const db = firebase.firestore()
            try {
                const data = await db.collection('items').get()
                const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(arrayData) 
                setProductos(arrayData)   
                const getItem = () => {
                    return arrayData.filter((item) => item.id === id)
                }
                const item = getItem()
                setItem(item[0])
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()
    
    }, [])

    return (
        <section>
            {loading && <Loading />}
            {!loading && <ItemDetail item={item} stock={item.stock} />}
        </section>
    )
}