const express = require('express')
const router = express.Router()
const controler = require('../controlers/userControler')

router.post('/register', controler.register)

module.exports = router