import { Link } from 'react-router-dom'
import { useState } from 'react'

const A = 'https://marketpro.theme.picode.in/assets'

const cartItems = [
  { img: 'product-img7.png', name: 'Taylor Farms Broccoli Florets Vegetables', price: 14.99, qty: 1, color: 'Green', size: '12oz' },
  { img: 'product-img8.png', name: 'Marcel\'s Modern Pantry Almond Unsweetened Milk', price: 14.99, qty: 2, color: 'White', size: '1L' },
  { img: 'product-img9.png', name: 'O Organics Milk, Whole, Vitamin D', price: 14.99, qty: 1, color: 'White', size: '1L' },
]

const Cart = () => {
  const [items, setItems] = useState(cartItems)
  const [coupon, setCoupon] = useState('')

  const updateQty = (i, delta) => {
    setItems(prev => prev.map((item, idx) => idx === i ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
  }
  const removeItem = (i) => setItems(prev => prev.filter((_, idx) => idx !== i))

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shipping = 2.99
  const total = subtotal + shipping

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb mb-0 py-26 bg-main-two-50">
        <div className="container container-lg">
          <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Shopping Cart</h6>
            <ul className="flex-align gap-8 flex-wrap">
              <li className="text-sm">
                <Link to="/" className="text-gray-900 flex-align gap-8 hover-text-main-600">
                  <i className="ph ph-house"></i> Home
                </Link>
              </li>
              <li className="flex-align"><i className="ph ph-caret-right"></i></li>
              <li className="text-sm text-main-600">Cart</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <section className="cart py-80">
        <div className="container container-lg">
          <div className="row gy-4">
            {/* Cart Table */}
            <div className="col-xl-9 col-lg-8">
              <div className="table-responsive">
                <table className="table style-three">
                  <thead>
                    <tr>
                      <th className="h6 mb-0 fw-bold">Product</th>
                      <th className="h6 mb-0 fw-bold">Price</th>
                      <th className="h6 mb-0 fw-bold">Quantity</th>
                      <th className="h6 mb-0 fw-bold">Subtotal</th>
                      <th className="h6 mb-0 fw-bold">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => (
                      <tr key={i}>
                        <td>
                          <div className="flex-align gap-16">
                            <div className="cart-img rounded-12 border border-gray-100 overflow-hidden flex-shrink-0">
                              <img src={`${A}/images/thumbs/${item.img}`} alt="" className="w-80 h-80 object-fit-contain" />
                            </div>
                            <div>
                              <h6 className="text-md mb-4">
                                <Link to="/product-details" className="text-line-2">{item.name}</Link>
                              </h6>
                              <span className="text-sm text-gray-500">Color: {item.color}</span><br />
                              <span className="text-sm text-gray-500">Size: {item.size}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-gray-900 fw-semibold">${item.price.toFixed(2)}</span>
                        </td>
                        <td>
                          <div className="d-flex border border-gray-200 rounded-pill w-max-content">
                            <button type="button" className="quantity-btn w-40 h-40 flex-center text-xl text-gray-600 hover-text-main-600" onClick={() => updateQty(i, -1)}>
                              <i className="ph ph-minus"></i>
                            </button>
                            <input type="number" className="quantity-input w-60 text-center fw-semibold bg-transparent border-0" value={item.qty} readOnly />
                            <button type="button" className="quantity-btn w-40 h-40 flex-center text-xl text-gray-600 hover-text-main-600" onClick={() => updateQty(i, 1)}>
                              <i className="ph ph-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td>
                          <span className="text-gray-900 fw-semibold">${(item.price * item.qty).toFixed(2)}</span>
                        </td>
                        <td>
                          <button type="button" className="w-32 h-32 flex-center border border-gray-200 rounded-circle hover-bg-danger-600 hover-border-danger-600 hover-text-white text-gray-500" onClick={() => removeItem(i)}>
                            <i className="ph ph-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Coupon */}
              <div className="mt-40">
                <div className="flex-align flex-wrap gap-16 mt-32">
                  <input
                    type="text"
                    className="form-control py-18 px-24 border border-gray-200 rounded-pill"
                    placeholder="Enter coupon code"
                    value={coupon}
                    onChange={e => setCoupon(e.target.value)}
                    style={{ maxWidth: 340 }}
                  />
                  <button type="button" className="btn btn-main py-18 px-32 rounded-pill">Apply Coupon</button>
                </div>
              </div>

              <div className="flex-between flex-wrap gap-16 mt-32">
                <Link to="/shop" className="btn btn-outline-main py-18 px-32 rounded-pill flex-align gap-8">
                  <i className="ph ph-arrow-left"></i> Continue Shopping
                </Link>
                <button type="button" className="btn btn-main py-18 px-32 rounded-pill">Update Cart</button>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="col-xl-3 col-lg-4">
              <div className="cart-summary border border-gray-100 rounded-16 p-32 bg-gray-50">
                <h6 className="text-xl border-bottom border-gray-200 pb-24 mb-24">Cart Summary</h6>
                <div className="flex-between mb-16">
                  <span className="text-gray-700">Sub Total</span>
                  <span className="text-heading fw-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex-between mb-24 pb-24 border-bottom border-gray-200">
                  <span className="text-gray-700">Shipping</span>
                  <span className="text-heading fw-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex-between mb-32">
                  <span className="text-heading fw-bold">Total</span>
                  <span className="text-heading fw-bold text-danger-600">${total.toFixed(2)}</span>
                </div>

                {/* Shipping Methods */}
                <div className="mb-24">
                  <p className="text-gray-700 fw-semibold mb-16">Shipping Methods</p>
                  {[['Free Shipping', '$0.00'], ['Standard', '$2.99'], ['Express', '$9.99']].map(([label, cost], i) => (
                    <div key={i} className="form-check common-check common-radio mb-12">
                      <input className="form-check-input" type="radio" name="shipping" id={`shipping${i}`} defaultChecked={i === 0} />
                      <label className="form-check-label flex-between w-100" htmlFor={`shipping${i}`}>
                        <span>{label}</span>
                        <span>{cost}</span>
                      </label>
                    </div>
                  ))}
                </div>

                <Link to="/checkout" className="btn btn-main py-18 px-40 rounded-pill w-100 text-center">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
