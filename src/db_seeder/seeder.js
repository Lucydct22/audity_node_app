const db = require('../models')
const seed = require('./index')

async function seedUsers() {
  await handleSeed(seed.getBaseUser, db.User)
}

async function seedGenres() {
  await handleSeed(seed.getBaseGenre, db.Genre)
}

async function seedArtists() {
  await handleSeed(seed.getBaseArtist, db.Artist)
}

async function seedTracks() {
  await handleSeed(seed.getBaseTrack, db.Track)
}

async function seedAlbums() {
  await handleSeed(seed.getBaseAlbum, db.Album)
}

async function seedPlaylists() {
  await handleSeed(seed.getBasePlaylist, db.Playlist)
}

const handleSeed = async (getBase, Model) => {
  const seeder = await getBase();
  await Model.deleteMany({});
  await Model.create([...seeder]);
}

module.exports = {
  seedUsers,
  seedGenres,
  seedArtists,
  seedTracks,
  seedAlbums,
  seedPlaylists
}