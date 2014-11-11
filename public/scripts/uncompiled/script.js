// Libraries
window.$ = require('jquery');
window._ = require('../../../node_modules/backbone/node_modules/underscore/underscore-min.js');
window.Backbone = require('Backbone');
window.Backbone.$ = $;
window.React = require('react');

// Initialize global namespace
var BoomRoom = BoomRoom || { Models: {}, Collections: {}, Views: {}, Components: {} };
window.BoomRoom = BoomRoom;

// Include backbone code
var RoomViewComponent = require('../../backbone/components/RoomView.js');
var RoomView = require('../../backbone/views/RoomView.js');