const express = require('express')
const controller = require('../controllers/track.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
	.get('/tracks', controller.getTracks)
	.get('/track/:trackId', controller.getTrackById)
	.post('/track', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.postTrack)
	.post('/track-private', [md_auth.ensureAuth], controller.postPrivateTrack)
	.put('/track/:trackId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.updateTrack)
	.delete('/track/:trackId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.deleteTrack)
	.get('/random-track', controller.getRandomTrack)
	.get('/tracks-liked-by-user/:userId', [md_auth.ensureAuth], controller.getTracksLikedByUserId)
	.get('/like-dislike-track/:trackId/:userId', [md_auth.ensureAuth], controller.likeDislikeTrack)
	.put('/track-image/:trackId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.putTrackImage)
	.put('/track-audio/:trackId', md_auth.ensureAuth, controller.putTrackAudio) // md_auth.ensureAdminAuth
	.get('/tracks-private/:userId', md_auth.ensureAuth, controller.getPrivateTracks)

module.exports = api;