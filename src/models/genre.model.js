const { Schema, model } = require('mongoose')

const GenreSchema = new Schema({
	name: String,
	popularity: Number,
	imageUrl: String,
	imagePublicId: String,
	tracks: [{
		type: Schema.Types.ObjectId,
		ref: 'Track'
	}],
	artists: [{
		type: Schema.Types.ObjectId,
		ref: 'Artist'
	}],
	albums: [{
		type: Schema.Types.ObjectId,
		ref: 'Album'
	}],
	playlists: [{
		type: Schema.Types.ObjectId,
		ref: 'Playlist'
	}]
}, {
	timestamps: true
})

const GenreModel = model('Genre', GenreSchema)

module.exports = GenreModel