import { Link } from 'react-router-dom'

const A = 'https://marketpro.theme.picode.in/assets'

const wishlistItems = [
  { img: 'product-img7.png', name: 'Taylor Farms Broccoli Florets Vegetables', price: '$14.99', old: '$28.99', stock: 'In Stock' },
  { img: 'product-img8.png', name: 'Marcel\'s Modern Pantry Almond Unsweetened', price: '$14.99', old: '$28.99', stock: 'In Stock' },
  { img: 'product-img9.png', name: 'O Organics Milk, Whole, Vitamin D', price: '$14.99', old: '$28.99', stock: 'Out of Stock' },
  { img: 'product-img10.png', name: 'Whole Grains and Seeds Organic Bread', price: '$14.99', old: '$28.99', stock: 'In Stock' },
  { img: 'product-img11.png', name: 'Lucerne Yogurt, Lowfat, Strawberry', price: '$14.99', old: '$28.99', stock: 'In Stock' },
]

const Wishlist = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb mb-0 py-26 bg-main-two-50">
        <div className="container container-lg">
          <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Wishlist</h6>
            <ul className="flex-align gap-8 flex-wrap">
              <li className="text-sm">
                <Link to="/" className="text-gray-900 flex-align gap-8 hover-text-main-600">
                  <i className="ph ph-house"></i> Home
                </Link>
              </li>
              <li className="flex-align"><i className="ph ph-caret-right"></i></li>
              <li className="text-sm text-main-600">Wishlist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wishlist Section */}
      <section className="wishlist py-80">
        <div className="container container-lg">
          <div className="d-flex align-items-center justify-content-between mb-40 flex-wrap gap-16">
            <h5 className="mb-0">My Wishlist</h5>
            <span className="text-gray-500">{wishlistItems.length} items</span>
          </div>

          <div className="table-responsive">
            <table className="table style-three">
              <thead>
                <tr>
                  <th className="h6 mb-0 fw-bold">Product</th>
                  <th className="h6 mb-0 fw-bold">Price</th>
                  <th className="h6 mb-0 fw-bold">Stock Status</th>
                  <th className="h6 mb-0 fw-bold">Action</th>
                  <th className="h6 mb-0 fw-bold">Remove</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <div className="flex-align gap-16">
                        <div className="w-90 h-90 rounded-12 border border-gray-100 overflow-hidden flex-shrink-0">
                          <img src={`${A}/images/thumbs/${item.img}`} alt="" className="w-100 h-100 object-fit-contain" />
                        </div>
                        <h6 className="text-md mb-0">
                          <Link to="/product-details" className="text-line-2">{item.name}</Link>
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex-align gap-8">
                        <span className="text-danger-600 fw-semibold">{item.price}</span>
                        <span className="text-gray-400 text-decoration-line-through">{item.old}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`fw-semibold text-sm ${item.stock === 'In Stock' ? 'text-main-600' : 'text-danger-600'}`}>
                        {item.stock}
                      </span>
                    </td>
                    <td>
                      <Link to="/cart" className="btn bg-main-600 text-white hover-bg-main-700 py-11 px-24 rounded-pill flex-align gap-8" style={{ whiteSpace: 'nowrap' }}>
                        Add To Cart <i className="ph ph-shopping-cart"></i>
                      </Link>
                    </td>
                    <td>
                      <button type="button" className="w-32 h-32 flex-center border border-gray-200 rounded-circle hover-bg-danger-600 hover-border-danger-600 hover-text-white text-gray-500">
                        <i className="ph ph-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex-between flex-wrap gap-16 mt-40">
            <Link to="/shop" className="btn btn-outline-main py-18 px-32 rounded-pill flex-align gap-8">
              <i className="ph ph-arrow-left"></i> Continue Shopping
            </Link>
            <Link to="/cart" className="btn btn-main py-18 px-32 rounded-pill flex-align gap-8">
              Move All To Cart <i className="ph ph-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Wishlist
