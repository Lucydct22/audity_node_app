const { Schema, model } = require('mongoose')

const PlaylistSchema = new Schema({
	name: String,
  userId: String,
	//collaborative: Boolean, //
	description: String,
	cover: String, //
	thumbnail: String, //
	publicAccessible: Boolean, //
	totalTracks: Number,
	followers: Number, //
	rating: Number,
	/*likedBy: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	tracks: [{ //
    type: Schema.Types.ObjectId,
		ref: 'Track',
		order: Number
	}],
	followedBy: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}]
*/
}, {
	timestamps: true
}
)

const PlaylistModel = model('Playlist', PlaylistSchema)

module.exports = PlaylistModel









