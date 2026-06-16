import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Theme state: defaults to light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Drawer states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAsideInfoOpen, setIsAsideInfoOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Search parameters
  const [searchParams, setSearchParams] = useState({
    location: 'New Zealand',
    date: '',
    travelers: 1
  });

  // Sync theme changes with the HTML document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isAsideInfoOpen,
        setIsAsideInfoOpen,
        isSearchOpen,
        setIsSearchOpen,
        searchParams,
        setSearchParams
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
