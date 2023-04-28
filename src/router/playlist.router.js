const express = require('express')
const { postPlaylist } = require('../controllers/playlist.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()


api.post('/playlist', md_auth.checkJwt, postPlaylist)
//api.get('/genres', md_auth.checkJwt, Genre.getGenres)
// api.get('/genre/:id', md_auth.checkJwt, Genre.getGenreById)

// api.put('/genre/:id', md_auth.checkJwt, Genre.putGenre)
// api.delete('/genre/:id', md_auth.checkJwt, Genre.deleteGenre)

module.exports = api;