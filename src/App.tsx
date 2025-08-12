import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ProductDetail from './pages/ProductDetail';
import Support from './pages/Support';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AdminPanel from './pages/AdminPanel';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import LanguagePopup from './components/LanguagePopup';
import SearchPopup from './components/SearchPopup';

function App() {
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);

  useEffect(() => {
    // Show language popup on first visit
    const hasVisited = localStorage.getItem('karma-visited');
    if (!hasVisited) {
      setShowLanguagePopup(true);
      localStorage.setItem('karma-visited', 'true');
    }
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <CartProvider>
            <Router>
              <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
                <Header onSearchClick={() => setShowSearchPopup(true)} />
                
                <main className="pt-20 pb-16">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/admin" element={<AdminPanel />} />
                  </Routes>
                </main>

                <Footer />

                {showLanguagePopup && (
                  <LanguagePopup onClose={() => setShowLanguagePopup(false)} />
                )}

                {showSearchPopup && (
                  <SearchPopup onClose={() => setShowSearchPopup(false)} />
                )}
              </div>
            </Router>
          </CartProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;