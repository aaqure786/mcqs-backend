const express = require('express');
const router = express.Router();
const Contributor = require('../model/Contributor')
const { body, validationResult } = require('express-validator');

// Create a contributor using POST: /api/contributor/addcontributor  . Does not require login
router.post('/addcontributor', [
    body('name',"Enter Valid Name").isLength({min:3}),
    body('email',"Enter Valid Email").isEmail(),
    body('password',"Password should be at least 8 character").isLength({min:8}),
    body('usertag',"User tag should be greater than 3 digits").isLength({min:4})
], (req, res)=> {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    Contributor.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        usertag: req.body.usertag,
      }).then(user => res.json(user));
    },
);


 module.exports = router