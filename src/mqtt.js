var mqtt = require('mqtt');

//Load models
const Soil = require('./models/soil');

//Load repository
const soilRepository = require('./repositories/soil-repository');

var client = mqtt.connect("http://mqtt.eclipse.org:1883");

client.on('connect', function() {
  client.subscribe('topUmidade', function (err) {
    if(!err){
      console.log("conectado");
      // client.publish('topUmidade', 'Hello mqtt')
    }
  })

  client.subscribe('topWaterBomb', function (err) {
    if(!err){
      console.log("conectado - topWaterBomb");
      // client.publish('topUmidade', 'Hello mqtt')
    }
  })
})

client.on('message', function(topic, message) {
  if(topic === 'topUmidade')
  {

    soilRepository.create({
      moisture: message.toString()
    })

    console.log(message.toString());
  }
  
  // client.end()
})

module.exports = client;