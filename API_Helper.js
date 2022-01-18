const { response } = require('express')
const https = require('https')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  make_API_call : function(path,method, ...data) {
    
    console.log(`API Call sent to ${path}`)
    //Create JWT
    const payload = {
      iss: process.env.KEY,
      exp: ((new Date()).getTime() + 5000)
  };
    const token = jwt.sign(payload, process.env.SECRET);

//SEND REQUEST
var postData = JSON.stringify(data[0]);
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
req.write(postData);
// IMPORTANT
req.end();})}}
