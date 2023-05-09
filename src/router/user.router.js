const express = require('express')
const User = require('../controllers/user.controller')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api.post('/register-login-user', md_auth.checkJwt, User.registerLoginUser)
api.put('/update-user-settings', md_auth.checkJwt, User.updateUserSettings)
api.put('/update-user-language', md_auth.checkJwt, User.updateUserLanguage)
api.put('/update-user-country', md_auth.checkJwt, User.updateUserCountry)
api.delete('/delete-user', md_auth.checkJwt, User.deleteUser)

module.exports = api;