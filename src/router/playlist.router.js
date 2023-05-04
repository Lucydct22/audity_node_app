const express = require('express')
const Playlist = require('../controllers/playlist.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.get('/playlists', Playlist.getPlaylists)
api.get('/playlist/:id', md_auth.checkJwt, Playlist.getPlaylistById)
api.delete('/delete-playlist/:id', md_auth.checkJwt, Playlist.deletePlaylist)
api.put('/update-playlist/:id', md_auth.checkJwt, Playlist.updatePlaylist)
api.post('/create-playlist', md_auth.checkJwt, Playlist.postPlaylist)
api.get('/playlist/:playlistId', Playlist.getPlaylistById)

module.exports = api;