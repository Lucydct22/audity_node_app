const express = require('express')
const controller = require('../controllers/album.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
  .post('/album', md_auth.checkJwt, controller.postAlbum)
  .get('/albums', controller.getAlbums)
  .get('/album/:albumId', controller.getAlbumById)
  .delete('/album/:albumId', md_auth.checkJwt, controller.deleteAlbum)

module.exports = api;