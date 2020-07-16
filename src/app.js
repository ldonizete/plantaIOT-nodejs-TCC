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
const Soil = require('./models/sensors/soil');
const LDR = require('./models/sensors/sensorLDR');
const Humidity = require('./models/sensors/humidity');
const WaterBomb = require('./models/triggers/waterBomb');
const Temperature = require('./models/sensors/temperature');
const Light = require('./models/triggers/light');
const FloatSwitch = require('./models/sensors/floatSwitch');
const Customer = require('./models/customer');
const Product = require('./models/product')
const Exhaust = require('./models/triggers/exhaust')

//Load the routes
const indexRoute = require('./routes/index-route');
const soilRoute = require('./routes/sensors/soil-route');
const ldrRoute = require('./routes/sensors/sensorLDR-route');
const humidityRoute = require('./routes/sensors/humidity-route');
const waterBombRoute = require('./routes/triggers/waterBomb-route');
const temperatureRoute = require('./routes/sensors/temperature-route');
const lightRoute = require('./routes/triggers/light-route');
const floatRoute = require('./routes/sensors/floatSwitch-route');
const customerRoute = require('./routes/customer-route');
const productRoute = require('./routes/product-route');
const exhaustRoute = require('./routes/triggers/exhaust-route');

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

module.exports = app;
