const express = require('express')
const controller = require('../controllers/user.controller')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()

api
  .post('/register-login-user', md_auth.ensureAuth, controller.registerLoginUser)
  .put('/update-user-settings', md_auth.ensureAuth, controller.updateUserSettings)
  .put('/update-user-language', md_auth.ensureAuth, controller.updateUserLanguage)
  .put('/update-user-country', md_auth.ensureAuth, controller.updateUserCountry)
  .get('/user-role', md_auth.ensureAuth, controller.getUserRole)
  .delete('/delete-user', md_auth.ensureAuth, controller.deleteUser)

module.exports = api;