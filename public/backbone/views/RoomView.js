BoomRoom.Views.RoomView = Backbone.View.extend({
	el: 'body',
	template: '<div class="room-container"></div>',
	render: function() {
		this.$el.html(this.template);
		React.renderComponent(new BoomRoom.Components.RoomView(), this.$('.room-container').get(0));
		return this;
	}
});