const db = require('../models')
// const ManagementClient = require('auth0').ManagementClient

async function registerLoginUser(req, res) {
	const { user } = req.body
	try {
		const userStored = await db.User.findOne({ userId: user.sub.toString() }).lean().exec()

		if (!userStored) {
			const newUser = new db.User({
				userId: user.sub,
				name: user.given_name || user.nickname,
				lastname: user.family_name || '',
				nickname: user.nickname || '',
				email: user.email,
				dateOfBirth: user.dateOfBirth || '',
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
	const user = req.auth
	const { name, lastname, nickname, dateOfBirth } = req.body

	try {
		const userToUpdated = await db.User.findOneAndUpdate(
			{ userId: user.payload.sub.toString() },
			{ name, lastname, nickname, dateOfBirth }
		).lean().exec()

		if (!userToUpdated) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })

	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function updateUserLanguage(req, res) {
	const user = req.auth
	const { language } = req.body

	try {
		const userToUpdated = await db.User.findOneAndUpdate(
			{ userId: user.payload.sub.toString() },
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
		const userToUpdated = await db.User.findOneAndUpdate(
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

async function getUserRole(req, res) {
	try {
		const userStored = await db.User.findOne(
			{ userId: req.auth.payload.sub }
		).lean().exec()

		if (!userStored) {
			return res.status(400).send({ status: 400, error: 'User not found' })
		}
		return res.status(200).send({ status: 200, userRole: userStored.role })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function deleteUser(req, res) {
	const { userId } = req.auth
	//const { user_id } = req.auth0
	if (!id) {
		return res.status(404).send({ status: 404 })
	}
	try {
		await deleteCascadeArray(userId.toString(), db.Artist, 'likedBy')
		await deleteCascadeArray(userId.toString(), db.Album, 'likedBy')
		await deleteCascadeArray(userId.toString(), db.Playlist, 'likedBy')
		await deleteCascadeArray(userId.toString(), db.Track, 'likedBy')
		const userToDelete = await db.User.findOneAndDelete(
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
	getUserRole,
	deleteUser,
}