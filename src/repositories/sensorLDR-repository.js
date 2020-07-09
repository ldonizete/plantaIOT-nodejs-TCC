const mongoose = require('mongoose');
const LDR = mongoose.model('LDR');

exports.get = async() => {
  const res = await LDR.find({active: true}, 'lightness date');
  return res;
}

exports.getByDate = async(date) => {
  const res = await LDR
    .findOne({
      date: date,
      active: true
    }, 'lightness');
  return res;
}

exports.create = async(data) => {
  var sersorLDR = new LDR(data);
  await sersorLDR.save();
}

exports.delete = async(id) => {
  await LDR.findOneAndRemove(id);
}

