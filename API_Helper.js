const { response } = require('express')
const mongoose = require('mongoose')
const https = require('https')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const request = require('./schemas/requests')




module.exports = {
  make_API_call : function(path,method,data) {
    
    console.log(`API Call sent to https://api.zoom.us/v2${path}`)
    //Create JWT
    const payload = {
      iss: process.env.API_KEY,
      exp: ((new Date()).getTime() + 5000)
  };
    const token = jwt.sign(payload, process.env.API_SECRET);

//SEND REQUEST
  
const options = {
  host: 'api.zoom.us',
  path: `/v2${path}`,
  method: `${method}`,
  headers: {
    'Content-Type': 'application/json',
     'authorization' : `Bearer ${token}`
  }

}
return new Promise(function (resolve, reject) {
  const req = https.request(options, res => {
    // reject on bad status
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return reject(new Error('statusCode=' + res.statusCode));
  }
  // cumulate data
  var body = [];
  res.on('data', function(chunk) {
      body.push(chunk);
  });
  
  // resolve on end
  res.on('end', function() {
      try {
          body = JSON.parse(Buffer.concat(body).toString());
          //write response to db
          const resBody = new request({
            'timeStamp' : Date.now(),
            'API_response' : body
          })
          resBody.save().then(() => console.log('response added to db'));
      } catch(e) {
          reject(e);
      }
      resolve(body);
  });
});
// reject on request error
req.on('error', function(err) {
  // This is not a "Second reject", just a different sort of failure
  reject(err);
});

if (data) {
  const postData = JSON.stringify(data);
  req.write(postData);
}


// IMPORTANT


req.end();

})}}
