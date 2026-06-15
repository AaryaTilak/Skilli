import { Link } from 'react-router-dom'

const A = 'https://marketpro.theme.picode.in/assets'

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer py-120 responsive-footer-padding">
        <div className="container container-lg">
          <div className="footer-item-wrapper d-flex align-items-start flex-wrap">
            {/* Logo + Contact */}
            <div className="footer-item">
              <div className="max-w-340">
                <div className="footer-item__logo">
                  <Link to="/"><img src="/logo.png" alt="SkilliMart Logo" style={{ mixBlendMode: 'multiply' }} /></Link>
                </div>
                <p className="mb-28 text-heading">We're SkilliMart, an innovative team of food suppliers.</p>
                <div className="d-flex flex-column gap-8">
                  <p className="text-heading fw-medium">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                  <a href="mailto:support@example.com" className="text-heading fw-medium hover-text-main-600">support@example.com</a>
                  <a href="tel:+4065550120" className="text-heading fw-medium hover-text-main-600">+ (406) 555-0120</a>
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="footer-item">
              <h6 className="footer-item__title">Information</h6>
              <ul className="footer-menu">
                {['Become a Vendor','Affiliate Program','Privacy Policy','Our Suppliers','Extended Plan','Community'].map((item, i, arr) => (
                  <li key={item} className={i < arr.length - 1 ? 'mb-16' : ''}>
                    <Link to="/shop" className="text-heading hover-text-main-600">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Support */}
            <div className="footer-item">
              <h6 className="footer-item__title">Customer Support</h6>
              <ul className="footer-menu">
                {[
                  { label: 'Help Center', to: '/shop' },
                  { label: 'Contact Us', to: '/contact' },
                  { label: 'Report Abuse', to: '/shop' },
                  { label: 'Submit and Dispute', to: '/shop' },
                  { label: 'Policies & Rules', to: '/shop' },
                  { label: 'Online Shopping', to: '/shop' },
                ].map((item, i, arr) => (
                  <li key={item.label} className={i < arr.length - 1 ? 'mb-16' : ''}>
                    <Link to={item.to} className="text-heading hover-text-main-600">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* My Account */}
            <div className="footer-item">
              <h6 className="footer-item__title">My Account</h6>
              <ul className="footer-menu">
                {['My Account','Order History','Shoping Cart','Compare','Help Ticket','Wishlist'].map((item, i, arr) => (
                  <li key={item} className={i < arr.length - 1 ? 'mb-16' : ''}>
                    <Link to="/shop" className="text-heading hover-text-main-600">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Daily Groceries */}
            <div className="footer-item">
              <h6 className="footer-item__title">Daily Groceries</h6>
              <ul className="footer-menu">
                {['Dairy & Eggs','Meat & Seafood','Breakfast Food','Household Supplies','Bread & Bakery','Pantry Staples'].map((item, i, arr) => (
                  <li key={item} className={i < arr.length - 1 ? 'mb-16' : ''}>
                    <Link to="/shop" className="text-heading hover-text-main-600">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop on The Go */}
            <div className="footer-item">
              <h6>Shop on The Go</h6>
              <p className="mb-16">SkilliMart App is available. Get it now</p>
              <div className="my-32">
                <div className="flex-align gap-8">
                  <div className="bg-white rounded-10 p-1 box-shadow-5xl">
                    <img src={`${A}/images/thumbs/qr-code.png`} alt="QR Code" />
                  </div>
                  <div className="d-flex flex-column gap-16">
                    <a href="#" onClick={e => e.preventDefault()} className="py-14 px-32 d-flex justify-content-center align-items-center gap-8 fw-medium text-heading text-sm hover-bg-main-600 hover-text-white box-shadow-6xl rounded-6">
                      <i className="ph-fill ph-apple-logo"></i>
                      App Store
                    </a>
                    <a href="#" onClick={e => e.preventDefault()} className="py-14 px-32 d-flex justify-content-center align-items-center gap-8 fw-medium text-heading text-sm hover-bg-main-600 hover-text-white box-shadow-6xl rounded-6">
                      <img src={`${A}/images/icon/google-play.svg`} alt="Play Store" />
                      Google play
                    </a>
                  </div>
                </div>
                <div className="mt-24">
                  <img src={`${A}/images/thumbs/method.png`} alt="Payment Methods" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bottom-footer py-8">
        <div className="container container-lg">
          <div className="bottom-footer__inner flex-between flex-wrap gap-16 py-16 border-top border-neutral-50">
            <p className="bottom-footer__text text-heading fw-medium">
              Copyright &copy; <span className="text-success-600 fw-semibold">2025</span> Ui-drops All Rights Reserved
            </p>
            <div className="flex-align gap-8 flex-wrap">
              <ul className="flex-align gap-16">
                {[
                  { icon: 'ph-fill ph-facebook-logo', href: 'https://www.facebook.com' },
                  { icon: 'ph-fill ph-twitter-logo', href: 'https://www.twitter.com' },
                  { icon: 'ph-fill ph-instagram-logo', href: 'https://www.linkedin.com' },
                  { icon: 'ph-fill ph-linkedin-logo', href: 'https://www.pinterest.com' },
                ].map((s, i) => (
                  <li key={i}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="w-44 h-44 flex-center bg-white shadow-sm text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white">
                      <i className={s.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
