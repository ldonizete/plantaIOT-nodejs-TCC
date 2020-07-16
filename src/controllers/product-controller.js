const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

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

exports.getCustomer = async(req, res, next) => {
  try {
    var data = await repository.getCustomer(req.params.customer);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição"
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
  try {
    await repository.update(req.params.id, req.body)
    res.status(200).send({
      message: 'Produto atualizado com sucesso!'
    });
  }catch(e)  {
    res.status(500).send({
      message: 'Falha ao atualizar produto',
    });
  };
};

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