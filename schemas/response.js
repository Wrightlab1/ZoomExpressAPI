const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  timeStamp: String,
  API_response: Object
})


module.exports = mongoose.model("dbresponse", responseSchema)