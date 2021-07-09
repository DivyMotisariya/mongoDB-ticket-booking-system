const mongoose = require("mongoose");
const { Schema } = mongoose;

const flightSchema = new Schema({
  name: { type: String, required: [true, "Flight name is required"] },
  flightNo: {
    type: String,
    required: [true, "Flight number is required"],
  },
  totalCapacity: {
    type: Number,
    required: [true, "Flight capacity is required"],
  },
}, { timestamps: true });

module.exports = mongoose.model("Flight", flightSchema);