const { Schema, model } = require('mongoose')

const ArtistSchema = new Schema({
  name: String,
  imageUrl: String,
  imagePublicId: String,
  genres: [{
    type: Schema.Types.ObjectId,
    ref: 'Genre'
  }],
  albums: [{
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }],
  playlists: [{
    type: Schema.Types.ObjectId,
    ref: 'Playlist'
  }],
  tracks: [{
    type: Schema.Types.ObjectId,
    ref: 'Track'
  }],
  likedBy: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
}
)

const ArtistModel = model('Artist', ArtistSchema)

module.exports = ArtistModel