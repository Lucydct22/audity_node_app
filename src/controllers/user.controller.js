const User = require('../models/user.model')
// const ManagementClient = require('auth0').ManagementClient

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
				language: user.locale || 'English',
				country: user.country || 'Spain',
				role: 'user',
				picture: user.picture
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
	const { userId } = req.params
	//const data = req.body
	const { nickname, dateOfBirth, country } = req.body

	try {
		const userToUpdated = await User.findOneAndUpdate(
			{ _id: userId.toString() },
			//data, 
			{ nickname, dateOfBirth, country },
			{ returnOriginal: false }
		).lean().exec()

		if (!userToUpdated) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send(
			{ status: 200 }
		)

	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function updateUserLanguage(req, res) {
	const user = req.auth
	//const data = req.body
	const { language } = req.body
	console.log(user.payload.sub);

	try {
		const userToUpdated = await User.findOneAndUpdate(
			{ userId: user.payload.sub.toString() },
			//data, 
			{ language }
		).lean().exec()

		if (!userToUpdated) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })

	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function updateUserCountry(req, res) {
	const user = req.auth
	const { country } = req.body
	
	console.log(user.payload.sub);

	try {
		const userToUpdated = await User.findOneAndUpdate(
			{ userId: user.payload.sub.toString() },
			{ country }
		).lean().exec()

		if (!userToUpdated) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })

	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}




async function deleteUser(req, res) {
	const { userId } = req.params
	//const { user_id } = req.auth0

	try {
		const userToDelete = await User.findOneAndDelete(
			{ _id: userId.toString() }
		).lean().exec()

		if (!userToDelete) {
			return res.status(400).send({ status: 400, error: 'User not found' })
		}

		/*const auth0 = new ManagementClient({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.DEVELOPMENT_AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      scope: 'delete:users',
    });
    await auth0.deleteUser({ user_id: user_id });*/

		return res.status(200).send({ status: 200, user: userToDelete })

	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	registerLoginUser,
	updateUserSettings,
	updateUserLanguage,
	updateUserCountry,
	deleteUser,

}