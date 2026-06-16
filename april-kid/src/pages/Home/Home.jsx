import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'

/* ─── DATA ─── */
const heroSlides = [
  {
    id: 1,
    tag: 'New in store',
    title: 'Gifts for\nyou kid',
    bg: '#f0f0f5',
    image: '/images/hero1.png',
    dots: [
      { size: 24, top: '38%', left: '18%', color: '#4db8e8', anim: 'float1' },
      { size: 14, top: '55%', left: '13%', color: '#d4d4d4', anim: 'float2' },
      { size: 30, top: '32%', left: '22%', color: '#4db8e8', anim: 'float3' },
      { size: 18, top: '22%', right: '8%', color: '#f5c518', anim: 'float1' },
      { size: 20, bottom: '15%', right: '3%', color: '#4db8e8', anim: 'float2' },
    ],
  },
  {
    id: 2,
    tag: 'Sale up to 50%',
    title: 'Summer\ncollection',
    bg: '#f5c518',
    image: '/images/hero2.png',
    dots: [
      { size: 24, top: '30%', left: '12%', color: '#e8453c', anim: 'float2' },
      { size: 18, top: '55%', left: '8%', color: '#fff', anim: 'float1' },
    ],
  },
]

const categoryBanners = [
  {
    id: 1,
    title: 'Stuffed Animals\n& Plush Toys',
    bg: '#f5ede4',
    image: '/images/banner-toys.png',
    to: '/shop/toys',
  },
  {
    id: 2,
    title: 'Cute Clothers\nFor Small People',
    bg: '#ddeef7',
    image: '/images/banner-clothes.png',
    to: '/shop/clothes',
  },
  {
    id: 3,
    title: 'Furniture\nfor your kid',
    bg: '#fce8f0',
    image: '/images/banner-furniture.png',
    to: '/shop/furniture',
  },
]

const newArrivalsData = [
  { id: 1, name: 'Decorate', price: 7.00, image: '/images/product-toy1.png', category: 'Toys' },
  { id: 2, name: 'Chicco Pocket', price: 15.00, oldPrice: 18.00, image: '/images/product-doll.png', badge: 'SALE', category: 'Care Items' },
  { id: 3, name: "Children's dishes", price: 22.00, image: '/images/product-dishes.png', category: 'Care Items' },
  { id: 4, name: 'Diaper Bag', price: 22.00, image: '/images/product-bag.png', category: 'Care Items' },
  { id: 5, name: 'Kids Sneakers', price: 34.00, image: '/images/product-shoes.png', category: 'Toys' },
  { id: 6, name: 'Fun Backpack', price: 28.00, oldPrice: 36.00, image: '/images/product-backpack.png', badge: 'SALE', category: 'Cradle' },
  { id: 7, name: 'Baby Rattle Set', price: 12.00, image: '/images/product-toy1.png', category: 'Toys' },
  { id: 8, name: 'Soft Doll Bear', price: 19.00, image: '/images/product-doll.png', category: 'Cradle' },
]

const tabs = ['ALL', 'CARE ITEMS', 'CRADLE', 'TOYS']

const bestSellersData = [
  { id: 9, name: 'Baby Gym Set', price: 45.00, oldPrice: 60.00, image: '/images/product-toy1.png', badge: 'SALE' },
  { id: 10, name: 'Soft Plush Doll', price: 15.00, image: '/images/product-doll.png' },
  { id: 11, name: 'Mini Dish Set', price: 22.00, oldPrice: 28.00, image: '/images/product-dishes.png', badge: 'SALE' },
  { id: 12, name: 'Fashion Backpack', price: 28.00, image: '/images/product-backpack.png' },
]

const testimonials = [
  {
    num: '#01',
    text: 'I\'m very pleased with the work provided by our contractor Leo. He called to verify appointment times, arrived on time and was very professional and personable.',
    author: 'LEE BUI',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face',
  },
  {
    num: '#02',
    text: 'I have used the services of your company on a few occasions. Your crews are always personable, prompt and efficient. The work performed has been very good and as described.',
    author: 'IRYNA PETRUNKO',
    role: 'Model',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face',
  },
  {
    num: '#03',
    text: 'Your crews work more than expected. Even I call at early morning or at night they come and do the work prompt and effective. They are friendly and has a careful style of work.',
    author: 'ANAIS COULON',
    role: 'CEO',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=60&h=60&fit=crop&crop=face',
  },
]

const brands = [
  { name: 'Allioop', text: 'allioop' },
  { name: 'Houdini', text: 'HOUDINI' },
  { name: 'Skyler', text: 'Skyler' },
  { name: 'Burberry', text: 'Burberry' },
  { name: 'Made', text: 'MADE' },
]

