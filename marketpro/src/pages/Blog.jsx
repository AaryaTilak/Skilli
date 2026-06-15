import { Link } from 'react-router-dom'

const A = 'https://marketpro.theme.picode.in/assets'

const posts = [
  {
    img: 'blog-img1.png',
    category: 'Grocery',
    date: 'January 15, 2024',
    author: 'admin',
    title: '5 Easy Ways to Incorporate More Vegetables Into Your Diet',
    excerpt: 'Eating more vegetables doesn\'t have to be hard. Here are some simple and delicious ways to add more greens to your daily meals and improve your nutrition.'
  },
  {
    img: 'blog-img2.png',
    category: 'Health',
    date: 'January 22, 2024',
    author: 'admin',
    title: 'The Benefits of Organic Food: Why It\'s Worth the Investment',
    excerpt: 'Organic food is becoming increasingly popular, but many people wonder if it\'s really worth the extra cost. Here\'s what the science says about organic produce.'
  },
  {
    img: 'blog-img3.png',
    category: 'Tips',
    date: 'February 1, 2024',
    author: 'admin',
    title: 'How to Store Fresh Produce to Make It Last Longer',
    excerpt: 'Proper food storage can save you money and reduce waste. Learn the best techniques to keep your fresh fruits and vegetables at their peak for longer.'
  },
  {
    img: 'blog-img4.png',
    category: 'Recipes',
    date: 'February 10, 2024',
    author: 'admin',
    title: '10 Superfoods You Should Be Eating Every Day',
    excerpt: 'Superfoods are packed with nutrients and offer numerous health benefits. Here are ten powerhouses you should include in your daily diet for optimal health.'
  },
  {
    img: 'blog-img5.png',
    category: 'Grocery',
    date: 'February 20, 2024',
    author: 'admin',
    title: 'Smart Grocery Shopping: How to Save Money Without Sacrificing Quality',
    excerpt: 'Grocery bills can add up quickly. These tried-and-true strategies will help you shop smarter, eat better, and keep more money in your wallet.'
  },
  {
    img: 'blog-img1.png',
    category: 'Seasonal',
    date: 'March 5, 2024',
    author: 'admin',
    title: 'Seasonal Eating: Why Buying Local and Fresh Matters',
    excerpt: 'Seasonal eating is not just a trend—it\'s a return to the way our ancestors ate. Discover the environmental and health benefits of eating with the seasons.'
  },
]

const recentPosts = [
  { img: 'blog-img1.png', title: '5 Easy Ways to Incorporate More Vegetables', date: 'Jan 15, 2024' },
  { img: 'blog-img2.png', title: 'The Benefits of Organic Food', date: 'Jan 22, 2024' },
  { img: 'blog-img3.png', title: 'How to Store Fresh Produce', date: 'Feb 1, 2024' },
]

