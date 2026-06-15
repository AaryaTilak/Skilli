import { Link } from 'react-router-dom'

const A = 'https://marketpro.theme.picode.in/assets'

const BlogDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb mb-0 py-26 bg-main-two-50">
        <div className="container container-lg">
          <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Blog Details</h6>
            <ul className="flex-align gap-8 flex-wrap">
              <li className="text-sm">
                <Link to="/" className="text-gray-900 flex-align gap-8 hover-text-main-600">
                  <i className="ph ph-house"></i> Home
                </Link>
              </li>
              <li className="flex-align"><i className="ph ph-caret-right"></i></li>
              <li className="text-sm">
                <Link to="/blog" className="text-gray-900 hover-text-main-600">Blog</Link>
              </li>
              <li className="flex-align"><i className="ph ph-caret-right"></i></li>
              <li className="text-sm text-main-600">Blog Details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blog Details Section */}
      <section className="blog-details py-80">
        <div className="container container-lg">
          <div className="row gy-4">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="blog-details-content">
                {/* Header */}
                <div className="flex-align gap-16 mb-24 flex-wrap">
                  <span className="bg-main-50 text-main-600 px-12 py-4 rounded-pill text-xs fw-semibold">Grocery</span>
                  <span className="text-xs text-gray-500 flex-align gap-4">
                    <i className="ph ph-calendar-blank"></i> January 15, 2024
                  </span>
                  <span className="text-xs text-gray-500 flex-align gap-4">
                    <i className="ph ph-user"></i> admin
                  </span>
                  <span className="text-xs text-gray-500 flex-align gap-4">
                    <i className="ph ph-chat-circle-dots"></i> 12 Comments
                  </span>
                </div>

                <h3 className="mb-24">5 Easy Ways to Incorporate More Vegetables Into Your Diet</h3>

                <img src={`${A}/images/thumbs/blog-img1.png`} alt="" className="w-100 rounded-16 mb-40 object-fit-cover" style={{ maxHeight: 440 }} />

                <p className="text-gray-700 mb-24">Eating more vegetables is one of the best things you can do for your health. They're packed with essential vitamins, minerals, and fiber that your body needs to function at its best. Yet, many people struggle to get enough vegetables in their daily diet.</p>

                <p className="text-gray-700 mb-24">The good news is that incorporating more vegetables doesn't have to feel like a chore. With a few simple strategies, you can enjoy more of these nutritious foods without even trying.</p>

                <h5 className="mb-16">1. Add Vegetables to Your Breakfast</h5>
                <p className="text-gray-700 mb-24">Most people think of vegetables as a lunch or dinner food, but they can easily be added to breakfast. Try adding spinach or kale to your morning smoothie, throwing some diced bell peppers into your scrambled eggs, or adding sliced avocado to your toast.</p>

                <h5 className="mb-16">2. Make Vegetables the Star of Your Meals</h5>
                <p className="text-gray-700 mb-24">Instead of treating vegetables as a side dish, make them the main event. Create hearty salads, veggie-loaded stir-fries, or grain bowls with plenty of colorful vegetables. When vegetables are at the center of your plate, you naturally eat more of them.</p>

                <div className="bg-main-50 rounded-16 p-32 mb-40 border-start border-4 border-main-600">
                  <p className="text-heading fw-semibold fst-italic mb-0">"Vegetables are not just side dishes—they are the foundation of a healthy diet. Make them the star of your meals and your health will thank you."</p>
                </div>

                <h5 className="mb-16">3. Snack on Vegetables</h5>
                <p className="text-gray-700 mb-24">Replace your usual snacks with vegetables. Keep cut carrots, celery, cucumber, and bell peppers in the fridge for easy snacking. Pair them with hummus, guacamole, or your favorite dip to make them more enjoyable.</p>

                <h5 className="mb-16">4. Hide Vegetables in Your Favorite Dishes</h5>
                <p className="text-gray-700 mb-24">You can sneak vegetables into many of your favorite dishes without anyone noticing. Add pureed carrots or zucchini to pasta sauce, blend cauliflower into mashed potatoes, or mix shredded vegetables into burgers and meatballs.</p>

                <h5 className="mb-16">5. Try New Vegetables and Cooking Methods</h5>
                <p className="text-gray-700 mb-40">If you're bored with the same vegetables, try something new. Visit your local farmers market and pick up a vegetable you've never cooked before. Experiment with different cooking methods—roasting, grilling, or air-frying can transform the flavor of vegetables you thought you didn't like.</p>

                {/* Tags & Share */}
                <div className="flex-between flex-wrap gap-16 pt-32 border-top border-gray-200">
                  <div className="flex-align gap-8 flex-wrap">
                    <span className="fw-semibold text-heading">Tags:</span>
                    {['Grocery', 'Organic', 'Health', 'Vegetables'].map(tag => (
                      <Link key={tag} to="/blog" className="px-12 py-6 border border-gray-200 rounded-pill text-sm text-gray-700 hover-bg-main-600 hover-text-white hover-border-main-600 transition-1">
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="flex-align gap-8">
                    <span className="fw-semibold text-heading">Share:</span>
                    {['facebook-logo', 'twitter-logo', 'instagram-logo', 'linkedin-logo'].map(icon => (
                      <a key={icon} href="#" onClick={e => e.preventDefault()} className="w-36 h-36 rounded-circle border border-gray-200 flex-center text-main-600 hover-bg-main-600 hover-text-white hover-border-main-600">
                        <i className={`ph ph-${icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Comments */}
                <div className="mt-60">
                  <h5 className="mb-32">Comments (3)</h5>
                  {[
                    { name: 'Theresa Webb', date: 'January 20, 2024', img: 'user-img1.png', text: 'Great article! I\'ve been trying to eat more vegetables and these tips are really helpful. I especially like the idea of adding them to breakfast.' },
                    { name: 'Floyd Miles', date: 'January 22, 2024', img: 'user-img2.png', text: 'I never thought of hiding vegetables in my favorite dishes. Going to try the cauliflower in mashed potatoes trick!' },
                  ].map((c, i) => (
                    <div key={i} className="d-flex gap-20 mb-32 pb-32 border-bottom border-gray-100">
                      <img src={`${A}/images/thumbs/${c.img}`} alt="" className="w-56 h-56 rounded-circle object-fit-cover flex-shrink-0" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }} />
                      <div className="w-100">
                        <div className="flex-between flex-wrap gap-8 mb-8">
                          <h6 className="mb-0">{c.name}</h6>
                          <span className="text-sm text-gray-500">{c.date}</span>
                        </div>
                        <p className="text-gray-700 mb-8">{c.text}</p>
                        <button type="button" className="btn btn-outline-main py-8 px-20 rounded-pill text-sm">Reply</button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Form */}
                <div className="mt-40">
                  <h5 className="mb-32">Leave a Comment</h5>
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="row g-20">
                      <div className="col-sm-6">
                        <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Your Name *" />
                      </div>
                      <div className="col-sm-6">
                        <input type="email" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Your Email *" />
                      </div>
                      <div className="col-12">
                        <textarea className="form-control py-16 px-20 border border-gray-200 rounded-8" rows="6" placeholder="Your Comment *"></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-main py-18 px-40 rounded-pill flex-align gap-8">
                          Post Comment <i className="ph ph-paper-plane-tilt"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
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
                  {[['Grocery', 12], ['Health & Wellness', 8], ['Tips & Tricks', 10], ['Recipes', 6], ['Seasonal', 4]].map(([cat, count]) => (
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
                  {[
                    { img: 'blog-img2.png', title: 'The Benefits of Organic Food', date: 'Jan 22, 2024' },
                    { img: 'blog-img3.png', title: 'How to Store Fresh Produce', date: 'Feb 1, 2024' },
                    { img: 'blog-img4.png', title: '10 Superfoods You Should Be Eating', date: 'Feb 10, 2024' },
                  ].map((p, i) => (
                    <div key={i} className="flex-align gap-16">
                      <div className="w-64 h-64 rounded-8 border border-gray-100 overflow-hidden flex-shrink-0">
                        <img src={`${A}/images/thumbs/${p.img}`} alt="" className="w-100 h-100 object-fit-cover" />
                      </div>
                      <div>
                        <h6 className="text-sm fw-semibold mb-4">
                          <Link to="/blog-details" className="text-line-2 hover-text-main-600">{p.title}</Link>
                        </h6>
                        <span className="text-xs text-gray-500">{p.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="border border-gray-100 rounded-16 p-32">
                <h6 className="text-xl mb-24 border-bottom border-gray-100 pb-24">Tags</h6>
                <div className="d-flex flex-wrap gap-8">
                  {['Grocery', 'Organic', 'Fresh', 'Health', 'Vegetables', 'Fruits', 'Nutrition', 'Cooking'].map(tag => (
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

export default BlogDetails
