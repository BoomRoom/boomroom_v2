BoomRoom.Collections.RoomCollection = Backbone.Collection.extend({
	model: BoomRoom.Models.Room,
	url: '/api/rooms',
	initialize: function() {
		this.fetch({
			success: function(collection, response) {
				var roomCollectionView = new BoomRoom.Views.RoomCollectionView({ collection: collection });
				roomCollectionView.render();
			}
		});
	},
	parse: function(response) {
		return response.data;
	}
});