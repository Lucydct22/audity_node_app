const { getBaseUser } = require('./user')
const { getBaseGenre } = require('./genre');
const { getBaseArtist } = require('./artist');
const { getBaseTrack } = require('./track');
const { getBaseAlbum } = require('./album');
const { getBasePlaylist } = require('./playlist');

module.exports = {
  getBaseUser,
	getBaseGenre,
	getBaseArtist,
	getBaseTrack,
	getBaseAlbum,
	getBasePlaylist
}