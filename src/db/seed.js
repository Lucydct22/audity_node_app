// import getBaseTracks from './tracks';
const {getBaseTracks} = require('./tracks')
const Track = require('../models/track.model')

async function seedTracks() {
  const tracks = getBaseTracks();

  await Track.deleteMany({});
  await Track.create([...tracks]);
}

module.exports = {
	seedTracks
}