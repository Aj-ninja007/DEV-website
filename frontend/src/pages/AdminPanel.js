import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminPanel.css";

export default function AdminPanel() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post("http://localhost:5000/api/products/add", product, {
        headers: {
          Authorization: token,
        },
      });

      alert("✅ Product added successfully!");
      setProduct({ name: "", description: "", price: "", image: "", category: "" });
    } catch (err) {
      alert("❌ Failed to add product.");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-box">
        <h2>Add New Product</h2>
        {["name", "description", "price", "image", "category"].map((field) => (
          <input
            key={field}
            name={field}
            value={product[field]}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={handleChange}
          />
        ))}
        <button onClick={addProduct}>Add Product</button>
      </div>

      <div className="admin-actions">
        <button onClick={() => navigate("/admin/products")}>
          🧾 Manage Products
        </button>

        <button onClick={() => navigate("/admin/purchases")}>
          📦 View Purchases
        </button>
      </div>
    </div>
  );
}
