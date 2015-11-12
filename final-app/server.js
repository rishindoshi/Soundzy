//Think of these require statements as #include statements. They're just pre-built libraries.
var express = require('express');
var request = require('request');
var handles = require('express-handlebars');

var app = express();

//This allows us to use handlebars as our template engine
app.engine('.hbs', handles({
	defaultLayout: 'base',
	extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Rendering our index page
app.get('/', function(req, res){
	res.render('home', {message: 'SOUNDZAY'});
});

//When a user submits an artist
app.get('/artist', function(req, res){
	//Here we're getting the artist name that the user submitted. We get it from parsing the url.
	var search_artist_name = req.query.artist_name;

	//These two objects hava data that we will send to Spotify in our request
	//Spotify uses this request data to determine what data they want to send back to us
	var artist_req_options = {
		url: 'https://api.spotify.com/v1/search',
		qs: {q: search_artist_name, type: 'artist'},
		limit: 10,
		method: 'GET'
	};
	var tracks_req_options = {
		url: 'https://api.spotify.com/v1/artists/',
		qs: {country: 'US'},
		method: 'GET'
	};

	//Make our first request to spotify to get the unique ID for the artist that the user submitted
	request(artist_req_options, function(error, response, body){
		//Spotify gives us back the data in a format javascript can't understand.
		//Javascript understands JSON, so we use the JSON.parse function to convert the data
		var data = JSON.parse(body);
		
		//UNCOMMENT ME: to see how the data returned by spotify is formatted
		//console.log(data);

		//We extract the unique artist id and append it to our url for the next request
		var search_artist_id = data.artists.items[0].id;
		tracks_req_options.url += (search_artist_id + '/top-tracks');

		//Now that we have the unique artist id, we can request that Artist's top-tracks from Spotify
		request(tracks_req_options, function(error, response, body){
			var tracks = JSON.parse(body).tracks;
	     	var popular_tracks = [];

	     	//iterate through Spotify data and extract what fields we want
	     	//In this case, we're interestd in the name of the track, a link to the
	     	//30 second preview, and a link to the image of its album cover
	     	tracks.forEach(function(track){
	     		popular_tracks.push({
	     			name: track.name,
	     			preview: track.preview_url,
	     			imageURL: track.album.images[0].url
	     		});
	     	});

	     	//Return a new HTML page to display to the other and also give the above data we extraced
			res.render('tracks', {name: search_artist_name, tracks: popular_tracks});
		});
	});
});

//Start the server
app.listen(8888);
console.log('Server magic happens at port 8888');
