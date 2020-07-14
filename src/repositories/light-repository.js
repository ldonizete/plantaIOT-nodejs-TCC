const mongoose = require('mongoose');
const Light = mongoose.model('Light');

// exports.get = async() => {
//   const res = await Light.find({active:true}, 'turnOn');
//   return res;
// }

exports.get = async() => {
  const res = await Light
  .find({active:true}, 'turnOn')
  .sort({ _id: -1 })
  .limit(1);
  return res;
}

exports.create = async(data) => {
  var light = new Light(data);
  await light.save();
}

exports.delete = async(id) => {
  await Light.findOneAndRemove(id);
}