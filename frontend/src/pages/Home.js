// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../components/ProductCard";
// import './Home.css';

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products")
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="home">
//       <h1>All Products</h1>
//       <div className="product-grid">
//         {products.map(product => (
//           <ProductCard product={product} key={product._id} />
//         ))}
//       </div>
//     </div>
//   );
// }


import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MyStore</h1>
          <p>Trendy T-Shirts, Wallets, Shoes, Watches, and Belts</p>
          <a href="/products" className="shop-btn">Shop Now</a>
        </div>
      </section>

      <section className="features">
        <div className="feature-box">
          <h3>Free Shipping</h3>
          <p>On orders over ₹499</p>
        </div>
        <div className="feature-box">
          <h3>Easy Returns</h3>
          <p>Within 7 days of delivery</p>
        </div>
        <div className="feature-box">
          <h3>24/7 Support</h3>
          <p>We're here to help</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
