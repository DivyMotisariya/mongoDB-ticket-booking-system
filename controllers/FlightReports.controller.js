const { FlightReport } = require("../models");

const {
  showAllDocuments,
  addNewDocument,
  updateById,
  deletById,
} = require("../helpers/dbOperations");

const showAllReports = (req, res) => {
  // showAllDocuments(res, "Flights Report", FlightReport);
  FlightReport.find()
    .populate("flightID")
    .populate("routeID")
    .populate({ path: "passengers", populate: { path: "ticketID", populate: "routeID" } })
    // .populate("passengers")
    // .populate("ticketID")
    .exec((err, docs) => {
      if (err) {
        return res.status(200).json({
          success: false,
          error: err,
        });
      } else {
        // console.log(docs);
        return res.status(200).json({
          success: true,
          message: "Flights Report",
          data: docs,
        });
      }
    });
};

const addNewReport = (req, res) => {
  const { body } = req;
  addNewDocument(res, "Report Added", FlightReport, body);
};

const updateReport = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  updateById(res, "Report Updated", FlightReport, body, id);
};

const deleteReport = (req, res) => {
  const {
    params: { id },
  } = req;
  deleteById(res, "Report Deleted", FlightReport, id);
};

module.exports = { showAllReports, addNewReport, updateReport, deleteReport };