/* eslint-disable */
var express = require('express');
var cors = require('cors');
var path = require('path');
var data = require('./data.json');

var PORT = 8080;
var app = express();

app.use(cors());

app.get('/', function(req, res) {
  res.send('API reached');
});

app.get('/cars', function(req, res) {
  res.json(data);
});

app.listen(PORT, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('api is running on http://localhost:' + PORT);
  }
});
