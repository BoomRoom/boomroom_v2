module.exports = function(app, models, passport, Backbone) {
	////////////
	// Models //
	////////////
	var Song = models.Song;
	var User = models.User;
	var Room = models.Room;

	///////////
	// Users //
	///////////

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
	app.get('/signup', function(request, response) {
		response.render('signup.ejs');
	});

	// Signup action
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/worked', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		// failureFlash : true // allow flash messages
	}));


	// logout
	app.get('/logout', function(request, response) {
		request.logout();
		response.redirect('/');
	});

	///////////
	// Rooms //
	///////////

	// Render rooms page
	app.get('/rooms', function(request, response) {
		response.render('room.ejs');
	});

	// Fetch all existing rooms
	app.post('/rooms', function(request, response) {
		Room.find({}, function(error, rooms) {
			response.send({ data: rooms });
		});
	})
}

// route middleware to make sure a user is logged in
function isLoggedIn(request, response, next) {

	// if user is authenticated in the session, carry on
	if (request.isAuthenticated()) {
		return next();
	}

	// if they aren't redirect them to the home page
	response.redirect('/');
}