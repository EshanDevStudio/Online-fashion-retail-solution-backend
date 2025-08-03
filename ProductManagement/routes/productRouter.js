const express = require('express')
const router = express.Router()
const controler = require('../controllers/controler')


router.post('/verifylogin', controler.verifyToken)


/////////////////////////////////////////////



router.post('/addnewproduct', controler.addNewProduct)
router.post('/updateproduct', controler.updateProduct)


/////////////////////////////////////////////////////




module.exports = router