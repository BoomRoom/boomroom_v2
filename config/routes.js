module.exports = function(app, models, Backbone) {
	var Song = models.Song;

	// Homepage
	app.get('/', function(request, response) {
		var song = new Song({ 
			title: 'Crawl', 
			artist: 'Childish Gambino',
			stream_url: 'www.soundcloud.com/childish-gambino',
			sc_ident: 1234,
			genre: 'Hip Hop',
			added_by: 'Mitul Patel'
		});
		console.log(song.save());
	    response.render('index.ejs', { check: 'hi', Backbone: Backbone });
	});
}