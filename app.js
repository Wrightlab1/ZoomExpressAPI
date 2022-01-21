require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
var winston = require('winston'),
    expressWinston = require('express-winston');
const users = require('./api/users.js')
const meetings = require('./api/meetings')
const webinars = require('./api/webinars')
const token = require('./api/token.js')
const signature = require('./api/signature.js')


const app= express()
const port = 3000 || process.env.PORT


//Logging
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: false, // optional: control whether you want to log the meta data about the request (default to true)
  msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}));

//Routes

//include routes
app.use('/api/users', users)
app.use('/api/meetings', meetings)
app.use('/api/webinars', webinars)
app.use('/api/token', token)
app.use('/api/signature', signature)

//Connect DB
mongoose.connect(process.env.DB_STRING, {autoIndex: false})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});


app.listen(port, () => {console.log(`App is listening on port ${port}`)})
