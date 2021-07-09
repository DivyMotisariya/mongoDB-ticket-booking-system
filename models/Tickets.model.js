const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("mongoose-validator");

const ticketSchema = new Schema({
  routeID: {
    type: Schema.Types.ObjectId, // String
    required: [true, "Route is required"],
    ref: "Route",
    // validate: [
    //   validator({
    //     validator: "isMongoId",
    //     message: "Route ID should be ObjectId",
    //   }),
    // ],
  },
  paidAmt: { type: Number, required: [true, "Rate is required"] },
  flightDate: { type: Date, required: [true, "Date is required"] },
}, { timestamps: true });

module.exports = mongoose.model("Ticket", ticketSchema);