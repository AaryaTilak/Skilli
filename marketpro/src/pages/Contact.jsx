import { Link } from 'react-router-dom'

const A = 'https://marketpro.theme.picode.in/assets'

const Contact = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb mb-0 py-26 bg-main-two-50">
        <div className="container container-lg">
          <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
            <h6 className="mb-0">Contact Us</h6>
            <ul className="flex-align gap-8 flex-wrap">
              <li className="text-sm">
                <Link to="/" className="text-gray-900 flex-align gap-8 hover-text-main-600">
                  <i className="ph ph-house"></i> Home
                </Link>
              </li>
              <li className="flex-align"><i className="ph ph-caret-right"></i></li>
              <li className="text-sm text-main-600">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="contact py-80">
        <div className="container container-lg">
          <div className="row g-24 mb-60">
            {[
              {
                icon: 'ph-map-pin',
                color: 'bg-main-50 text-main-600',
                title: 'Office Address',
                lines: ['45 S Spring St, 5th Floor,', 'New York, NY 10038, USA']
              },
              {
                icon: 'ph-phone-call',
                color: 'bg-success-50 text-success-600',
                title: 'Phone Number',
                lines: ['(+1) 234-567-890', '(+1) 987-654-321']
              },
              {
                icon: 'ph-envelope-simple',
                color: 'bg-warning-50 text-warning-600',
                title: 'Email Address',
                lines: ['support@skillimart.com', 'info@skillimart.com']
              },
              {
                icon: 'ph-clock',
                color: 'bg-info-50 text-info-600',
                title: 'Working Hours',
                lines: ['Mon – Fri: 8am – 6pm', 'Sat – Sun: 10am – 4pm']
              },
            ].map((card, i) => (
              <div key={i} className="col-xl-3 col-sm-6">
                <div className="border border-gray-100 rounded-16 p-32 text-center hover-border-main-600 transition-2 h-100">
                  <div className={`w-72 h-72 rounded-circle flex-center mx-auto mb-20 ${card.color}`} style={{ width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                    <i className={`ph ${card.icon} text-2xl`}></i>
                  </div>
                  <h6 className="mb-12">{card.title}</h6>
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-gray-500 text-sm mb-4">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map & Form */}
          <div className="row g-24">
            {/* Map */}
            <div className="col-lg-5">
              <div className="rounded-16 overflow-hidden h-100" style={{ minHeight: 400 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.71278937932879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  title="Location Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="border border-gray-100 rounded-16 p-40 responsive-card-padding">
                <h5 className="mb-8">Send Us a Message</h5>
                <p className="text-gray-500 mb-32">Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll be in touch soon.</p>
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row g-20">
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">Your Name *</label>
                      <input type="text" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Full Name" required />
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">Email Address *</label>
                      <input type="email" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Email Address" required />
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">Phone Number</label>
                      <input type="tel" className="form-control py-16 px-20 border border-gray-200 rounded-8" placeholder="Phone Number" />
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-semibold text-sm mb-8">Subject</label>
                      <select className="form-select py-16 px-20 border border-gray-200 rounded-8">
                        <option>Select a subject</option>
                        <option>General Inquiry</option>
                        <option>Order Support</option>
                        <option>Returns & Refunds</option>
                        <option>Technical Support</option>
                        <option>Wholesale Inquiry</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="fw-semibold text-sm mb-8">Your Message *</label>
                      <textarea className="form-control py-16 px-20 border border-gray-200 rounded-8" rows="6" placeholder="Write your message here..." required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-main py-18 px-48 rounded-pill flex-align gap-8">
                        Send Message <i className="ph ph-paper-plane-tilt"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
