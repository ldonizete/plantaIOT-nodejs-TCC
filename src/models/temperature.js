const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  temperature: {
    type: String,
    required:true
  },
  date: {
    type: Date, 
    required: true,
    default: Date.now
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = mongoose.model('Temperature', schema);