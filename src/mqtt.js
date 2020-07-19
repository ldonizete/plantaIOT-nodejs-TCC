var mqtt = require('mqtt');

//Load models
const Soil = require('./models/sensors/soil');
const FloatSwitch = require('./models/sensors/floatSwitch');
const LDR = require('./models/sensors/sensorLDR');
const Humidity = require('./models/sensors/humidity');
const Temperature = require('./models/sensors/temperature');

//Load repository
const soilRepository = require('./repositories/sensors/soil-repository');
const floatSwitchRepository = require('./repositories/sensors/floatSwitch-repository');
const ldrRepository = require('./repositories/sensors/sensorLDR-repository');
const humidityRepository = require('./repositories/sensors/humidity-repository');
const temperatureRepository = require('./repositories/sensors/temperature-repository');

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

  client.subscribe('topFan', function (err) {
    if(!err){
      console.log("conectado - topFan");
    }
  })

  client.subscribe('topExhaust', function (err) {
    if(!err){
      console.log("conectado - topExhaust");
    }
  })
})

client.on('message', function(topic, message, packet) {

  console.log(packet);

  if(
    !isNaN(message.toString())
    && message.toString() !== null
    && message.toString() !== undefined
    && message.toString().length > 0
  )
  {
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
  }

  
})

module.exports = client;