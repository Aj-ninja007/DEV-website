import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">HAWK&RONIN</Link>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/products" onClick={toggleMenu}>Products</Link>
          <Link to="/admin" onClick={toggleMenu}>Admin</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/cart" onClick={toggleMenu}>Cart</Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'rotate1' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'fade' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'rotate2' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
