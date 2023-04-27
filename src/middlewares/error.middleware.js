const getError = async (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send({ status: 401, message: 'No estás autorizado' })
  }

  if (err.code === 'invalid_token') {
    return res.status(401).send({ status: 401, message: 'El token ha expirado' })
  }
}

module.exports = getError