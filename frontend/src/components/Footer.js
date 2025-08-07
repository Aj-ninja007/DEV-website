// src/components/Footer.js
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>ONLINE SHOPPING</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CUSTOMER POLICIES</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Return Policy</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>KEEP IN TOUCH</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 HAWK&RONIN. All rights reserved.</p>
      </div>
    </footer>
  );
}
