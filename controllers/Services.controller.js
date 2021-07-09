const { Service } = require("../models");

const {
  showAllDocuments,
  addNewDocument,
  updateById,
  deleteById,
} = require("../helpers/dbOperations");

const showAllServices = (req, res) => {
  showAllDocuments(res, "Services List", Service);
};

const addNewService = (req, res) => {
  const { body } = req;
  addNewDocument(res, "Service Done", Service, body);
};

const updateService = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  updateById(res, "Service Updated", Service, body, id);
};

const deleteService = (req, res) => {
  const {
    params: { id },
  } = req;
  deleteById(res, "Service Deleted", Service, id);
};

module.exports = {
  showAllServices,
  addNewService,
  updateService,
  deleteService,
};