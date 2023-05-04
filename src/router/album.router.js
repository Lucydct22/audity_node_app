const express = require('express')
const album = require('../controllers/album.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

/*api.get('/albums', album.getAlbums)
api.get('/album/:albumId', album.getAlbumById)

api.post('/albums', md_auth.ensureAuth, album.createAlbum)

api.get('/albums/all', album.getAllAlbums)

api.post('/albums/like', md_auth.ensureAuth, album.likeAlbum)*/

module.exports = api;