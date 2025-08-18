const express = require('express');
const router = express.Router();
const Stock = require('../models/stockModel');

// Retrieve all stock items
router.get('/', async (req, res) => {
    try {
        const stock = await Stock.find();
        res.status(200).json(stock);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});