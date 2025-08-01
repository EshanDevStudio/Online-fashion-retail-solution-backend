const Product = require("../models/productModel")

const getAllProducts = (req, res) => {

    Product.find()
    .then(response => res.json({response}))
    .catch(error => res.json({error}))
}

exports.getAllProducts = getAllProducts