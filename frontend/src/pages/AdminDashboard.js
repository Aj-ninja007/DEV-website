import React, { useState } from "react";
import AdminPanel from "./AdminPanel";       // Add product form
import AdminPurchases from "./AdminPurchases"; // Purchase list
import AdminProducts from "./AdminProducts"; // Product list

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("addProduct");

  return (
    <div style={{ maxWidth: 900, margin: "20px auto", padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <div style={{ marginBottom: 20, display: "flex", gap: 15, flexWrap: "wrap" }}>
        <button onClick={() => setActiveTab("addProduct")}>Add Product</button>
        <button onClick={() => setActiveTab("purchaseList")}>Purchase List</button>
        <button onClick={() => setActiveTab("productList")}>Product List</button>
      </div>
      <div style={{ border: "1px solid #ccc", padding: 15, borderRadius: 6 }}>
        {activeTab === "addProduct" && <AdminPanel />}
        {activeTab === "purchaseList" && <AdminPurchases />}
        {activeTab === "productList" && <AdminProducts />}
      </div>
    </div>
  );
}
