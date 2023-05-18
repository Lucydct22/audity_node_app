const db = require("../models")
const { uploadImage, removeMedia } = require('../utils/cloudinary')
const fs = require('fs-extra')
const { migrateCascadeArray, deleteCascadeArray, migrateMyLibraryUser, deleteMyLibraryUser, migrateCascadeObject, deleteCascadeObject, deleteCascade } = require("../utils/dbCascade")
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
			playlist.cover = imageUploaded.secure_url
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

async function postPlaylistAdmin(req, res) {
	const { userId, name, description, tracks } = req.body
	if (!userId || !name) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const playlist = new db.Playlist({
			userId,
			name,
			description,
			publicAccessible: true,
			followers: 0,
			rating: 5,
		})

		if (tracks) { playlist.tracks = tracks }
		const playlistSaved = await playlist.save()
		if (!playlistSaved) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, playlist: playlistSaved })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getPlaylists(req, res) {
	try {
		const playlistStored = await db.Playlist.find({ publicAccessible: true }).lean().exec()

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
		const playlistStored = await db.Playlist.findById({ _id: id }).populate('tracks').lean().exec()

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
	try {
		const playlistToUpdate = await db.Playlist.findByIdAndUpdate(
			{ _id: id },
			{ name, description }
		).lean().exec()
		if (!playlistToUpdate) {
			return res.status(400).send({ status: 400, error: 'Playlist not found' })
		}
		return res.status(200).send({ status: 200, playlist: playlistToUpdate, message: "The playlist was updated" })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function deletePlaylist(req, res) {
	const { playlistId } = req.params
	const { userId } = req.body
	if (!userId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const findPlaylist = await db.Playlist.findOne({ _id: playlistId }).lean().exec()
		if (!findPlaylist) {
			return res.status(404).send({ status: 404 })
		}
		if (findPlaylist.imagePublicId) await removeMedia(findPlaylist.imagePublicId, 'image')
		await deleteCascadeArray(playlistId, db.Track, 'playlists')
		await deleteCascadeArray(playlistId, db.Artist, 'playlists')
		await deleteCascadeArray(playlistId, db.Genre, 'playlists')
		await deleteMyLibraryUser(userId, playlistId, 'playlists')
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
	return await getContentLiked(res, userId, db.Playlist)
}

async function likeDislikePlaylist(req, res) {
	const { playlistId, userId } = req.params
	return await likeDislike(res, db.Playlist, playlistId, userId, 'playlists')
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

async function updatePlaylistAdmin(req, res) {
	const { playlistId } = req.params
	const { name, description, tracks } = req.body
	let playlistsToRemoveIntoTracks = []
	try {
		const findPlaylist = await db.Playlist.findOne({ _id: playlistId }).lean().exec()
		if (!findPlaylist) {
			return res.status(404).send({ status: 404 })
		}
		findPlaylist.tracks?.forEach(track => {
			if (tracks && !tracks.includes(track.toString())) {
				playlistsToRemoveIntoTracks.push(track)
			}
		});
		const playlistToUpdate = await db.Playlist.findByIdAndUpdate(
			{ _id: playlistId }, 
			{	name, description, tracks	},
			{ returnOriginal: false }
			).lean().exec()
		if (!playlistToUpdate) {
			return res.status(400).send({ status: 400 })
		}
		await migrateCascadeArray(tracks, db.Track, 'playlists', playlistId)
		return res.status(200).send({ status: 200, playlist: playlistToUpdate })
	} catch (err) {
		return res.status(500).send({ status: 500 })
	} finally {
		playlistsToRemoveIntoTracks?.forEach(async trackId => {
			return await deleteCascade(db.Track, trackId, 'playlists', playlistId)
		});
	}
}

async function updatePlaylistImage(req, res) {
	const { playlistId } = req.params
	if (!req.files) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const findPlaylist = await db.Playlist.findOne({ _id: playlistId }).lean().exec()
		if (!findPlaylist) {
			return res.status(404).send({ status: 404 })
		}
		if (findPlaylist.imagePublicId) await removeMedia(findPlaylist.imagePublicId, 'image')
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/playlistImage`, 250, 250)
		if (!imageUploaded) {
			return res.status(402).send({ status: 402 })
		}
		const playlistStored = await db.Playlist.findOneAndUpdate(
			{ _id: playlistId },
			{
				imageUrl: imageUploaded.secure_url,
				imagePublicId: imageUploaded.public_id
			},
			{ returnOriginal: false }
		).lean()
		if (!playlistStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, playlist: playlistStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	} finally {
		await fs.unlink(req.files?.image.tempFilePath)
	}
}

async function updatePublicAccessible(req, res) {
	const { playlistId } = req.params
	const { publicAccessible } = req.body
	try {
		const playlistStored = await db.Playlist.findOneAndUpdate(
			{ _id: playlistId },
			{ publicAccessible: publicAccessible },
			{ returnOriginal: false }
		).lean().exec()
		if (!playlistStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, publicAccessible })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getAllPlaylists(req, res) {
	try {
		const playlistStored = await db.Playlist.find().lean().exec()
		if (!playlistStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, playlists: playlistStored })
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
	postPlaylistAdmin,
	getPlaylistsLikedByUserId,
	likeDislikePlaylist,
	getPlaylistsByUser,
	updatePlaylistImage,
	updatePlaylistAdmin,
	putTrackToPlaylist,
	deleteTrackFromPlaylist,
	updatePublicAccessible,
	getAllPlaylists
}