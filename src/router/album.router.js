const express = require('express')
const album = require('../controllers/album.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.get('/albums', md_auth.checkJwt, album.getAlbums)

module.exports = api;