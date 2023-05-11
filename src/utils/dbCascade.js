const db = require('../models')

async function migrateCascadeArray(items, Model, dbFieldName, documentId) {
	items.forEach(async modelId => {
		await Model.findOneAndUpdate(
			{ _id: modelId },
			{ $push: { [dbFieldName]: documentId } }
		).lean().exec()
	});
}

async function migrateCascadeObject(itemId, Model, dbFieldName, documentId) {
	await Model.findOneAndUpdate(
		{ _id: itemId },
		{ $push: { [dbFieldName]: documentId } }
	).lean().exec()
}

async function migrateMyLibraryUser(userId, paramsId, dbFieldName) {
	await db.User.findByIdAndUpdate(
		{ _id: userId.toString() },
		{ $push: { [`myLibrary.${dbFieldName}`]: [paramsId.toString()] } }
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

async function deleteCascadeLikedByUser(paramsId, Model, dbFieldName) {
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

async function deleteMyLibraryUser(userId, paramsId, dbFieldName) {
	await db.User.findByIdAndUpdate(
		{ _id: userId.toString() },
		{ $pullAll: { [`myLibrary.${dbFieldName}`]: [paramsId.toString()] } }
	).lean().exec()
}

module.exports = {
	migrateCascadeArray,
	migrateCascadeObject,
	deleteCascadeArray,
	deleteCascadeLikedByUser,
	deleteCascadeObject,
	migrateMyLibraryUser,
	deleteMyLibraryUser
}