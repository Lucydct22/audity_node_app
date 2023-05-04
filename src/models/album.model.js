const { Schema, model } = require('mongoose')

const AlbumSchema = new Schema({
	name: String,
	year: Number,
	totalTracks: Number,
  imageUrl: String,
	tracks: [{
		type: Schema.Types.ObjectId,
		ref: 'Track'
	}],
	artists: [{
		type: Schema.Types.ObjectId,
		ref: 'Artist'
	}],
	likedBy: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
}, {
	timestamps: true
}
)

const AlbumModel = model('Album', AlbumSchema)

module.exports = AlbumModel