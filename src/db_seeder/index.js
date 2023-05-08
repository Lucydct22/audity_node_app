const { getBaseUser } = require('./user.seeder')
const { getBaseGenre } = require('./genre.seeder');
const { getBaseArtist } = require('./artist.seeder');
const { getBaseTrack } = require('./track.seeder');
const { getBaseAlbum } = require('./album.seeder');
const { getBasePlaylist } = require('./playlist.seeder');

module.exports = {
  getBaseUser,
	getBaseGenre,
	getBaseArtist,
	getBaseTrack,
	getBaseAlbum,
	getBasePlaylist
}