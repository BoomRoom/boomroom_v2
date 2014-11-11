BoomRoom.Components.RoomView = React.createClass({
	handleClick: function() {
		alert('hi');
	},
	render: function() {
		return (
			<a href="#" onClick={this.handleClick}>Alert Me</a>
		);
	}
});