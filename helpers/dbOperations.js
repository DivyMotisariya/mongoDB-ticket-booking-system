const { successResData, errorRes } = require("./apiResponses");
const validationError = require("./validationError");

/**
 * Show all documents for given `Model`
 * @param res `Object` Response Object
 * @param msg `String` Message to be sent with successful response
 * @param Model `Model` Mongoose Model to find documents from
 * @param filter `Object | null` Filters to apply on find, could be an
 * @param projection `Object | null` If not set, defaults to all objects of the document
 * @param options `Object | null` Options for find query
 */
const showAllDocuments = (
  res,
  msg,
  Model,
  filter = {},
  projection = {},
  options = {}
) => {
  Model.find(filter, projection, options, (err, docs) => {
    if (err) errorRes(res, err);
    else successResData(res, msg, docs);
  });
};

/**
 * Insert new document in the given `Model`
 * @param res `Object` Response Object
 * @param msg `String` Message to be sent with successful response
 * @param Model `Model` Mongoose Model where new document is to be added
 * @param modelDoc `Document` Document to be added
 */
const addNewDocument = (res, msg, Model, modelDoc) => {
  Model.create(modelDoc, (err, docs) => {
    if (err) {
      // err = validationError(err);
      // console.error(err)
      // console.log(err)
      errorRes(res, err);
    } else successResData(res, msg, docs);
  });
};

/**
 * Update document in the given `Model` with given `modelID`
 * @param res `Object` Response Object
 * @param msg `String` Message to be sent with successful response
 * @param Model `Model` Mongoose Model where new document is to be updated
 * @param modelDoc `Document` Document to be updated
 * @param modelID `ObjectId` Document ID
 */
const updateById = (res, msg, Model, modelDoc, modelID) => {
  Model.findByIdAndUpdate(modelID, modelDoc, (err, doc) => {
    if (err) errorRes(res, err);
    else successResData(res, msg, doc);
  });
};

/**
 * Delete document from the given `Model` with given `modelID`
 * @param res `Object` Response Object
 * @param msg `String` Message to be sent with successful response
 * @param Model `Model` Mongoose Model where new document is to be deleted
 * @param modelID `ObjectId` Document ID
 */
const deleteById = (res, msg, Model, modelID) => {
  Model.findByIdAndDelete(modelID, (err, doc) => {
    if (err) errorRes(res, err);
    else successResData(res, msg, doc);
  });
};

module.exports = { showAllDocuments, addNewDocument, updateById, deleteById };