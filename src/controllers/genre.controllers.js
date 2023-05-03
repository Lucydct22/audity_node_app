const fs = require('fs-extra')
const Genre = require('../models/genre.model')
const { uploadImage } = require('../utils/cloudinary')

async function postGenre(req, res) {
	const { name } = req.body
	const genre = new Genre({ name })

	try {
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, 'genreImages')
		genre.thumbnail = imageUploaded.url
		const genreSaved = await genre.save()
		if (!genreSaved) {
			return res.status(400).send({ status: 400 })
		}
		await fs.unlink(req.files.image.tempFilePath)
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

async function getGenreById(req, res) {
	const { id } = req.params
	try {
		const genreStored = await Genre.findById({ _id: id }).lean().exec()

		if (!genreStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, genre: genreStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function deleteGenre(req, res) {
	const { id } = req.params

	try {
		const genreToDelete = await Genre.findOneAndDelete({ _id: id }).lean().exec()

		if (!genreToDelete) {
			return res.status(400).send({ status: 400, error: 'Genre not found' })
		}

		return res.status(200).send({ status: 200, genre: genreToDelete })

	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function updateGenre(req, res) {
	const { id } = req.params
	const { name } = req.body 

	try {
		const genreToUpdate = await Genre.findOneAndUpdate({ _id: id }, { name }).lean().exec()

		if (!genreToUpdate) {
			return res.status(400).send({ status: 400, error: 'Genre not found' })
		}

		return res.status(200).send({ status: 200, genre: genreToUpdate })

	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}


}

module.exports = {
	getGenres,
	getGenreById,
	postGenre,
	deleteGenre,
	updateGenre
	
}