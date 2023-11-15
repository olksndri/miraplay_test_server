const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    email: { type: String, required: [true, "Email is required!"] },
    password: { type: String, required: [true, "Password is required!"] },
    token: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("user", user);

module.exports = User;
