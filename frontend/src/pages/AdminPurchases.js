import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPurchases.css";

export default function AdminPurchases() {
  const [purchases, setPurchases] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/purchase", {
          headers: { Authorization: token },
        });
        setPurchases(res.data);
      } catch (err) {
        console.error("Error fetching purchases:", err);
        setError("Failed to fetch purchases.");
      }
    };

    fetchPurchases();
  }, []);

  return (
    <div className="admin-purchase-container">
      <h2>All Purchases</h2>
      {error && <p className="error">{error}</p>}

      {Array.isArray(purchases) && purchases.length > 0 ? (
        purchases.map((purchase, index) => (
          <div className="purchase-card" key={index}>
            <h4>{purchase.name}</h4>
            <p>Email: {purchase.email}</p>
            <p>Phone: {purchase.phone}</p>
            <p>Message: {purchase.message}</p>
            <strong>Items:</strong>
            <ul>
              {Array.isArray(purchase.cartItems) &&
                purchase.cartItems.map((item, i) => (
                  <li key={i}>
                    {item.name} — ₹{item.price}
                  </li>
                ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No purchase found.</p>
      )}
    </div>
  );
}
