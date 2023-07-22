const mongoose = require("mongoose");
const favSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
});

const favModel = mongoose.model("favourites", favSchema);

module.exports = favModel;
