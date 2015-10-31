var https = require('https');
var request = require('request');


module.exports = function(app){
	app.get('/', function(req, res){
		res.render('home', {message: 'SOUNDZAY'});
	});

	app.get('/artist', function(req, res){
		var search_artist_name = req.query.artist_name;
		var popular_tracks = [];

		var artist_req_options = {
			url: 'https://api.spotify.com/v1/search',
			qs: {q: search_artist_name, type: 'artist'},
			method: 'GET'
		};
		var tracks_req_options = {
			url: 'https://api.spotify.com/v1/artists/',
			qs: {country: 'US'},
			method: 'GET'	
		};

		if(search_artist_name){
			request(artist_req_options, function(error, response, body){
				var data = JSON.parse(body);
				var search_artist_id = data.artists.items[0].id;
				tracks_req_options.url += (search_artist_id + '/top-tracks');
				request(tracks_req_options, function(error, response, body){
					var tracks = JSON.parse(body).tracks;
			     	var popular_tracks = [];
			     	tracks.forEach(function(track){
			     		popular_tracks.push({
			     			name: track.name,
			     			preview: track.preview_url,
			     			imageURL: track.album.images[0].url
			     		});
			     	});
					res.render('tracks', {name: search_artist_name, tracks: popular_tracks});
				});

			});

		} else {
			console.log("no artist name given");
		}

		
	});
}