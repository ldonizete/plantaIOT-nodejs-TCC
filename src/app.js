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
const Soil = require('./models/soil');
const LDR = require('./models/sensorLDR');
const Humidity = require('./models/humidity');
const WaterBomb = require('./models/waterBomb');
const Temperature = require('./models/temperature');
const Light = require('./models/light');
const FloatSwitch = require('./models/floatSwitch');

//Load the routes
const indexRoute = require('./routes/index-route');
const soilRoute = require('./routes/soil-route');
const ldrRoute = require('./routes/sensorLDR-route');
const humidityRoute = require('./routes/humidity-route');
const waterBombRoute = require('./routes/waterBomb-route');
const temperatureRoute = require('./routes/temperature-route');
const lightRoute = require('./routes/light-route');
const floatRoute = require('./routes/floatSwitch-route');

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

module.exports = app;
