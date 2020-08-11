const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  image:{
    type: String,
    required: true,
    trim: true,
    active:true,
  },
  plant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant',
    required: false,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
});

module.exports = mongoose.model('PlantImage', schema);