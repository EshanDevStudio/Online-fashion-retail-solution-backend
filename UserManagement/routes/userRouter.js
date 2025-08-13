const express = require('express')
const router = express.Router()
const controler = require('../controlers/userControler')

router.post('/register', controler.register)
router.post('/login', controler.login)


module.exports = router