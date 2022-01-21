const { response } = require('express')
const mongoose = require('mongoose')
const https = require('https')
const jwt = require('jsonwebtoken')
const responseSchema = require('./schemas/response.js')
require('dotenv').config()




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
  
//Configure request options
const options = {
  host: 'api.zoom.us',
  path: `/v2${path}`,
  method: `${method}`,
  headers: {
    'Content-Type': 'application/json',
     'authorization' : `Bearer ${token}`
  }

}
//send Request
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

          //Create Model instance
          const response = new responseSchema({
            timeStamp : Date.now(),
            path : req.path,
            method : req.method,
            statusCode : res.statusCode,
            statusMessage : res.statusMessage,
            headers : JSON.stringify(res.headers),
            body : JSON.stringify(body)
          })
          //Save the Model Instance
          response.save(function (err) {
            if (err) return handleError(err);
          });
          //Log to terminal
          console.log(`
            Path: ${req.path}, 
            Method: ${req.method}, 
            Status Code: ${res.statusCode}, 
            Status Message: ${res.statusMessage},
            Headers: ${JSON.stringify(res.headers)},
            Body: ${JSON.stringify(body)}
            `)

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

//If Body is defined add body to request
if (data) {
  const postData = JSON.stringify(data);
  req.write(postData);
}


// IMPORTANT


req.end();

})}}
