const express = require('express')
const User = require('../controllers/user.controller')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.post('/register-login-user', md_auth.checkJwt, User.registerLoginUser)
api.put('/update-user/:userId', md_auth.checkJwt, User.updateUserSettings)
api.put('/update-user-language', md_auth.checkJwt, User.updateUserLanguage)
api.delete('/delete-user/:userId', md_auth.checkJwt, User.deleteUser)

module.exports = api;