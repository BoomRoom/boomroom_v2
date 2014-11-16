BoomRoom.Views.RoomView = Backbone.View.extend({
	tagName: 'li',
	className: 'room-list-item',
	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	render: function() {
		var $el = $(this.el);
		var self = this;
		React.renderComponent(new BoomRoom.Components.RoomView({ name: self.model.get('name') }), this.$el.get(0));
		return this;
	}
});