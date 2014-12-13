BoomRoom.Components.RoomView = React.createClass({
	render: function() {
		return (
			<a data-room-id={ this.props.model.get('_id') } href={ '/room/' + this.props.model.get('_id') } onClick={ this.props.handleClick }>{ this.props.model.get('name') }</a>
		);
	}
});