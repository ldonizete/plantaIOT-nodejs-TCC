const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const config = require('./config');

const app = express();

//Load MQTT
const MQTT = require('./mqtt');

//Connect to the bank
mongoose.connect(config.connectionString);

//Load models
const Customer = require('./models/customer');
const Plant = require('./models/plant');
const PlantImage = require('./models/plantImage');
const Product = require('./models/product');
const Soil = require('./models/sensors/soil');
const LDR = require('./models/sensors/sensorLDR');
const Humidity = require('./models/sensors/humidity');
const Temperature = require('./models/sensors/temperature');
const FloatSwitch = require('./models/sensors/floatSwitch');
const Exhaust = require('./models/triggers/exhaust');
const Fan = require('./models/triggers/fan')
const WaterBomb = require('./models/triggers/waterBomb');
const Light = require('./models/triggers/light');

//Load the routes
const indexRoute = require('./routes/index-route');
const customerRoute = require('./routes/customer-route');
const productRoute = require('./routes/product-route');
const plantRoute = require('./routes/plant-route');
const plantImageRoute = require('./routes/plantImage-route');

//Sensor routes
const soilRoute = require('./routes/sensors/soil-route');
const ldrRoute = require('./routes/sensors/sensorLDR-route');
const humidityRoute = require('./routes/sensors/humidity-route');
const temperatureRoute = require('./routes/sensors/temperature-route');
const floatRoute = require('./routes/sensors/floatSwitch-route');

//Trigger routes
const waterBombRoute = require('./routes/triggers/waterBomb-route');
const lightRoute = require('./routes/triggers/light-route');
const exhaustRoute = require('./routes/triggers/exhaust-route');
const fanRoute = require('./routes/triggers/fan-route');

app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', indexRoute);
app.use('/soils', soilRoute);
app.use('/sensorLDRs', ldrRoute);
app.use('/humiditys', humidityRoute);
app.use('/waterBombs', waterBombRoute);
app.use('/temperatures', temperatureRoute);
app.use('/lights', lightRoute);
app.use('/floatSwitchs', floatRoute);
app.use('/customers', customerRoute);
app.use('/products', productRoute);
app.use('/exhausts', exhaustRoute);
app.use('/fans', fanRoute);
app.use('/plants', plantRoute);
app.use('/plantImages', plantImageRoute);

module.exports = app;
