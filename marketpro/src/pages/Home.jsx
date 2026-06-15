import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const A = 'https://marketpro.theme.picode.in/assets'

/* ── Countdown Timer ── */
const Countdown = ({ id = 'cd', dark = false, style3 = false }) => {
  const [t, setT] = useState({ d: 5, h: 14, m: 54, s: 28 })
  useEffect(() => {
    const iv = setInterval(() => {
      setT(p => {
        let { d, h, m, s } = p
        if (s > 0) return { d, h, m, s: s - 1 }
        if (m > 0) return { d, h, m: m - 1, s: 59 }
        if (h > 0) return { d, h: h - 1, m: 59, s: 59 }
        if (d > 0) return { d: d - 1, h: 23, m: 59, s: 59 }
        return { d: 0, h: 0, m: 0, s: 0 }
      })
    }, 1000)
    return () => clearInterval(iv)
  }, [])

  if (style3) {
    return (
      <div className="countdown" id={id}>
        <ul className="countdown-list style-three flex-align flex-wrap">
          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span className="days">{String(t.d).padStart(2,'0')}</span>Days</li>
          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span className="hours">{String(t.h).padStart(2,'0')}</span>Hours</li>
          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span className="minutes">{String(t.m).padStart(2,'0')}</span>Min</li>
          <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium"><span className="seconds">{String(t.s).padStart(2,'0')}</span>Sec</li>
        </ul>
      </div>
    )
  }

  const cls = dark
    ? 'countdown-list__item py-8 px-12 flex-align gap-4 text-sm fw-medium box-shadow-4xl rounded-5 bg-main-600 text-white'
    : 'countdown-list__item py-8 px-12 text-heading flex-align gap-4 text-sm fw-medium box-shadow-4xl rounded-5'
  return (
    <div className="countdown" id={id}>
      <ul className="countdown-list flex-align flex-wrap">
        <li className={cls}><span className="days">{String(t.d).padStart(2,'0')}</span> D</li>
        <li className={cls}><span className="hours">{String(t.h).padStart(2,'0')}</span> H</li>
        <li className={cls}><span className="minutes">{String(t.m).padStart(2,'0')}</span> M</li>
        <li className={cls}><span className="seconds">{String(t.s).padStart(2,'0')}</span> S</li>
      </ul>
    </div>
  )
}

/* ── Data ── */
const featureItems = [
  { img: 'feature-img1.png', name: 'Vegetables', count: '125+ Products' },
  { img: 'feature-img2.png', name: 'Fish & Meats', count: '125+ Products' },
  { img: 'feature-img3.png', name: 'Desserts', count: '125+ Products' },
  { img: 'feature-img4.png', name: 'Drinks & Juice', count: '125+ Products' },
  { img: 'feature-img5.png', name: 'Animals Food', count: '125+ Products' },
  { img: 'feature-img6.png', name: 'Fresh Fruits', count: '125+ Products' },
  { img: 'feature-img7.png', name: 'Yummy Candy', count: '125+ Products' },
  { img: 'feature-img8.png', name: 'Dairy & Eggs', count: '125+ Products' },
  { img: 'feature-img9.png', name: 'Snacks', count: '125+ Products' },
  { img: 'feature-img10.png', name: 'Frozen Foods', count: '125+ Products' },
]

const flashProducts = [
  { img: 'product-img26.png', name: 'Taylor Farms Broccoli Florets Vegetables' },
  { img: 'product-img27.png', name: 'Lucerne Yogurt, Lowfat, Strawberry' },
  { img: 'product-img28.png', name: "Marcel's Modern Pantry Almond Unsweetened" },
  { img: 'product-img29.png', name: 'Nature Valley Whole Grain Oats and Honey' },
  { img: 'product-img30.png', name: 'O Organics Milk, Whole, Vitamin D' },
  { img: 'product-img31.png', name: 'Whole Grains and Seeds Organic Bread' },
  { img: 'product-img32.png', name: 'C-500 Antioxidant Protect Dietary Supplement' },
]

