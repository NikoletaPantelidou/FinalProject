const mongoose = require("mongoose");
require("dotenv").config();
const connectionParams = {
  useNewUrlParser: true,
};
const uri =
  "mongodb+srv://Nikoleta:123@cluster0.nutrwzy.mongodb.net/?retryWrites=true&w=majority";

const connection = mongoose
  .connect(uri, connectionParams)
  .then(() => console.log("Connected to database"))
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
module.exports = connection;
