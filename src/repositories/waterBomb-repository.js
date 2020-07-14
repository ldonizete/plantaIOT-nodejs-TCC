const mongoose = require('mongoose');
const WaterBomb = mongoose.model('WaterBomb');

// exports.get = async() => {
//   const res = await WaterBomb.find({active:true}, 'turnOn');
//   return res;
// }

exports.get = async() => {
  const res = await WaterBomb
  .find({active:true}, 'turnOn')
  .sort({ _id: -1 })
  .limit(1);
  return res;
}

exports.create = async(data) => {
  var waterBomb = new WaterBomb(data);
  await waterBomb.save();
}

exports.delete = async(id) => {
  await WaterBomb.findOneAndRemove(id);
}