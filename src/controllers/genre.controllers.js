const Genre = require('../models/genre.model')

async function postGenre(req, res) {
	const { name } = req.body
	const genre = new Genre({ name })

	try {
		const genreSaved = await genre.save()
		if (!genreSaved) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, genre: genreSaved })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getGenres(req, res) {
	try {
		const genreStored = await Genre.find().lean().exec()

		if (!genreStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, genres: genreStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	getGenres,
	//getGenreById,
	postGenre,
	//putGenre,
	//deleteGenre
}