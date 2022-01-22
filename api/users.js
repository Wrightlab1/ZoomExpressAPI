var express = require('express')
const mongoose = require('mongoose')
const querystring = require('querystring')
const api_helper = require('../API_Helper')
var router = express.Router()
const bodyParser = require('body-parser');




router.use(bodyParser.json({ extended: true }));

//define the users route

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
  api_helper.make_API_call(`/users${req.url}`, 'DELETE')
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