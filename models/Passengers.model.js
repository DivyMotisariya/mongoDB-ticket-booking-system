const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
  ticketID: {
    type: [Schema.Types.ObjectId],
    ref: "Ticket",
    // required: [true, "Ticket ID is required"],
  },
  details: {
    name: {
      type: String,
      required: [true, "Passenger name is required"],
    },
    age: Number,
    address: {
      city: String,
      state: String,
      country: String,
    },
  },
}, { timestamps: true });

module.exports = mongoose.model("Passenger", passengerSchema);