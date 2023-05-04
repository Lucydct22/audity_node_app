const fs = require('fs-extra')
const Artist = require('../models/artist.model')
const { uploadImage } = require('../utils/cloudinary')

async function postArtist(req, res) {
	const { name, genres } = req.body
	const artist = new Artist({ name, genres })

	try {
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, 'artistImages', 250, 250)
		artist.photoUrl = imageUploaded.url
		const artistSaved = await artist.save()
		if (!artistSaved) {
			return res.status(400).send({ status: 400 })
		}
		await fs.unlink(req.files.image.tempFilePath)
		return res.status(200).send({ status: 200, artist: artistSaved })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getArtists(req, res) {
	try {
		const artistsStored = await Artist.find().lean().exec()

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
	try {
		const artistStored = await Artist.findOne({ _id: artistId }).lean().exec()
		if (!artistStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, artist: artistStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
  postArtist,
	getArtists,
	getArtistById
}