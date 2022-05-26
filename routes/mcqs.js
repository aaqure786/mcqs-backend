const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/', (req, res)=> {
    obj = {
        a : "Hello world I am in mcqs"
    }
    res.json(obj)
})

 module.exports = router