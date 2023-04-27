const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true, 
  },
  picture: {
    type: String,
    required: true, 
  },
    following: [userID]
  ,
  tracks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo'
    }
  ]
})

const UserModel = model('User', UserSchema)

module.exports = UserModel