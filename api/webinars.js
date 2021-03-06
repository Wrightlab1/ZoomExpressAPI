var express = require('express')
const api_helper = require('../API_Helper')
var router = express.Router()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const dbrequest = require('../schemas/requests')
const dbresponse = require('../schemas/response')


//define the Webinars route

//Get a Webinar
router.get('/:webinarid', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/${queryString}`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})

//Create a Webinar
router.post('/:userid', function (req, res) {
  const data = req.body
  api_helper.make_API_call(`/users/${req.params.userid}/webinars`, 'POST', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Update a Webinar
router.patch('/:webinarid', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/${queryString}`, 'PATCH')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}`, 'PATCH')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})

//Delete a Webinar
router.delete('/:webinarid', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/${queryString}`, 'DELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}`, 'DELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})

//Add a Webinar Registrant
router.post('/:webinarid/registrants', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/registrants${queryString}`, 'POST')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/registrants`, 'POST')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})

//Delete a Webinar Registrant
router.delete('/:webinarid/registrants', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/registrants${queryString}`, 'DELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/registrants`, 'PDELETE')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})

//List Webinar Registrants
router.get('/:webinarid/registrants', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/registrants${queryString}`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/registrants`, 'GET')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})

//Get a Webinar Registrant
router.get('/:webinarid/registrants/:registrantid', function (req, res) {
  queryString = req.url.substring(req.url.indexOf("?"));
  if (queryString.lenth > 0) {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/registrants/${registrantid}${queryString}`, 'POST')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
  }
  else {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}/registrants/${registrantid}`, 'POST')
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));}
})

module.exports = router;