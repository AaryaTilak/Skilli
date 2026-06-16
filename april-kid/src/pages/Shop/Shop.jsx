import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Shop.css'

const allProducts = [
  { id: 1, name: 'Decorate Activity Toy', price: 7.00, image: '/images/product-toy1.png', category: 'Toys' },
  { id: 2, name: 'Chicco Pocket Doll', price: 15.00, oldPrice: 18.00, image: '/images/product-doll.png', badge: 'SALE', category: 'Care Items' },
  { id: 3, name: "Children's Dish Set", price: 22.00, image: '/images/product-dishes.png', category: 'Care Items' },
  { id: 4, name: 'Silver Diaper Bag', price: 22.00, image: '/images/product-bag.png', category: 'Care Items' },
  { id: 5, name: 'Kids Rainbow Sneakers', price: 34.00, image: '/images/product-shoes.png', category: 'Toys' },
  { id: 6, name: 'Fun Animal Backpack', price: 28.00, oldPrice: 36.00, image: '/images/product-backpack.png', badge: 'SALE', category: 'Clothes' },
  { id: 7, name: 'Baby Rattle Set', price: 12.00, image: '/images/product-toy1.png', category: 'Toys' },
  { id: 8, name: 'Soft Plush Bear', price: 19.00, image: '/images/product-doll.png', category: 'Cradle' },
  { id: 9, name: 'Baby Gym Activity', price: 45.00, oldPrice: 60.00, image: '/images/product-toy1.png', badge: 'SALE', category: 'Cradle' },
  { id: 10, name: 'Mini Tea Dish Set', price: 22.00, oldPrice: 28.00, image: '/images/product-dishes.png', badge: 'SALE', category: 'Care Items' },
  { id: 11, name: 'Striped Baby Outfit', price: 16.00, image: '/images/product-doll.png', category: 'Clothes' },
  { id: 12, name: 'Travel Diaper Bag', price: 35.00, image: '/images/product-bag.png', category: 'Care Items' },
]

const categories = ['All', 'Toys', 'Clothes', 'Care Items', 'Cradle']
const sortOptions = ['Default', 'Price: Low to High', 'Price: High to Low', 'Newest']

export default function Shop() {
  const { category } = useParams()
  const [activeCategory, setActiveCategory] = useState(
    category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All'
  )
  const [sort, setSort] = useState('Default')

  let filtered = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase())

  if (sort === 'Price: Low to High') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sort === 'Price: High to Low') filtered = [...filtered].sort((a, b) => b.price - a.price)

  return (
    <div className="shop-page">
      {/* Page Banner */}
      <section className="page-banner shop-banner">
        <div className="container page-banner__inner">
          <h1 className="page-banner__title">Shop</h1>
          <nav aria-label="breadcrumb">
            <span className="breadcrumb-link">HOME</span>
            <span className="breadcrumb-sep"> / </span>
            <span className="breadcrumb-current">SHOP</span>
          </nav>
        </div>
        <div className="page-banner__image">
          <img src="/images/hero2.png" alt="Shop" />
        </div>
      </section>

      <div className="container shop-layout">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <div className="sidebar-widget">
            <h4 className="sidebar-widget__title">Categories</h4>
            <ul className="sidebar-cats">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    className={`sidebar-cat-btn${activeCategory === cat ? ' active' : ''}`}
                    id={`cat-filter-${cat}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-widget">
            <h4 className="sidebar-widget__title">Price Range</h4>
            <p className="sidebar-price-label">$7 – $60</p>
            <input type="range" min="0" max="100" defaultValue="60" className="price-slider" id="price-range-slider" />
          </div>
        </aside>

        {/* Products */}
        <div className="shop-main">
          <div className="shop-toolbar">
            <p className="shop-count">{filtered.length} products found</p>
            <div className="shop-sort">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                {sortOptions.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          <div className="grid-3 products-grid">
            {filtered.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="shop-empty">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
