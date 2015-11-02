var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var handles = require('express-handlebars');

module.exports = function(){
	var app = express();
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	//This allows us to use handlebars
	app.engine('.hbs', handles({
		defaultLayout: 'base',
		extname: '.hbs'
	}));
	app.set('view engine', '.hbs');

	require('./routes.js')(app);
	app.use(express.static('./public'));

	return app;
};