var app = require('express')();

app.get('/', function(req, res){
	res.send('ayo');
});

app.get('/tracks', function(req, res){
	res.send('whaddup');
});

app.listen(8888);
console.log("Server magic happens on port 8888");
