const db = require('../models')

async function migrateCascadeArray(items, Model, dbFieldName, documentId) {
	await items.forEach(async modelId => {
		await Model.findOneAndUpdate(
			{ _id: modelId },
			{ $addToSet: { [dbFieldName]: documentId } }
		).lean().exec()
	});
}

async function migrateCascadeObject(itemId, Model, dbFieldName, documentId) {
	await Model.findOneAndUpdate(
		{ _id: itemId },
		{ $addToSet: { [dbFieldName]: documentId } }
	).lean().exec()
}

async function migrateMyLibraryUser(userId, paramsId, dbFieldName) {
	await db.User.findByIdAndUpdate(
		{ _id: userId.toString() },
		{ $addToSet: { [`myLibrary.${dbFieldName}`]: [paramsId.toString()] } }
	).lean().exec()
}

async function migrateLikesToIntoUser(userId, paramsId, dbFieldName) {
	await db.User.findByIdAndUpdate(
		{ _id: userId.toString() },
		{ $addToSet: { [`likesTo.${dbFieldName}`]: [paramsId.toString()] } }
	).lean().exec()
}

async function deleteCascade(Model, modelToUpdate, dbFieldName, idToDelete) {
	return await Model.findOneAndUpdate(
		{ _id: modelToUpdate },
		{ $pullAll: { [dbFieldName]: [idToDelete] } }
	).lean().exec()
}

async function deleteCascadeArray(paramsId, Model, dbFieldName) {
	const modelStored = await Model.find().lean().exec()
	await modelStored.forEach(model => {
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

async function deleteCascadeObject(paramsId, Model, dbFieldName, dbField) {
  const modelStored = await Model.find().lean().exec();
  await Promise.all(
    modelStored.map(async (model) => {
      if (model._id.toString() === paramsId.toString()) {
        await Model.findOneAndUpdate(
          { _id: model._id },
          { $pullAll: { [dbFieldName]: [dbField] } }
        ).lean().exec();
      }
    })
  );
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

async function deleteLikesToIntoUser(userId, paramsId, dbFieldName) {
	await db.User.findByIdAndUpdate(
		{ _id: userId.toString() },
		{ $pullAll: { [`likesTo.${dbFieldName}`]: [paramsId.toString()] } }
	).lean().exec()
}

module.exports = {
	migrateCascadeArray,
	migrateCascadeObject,
	deleteCascadeArray,
	deleteCascadeLikedByUser,
	deleteCascadeObject,
	migrateMyLibraryUser,
	deleteMyLibraryUser,
	migrateLikesToIntoUser,
	deleteLikesToIntoUser,
	deleteCascade
}