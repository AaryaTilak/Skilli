import { Link } from 'react-router-dom'
import { useState } from 'react'

const A = 'https://marketpro.theme.picode.in/assets'

const orders = [
  { id: '#12345', date: 'Jun 10, 2024', items: 3, status: 'Delivered', total: '$44.97' },
  { id: '#12344', date: 'May 28, 2024', items: 2, status: 'Processing', total: '$29.98' },
  { id: '#12343', date: 'May 14, 2024', items: 5, status: 'Delivered', total: '$74.95' },
  { id: '#12342', date: 'Apr 30, 2024', items: 1, status: 'Cancelled', total: '$14.99' },
]

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const sidebarNav = [
    { key: 'dashboard', label: 'Dashboard', icon: 'ph-squares-four' },
    { key: 'orders', label: 'My Orders', icon: 'ph-package' },
    { key: 'wishlist', label: 'Wishlist', icon: 'ph-heart' },
    { key: 'address', label: 'Address', icon: 'ph-map-pin' },
    { key: 'profile', label: 'Profile Settings', icon: 'ph-user-gear' },
    { key: 'password', label: 'Change Password', icon: 'ph-lock-key' },
  ]

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb mb-0 py-26 bg-main-two-50">
        <div className="container container-lg">
          <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">My Account</h6>
            <ul className="flex-align gap-8 flex-wrap">
              <li className="text-sm">
                <Link to="/" className="text-gray-900 flex-align gap-8 hover-text-main-600">
                  <i className="ph ph-house"></i> Home
                </Link>
              </li>
              <li className="flex-align"><i className="ph ph-caret-right"></i></li>
              <li className="text-sm text-main-600">My Account</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Account Section */}
      <section className="account py-80">
        <div className="container container-lg">
          <div className="row gy-4">
            {/* Sidebar */}
            <div className="col-lg-3">
              <div className="border border-gray-100 rounded-16 p-32 responsive-card-padding text-center mb-24">
                <div className="w-100 h-100 rounded-circle overflow-hidden mx-auto mb-16 d-flex align-items-center justify-content-center bg-main-50" style={{ width: 100, height: 100, maxWidth: 100 }}>
                  <img src={`${A}/images/thumbs/user-img1.png`} alt="" className="w-100 h-100 object-fit-cover" style={{ maxWidth: 100, borderRadius: '50%' }} />
                </div>
                <h6 className="mb-4">Theresa Webb</h6>
                <span className="text-gray-500 text-sm">theresawebb@email.com</span>
              </div>

              <div className="border border-gray-100 rounded-16 overflow-hidden">
                <ul className="d-flex flex-lg-column flex-row flex-nowrap overflow-x-auto text-nowrap account-nav-list p-lg-0 p-8 scroll-sm gap-lg-0 gap-8">
                  {sidebarNav.map((item, i) => (
                    <li key={item.key}>
                      <button
                        type="button"
                        onClick={() => setActiveTab(item.key)}
                        className={`d-flex align-items-center gap-16 py-16 px-24 w-100 text-start transition-1 hover-bg-main-50 hover-text-main-600 border-0 bg-transparent ${i < sidebarNav.length - 1 ? 'border-bottom border-gray-100' : ''} ${activeTab === item.key ? 'bg-main-600 text-white' : 'text-gray-700'}`}
                      >
                        <i className={`ph ${item.icon} text-xl`}></i>
                        <span className="fw-semibold">{item.label}</span>
                      </button>
                    </li>
                  ))}
                  <li>
                    <button type="button" className="d-flex align-items-center gap-16 py-16 px-24 w-100 text-start border-0 bg-transparent text-danger-600 hover-bg-danger-50">
                      <i className="ph ph-sign-out text-xl"></i>
                      <span className="fw-semibold">Log Out</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              {/* Dashboard */}
              {activeTab === 'dashboard' && (
                <div>
                  <div className="row g-20 mb-40">
                    {[
                      { label: 'Total Orders', value: '14', icon: 'ph-package', color: 'bg-main-50 text-main-600' },
                      { label: 'Total Wishlist', value: '9', icon: 'ph-heart', color: 'bg-warning-50 text-warning-600' },
                      { label: 'Total Reviews', value: '24', icon: 'ph-star', color: 'bg-success-50 text-success-600' },
                    ].map((stat, i) => (
                      <div key={i} className="col-sm-4">
                        <div className="border border-gray-100 rounded-16 p-24 text-center">
                          <div className={`w-64 h-64 rounded-circle flex-center mx-auto mb-16 ${stat.color}`} style={{ width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                            <i className={`ph ${stat.icon} text-2xl`}></i>
                          </div>
                          <h4 className="mb-4">{stat.value}</h4>
                          <span className="text-gray-500 text-sm">{stat.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border border-gray-100 rounded-16 p-32 responsive-card-padding">
                    <h6 className="mb-24">Recent Orders</h6>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="bg-gray-50">
                          <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Status</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.slice(0, 3).map((o, i) => (
                            <tr key={i}>
                              <td className="fw-semibold text-main-600">{o.id}</td>
                              <td className="text-gray-600">{o.date}</td>
                              <td className="text-gray-600">{o.items}</td>
                              <td>
                                <span className={`badge px-12 py-6 rounded-pill text-xs fw-semibold ${o.status === 'Delivered' ? 'bg-success-50 text-success-600' : o.status === 'Processing' ? 'bg-warning-50 text-warning-600' : 'bg-danger-50 text-danger-600'}`}>
                                  {o.status}
                                </span>
                              </td>
                              <td className="fw-semibold">{o.total}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Orders */}
              {activeTab === 'orders' && (
                <div className="border border-gray-100 rounded-16 p-32 responsive-card-padding">
                  <h6 className="mb-24">My Orders</h6>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="bg-gray-50">
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Items</th>
                          <th>Status</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((o, i) => (
                          <tr key={i}>
                            <td className="fw-semibold text-main-600">{o.id}</td>
                            <td className="text-gray-600">{o.date}</td>
                            <td className="text-gray-600">{o.items}</td>
                            <td>
                              <span className={`badge px-12 py-6 rounded-pill text-xs fw-semibold ${o.status === 'Delivered' ? 'bg-success-50 text-success-600' : o.status === 'Processing' ? 'bg-warning-50 text-warning-600' : 'bg-danger-50 text-danger-600'}`}>
                                {o.status}
                              </span>
                            </td>
                            <td className="fw-semibold">{o.total}</td>
                            <td>
                              <button type="button" className="btn btn-outline-main py-8 px-16 rounded-pill text-sm">View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Profile Settings */}
              {activeTab === 'profile' && (
                <div className="border border-gray-100 rounded-16 p-32 responsive-card-padding">
                  <h6 className="mb-24">Profile Settings</h6>
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="row g-20">
                      <div className="col-12 text-center mb-8">
                        <div className="d-inline-block position-relative">
                          <img src={`${A}/images/thumbs/user-img1.png`} alt="" className="w-100 rounded-circle" style={{ maxWidth: 100, height: 100, objectFit: 'cover' }} />
                          <label className="position-absolute bottom-0 end-0 w-32 h-32 flex-center bg-main-600 text-white rounded-circle cursor-pointer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%' }}>
                            <i className="ph ph-camera-plus text-sm"></i>
                            <input type="file" className="d-none" />
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <label className="fw-semibold text-sm mb-8">First Name</label>
                        <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" defaultValue="Theresa" />
                      </div>
                      <div className="col-sm-6">
                        <label className="fw-semibold text-sm mb-8">Last Name</label>
                        <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" defaultValue="Webb" />
                      </div>
                      <div className="col-sm-6">
                        <label className="fw-semibold text-sm mb-8">Email Address</label>
                        <input type="email" className="form-control py-16 px-20 border border-gray-200 rounded-8" defaultValue="theresawebb@email.com" />
                      </div>
                      <div className="col-sm-6">
                        <label className="fw-semibold text-sm mb-8">Phone Number</label>
                        <input type="tel" className="form-control py-16 px-20 border border-gray-200 rounded-8" defaultValue="+1 234 567 890" />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-main py-18 px-40 rounded-pill">Save Changes</button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Default tabs */}
              {!['dashboard', 'orders', 'profile'].includes(activeTab) && (
                <div className="border border-gray-100 rounded-16 p-32 responsive-card-padding text-center">
                  <i className="ph ph-info text-5xl text-main-600 mb-16 d-block"></i>
                  <h6 className="mb-8">{sidebarNav.find(n => n.key === activeTab)?.label}</h6>
                  <p className="text-gray-500">This section content is coming soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Account
