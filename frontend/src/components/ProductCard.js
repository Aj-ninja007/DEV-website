import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  if (!product) return null;

  const { image, name, description, price, category } = product;

  return (
    <div className="product-card">
      <img
        src={image || "https://via.placeholder.com/200"}
        alt={name || "Product"}
        className="product-img"
      />
      <h3>{name || "Unnamed Product"}</h3>
      <p className="desc">{description || "No description available."}</p>
      <p className="price">₹{price ?? "N/A"}</p>
      <span className="category">{category || "Uncategorized"}</span>
      <button className="add-cart-btn" onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}
