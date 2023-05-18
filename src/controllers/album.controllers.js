const db = require("../models")
const fs = require('fs-extra')
const { uploadImage, removeMedia } = require("../utils/cloudinary")
const { migrateCascadeArray, deleteCascadeLikedByUser, deleteCascadeObject, deleteCascadeArray, deleteCascade } = require("../utils/dbCascade")
const { likeDislike } = require("./utils/likeDislike")
const { getContentLiked } = require("./utils/getContentLiked")
const { ObjectId } = require("bson")
const cloudinaryConfig = require('../config/config').cloudinary

async function postAlbum(req, res) {
	const { name, genres, artists, tracks } = req.body
	if (!name) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const album = new db.Album()
		album.name = name
		if (genres) { album.genres = genres }
		if (artists) { album.artists = artists }
		if (tracks) { album.tracks = tracks }
		const albumSaved = await album.save()
		if (!albumSaved) {
			return res.status(400).send({ status: 400 })
		}
		genres && await migrateCascadeArray(genres, db.Genre, 'albums', albumSaved._id)
		artists && await migrateCascadeArray(artists, db.Artist, 'albums', albumSaved._id)
		tracks && await migrateCascadeArray(tracks, db.Track, 'albums', albumSaved._id)
		return res.status(200).send({ status: 200, album: albumSaved })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getAlbums(req, res) {
	try {
		const albumsStored = await db.Album.find().lean().exec()
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
		const albumStored = await db.Album.findOne({ _id: albumId }).populate('tracks').lean().exec()
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
	if (!albumId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const findGenre = await db.Album.findOne({ _id: albumId }).lean().exec()
		if (!findGenre) {
			return res.status(404).send({ status: 404 })
		}
		if (findGenre.imagePublicId) await removeMedia(findGenre.imagePublicId, 'image')
		await deleteCascadeArray(albumId, db.Genre, 'albums')
		await deleteCascadeArray(albumId, db.Artist, 'albums')
		await deleteCascadeObject(albumId, db.Track, 'album')
		await deleteCascadeLikedByUser(albumId, db.User, 'albums')
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
	return await getContentLiked(res, userId, db.Album)
}

async function likeDislikeAlbum(req, res) {
	const { albumId, userId } = req.params
	return await likeDislike(res, db.Album, albumId, userId, 'albums')
}

async function putAlbumImage(req, res) {
	const { albumId } = req.params
	if (!req.files) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const findAlbum = await db.Album.findOne({ _id: albumId }).lean().exec()
		if (!findAlbum) {
			return res.status(404).send({ status: 404 })
		}
		if (findAlbum.imagePublicId) await removeMedia(findAlbum.imagePublicId, 'image')
		const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/albumImage`, 250, 250)
		if (!imageUploaded) {
			return res.status(402).send({ status: 402 })
		}
		const albumStored = await db.Album.findOneAndUpdate(
			{ _id: albumId },
			{
				imageUrl: imageUploaded.secure_url,
				imagePublicId: imageUploaded.public_id
			},
			{ returnOriginal: false }
		).lean().exec()
		if (!albumStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, album: albumStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	} finally {
		await fs.unlink(req.files.image.tempFilePath)
	}
}

async function updateAlbum(req, res) {
	const { albumId } = req.params
	const { name, genres, artists, tracks } = req.body
	let albumsToRemoveIntoGenres = []
	let albumsToRemoveIntoArtists = []
	let albumsToRemoveIntoTracks = []
	try {
		const findAlbum = await db.Album.findOne({ _id: albumId }).lean().exec()
		if (!findAlbum) {
			return res.status(404).send({ status: 404 })
		}
		findAlbum.genres?.forEach(genre => {
			if (genres && !genres.includes(genre.toString())) {
				albumsToRemoveIntoGenres.push(genre)
			}
		});
		findAlbum.artists?.forEach(artist => {
			if (artists && !artists.includes(artist.toString())) {
				albumsToRemoveIntoArtists.push(artist)
			}
		});
		findAlbum.tracks?.forEach(track => {
			if (tracks && !tracks.includes(track.toString())) {
				albumsToRemoveIntoTracks.push(track)
			}
		});
		const albumToUpdate = await db.Album.findByIdAndUpdate({ _id: albumId }, {
			name, genres, artists, tracks
		}).lean().exec()
		if (!albumToUpdate) {
			return res.status(400).send({ status: 400 })
		}
		await tracks?.forEach(async track => {
			await db.Track.findOneAndUpdate(
				{ _id: track },
				{ album: albumId },
				{ returnOriginal: false }
			).lean().exec()
		});
		genres && await migrateCascadeArray(genres, db.Genre, 'albums', albumToUpdate._id)
		artists && await migrateCascadeArray(artists, db.Artist, 'albums', albumToUpdate._id)
		return res.status(200).send({ status: 200, album: albumToUpdate })
	} catch (err) {
		return res.status(500).send({ status: 500 })
	} finally {
		albumsToRemoveIntoGenres?.forEach(async genreId => {
			return await deleteCascade(db.Genre, genreId, 'albums', albumId)
		});
		albumsToRemoveIntoArtists?.forEach(async artistId => {
			return await deleteCascade(db.Artist, artistId, 'albums', albumId)
		});
		albumsToRemoveIntoTracks?.forEach(async trackId => {
			return await db.Track.findOneAndUpdate(
				{ _id: trackId },
				{ album: new ObjectId('64651d9553363383e2dd8c7e') }
			).lean().exec()
		});
	}
}

module.exports = {
	postAlbum,
	getAlbums,
	getAlbumById,
	deleteAlbum,
	getAlbumsLikedByUserId,
	likeDislikeAlbum,
	putAlbumImage,
	updateAlbum
}

