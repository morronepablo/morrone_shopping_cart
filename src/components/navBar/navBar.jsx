import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from '../cartWidget/cartWidget'
import Logo_img from '../../assets/img/logo.png'
import './navBar.css'

export const NavBar = () => {
    const categories = ['Camperas', 'Pantalones', 'Calzas']
    
    return (
        <header className='navBar'>
            <Link className='logo-link' to='/'>
                <img className='logo-img' src={Logo_img} alt="Logo" />
                <p className='logo'>Morrone Shop</p>
            </Link>
            <ul className='categories'>
                {categories.map((category, index) => (
                            <NavLink className='category-link' to={`/category/${category.toLowerCase()}`}>
                                <li key={index} className='category'>{category}</li>
                            </NavLink>
                ))}
            </ul>
            <CartWidget />
        </header>
    )
}