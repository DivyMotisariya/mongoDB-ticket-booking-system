const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightReportSchema = new Schema({
  flightID: {
    type: Schema.Types.ObjectId,
    ref: "Flight",
    required: [true, "Flight ID is required"],
  },
  routeID: {
    type: Schema.Types.ObjectId,
    ref: "Route",
    required: [true, "Route ID is required"],
  },
  flightDate: {
    type: Date,
    required: [true, "Flight Date is required"],
  },
  passengers: {
    type: [Schema.Types.ObjectId],
    ref: "Passenger",
    default: [],
  },
}, { timestamps: true });

module.exports = mongoose.model("FlightReport", flightReportSchema);