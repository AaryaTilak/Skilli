import { Link } from 'react-router-dom'
import { useState } from 'react'

const A = 'https://marketpro.theme.picode.in/assets'

const Checkout = () => {
  const [payMethod, setPayMethod] = useState('card')
  const [sameAddress, setSameAddress] = useState(true)

  const cartSummary = [
    { img: 'product-img7.png', name: 'Taylor Farms Broccoli Florets', price: '$14.99', qty: 1 },
    { img: 'product-img8.png', name: 'Marcel\'s Modern Pantry Almond', price: '$14.99', qty: 2 },
    { img: 'product-img9.png', name: 'O Organics Milk, Whole, Vitamin D', price: '$14.99', qty: 1 },
  ]

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb mb-0 py-26 bg-main-two-50">
        <div className="container container-lg">
          <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Checkout</h6>
            <ul className="flex-align gap-8 flex-wrap">
              <li className="text-sm">
                <Link to="/" className="text-gray-900 flex-align gap-8 hover-text-main-600">
                  <i className="ph ph-house"></i> Home
                </Link>
              </li>
              <li className="flex-align"><i className="ph ph-caret-right"></i></li>
              <li className="text-sm text-main-600">Checkout</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <section className="checkout py-80">
        <div className="container container-lg">
          <div className="row gy-4">
            {/* Billing Details */}
            <div className="col-xl-8">
              <div className="border border-gray-100 rounded-16 p-32 responsive-card-padding mb-24">
                <h6 className="text-xl mb-24 border-bottom border-gray-100 pb-24">Billing Details</h6>
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row g-20">
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">First Name *</label>
                      <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="First Name" />
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">Last Name *</label>
                      <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Last Name" />
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">Email Address *</label>
                      <input type="email" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Email Address" />
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">Phone Number *</label>
                      <input type="tel" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Phone Number" />
                    </div>
                    <div className="col-12">
                      <label className="fw-semibold text-sm mb-8">Company Name (Optional)</label>
                      <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Company Name" />
                    </div>
                    <div className="col-12">
                      <label className="fw-semibold text-sm mb-8">Street Address *</label>
                      <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8 mb-16" placeholder="House number and street name" />
                      <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Apartment, suite, unit, etc. (optional)" />
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">Town / City *</label>
                      <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Town / City" />
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">State *</label>
                      <select className="form-select py-16 px-20 border border-gray-200 rounded-8">
                        <option>Select State</option>
                        <option>California</option>
                        <option>New York</option>
                        <option>Texas</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">ZIP Code *</label>
                      <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="ZIP Code" />
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">Country *</label>
                      <select className="form-select py-16 px-20 border border-gray-200 rounded-8">
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Australia</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <div className="form-check common-check">
                        <input className="form-check-input" type="checkbox" id="sameAddress" checked={sameAddress} onChange={e => setSameAddress(e.target.checked)} />
                        <label className="form-check-label" htmlFor="sameAddress">Ship to same address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="fw-semibold text-sm mb-8">Order Notes (Optional)</label>
                      <textarea className="form-control py-16 px-20 border border-gray-200 rounded-8" rows="4" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    </div>
                  </div>
                </form>
              </div>

              {/* Payment Method */}
              <div className="border border-gray-100 rounded-16 p-32 responsive-card-padding">
                <h6 className="text-xl mb-24 border-bottom border-gray-100 pb-24">Payment Method</h6>
                <div className="d-flex flex-column gap-16">
                  {[['card', 'Credit / Debit Card', 'ph-credit-card'], ['paypal', 'PayPal', 'ph-paypal-logo'], ['bank', 'Bank Transfer', 'ph-bank']].map(([val, label, icon]) => (
                    <label key={val} className={`d-flex align-items-center gap-16 border rounded-8 p-20 cursor-pointer ${payMethod === val ? 'border-main-600 bg-main-50' : 'border-gray-200'}`}>
                      <input type="radio" name="payment" value={val} checked={payMethod === val} onChange={() => setPayMethod(val)} className="form-check-input mt-0 flex-shrink-0" />
                      <i className={`ph ${icon} text-xl text-main-600`}></i>
                      <span className="fw-semibold">{label}</span>
                    </label>
                  ))}

                  {payMethod === 'card' && (
                    <div className="mt-16 row g-16">
                      <div className="col-12">
                        <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Card Number" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Expiry Date (MM/YY)" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="CVV" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-xl-4">
              <div className="border border-gray-100 rounded-16 p-32 responsive-card-padding bg-gray-50">
                <h6 className="text-xl mb-24 border-bottom border-gray-100 pb-24">Your Order</h6>

                <div className="d-flex flex-column gap-20 mb-24 pb-24 border-bottom border-gray-200">
                  {cartSummary.map((item, i) => (
                    <div key={i} className="flex-align gap-16">
                      <div className="w-60 h-60 rounded-8 border border-gray-100 overflow-hidden flex-shrink-0">
                        <img src={`${A}/images/thumbs/${item.img}`} alt="" className="w-100 h-100 object-fit-contain" />
                      </div>
                      <div className="flex-between w-100">
                        <span className="text-sm text-gray-900">{item.name}</span>
                        <span className="text-sm fw-semibold">{item.price} x {item.qty}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex flex-column gap-12 mb-24 pb-24 border-bottom border-gray-200">
                  <div className="flex-between">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="fw-semibold">$59.97</span>
                  </div>
                  <div className="flex-between">
                    <span className="text-gray-700">Shipping</span>
                    <span className="fw-semibold text-main-600">Free</span>
                  </div>
                  <div className="flex-between">
                    <span className="text-gray-700">Tax (10%)</span>
                    <span className="fw-semibold">$6.00</span>
                  </div>
                </div>

                <div className="flex-between mb-32">
                  <span className="text-heading fw-bold text-xl">Total</span>
                  <span className="text-heading fw-bold text-xl text-danger-600">$65.97</span>
                </div>

                <button type="submit" className="btn btn-main py-20 px-40 rounded-pill w-100">
                  Place Order <i className="ph ph-arrow-right ms-8"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Checkout
