
const mongoose = require('mongoose')


const requestSchema = new mongoose.Schema({
  timeStamp : String,
  path : String,
  method : String,
  statusCode : Number,
  statusMessage : String,
  body : Object
})

module.exports = mongoose.model("requestSchema", requestSchema)

