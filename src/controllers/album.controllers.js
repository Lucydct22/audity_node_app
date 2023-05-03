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

module.exports = {
	getAlbums,
}