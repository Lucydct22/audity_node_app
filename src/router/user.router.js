const express = require('express')
const User = require('../controllers/user.controller')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.post('/register-login-user', md_auth.checkJwt, User.registerLoginUser)

module.exports = api;