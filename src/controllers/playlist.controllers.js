const { Playlist } = require("../models")
const { uploadImage } = require('../utils/cloudinary')
const fs = require('fs-extra')

async function getPlaylists(req, res) {
	try {
		const playlistStored = await Playlist.find().lean().exec()

		if (!playlistStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, playlist: playlistStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}


async function getPlaylistById(req, res) {
	const { id } = req.params
	try {
		const playlistStored = await Playlist.findById({ _id: id }).lean().exec()

		if (!playlistStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, playlist: playlistStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function deletePlaylist(req, res) {
	const { id } = req.params

	try {
		const playlistToDelete = await Playlist.findOneAndDelete({ _id: id }).lean().exec()

		if (!playlistToDelete) {
			return res.status(400).send({ status: 400, error: 'Playlist not found' })
		}
		return res.status(200).send({ status: 200, message: "The playlist was deleted" })

	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function updatePlaylist(req, res) {
	const { id } = req.params
	const {name, description} = req.body 

	try {
		const playlistToUpdate = await Playlist.findByIdAndUpdate({ _id: id }, {name, description}).lean().exec()

		if (!playlistToUpdate) {
			return res.status(400).send({ status: 400, error: 'Playlist not found' })
		}

		return res.status(200).send({ status: 200, message: "The playlist was updated" })

	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}


async function postPlaylist(req, res) {
	const { name, description } = req.body
	const playlist = new Playlist({ name, description })

	try {
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, 'playlistImages', 250, 250)
		playlist.cover = imageUploaded.url
		const playlistSaved = await playlist.save()
		if (!playlistSaved) {
			return res.status(400).send({ status: 400 })
		}
		await fs.unlink(req.files.image.tempFilePath)
		return res.status(200).send({ status: 200, playlist: playlistSaved })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	getPlaylists,
	getPlaylistById,
	deletePlaylist,
	updatePlaylist,
	postPlaylist
}