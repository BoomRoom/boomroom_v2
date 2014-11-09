//////////////////
// Server Setup //
//////////////////

// Express middleware (with extensions)
var express = require('express');

// Initialize app with express
var app = express();
app.set('view engine', 'ejs'); // set template engine

// HTTP setup
var http = require('http').Server(app);

// Socket IO
var socketio = require('socket.io')(http);

// Morgan (logging) setup
var morgan = require('morgan');
app.use(morgan('dev'));

// jQuery
var jquery = require('jquery');

// Backbone
var Backbone = require('backbone');

// React
var React = require('react');

// User auth
var passport = require('passport');

// Database connection
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/boomroom');

// Load Schema
var models = require('./db/models/models.js')(mongoose);

// Routes
require('./config/routes.js')(app, models, Backbone);

// Set public directory for assets
app.use(express.static(__dirname + '/public'));

// Launch the app
app.listen(8000, function(){
	console.log('listening on port 8000');
});
