import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="page-banner" style={{ minHeight: 180, background: '#ddeef7' }}>
        <div className="container page-banner__inner">
          <h1 className="page-banner__title">Contact Us</h1>
          <nav aria-label="breadcrumb">
            <span className="breadcrumb-link">HOME</span>
            <span className="breadcrumb-sep"> / </span>
            <span className="breadcrumb-current">CONTACT</span>
          </nav>
        </div>
      </section>

      <div className="container contact-inner">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-title" style={{ fontFamily: 'var(--font-script)', fontSize: '2.2rem' }}>
              Get in touch with us
            </h2>
            <p className="contact-text">
              We're here to help! Fill out the form or reach us directly using the contact info below.
            </p>
            <div className="contact-detail">
              <strong>Address:</strong>
              <span>123 Kids Lane, Toytown, CA 90210</span>
            </div>
            <div className="contact-detail">
              <strong>Email:</strong>
              <span>hello@skillikidstore.com</span>
            </div>
            <div className="contact-detail">
              <strong>Phone:</strong>
              <span>+1 (800) 555-KIDS</span>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}
            id="contact-form"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" placeholder="Your email" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input type="text" id="contact-subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" rows="5" placeholder="Your message…" required />
            </div>
            <button type="submit" className="btn-outline-dark" id="contact-submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
