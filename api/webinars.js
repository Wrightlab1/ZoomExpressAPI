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

//defind the Webinars route

//Get a Webinar
router.get('/:webinarid', function (req, res) {
  api_helper.make_API_call(`/webinars/${req.webinarid}`, 'GET', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})
//Create a Webinar
router.post('/:userid', function (req, res) {
  const data = req.body
  api_helper.make_API_call(`/users/${req.userid}/webinars`, 'POST', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Update a Webinar
router.patch('/:webinarid', function (req, res) {
  const data = req.body
  api_helper.make_API_call(`/webinars/${req.webinarid}`, 'PATCH', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Delete a Webinar
router.delete('/:webinarid', function (req, res) {
  api_helper.make_API_call(`/webinars/${req.webinarid}`, 'DELETE', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Add a Webinar Registrant
router.post('/:webinarid/registrants', function (req, res) {
  api_helper.make_API_call(`webinars/${req.webinarid}/registrants`, 'POST', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Delete a Webinar Registrant
router.delete('/:webinarid/registrants', function (req, res) {
  api_helper.make_API_call(`webinars/${req.webinarid}/registrants`, 'DELETE', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//List Webinar Registrants
router.get('/:webinarid/registrants', function (req, res) {
  api_helper.make_API_call(`webinars/${req.webinarid}/registrants`, 'GET', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Get a Webinar Registrant
router.get('/:webinarid/registrants/:registrantid', function (req, res) {
  api_helper.make_API_call(`webinars/${req.webinarid}/${req.registrantid}`, 'GET', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

module.exports = router;