var express = require('express');

module.exports = function(){
	var app = express();
	app.set('views', './public/views');
	app.set('view engine', 'ejs');
	require('./routes.js')(app);
	app.use(express.static('./public'));

	return app;
};