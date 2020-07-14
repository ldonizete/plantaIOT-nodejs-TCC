var mqtt = require('mqtt');

//Load models
const Soil = require('./models/soil');
const FloatSwitch = require('./models/floatSwitch');
const LDR = require('./models/sensorLDR');
const Humidity = require('./models/humidity');
const Temperature = require('./models/temperature');

//Load repository
const soilRepository = require('./repositories/soil-repository');
const floatSwitchRepository = require('./repositories/floatSwitch-repository');
const ldrRepository = require('./repositories/sensorLDR-repository');
const humidityRepository = require('./repositories/humidity-repository');
const temperatureRepository = require('./repositories/temperature-repository');

var client = mqtt.connect("http://mqtt.eclipse.org:1883");

client.on('connect', function() {
  client.subscribe('topUmidadeSolo', function (err) {
    if(!err){
      console.log("conectado - topUmidadeSolo");
    }
  })

  client.subscribe('topWaterBomb', function (err) {
    if(!err){
      console.log("conectado - topWaterBomb");
    }
  })

  client.subscribe('topLight', function (err) {
    if(!err){
      console.log("conectado - topLight");
    }
  })

  client.subscribe('topFloatSwitch', function (err) {
    if(!err){
      console.log("conectado - topFloatSwitch");
    }
  })

  client.subscribe('topSensorLDR', function (err) {
    if(!err){
      console.log("conectado - topSensorLDR");
    }
  })

  client.subscribe('topHumidity', function (err) {
    if(!err){
      console.log("conectado - topHumidity");
    }
  })

  client.subscribe('topTemperature', function (err) {
    if(!err){
      console.log("conectado - topTemperature");
    }
  })
})

client.on('message', function(topic, message) {
  if(topic === 'topUmidadeSolo')
  {
    soilRepository.create({
      moisture: message.toString()
    })
  }
  
  if(topic === 'topFloatSwitch')
  {
    floatSwitchRepository.create({
      levelWater: message.toString()
    })
  }

  if(topic === 'topSensorLDR')
  {
    ldrRepository.create({
      lightness: message.toString()
    })
  }

  if(topic === 'topHumidity')
  {
    humidityRepository.create({
      humidity: message.toString()
    })
  }
  
  if(topic === 'topTemperature')
  {
    temperatureRepository.create({
      temperature: message.toString()
    })
  }
})

module.exports = client;