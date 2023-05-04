const { Playlist } = require("../models")

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
	const { playlistId } = req.params
	try {
		const playlistStored = await Playlist.findOne({ _id: playlistId }).lean().exec()
		if (!playlistStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, playlist: playlistStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	getPlaylists,
	getPlaylistById
}