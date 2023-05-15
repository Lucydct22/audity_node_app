const db = require("../models")
const { uploadImage, removeMedia } = require('../utils/cloudinary')
const fs = require('fs-extra')
const { migrateCascadeArray, deleteCascadeArray, migrateMyLibraryUser, deleteMyLibraryUser, migrateCascadeObject, deleteCascadeObject } = require("../utils/dbCascade")
const { likeDislike } = require("./utils/likeDislike")
const { getContentLiked } = require("./utils/getContentLiked")
const cloudinaryConfig = require('../config/config').cloudinary

async function postPlaylist(req, res) {
	const { userId, name, description, tracks } = req.body
	if (!userId || !name || !description) {
		return res.status(404).send({ status: 404 })
	}
	const playlist = new db.Playlist({
		userId,
		name,
		description,
		publicAccessible: false,
		followers: 0,
		rating: 5,
		tracks
	})

	try {
		if (req.files?.image.tempFilePath) {
			const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/playlistImages`, 250, 250)
			playlist.cover = imageUploaded.url
			playlist.imagePublicId = imageUploaded.public_id
			await fs.unlink(req.files.image.tempFilePath)
		}
		const playlistSaved = await playlist.save()
		if (!playlistSaved) {
			return res.status(400).send({ status: 400 })
		}
		tracks && await migrateCascadeArray(tracks, db.Track, 'playlists', playlistSaved._id)
		await migrateMyLibraryUser(userId, playlistSaved._id, 'playlists')
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
	const { userId, imagePublicId } = req.body
	if (!userId || !playlistId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		await deleteCascadeArray(playlistId, db.Track, 'playlists')
		await deleteMyLibraryUser(userId, playlistId, 'playlists')
		imagePublicId && await removeMedia(imagePublicId, 'image')
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
	await getContentLiked(res, userId, db.Playlist)
}

async function likeDislikePlaylist(req, res) {
	const { playlistId, userId } = req.params
	await likeDislike(res, db.Playlist, playlistId, userId)
}


async function getPlaylistsByUser(req, res) {
	const { userId } = req.params
	if (!userId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const myPlaylists = await db.Playlist.find({ userId }).lean().exec()
		if (!myPlaylists) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, content: myPlaylists })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function putTrackToPlaylist(req, res) {
	const { trackId, playlistId } = req.params
	if (!playlistId || !trackId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const playtlistUpdated = await db.Playlist.findByIdAndUpdate(
			{ _id: playlistId },
			{
				$addToSet: { tracks: trackId }
			},
			{ new: true }).lean().exec()

		if (!playtlistUpdated) {
			return res.status(400).send({ status: 400, error: 'Track not found' })
		}
			await migrateCascadeObject(trackId, db.Track, 'playlists', playlistId)

		return res.status(200).send({ status: 200, message: "The track was added to playlist" })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function deleteTrackFromPlaylist(req, res) {
	const { trackId, playlistId } = req.params
	if (!playlistId || !trackId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const playtlistUpdated = await db.Playlist.findByIdAndUpdate(
			{ _id: playlistId },
			{
				$pull: { tracks: trackId }
			}).lean().exec()

		if (!playtlistUpdated) {
			return res.status(400).send({ status: 400, error: 'Track not found' })
		}
			await deleteCascadeObject(trackId, db.Track, 'playlists', playlistId)

		return res.status(200).send({ status: 200, message: "The track was added to playlist" })
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
	getPlaylistsLikedByUserId,
	likeDislikePlaylist,
	getPlaylistsByUser,
	putTrackToPlaylist,
	deleteTrackFromPlaylist
}