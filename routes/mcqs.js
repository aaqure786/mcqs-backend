const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Mcqs = require('../model/Mcqs')



// Create a contributor using POST: /api/contributor/addmcqs  . Login required
router.get('/addmcqs', (req, res)=> {
    const mcqs = Mcqs(req.body)
    mcqs.save();
    res.json(mcqs)
})

 module.exports = router