const recommended = [
  { img: 'product-img7.png', name: 'C-500 Antioxidant Protect Dietary Supplement', badge: '', badgeColor: '' },
  { img: 'product-img8.png', name: "Marcel's Modern Pantry Almond Unsweetened", badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-img9.png', name: 'O Organics Milk, Whole, Vitamin D', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-img10.png', name: 'Whole Grains and Seeds Organic Bread', badge: 'Best Sale', badgeColor: 'bg-info-600' },
  { img: 'product-img11.png', name: 'Lucerne Yogurt, Lowfat, Strawberry', badge: '', badgeColor: '' },
  { img: 'product-img12.png', name: 'Nature Valley Whole Grain Oats and Honey Protein', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-img13.png', name: 'C-500 Antioxidant Protect Dietary Supplement', badge: '', badgeColor: '' },
  { img: 'product-img14.png', name: 'C-500 Antioxidant Protect Dietary Supplement', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-img15.png', name: 'C-500 Antioxidant Protect Dietary Supplement', badge: 'New', badgeColor: 'bg-warning-600' },
  { img: 'product-img16.png', name: 'Good & Gather Farmed Atlantic Salmon', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-img17.png', name: 'Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp', badge: 'Sale 50%', badgeColor: 'bg-danger-600' },
  { img: 'product-img18.png', name: 'Tropicana 100% Juice, Orange, No Pulp', badge: 'New', badgeColor: 'bg-warning-600' },
]

const hotDealsProducts = [
  { img: 'product-img26.png', name: 'Taylor Farms Broccoli Florets Vegetables' },
  { img: 'product-img27.png', name: 'Lucerne Yogurt, Lowfat, Strawberry' },
  { img: 'product-img28.png', name: "Marcel's Modern Pantry Almond" },
  { img: 'product-img29.png', name: 'Nature Valley Whole Grain Oats' },
  { img: 'product-img30.png', name: 'O Organics Milk, Whole, Vitamin D' },
  { img: 'product-img13.png', name: 'C-500 Antioxidant Protect Supplement' },
]

const brands = ['brand-img1.png','brand-img2.png','brand-img3.png','brand-img4.png','brand-img5.png','brand-img6.png','brand-img7.png','brand-img8.png']

/* ── Reusable ProductCard ── */
const ProductCard = ({ img, name, price = '$14.99', old = '$28.99', badge, badgeColor }) => (
  <div className="product-card h-100 p-12 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 group-item">
    <button type="button" className="wishlist-btn-two"><i className="ph-bold ph-heart"></i></button>
    {badge && <span className={`product-card__badge ${badgeColor} px-8 py-4 text-sm text-white`}>{badge}</span>}
    <Link to="/product-details" className="product-card__thumb flex-center overflow-hidden">
      <img src={`${A}/images/thumbs/${img}`} alt="" />
    </Link>
    <div className="product-card__content p-sm-2 w-100">
      <h6 className="title text-lg fw-semibold my-12">
        <Link to="/product-details" className="link text-line-2">{name}</Link>
      </h6>
      <div className="flex-align gap-4">
        <span className="text-main-600 text-md d-flex"><i className="ph-fill ph-storefront"></i></span>
        <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
      </div>
      <div className="product-card__content mt-12">
        <div className="product-card__price mb-8">
          <span className="text-heading text-md fw-semibold">{price} <span className="text-gray-500 fw-normal">/Qty</span></span>
          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through"> {old}</span>
        </div>
        <div className="flex-align gap-6">
          <span className="text-xs fw-bold text-gray-600">4.8</span>
          <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
          <span className="text-xs fw-bold text-gray-600">(17k)</span>
        </div>
        <Link to="/cart" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center">
          Add To Cart <i className="ph ph-shopping-cart"></i>
        </Link>
      </div>
    </div>
  </div>
)

const tabs = ['All', 'Grocery', 'Fruits', 'Juices', 'Vegetables', 'Snacks', 'Organic Foods']

const Home = () => {
  const [activeTab, setActiveTab] = useState('All')

  /* Swiper instances for custom nav buttons manual control */
  const [bannerSwiper, setBannerSwiper] = useState(null)
  const [featureSwiper, setFeatureSwiper] = useState(null)
  const [flashSwiper, setFlashSwiper] = useState(null)
  const [hotSwiper, setHotSwiper] = useState(null)
  const [brandSwiper, setBrandSwiper] = useState(null)

  return (
    <>
      {/* ═══════════════ Banner Slider ═══════════════ */}
      <div className="banner">
        <div className="container container-lg">
          <div className="banner-item rounded-24 overflow-hidden position-relative arrow-center">
            <a href="#featureSection" className="scroll-down w-84 h-84 text-center flex-center bg-main-600 rounded-circle border border-5 text-white border-white position-absolute start-50 translate-middle-x bottom-0 hover-bg-main-800" style={{zIndex:5}}>
              <span className="icon line-height-0"><i className="ph ph-caret-double-down"></i></span>
            </a>
            <img src={`${A}/images/bg/banner-bg.png`} alt="" className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24" />

            {/* Custom arrows */}
            <button onClick={() => bannerSwiper?.slidePrev()} type="button" className="slick-prev slick-arrow flex-center rounded-circle box-shadow-4xl bg-white text-xl hover-bg-main-600 hover-text-white transition-1">
              <i className="ph ph-caret-left"></i>
            </button>
            <button onClick={() => bannerSwiper?.slideNext()} type="button" className="slick-next slick-arrow flex-center rounded-circle box-shadow-4xl bg-white text-xl hover-bg-main-600 hover-text-white transition-1">
              <i className="ph ph-caret-right"></i>
            </button>

            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              speed={800}
              onSwiper={setBannerSwiper}
              className="banner-slider"
            >
              {['banner-img3.png', 'banner-img1.png', 'banner-img3.png', 'banner-img1.png'].map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="banner-slider__item">
                    <div className="banner-slider__inner flex-between position-relative">
                      <div className="banner-item__content">
                        <span className="fw-semibold text-success-600 text-capitalize mb-8">Save up to 50% off on your first order</span>
                        <h2 className="banner-item__title max-w-700 mb-30">Daily Grocery Order and Get <span className="text-main-600">Express</span> Delivery</h2>
                        <div className="d-flex align-items-center gap-16">
                          <Link to="/shop" className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8">
                            Explore Shop <span className="icon text-xl d-flex"><i className="ph ph-shopping-cart-simple"></i></span>
                          </Link>
                          <div className="d-flex align-items-end gap-8">
                            <span className="text-heading fst-italic text-sm">Starting at</span>
                            <h6 className="text-danger-600 mb-0">$60.99</h6>
                          </div>
                        </div>
                      </div>
                      <div className="banner-item__thumb">
                        <img src={`${A}/images/thumbs/${img}`} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* ═══════════════ Feature Category Slider ═══════════════ */}
      <div className="feature" id="featureSection">
        <div className="container container-lg">
          <div className="position-relative arrow-center gradient-shadow">
            <button onClick={() => featureSwiper?.slidePrev()} type="button" className="slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1">
                <i className="ph ph-caret-left"></i>
              </button>
              <button onClick={() => featureSwiper?.slideNext()} type="button" className="slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1">
                <i className="ph ph-caret-right"></i>
              </button>

              <Swiper
                modules={[Autoplay]}
                slidesPerView={10}
                spaceBetween={12}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={setFeatureSwiper}
                breakpoints={{
                  0: { slidesPerView: 3 },
                  480: { slidesPerView: 5 },
                  768: { slidesPerView: 7 },
                  992: { slidesPerView: 8 },
                  1200: { slidesPerView: 10 },
                }}
                className="feature-item-wrapper"
              >
              {featureItems.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="feature-item text-center">
                    <div className="feature-item__thumb rounded-circle">
                      <Link to="/shop" className="w-100 h-100 flex-center">
                        <img src={`${A}/images/thumbs/${item.img}`} alt={item.name} />
                      </Link>
                    </div>
                    <div className="feature-item__content mt-16">
                      <h6 className="text-lg mb-8">
                        <Link to="/shop" className="text-inherit">{item.name}</Link>
                      </h6>
                      <span className="text-sm text-gray-400">{item.count}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* ═══════════════ Promotional Banners ═══════════════ */}
      <section className="promotional-banner pt-80">
        <div className="container container-lg">
          <div className="row gy-4">
            {[
              { img: 'promotional-banner-img1.png', title: 'Everyday Fresh Meat', price: '$60.99' },
              { img: 'promotional-banner-img2.png', title: 'Daily Fresh Vegetables', price: '$60.99' },
              { img: 'promotional-banner-img3.png', title: 'Everyday Fresh Milk', price: '$60.99' },
              { img: 'promotional-banner-img4.png', title: 'Everyday Fresh Fruits', price: null },
            ].map((b, i) => (
              <div key={i} className="col-xl-3 col-sm-6 col-xs-6">
                <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1 py-52 ps-40 pe-24 h-100">
                  <img src={`${A}/images/thumbs/${b.img}`} alt="" className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1" />
                  <div className="promotional-banner-item__content">
                    <h6 className="promotional-banner-item__title text-2xl max-w-184">{b.title}</h6>
                    {b.price && (
                      <div className="d-flex align-items-end gap-8">
                        <span className="text-heading fst-italic text-sm">Starting at</span>
                        <h6 className="text-danger-600 mb-0 text-xl">{b.price}</h6>
                      </div>
                    )}
                    <Link to="/shop" className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24">
                      Shop Now <span className="icon text-xl d-flex"><i className="ph ph-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Flash Sales Today (Slider) ═══════════════ */}
      <div className="product pt-60">
        <div className="container container-lg">
          <div className="section-heading">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Flash Sales Today</h5>
              <div className="flex-align gap-16">
                <Link to="/shop" className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline">View All Deals</Link>
                <div className="flex-align gap-8">
                  <button onClick={() => flashSwiper?.slidePrev()} type="button" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1">
                    <i className="ph ph-caret-left"></i>
                  </button>
                  <button onClick={() => flashSwiper?.slideNext()} type="button" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1">
                    <i className="ph ph-caret-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={6}
            spaceBetween={12}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            onSwiper={setFlashSwiper}
            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
            className="product-one-slider g-12"
          >
            {flashProducts.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="product-card px-20 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                  <Link to="/cart" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16">
                    Add <i className="ph ph-shopping-cart"></i>
                  </Link>
                  <Link to="/product-details" className="product-card__thumb flex-center overflow-hidden">
                    <img src={`${A}/images/thumbs/${p.img}`} alt="" />
                  </Link>
                  <div className="product-card__content mt-12">
                    <div className="product-card__price mb-8 d-flex align-items-center gap-8">
                      <span className="text-heading text-md fw-semibold">$14.99 <span className="text-gray-500 fw-normal">/Qty</span></span>
                      <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">$28.99</span>
                    </div>
                    <div className="flex-align gap-6">
                      <span className="text-xs fw-bold text-gray-600">4.8</span>
                      <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                      <span className="text-xs fw-bold text-gray-600">(17k)</span>
                    </div>
                    <h6 className="title text-lg fw-semibold mt-12 mb-20">
                      <Link to="/product-details" className="link text-line-2">{p.name}</Link>
                    </h6>
                    <div className="mt-12">
                      <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar">
                        <div className="progress-bar bg-main-600 rounded-pill" style={{ width: '51%' }}></div>
                      </div>
                      <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ═══════════════ Flash Sales Banners ═══════════════ */}
      <section className="flash-sales pt-80 overflow-hidden">
        <div className="container container-lg">
          <div className="row gy-4 arrow-style-two">
            <div className="col-lg-6">
              <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8 ps-56-px">
                <img src={`${A}/images/bg/flash-sale-bg1.png`} alt="" className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg" />
                <div className="flash-sales-item__content ms-sm-auto">
                  <h6 className="text-32 mb-8">X-Connect Smart Television</h6>
                  <p className="text-neutral-500 mb-12">Time remaining until the end of the offer.</p>
                  <Countdown id="countdown1" />
                  <Link to="/shop" className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24">
                    Shop Now <span className="icon text-xl d-flex"><i className="ph ph-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8 ps-56-px">
                <img src={`${A}/images/bg/flash-sale-bg2.png`} alt="" className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg" />
                <div className="flash-sales-item__content">
                  <h6 className="text-32 mb-8">Vegetables Combo Box</h6>
                  <p className="text-heading mb-12">Time remaining until the end of the offer.</p>
                  <Countdown id="countdown2" dark={true} />
                  <Link to="/shop" className="btn bg-success-600 hover-bg-success-700 d-inline-flex align-items-center rounded-pill gap-8 mt-24">
                    Shop Now <span className="icon text-xl d-flex"><i className="ph ph-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Recommended for You ═══════════════ */}
      <section className="recommended overflow-hidden pt-80">
        <div className="container container-lg">
          <div className="section-heading flex-between flex-wrap gap-16">
            <h5 className="mb-0">Recommended for you</h5>
            <ul className="nav common-tab nav-pills" role="tablist">
              {tabs.map(tab => (
                <li key={tab} className="nav-item" role="presentation">
                  <button
                    className={`nav-link fw-medium text-sm border border-white hover-border-main-600${activeTab === tab ? ' active' : ''}`}
                    type="button" onClick={() => setActiveTab(tab)}
                  >{tab}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row g-12">
                {recommended.map((p, i) => (
                  <div key={i} className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                    <ProductCard {...p} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Offer Section ═══════════════ */}
      <section className="offer pt-80">
        <div className="container container-lg">
          <div className="row gy-4">
            <div className="col-sm-6">
              <div className="offer-card position-relative rounded-16 overflow-hidden p-16 ps-56-px">
                <img src={`${A}/images/bg/offer-bg-img1.png`} alt="" className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100" />
                <div className="py-xl-4 max-w-392 ms-auto">
                  <div className="offer-card__logo mb-16 w-80 h-80 flex-center bg-white rounded-circle">
                    <img src={`${A}/images/thumbs/offer-logo.png`} alt="" />
                  </div>
                  <h5 className="mb-8">$5 off your first order</h5>
                  <div className="flex-align gap-8">
                    <span className="text-sm fw-medium text-heading">Delivery by 6:15am</span>
                    <span className="text-xs text-heading">Expire Aug 5</span>
                  </div>
                  <Link to="/shop" className="mt-16 btn bg-success-600 hover-text-white hover-bg-success-700 text-white fw-medium d-inline-flex align-items-center rounded-pill gap-8">
                    Shop Now <span className="icon text-xl d-flex"><i className="ph ph-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="offer-card position-relative rounded-16 overflow-hidden p-16 ps-56-px">
                <img src={`${A}/images/bg/offer-bg-img2.png`} alt="" className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100" />
                <div className="py-xl-4 max-w-392">
                  <div className="offer-card__logo mb-16 w-80 h-80 flex-center bg-white rounded-circle">
                    <img src={`${A}/images/thumbs/offer-logo.png`} alt="" />
                  </div>
                  <h5 className="mb-8">$5 off your first order</h5>
                  <div className="flex-align gap-8">
                    <span className="text-sm fw-medium text-heading">Delivery by 6:15am</span>
                    <span className="text-sm text-success-600">Expire Aug 5</span>
                  </div>
                  <Link to="/shop" className="mt-16 btn bg-white hover-text-white hover-bg-main-800 text-heading fw-medium d-inline-flex align-items-center rounded-pill gap-8">
                    Shop Now <span className="icon text-xl d-flex"><i className="ph ph-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Hot Deals Today (Slider) ═══════════════ */}
      <section className="hot-deals pt-80 overflow-hidden">
        <div className="container container-lg">
          <div className="section-heading">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Hot Deals Todays</h5>
              <div className="flex-align gap-16">
                <Link to="/shop" className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline">View All Deals</Link>
                <div className="flex-align gap-8">
                  <button onClick={() => hotSwiper?.slidePrev()} type="button" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1">
                    <i className="ph ph-caret-left"></i>
                  </button>
                  <button onClick={() => hotSwiper?.slideNext()} type="button" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1">
                    <i className="ph ph-caret-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-12">
            {/* Left: Deals Banner */}
            <div className="col-md-4">
              <div className="hot-deals position-relative rounded-16 bg-main-600 overflow-hidden ps-40 pe-24 pt-80 pb-120 z-1">
                <img src={`${A}/images/shape/offer-shape.png`} alt="" className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6" />
                <img src={`${A}/images/thumbs/basket-img.png`} alt="" className="position-absolute inset-inline-end-0 inset-block-end-0" />
                <span className="text-primary-600 bg-yellow text-heading py-4 px-12 rounded-4 text-sm fw-medium">Medical equipment</span>
                <div>
                  <h5 className="text-white mb-8 mt-12">Deals of the day</h5>
                  <p className="fw-semibold text-success-600">Save up to 50% off on your first order</p>
                  <Countdown id="countdown4" />
                  <Link to="/shop" className="mt-16 btn bg-white hover-text-white hover-bg-main-800 text-main-600 fw-medium d-inline-flex align-items-center rounded-pill gap-8">
                    Explore Shop <span className="icon text-xl d-flex"><i className="ph-bold ph-shopping-cart"></i></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Slider */}
            <div className="col-md-8">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={12}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                onSwiper={setHotSwiper}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
                className="hot-deals-slider arrow-style-two"
              >
                {hotDealsProducts.map((p, i) => (
                  <SwiperSlide key={i}>
                    <div className="product-card px-20 pt-16 pb-40 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                      <Link to="/cart" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16">
                        Add <i className="ph ph-shopping-cart"></i>
                      </Link>
                      <Link to="/product-details" className="product-card__thumb flex-center overflow-hidden">
                        <img src={`${A}/images/thumbs/${p.img}`} alt="" />
                      </Link>
                      <div className="product-card__content mt-12">
                        <div className="product-card__price mb-8 d-flex align-items-center gap-8">
                          <span className="text-heading text-md fw-semibold">$14.99 <span className="text-gray-500 fw-normal">/Qty</span></span>
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">$28.99</span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                          <span className="text-xs fw-bold text-gray-600">(17k)</span>
                        </div>
                        <h6 className="title text-lg fw-semibold mt-12 mb-20">
                          <Link to="/product-details" className="link text-line-2">{p.name}</Link>
                        </h6>
                        <div className="mt-12">
                          <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar">
                            <div className="progress-bar bg-main-600 rounded-pill" style={{ width: '35%' }}></div>
                          </div>
                          <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Shop by Brands (Slider) ═══════════════ */}
      <div className="brand py-80 overflow-hidden">
        <div className="container container-lg">
          <div className="brand-inner p-24 rounded-16">
            <div className="section-heading">
              <div className="flex-between flex-wrap gap-8">
                <h5 className="mb-0">Shop by Brands</h5>
                <div className="flex-align gap-16">
                  <Link to="/shop" className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline">View All Deals</Link>
                  <div className="flex-align gap-8">
                    <button onClick={() => brandSwiper?.slidePrev()} type="button" className="slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1">
                      <i className="ph ph-caret-left"></i>
                    </button>
                    <button onClick={() => brandSwiper?.slideNext()} type="button" className="slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1">
                      <i className="ph ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Swiper
              modules={[Autoplay]}
              slidesPerView={8}
              spaceBetween={16}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              onSwiper={setBrandSwiper}
              breakpoints={{
                0: { slidesPerView: 3 },
                480: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                992: { slidesPerView: 6 },
                1200: { slidesPerView: 8 },
              }}
              className="brand-slider arrow-style-two"
            >
              {brands.map((b, i) => (
                <SwiperSlide key={i}>
                  <div className="brand-item">
                    <img src={`${A}/images/thumbs/${b}`} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* ═══════════════ Daily Best Sells ═══════════════ */}
      <section className="best sells pb-80">
        <div className="container container-lg">
          <div className="section-heading">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Daily Best Sells</h5>
            </div>
          </div>
          <div className="row g-12">
            <div className="col-xxl-8">
              <div className="row gy-4">
                {['best-sell1.png','best-sell2.png','best-sell3.png','best-sell4.png'].map((img, i) => (
                  <div key={i} className="col-md-6">
                    <div className="product-card style-two h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2 flex-align gap-16">
                      <div>
                        <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">Sale 50%</span>
                        <Link to="/product-details" className="product-card__thumb flex-center overflow-hidden">
                          <img src={`${A}/images/thumbs/${img}`} alt="" />
                        </Link>
                        <Countdown id={`bestSell${i}`} style3={true} />
                      </div>
                      <div className="product-card__content">
                        <div className="product-card__price mb-16">
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">$28.99</span>
                          <span className="text-heading text-md fw-semibold">$14.99 <span className="text-gray-500 fw-normal">/Qty</span></span>
                        </div>
                        <div className="flex-align gap-6">
                          <span className="text-xs fw-bold text-gray-600">4.8</span>
                          <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                          <span className="text-xs fw-bold text-gray-600">(17k)</span>
                        </div>
                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                          <Link to="/product-details" className="link text-line-2">Taylor Farms Broccoli Florets Vegetables</Link>
                        </h6>
                        <div className="flex-align gap-4">
                          <span className="text-main-600 text-md d-flex"><i className="ph-fill ph-storefront"></i></span>
                          <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                        </div>
                        <div className="mt-12">
                          <div className="progress w-100 bg-color-three rounded-pill h-4">
                            <div className="progress-bar bg-main-600 rounded-pill" style={{ width: '35%' }}></div>
                          </div>
                          <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                        </div>
                        <Link to="/cart" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center">
                          Add To Cart <i className="ph ph-shopping-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-xxl-4">
              <div className="position-relative rounded-16 bg-light-purple overflow-hidden p-28 z-1 h-100">
                <img src={`${A}/images/bg/special-snacks.png`} alt="" className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 cover-img" />
                <div className="py-xl-4">
                  <div className="offer-card__logo mb-16 w-80 h-80 flex-center bg-white rounded-circle">
                    <img src={`${A}/images/thumbs/offer-logo.png`} alt="" />
                  </div>
                  <h5 className="mb-8">$5 off your first order</h5>
                  <div className="flex-align gap-8">
                    <span className="text-sm fw-medium text-heading">Delivery by 6:15am</span>
                    <span className="text-xs text-heading">Expire Aug 5</span>
                  </div>
                  <Link to="/shop" className="mt-16 btn bg-success-600 hover-text-white hover-bg-success-700 text-white fw-medium d-inline-flex align-items-center rounded-pill gap-8">
                    Shop Now <span className="icon text-xl d-flex"><i className="ph ph-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Newsletter ═══════════════ */}
      <section className="newsletter-new">
        <div className="container container-lg">
          <div className="py-20 px-80-px bg-neutral-100 rounded-12 d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap gap-32">
            <div className="max-w-700">
              <h3 className="mb-30">Stay home & get your daily needs from our shop</h3>
              <form className="d-flex gap-8 flex-wrap flex-sm-nowrap" onSubmit={e => e.preventDefault()}>
                <input type="text" className="form-control bg-white px-20 shadow-none py-16 rounded placeholder-text-14 flex-grow-1" placeholder="Enter your mail" />
                <button type="submit" className="btn py-20 px-32 bg-success-600 flex-shrink-0 hover-bg-success-700 flex-grow-1 text-white">Subscribe now</button>
              </form>
              <p className="text-heading text-sm mt-20 fw-medium">I agree that my submitted data is being collected and stored.</p>
            </div>
            <div className="d-lg-block d-none">
              <img src={`${A}/images/thumbs/newsletter-img.png`} alt="Newsletter" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
