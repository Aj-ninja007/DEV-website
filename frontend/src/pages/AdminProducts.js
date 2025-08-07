import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminProducts.css';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('http://localhost:5000/api/products', {
        headers: { Authorization: token },
      });
      setProducts(res.data);
    } catch (err) {
      alert('Failed to fetch products');
    }
  };

  const handleDeleteProduct = async (id) => {
    const token = localStorage.getItem('token');
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`, {
          headers: { Authorization: token },
        });
        setProducts(products.filter((product) => product._id !== id));
      } catch (err) {
        alert('Failed to delete product: ' + err.response?.data?.message || 'Unknown error');
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="admin-products">
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul className="product-list">
          {products.map((product) => (
            <li key={product._id} className="product-item">
              <div>
                <strong>{product.name}</strong> – ₹{product.price}
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDeleteProduct(product._id)}
              >
                🗑️ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
