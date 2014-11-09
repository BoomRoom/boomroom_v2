module.exports = function(mongoose) {
	// Instantiate mongoose Schema
	var Schema = mongoose.Schema;

	// Song Schema
	var songSchema = new Schema({
	  title: String,
	  artist: String,
	  stream_url: String,
	  sc_ident: Number,
	  album_art: String,
	  genre: String,
	  played: { type: Boolean, default: false },
	  currently_playing: { type: Boolean, default: false },
	  likes: { type: Number, default: 0 },
	  dislikes: { type: Number, default: 0 },
	  added_by: String,
	  created: { type: Date, default: Date.now },
	  updated: { type: Date, default: Date.now }
	});

	// Export model
	return mongoose.model('Song', songSchema);
}