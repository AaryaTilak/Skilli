import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const local = localStorage.getItem('skilli_cart');
    return local ? JSON.parse(local) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const local = localStorage.getItem('skilli_wishlist');
    return local ? JSON.parse(local) : [];
  });

  const [compare, setCompare] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // UI States
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('skilli_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('skilli_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Actions
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
        return next;
      }
      return [...prev, { ...product, quantity: qty }];
    });
    showToast(`"${product.title}" added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateCartQty = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const idx = prev.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        showToast(`"${product.title}" removed from wishlist.`);
        return prev.filter((item) => item.id !== product.id);
      }
      showToast(`"${product.title}" added to wishlist!`);
      return [...prev, product];
    });
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewOpen(false);
    setSelectedProduct(null);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        compare,
        searchQuery,
        setSearchQuery,
        cartOpen,
        setCartOpen,
        searchOpen,
        setSearchOpen,
        menuOpen,
        setMenuOpen,
        quickViewOpen,
        setQuickViewOpen,
        selectedProduct,
        setSelectedProduct,
        toastMessage,
        showToast,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        toggleWishlist,
        openQuickView,
        closeQuickView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
