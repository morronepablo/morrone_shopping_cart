import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from '../cartWidget/cartWidget'
import Logo_img from '../../assets/img/logo.png'
import { firebase } from '../../firebase/firebase'
import './navBar.css'
import { useEffect, useState } from 'react'

export const NavBar = () => {
    const [ categorias, setCategorias ] = useState([])

    useEffect(() => {

        const obtenerDatos = async () => {
            const db = firebase.firestore()
            try {
                const data = await db.collection('categorias').get()
                const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                let category = []
                for (let i=0; i < arrayData.length; i++) {
                    category.push(arrayData[i].tituloCategoria)
                }
                setCategorias(category)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()
    
    }, [])

    return (
        <header className='navBar'>
            <Link className='logo-link' to='/'>
                <img className='logo-img' src={Logo_img} alt="Logo" />
                <p className='logo'>Morrone Shop</p>
            </Link>
            <ul className='categories'>
                {categorias.map((category, index) => (
                            <NavLink activeClassName='category-link-active' className='category-link' to={`/category/${category.toLowerCase()}`}>
                                <li key={index} className='category'>{category}</li>
                            </NavLink>
                ))}
            </ul>
            <CartWidget />
        </header>
    )
}