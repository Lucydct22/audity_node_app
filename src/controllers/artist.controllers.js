const { Artist } = require("../models")

async function getArtists(req, res) {
	try {
		const artistsStored = await Artist.find().lean().exec()

		if (!artistsStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, artists: artistsStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	getArtists,
}