var https = require('https');
module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index');
	});

	app.get('/artist', function(req, res){
		console.log("IN /ARTIST")
		var search_artist_name = req.query.artist_name;
		// search_artist_name.replace(/ /g,"%20");
		if(search_artist_name){
			var options = {
				hostname: "api.spotify.com",
				path: '/v1/search?q=Kanye&type=artist',
				method: 'GET'
			}
			console.log(options.hostname + options.path);
			var search_artist_id = null;
			var req = https.request(options, function(res){
				res.on('data', function(data){
					data_json = JSON.parse(data);
					search_artist_id = data_json.artists.items[0].id;
					// console.log(data_json.artists.items[0].id);

					var options2 = {
						hostname: "api.spotify.com",
						path: '/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/top-tracks?country=US',
						method: 'GET'
					};
					console.log("second request");
					var req = https.request(options2, function(res){
						res.on('data', function(data2){
							// process.stdout.write(data2);
							var str = JSON.stringify(data2);
							var data_json = JSON.parse(str);
							console.log(data_json);
							var tracks = data_json.tracks;
							for(var i=0; i<tracks.length; ++i){
								var track = tracks[i];
								console.log(track.name);
							}

						});

					});
					req.end();


				});
			})
			req.end();
			req.on('error', function(error){
				console.log("ERROR: " + error);
			});


		}

	});
}