const db = require('../models')
const fs = require('fs-extra')
const { uploadImage, uploadAudio, removeMedia } = require('../utils/cloudinary')
const { migrateCascadeArray, migrateCascadeObject, deleteCascadeArray } = require('../utils/dbCascade')
const { getRandomItem } = require('../utils/getRamdomItem')
const { getContentLiked } = require('./utils/getContentLiked')
const { likeDislike } = require('./utils/likeDislike')
const cloudinaryConfig = require('../config/config').cloudinary

async function postTrack(req, res) {
  const { name, genres, artists, album, playlists } = req.body
  if (!name) {
    return res.status(404).send({ status: 404 })
  }
  try {
    const track = new db.Track()
    track.name = name
    if (genres) { track.genres = genres }
    if (artists) { track.artists = artists }
    if (album) { track.album = album }
    if (playlists) { track.playlists = playlists }
    const trackSaved = await track.save()
    if (!trackSaved) {
      return res.status(400).send({ status: 400 })
    }
    genres && await migrateCascadeArray(genres, db.Genre, 'tracks', trackSaved._id)
    artists && await migrateCascadeArray(artists, db.Artist, 'tracks', trackSaved._id)
    album && await migrateCascadeObject(album, db.Album, 'tracks', trackSaved._id)
    playlists && await migrateCascadeArray(playlists, db.Track, 'tracks', trackSaved._id)
    return res.status(200).send({ status: 200, track: trackSaved })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

async function getTracks(req, res) {
  try {
    const tracksStored = await db.Track.find()
    .populate('artists')
    .populate('album')
    .lean().exec()

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
  if (!trackId) {
    return res.status(404).send({ status: 404 })
  }
  try {
    const tracksStored =
      await db.Track.findOne({ _id: trackId })
        .populate('genres')
        .populate('artists')
        .populate('album')
        .populate('likedBy').exec()

    if (!tracksStored) {
      return res.status(400).send({ status: 400 })
    }
    return res.status(200).send({ status: 200, track: tracksStored })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

async function deleteTrack(req, res) {
  const { trackId } = req.params
  const { imagePublicId, audioPublicId } = req.body
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
    return res.status(200).send({ status: 200, track: randomTrack })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

async function getTracksLikedByUserId(req, res) {
  const { userId } = req.params
  await getContentLiked(res, userId, db.Track)
}

async function likeDislikeTrack(req, res) {
  const { trackId, userId } = req.params
  await likeDislike(res, db.Track, trackId, userId)
}

async function updateTrack(req, res) {
  const { trackId } = req.params
  const { name, genres, album, artists, playlists, imagePublicId, audioPublicId } = req.body
  try {
    if (imagePublicId) await removeMedia(imagePublicId, 'image')
    if (audioPublicId) await removeMedia(audioPublicId, 'video')
    const trackToUpdate = await db.Track.findByIdAndUpdate({ _id: trackId }, {
      name, genres, album, artists, playlists
    }).lean().exec()
    if (!trackToUpdate) {
      return res.status(400).send({ status: 400 })
    }
    genres && await migrateCascadeArray(genres, db.Genre, 'tracks', trackToUpdate._id)
    album && await migrateCascadeObject(album, db.Album, 'tracks', trackToUpdate._id)
    artists && await migrateCascadeArray(artists, db.Artist, 'tracks', trackToUpdate._id)
    playlists && await migrateCascadeArray(playlists, db.Playlist, 'tracks', trackToUpdate._id)
    return res.status(200).send({ status: 200 })
  } catch (err) {
    return res.status(500).send({ status: 500 })
  }
}

async function putTrackImage(req, res) {
  const { trackId } = req.params
  if (!req.files) {
    return res.status(404).send({ status: 404 })
  }
  try {
    if (req.files.image) {
      const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/trackImage`, 250, 250)
      const trackStored = await db.Track.findOneAndUpdate(
        { _id: trackId },
        {
          imageUrl: imageUploaded.url,
          imagePublicId: imageUploaded.public_id
        },
        { returnOriginal: false }
      ).lean().exec()
      if (!trackStored) {
        return res.status(400).send({ status: 400 })
      }
      await fs.unlink(req.files.image.tempFilePath)
      return res.status(200).send({ status: 200, track: trackStored })
    }
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}


async function putTrackAudio(req, res) {
  const { trackId } = req.params
  if (!req.files) {
    return res.status(404).send({ status: 404 })
  }
  try {
    if (req.files.audio) {
      const audioUploaded = await uploadAudio(req.files.audio.tempFilePath, `${cloudinaryConfig.folder}/trackAudio`)
      const trackStored = await db.Track.findOneAndUpdate(
        { _id: trackId },
        {
          audioUrl: audioUploaded.url,
          audioPublicId: audioUploaded.public_id
        },
        { returnOriginal: false }
      ).lean().exec()
      if (!trackStored) {
        return res.status(400).send({ status: 400 })
      }
      await fs.unlink(req.files.audio.tempFilePath)
      return res.status(200).send({ status: 200, track: trackStored })
    }
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

module.exports = {
  postTrack,
  getTrackById,
  getTracks,
  deleteTrack,
  getRandomTrack,
  getTracksLikedByUserId,
  likeDislikeTrack,
  putTrackImage,
  putTrackAudio,
  updateTrack
}