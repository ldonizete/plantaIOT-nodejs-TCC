const repository = require('../repositories/plantImage-repository');
const client = require('../../mqtt');

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

exports.post = async(req, res, next) => {
  try{
    if(req.body.turnOn)
    {
      client.publish('topTakeAPicture', 'on');
    } 

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