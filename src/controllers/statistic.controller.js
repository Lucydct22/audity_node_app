const db = require('../models')

async function postStatistic(req, res) {
	const { name } = req.body
	try {
		const newStatistic = new db.Statistic({ name })
		const statistic = await newStatistic.save()
		if (!statistic) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, statistic })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function getStatistics(req, res) {
	try {
		const statisticsStored = await db.Statistic.find()
			.populate('tracksFailed').lean().exec()
		if (!statisticsStored) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200, statistics: statisticsStored })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function reportErroredTrack(req, res) {
	const { trackId } = req.params
	const { name } = req.body
	if (!name) {
		return res.status(404).send({ status: 404 })
	}
	try {
		const addNewReport = await db.Statistic.findOneAndUpdate(
			{ name },
			{ $addToSet: { tracksFailed: [trackId] } }
		).lean().exec()
		if (!addNewReport) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })
	} catch (err) {
		return res.status(500).send({ status: 500, err })
	}
}

async function removeReportErroredTrack(req, res) {
	const { trackId } = req.params
	const { name } = req.body
	try {
		const removeReport = await db.Statistic.findOneAndUpdate(
			{ name },
			{ $pullAll: { tracksFailed: [trackId] } }
		).lean().exec()
		if (!removeReport) {
			return res.status(400).send({ status: 400 })
		}
		return res.status(200).send({ status: 200 })
	} catch (err) {
		return res.status(500).send({ status: 500, error: err })
	}
}

async function updateTotalTracksPlayed(name) {
	await db.Statistic.findOneAndUpdate(
		{ name },
		{ $inc: { totalTracksPlayed: 1 } }
	).lean().exec()
}

async function updateTotalLikes(name) {
	await db.Statistic.findOneAndUpdate(
		{ name },
		{ $inc: { totalLikes: 1 } }
	).lean().exec()
}

module.exports = {
	postStatistic,
	getStatistics,
	reportErroredTrack,
	removeReportErroredTrack,
	updateTotalTracksPlayed,
	updateTotalLikes
}