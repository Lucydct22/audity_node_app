const express = require('express')
const controller = require('../controllers/playlist.controllers')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
	.post('/playlist', md_auth.ensureAuth, controller.postPlaylist)
	.get('/playlists', controller.getPlaylists)
	.get('/playlist/:id', controller.getPlaylistById)
	.put('/update-playlist/:id', md_auth.ensureAuth, controller.updatePlaylist)
	.delete('/playlist/:playlistId', md_auth.ensureAuth, controller.deletePlaylist)
	.get('/playlists-liked-user/:userId', [md_auth.ensureAuth], controller.getPlaylistsLikedByUserId)
	.get('/like-dislike-playlist/:playlistId/:userId', [md_auth.ensureAuth], controller.likeDislikePlaylist)

module.exports = api;