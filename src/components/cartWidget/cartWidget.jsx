import './cartWidget.css'
export const CartWidget = () => {
	return (
        <div className="cart-btn">
            <span className="nav-icon">
                <i className="fas fa-cart-plus"></i>
            </span>
            <div className="cart-items">0</div>
        </div>
    )
}