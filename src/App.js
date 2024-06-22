import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavoritesProvider from './contexts/FavoritesContext/FavoritesContext';
import CartProvider from './contexts/CartContext/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import CartPage from './pages/CartPage/CartPage';
import ProductInfoPage from './pages/ProductInfoPage/ProductInfoPage';

const App = () => {
  return (
      <Router>
        <FavoritesProvider>
          <CartProvider>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductInfoPage />} />
              </Routes>
            </main>
            <Footer />
          </CartProvider>
        </FavoritesProvider>
      </Router>
  );
};

export default App;
