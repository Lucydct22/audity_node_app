const { Album } = require("../models")

async function getAlbums(req, res) {
	try {
		const albumsStored = await Album.find().lean().exec()

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
	try {
		const albumStored = await Album.findOne({ _id: albumId }).lean().exec()
		if (!albumStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, album: albumStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function createAlbum(req, res) {
const { name, year, totalTracks, thumbnail } = req.body
try {
const album = new Album({
name,
year,
totalTracks,
thumbnail
})
const savedAlbum = await album.save()
return res.status(201).send({ status: 201, album: savedAlbum })
} catch (err) {
return res.status(500).send({ status: 500, error: err })
}
}

async function getAllAlbums(req, res) {
try {
const albums = await Album.find().populate('likedBy').lean().exec()
return res.status(200).send({ status: 200, albums })
} catch (err) {
return res.status(500).send({ status: 500, error: err })
}
}

async function likeAlbum(req, res) {
const { albumId, userId } = req.body
try {
const updatedAlbum = await Album.findOneAndUpdate(
{ _id: albumId },
{ $addToSet: { likedBy: userId } },
{ new: true }
)
if (!updatedAlbum) {
return res.status(404).send({ status: 404, error: 'Album not found' })
}
return res.status(200).send({ status: 200, album: updatedAlbum })
} catch (err) {
return res.status(500).send({ status: 500, error: err })
}
}

module.exports = {
getAlbums,
createAlbum,
getAllAlbums,
likeAlbum,
	getAlbumById
}

