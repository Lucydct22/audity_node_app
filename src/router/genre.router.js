const express = require('express')
const controller = require('../controllers/genre.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
  .get('/genres', controller.getGenres)
  .get('/genre/:id', md_auth.checkJwt, controller.getGenreById)
  .post('/genre', md_auth.checkJwt, controller.postGenre)
  .put('/update-genre/:id', md_auth.checkJwt, controller.updateGenre)
  .delete('/delete-genre/:id', md_auth.checkJwt, controller.deleteGenre)

module.exports = api;