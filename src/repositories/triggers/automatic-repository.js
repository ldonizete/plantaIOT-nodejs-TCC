const mongoose = require('mongoose');
const Automatic = mongoose.model('Automatic');

exports.get = async() => {
  const res = await Automatic
  .find({active:true}, 'turnOn')
  .sort({ _id: -1 })
  .limit(1);
  return res;
}

exports.create = async(data) => {
  var auto = new Automatic(data);
  await auto.save();
}

exports.delete = async(id) => {
  await auto.findOneAndRemove(id);
}