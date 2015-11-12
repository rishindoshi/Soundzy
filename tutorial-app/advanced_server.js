var app = require('express')();

app.get('/', function(req, res){
	res.sendFile('example_home.html');
});

app.get('/tracks', function(req, res){
	var artist = req.query.artist;
	console.log(artist);
	res.sendFile('example_tracks.html');
});

app.listen(8888);
console.log("Server magic happens on port 8888");
