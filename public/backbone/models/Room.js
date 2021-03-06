BoomRoom.Models.Room = Backbone.Model.extend({
	url: function() {
		// if id exists, puts to /rooms, else posts to /rooms
		return this.id ? '/room/' + this.id : '/room';
	},
	defaults: {
		created: new Date(),
		updated: new Date()
	},
	initialize: function() {
		console.log('a room has been created');
	}
});