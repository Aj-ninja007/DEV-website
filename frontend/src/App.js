import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Shared layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Public pages
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

// Admin pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard'; // <-- Use dashboard here

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/panel" element={<AdminDashboard />} /> {/* Single admin panel */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
