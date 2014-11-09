module.exports = function(app, schema, Backbone) {
	// Homepage
	app.get('/', function(request, response) {
		console.log(schema);
	    response.render('index.ejs', { check: 'hi', Backbone: Backbone });
	});
}