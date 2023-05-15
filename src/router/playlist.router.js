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
	.get('/playlists-liked-by-user/:userId', [md_auth.ensureAuth], controller.getPlaylistsLikedByUserId)
	.get('/like-dislike-playlist/:playlistId/:userId', [md_auth.ensureAuth], controller.likeDislikePlaylist)
	.get('/playlists-by-user/:userId', [md_auth.ensureAuth], controller.getPlaylistsByUser)
	.put('/playlist-add-track/playlists/:playlistId/tracks/:trackId', [md_auth.ensureAuth], controller.putTrackToPlaylist)
	.delete('/delete-track-from-playlist/playlists/:playlistId/tracks/:trackId', [md_auth.ensureAuth], controller.deleteTrackFromPlaylist)
	.post('/playlist-admin', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.postPlaylistAdmin)
	.put('/playlist-image/:playlistId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.updatePlaylistImage)
	.put('/playlist-admin/:playlistId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.updatePlaylistAdmin)

module.exports = api;