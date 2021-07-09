const mongoose = require("mongoose");
const { Schema } = mongoose;

const routeSchema = new Schema({
  from: { type: String, required: [true, "From location is required"] },
  to: { type: String, required: [true, "To location is required"] },
  totalDist: {
    type: Number,
    required: [true, "Total distance is required"],
  },
  totalTime: { type: String, required: [true, "Total time is required"] },
  totalCharge: {
    type: Number,
    required: [true, "Ticket charge is required"],
  },
  meal: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Route", routeSchema);