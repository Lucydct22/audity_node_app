const { Schema, model } = require('mongoose')

const PlaylistSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	name: String,
	description: String,
	imageUrl: String,
	publicAccessible: Boolean, //
	totalTracks: Number,
	followers: Number, //
	rating: Number,
	imagePublicId: String,
	likedBy: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	tracks: [{ //
		type: Schema.Types.ObjectId,
		ref: 'Track',
		order: Number
	}],
	artists: [{
		type: Schema.Types.ObjectId,
		ref: 'Artist'
	}],
	genres: [{
		type: Schema.Types.ObjectId,
		ref: 'Genre'
	}],
	// collaborative: Boolean, //
	// thumbnail: String,
}, {
	timestamps: true
}
)

const PlaylistModel = model('Playlist', PlaylistSchema)

module.exports = PlaylistModel









