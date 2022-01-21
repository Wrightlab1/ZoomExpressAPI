require('dotenv').config()
var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')
const requestSchema = require('../schemas/requests.js')



//define the token route

  router.get('/', function (req, res) {
    //Create JWT
    const payload = {
      iss: process.env.API_KEY,
      exp: ((new Date()).getTime() + 5000)
  };
    const token = jwt.sign(payload, process.env.API_SECRET);

    //write response to db

          //Create Model instance
          const request = new requestSchema({
            timeStamp : Date.now(),
            path : '/token',
            method : req.method,
            statusCode : res.statusCode,
            statusMessage : res.statusMessage,
            body : `{token : ${token}}`
          })
          //Save the Model Instance
          request.save(function (err) {
            if (err) return handleError(err);
          });

    res.json({token : token})
  })

  
module.exports = router;