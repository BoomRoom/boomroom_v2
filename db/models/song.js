module.exports = function(schema) {
	var Song = schema.define('Song', {
		title: { type: String },
		artist: { type: String },
		stream_url: { type: String },
		sc_ident: { type: Number },
		album_art: { type: String },
		genre: { type: String },
		played: { type: Boolean, default: false },
		currently_playing: { type: Boolean, default: false },
		likes: { type: Number, default: 0 },
		dislikes: { type: Number, default: 0 },
		added_by: { type: String },
		created: { type: Date, default: function() { return new Date() } },
		updated: { type: Date, default: function() { return new Date() } }
	}, {
		table: 'users'
	});
}