const express = require('express')
const Genre = require('../controllers/genre.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.get('/genres', md_auth.checkJwt, Genre.getGenres)
api.get('/genre/:id', md_auth.checkJwt, Genre.getGenreById)
api.post('/genre', md_auth.checkJwt, Genre.postGenre)
api.delete('/genre/:id', md_auth.checkJwt, Genre.deleteGenre)
api.put('/genre/:id', md_auth.checkJwt, Genre.updateGenre)
// 

module.exports = api;