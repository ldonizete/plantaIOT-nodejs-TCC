const mongoose = require('mongoose');
const DHT11 = mongoose.model('DHT11');

exports.get = async() => {
  const res = await DHT11.find({active:true});
  return res;
}

exports.getByDate = async(date) => {
  const res = await DHT11
    .findOne({
      date: date,
      active: true
    });
  return res;
}

exports.create = async(data) => {
  var dht11 = new DHT11(data);
  await dht11.save();
}

exports.delete = async(id) => {
  await DHT11.findOneAndRemove();
}