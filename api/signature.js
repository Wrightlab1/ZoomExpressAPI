require('dotenv').config()
var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')
const crypto = require('crypto')




//defind the signature route

router.get('/:meetingid/:roleid', function (req, res) {
  //Create Signature
  const role = req.params.roleid
  const timestamp = new Date().getTime() - 30000
  const msg = Buffer.from(process.env.API_KEY + req.params.meetingid + timestamp + role).toString('base64')
  const hash = crypto.createHmac('sha256', process.env.API_SECRET).update(msg).digest('base64')
  const signature = Buffer.from(`${process.env.API_KEY}.${req.params.meetingid}.${timestamp}.${role}.${hash}`).toString('base64')
  res.json({signature : signature})
})


module.exports = router;