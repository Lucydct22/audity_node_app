const express = require('express')
const controller = require('../controllers/genre.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
  .get('/genres', controller.getGenres)
  .get('/genre/:id', controller.getGenreById)
  .post('/genre', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.postGenre)
  .put('/update-genre/:id', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.updateGenre)
  .delete('/delete-genre/:id', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.deleteGenre)

module.exports = api;