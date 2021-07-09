const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userID: String,
  provider: String,
  displayName: String,
  name: Object,
  emails: Array,
  token: String,
  // name: { type: String, required: [true, "Name is required"] },
  // password: { type: String, required: [true, "Password is required"] },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);