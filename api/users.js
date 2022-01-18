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
    api_helper.make_API_call('/users', 'GET')
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
  })
//Get  a User http://localhost:3000/api/users/?id={userID}}
  router.get('/:id', function (req, res) {
    const id = req.params.id
    console.log(id)
    api_helper.make_API_call(`/users/${id}`, 'GET')
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
router.delete('/:id', function (req, res) {
  const data = req.body
  const id = req.params.id
  api_helper.make_API_call(`/users/${id}?action=delete`, 'DELETE', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

module.exports = router;