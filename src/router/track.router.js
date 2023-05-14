const express = require('express')
const controller = require('../controllers/track.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
	.get('/tracks', controller.getTracks)
	.get('/track/:trackId', controller.getTrackById)
	.post('/track', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.postTrack)
	.put('/track/:trackId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.updateTrack)
	.delete('/track/:trackId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.deleteTrack)
	.get('/random-track', controller.getRandomTrack)
	.get('/tracks-liked-by-user/:userId', [md_auth.ensureAuth], controller.getTracksLikedByUserId)
	.get('/like-dislike-track/:trackId/:userId', [md_auth.ensureAuth], controller.likeDislikeTrack)
	.put('/track-image/:trackId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.putTrackImage)
	.put('/track-audio/:trackId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.putTrackAudio)
	.put('/users/:userId/playlists/:playlistId/tracks/:trackId', [md_auth.ensureAuth], controller.putTrackToPlaylist)

module.exports = api;