/* ─── COMPONENT ─── */
export default function Home() {
  const [activeTab, setActiveTab] = useState('ALL')

  const filtered = activeTab === 'ALL'
    ? newArrivalsData
    : newArrivalsData.filter(p => p.category.toUpperCase() === activeTab)

  return (
    <div className="home-page">

      {/* ══════════ HERO SLIDER ══════════ */}
      <section className="hero-section">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          className="hero-swiper"
        >
          {heroSlides.map(slide => (
            <SwiperSlide key={slide.id}>
              <div
                className="hero-slide"
                style={{ background: slide.bg }}
              >
                {/* Floating decorative dots */}
                {slide.dots.map((dot, i) => (
                  <span
                    key={i}
                    className={`hero-dot anim-${dot.anim}`}
                    style={{
                      width: dot.size,
                      height: dot.size,
                      background: dot.color,
                      top: dot.top,
                      left: dot.left,
                      right: dot.right,
                      bottom: dot.bottom,
                    }}
                  />
                ))}

                <div className="container hero-slide__inner">
                  <div className="hero-slide__content">
                    <span className="hero-tag">{slide.tag}</span>
                    <h1 className="hero-title">{slide.title}</h1>
                    <Link to="/shop" className="btn-outline-dark" id={`hero-cta-${slide.id}`}>
                      SHOP NOW
                    </Link>
                  </div>
                  <div className="hero-slide__image">
                    <img
                      src={slide.image}
                      alt={slide.title.replace('\n', ' ')}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ══════════ 3-COL CATEGORY BANNERS ══════════ */}
      <section className="category-banners-section">
        <div className="container">
          <div className="grid-3 category-banners">
            {categoryBanners.map(banner => (
              <div
                key={banner.id}
                className="category-banner"
                style={{ background: banner.bg }}
              >
                <div className="category-banner__text">
                  <h3 className="category-banner__title">
                    {banner.title.split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </h3>
                  <Link to={banner.to} className="btn-text-underline" id={`banner-link-${banner.id}`}>
                    shop now
                  </Link>
                </div>
                <div className="category-banner__image">
                  <img src={banner.image} alt={banner.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEW ARRIVALS ══════════ */}
      <section className="new-arrivals-section">
        <div className="container">
          <h2 className="section-title">New Arrivals</h2>

          {/* Filter tabs */}
          <div className="tabs-row" role="tablist">
            {tabs.map(tab => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`tab-btn${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
                id={`tab-${tab.replace(' ', '-')}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid-4 products-grid">
            {filtered.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SALE BANNER ══════════ */}
      <section className="sale-banner-section">
        <div className="container">
          <div className="sale-banner" style={{ background: '#f5ede4' }}>
            {/* Decorative shapes */}
            <span className="sale-shape sale-shape--zigzag-yellow" />
            <span className="sale-shape sale-shape--circle-blue" />
            <div className="sale-banner__content">
              <h2 className="sale-banner__title">Up to 40% Off<br />Final Sale Items</h2>
              <Link to="/shop" className="btn-text-underline" id="sale-banner-link">shop now</Link>
            </div>
            <div className="sale-banner__image">
              <img src="/images/sale-banner.png" alt="Final Sale" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BEST SELLERS ══════════ */}
      <section className="best-sellers-section">
        <div className="container best-sellers-layout">
          {/* Left promo card */}
          <div className="best-sellers-promo">
            <img src="/images/hero2.png" alt="New Arrivals Promo" className="best-sellers-promo__img" />
            <div className="best-sellers-promo__overlay">
              <span className="font-script promo-hashtag">#newarrivals</span>
              <Link to="/shop" className="btn-text-underline" id="promo-new-arrivals-link">shop now</Link>
            </div>
          </div>
          {/* Right products */}
          <div className="grid-3 products-grid">
            {bestSellersData.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">We love our clients</h2>
          <div className="grid-3 testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <span className="testimonial-num">{t.num}</span>
                <p className="testimonial-text">« {t.text} »</p>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.author} className="testimonial-avatar" />
                  <div>
                    <strong>{t.author}</strong>
                    <span> / {t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BRANDS ══════════ */}
      <section className="brands-section">
        <div className="container">
          <div className="brands-grid">
            {brands.map(b => (
              <div key={b.name} className="brand-item">
                <span className="brand-text">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ INSTAGRAM STRIP ══════════ */}
      <section className="instagram-strip">
        <p>FOLLOW US ON INSTAGRAM</p>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">@skillikidstore</a>
      </section>

    </div>
  )
}
