const express = require('express');
const router = express.Router();


router.get('/',(req,res,next) => {

    res.send('users routing >>>>>> with GET method')
})

router.post('/',(req,res,next) => {
    console.log("body",req.body)
    res.send('users routing >>>>>> POST method' + req.body)
})

module.exports = router;