module.exports = function(mongoose) {
	var Song = require('./song.js')(mongoose);
	var User = require('./user.js')(mongoose);
	var Room = require('./room.js')(mongoose);

	return { Song: Song, User: User, Room: Room };
}