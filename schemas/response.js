const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  timeStamp : Number,
  path : String,
  method: String,
  statusCode: Number,
  statusMessage: String,
  headers: Object,
  body: Object
})


module.exports = mongoose.model("responseSchema", responseSchema)


