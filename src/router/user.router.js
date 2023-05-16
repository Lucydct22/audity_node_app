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
  .put('/user-role/:userId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.updateUserRole)
  .delete('/delete-user/:userId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.deleteUser)
  .put('/update-user-info', md_auth.ensureAuth, controller.updateUserInfo)
  .get('/users', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.getUsers)

module.exports = api;