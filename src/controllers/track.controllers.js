const db = require('../models')
const fs = require('fs-extra')
const { uploadImage, uploadAudio, removeMedia } = require('../utils/cloudinary')
const { migrateCascadeArray, migrateCascadeObject, deleteCascadeArray, deleteCascadeObject, deleteCascade } = require('../utils/dbCascade')
const { getRandomItem } = require('../utils/getRamdomItem')
const { getContentLiked } = require('./utils/getContentLiked')
const { likeDislike } = require('./utils/likeDislike')
const cloudinaryConfig = require('../config/config').cloudinary
const { deleteCascadeLikedByUser } = require('../utils/dbCascade')

async function postTrack(req, res) {
  const { name, genres, artists, album, playlists } = req.body
  if (!name) {
    return res.status(404).send({ status: 404 })
  }
  try {
    const track = new db.Track()
    track.name = name
    track.publicAccessible = true
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
    playlists && await migrateCascadeArray(playlists, db.Playlist, 'tracks', trackSaved._id)
    return res.status(200).send({ status: 200, track: trackSaved })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

async function postPrivateTrack(req, res) {
  const { userId, name, artists } = req.body
  if (!name) {
    return res.status(404).send({ status: 404 })
  }
  try {
    const track = new db.Track()
    track.userId = userId
    track.uploadByUser.name = name
    track.publicAccessible = false
    if (artists) { track.uploadByUser.artists = artists }
    const trackSaved = await track.save()
    if (!trackSaved) {
      return res.status(400).send({ status: 400 })
    }
    return res.status(200).send({ status: 200, track: trackSaved })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}

async function getTracks(req, res) {
  try {
    const tracksStored = await db.Track.find({ publicAccessible: true })
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

async function getPrivateTracks(req, res) {
  const { userId } = req.params
  try {
    const tracksStored = await db.Track.find({ userId: userId }).lean().exec()
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
  try {
    const findTrack = await db.Track.findOne({ _id: trackId }).lean().exec()
    if (!findTrack) {
      return res.status(404).send({ status: 404 })
    }
    if (findTrack.imagePublicId) await removeMedia(findTrack.imagePublicId, 'image')
    if (findTrack.audioPublicId) await removeMedia(findTrack.audioPublicId, 'video')
    await deleteCascadeArray(trackId, db.Genre, 'tracks')
    await deleteCascadeArray(trackId, db.Artist, 'tracks')
    await deleteCascadeArray(trackId, db.Album, 'tracks')
    await deleteCascadeArray(trackId, db.Playlist, 'tracks')
    await deleteCascadeLikedByUser(trackId, db.User, 'tracks')
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
  return await getContentLiked(res, userId, db.Track)
}

async function likeDislikeTrack(req, res) {
  const { trackId, userId } = req.params
  return await likeDislike(res, db.Track, trackId, userId, 'tracks')
}

async function updateTrack(req, res) {
  const { trackId } = req.params
  const { name, genres, album, artists, playlists, duration } = req.body
  let tracksToRemoveIntoGenres = []
  let tracksToRemoveIntoArtists = []
  let tracksToRemoveIntoPlaylists = []
  let trackToRemoveIntoAlbum = ''
  try {
    const findTrack = await db.Track.findOne({ _id: trackId }).lean().exec()
    if (!findTrack) {
      return res.status(404).send({ status: 404 })
    }
    if (album) {
      trackToRemoveIntoAlbum = findTrack.album
    }
    findTrack.genres?.forEach(genre => {
      if (genres && !genres.includes(genre.toString())) {
        tracksToRemoveIntoGenres.push(genre)
      }
    });
    findTrack.artists?.forEach(artist => {
      if (artists && !artists.includes(artist.toString())) {
        tracksToRemoveIntoArtists.push(artist)
      }
    });
    findTrack.playlists?.forEach(playlist => {
      if (playlists && !playlists.includes(playlist.toString())) {
        tracksToRemoveIntoPlaylists.push(playlist)
      }
    });
    const trackToUpdate = await db.Track.findByIdAndUpdate(
      { _id: trackId },
      { name, genres, album, artists, playlists, duration },
      { returnOriginal: false }
    ).lean().exec()
    if (!trackToUpdate) {
      return res.status(400).send({ status: 400 })
    }
    genres && await migrateCascadeArray(genres, db.Genre, 'tracks', trackToUpdate._id)
    album && await migrateCascadeObject(album, db.Album, 'tracks', trackToUpdate._id)
    artists && await migrateCascadeArray(artists, db.Artist, 'tracks', trackToUpdate._id)
    playlists && await migrateCascadeArray(playlists, db.Playlist, 'tracks', trackToUpdate._id)
    return res.status(200).send({ status: 200, track: trackToUpdate })
  } catch (err) {
    return res.status(500).send({ status: 500 })
  } finally {
    if (album) {
      return await deleteCascade(db.Album, trackToRemoveIntoAlbum, 'tracks', trackId)
    }
    tracksToRemoveIntoGenres?.forEach(async genreId => {
      return await deleteCascade(db.Genre, genreId, 'tracks', trackId)
    });
    tracksToRemoveIntoArtists?.forEach(async artistId => {
      return await deleteCascade(db.Artist, artistId, 'tracks', trackId)
    });
    tracksToRemoveIntoPlaylists?.forEach(async playlistId => {
      return await deleteCascade(db.Playlist, playlistId, 'tracks', trackId)
    });
  }
}

async function putTrackImage(req, res) {
  const { trackId } = req.params
  if (!req.files) {
    return res.status(404).send({ status: 404 })
  }
  try {
    const findTrack = await db.Track.findOne({ _id: trackId }).lean().exec()
    if (!findTrack) {
      return res.status(404).send({ status: 404 })
    }
    if (findTrack.imagePublicId) await removeMedia(findTrack.imagePublicId, 'image')
    const imageUploaded = await uploadImage(req.files.image.tempFilePath, `${cloudinaryConfig.folder}/trackImage`, 250, 250)
    if (!imageUploaded) {
      return res.status(402).send({ status: 402 })
    }
    const trackStored = await db.Track.findOneAndUpdate(
      { _id: trackId },
      {
        imageUrl: imageUploaded.secure_url,
        imagePublicId: imageUploaded.public_id
      },
      { returnOriginal: false }
    ).lean().exec()
    if (!trackStored) {
      return res.status(400).send({ status: 400 })
    }
    return res.status(200).send({ status: 200, track: trackStored })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  } finally {
    await fs.unlink(req.files.image.tempFilePath)
  }
}

async function putTrackAudio(req, res) {
  const { trackId } = req.params
  if (!req.files) {
    return res.status(404).send({ status: 404 })
  }
  try {
    const findTrack = await db.Track.findOne({ _id: trackId }).lean().exec()
    if (!findTrack) {
      return res.status(404).send({ status: 404 })
    }
    if (findTrack.audioPublicId) await removeMedia(findTrack.audioPublicId, 'video')
    const audioUploaded = await uploadAudio(req.files.audio.tempFilePath, `${cloudinaryConfig.folder}/trackAudio`)
    if (!audioUploaded) {
      return res.status(402).send({ status: 402 })
    }
    const trackStored = await db.Track.findOneAndUpdate(
      { _id: trackId },
      {
        audioUrl: audioUploaded.secure_url,
        audioPublicId: audioUploaded.public_id
      },
      { returnOriginal: false }
    ).lean().exec()
    if (!trackStored) {
      return res.status(400).send({ status: 400 })
    }
    return res.status(200).send({ status: 200, track: trackStored })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  } finally {
    await fs.unlink(req.files.audio.tempFilePath)
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
  updateTrack,
  postPrivateTrack,
  getPrivateTracks
}