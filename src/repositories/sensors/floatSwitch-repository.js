const mongoose = require('mongoose');
const FloatSwitch = mongoose.model('FloatSwitch');

// exports.get = async() => {
//   const res = await FloatSwitch.find({active:true});
//   return res;
// }

exports.get = async() => {
  const res = await FloatSwitch
  .find({active: true}, 'levelWater')
  .sort({ _id: -1 })
  .limit(1);
  return res;
}

exports.getByProduct = async(productsID) =>
{
  console.log(productsID);
  const res = await FloatSwitch
    .findOne({active:true, product:productsID})
    .sort({ date: -1 })
  return res;
}

exports.create = async(data) => {
  var floatSwitch = new FloatSwitch(data);
  await floatSwitch.save();
}

exports.delete = async(id) => {
  await FloatSwitch.findOneAndRemove(id);
}