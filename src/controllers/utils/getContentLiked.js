async function getContentLiked(res, userId, Model) {
	if (!userId) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const contentStored =
			await Model.find({ likedBy: { $in: [userId] } }).lean().exec()
		if (!contentStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, content: contentStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

module.exports = {
	getContentLiked
}