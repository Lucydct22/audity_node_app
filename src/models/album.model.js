const { Schema, model } = require('mongoose')

const AlbumSchema = new Schema({
	name: String,
	year: Number,
	totalTracks: Number,
  thumbnail: String,
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