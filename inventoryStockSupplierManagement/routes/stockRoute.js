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

// Retrieve a specific stock item
router.get('/:id', async (req, res) => {
    try {
        const stockItem = await Stock.findById(req.params.id);
        if (!stockItem) {
            return res.status(404).json({ message: 'Stock item not found' });
        }
        res.json(stockItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//get product by  age gender inv clothtype
router.post('/getproductbyagegenderinvcltype', (req, res) => {
    const { ageCategory, clothType, gender} = req.body

    Inventory.find({$and: [{gender: gender}, {age:ageCategory}, {clothType: {$ne:clothType}}]})
    .then(response => res.json({response}))
    .catch(err => res.json({err}))
})

module.exports = router;