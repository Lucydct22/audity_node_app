const express = require('express')
const album = require('../controllers/album.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.get('/albums', album.getAlbums)
// api.get('/album/:albumId', album.getAlbumById)
// api.post('/album', md_auth.ensureAuth, album.postAlbum)


module.exports = api;