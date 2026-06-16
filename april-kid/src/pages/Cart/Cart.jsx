import { Link } from 'react-router-dom'
import './Cart.css'

const cartItems = [
  { id: 1, name: 'Chicco Pocket Doll', price: 15.00, qty: 1, image: '/images/product-doll.png' },
  { id: 3, name: "Children's Dish Set", price: 22.00, qty: 2, image: '/images/product-dishes.png' },
]

export default function Cart() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="cart-page">
      <section className="page-banner" style={{ minHeight: 180 }}>
        <div className="container page-banner__inner">
          <h1 className="page-banner__title" style={{ fontSize: '2rem' }}>Your Cart</h1>
          <nav aria-label="breadcrumb">
            <span className="breadcrumb-link">HOME</span>
            <span className="breadcrumb-sep"> / </span>
            <span className="breadcrumb-current">CART</span>
          </nav>
        </div>
      </section>

      <div className="container cart-layout">
        <div className="cart-items">
          <div className="cart-header">
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>TOTAL</span>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="cart-item" id={`cart-item-${item.id}`}>
              <div className="cart-item__product">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
              <span className="cart-item__price">${item.price.toFixed(2)}</span>
              <div className="qty-control">
                <button id={`cart-dec-${item.id}`}>−</button>
                <span>{item.qty}</span>
                <button id={`cart-inc-${item.id}`}>+</button>
              </div>
              <span className="cart-item__total">${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3 className="cart-summary__title">Order Summary</h3>
          <div className="cart-summary__row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="cart-summary__row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="cart-summary__row cart-summary__total">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="btn-outline-dark" style={{ width: '100%', marginTop: 24 }} id="checkout-btn">
            PROCEED TO CHECKOUT
          </button>
          <Link to="/shop" className="cart-continue-shopping">← Continue Shopping</Link>
        </div>
      </div>
    </div>
  )
}
