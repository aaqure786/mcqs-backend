const express = require('express');
const router = express.Router();
const Contributor = require('../model/Contributor')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "abrarMCQCApp";




// Create a contributor using POST: /api/contributor/addcontributor  . Does not require login
router.post('/addcontributor', [
    body('name',"Enter Valid Name").isLength({min:3}),
    body('email',"Enter Valid Email").isEmail(),
    body('password',"Password should be at least 8 character").isLength({min:8}),
    body('usertag',"User tag should be greater than 3 digits").isLength({min:4})
], async (req, res)=> {
    //Checking weather the vlaues are right
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let contrib =  await Contributor.findOne({email: req.body.email})
    if(contrib)
    {
      return res.status(400).json({error: "user with this email is already exist"})
    }
     // securing password from attacker
     const salt = await bcrypt.genSalt(10);
     const securePassword = await bcrypt.hash(req.body.password,salt);

    let contributor = await Contributor.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
        usertag: req.body.usertag,
      });
      //Authenticating user using JWT 
      const data = {
        contributor:{
          id: contributor.id
        }
      }
      const authToken = jwt.sign(data,JWT_SECRET);
      
      // res.json(user);
      res.json({authToken});

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
    
      //.then(user => res.json(user));
    },
);


 module.exports = router