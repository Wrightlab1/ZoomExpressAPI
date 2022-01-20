var express = require('express')
const mongoose = require('mongoose')
flatted = require('flatted');
const api_helper = require('../API_Helper')
var router = express.Router()
const bodyParser = require('body-parser');
const dbrequest = require('../schemas/requests')
const dbresponse = require('../schemas/response')


//middleware
router.use(function timelog (req, res, next) {
  console.log('Time: ', Date.now())
  //write request to db
  const reqBody = new dbrequest({
    'timeStamp' : Date.now(),
    'API_request' : flatted.stringify(req)
  })
  reqBody.save().then(() => console.log('request added to db'));
  //write response to db
  const resBody = new dbresponse({
    'timeStamp' : Date.now(),
    'API_response' : flatted.stringify(res)
  })
  resBody.save().then(() => console.log('response added to db'));
  next()
})

router.use(bodyParser.json({ extended: true }));

//defind the users route

//List Users
  router.get('/', function (req, res) {
    api_helper.make_API_call('/users', 'GET')
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
  })
//Get  a User http://localhost:3000/api/users/{userID}
  router.get('/:userid', function (req, res) {
    api_helper.make_API_call(`/users/${req.params.userid}`, 'GET')
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
  })
//Create a User
  router.post('/', function (req, res) {
    const data = req.body
    api_helper.make_API_call('/users', 'POST', data)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
  })
//Update a User http://localhost:3000/api/users/{userID}}
  router.patch('/:id', function (req, res) {
    const data = req.body
    api_helper.make_API_call(`/users/${req.params.id}`, 'PATCH', data)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
  })
//Delete a User http://localhost:3000/api/users/{userID}}
router.delete('/:userid', function (req, res) {
  const id = req.params.userid
  api_helper.make_API_call(`/users/${id}?action=delete`, 'DELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Get a User Token
router.get('/:userid/token/:type', function (req, res) {
  api_helper.make_API_call(`/users/${req.params.userid}/token?type=${req.params.type}`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})
module.exports = router;