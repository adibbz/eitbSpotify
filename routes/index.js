var express = require('express');
var router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : process.env.clientId,
  clientSecret : process.env.clientSecret,
  //redirectUri : 'http://www.example.com/callback'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get-EITB-songs', function (req, res, next) {

	var test = req.param('beerType');

	spotifyApi.searchTracks('artist:Elephant in the Brew')
	.then(function(data) {
		var randSong = Math.floor(Math.random() * 24) + 0;
		// res.json({
		// 	'Song': data.body
		// });
		res.render('results', {
			test: test,
			albumArt: data.body.tracks.items[randSong].album.images[1].url,
			preview: data.body.tracks.items[randSong].preview_url,
			name: data.body.tracks.items[randSong].name,
			fullSong: data.body.tracks.items[randSong].external_urls.spotify
		});
	}, function(err) {
		console.log('Something went wrong!', err);
	});


});

module.exports = router;
