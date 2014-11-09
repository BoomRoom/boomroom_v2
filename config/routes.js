module.exports = function(app, mongoose, Backbone) {
	// Homepage
	app.get('/', function(request, response) {
	    response.render('index.ejs', { check: 'hi', Backbone: Backbone });
	});
}