const mongoose = require('mongoose');
const PlantImage = mongoose.model('PlantImage')

exports.get = async() => {
  const res = await PlantImage
  .find()
  .sort({ _id: -1 })
  .limit(1)
  .populate('plant');
  return res;
}

exports.create = async(data) => {
  var plantImage = new PlantImage(data);
  await plantImage.save();
}

exports.delete = async(id) => {
  await plantImage
    .findOneAndRemove(id);
}