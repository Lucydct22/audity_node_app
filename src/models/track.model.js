const { Schema, model } = require('mongoose')

const TrackSchema = new Schema({
	name: String,
	artist : [{
		type: Schema.Types.ObjectId,
		ref: 'Artist'
	}],
  imageUrl: String,
  audioUrl: String,
  genre: {
		type: Schema.Types.ObjectId,
		ref: 'Genre'
	},
	likedBy: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
  album: {
		type: Schema.Types.ObjectId,
		ref: 'Album'
	},
  rating: Number,
	popularity: Number,
  duration: Number,
	released: Date,                                                 
	// userId: String,
	// color: String,	
}, {
  timestamps: true
}
)

const TrackModel = model('Track', TrackSchema)

module.exports = TrackModel