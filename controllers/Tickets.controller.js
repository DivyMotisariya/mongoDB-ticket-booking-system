const { Ticket } = require("../models");

const {
  showAllDocuments,
  addNewDocument,
  updateById,
  deleteById,
} = require("../helpers/dbOperations");

const showAllTickets = (req, res) => {
  showAllDocuments(res, "Ticket List", Ticket);
};

const addNewTicket = (req, res) => {
  const { body } = req;
  addNewDocument(res, "Ticket Booked", Ticket, body);
};

const updateTicket = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  updateById(res, "Ticket Updated", Ticket, body, id);
};

const deleteTicket = (req, res) => {
  const {
    params: { id },
  } = req;
  deleteById(res, "Ticket Deleted", Ticket, id);
};

module.exports = { showAllTickets, addNewTicket, updateTicket, deleteTicket };