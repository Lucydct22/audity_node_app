const Track = require('../models/track.model')
const fs = require('fs-extra')
const { uploadImage, uploadAudio, removeMedia } = require('../utils/cloudinary')
const db = require('../models')
const { migrateCascadeArray, migrateCascadeObject, deleteCascadeArray } = require('../utils/dbCascade')
const { getRandomItem } = require('../utils/getRamdomItem')
const cloudinaryConfig = require('../config/config').cloudinary

async function postTrack(req, res) {
  const { name, artists, genres, album, playlists, duration } = req.body
  if (!req.files || !name || !artists || !genres || !album || !playlists || !duration) {
    return res.status(400).send({ status: 400 })
  }
  try {
    const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/trackImage`, 250, 250)
    const track = new Track({
      name,
      genres,
      album,
      artists,
      playlists,
      duration
    })
    track.imageUrl = imageUploaded.url
    track.imagePublicId = imageUploaded.public_id
    const audioUploaded = await uploadAudio(req.files.audio.tempFilePath, `${cloudinaryConfig.folder}/trackAudio`)
    track.audioUrl = audioUploaded.url
    track.audioPublicId = audioUploaded.public_id

    const trackSaved = await track.save()
    if (!trackSaved) {
      return res.status(404).send({ status: 404 })
    }
    await fs.unlink(req.files.image.tempFilePath)
    await fs.unlink(req.files.audio.tempFilePath)
    await migrateCascadeArray(genres, db.Genre, 'tracks', trackSaved._id)
    await migrateCascadeArray(artists, db.Artist, 'tracks', trackSaved._id)
    await migrateCascadeArray(playlists, db.Playlist, 'tracks', trackSaved._id)
    await migrateCascadeObject(album, db.Album, 'tracks', trackSaved._id)
    return res.status(200).send({ status: 200, track: trackSaved })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

async function getTracks(req, res) {
  try {
    const tracksStored = await db.Track.find().lean().exec()

    if (!tracksStored) {
      return res.status(400).send({ status: 400 })
    }
    // const x = getRandomItem(tracksStored)
    // console.log(x);
    return res.status(200).send({ status: 200, tracks: tracksStored })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

async function getTrackById(req, res) {
  const { trackId } = req.params
  if (!trackId) {
    return res.status(404).send({ status: 404 })
  }
  try {
    const tracksStored =
      await db.Track.findOne({ _id: trackId })
        .populate('genres')
        .populate('artists')
        .populate('likedBy').exec()

    if (!tracksStored) {
      return res.status(400).send({ status: 400 })
    }
    return res.status(200).send({ status: 200, track: tracksStored })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

async function searchTrack(req, res) {
  const { query } = req.params
  if (!query) {
    return res.status(404).send({ status: 404 })
  }
  try {
    const tracks = await db.Track.find(
      { $text: { $search: query } },
      { score: { $meta: 'textScore' } }
    ).lean().exec();
    const artists = await db.Artist.find(
      { $text: { $search: query } },
      { score: { $meta: 'textScore' } },
    ).lean().exec()
    if (!tracks) {
      return res.status(400).send({ status: 400 })
    }
    let tracksArray = []
    tracks.forEach(track => tracksArray.push({ _id: track._id, name: track.name }));
    console.log(tracks[0].name)
    return res.status(200).send({ status: 200, tracks: tracksArray })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

async function deleteTrack(req, res) {
  const { trackId } = req.params
  const { imagePublicId, audioPublicId } = req.body
  if (!trackId || imagePublicId || audioPublicId) {
    return res.status(404).send({ status: 404 })
  }
  try {
    await deleteCascadeArray(trackId, db.Genre, 'tracks')
    await deleteCascadeArray(trackId, db.Artist, 'tracks')
    await deleteCascadeArray(trackId, db.Album, 'tracks')
    await deleteCascadeArray(trackId, db.Playlist, 'tracks')
    await deleteCascadeUser(trackId, db.User, 'tracks')
    if (imagePublicId) await removeMedia(imagePublicId, 'image')
    if (audioPublicId) await removeMedia(audioPublicId, 'video')
    const trackToDelete = await db.Track.findOneAndDelete({ _id: trackId }).lean()

    if (!trackToDelete) {
      return res.status(400).send({ status: 400 })
    }
    return res.status(200).send({ status: 200 })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

async function getRandomTrack(req, res) {
  try {
    const tracksStored = await db.Track.find().populate('artists').lean().exec()

    if (!tracksStored) {
      return res.status(400).send({ status: 400 })
    }
    const randomTrack = getRandomItem(tracksStored)
    console.log(randomTrack);
    return res.status(200).send({ status: 200, track: randomTrack })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

module.exports = {
  postTrack,
  getTrackById,
  getTracks,
  searchTrack,
  deleteTrack,
  getRandomTrack
}