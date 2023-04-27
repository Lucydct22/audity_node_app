const express = require('express')
const User = require('../controllers/user.controller')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.get('/init-get-user', md_auth.checkJwt, User.initGetUser)

module.exports = api;