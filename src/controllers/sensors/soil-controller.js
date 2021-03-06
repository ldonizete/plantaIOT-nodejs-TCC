const repository = require('../../repositories/sensors/soil-repository');

exports.get = async(req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Failed your request'
    })
  }
}

exports.getLastData = async(req, res, next) => {
  try {
    var data = await repository.getLastData();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Failed your request'
    })
  }
}

exports.getByProduct = async(req, res, next) => {
  try {
    var data = await repository.getByProduct(req.params.productsID);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Failed your request'
    })
  }
}

exports.getByDate = async(req, res, next) => {
  try {
    var data = await repository.getByDate(req.params.date);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Failed your request'
    })
  }
}

exports.post = async(req, res, next) => {
  try{
    await repository.create(req.body)
    res.status(201).send({
      message: 'Saved successfully'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Failed to save'
    })
  }
}

exports.delete = async(req, res, next) => {
  try{
    await repository.delete(req.body.id);
    res.status(200).send({
      message: 'Succssfully removed'
    });
  }catch(e) {
    res.status(500).send({
      message: 'Fail to remove',
      data: e
    });
  }
}