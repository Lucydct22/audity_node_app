const express = require('express')
const Artist = require('../controllers/artist.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

// api.post('/artist', md_auth.checkJwt, Artist.postArtist)
api.post('/artist', md_auth.checkJwt, Artist.postArtist)
api.get('/artists', Artist.getArtists)
api.get('/artist/:artistId', Artist.getArtistById)

module.exports = api;