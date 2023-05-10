const db = require("../models")
const { uploadImage, removeMedia } = require('../utils/cloudinary')
const fs = require('fs-extra')
const { migrateCascadeArray, deleteCascadeArray } = require("../utils/dbCascade")
const cloudinaryConfig = require('../config/config').cloudinary

async function postPlaylist(req, res) {
	const { name, description, tracks } = req.body
	if (!req.files || !name || !description || !tracks) {
		return res.status(404).send({ status: 404 })
	}
	const playlist = new db.Playlist({
		name,
		description,
		publicAccessible: false,
		totalTracks: 0,
		followers: 0,
		rating: 5,
		tracks
	})

	try {
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/playlistImages`, 250, 250)
		playlist.cover = imageUploaded.url
		playlist.imagePublicId = imageUploaded.public_id
		const playlistSaved = await playlist.save()
		if (!playlistSaved) {
			return res.status(400).send({ status: 400 })
		}
		await fs.unlink(req.files.image.tempFilePath)
		await migrateCascadeArray(tracks, db.Track, 'playlists', playlistSaved._id)
		return res.status(200).send({ status: 200, playlist: playlistSaved })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getPlaylists(req, res) {
	try {
		const playlistStored = await db.Playlist.find().lean().exec()

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
	if (!id) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const playlistStored = await db.Playlist.findById({ _id: id }).lean().exec()

		if (!playlistStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, playlist: playlistStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function updatePlaylist(req, res) {
	const { id } = req.params
	const { name, description } = req.body
	if (!id || !name || !description) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const playlistToUpdate = await db.Playlist.findByIdAndUpdate({ _id: id }, { name, description }).lean().exec()

		if (!playlistToUpdate) {
			return res.status(400).send({ status: 400, error: 'Playlist not found' })
		}

		return res.status(200).send({ status: 200, message: "The playlist was updated" })

	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function deletePlaylist(req, res) {
	const { playlistId } = req.params
	const { imagePublicId } = req.body
	if (!playlistId || !imagePublicId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		await deleteCascadeArray(playlistId, db.Track, 'playlists')
		await deleteCascadeUser(playlistId, db.User, 'playlists')
		if (imagePublicId) await removeMedia(imagePublicId, 'image')
		const playlistToDelete = await db.Playlist.findOneAndDelete({ _id: playlistId }).lean()

		if (!playlistToDelete) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getPlaylistsLikedByUserId(req, res) {
	const { userId } = req.params
	if (!userId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const playlistsStored =
			await db.Playlist.find({ likedBy: { $in: [userId] } }).lean().exec()
		if (!playlistsStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, artists: playlistsStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	getPlaylists,
	getPlaylistById,
	deletePlaylist,
	updatePlaylist,
	postPlaylist,
	getPlaylistsLikedByUserId
}