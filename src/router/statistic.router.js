const express = require('express')
const controller = require('../controllers/statistic.controller')
const md_auth = require('../middlewares/auth.middleware')
const api = express.Router()
api
  .post('/statistic', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.postStatistic)
  .put('/report-errored-track/:trackId', controller.reportErroredTrack)
  .put('/remove-report-errored-track/:trackId', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.removeReportErroredTrack)
  .put('/update-total-tracks-played', controller.updateTotalTracksPlayed)
  .get('/statistics', [md_auth.ensureAuth, md_auth.ensureAdminAuth], controller.getStatistics)

module.exports = api;