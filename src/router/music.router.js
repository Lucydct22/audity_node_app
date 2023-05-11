const express = require('express')
const controller = require('../controllers/music.controller')
const api = express.Router()

api
	.get('/search-content/:query', controller.searchContent)

module.exports = api;