import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const A = 'https://marketpro.theme.picode.in/assets'

const products = [
  { img: 'product-two-img1.png', name: 'Taylor Farms Broccoli Florets Vegetables', price: '$14.99', old: '$28.99', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-two-img2.png', name: 'Marcel\'s Modern Pantry Almond Unsweetened', price: '$14.99', old: '$28.99', badge: '', badgeColor: '' },
  { img: 'product-two-img3.png', name: 'O Organics Milk, Whole, Vitamin D', price: '$14.99', old: '$28.99', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-two-img4.png', name: 'Whole Grains and Seeds Organic Bread', price: '$14.99', old: '$28.99', badge: 'Best Sale', badgeColor: 'bg-info-600' },
  { img: 'product-two-img5.png', name: 'Lucerne Yogurt, Lowfat, Strawberry', price: '$14.99', old: '$28.99', badge: '', badgeColor: '' },
  { img: 'product-two-img6.png', name: 'Nature Valley Whole Grain Oats', price: '$14.99', old: '$28.99', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-two-img7.png', name: 'C-500 Antioxidant Protect Dietary Supplement', price: '$14.99', old: '$28.99', badge: '', badgeColor: '' },
  { img: 'product-two-img8.png', name: 'Good & Gather Farmed Atlantic Salmon', price: '$14.99', old: '$28.99', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-two-img9.png', name: 'Market Pantry 41/50 Raw Shrimp', price: '$14.99', old: '$28.99', badge: 'New', badgeColor: 'bg-warning-600' },
  { img: 'product-two-img10.png', name: 'Tropicana 100% Juice, Orange, No Pulp', price: '$14.99', old: '$28.99', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-two-img11.png', name: 'Taylor Farms Broccoli Florets Vegetables', price: '$14.99', old: '$28.99', badge: '', badgeColor: '' },
  { img: 'product-two-img12.png', name: 'Marcel\'s Modern Pantry Almond Unsweetened', price: '$14.99', old: '$28.99', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-two-img1.png', name: 'O Organics Milk, Whole, Vitamin D', price: '$14.99', old: '$28.99', badge: '', badgeColor: '' },
  { img: 'product-two-img2.png', name: 'Whole Grains and Seeds Organic Bread', price: '$14.99', old: '$28.99', badge: 'New', badgeColor: 'bg-warning-600' },
  { img: 'product-two-img3.png', name: 'Lucerne Yogurt, Lowfat, Strawberry', price: '$14.99', old: '$28.99', badge: '', badgeColor: '' },
  { img: 'product-two-img4.png', name: 'Nature Valley Whole Grain Oats', price: '$14.99', old: '$28.99', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
]

const categories = ['Mobile & Accessories (12)', 'Laptop (12)', 'Electronics (12)', 'Smart Watch (12)', 'Storage (12)', 'Portable Devices (12)', 'Action Camera (12)', 'Smart Gadget (12)', 'Monitor (12)', 'Smart TV (12)', 'Camera (12)', 'Headphone (12)']
const colors = [['color1','Black','checked-black'],['color2','Blue','checked-primary'],['color3','Gray','checked-gray'],['color4','Green','checked-success'],['color5','Red','checked-danger'],['color6','White','checked-white'],['color7','Purple','checked-purple']]
const brandList = ['Apple','Samsung','Xiaomi','Vivo','Oppo','Huawei']

const Shop = () => {
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(500)
  const [view, setView] = useState('grid')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('scroll-hide-sm')
    } else {
      document.body.classList.remove('scroll-hide-sm')
    }
    return () => {
      document.body.classList.remove('scroll-hide-sm')
    }
  }, [sidebarOpen])

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb mb-0 py-26 bg-main-two-50">
        <div className="container container-lg">
          <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Shop</h6>
            <ul className="flex-align gap-8 flex-wrap">
              <li className="text-sm">
                <Link to="/" className="text-gray-900 flex-align gap-8 hover-text-main-600">
                  <i className="ph ph-house"></i> Home
                </Link>
              </li>
              <li className="flex-align"><i className="ph ph-caret-right"></i></li>
              <li className="text-sm text-main-600">Product Shop</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <section className="shop py-80">
        {sidebarOpen && (
          <div className="side-overlay show" style={{ zIndex: 99 }} onClick={() => setSidebarOpen(false)}></div>
        )}
        <div className="container container-lg">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3">
              <div className={`shop-sidebar${sidebarOpen ? ' active' : ''}`}>
                <button
                  type="button"
                  className="shop-sidebar__close d-lg-none d-flex position-absolute top-0 end-0 m-16 w-32 h-32 flex-center border border-gray-100 rounded-circle text-gray-500 hover-text-gray-800 hover-bg-gray-100 text-xl border-0 bg-transparent"
                  onClick={() => setSidebarOpen(false)}
                  style={{ zIndex: 10 }}
                >
                  <i className="ph ph-x"></i>
                </button>
                {/* Product Category */}
                <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                  <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">Product Category</h6>
                  <ul className="max-h-540 overflow-y-auto scroll-sm">
                    {categories.map((cat, i) => (
                      <li key={i} className={i < categories.length - 1 ? 'mb-24' : 'mb-0'}>
                        <Link to="/shop" className="text-gray-900 hover-text-main-600">{cat}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Filter */}
                <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                  <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">Filter by Price</h6>
                  <div className="custom--range">
                    <div className="mb-16">
                      <input type="range" className="w-100" min="0" max="1000" value={priceMax}
                        onChange={e => setPriceMax(Number(e.target.value))}
                        style={{ accentColor: 'var(--main-600, #4fa74f)' }} />
                    </div>
                    <div className="flex-between flex-wrap-reverse gap-8 mt-24">
                      <button type="button" className="btn btn-main h-40 flex-align">Filter</button>
                      <div className="custom--range__content flex-align gap-8">
                        <span className="text-gray-500 text-md flex-shrink-0">Price:</span>
                        <span className="text-neutral-600 text-start text-md fw-medium">${priceMin} – ${priceMax}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                  <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">Filter by Rating</h6>
                  {[[5, 70, 124], [4, 50, 52], [3, 35, 12], [2, 20, 5], [1, 5, 2]].map(([stars, pct, count]) => (
                    <div key={stars} className="flex-align gap-8 position-relative mb-20">
                      <label className="position-absolute w-100 h-100 cursor-pointer" htmlFor={`rating${stars}`}></label>
                      <div className="common-check common-radio mb-0">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id={`rating${stars}`} />
                      </div>
                      <div className="progress w-100 bg-gray-100 rounded-pill h-8" role="progressbar">
                        <div className="progress-bar bg-main-600 rounded-pill" style={{ width: `${pct}%` }}></div>
                      </div>
                      <div className="flex-align gap-4">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className={`text-xs fw-medium d-flex ${i < stars ? 'text-warning-600' : 'text-gray-400'}`}>
                            <i className="ph-fill ph-star"></i>
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-900 flex-shrink-0">{count}</span>
                    </div>
                  ))}
                </div>

                {/* Color Filter */}
                <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                  <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">Filter by Color</h6>
                  <ul>
                    {colors.map(([id, label, cls]) => (
                      <li key={id} className="mb-24">
                        <div className={`form-check common-check common-radio ${cls}`}>
                          <input className="form-check-input" type="radio" name="color" id={id} />
                          <label className="form-check-label" htmlFor={id}>{label} (12)</label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brand Filter */}
                <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                  <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">Filter by Brand</h6>
                  <ul>
                    {brandList.map((brand, i) => (
                      <li key={i} className="mb-24">
                        <div className="form-check common-check common-radio">
                          <input className="form-check-input" type="radio" name="brand" id={`brand${i + 1}`} />
                          <label className="form-check-label" htmlFor={`brand${i + 1}`}>{brand}</label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advertisement Box */}
                <div className="shop-sidebar__box rounded-8 overflow-hidden">
                  <img src={`${A}/images/thumbs/sidebar-ad.png`} alt="" className="w-100" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="col-lg-9">
              {/* Toolbar */}
              <div className="flex-between flex-wrap gap-16 mb-40">
                <span className="text-gray-900">Showing 1-16 of 120 results</span>
                <div className="flex-align gap-16">
                  <button
                    type="button"
                    className="sidebar-btn d-lg-none d-flex align-items-center gap-4 text-heading-two text-sm border border-gray-200 py-8 px-16 rounded-6 bg-transparent"
                    onClick={() => setSidebarOpen(true)}
                  >
                    Filter <i className="ph ph-funnel"></i>
                  </button>
                  <div className="flex-align gap-8">
                    <button
                      type="button"
                      className={`w-44 h-44 flex-center border rounded-6 ${view === 'grid' ? 'bg-main-600 text-white border-main-600' : 'border-gray-200 hover-bg-main-600 hover-text-white hover-border-main-600'}`}
                      onClick={() => setView('grid')}
                    >
                      <i className="ph-bold ph-squares-four text-xl"></i>
                    </button>
                    <button
                      type="button"
                      className={`w-44 h-44 flex-center border rounded-6 ${view === 'list' ? 'bg-main-600 text-white border-main-600' : 'border-gray-200 hover-bg-main-600 hover-text-white hover-border-main-600'}`}
                      onClick={() => setView('list')}
                    >
                      <i className="ph-bold ph-list-bullets text-xl"></i>
                    </button>
                  </div>
                  <div className="select-style-one">
                    <select className="form-select border border-gray-200 rounded-6 py-8 px-16 text-sm">
                      <option>Sort By Latest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Most Popular</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div id="list-grid-wrapper" className={view === 'list' ? 'list-view' : ''}>
                <div className="row g-12">
                  {products.map((p, i) => (
                    <div key={i} className={view === 'list' ? 'col-12' : 'col-xxl-3 col-xl-4 col-sm-6 col-6'}>
                      <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 group-item">
                        <button type="button" className="wishlist-btn-two"><i className="ph-bold ph-heart"></i></button>
                        {p.badge && <span className={`product-card__badge ${p.badgeColor} px-8 py-4 text-sm text-white`}>{p.badge}</span>}
                        <Link to="/product-details" className="product-card__thumb flex-center overflow-hidden">
                          <img src={`${A}/images/thumbs/${p.img}`} alt="" />
                        </Link>
                        <div className="product-card__content p-sm-2 w-100">
                          <h6 className="title text-lg fw-semibold my-12">
                            <Link to="/product-details" className="link text-line-2">{p.name}</Link>
                          </h6>
                          <div className="flex-align gap-4 mb-8">
                            <span className="text-main-600 text-md d-flex"><i className="ph-fill ph-storefront"></i></span>
                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                          </div>
                          <div className="product-card__price flex-align gap-8 mb-8">
                            <span className="text-heading text-md fw-semibold d-block">{p.price} <span className="text-gray-500 fw-normal">/Qty</span></span>
                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through d-block">{p.old}</span>
                          </div>
                          <div className="flex-align gap-6 mb-16">
                            <span className="text-xs fw-bold text-gray-600">4.8</span>
                            <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                            <span className="text-xs fw-bold text-gray-600">(17k)</span>
                          </div>
                          <Link to="/cart" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 w-100 justify-content-center">
                            Add To Cart <i className="ph ph-shopping-cart"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex-center flex-wrap gap-16 mt-60">
                <ul className="pagination flex-align flex-wrap gap-16">
                  <li><button type="button" className="pagination__btn w-44 h-44 rounded-circle flex-center border border-gray-100 hover-border-main-600 hover-bg-main-600 hover-text-white text-xl"><i className="ph ph-caret-left"></i></button></li>
                  {[1, 2, 3, 4, 5].map(p => (
                    <li key={p}>
                      <button type="button" className={`pagination__btn w-44 h-44 rounded-circle flex-center border text-xl ${p === 1 ? 'bg-main-600 text-white border-main-600' : 'border-gray-100 hover-border-main-600 hover-bg-main-600 hover-text-white'}`}>{p}</button>
                    </li>
                  ))}
                  <li><button type="button" className="pagination__btn w-44 h-44 rounded-circle flex-center border border-gray-100 hover-border-main-600 hover-bg-main-600 hover-text-white text-xl"><i className="ph ph-caret-right"></i></button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
