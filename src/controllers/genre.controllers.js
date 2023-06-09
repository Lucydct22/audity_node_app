const db = require('../models')
const fs = require('fs-extra')
const { uploadImage, removeMedia } = require('../utils/cloudinary')
const { deleteGenresCascade } = require('../utils/deleteCascade')
const cloudinaryConfig = require('../config/config').cloudinary

async function postGenre(req, res) {
	const { name } = req.body
	if (!name) {
		return res.status(400).send({ status: 404 })
	}
	try {
		const genre = new db.Genre()
		genre.name = name
		const genreSaved = await genre.save()

		if (!genreSaved) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, genre: genreSaved })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function putGenreImage(req, res) {
	const { genreId } = req.params
	if (!req.files) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const findGenre = await db.Genre.findOne({ _id: genreId }).lean().exec()
		if (!findGenre) {
			return res.status(404).send({ status: 404 })
		}
		if (findGenre.imagePublicId) await removeMedia(findGenre.imagePublicId, 'image')
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/genreImage`, 264, 134)
		if (!imageUploaded) {
			return res.status(402).send({ status: 402 })
		}
		const genreStored = await db.Genre.findOneAndUpdate(
			{ _id: genreId },
			{
				imageUrl: imageUploaded.secure_url,
				imagePublicId: imageUploaded.public_id
			},
			{ returnOriginal: false }
		).lean().exec()
		if (!genreStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, genre: genreStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	} finally {
		await fs.unlink(req.files?.image.tempFilePath)
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

async function getGenrePlaylistById(req, res) {
	const { id } = req.params
	if (!id) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const genreStored = await db.Genre.findById({ _id: id }).populate('playlists').lean().exec();
		if (!genreStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, playlists: genreStored.playlists })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getGenreAlbumsById(req, res) {
	const { id } = req.params
	if (!id) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const genreStored = await db.Genre.findById({ _id: id }).populate('albums').lean().exec();
		if (!genreStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, albums: genreStored.albums })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getGenreArtistsById(req, res) {
	const { id } = req.params
	if (!id) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const genreStored = await db.Genre.findById({ _id: id }).populate('artists').lean().exec();
		if (!genreStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, artists: genreStored.artists })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function updateGenre(req, res) {
	const { id } = req.params
	const { name } = req.body
	try {
		const genreToUpdate = await db.Genre.findByIdAndUpdate(
			{ _id: id }, 
			{ name },
			{ returnOriginal: false }
			).lean().exec()
		if (!genreToUpdate) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, genre: genreToUpdate })
	} catch (err) {
		return res.status(500).send({ status: 500 })
	}
}

async function deleteGenre(req, res) {
	const { id } = req.params
	try {
		const findGenre = await db.Genre.findOne({ _id: id }).lean().exec()
		if (!findGenre) {
			return res.status(404).send({ status: 404 })
		}
		if (findGenre.imagePublicId) await removeMedia(findGenre.imagePublicId, 'image')
		await deleteGenresCascade(id, db.Album)
		await deleteGenresCascade(id, db.Artist)
		await deleteGenresCascade(id, db.Track)
		const genreToDelete = await db.Genre.findOneAndDelete({ _id: id }).lean().exec()
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
	getGenrePlaylistById,
	getGenreAlbumsById,
	getGenreArtistsById,
	postGenre,
	deleteGenre,
	updateGenre,
	putGenreImage
}