const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  serie: {
    type: String,
    required: true
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
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Product', schema);