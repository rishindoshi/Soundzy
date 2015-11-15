var app = require('express')();
var request = require('request');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/example_home.html');
});

app.get('/tracks', function(req, res){
	var artist = req.query.artist_name;
	console.log(artist);
	var request_options = {
		url: 'https://api.spotify.com/v1/search',
		qs: {q: artist, type: 'artist'},
		limit: 10,
		method: 'GET'
	};

	request(request_options, function(error, response){
		var data_json = JSON.parse(response.body);
		console.log(data_json);
		res.sendFile(__dirname + '/views/example_tracks.html');
	});
});

app.listen(8888);
console.log("Server magic happens on port 8888");
