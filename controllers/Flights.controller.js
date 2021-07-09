const { Flight } = require("../models");

const {
  showAllDocuments,
  addNewDocument,
  updateById,
  deleteById,
} = require("../helpers/dbOperations");

const showAllFlights = (req, res) => {
  showAllDocuments(res, "All Flights List", Flight);
};

const addNewFlight = (req, res) => {
  const { body } = req;
  // console.log(route);
  addNewDocument(res, "Flight Added", Flight, body);
};

const updateFlight = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  // console.log(route, id);
  updateById(res, "Flight Updated", Flight, body, id);
};

const deleteFlight = (req, res) => {
  const {
    params: { id },
  } = req;
  // console.log(id);
  deleteById(res, "Flight Deleted", Flight, id);
};

module.exports = { showAllFlights, addNewFlight, updateFlight, deleteFlight };