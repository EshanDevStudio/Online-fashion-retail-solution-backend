const express = require('express');
const router = express.Router();
const Supplier = require('../models/supplierModel');

// Retrieve all suppliers
router.get('/', async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;