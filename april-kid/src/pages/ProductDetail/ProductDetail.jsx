import { Link } from 'react-router-dom'
import './ProductDetail.css'

export default function ProductDetail() {
  return (
    <div className="product-detail-page">
      <section className="page-banner" style={{ minHeight: 180 }}>
        <div className="container page-banner__inner">
          <h1 className="page-banner__title" style={{ fontSize: '2rem' }}>Product Detail</h1>
          <nav aria-label="breadcrumb">
            <span className="breadcrumb-link">HOME</span>
            <span className="breadcrumb-sep"> / </span>
            <Link to="/shop" className="breadcrumb-link">SHOP</Link>
            <span className="breadcrumb-sep"> / </span>
            <span className="breadcrumb-current">PRODUCT</span>
          </nav>
        </div>
      </section>

      <div className="container product-detail-inner">
        <div className="product-detail-layout">
          {/* Images */}
          <div className="product-detail__gallery">
            <img src="/images/product-doll.png" alt="Product" className="product-detail__main-img" />
            <div className="product-detail__thumbs">
              {['/images/product-toy1.png', '/images/product-doll.png', '/images/product-dishes.png'].map((img, i) => (
                <img key={i} src={img} alt="" className="product-detail__thumb" />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="product-detail__info">
            <h1 className="product-detail__name">Chicco Pocket Doll</h1>
            <div className="product-detail__pricing">
              <span className="strike">$18.00</span>
              <span className="product-detail__price">$15.00</span>
            </div>
            <p className="product-detail__desc">
              A beautiful soft plush doll for your little one. Made with premium materials, safe and cuddly. 
              Perfect as a gift or everyday companion for babies and toddlers.
            </p>

            <div className="product-detail__actions">
              <div className="qty-control">
                <button id="qty-dec">−</button>
                <span>1</span>
                <button id="qty-inc">+</button>
              </div>
              <button className="btn-outline-dark" id="add-to-cart-detail">ADD TO CART</button>
            </div>

            <div className="product-detail__meta">
              <p><strong>Category:</strong> Care Items</p>
              <p><strong>SKU:</strong> AK-002</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
