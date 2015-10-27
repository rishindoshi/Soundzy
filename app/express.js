var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');

module.exports = function(){
	var app = express();
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.set('views', './public/views');
	app.set('view engine', 'ejs');
	require('./routes.js')(app);
	app.use(express.static('./public'));

	return app;
};