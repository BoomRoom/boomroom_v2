module.exports = function(mongoose) {	
	// Instantiate mongoose Schema
	var Schema = mongoose.Schema;

	// Require other Schema
	var songSchema = mongoose.models.Song;
	var userSchema = mongoose.models.User;

	// Room Schema
	var roomSchema = new Schema({
	  name: String,
	  songs: [songSchema],
	  users: [userSchema],
	  created: { type: Date, default: Date.now },
	  updated: { type: Date, default: Date.now }
	});

	// Export model
	return mongoose.model('Room', roomSchema);
}