const Blog = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb mb-0 py-26 bg-main-two-50">
        <div className="container container-lg">
          <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Blog</h6>
            <ul className="flex-align gap-8 flex-wrap">
              <li className="text-sm">
                <Link to="/" className="text-gray-900 flex-align gap-8 hover-text-main-600">
                  <i className="ph ph-house"></i> Home
                </Link>
              </li>
              <li className="flex-align"><i className="ph ph-caret-right"></i></li>
              <li className="text-sm text-main-600">Blog</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="blog py-80">
        <div className="container container-lg">
          <div className="row gy-4">
            {/* Posts */}
            <div className="col-lg-8">
              <div className="row g-24">
                {posts.map((post, i) => (
                  <div key={i} className="col-sm-6">
                    <div className="blog-item rounded-16 overflow-hidden border border-gray-100 hover-border-main-600 transition-2">
                      <div className="blog-item__thumb overflow-hidden">
                        <Link to="/blog-details">
                          <img src={`${A}/images/thumbs/${post.img}`} alt="" className="w-100 h-220 object-fit-cover transition-1 hover-scale-1-05" style={{ maxHeight: 220 }} />
                        </Link>
                      </div>
                      <div className="blog-item__content p-24">
                        <div className="flex-align gap-16 mb-16 flex-wrap">
                          <span className="bg-main-50 text-main-600 px-12 py-4 rounded-pill text-xs fw-semibold">{post.category}</span>
                          <span className="text-xs text-gray-500 flex-align gap-4">
                            <i className="ph ph-calendar-blank"></i> {post.date}
                          </span>
                          <span className="text-xs text-gray-500 flex-align gap-4">
                            <i className="ph ph-user"></i> {post.author}
                          </span>
                        </div>
                        <h6 className="text-lg fw-semibold mb-12">
                          <Link to="/blog-details" className="text-line-2 hover-text-main-600">{post.title}</Link>
                        </h6>
                        <p className="text-gray-500 text-sm text-line-3 mb-20">{post.excerpt}</p>
                        <Link to="/blog-details" className="btn btn-outline-main py-11 px-24 rounded-pill text-sm flex-align gap-8 w-max-content">
                          Read More <i className="ph ph-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex-center flex-wrap gap-16 mt-60">
                <ul className="pagination flex-align flex-wrap gap-16">
                  <li><button type="button" className="pagination__btn w-44 h-44 rounded-circle flex-center border border-gray-100 hover-border-main-600 hover-bg-main-600 hover-text-white text-xl"><i className="ph ph-caret-left"></i></button></li>
                  {[1, 2, 3].map(p => (
                    <li key={p}>
                      <button type="button" className={`pagination__btn w-44 h-44 rounded-circle flex-center border text-xl ${p === 1 ? 'bg-main-600 text-white border-main-600' : 'border-gray-100 hover-border-main-600 hover-bg-main-600 hover-text-white'}`}>{p}</button>
                    </li>
                  ))}
                  <li><button type="button" className="pagination__btn w-44 h-44 rounded-circle flex-center border border-gray-100 hover-border-main-600 hover-bg-main-600 hover-text-white text-xl"><i className="ph ph-caret-right"></i></button></li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Search */}
              <div className="border border-gray-100 rounded-16 p-32 mb-32">
                <h6 className="text-xl mb-24 border-bottom border-gray-100 pb-24">Search</h6>
                <form className="position-relative" onSubmit={e => e.preventDefault()}>
                  <input type="text" className="form-control py-16 px-20 pe-60 border border-gray-200 rounded-8" placeholder="Search..." />
                  <button type="submit" className="position-absolute end-0 top-50 translate-middle-y me-16 text-main-600 text-xl line-height-1 border-0 bg-transparent">
                    <i className="ph-bold ph-magnifying-glass"></i>
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="border border-gray-100 rounded-16 p-32 mb-32">
                <h6 className="text-xl mb-24 border-bottom border-gray-100 pb-24">Categories</h6>
                <ul className="d-flex flex-column gap-16">
                  {[['Grocery', 12], ['Health & Wellness', 8], ['Tips & Tricks', 10], ['Recipes', 6], ['Seasonal', 4], ['Organic', 7]].map(([cat, count]) => (
                    <li key={cat} className="flex-between">
                      <Link to="/blog" className="text-gray-700 hover-text-main-600">{cat}</Link>
                      <span className="text-gray-400 text-sm">({count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="border border-gray-100 rounded-16 p-32 mb-32">
                <h6 className="text-xl mb-24 border-bottom border-gray-100 pb-24">Recent Posts</h6>
                <div className="d-flex flex-column gap-20">
                  {recentPosts.map((p, i) => (
                    <div key={i} className="flex-align gap-16">
                      <div className="w-64 h-64 rounded-8 border border-gray-100 overflow-hidden flex-shrink-0">
                        <img src={`${A}/images/thumbs/${p.img}`} alt="" className="w-100 h-100 object-fit-cover" />
                      </div>
                      <div>
                        <h6 className="text-sm fw-semibold mb-4">
                          <Link to="/blog-details" className="text-line-2 hover-text-main-600">{p.title}</Link>
                        </h6>
                        <span className="text-xs text-gray-500 flex-align gap-4">
                          <i className="ph ph-calendar-blank"></i> {p.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="border border-gray-100 rounded-16 p-32">
                <h6 className="text-xl mb-24 border-bottom border-gray-100 pb-24">Tags</h6>
                <div className="d-flex flex-wrap gap-8">
                  {['Grocery', 'Organic', 'Fresh', 'Health', 'Vegetables', 'Fruits', 'Nutrition', 'Diet', 'Cooking', 'Seasonal'].map((tag) => (
                    <Link key={tag} to="/blog" className="px-16 py-8 border border-gray-200 rounded-pill text-sm text-gray-700 hover-bg-main-600 hover-text-white hover-border-main-600 transition-1">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
