module.exports = function(mongoose) {
	// require('user.js')(mongoose);
	var Song = require('./song.js')(mongoose);
	// require('room.js')(mongoose);

	return { Song: Song };
}