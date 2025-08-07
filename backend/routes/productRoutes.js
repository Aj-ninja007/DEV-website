const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const verifyToken = require('../middleware/verifyToken');

// ✅ GET all products (public)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// 🔐 POST Add product (admin only)
router.post('/add', verifyToken, async (req, res) => {
  try {
    const { name, price, category, image, description } = req.body;

    // Debug log
    console.log("POST Body:", req.body);

    // Check required fields
    if (!name || !price || !category || !image || !description) {
      return res.status(400).json({ error: 'All fields are required: name, price, category, image, description' });
    }

    const newProduct = new Product({
      name: name.trim(),
      price,
      category: category.trim(),
      image: image.trim(),
      description: description.trim(),
    });

    await newProduct.save();
    res.status(201).json({ message: '✅ Product added successfully', product: newProduct });
  } catch (err) {
    console.error("Add Product Error:", err);
    res.status(500).json({ error: '❌ Failed to add product' });
  }
});

// ✅ Delete product (Admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;
