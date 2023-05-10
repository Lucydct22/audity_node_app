const { ObjectId } = require("bson");

async function likeDislike(res, Model, contentId, userId) {
	let newModel;
	let haveLike = false
	if (!contentId || !userId) {
		return res.status(404).send({ status: 404 })
	}
	if (userId.length !== 24 || contentId.length !== 24) {
		return res.status(405).send({ status: 405, message: 'userId not valid' })
	}
	try {
		const modelStored =
			await Model.findOne({ _id: contentId }).lean().exec()
		if (!modelStored) {
			return res.status(400).send({ status: 400 })
		}
		newModel = modelStored
		modelStored.likedBy.forEach(async (likeId, index) => {
			if (likeId.toString() === userId.toString()) {
				newModel.likedBy.splice(index, 1)
				haveLike = true
				return
			}
		});
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	} finally {
		if (!haveLike) {
			newModel.likedBy.push(new ObjectId(userId))
		}
		await Model.findOneAndUpdate(
			{ _id: contentId },
			{ likedBy: newModel.likedBy }
		).lean().exec()
		return res.status(200).send({ status: 201, haveLike })
	}
}

module.exports = {
	likeDislike
}