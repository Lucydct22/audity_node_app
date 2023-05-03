const Track = require('../models/track.model')

async function postTrack(req, res) {
	const { name, artist, url, thumbnail, genre, album, duration } = req.body
	const track = new Track({
		name,
		artist,
		url,
		thumbnail,
		genre,
		album,
		duration
	})

	try {
		const trackSaved = await track.save()
		if (!trackSaved) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, track: trackSaved })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getTracks(req, res) {
	try {
		const tracksStored = await Track.find().lean().exec()

		if (!tracksStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, tracks: tracksStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	postTrack,
	getTracks,
	//getGenreById,
	//putGenre,
	//deleteGenre
}