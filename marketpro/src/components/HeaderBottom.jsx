import { Link } from 'react-router-dom'
import { useState } from 'react'

const A = 'https://marketpro.theme.picode.in/assets'

/* The bottom header has: Browse Categories button + nav menu + phone number */
const navLinks = [
  {
    label: 'Home', to: '/', sub: [
      { label: 'Home Grocery', to: '/' },
      { label: 'Home Electronics', to: '/' },
      { label: 'Home Fashion', to: '/' },
    ]
  },
  {
    label: 'Shop', to: '/shop', sub: [
      { label: 'Shop', to: '/shop' },
      { label: 'Shop Details', to: '/product-details' },
    ]
  },
  {
    label: 'Pages', to: '#', badge: 'New', badgeColor: 'bg-warning-600', sub: [
      { label: 'Cart', to: '/cart' },
      { label: 'Wishlist', to: '/wishlist' },
      { label: 'Checkout', to: '/checkout' },
      { label: 'Account', to: '/account' },
    ]
  },
  {
    label: 'Vendors', to: '#', badge: 'New', badgeColor: 'bg-tertiary-600', sub: [
      { label: 'Vendors', to: '/shop' },
      { label: 'Vendor Details', to: '/shop' },
    ]
  },
  {
    label: 'Blog', to: '/blog', sub: [
      { label: 'Blog', to: '/blog' },
      { label: 'Blog Details', to: '/blog-details' },
    ]
  },
  { label: 'Contact Us', to: '/contact' },
]

const categoryItems = [
  { icon: 'category-1.png', name: 'Vegetables' },
  { icon: 'category-2.png', name: 'Milk & Cake' },
  { icon: 'category-3.png', name: 'Grocery' },
  { icon: 'category-4.png', name: 'Beauty' },
  { icon: 'category-5.png', name: 'Wines & Drinks' },
  { icon: 'category-6.png', name: 'Snacks' },
  { icon: 'category-7.png', name: 'Juice' },
  { icon: 'category-8.png', name: 'Fruits' },
  { icon: 'category-9.png', name: 'Tea & Coffee' },
]

const HeaderBottom = ({ onToggleMobile }) => {
  const [catOpen, setCatOpen] = useState(false)

  return (
    <header className="header bg-white border-bottom-0 box-shadow-3xl py-10 z-2">
      <div className="container container-lg">
        <nav className="header-inner d-flex justify-content-between gap-8">
          <div className="flex-align menu-category-wrapper position-relative">

            {/* Browse Categories Dropdown */}
            <div className="position-relative">
              <button
                type="button"
                className="category-button d-flex align-items-center gap-12 text-white bg-success-600 px-20 py-16 rounded-6 hover-bg-success-700 transition-2"
                onClick={() => setCatOpen(!catOpen)}
              >
                <span className="text-xl line-height-1"><i className="ph ph-squares-four"></i></span>
                <span>Browse Categories</span>
                <span className="line-height-1 icon transition-2"><i className="ph-bold ph-caret-down"></i></span>
              </button>

              {catOpen && (
                <div className="category-dropdown border border-success-200 shadow bg-white p-16 rounded-16 w-100 max-w-472 position-absolute inset-block-start-100 inset-inline-start-0 z-99 transition-2">
                  <div className="d-grid gap-4" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
                    {categoryItems.map((cat) => (
                      <Link
                        key={cat.name}
                        to="/shop"
                        className="py-16 px-8 rounded-8 hover-bg-main-50 d-flex flex-column align-items-center text-center border border-white hover-border-main-100"
                        onClick={() => setCatOpen(false)}
                      >
                        <span>
                          <img src={`${A}/images/icon/${cat.icon}`} alt="Icon" className="w-40" />
                        </span>
                        <span className="fw-semibold text-heading mt-16 text-sm">{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Nav Menu */}
            <div className="header-menu d-lg-block d-none ms-16">
              <ul className="nav-menu flex-align">
                {navLinks.map((item, i) => (
                  <li key={i} className={`on-hover-item nav-menu__item${item.sub ? ' has-submenu' : ''}`}>
                    {item.badge && (
                      <span className={`badge-notification ${item.badgeColor} text-white text-sm py-2 px-8 rounded-4`}>{item.badge}</span>
                    )}
                    <Link to={item.to} className="nav-menu__link text-heading-two">{item.label}</Link>
                    {item.sub && (
                      <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                        {item.sub.map((s, j) => (
                          <li key={j} className="common-dropdown__item nav-submenu__item">
                            <Link to={s.to} className="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100">{s.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Phone + Mobile Toggle */}
          <div className="header-right flex-align gap-20">
            <a href="tel:+28713820230" className="d-sm-flex align-items-center gap-16 d-none">
              <span className="d-flex text-32">
                <img src={`${A}/images/icon/mobile.png`} alt="Mobile Icon" />
              </span>
              <span>
                <span className="d-block text-heading fw-medium">Need any Help! call Us</span>
                <span className="d-block fw-bold text-main-600 hover-text-decoration-underline">+(2) 871 382 023</span>
              </span>
            </a>
            <button
              type="button"
              className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex border-0 bg-transparent"
              onClick={onToggleMobile}
            >
              <i className="ph ph-list"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default HeaderBottom
