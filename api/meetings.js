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

//defind the Meetings route

//Get a Meeting
router.get('/:meetingid', function (req, res) {
  api_helper.make_API_call(`/users/${req.id}/meetings`, 'GET', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})
//Create a Meeting
router.post('/:userid', function (req, res) {
  const data = req.body
  api_helper.make_API_call(`/users/${req.userid}/meetings`, 'POST', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Update a Meeting
router.patch('/:meetingid', function (req, res) {
  const data = req.body
  api_helper.make_API_call(`/users/${req.meetingid}`, 'PATCH', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Delete a Meeting
router.delete('/:meetingid', function (req, res) {
  api_helper.make_API_call(`/users/${req.meetingid}`, 'DELETE', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Add a meeting Registrant
router.post('/:meetingid/registrants', function (req, res) {
  api_helper.make_API_call(`meetings/${req.meetingid}`, 'POST', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Delete a Meeting Registrant
router.delete('/:meetingid/registrants', function (req, res) {
  api_helper.make_API_call(`meetings/${req.meetingid}`, 'DELETE', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//List Meeting Registrants
router.get('/:meetingid/registrants', function (req, res) {
  api_helper.make_API_call(`meetings/${req.meetingid}/registrants`, 'GET', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Get a Meeting Registrant
router.get('/:meetingid/registrants/:registrantid', function (req, res) {
  api_helper.make_API_call(`meetings/${req.meetingid}/${req.registrantid}`, 'GET', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

module.exports = router;