const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const config = require('./config');

const app = express();

//Connect to the bank
mongoose.connect(config.connectionString);

//Load models
const Soil = require('./models/soil');
const LDR = require('./models/sensorLDR');
const DHT11 = require('./models/sensorDHT11');

//Load the routes
const indexRoute = require('./routes/index-route');
const soilRoute = require('./routes/soil-route');
const ldrRoute = require('./routes/sensorLDR-route');
const dht11Route = require('./routes/sensorDHT11-route');

app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', indexRoute);
app.use('/soils', soilRoute);
app.use('/sensorLDRs', ldrRoute);
app.use('/sensorDHT11s', dht11Route);

module.exports = app;
