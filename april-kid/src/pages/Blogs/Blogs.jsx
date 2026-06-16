import './Blogs.css'

const blogPosts = [
  {
    id: 1,
    title: 'How to Choose the Safest Wooden Toys for Toddlers',
    date: 'June 10, 2026',
    author: 'Sarah Jenkins',
    excerpt: 'Wooden toys are durable, eco-friendly, and encourage creative play. Learn what safety features to check before purchasing your child\'s next play set.',
    image: '/images/banner-toys.png',
    category: 'TOYS & EDUCATION',
  },
  {
    id: 2,
    title: 'Essential Baby Wardrobe: Summer Clothes Guide',
    date: 'June 05, 2026',
    author: 'Emily Watson',
    excerpt: 'Pastel colors, lightweight organic cotton, and breathable fabrics. Discover the must-have summer outfits to keep your little ones cool and stylish.',
    image: '/images/banner-clothes.png',
    category: 'CLOTHING & FASHION',
  },
  {
    id: 3,
    title: 'Designing a Cozy & Creative Nursery Room',
    date: 'May 28, 2026',
    author: 'David Mercer',
    excerpt: 'Creating a comfortable and stimulating space for your baby doesn\'t have to be hard. Follow our step-by-step layout and styling guide using pastel elements.',
    image: '/images/banner-furniture.png',
    category: 'NURSERY & FURNITURE',
  },
  {
    id: 4,
    title: 'Sensory Play Ideas for Early Childhood Development',
    date: 'May 15, 2026',
    author: 'Laura Adams',
    excerpt: 'Sensory play builds nerve connections in the brain and encourages scientific thinking. Check out these easy, clean ideas you can set up at home.',
    image: '/images/hero1.png',
    category: 'TIPS & HACKS',
  }
]

export default function Blogs() {
  return (
    <div className="blogs-page">
      <section className="page-banner" style={{ minHeight: 180, background: '#fce8f0' }}>
        <div className="container page-banner__inner">
          <h1 className="page-banner__title">Our Journal</h1>
          <nav aria-label="breadcrumb">
            <span className="breadcrumb-link">HOME</span>
            <span className="breadcrumb-sep"> / </span>
            <span className="breadcrumb-current">BLOGS</span>
          </nav>
        </div>
      </section>

      <div className="container blogs-inner">
        <div className="blogs-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card__image-wrapper">
                <img src={post.image} alt={post.title} className="blog-card__image" />
                <span className="blog-card__category">{post.category}</span>
              </div>
              <div className="blog-card__content">
                <div className="blog-card__meta">
                  <span className="blog-card__date">{post.date}</span>
                  <span className="blog-card__sep">•</span>
                  <span className="blog-card__author">By {post.author}</span>
                </div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <button 
                  className="btn-text-underline"
                  onClick={() => alert(`Reading "${post.title}"...`)}
                  style={{ display: 'inline-block', marginTop: '12px' }}
                >
                  read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
