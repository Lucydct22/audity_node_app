// import getBaseTracks from './tracks';
const {getBaseTracks} = require('./tracks')
const Track = require('../models/track.model');
const Genre = require('../models/genre.model');
const Artist = require('../models/artist.model');
const { getBaseGenre } = require('./genre');
const { getBaseArtist } = require('./artist');

async function seedTracks() {
  const tracks = getBaseTracks();

  await Track.deleteMany({});
  await Track.create([...tracks]);
}

async function seedGenre() {
  const genre = getBaseGenre()

  await Genre.deleteMany({});
  await Genre.create([...genre]);
}

async function seedArtist() {
  const artist = getBaseArtist()

  await Artist.deleteMany({});
  await Artist.create([...artist]);
}

module.exports = {
	seedTracks,
  seedGenre,
  seedArtist
}