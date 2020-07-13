const mongoose = require('mongoose');
const FloatSwitch = mongoose.model('FloatSwitch');

exports.get = async() => {
  const res = await FloatSwitch.find({active:true});
  return res;
}

exports.create = async(data) => {
  var floatSwitch = new FloatSwitch(data);
  await floatSwitch.save();
}

exports.delete = async(id) => {
  await FloatSwitch.findOneAndRemove(id);
}