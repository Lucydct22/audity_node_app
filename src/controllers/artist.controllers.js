const db = require('../models')
const fs = require('fs-extra')
const { uploadImage, removeMedia } = require('../utils/cloudinary')
const { migrateCascadeArray, deleteCascadeLikedByUser, deleteCascadeArray } = require('../utils/dbCascade')
const { likeDislike } = require('./utils/likeDislike')
const { getContentLiked } = require('./utils/getContentLiked')
const cloudinaryConfig = require('../config/config').cloudinary

async function postArtist(req, res) {
	const { name, genres, albums, playlists, tracks } = req.body
	if (!name) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const artist = new db.Artist()
		artist.name = name
		if (genres) { artist.genres = genres }
		if (albums) { artist.albums = albums }
		if (playlists) { artist.playlists = playlists }
		if (tracks) { artist.tracks = tracks }
		const artistSaved = await artist.save()
		if (!artistSaved) {
			return res.status(400).send({ status: 400 })
		}
		genres && await migrateCascadeArray(genres, db.Genre, 'artists', artistSaved._id)
		albums && await migrateCascadeArray(albums, db.Album, 'artists', artistSaved._id)
		tracks && await migrateCascadeArray(tracks, db.Track, 'artists', artistSaved._id)
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
		const artistStored = await db.Artist.findOne({ _id: artistId }).populate('tracks').lean().exec()
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
	try {
		const findArtist = await db.Artist.findOne({ _id: artistId }).lean().exec()
		if (!findArtist) {
			return res.status(404).send({ status: 404 })
		}
		if (findArtist.imagePublicId) await removeMedia(findArtist.imagePublicId, 'image')
		await deleteCascadeArray(artistId, db.Genre, 'artists')
		await deleteCascadeArray(artistId, db.Album, 'artists')
		await deleteCascadeArray(artistId, db.Track, 'artists')
		await deleteCascadeLikedByUser(artistId, db.User, 'artists')
		const artistToDelete = await db.Artist.findOneAndDelete({ _id: artistId }).lean()
		if (!artistToDelete) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getArtistsLikedByUserId(req, res) {
	const { userId } = req.params
	return await getContentLiked(res, userId, db.Artist)
}

async function likeDislikeArtist(req, res) {
	const { artistId, userId } = req.params
	return await likeDislike(res, db.Artist, artistId, userId, 'artists')
}

async function putArtistImage(req, res) {
	const { artistId } = req.params
	if (!req.files) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const findArtist = await db.Artist.findOne({ _id: artistId }).lean().exec()
		if (!findArtist) {
			return res.status(404).send({ status: 404 })
		}
		if (findArtist.imagePublicId) await removeMedia(findArtist.imagePublicId, 'image')
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/artistImage`, 250, 250)
		if (!imageUploaded) {
			return res.status(402).send({ status: 402 })
		}
		const artistStored = await db.Artist.findOneAndUpdate(
			{ _id: artistId },
			{
				imageUrl: imageUploaded.secure_url,
				imagePublicId: imageUploaded.public_id
			},
			{ returnOriginal: false }
		).lean()
		if (!artistStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, artist: artistStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	} finally {
		await fs.unlink(req.files?.image.tempFilePath)
	}
}

async function updateArtist(req, res) {
	const { artistId } = req.params
	const { name, genres, albums, playlists, tracks } = req.body
	try {
		const artistToUpdate = await db.Artist.findByIdAndUpdate({ _id: artistId }, {
			name, genres, tracks, albums, playlists
		}).lean().exec()
		if (!artistToUpdate) {
			return res.status(400).send({ status: 400 })
		}
		genres && await migrateCascadeArray(genres, db.Genre, 'artists', artistToUpdate._id)
		albums && await migrateCascadeArray(albums, db.Album, 'artists', artistToUpdate._id)
		tracks && await migrateCascadeArray(tracks, db.Track, 'artists', artistToUpdate._id)
		return res.status(200).send({ status: 200, artist: artistToUpdate })
	} catch (err) {
		return res.status(500).send({ status: 500 })
	}
}


module.exports = {
	postArtist,
	getArtists,
	getArtistById,
	deleteArtist,
	getArtistsLikedByUserId,
	likeDislikeArtist,
	putArtistImage,
	updateArtist
}