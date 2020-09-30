const mongoose = require('mongoose');
const Soil = mongoose.model('Soil');

exports.get = async() => {
  const res = await Soil.find(
    {active: true},
    'moisture'
  );
  return res;
}

exports.getByDate = async(date) => {
  const res = await Soil
    .findOne({
      date: date,
      active: true
    }, 'moisture');
  return res;
}

exports.getLastData = async() => {
  const res = await Soil
  .findOne({active: true})
  .sort({ _id: -1 })
  .limit(1)
  .populate('product')
  return res;
}

exports.getByProduct = async(productsID) =>
{
  const res = await Soil
    .find({active:true, product:productsID})
    .sort({ date: -1 })
    .limit(24)
  
  return res;
}

exports.create = async(data) => {
  var soil = new Soil(data);
  await soil.save();
}

exports.delete = async(id) => {
  await Soil.findOneAndRemove(id);
}

