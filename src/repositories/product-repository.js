const mongoose = require('mongoose');
const Product = mongoose.model('Product')
const Soil = mongoose.model('Soil');
const Humidity = mongoose.model('Humidity');
const Temperature = mongoose.model('Temperature');

exports.get = async() => {
  const res = await Product
    .find({active:true})
    .populate('customer')
    
  return res;
}

exports.getSerie = async(serie) => {
  const product = await Product.findOne({active:true, serie: serie});
  
  const soils = await Soil.find({active:true, product:product._id})
  .sort({ date: -1 }).limit(24);

  const humiditys = await Humidity.find({active:true, product:product._id})
  .sort({ date: -1 }).limit(24);

  const temps = await Temperature.find({active:true, product:product._id})
  .sort({ date: -1 }).limit(24);

  soils.sort((a,b) => {return a.date - b.date});
  humiditys.sort((a,b) => {return a.date - b.date});
  temps.sort((a,b) => {return a.date - b.date});

  product.soils = [...soils];
  product.humiditys = [...humiditys];
  product.temperatures = [...temps];
  
  return product;
}

exports.getCustomer = async(id) => {
  const res = await Product
  .find({
    customer: id,
    active: true
  }, ['serie', 'description', 'date'])
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