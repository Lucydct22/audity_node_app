const express = require('express')
const controller = require('../controllers/user.controller')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
  .post('/register-login-user', md_auth.checkJwt, controller.registerLoginUser)
  .put('/update-user-settings', md_auth.checkJwt, controller.updateUserSettings)
  .put('/update-user-language', md_auth.checkJwt, controller.updateUserLanguage)
  .put('/update-user-country', md_auth.checkJwt, controller.updateUserCountry)
  .delete('/delete-user', md_auth.checkJwt, controller.deleteUser)

module.exports = api;