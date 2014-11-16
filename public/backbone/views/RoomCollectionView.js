BoomRoom.Views.RoomCollectionView = Backbone.View.extend({
	el: '#room-list',
	initialize: function() {
		this.collection.on('add', this.render, this);
	},
	render: function() {
		var $el = $(this.el);
		var self = this;

		// Loop through models and append views
		this.collection.each(function(room) {
			var roomView = new BoomRoom.Views.RoomView({ model: room });
			$el.append(roomView.render().el);
		});

		return this;
	}
});