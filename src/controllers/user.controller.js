const User = require('../models/user.model')

async function registerLoginUser(req, res) {
	const { user } = req.body
	try {
		const userStored = await User.findOne({ userId: user.sub.toString() }).lean().exec()
		
		if (!userStored) {
			const newUser = new User({
				userId: user.sub,
				name: user.given_name || user.nickname,
				lastname: user.family_name || '',
				nickname: user.nickname || '',
				email: user.email,
				language: user.locale || 'en',
				role: 'user'
			})

			try {
				const userSaved = await newUser.save()
				return res.status(200).send({ status: 200, user: userSaved })
			} catch (err) {
				if (err.code === 11000) {
					return res.status(501).send({ status: 501, err: err, message: 'El email ya existe' })
				}
				return res.status(500).send({ status: 500, error: err })
			}
		} else {
			return res.status(201).send({ status: 201, user: userStored })
		}
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function updateUserSettings(req, res) {
	const { userId } = req.body
	try {
		const userToUpdated = await User.findOneAndUpdate({ userId: userId.toString() }).lean().exec()
		const userUpdated = await userToUpdated.save()

		
    return res.status(200).send({ status: 200, user: userUpdated })
	
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	registerLoginUser,
	updateUserSettings
}