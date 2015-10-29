var https = require('https');
var request = require('request');

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index');
	});

	app.get('/artist', function(req, res){
		console.log("IN /ARTIST")
		var search_artist_name = req.query.artist_name;
		var popular_tracks = [];

		if(search_artist_name){
			request({
			    url: 'https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/top-tracks', //URL to hit
			    qs: {country: 'US'}, //Query string data
			    method: 'GET',
			}, function(error, response, body){
			    if(error) {
			        console.log(error);
			    } else {
			    	var tracks = JSON.parse(body).tracks;
			     	var popular_tracks = [];
					for(var i=0; i<tracks.length; ++i){
						popular_tracks.push(tracks[i].name);
					}
				}	
			});
		}

		// if(search_artist_name){
		// 	var options = {
		// 		hostname: "api.spotify.com",
		// 		path: '/v1/search?q=Kendrick&type=artist',
		// 		method: 'GET'
		// 	}
		// 	console.log(options.hostname + options.path);
		// 	var search_artist_id = null;
		// 	var req = https.request(options, function(res){
		// 		res.on('data', function(data){
		// 			data_json = JSON.parse(data);
		// 			search_artist_id = data_json.artists.items[0].id;
		// 			// console.log(data_json.artists.items[0].id);

		// 			var options2 = {
		// 				hostname: "api.spotify.com",
		// 				path: '/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/top-tracks?country=US',
		// 				method: 'GET'
		// 			};
		// 			console.log("second request");
		// 			var req = https.request(options2, function(res){
		// 				var body = '';
		// 				res.on('data', function(data2){
		// 					body += data2;
		// 				});
		// 				res.on('end', function(){
		// 					var data_json = JSON.parse(body);
		// 					var tracks = data_json.tracks;
		// 					for(var i=0; i<tracks.length; ++i){
		// 						popular_tracks.push(tracks[i].name);
		// 					}
		// 					console.log(popular_tracks);
		// 				})

		// 			});
		// 			req.end();
		// 		});
		// 	})
		// 	req.end();
		// 	req.on('error', function(error){
		// 		console.log("ERROR: " + error);
		// 	});
		// }

	});
}