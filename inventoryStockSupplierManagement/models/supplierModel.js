const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    supplierName: String,
    contactInfo: String,
    address: String,
});

module.exports = mongoose.model('Supplier', supplierSchema);