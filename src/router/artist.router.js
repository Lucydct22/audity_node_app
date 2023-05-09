const express = require('express')
const controller = require('../controllers/artist.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
  .post('/artist', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.postArtist)
  .get('/artists', controller.getArtists)
  .get('/artist/:artistId', controller.getArtistById)
  .delete('/artist/:artistId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.deleteArtist)

module.exports = api;