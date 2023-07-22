const mongoose = require("mongoose");
const bagSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
});

const bagModel = mongoose.model("bags", bagSchema);

module.exports = bagModel;
