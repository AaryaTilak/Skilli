import { Outlet } from 'react-router-dom'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'
import MobileMenu from './MobileMenu'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import SearchBox from './SearchBox'
import { useState, useEffect } from 'react'

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('scroll-hide-sm')
    } else {
      document.body.classList.remove('scroll-hide-sm')
    }
    return () => {
      document.body.classList.remove('scroll-hide-sm')
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Overlays */}
      <div className={`overlay${mobileMenuOpen ? ' show' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`side-overlay${mobileMenuOpen ? ' show' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>

      {/* Search Box Overlay */}
      <SearchBox open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Menu */}
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Header */}
      <HeaderTop />
      <HeaderMiddle onSearchOpen={() => setSearchOpen(true)} onToggleMobile={() => setMobileMenuOpen(true)} />
      <HeaderBottom onToggleMobile={() => setMobileMenuOpen(true)} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout
