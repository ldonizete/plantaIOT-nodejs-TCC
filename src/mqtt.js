var mqtt = require('mqtt');

const azure = require('azure-storage');
const config = require('./config');
const guid = require('guid');

//Load models
const Soil = require('./models/sensors/soil');
const FloatSwitch = require('./models/sensors/floatSwitch');
const LDR = require('./models/sensors/sensorLDR');
const Humidity = require('./models/sensors/humidity');
const Temperature = require('./models/sensors/temperature');
const PlantImage = require('./models/plantImage');

//Load repository
const soilRepository = require('./repositories/sensors/soil-repository');
const floatSwitchRepository = require('./repositories/sensors/floatSwitch-repository');
const ldrRepository = require('./repositories/sensors/sensorLDR-repository');
const humidityRepository = require('./repositories/sensors/humidity-repository');
const temperatureRepository = require('./repositories/sensors/temperature-repository');
const plantImageRepository = require('./repositories/plantImage-repository');

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

  client.subscribe('PICTURE', function (err) {
    if(!err){
      console.log("conectado - PICTURE");
    }
  })
})

client.on('message', function(topic, message, packet) {

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
   
    if(topic === "topPICTURE")
    {
      saveImage(message);
    }
})

async function saveImage (message) {
  try {
    // Cria o Blob service
    const blobSvc = azure.createBlobService(config.containerConnectionString);

    let fileName = guid.raw().toString() + '.jpg';
    let buffer = message;
    let type = 'teste';

    //Save img
    await blobSvc.createBlockBlobFromText('plant-images', fileName, buffer,
      {contentType: type}, function (error, result, response) 
      {
        if(error) {
          fileName = 'default-plant.png'
        }
      }
    );

    plantImageRepository.create({
      image :'https://nodeplant.blob.core.windows.net/plant-images/' + fileName,
      plant: "5f31db29f54fb60944019ed7"
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = client;