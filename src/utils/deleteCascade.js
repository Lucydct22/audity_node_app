const db = require('../models')

async function deleteGenresCascade(paramsId, Model) {
	const modelStored = await Model.find().lean().exec()
	modelStored.forEach(model => {
		model.genres.forEach(async genre => {
			if (genre.toString() == paramsId.toString()) {
				await Model.findOneAndUpdate(
					{ _id: model._id },
					{ $pullAll: { genres: [genre] } }
				).lean().exec()
			}
		});
	});
}

async function deleteArtistCascade(paramsId, Model) {
	const modelStored = await Model.find().lean().exec()
	modelStored.forEach(model => {
		model.artists.forEach(async artist => {
			if (artist.toString() == paramsId.toString()) {
				await Model.findOneAndUpdate(
					{ _id: model._id },
					{ $pullAll: { artists: [artist] } }
				).lean().exec()
			}
		});
	});
}

module.exports = {
	deleteGenresCascade,
	deleteArtistCascade
}