const Product = require("../models/productModel")


//fetch all products
const getAllProducts = (req, res) => {

    Product.find()
    .then(response => res.json({response}))
    .catch(error => res.json({error}))
}
//fetch product by id
//assuming id is passed in the request body
const getProductById = (req, res) => {

    const id = req.body.id

    Product.findOne({id: id})
    .then(response => res.json({response}))
    .catch(error => res.json({error}))
}

exports.getAllProducts = getAllProducts
exports.getProductById = getProductById
