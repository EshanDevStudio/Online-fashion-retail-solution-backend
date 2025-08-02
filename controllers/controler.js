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
//add new product
//assuming product details are passed in the request body
const addNewProduct = (req, res) => {

    const {id, desc, price, cat, color, code, qty} = req.body

    const product = new Product({
        id: id,
        desc: desc,
        price: price,
        cat: cat,
        colorData: [{
            color: color,
            code: code,
            qty: qty
        }]
    })

    product.save()
    .then(response => res.json({response}))
    .catch(error => res.json({error}))
}
//update product
const updateProduct = async (req, res) => {

    const {id,color, code, qty} = req.body

    const data = {color: color, code: code, qty: qty}

    const product = await Product.findOne({ id })

    product.colorData.push({
        color: color,
        code: code,
        qty: qty
    })

    product.save()
    .then(response => res.json({response}))
    .catch(error => res.json({error}))

    
}

exports.getAllProducts = getAllProducts
exports.getProductById = getProductById
exports.addNewProduct = addNewProduct
exports.updateProduct = updateProduct
