const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  userType: { type: Boolean, required: true },
});

const userModel = mongoose.model("users", user);
module.exports = userModel;
