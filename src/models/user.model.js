const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  lastname: String,
  nickname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: String,
  dateOfBirth: Date,
  country: String,
  language: String,
  role: String,
  userInfo: {
    currentTrackList: {
      type: Schema.Types.ObjectId,
      ref: 'Album',
      ref: 'Artist',
      ref: 'Playlist',
      ref: 'Genre',
    },
    currentTrack: {
      type: Schema.Types.ObjectId,
      ref: 'Track'
    },
    trackTime: Number,
    volume: Number
  },
  likesTo: {
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
    }],
    tracks: [{
      type: Schema.Types.ObjectId,
      ref: 'Track'
    }]
  }
}, {
  timestamps: true
})

const UserModel = model('User', UserSchema)

module.exports = UserModel