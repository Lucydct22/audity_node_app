const express = require('express')
const Artist = require('../controllers/artist.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.get('/artists', md_auth.checkJwt, Artist.getArtists)
// api.post('/artist', md_auth.checkJwt, Artist.postArtist)
api.post('/artist', md_auth.checkJwt, Artist.postArtist)

module.exports = api;