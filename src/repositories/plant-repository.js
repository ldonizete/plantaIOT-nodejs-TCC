const mongoose = require('mongoose');
const Plant = mongoose.model('Plant')

exports.get = async() => {
  const res = await Plant
    .find({active:true})
    .populate('product')
  return res;
}

exports.create = async(data) => {
  var plant = new Plant(data);
  await plant.save();
}

exports.delete = async(id) => {
  await Plant
    .findOneAndRemove(id);
}