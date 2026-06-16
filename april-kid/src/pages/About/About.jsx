import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <section className="page-banner" style={{ minHeight: 240, background: '#f5ede4' }}>
        <div className="container page-banner__inner">
          <h1 className="page-banner__title">About Us</h1>
          <nav aria-label="breadcrumb">
            <span className="breadcrumb-link">HOME</span>
            <span className="breadcrumb-sep"> / </span>
            <span className="breadcrumb-current">ABOUT</span>
          </nav>
        </div>
        <div className="page-banner__image">
          <img src="/images/hero1.png" alt="About" />
        </div>
      </section>

      <div className="container about-inner">
        <div className="about-grid">
          <div className="about-image">
            <img src="/images/banner-clothes.png" alt="Our Story" />
          </div>
          <div className="about-content">
            <span className="section-tag">Our Story</span>
            <h2 className="about-title" style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', color: 'var(--color-dark)' }}>
              We believe every child deserves the best
            </h2>
            <p className="about-text">
              SkilliKid Store was born from a simple idea: children deserve the most beautiful, safe, and joyful products in the world. Since 2017, we've been curating a carefully selected range of clothing, toys, furniture, and accessories for your little ones.
            </p>
            <p className="about-text">
              Every product in our store has been handpicked to ensure it meets our high standards for quality, safety, and design. We work with trusted brands and artisans who share our passion for making childhood magical.
            </p>
            <div className="about-stats">
              <div>
                <strong>8+</strong>
                <span>Years</span>
              </div>
              <div>
                <strong>1200+</strong>
                <span>Products</span>
              </div>
              <div>
                <strong>50k+</strong>
                <span>Happy Kids</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
