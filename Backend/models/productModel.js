const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
