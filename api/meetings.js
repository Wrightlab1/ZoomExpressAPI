var express = require('express')
const api_helper = require('../API_Helper')
var router = express.Router()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
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

//defind the Meetings route

//Get a Meeting
router.get('/:meetingid', function (req, res) {
  api_helper.make_API_call(`/users/${req.params.meetingid}/meetings`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})
//Create a Meeting
router.post('/:userid', function (req, res) {
  const data = req.body
  api_helper.make_API_call(`/users/${req.params.userid}/meetings`, 'POST', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Update a Meeting
router.patch('/:meetingid', function (req, res) {
  const data = req.body
  api_helper.make_API_call(`/users/${req.params.meetingid}`, 'PATCH', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Delete a Meeting
router.delete('/:meetingid', function (req, res) {
  api_helper.make_API_call(`/users/${req.params.meetingid}`, 'DELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Add a meeting Registrant
router.post('/:meetingid/registrants', function (req, res) {
  api_helper.make_API_call(`meetings/${req.params.meetingid}/registrants`, 'POST', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Delete a Meeting Registrant
router.delete('/:meetingid/registrants/:registrantid', function (req, res) {
  api_helper.make_API_call(`meetings/${req.params.meetingid}/registrants/${req.params.registrantid}`, 'DELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//List Meeting Registrants
router.get('/:meetingid/registrants', function (req, res) {
  api_helper.make_API_call(`meetings/${req.params.meetingid}/registrants`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Get a Meeting Registrant
router.get('/:meetingid/registrants/:registrantid', function (req, res) {
  api_helper.make_API_call(`meetings/${req.params.meetingid}/registrants/${req.params.registrantid}`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

module.exports = router;