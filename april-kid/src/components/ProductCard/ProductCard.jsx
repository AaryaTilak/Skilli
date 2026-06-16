import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ id, name, price, oldPrice, image, badge }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="product-card" id={`product-card-${id}`}>
      {/* Badge */}
      {badge && (
        <span className="product-card__badge badge-sale">{badge}</span>
      )}

      {/* Wishlist */}
      <button
        className={`product-card__wishlist${liked ? ' liked' : ''}`}
        aria-label="Add to wishlist"
        id={`wishlist-btn-${id}`}
        onClick={() => setLiked(o => !o)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      </button>

      {/* Image */}
      <Link to={`/product/${id}`} className="product-card__thumb" id={`product-thumb-${id}`}>
        <img src={image} alt={name} loading="lazy" />
        <div className="product-card__hover-overlay">
          <span className="product-card__quick-view">Quick View</span>
        </div>
      </Link>

      {/* Info */}
      <div className="product-card__info">
        <h3 className="product-card__name">
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <div className="product-card__prices">
          {oldPrice && <span className="strike">${oldPrice.toFixed(2)}</span>}
          <span className="product-card__price">${price.toFixed(2)}</span>
        </div>
        <button
          className="product-card__add-btn"
          id={`add-to-cart-${id}`}
          onClick={() => alert(`Added ${name} to cart!`)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
