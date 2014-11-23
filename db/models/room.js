module.exports = function(mongoose) {	
	// Instantiate mongoose Schema
	var Schema = mongoose.Schema;

	// Require other Schema
	var songSchema = mongoose.models.Song;
	var userSchema = mongoose.models.User;
	var bcrypt 	   = require('bcrypt-nodejs');

	// Room Schema
	var roomSchema = new Schema({
	  name: { type: String, required: true },
	  songs: [songSchema],
	  users: [userSchema],
	  password: { type: String },
	  created: { type: Date, default: Date.now },
	  updated: { type: Date, default: Date.now }
	});

	// methods ======================
	// generating a hash
	roomSchema.methods.generateHash = function(password) {
	    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	};

	// checking if password is valid
	roomSchema.methods.validPassword = function(password) {
	    return bcrypt.compareSync(password, this.password);
	};

	// Export model
	return mongoose.model('Room', roomSchema);
}