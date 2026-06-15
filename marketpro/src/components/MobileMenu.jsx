import { Link } from 'react-router-dom'
import { useState } from 'react'

const A = 'https://marketpro.theme.picode.in/assets'

const navLinks = [
  {
    label: 'Home', sub: [
      { label: 'Home Grocery', to: '/' },
      { label: 'Home Electronics', to: '/' },
      { label: 'Home Fashion', to: '/' },
    ]
  },
  {
    label: 'Shop', sub: [
      { label: 'Shop', to: '/shop' },
      { label: 'Shop Details', to: '/product-details' },
    ]
  },
  {
    label: 'Pages', sub: [
      { label: 'Cart', to: '/cart' },
      { label: 'Wishlist', to: '/wishlist' },
      { label: 'Checkout', to: '/checkout' },
      { label: 'Account', to: '/account' },
    ]
  },
  {
    label: 'Vendors', sub: [
      { label: 'Vendors', to: '/shop' },
      { label: 'Vendor Details', to: '/shop' },
    ]
  },
  {
    label: 'Blog', sub: [
      { label: 'Blog', to: '/blog' },
      { label: 'Blog Details', to: '/blog-details' },
    ]
  },
  { label: 'Contact Us', to: '/contact' },
]

const MobileMenu = ({ open, onClose }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  const toggleSubmenu = (i) => {
    setActiveSubmenu(activeSubmenu === i ? null : i)
  }

  return (
    <div className={`mobile-menu scroll-sm d-lg-none d-block${open ? ' active' : ''}`}>
      <button type="button" className="close-button" onClick={onClose}>
        <i className="ph ph-x"></i>
      </button>
      <div className="mobile-menu__inner">
        <Link to="/" className="mobile-menu__logo" onClick={onClose}>
          <img src="/logo.png" alt="SkilliMart Logo" style={{ mixBlendMode: 'multiply' }} />
        </Link>
        <div className="mobile-menu__menu">
          <ul className="nav-menu flex-align nav-menu--mobile flex-column align-items-stretch w-100 gap-8">
            {navLinks.map((item, i) => {
              const isSubOpen = activeSubmenu === i
              return (
                <li key={i} className={`nav-menu__item${item.sub ? ' has-submenu' : ''}${isSubOpen ? ' active' : ''}`}>
                  {item.sub ? (
                    <>
                      <a
                        href="#"
                        onClick={e => { e.preventDefault(); toggleSubmenu(i); }}
                        className="nav-menu__link text-heading-two d-flex align-items-center justify-content-between py-12 px-16 w-100"
                      >
                        {item.label}
                        <i className={`ph ph-caret-down text-sm transition-all ${isSubOpen ? 'rotate-180' : ''}`} style={{ transform: isSubOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}></i>
                      </a>
                      <ul
                        className={`common-dropdown nav-submenu scroll-sm ${isSubOpen ? 'd-block' : 'd-none'}`}
                        style={{ display: isSubOpen ? 'block' : 'none', position: 'static', opacity: 1, visibility: 'visible', width: '100%', boxShadow: 'none', paddingLeft: 16 }}
                      >
                        {item.sub.map((s, j) => (
                          <li key={j} className="common-dropdown__item nav-submenu__item">
                            <Link to={s.to} className="common-dropdown__link nav-submenu__link text-heading-two hover-bg-neutral-100 py-8 px-16 d-block" onClick={onClose}>{s.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={item.to} className="nav-menu__link text-heading-two py-12 px-16 d-block" onClick={onClose}>{item.label}</Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
