const repository = require('../repositories/plant-repository');

exports.get = async(req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição"
    })
  }
}

exports.getByProduct = async(req, res, next) => {
  try {
    var data = await repository.getByProduct(req.params.productsID);
    var planta = {config:data}
    res.status(200).send(planta);
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

exports.put = async(req, res, next) => {
  try{
    await repository.update(req.params.id, req.body)
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
  try {
     await repository.delete(req.body.id)
     res.status(200).send({
       message: 'Produto removido com sucesso!'
     });
   }catch(e) {
     res.status(500).send({
       message: 'Falha ao remover produto',
       data: e
     });
   }
 };