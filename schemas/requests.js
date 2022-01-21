const { stringify } = require('flatted')
const mongoose = require('mongoose')


const requestSchema = new mongoose.Schema({
  timeStamp : String,
  url : String,
  params : Object,
  headers : Object,
  API_request : Object
})

module.exports = mongoose.model("dbrequest", requestSchema)