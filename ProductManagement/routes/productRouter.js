const express = require('express')
const router = express.Router()
const controler = require('../controllers/controler')




/////////////////////////////////////////////



router.post('/getallproducts', controler.getAllProducts)
router.post('/getproductbyid', controler.getProductById)
router.post('/addnewproduct', controler.addNewProduct)
router.post('/updateproduct', controler.updateProduct)


/////////////////////////////////////////////////////




module.exports = router