const { Passenger } = require("../models");

const {
  showAllDocuments,
  addNewDocument,
  updateById,
  deleteById,
} = require("../helpers/dbOperations");

const showAllPassengers = (req, res) => {
  showAllDocuments(res, "Passengers List", Passenger);
};

const addNewPassenger = (req, res) => {
  const { body } = req;
  addNewDocument(res, "Passenger Added", Passenger, body);
};

const updatePassenger = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  updateById(res, "Passenger Updated", Passenger, body, id);
};

const deletePassenger = (req, res) => {
  const {
    params: { id },
  } = req;
  deleteById(res, "Passenger Deleted", Passenger, id);
};

module.exports = {
  showAllPassengers,
  addNewPassenger,
  updatePassenger,
  deletePassenger,
};