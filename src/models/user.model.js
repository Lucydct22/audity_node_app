const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  lastname: String,
  nickname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: Date,
  country: String,
  language: String,
  role: String,
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