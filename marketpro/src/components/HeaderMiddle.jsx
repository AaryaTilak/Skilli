import { Link } from 'react-router-dom'

const A = 'https://marketpro.theme.picode.in/assets'

/* The "Middle Header" contains logo + search bar + wishlist/cart/profile icons */
const HeaderMiddle = ({ onToggleMobile, onSearchOpen }) => {
  const categories = [
    'All categories','Grocery','Breakfast & Dairy','Vegetables',
    'Milks and Dairies','Pet Foods & Toy','Breads & Bakery',
    'Fresh Seafood','Frozen Foods','Noodles & Rice','Ice Cream',
  ]

  return (
    <div className="header-middle border-bottom border-gray-100">
      <div className="container container-lg">
        <nav className="header-inner flex-between gap-8">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="link">
              <img src="/logo.png" alt="SkilliMart Logo" style={{ mixBlendMode: 'multiply' }} />
            </Link>
          </div>

          {/* Search */}
          <form action="#" className="flex-align flex-wrap form-location-wrapper max-w-840 w-100" onSubmit={e => e.preventDefault()}>
            <div className="search-category select-style-one d-flex select-border-end-0 search-form d-sm-flex d-none text-heading-two text-sm w-100">
              <select className="js-example-basic-single border border-neutral-40 border-end-0">
                {categories.map((cat, i) => (
                  <option key={i} value={i} disabled={i === 0} selected={i === 0}>{cat}</option>
                ))}
              </select>
              <div className="search-form__wrapper position-relative border-half-start flex-grow-1">
                <input
                  type="text"
                  className="common-input border-neutral-40 py-18 ps-16 pe-76 rounded-0 rounded-end pe-44 placeholder-italic placeholder-text-sm border-start-0"
                  placeholder="Search for products, categories or brands..."
                />
                <button type="submit" className="w-64 h-44 bg-main-600 hover-bg-main-800 rounded-4 flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-6">
                  <i className="ph ph-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </form>

          {/* Right Actions */}
          <div className="header-right flex-align flex-shrink-0">
            <div className="flex-align gap-20">
              <button type="button" className="search-icon flex-align d-lg-none d-flex gap-4 item-hover border-0 bg-transparent" onClick={onSearchOpen}>
                <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                  <i className="ph ph-magnifying-glass"></i>
                </span>
              </button>
              <Link to="/account" className="flex-align gap-4 item-hover">
                <span className="text-xl text-gray-700 d-flex position-relative item-hover__text">
                  <i className="ph ph-user"></i>
                </span>
                <span className="text-md text-heading-three item-hover__text d-none d-lg-flex">Profile</span>
              </Link>
              <Link to="/wishlist" className="flex-align gap-4 item-hover">
                <span className="text-xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                  <i className="ph ph-heart"></i>
                  <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">2</span>
                </span>
                <span className="text-md text-heading-three item-hover__text d-none d-lg-flex">Wishlist</span>
              </Link>
              <Link to="/cart" className="flex-align gap-4 item-hover">
                <span className="text-xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                  <i className="ph ph-shopping-cart-simple"></i>
                  <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">2</span>
                </span>
                <span className="text-md text-heading-three item-hover__text d-none d-lg-flex">Cart</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default HeaderMiddle
