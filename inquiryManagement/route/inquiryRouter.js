const express = require('express')
const router = express.Router()
const Inquiry = require('../model/inquiryModel')

//add new inquiry
router.post('/add', (req, res) => {
    
    const {name, inquiry, phoneNum, state} = req.body

    const newInquiry = new Inquiry({
        name,
        inquiry,
        phoneNum,
        state
    })

    newInquiry.save()
    .then(response => res.json({response}))
    .catch(err => res.json({err}))

})

module.exports = router;