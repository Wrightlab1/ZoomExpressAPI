require('dotenv').config()
var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')



//defind the users route

  router.get('/', function (req, res) {
    //Create JWT
    const payload = {
      iss: process.env.API_KEY,
      exp: ((new Date()).getTime() + 5000)
  };
    const token = jwt.sign(payload, process.env.API_SECRET);
    res.json({token : token})
  })

  
module.exports = router;