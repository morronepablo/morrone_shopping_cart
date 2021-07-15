import './cartWidget.css'
import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cartContext'

export const CartWidget = () => {
    const {cantCart, cantWidget, products} = useContext(CartContext)

    useEffect(() => {
        cantWidget()
    }, [products])

	return (
        <Link to="/cart">
            <div className="cart-btn">
                <span className="nav-icon">
                    <i className="fas fa-cart-plus"></i>
                </span>
                {cantCart !== 0 ? <div className="cart-items">{cantCart}</div> : <p>{''}</p>}
                {/* <div className="cart-items">{cantCart}</div> */}
            </div>
        </Link>
    )
}