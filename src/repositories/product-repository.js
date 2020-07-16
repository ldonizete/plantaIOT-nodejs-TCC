const mongoose = require('mongoose');
const Product = mongoose.model('Product')

exports.get = async() => {
  const res = await Product
    .find({active:true})
    .populate('customer')
  return res;
}

exports.getCustomer = async(customer) => {
  const res = await Product
  .findOne({
    customer: customer,
    active: true
  })
  return res;
}

exports.create = async(data) => {
  var product = new Product(data);
  await product.save();
}

exports.update = async(id, data) => {
  await Product
    .findByIdAndUpdate(id, {
      $set: {
        serie: data.serie,
        description: data.description,
        customer: data.customer,
        date: Date.now
      }
    })
}

exports.delete = async(id) => {
  await Product
    .findOneAndRemove(id);
}