var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var handles = require('express-handlebars');

module.exports = function(){
	var app = express();
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	// app.set('views', './views');
	app.engine('handlebars', handles({ defaultLayout: 'base'}));
	app.set('view engine', 'handlebars');

	require('./routes.js')(app);
	app.use(express.static('./public'));

	return app;
};