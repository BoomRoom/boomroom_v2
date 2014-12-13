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
	    response.render('index.ejs');
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/rooms', // redirect to the secure profile section
		failureRedirect : '/', // redirect back to the signup page if there is an error
		// failureFlash : true // allow flash messages
	}));


	// signup
	app.get('/signup', function(request, response) {
		response.render('signup.ejs');
	});

	// Signup action
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/rooms', // redirect to the secure profile section
		failureRedirect : '/', // redirect back to the signup page if there is an error
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
		console.log(request.session.passport);
		response.render('room.ejs', { user: request.user });
	});

	// Create new room
	app.post('/room', function(request, response) {
		var data = request.body;

		var newRoom = new Room();
		newRoom.name = data.name;
		newRoom.save(function(err) {
			if(err) {
				throw err;
			}
			return true;
		});
		response.send({ data: newRoom });
	});

	// Fetch all existing rooms
	app.get('/api/rooms', function(request, response) {
		// Obtains get string from url
		var params = request.query;

		// Parses search regex
		if(typeof params['name'] != 'undefined') {
			params['name'] = new RegExp(params['name'], 'i');
		}

		// Find room with params
		Room.find(params, function(error, rooms) {
			response.send({ data: rooms });
		});
	});

	// Update existing room
	app.put('/room/:id', function(request, response) {
		var room_id = request.params.id;
		var data = request.body;

		Room.findById(room_id, function(err, room) {
			if(room) {
				// update the room here
			} else {
				return false;
			}
		});
	});
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