const express = require('express')
const controller = require('../controllers/playlist.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
	.post('/playlist', md_auth.checkJwt, controller.postPlaylist)
	.get('/playlists', controller.getPlaylists)
	.get('/playlist/:id', md_auth.checkJwt, controller.getPlaylistById)
	.put('/update-playlist/:id', md_auth.checkJwt, controller.updatePlaylist)
	.get('/playlist/:playlistId', controller.getPlaylistById)
	.delete('/playlist/:playlistId', md_auth.checkJwt, controller.deletePlaylist)

module.exports = api;