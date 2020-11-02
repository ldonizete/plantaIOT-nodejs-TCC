const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  scientificName: {
    type: String
  },
  family: {
    type: String
  },
  humidityMin: {
    type: Number,
    required: true
  },
  humidityMax: {
    type: Number,
    required: true
  },
  tempMin: {
    type: Number,
    required: true
  },
  tempMax: {
    type: Number,
    required: true
  },
  moistureSoilMin: {
    type: Number,
    required: true
  },
  moistureSoilMax: {
    type: Number,
    required: true
  },
  startLight: {
    type: Number,
    required: true
  },
  endLight: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }, 
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
});

module.exports = mongoose.model('Plant', schema);