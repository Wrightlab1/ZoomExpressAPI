require('dotenv').config()
var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')

//middleware
router.use(function timelog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


//defind the users route

  router.get('/', function (req, res) {
    //Create JWT
    const payload = {
      iss: process.env.KEY,
      exp: ((new Date()).getTime() + 5000)
  };
    const token = jwt.sign(payload, process.env.SECRET);
    res.json({token : token})
  })

  
module.exports = router;