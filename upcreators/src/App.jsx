import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';

// Pages
import HomeAgency from './pages/HomeAgency';
import HomeShop from './pages/HomeShop';
import HomeStreamers from './pages/HomeStreamers';
import About from './pages/About';
import BlogList from './pages/BlogList';
import BlogGrid from './pages/BlogGrid';
import BlogSidebar from './pages/BlogSidebar';
import PostFull from './pages/PostFull';
import PostSidebar from './pages/PostSidebar';
import CaseDetails from './pages/CaseDetails';
import OurWorks from './pages/OurWorks';
import ProductPage1 from './pages/ProductPage1';
import ProductPage2 from './pages/ProductPage2';
import ProductPage3 from './pages/ProductPage3';
import SearchResult from './pages/SearchResult';
import Shop from './pages/Shop';
import ShopCollection from './pages/ShopCollection';
import ShopList from './pages/ShopList';
import ShopLookbook from './pages/ShopLookbook';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Events from './pages/Events';
import FAQ from './pages/FAQ';
import ErrorPage from './pages/ErrorPage';

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Home variants */}
            <Route path="/" element={<HomeAgency />} />
            <Route path="/home-shop" element={<HomeShop />} />
            <Route path="/home-streamers" element={<HomeStreamers />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Blog */}
            <Route path="/blog-list" element={<BlogList />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/blog-sidebar" element={<BlogSidebar />} />
            <Route path="/post-full" element={<PostFull />} />
            <Route path="/post-sidebar" element={<PostSidebar />} />

            {/* Portfolio */}
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/case-details" element={<CaseDetails />} />

            {/* Shop */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop-collection" element={<ShopCollection />} />
            <Route path="/shop-list" element={<ShopList />} />
            <Route path="/shop-lookbook" element={<ShopLookbook />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-1" element={<ProductPage1 />} />
            <Route path="/product-2" element={<ProductPage2 />} />
            <Route path="/product-3" element={<ProductPage3 />} />

            {/* Pages */}
            <Route path="/search" element={<SearchResult />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/faq" element={<FAQ />} />

            {/* 404 */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
