const express = require('express')
const Playlist = require('../controllers/playlist.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.get('/playlists', Playlist.getPlaylists)
api.get('/playlist/:playlistId', Playlist.getPlaylistById)

module.exports = api;