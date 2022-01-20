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

//defind the Webinars route

//Get a Webinar
router.get('/:webinarid', function (req, res) {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}`, 'GET', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
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
  const data = req.body
  api_helper.make_API_call(`/webinars/${req.params.webinarid}`, 'PATCH', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Delete a Webinar
router.delete('/:webinarid', function (req, res) {
  api_helper.make_API_call(`/webinars/${req.params.webinarid}`, 'DELETE', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Add a Webinar Registrant
router.post('/:webinarid/registrants', function (req, res) {
  api_helper.make_API_call(`webinars/${req.params.webinarid}/registrants`, 'POST', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Delete a Webinar Registrant
router.delete('/:webinarid/registrants', function (req, res) {
  api_helper.make_API_call(`webinars/${req.params.webinarid}/registrants`, 'DELETE', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//List Webinar Registrants
router.get('/:webinarid/registrants', function (req, res) {
  api_helper.make_API_call(`webinars/${req.params.webinarid}/registrants`, 'GET', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

//Get a Webinar Registrant
router.get('/:webinarid/registrants/:registrantid', function (req, res) {
  api_helper.make_API_call(`webinars/${req.params.webinarid}/${req.params.registrantidregistrantid}`, 'GET', data)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err));
})

module.exports = router;