// Libraries
window.$ = require('jquery');
window._ = require('../../../node_modules/backbone/node_modules/underscore/underscore-min.js');
window.Backbone = require('Backbone');
window.Backbone.$ = $;
window.React = require('react');

// Initialize global namespace
var BoomRoom = BoomRoom || { Models: {}, Collections: {}, Views: {}, Components: {} };
window.BoomRoom = BoomRoom;

// Backbone Models
var User = require('../../backbone/models/User.js');
var Song = require('../../backbone/models/Song.js');
var Room = require('../../backbone/models/Room.js');

// Backbone Collections
var RoomCollection = require('../../backbone/collections/RoomCollection.js');

// Backbone Components
var RoomViewComponent = require('../../backbone/components/RoomView.js');

// Backbone Views
var RoomCollectionView = require('../../backbone/views/RoomCollectionView.js');
var RoomView = require('../../backbone/views/RoomView.js');