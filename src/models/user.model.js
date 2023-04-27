const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  lastname: { type: String },
  nickname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date },
  country: { type: String },
  language: { type: String },
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artist'
    },
    {
      type: Schema.Types.ObjectId,
      ref: 'Album'
    },
    {
      type: Schema.Types.ObjectId,
      ref: 'Playlist'
    }
  ]
}, {
  timestamps: true
})

const UserModel = model('User', UserSchema)

module.exports = UserModel