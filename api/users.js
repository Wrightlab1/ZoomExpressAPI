var express = require('express')
const api_helper = require('../API_Helper')
var router = express.Router()
const bodyParser = require('body-parser');

//middleware
router.use(function timelog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.use(bodyParser.json({ extended: true }));

//defind the users route

//List Users
  router.get('/', function (req, res) {
    console.log('list users')
    api_helper.make_API_call('/users', 'GET')
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
  })
//Get  a User
  router.get('/:id', function (req, res) {
    console.log('list users')
    api_helper.make_API_call(`/users/${req.query.id}`, 'GET')
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
  })
//Create a User
  router.post('/', function (req, res) {
    console.log(`Body: ${req.body}`)
    const data = req.body
    api_helper.make_API_call('/users', 'POST', data)
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
  
//Delete a User
router.delete('/:id', function (req, res) {
  const data = req.body
  api_helper.make_API_call(`/users/${req.query.id}`, 'DELETE', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

module.exports = router;