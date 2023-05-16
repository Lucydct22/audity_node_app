const express = require('express')
const controller = require('../controllers/artist.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
  .post('/artist', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.postArtist)
  .get('/artist/:artistId', controller.getArtistById)
  .put('/artist/:artistId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.updateArtist)
  .delete('/artist/:artistId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.deleteArtist)
  .get('/artists', controller.getArtists)
  .get('/artists', controller.getArtists)
  .get('/artists-liked-by-user/:userId', [md_auth.ensureAuth], controller.getArtistsLikedByUserId)
  .get('/like-dislike-artist/:artistId/:userId', [md_auth.ensureAuth], controller.likeDislikeArtist)
  .put('/artist-image/:artistId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.putArtistImage)

module.exports = api;