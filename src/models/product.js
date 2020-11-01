const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  serie: {
    type: String,
    required: true
  }, 
  name: {
    type: String,
  }, 
  description: {
    type: String
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }, 
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: false
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  soils:[],
  temperatures:[],
  humiditys:[],
  plant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant',
    required: false,
  },
})

module.exports = mongoose.model('Product', schema);