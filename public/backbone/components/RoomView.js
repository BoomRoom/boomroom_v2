BoomRoom.Components.RoomView = React.createClass({
	render: function() {
		return (
			<a data-room-id={ this.props.model.get('_id') } href="#" onClick={ this.props.handleClick }>{ this.props.model.get('name') }</a>
		);
	}
});