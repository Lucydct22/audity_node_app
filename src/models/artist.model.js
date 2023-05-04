const { Schema, model } = require('mongoose')

const ArtistSchema = new Schema({
  name: String,
  genres: [{
		type: Schema.Types.ObjectId,
		ref: 'Genre'
	}],
  imageUrl: String,
                                              
}, {
  timestamps: true
}
)

const ArtistModel = model('Artist', ArtistSchema)

module.exports = ArtistModel