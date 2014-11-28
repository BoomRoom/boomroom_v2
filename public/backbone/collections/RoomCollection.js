BoomRoom.Collections.RoomCollection = Backbone.Collection.extend({
	model: BoomRoom.Models.Room,
	url: '/api/rooms',
	initialize: function() {
		this.fetchRooms();
	},
	fetchRooms: function(params) {
		if(_.isUndefined(params)) {
			params = {};
		}

		this.fetch({
			data: params,
			processData: true,
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