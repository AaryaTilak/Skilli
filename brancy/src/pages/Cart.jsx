import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Cart() {
  const { cart, removeFromCart, updateCartQty, clearCart } = useApp();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const applyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'SKILLI10') {
      setDiscount(subtotal * 0.1);
      alert('10% Discount applied successfully!');
    } else {
      alert('Invalid coupon code. Try SKILLI10');
    }
  };

  const total = subtotal - discount;

  return (
    <main className="main-content">
      {/* Header banner */}
      <section 
        className="page-header-area" 
        style={{ 
          backgroundImage: `url(https://template.hasthemes.com/brancy/brancy/assets/images/photos/bg1.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="page-header-content">
                <h2 className="title text-white" style={{ fontSize: '36px', fontWeight: 'bold' }}>Shopping Cart</h2>
                <div className="breadcrumbs text-white-50 mt-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="text-white-50">Home</a>
                  <span className="mx-2">/</span>
                  <span>Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="section-space">
        <div className="container">
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <i className="fa fa-shopping-cart text-muted mb-3" style={{ fontSize: '72px' }}></i>
              <h3 className="mb-3">Your Cart is Empty</h3>
              <p className="text-secondary mb-4">You have no items in your shopping bag. Start shopping now!</p>
              <button 
                className="btn btn-black text-white font-weight-bold" 
                style={{ backgroundColor: '#222', padding: '12px 30px' }}
                onClick={() => handleLinkClick('/shop')}
              >
                Go to Shop
              </button>
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <form>
                  {/* Items Table */}
                  <div className="table-responsive">
                    <table className="table table-bordered align-middle text-center bg-white">
                      <thead className="table-light">
                        <tr>
                          <th>Remove</th>
                          <th>Product Image</th>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <button 
                                type="button" 
                                className="btn btn-link text-danger text-decoration-none"
                                onClick={() => removeFromCart(item.id)}
                                style={{ fontSize: '20px' }}
                              >
                                ×
                              </button>
                            </td>
                            <td>
                              <img src={item.image} width="80" height="96" alt={item.title} style={{ objectFit: 'contain' }} />
                            </td>
                            <td>
                              <span 
                                className="font-weight-bold text-dark" 
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleLinkClick(`/product-details?id=${item.id}`)}
                              >
                                {item.title}
                              </span>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>
                              <div className="d-inline-flex align-items-center border rounded">
                                <button 
                                  type="button"
                                  onClick={() => updateCartQty(item.id, item.quantity - 1)}
                                  className="btn border-0 py-1 px-3 bg-light"
                                >
                                  -
                                </button>
                                <span className="px-3 font-weight-bold">{item.quantity}</span>
                                <button 
                                  type="button"
                                  onClick={() => updateCartQty(item.id, item.quantity + 1)}
                                  className="btn border-0 py-1 px-3 bg-light"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Coupon & Actions */}
                  <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">
                    <div className="d-flex align-items-center gap-2">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Coupon code (e.g. SKILLI10)" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        style={{ maxWidth: '250px', height: '40px' }}
                      />
                      <button 
                        type="submit" 
                        onClick={applyCoupon}
                        className="btn btn-dark"
                        style={{ height: '40px' }}
                      >
                        Apply Coupon
                      </button>
                    </div>

                    <div className="d-flex gap-2">
                      <button 
                        type="button" 
                        className="btn btn-outline-danger"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-outline-dark"
                        onClick={() => handleLinkClick('/shop')}
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                </form>

                {/* Subtotals Box */}
                <div className="row justify-content-end mt-5">
                  <div className="col-md-5">
                    <div className="border p-4 bg-light rounded">
                      <h4 className="border-bottom pb-2 mb-3 font-weight-bold text-dark" style={{ fontSize: '20px' }}>Cart Totals</h4>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-secondary">Subtotal</span>
                        <span className="font-weight-bold">${subtotal.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="d-flex justify-content-between mb-2 text-success">
                          <span>Coupon Discount</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="d-flex justify-content-between border-top pt-2 mb-4">
                        <span className="font-weight-bold text-dark">Total</span>
                        <span className="font-weight-bold text-dark" style={{ fontSize: '22px' }}>
                          ${total.toFixed(2)}
                        </span>
                      </div>
                      <button 
                        type="button" 
                        className="btn btn-black w-100 py-3 text-white font-weight-bold" 
                        style={{ backgroundColor: '#222', borderRadius: '4px', border: 'none' }}
                        onClick={() => handleLinkClick('/checkout')}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
