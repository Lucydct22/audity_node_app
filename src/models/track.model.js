const { Schema, model } = require('mongoose')

const TrackSchema = new Schema({
	userId: String,
	name: String,
	artists: [{
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
	playlists: [{
		type: Schema.Types.ObjectId,
		ref: 'Playlist'
	}],
	rating: Number,
	popularity: Number,
	duration: Number,
	released: Date,
}, {
	timestamps: true
}
)

// TrackSchema.createIndex({ name: 'text' });
TrackSchema.index({
	name: "text",
	keywords: "text",
	about: "text"
},
	{
		weights: {
			name: 10,
			keywords: 5
		},
		name: "TextIndex"
	});
const TrackModel = model('Track', TrackSchema)

module.exports = TrackModel