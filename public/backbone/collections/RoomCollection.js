var BoomRoom = BoomRoom || { Models: {}, Collections: {}, Views: {}, Components: {} };

BoomRoom.Collections.RoomCollection = Backbone.Collection.extend({
	model: BoomRoom.Models.Room,
	url: '/api/rooms'
});