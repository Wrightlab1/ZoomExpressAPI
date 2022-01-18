var express = require('express')
const api_helper = require('../API_Helper')
var router = express.Router()
const bodyParser = require('body-parser');

//middleware
router.use(function timelog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.use(bodyParser.json({ extended: true }));

//define the users route

//LIST USERS
router.get('/', function (req, res) {
  console.log('list users')
  api_helper.make_API_call('/users', 'GET')
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
})

//GET A USER
router.get('/:id', function (req, res) {
  api_helper.make_API_call(`/users/${req.query.id}`, 'GET')
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
})

//Update a User
router.patch('/:id', function (req, res) {
  const data = req.body
  api_helper.make_API_call(`/users/${req.query.id}`, 'PATCH', data)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
})

//CREATE A USER
router.post('/', function (req, res) {
  console.log(`Body: ${req.body}`)
  const data = req.body
  api_helper.make_API_call('/users', 'POST', data)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
})

//Delete a user
router.delete('/:id', function (req, res) {
  const data = req.body
  api_helper.make_API_call(`/users/${req.query.id}`, 'DELETE', data)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
})

//GET A USERS TOKEN
router.get('/:id/token', function (req, res) {
  api_helper.make_API_call(`/users/${req.query.id}`, 'GET')
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
})
module.exports = router;