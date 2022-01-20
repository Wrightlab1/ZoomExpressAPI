const mongoose = require('mongoose')

const requestsSchema = new mongoose.Schema({
  timeStamp: String,
  API_response: Object
})

module.exports = mongoose.model("requests", requestsSchema)