const express = require('express')
const controller = require('../controllers/track.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
	.get('/tracks', controller.getTracks)
	.get('/track/:trackId', controller.getTrackById)
	.post('/track', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.postTrack)
	.get('/search-track/:query', controller.searchTrack)
	.delete('/track/:trackId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.deleteTrack)
	.get('/random-track', controller.getRandomTrack)

module.exports = api;