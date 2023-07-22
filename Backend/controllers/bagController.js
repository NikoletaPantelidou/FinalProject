const bagModel = require("../models/bagModel.js");

var postBag = async (req, res) => {
  try {
    const { title, image, text } = req.body;
    const bag = new bagModel({
      title,
      image,
      text,
    });
    const savedBag = await bag.save();
    res.status(201).json(savedBag);
  } catch (error) {
    res.status(500).json({ error: "Failed to add a new product" });
  }
};

var deleteBag = async (req, res) => {
  const id = req.params.id;
  bagModel
    .findByIdAndDelete({ _id: id })
    .then((bags) => res.json(bags))
    .catch((error) => res.json(error));
};

var getAllBags = async (req, res) => {
  try {
    const bag = await bagModel.find();
    res.json(bag);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  deleteBag,
  postBag,
  getAllBags,
};
