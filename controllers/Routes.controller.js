const { Route } = require("../models");

const {
  showAllDocuments,
  addNewDocument,
  updateById,
  deleteById,
} = require("../helpers/dbOperations");

const showAllRoutes = (req, res) => {
  showAllDocuments(res, "All Routes List", Route);
};

const addNewRoute = (req, res) => {
  const { body } = req;
  // console.log(route);
  addNewDocument(res, "Route Added", Route, body);
};

const updateRoute = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  // console.log(route, id);
  updateById(res, "Route Updated", Route, body, id);
};

const deleteRoute = (req, res) => {
  const {
    params: { id },
  } = req;
  // console.log(id);
  deleteById(res, "Route Deleted", Route, id);
};

module.exports = { showAllRoutes, addNewRoute, updateRoute, deleteRoute };