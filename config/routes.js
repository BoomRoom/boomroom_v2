module.exports = function(app, models, passport, Backbone) {
	var Song = models.Song;

	// Homepage
	app.get('/', function(request, response) {
	    response.render('index.ejs', { check: 'hi', Backbone: Backbone });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/worked', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		// failureFlash : true // allow flash messages
	}));


	// signup
	app.get('/signup', function(req, res) {
		console.log('hi');
		res.render('signup.ejs');
	});

	// Signup action
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/worked', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		// failureFlash : true // allow flash messages
	}));


	// logout
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}