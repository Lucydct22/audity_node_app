const express = require('express')
const { postTrack, getTracks, getTrackesById } = require('../controllers/track.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.get('/tracks', md_auth.checkJwt, getTracks)
api.post('/track', md_auth.checkJwt, postTrack)

// api.get('/track/:id', md_auth.checkJwt, getTrackesById)
// api.put('/genre/:id', md_auth.checkJwt, Genre.putGenre)
// api.delete('/genre/:id', md_auth.checkJwt, Genre.deleteGenre)

module.exports = api;