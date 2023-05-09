const db = require('../models')

async function migrateCascadeArray(items, Model, dbFieldName, documentId) {
	items.forEach(async modelId => {
		await Model.findOneAndUpdate(
			{ _id: modelId },
			{ $push: { [dbFieldName]: documentId } }
		).lean().exec()
	});
}

async function migrateCascadeObject(item, Model, dbFieldName, documentId) {
	await Model.findOneAndUpdate(
		{ _id: item },
		{ $push: { [dbFieldName]: documentId } }
	).lean().exec()
}

async function deleteCascadeArray(paramsId, Model, dbFieldName) {
	const modelStored = await Model.find().lean().exec()
	modelStored.forEach(model => {
		model[dbFieldName].forEach(async dbField => {
			if (dbField.toString() == paramsId.toString()) {
				await Model.findOneAndUpdate(
					{ _id: model._id },
					{ $pullAll: { [dbFieldName]: [dbField] } }
				).lean().exec()
			}
		});
	});
}

async function deleteCascadeObject(paramsId, Model, dbFieldName) {
	const modelStored = await Model.find().lean().exec()
	modelStored.forEach(async model => {
		if (model._id.toString() == paramsId.toString()) {
			await Model.findOneAndUpdate(
				{ _id: model._id },
				{ $pullAll: { [dbFieldName]: [dbField] } }
			).lean().exec()
		}
	});
}

async function deleteCascadeUser(paramsId, Model, dbFieldName) {
	const modelStored = await Model.find().lean().exec()
	modelStored.forEach(model => {
		model.likesTo[dbFieldName].forEach(async dbField => {
			if (dbField.toString() == paramsId.toString()) {
				await Model.findOneAndUpdate(
					{ _id: model._id },
					{ $pullAll: { [`likesTo.${dbFieldName}`]: [dbField] } }
				).lean().exec()
			}
		});
	});
}

module.exports = {
	migrateCascadeArray,
	migrateCascadeObject,
	deleteCascadeArray,
	deleteCascadeUser,
	deleteCascadeObject
}