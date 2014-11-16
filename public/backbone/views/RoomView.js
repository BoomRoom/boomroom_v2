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
		var name = this.model.get('name');
		var id = this.model.get('_id');
		React.render(<BoomRoom.Components.RoomView id={id} name={name} />, this.$el.get(0));
		return this;
	}
});