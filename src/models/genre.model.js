const { Schema, model } = require('mongoose')

const GenreSchema = new Schema({
	name: String,
	popularity: Number,
}, {
	timestamps: true
})

const GenreModel = model('Genre', GenreSchema)

module.exports = GenreModel