const db = require('../models')

async function searchContent(req, res) {
	const { query } = req.params
	if (query.length < 2) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const queryRegex = new RegExp(`${query}`, 'i')
		const tracks = await db.Track.find({ name: queryRegex }).lean().exec();
		const artists = await db.Artist.find({ name: queryRegex }).lean().exec();
		const albums = await db.Album.find({ name: queryRegex }).lean().exec();
		const playlists = await db.Playlist.find({ name: queryRegex }).lean().exec();

		if (!tracks) {
			return res.status(400).send({ status: 400 })
		}
		let tracksArray = []
		let artistsArray = []
		let albumsArray = []
		let playlistsArray = []

		tracks.forEach(track => tracksArray.push({
			_id: track._id,
			type: 'track',
			name: track.name,
			imageUrl: track.imageUrl
		}));
		artists.forEach(artist => artistsArray.push({
			_id: artist._id,
			type: 'artist',
			name: artist.name,
			imageUrl: artist.imageUrl
		}));
		albums.forEach(album => albumsArray.push({
			_id: album._id,
			type: 'album',
			name: album.name,
			imageUrl: album.imageUrl
		}));
		playlists.forEach(playlist => playlistsArray.push({
			_id: playlist._id,
			type: 'playlist',
			name: playlist.name,
			imageUrl: playlist.imageUrl
		}));

		return res.status(200).send({
			status: 200,
			content: {
				tracks: tracksArray,
				artists: artistsArray,
				albums: albumsArray,
				playlists: playlistsArray,
			}
		})
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	searchContent,
}