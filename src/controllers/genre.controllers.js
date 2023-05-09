const db = require('../models')
const fs = require('fs-extra')
const { uploadImage, removeMedia } = require('../utils/cloudinary')
const { deleteGenresCascade } = require('../utils/deleteCascade')
const cloudinaryConfig = require('../config/config').cloudinary

async function postGenre(req, res) {
	const { name } = req.body
	if (!name || !req.files) {
		return res.status(400).send({ status: 404 })
	}
	try {
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/genreImage`, 264, 134)
		const genre = new db.Genre({ name })
		genre.imageUrl = imageUploaded.url
		genre.imagePublicId = imageUploaded.public_id
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
		const genreStored = await db.Genre.find().lean().exec()
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
	if (!id) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const genreStored = await db.Genre.findById({ _id: id }).lean().exec()
		if (!genreStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, genre: genreStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function updateGenre(req, res) {
	const { id } = req.params
	const { name } = req.body
	if (!id || !name) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const genreToUpdate = await db.Genre.findByIdAndUpdate({ _id: id }, { name }).lean().exec()
		if (!genreToUpdate) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })
	} catch (err) {
		return res.status(500).send({ status: 500 })
	}
}

async function deleteGenre(req, res) {
	const { id } = req.params
	const { imagePublicId } = req.body
	if (!id || imagePublicId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		await deleteGenresCascade(id, db.Album)
		await deleteGenresCascade(id, db.Artist)
		await deleteGenresCascade(id, db.Playlist)
		await deleteGenresCascade(id, db.Track)
		if (imagePublicId) await removeMedia(imagePublicId, 'image')
		const genreToDelete = await db.Genre.findOneAndDelete({ _id: id }).lean()

		if (!genreToDelete) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })
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