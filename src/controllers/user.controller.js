const User = require('../models/user.model')

async function registerLoginUser(req, res) {
	const { userId } = req.body
	try {
		const userStored = await User.findOne({ userId: userId.toString() }).lean().exec()

		if (!userStored) {
			const userAuth0 = req.auth
			const user = new User({
				userId: userId,
				name: userAuth0.given_name || userAuth0.nickname,
				lastname: userAuth0.family_name || '',
				nickname: userAuth0.nickname || '',
				email: userAuth0.email,
				language: userAuth0.locale || 'en'
			})

			try {
				const userSaved = await user.save()
				return res.status(200).send({ status: 200, user: userSaved })
			} catch (err) {
				return res.status(500).send({ status: 500, error: err })
			}
		} else {
			return res.status(201).send({ status: 201, user: userStored })
		}
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	registerLoginUser
}