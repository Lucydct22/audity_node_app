function initGetUser(req, res) {
	const user = req.auth
	res.status(200).send(user)
}

module.exports = {
	initGetUser
}