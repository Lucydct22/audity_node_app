const Track = require('../models/track.model')
const fs = require('fs-extra')
const { uploadImage } = require('../utils/cloudinary')
const { uploadAudio } = require('../utils/cloudinary')
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

  try {
    const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/trackImage`, 250, 250)
    track.imageUrl = imageUploaded.url
    if (req.files?.audio) {
      const audioUploaded = await uploadAudio(req.files.audio.tempFilePath, req.files?.audio.name, `${cloudinaryConfig.folder}/trackAudio`)
      track.audioUrl = audioUploaded.url
    }

    const trackSaved = await track.save()
    if (!trackSaved) {
      return res.status(400).send({ status: 400 })
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

module.exports = {
  postTrack,
  getTrackById,
  getTracks,
}