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
  var automatic = new Automatic(data);
  await automatic.save();
}

exports.delete = async(id) => {
  await Automatic.findOneAndRemove(id);
}