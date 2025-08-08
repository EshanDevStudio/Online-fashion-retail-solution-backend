const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    clothId: String,
    productName: String,
    quantity: Number,
    lastUpdated: Date
});

module.exports = mongoose.model('Stock', stockSchema);