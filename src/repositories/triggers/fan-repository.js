const mongoose = require('mongoose');
const Fan = mongoose.model('Fan');

exports.get = async() => {
  const res = await Fan
  .find({active:true}, 'turnOn')
  .sort({ _id: -1 })
  .limit(1);
  return res;
}

exports.create = async(data) => {
  var fan = new Fan(data);
  await fan.save();
}

exports.delete = async(id) => {
  await fan.findOneAndRemove(id);
}