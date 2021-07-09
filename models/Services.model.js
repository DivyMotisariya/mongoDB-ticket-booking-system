const mongoose = require("mongoose");
const { Schema } = mongoose;

const serviceSchema = new Schema({
  flightID: {
    type: Schema.Types.ObjectId,
    ref: "Flight",
    required: [true, "Flight ID is required"],
  },
  totalTime: { type: String, required: [true, "Service time is required"] },
  totalCharge: {
    type: Number,
    required: [true, "Service charge is required"],
  },
  serviceDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Service", serviceSchema);