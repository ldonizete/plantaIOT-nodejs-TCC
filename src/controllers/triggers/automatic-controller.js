const repository = require('../../repositories/triggers/automatic-repository');
const client = require('../../mqtt');

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

exports.post = async(req, res, next) => {
  try {
    if(req.body.turnOn)
    {
      client.publish('topAutomatic', 'on');
    } else {
      client.publish('topAutomatic', 'off');
    }

    res.status(201).send({
      message: 'Success'
    });
  } catch(e) {
    res.status(500).send({
      message: 'Failed to save'
    })
  }
}

exports.delete = async(req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({
      message: 'Successfully removed'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Fail to remove',
      data: e
    })
  }
}