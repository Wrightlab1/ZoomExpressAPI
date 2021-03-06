var express = require('express')
const api_helper = require('../API_Helper')
var router = express.Router()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

//define the Meetings route

//Get a Meeting
router.get('/:meetingid', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/users/${req.params.meetingid}/meetings/${queryString}`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/users/${req.params.meetingid}/meetings`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
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
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}${queryString}`, 'PATCH')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}`, 'PATCH')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})


//Delete a Meeting
router.delete('/:meetingid', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}${queryString}`, 'DELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}`, 'DELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})


//Add a meeting Registrant
router.post('/:meetingid/registrants', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}/registrants${queryString}`, 'POST')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}/registrants`, 'POST')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})


//Delete a Meeting Registrant
router.delete('/:meetingid/registrants/:registrantid', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}/registrants${queryString}`, 'DELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}/registrants`, 'DELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})

//List Meeting Registrants
router.get('/:meetingid/registrants', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}/registrants${queryString}`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}/registrants`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})

//Get a Meeting Registrant
router.get('/:meetingid/registrants/:registrantid', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}/registrants.${registrantid}${queryString}`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/meetings/${req.params.meetingid}/registrants.${registrantid}`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})

module.exports = router;