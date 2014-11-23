module.exports = function(mongoose) {
	// Instantiate mongoose Schema
	var Schema = mongoose.Schema;

	// Song Schema
	var songSchema = new Schema({
	  title: { type: String, required: true },
	  artist: { type: String, required: true },
	  stream_url: { type: String, required: true },
	  sc_ident: { type: Number, required: true },
	  album_art: { type: String },
	  genre: { type: String },
	  played: { type: Boolean, default: false },
	  currently_playing: { type: Boolean, default: false },
	  likes: { type: Number, default: 0 },
	  dislikes: { type: Number, default: 0 },
	  added_by: { type: String }, // could be user schema, but only need username
	  created: { type: Date, default: Date.now },
	  updated: { type: Date, default: Date.now }
	});

	// Export model
	return mongoose.model('Song', songSchema);
}