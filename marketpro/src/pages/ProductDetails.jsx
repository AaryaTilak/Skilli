import { Link } from 'react-router-dom'
import { useState } from 'react'

const A = 'https://marketpro.theme.picode.in/assets'

const relatedProducts = [
  { img: 'product-img7.png', name: 'C-500 Antioxidant Protect Dietary Supplement', price: '$14.99' },
  { img: 'product-img8.png', name: 'Marcel\'s Modern Pantry Almond Unsweetened', price: '$14.99' },
  { img: 'product-img9.png', name: 'O Organics Milk, Whole, Vitamin D', price: '$14.99' },
  { img: 'product-img10.png', name: 'Whole Grains and Seeds Organic Bread', price: '$14.99' },
]

const reviews = [
  { name: 'Theresa Webb', date: 'January 2, 2024', rating: 5, img: 'user-img1.png', text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { name: 'Floyd Miles', date: 'January 2, 2024', rating: 5, img: 'user-img2.png', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.' },
]

const ProductDetails = () => {
  const [qty, setQty] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [mainImg, setMainImg] = useState(`${A}/images/thumbs/product-details-img1.png`)

  const thumbs = [
    'product-details-thumb1.png',
    'product-details-thumb2.png',
    'product-details-thumb3.png',
    'product-details-thumb4.png',
  ]

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb mb-0 py-26 bg-main-two-50">
        <div className="container container-lg">
          <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Product Details</h6>
            <ul className="flex-align gap-8 flex-wrap">
              <li className="text-sm">
                <Link to="/" className="text-gray-900 flex-align gap-8 hover-text-main-600">
                  <i className="ph ph-house"></i> Home
                </Link>
              </li>
              <li className="flex-align"><i className="ph ph-caret-right"></i></li>
              <li className="text-sm text-main-600">Product Details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="product-details py-80">
        <div className="container container-lg">
          <div className="row gy-4">
            {/* Left: Thumbnails */}
            <div className="col-xl-1 col-sm-2 order-sm-0 order-2">
              <div className="product-details__thumb-slider d-flex flex-sm-column flex-row gap-16 flex-nowrap overflow-x-auto">
                {thumbs.map((t, i) => (
                  <button key={i} type="button" className="thumb-item rounded-8 border-2 border-transparent overflow-hidden flex-shrink-0"
                    onClick={() => setMainImg(`${A}/images/thumbs/product-details-img${i + 1}.png`)}
                    style={{ border: mainImg.includes(`img${i + 1}`) ? '2px solid #4fa74f' : '2px solid transparent' }}>
                    <img src={`${A}/images/thumbs/${t}`} alt="" className="w-100 h-100 object-fit-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Center: Main Image */}
            <div className="col-xl-5 col-sm-10 order-sm-1 order-1">
              <div className="product-details__thumb w-100 h-100 max-h-600 flex-center overflow-hidden rounded-16 border border-gray-100">
                <img src={mainImg} alt="" className="w-100 h-100 object-fit-contain" style={{ maxHeight: 560 }} />
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="col-xl-6 order-xl-2 order-3">
              <div className="product-details__content">
                <div className="flex-align gap-16 mb-16">
                  <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50%</span>
                  <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">New</span>
                </div>
                <h5 className="mb-12">Taylor Farms Broccoli Florets Vegetables, 12 oz Bag</h5>
                <div className="flex-align flex-wrap gap-32 mb-24">
                  <div className="flex-align gap-8">
                    <div className="flex-align gap-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className="text-15 fw-semibold text-warning-600"><i className="ph-fill ph-star"></i></span>
                      ))}
                    </div>
                    <span className="text-sm fw-medium text-gray-600">(17k Reviews)</span>
                  </div>
                  <div className="flex-align gap-4">
                    <span className="text-main-600 text-md d-flex"><i className="ph-fill ph-storefront"></i></span>
                    <span className="text-gray-500 text-sm">By Lucky Supermarket</span>
                  </div>
                </div>
                <div className="product-details__price mb-24">
                  <h4 className="price text-danger-600 mb-0">$14.99 <span className="text-gray-400 text-xl fw-normal text-decoration-line-through">$28.99</span></h4>
                </div>
                <p className="text-gray-700 mb-32">This product is crafted from the finest organic ingredients. Packed with vitamins and nutrients to keep you healthy every day.</p>

                {/* Quantity & Cart */}
                <div className="flex-align flex-wrap gap-16 mb-32">
                  <div className="quantity-box d-flex align-items-center border border-gray-200 rounded-pill overflow-hidden">
                    <button type="button" className="quantity-btn w-44 h-44 flex-center text-xl text-gray-600 hover-text-main-600" onClick={() => setQty(q => Math.max(1, q - 1))}>
                      <i className="ph ph-minus"></i>
                    </button>
                    <input type="number" className="quantity-input w-60 text-center text-heading fw-semibold border-0 bg-transparent" value={qty} readOnly />
                    <button type="button" className="quantity-btn w-44 h-44 flex-center text-xl text-gray-600 hover-text-main-600" onClick={() => setQty(q => q + 1)}>
                      <i className="ph ph-plus"></i>
                    </button>
                  </div>
                  <Link to="/cart" className="btn btn-main py-18 px-40 rounded-pill flex-align gap-8">
                    Add To Cart <i className="ph ph-shopping-cart"></i>
                  </Link>
                  <button type="button" className="btn border border-gray-200 py-18 px-20 rounded-pill flex-align gap-8 hover-bg-main-600 hover-text-white hover-border-main-600">
                    <i className="ph ph-heart text-xl"></i>
                  </button>
                </div>

                {/* Meta */}
                <div className="product-details__meta">
                  <ul className="d-flex flex-column gap-12">
                    <li className="flex-align gap-8">
                      <span className="text-heading fw-semibold">SKU:</span>
                      <span className="text-gray-600">MP-10231</span>
                    </li>
                    <li className="flex-align gap-8">
                      <span className="text-heading fw-semibold">Category:</span>
                      <Link to="/shop" className="text-main-600">Vegetables & Fruits</Link>
                    </li>
                    <li className="flex-align gap-8">
                      <span className="text-heading fw-semibold">Tags:</span>
                      <span className="text-gray-600">Fresh, Organic, Healthy</span>
                    </li>
                    <li className="flex-align gap-8">
                      <span className="text-heading fw-semibold">Share:</span>
                      <div className="flex-align gap-8">
                        {['facebook-logo', 'twitter-logo', 'instagram-logo', 'linkedin-logo'].map((icon, i) => (
                          <a key={i} href="#" onClick={e => e.preventDefault()} className="w-32 h-32 rounded-circle border border-gray-200 flex-center text-main-600 hover-bg-main-600 hover-text-white hover-border-main-600">
                            <i className={`ph ph-${icon}`}></i>
                          </a>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="product-details__tabs mt-60">
            <ul className="nav product-tab style-two border-bottom border-gray-200 mb-40">
              {[['description', 'Description'], ['information', 'Additional Information'], ['reviews', 'Reviews (17)']].map(([key, label]) => (
                <li key={key} className="nav-item">
                  <button className={`nav-link fw-semibold ${activeTab === key ? 'active text-main-600' : 'text-gray-600'}`} onClick={() => setActiveTab(key)}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-content">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700 mb-24">Taylor Farms Broccoli Florets are specially washed, cut and ready to steam in the microwave. Perfect as a snack or side dish, these florets are harvested at peak freshness. Rich in Vitamin C, fiber, and antioxidants, making them a powerhouse of nutrition.</p>
                  <ul className="d-flex flex-column gap-8 ms-20">
                    {['Fresh Broccoli Florets', '12 oz bag', 'Ready to steam', 'Rich in Vitamin C', 'Farm fresh quality'].map((item, i) => (
                      <li key={i} className="text-gray-700 d-flex gap-8 align-items-center">
                        <i className="ph-fill ph-check-circle text-main-600"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'information' && (
                <table className="table border border-gray-200">
                  <tbody>
                    {[['Brand','Taylor Farms'],['Net Weight','12 oz'],['Origin','USA'],['Color','Green'],['Material','Organic'],['Condition','Fresh']].map(([k, v]) => (
                      <tr key={k}>
                        <td className="fw-semibold text-heading bg-gray-50 w-200">{k}</td>
                        <td className="text-gray-700">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === 'reviews' && (
                <div>
                  {reviews.map((r, i) => (
                    <div key={i} className="d-flex gap-24 mb-32 pb-32 border-bottom border-gray-100">
                      <img src={`${A}/images/thumbs/${r.img}`} alt="" className="w-52 h-52 rounded-circle object-fit-cover flex-shrink-0" />
                      <div>
                        <div className="flex-between flex-wrap gap-8 mb-4">
                          <h6 className="mb-0">{r.name}</h6>
                          <span className="text-sm text-gray-500">{r.date}</span>
                        </div>
                        <div className="flex-align gap-4 mb-12">
                          {Array.from({ length: r.rating }, (_, i) => (
                            <span key={i} className="text-warning-600"><i className="ph-fill ph-star"></i></span>
                          ))}
                        </div>
                        <p className="text-gray-700 mb-0">{r.text}</p>
                      </div>
                    </div>
                  ))}

                  {/* Write a Review */}
                  <h6 className="mb-24">Write a Review</h6>
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="row g-24">
                      <div className="col-sm-6">
                        <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Your Name" />
                      </div>
                      <div className="col-sm-6">
                        <input type="email" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Your Email" />
                      </div>
                      <div className="col-12">
                        <textarea className="form-control py-16 px-20 border border-gray-200 rounded-8" rows="5" placeholder="Your Review"></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-main py-18 px-40 rounded-pill">Submit Review</button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-60">
            <div className="section-heading">
              <h5 className="mb-32">Related Products</h5>
            </div>
            <div className="row g-12">
              {relatedProducts.map((p, i) => (
                <div key={i} className="col-xl-3 col-sm-6 col-6">
                  <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link to="/product-details" className="product-card__thumb flex-center overflow-hidden">
                      <img src={`${A}/images/thumbs/${p.img}`} alt="" />
                    </Link>
                    <div className="product-card__content mt-16">
                      <h6 className="title text-lg fw-semibold mb-8">
                        <Link to="/product-details" className="link text-line-2">{p.name}</Link>
                      </h6>
                      <div className="flex-align gap-6 mb-16">
                        <span className="text-xs fw-bold text-gray-600">4.8</span>
                        <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                        <span className="text-xs fw-bold text-gray-600">(17k)</span>
                      </div>
                      <div className="product-card__price flex-align gap-8 mb-12">
                        <span className="text-heading text-md fw-semibold">{p.price}</span>
                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">$28.99</span>
                      </div>
                      <Link to="/cart" className="btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 w-100 justify-content-center">
                        Add To Cart <i className="ph ph-shopping-cart"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetails
