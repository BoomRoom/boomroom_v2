//////////////////
// Server Setup //
//////////////////

// Express middleware (with extensions)
var express = require('express');
var session = require('express-session');
var cookie = require('cookie-parser');
var body_parser = require('body-parser');
var method_override = require('method-override');

// Redis & Redis Client
var redis = require('redis');
var client = redis.createClient();

// Redis storage for sessions
var RedisStore = require('connect-redis')(session);

// Initialize app with express
var app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(method_override());
app.set('view engine', 'ejs'); // set template engine

// HTTP setup
var http = require('http').Server(app).listen(8000);

// Socket IO
var io = require('socket.io')(http);

// Morgan (logging) setup
var morgan = require('morgan');
app.use(morgan('dev'));

// jQuery
var jquery = require('jquery');

// Backbone
var Backbone = require('backbone');

// React
var React = require('react');

// Database connection
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/boomroom');

// Load Schema
var models = require('./db/models/models.js')(mongoose);

// User auth (w/ sessions)
var passport = require('passport');
require('./config/passport.js')(passport, models.User);
app.use(cookie());
app.use(session({ 
	maxAge: new Date(Date.now() + 3600000), // sets expiry date
	secret: 'aZXYfsu3827asOIASDsdXCSAhfwuanQ@#EQ',
	store: new RedisStore({
		host: 'localhost',
		client: client,
		port: 6379 // default redis port
	}),
	saveUninitialized: false, // does not save when empty
	resave: false // only resaves when value has changed, not constantly
}));
app.use(passport.initialize());
app.use(passport.session()); // keeps login in session

// Controllers & Routes
require('./config/routes.js')(app, models, passport, io);

// Set public directory for assets
app.use(express.static(__dirname + '/public'));

// Launch the app
// app.listen(8000, function(){
// 	console.log('listening on port 8000');
// });
