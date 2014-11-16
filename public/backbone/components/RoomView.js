BoomRoom.Components.RoomView = React.createClass({
	render: function() {
		return (
			<a data-room-id={ this.props.id } href="#">{ this.props.name }</a>
		);
	}
});