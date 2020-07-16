const mongoose = require('mongoose');
const Humidity = mongoose.model('Humidity');

// exports.get = async() => {
//   const res = await Humidity.find({active:true});
//   return res;
// }

exports.get = async() => {
  const res = await Humidity
  .find({active: true}, 'humidity')
  .sort({ _id: -1 })
  .limit(1);
  return res;
}

exports.getByDate = async(date) => {
  const res = await Humidity
    .findOne({
      date: date,
      active: true
    });
  return res;
}

exports.create = async(data) => {
  var humidity = new Humidity(data);
  await humidity.save();
}

exports.delete = async(id) => {
  await Humidity.findOneAndRemove();
}