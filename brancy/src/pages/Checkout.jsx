import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Checkout() {
  const { cart, clearCart } = useApp();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'cod'
  });

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.address || !formData.email) {
      alert('Please fill out all required fields.');
      return;
    }
    
    alert(`Thank you, ${formData.firstName}! Your mock order has been placed successfully. Order total: $${total.toFixed(2)}.`);
    clearCart();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 150 ? 0 : 15.00;
  const total = subtotal + shipping;

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
                <h2 className="title text-white" style={{ fontSize: '36px', fontWeight: 'bold' }}>Checkout</h2>
                <div className="breadcrumbs text-white-50 mt-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="text-white-50">Home</a>
                  <span className="mx-2">/</span>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('/cart'); }} className="text-white-50">Cart</a>
                  <span className="mx-2">/</span>
                  <span>Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Forms */}
      <section className="section-space">
        <div className="container">
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <i className="fa fa-shopping-cart text-muted mb-3" style={{ fontSize: '72px' }}></i>
              <h3 className="mb-3">Checkout is Empty</h3>
              <p className="text-secondary mb-4">No products in your cart. Add products to check out.</p>
              <button 
                className="btn btn-black text-white font-weight-bold" 
                style={{ backgroundColor: '#222', padding: '12px 30px' }}
                onClick={() => handleLinkClick('/shop')}
              >
                Go to Shop
              </button>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder}>
              <div className="row">
                {/* Billing Details */}
                <div className="col-lg-7 mb-5 mb-lg-0">
                  <div className="border p-4 bg-white rounded">
                    <h3 className="mb-4 font-weight-bold" style={{ fontSize: '22px' }}>Billing Details</h3>
                    
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label font-weight-bold text-dark">First Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label font-weight-bold text-dark">Last Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label font-weight-bold text-dark">Email Address <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label font-weight-bold text-dark">Phone Number</label>
                        <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleInputChange} />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label font-weight-bold text-dark">Street Address <span className="text-danger">*</span></label>
                      <input type="text" className="form-control mb-2" placeholder="House number and street name" name="address" value={formData.address} onChange={handleInputChange} required />
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label font-weight-bold text-dark">Town / City</label>
                        <input type="text" className="form-control" name="city" value={formData.city} onChange={handleInputChange} />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label font-weight-bold text-dark">Postcode / ZIP</label>
                        <input type="text" className="form-control" name="zip" value={formData.zip} onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Review & Payment */}
                <div className="col-lg-5">
                  <div className="border p-4 bg-light rounded">
                    <h3 className="mb-4 font-weight-bold" style={{ fontSize: '22px' }}>Your Order</h3>
                    
                    {/* Item Breakdown */}
                    <div className="border-bottom pb-3 mb-3">
                      <div className="d-flex justify-content-between font-weight-bold text-dark mb-2">
                        <span>Product</span>
                        <span>Total</span>
                      </div>
                      {cart.map((item) => (
                        <div key={item.id} className="d-flex justify-content-between text-secondary mb-1" style={{ fontSize: '14px' }}>
                          <span>{item.title} x {item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Subtotals */}
                    <div className="border-bottom pb-3 mb-3">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-secondary">Subtotal</span>
                        <span className="font-weight-bold">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-secondary">Shipping</span>
                        <span className="font-weight-bold">
                          {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <span className="font-weight-bold text-dark" style={{ fontSize: '18px' }}>Total</span>
                      <span className="font-weight-bold text-dark" style={{ fontSize: '22px' }}>
                        ${total.toFixed(2)}
                      </span>
                    </div>

                    {/* Payment methods */}
                    <div className="payment-method-wrap mb-4">
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="paymentMethod" id="pay_cod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleInputChange} />
                        <label className="form-check-label font-weight-bold text-dark" htmlFor="pay_cod">Cash on Delivery</label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="paymentMethod" id="pay_card" value="card" checked={formData.paymentMethod === 'card'} onChange={handleInputChange} />
                        <label className="form-check-label font-weight-bold text-dark" htmlFor="pay_card">Credit / Debit Card</label>
                      </div>
                      {formData.paymentMethod === 'card' && (
                        <div className="p-3 border rounded bg-white mt-2">
                          <input type="text" className="form-control mb-2" placeholder="Card Number" style={{ height: '35px', fontSize: '13px' }} />
                          <div className="row g-2">
                            <div className="col-6"><input type="text" className="form-control" placeholder="MM/YY" style={{ height: '35px', fontSize: '13px' }} /></div>
                            <div className="col-6"><input type="text" className="form-control" placeholder="CVC" style={{ height: '35px', fontSize: '13px' }} /></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-black w-100 py-3 text-white font-weight-bold"
                      style={{ backgroundColor: '#222', borderRadius: '4px', border: 'none' }}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
