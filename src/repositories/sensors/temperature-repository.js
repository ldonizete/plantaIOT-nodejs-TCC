const mongoose = require('mongoose');
const Temperature = mongoose.model('Temperature');

// exports.get = async() => {
//   const res = await Temperature.find({active:true});
//   return res;
// }

exports.get = async() => {
  const res = await Temperature
  .find({active:true}, 'temperature')
  .sort({ _id: -1 })
  .limit(1)
  return res;
}

exports.getByDate = async(date) => {
  const res = await Temperature
    .findOne({
      date: date,
      active: true
    });
  return res;
}

exports.create = async(data) => {
  var temperature = new Temperature(data);
  await temperature.save();
}

exports.delete = async(id) => {
  await Temperature.findOneAndRemove();
}