const db = require('../models')
const fs = require('fs-extra')
const { uploadImage, removeMedia } = require('../utils/cloudinary')
const { migrateCascadeArray, deleteCascade, deleteCascadeUser, deleteCascadeArray } = require('../utils/dbCascade')
const cloudinaryConfig = require('../config/config').cloudinary

async function postArtist(req, res) {
	const { name, genres } = req.body
	if (!req.files || !name || !genres) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/artistImage`, 250, 250)
		const artist = new db.Artist({ name, genres })
		artist.imageUrl = imageUploaded.url
		artist.imagePublicId = imageUploaded.public_id
		const artistSaved = await artist.save()
		if (!artistSaved) {
			return res.status(400).send({ status: 400 })
		}
		await fs.unlink(req.files.image.tempFilePath)
		await migrateCascadeArray(genres, db.Genre, 'artists', artistSaved._id)
		return res.status(200).send({ status: 200, artist: artistSaved })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getArtists(req, res) {
	try {
		const artistsStored = await db.Artist.find().lean().exec()

		if (!artistsStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, artists: artistsStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getArtistById(req, res) {
	const { artistId } = req.params
	if (!artistId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const artistStored = await db.Artist.findOne({ _id: artistId }).lean().exec()
		if (!artistStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, artist: artistStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function deleteArtist(req, res) {
	const { artistId } = req.params
	const { imagePublicId } = req.body
	if (!artistId || !imagePublicId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		await deleteCascadeArray(artistId, db.Genre, 'artists')
		await deleteCascadeArray(artistId, db.Album, 'artists')
		await deleteCascadeArray(artistId, db.Playlist, 'artists')
		await deleteCascadeArray(artistId, db.Track, 'artists')
		await deleteCascadeUser(artistId, db.User, 'artists')
		if (imagePublicId) await removeMedia(imagePublicId, 'image')
		const artistToDelete = await db.Artist.findOneAndDelete({ _id: artistId }).lean()

		if (!artistToDelete) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	postArtist,
	getArtists,
	getArtistById,
	deleteArtist
}