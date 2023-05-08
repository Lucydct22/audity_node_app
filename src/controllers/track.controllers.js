const Track = require('../models/track.model')
const fs = require('fs-extra')
const { uploadImage } = require('../utils/cloudinary')
const { uploadAudio } = require('../utils/cloudinary')
const { Artist } = require('../models')
const cloudinaryConfig = require('../config/config').cloudinary

async function postTrack(req, res) {
  const { name, artist, genre, album, duration } = req.body
  const track = new Track({
    name,
    artist,
    audioUrl: '',
    imageUrl: '',
    album,
    genre,
    duration
  })
  if (!req.files?.image || !req.files?.audio) {
    return res.status(400).send({ status: 400 })
  }

  try {
    const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/trackImage`, 250, 250)
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

async function getTrackById(req, res) {
  const { trackId } = req.params
  try {
    const tracksStored =
      await Track.findOne({ _id: trackId })
        .populate('genre')
        .populate('artist')
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
  try {
    const tracks = await Track.find(
      { $text: { $search: query } },
      { score: { $meta: 'textScore' } }
    ).lean().exec();
    const artists = await Artist.find(
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

module.exports = {
  postTrack,
  getTrackById,
  getTracks,
  searchTrack
}