import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="account" element={<Account />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog-details" element={<BlogDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
