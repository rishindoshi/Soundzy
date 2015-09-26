process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var uri = "mongodb://localhost/mean-book";
var db = mongoose.connect(uri);
require('./app/models/models.js');

var express = require('./config/express.js');
var mongoose = require('mongoose');
var app = express();

app.listen(3000);
module.exports = app;
console.log('Server magic happens at port 3000');
