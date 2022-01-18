require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const users = require('./api/users.js')
const token = require('./api/token.js')


const app= express()
const port = 3000

//Routes

//include routes
app.use('/api/users', users)
app.use('/api/token', token)

//Connect DB
mongoose.connect(process.env.DB_STRING)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});


app.listen(port, () => {console.log(`App is listening on port ${port}`)})
