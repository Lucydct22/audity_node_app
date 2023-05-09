const { auth0 } = require('../config/config')
const { auth } = require('express-oauth2-jwt-bearer');
const db = require('../models')

exports.ensureAuth = auth({
  audience: auth0.audience,
  issuerBaseURL: auth0.issuer,
  tokenSigningAlg: 'RS256'
});

exports.ensureAdminAuth = async function (req, res, next) {
  const user = await db.User.findOne({ userId: req.auth.payload.sub }).lean().exec()
  if (user.role !== 'admin') {
    return res.status(401).send({ message: "You have no admin permissions." });
  }
  next();
};