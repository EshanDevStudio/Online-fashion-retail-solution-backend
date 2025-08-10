const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventoryModel');

// Retrieve all inventory items
router.post('/', async (req, res) => {
    try {
        const inventory = await Inventory.find().populate('supplier', 'supplierName'); // Populate supplier field with supplierName
        res.status(200).json(inventory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Retrieve  inventory item
router.get('/', async (req, res) => {
    try {
        const inventory = await Inventory.find().populate('supplier', 'supplierName');
        res.status(200).json(inventory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new inventory item
router.post('/add', async (req, res) => {

    const {desc,clothType,colorData,gender,age,price,supplier,qty,date,img,fullDesc} = req.body


        const inv = new Inventory({
            desc,
            fullDesc,
            clothType,
            colorData,
            gender,
            age,
            price,
            supplier,
            qty,
            date,
            img
        })

        inv.save()
        .then(resp => res.json({resp}))
        .catch(err => console.log(err))


});

// Update an inventory item
router.put('/:id', async (req, res) => {
    try {
        const updatedInventoryItem = await Inventory.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
        res.json({updatedInventoryItem});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an inventory item
router.delete('/:id', async (req, res) => {
    try {
        const deletedInventoryItem = await Inventory.findByIdAndDelete(req.params.id);
        if (!deletedInventoryItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.json({ message: 'Inventory item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:clothId', async (req, res) => {
    try {
        const clothId = req.params.clothId;
        const inventoryItem = await Inventory.findOne({ _id: clothId });
        res.json({inventoryItem});
    } catch (err) {
        res.json({ message: err.message });
    }
});