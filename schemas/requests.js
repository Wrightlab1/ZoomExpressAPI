const mongoose = require('mongoose')


const requestSchema = new mongoose.Schema({
  timeStamp : String,
  API_request : Object
})

module.exports = mongoose.model("dbrequest", requestSchema)