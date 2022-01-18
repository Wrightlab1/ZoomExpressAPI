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

  router.get('/', function (req, res) {
    console.log('list users')
    api_helper.make_API_call('/users', 'GET')
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
  })

  router.post('/', function (req, res) {
    console.log(`Body: ${req.body}`)
    const data = req.body
    //console.log(data)
    api_helper.make_API_call('/users', 'POST', data)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err));
  })

  router.patch('/', function (req, res) {
    res.send('Update a User');
  })
  
module.exports = router;