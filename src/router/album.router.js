const express = require('express')
const controller = require('../controllers/album.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
  .post('/album', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.postAlbum)
  .get('/albums', controller.getAlbums)
  .get('/album/:albumId', controller.getAlbumById)
  .delete('/album/:albumId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.deleteAlbum)
  .get('/albums-liked-by-user/:userId', [md_auth.ensureAuth], controller.getAlbumsLikedByUserId)
  .get('/like-dislike-album/:albumId/:userId', [md_auth.ensureAuth], controller.likeDislikeAlbum)
  .put('/album-image/:albumId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.putAlbumImage)
  .put('/album/:albumId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.updateAlbum)

module.exports = api;