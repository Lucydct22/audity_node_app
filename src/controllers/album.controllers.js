const db = require("../models")
const fs = require('fs-extra')
const { uploadImage, removeMedia } = require("../utils/cloudinary")
const { migrateCascadeArray, deleteCascadeLikedByUser, deleteCascadeObject, deleteCascadeArray } = require("../utils/dbCascade")
const { likeDislike } = require("./utils/likeDislike")
const { getContentLiked } = require("./utils/getContentLiked")
const cloudinaryConfig = require('../config/config').cloudinary

async function postAlbum(req, res) {
	const { name, year, totalTracks, genres, artists, tracks } = req.body
	if (!req.files || !name || !year || !totalTracks || !genres || !artists) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/albumImage`, 250, 250)
		const album = new db.Album({
			name,
			year,
			totalTracks,
			genres,
			artists,
			tracks
		})
		album.imageUrl = imageUploaded.url
		album.imagePublicId = imageUploaded.public_id
		const albumSaved = await album.save()
		if (!albumSaved) {
			return res.status(400).send({ status: 400 })
		}
		await fs.unlink(req.files.image.tempFilePath)
		genres && await migrateCascadeArray(genres, db.Genre, 'albums', albumSaved._id)
		artists && await migrateCascadeArray(artists, db.Artist, 'albums', albumSaved._id)
		tracks && await migrateCascadeArray(tracks, db.Track, 'album', albumSaved._id)
		return res.status(200).send({ status: 200, artist: albumSaved })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getAlbums(req, res) {
	try {
		const albumsStored = await db.Album.find()
    .populate('tracks')
    .lean().exec()
		if (!albumsStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, albums: albumsStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getAlbumById(req, res) {
	const { albumId } = req.params
	if (!albumId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const albumStored = await db.Album.findOne({ _id: albumId })
    .populate('tracks')
    .lean().exec()
		if (!albumStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, album: albumStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function deleteAlbum(req, res) {
	const { albumId } = req.params
	const { imagePublicId } = req.body
	if (!albumId || imagePublicId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		await deleteCascadeArray(albumId, db.Genre, 'albums')
		await deleteCascadeArray(albumId, db.Artist, 'albums')
		await deleteCascadeObject(albumId, db.Track, 'album')
		await deleteCascadeLikedByUser(albumId, db.User, 'albums')
		if (imagePublicId) await removeMedia(imagePublicId, 'image')
		const albumDelete = await db.Album.findOneAndDelete({ _id: albumId }).lean()

		if (!albumDelete) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getAlbumsLikedByUserId(req, res) {
	const { userId } = req.params
	await getContentLiked(res, userId, db.Album)
}

async function likeDislikeAlbum(req, res) {
	const { albumId, userId } = req.params
	await likeDislike(res, db.Album, albumId, userId)
}

module.exports = {
	postAlbum,
	getAlbums,
	getAlbumById,
	deleteAlbum,
	getAlbumsLikedByUserId,
	likeDislikeAlbum
}

