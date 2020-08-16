const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }, 
  administrator: {
    type: Boolean,
    required: true,
    default: false
  }, 
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Customer', schema);