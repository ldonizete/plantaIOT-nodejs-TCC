const mongoose = require('mongoose');
const Exhaust = mongoose.model('Exhaust');

exports.get = async() => {
  const res = await Exhaust
  .find({active:true}, 'turnOn')
  .sort({ _id: -1 })
  .limit(1);
  return res;
}

exports.create = async(data) => {
  var exhaust = new Exhaust(data);
  await exhaust.save();
}

exports.delete = async(id) => {
  await Exhaust.findOneAndRemove(id);
}