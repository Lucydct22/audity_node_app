const express = require('express')
const track = require('../controllers/track.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.get('/tracks', track.getTracks)
api.get('/track/:trackId', track.getTrackById)
api.post('/track', md_auth.checkJwt, track.postTrack)
api.get('/search-track/:query', track.searchTrack)

// api.get('/track/:id', md_auth.checkJwt, getTrackesById)
// api.put('/genre/:id', md_auth.checkJwt, Genre.putGenre)
// api.delete('/genre/:id', md_auth.checkJwt, Genre.deleteGenre)

module.exports = api;