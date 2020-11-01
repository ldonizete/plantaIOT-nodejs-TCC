const mongoose = require('mongoose');
const Plant = mongoose.model('Plant')

exports.get = async() => {
  const res = await Plant
    .find({active:true})
    .populate('product')
  return res;
}

exports.getByProduct = async(productsID) =>
{
  const res = await Plant
    .findOne({active:true, product:productsID})
    .sort({ date: -1 })
  return res;
}

exports.create = async(data) => {
  var plant = new Plant(data);
  await plant.save();
}

exports.update = async(id, data) => {
  console.log(id,data)
  await Plant.findByIdAndUpdate(id, data)
}

exports.delete = async(id) => {
  await Plant
    .findOneAndRemove(id);
}