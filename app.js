require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const users = require('./api/users.js')
const meetings = require('./api/meetings')
const webinars = require('./api/webinars')
const token = require('./api/token.js')
const signature = require('./api/signature.js')


const app= express()
const port = 3000 || process.env.PORT


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
