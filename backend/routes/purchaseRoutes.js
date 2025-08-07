const express = require('express');
const router = express.Router();
const Purchase = require('../models/Purchase');
const verifyToken = require('../middleware/verifyToken');

// ✅ Public: Submit a purchase
router.post('/', async (req, res) => {
  const { name, email, phone, message, cartItems } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !Array.isArray(cartItems) ||
    cartItems.length === 0
  ) {
    return res.status(400).json({ error: 'Missing required fields or empty cart' });
  }

  try {
    const purchase = new Purchase({ name, email, phone, message, cartItems });
    await purchase.save();
    res.status(201).json({ message: 'Purchase received successfully' });
  } catch (err) {
    console.error('Error saving purchase:', err);
    res.status(500).json({ error: 'Failed to save purchase' });
  }
});

// 🔐 Admin-only: View all purchases
router.get('/', verifyToken, async (req, res) => {
  try {
    const purchases = await Purchase.find().sort({ _id: -1 }); // latest first
    res.status(200).json(purchases);
  } catch (err) {
    console.error('Error fetching purchases:', err);
    res.status(500).json({ error: 'Failed to fetch purchases' });
  }
});

// 🔐 Admin-only: Delete purchase by ID
router.delete('/:id', verifyToken, async (req, res) => {
  const purchaseId = req.params.id;
  try {
    const deleted = await Purchase.findByIdAndDelete(purchaseId);
    if (!deleted) {
      return res.status(404).json({ error: 'Purchase not found' });
    }
    res.status(200).json({ message: 'Purchase deleted successfully' });
  } catch (err) {
    console.error('Error deleting purchase:', err);
    res.status(500).json({ error: 'Failed to delete purchase' });
  }
});

module.exports = router;
