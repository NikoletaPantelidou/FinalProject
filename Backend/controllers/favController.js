const favModel = require("../models/favModel.js");

var postFav = async (req, res) => {
  try {
    const { title, image, text } = req.body;
    const fav = new favModel({
      title,
      image,
      text,
    });
    const savedFav = await fav.save();
    res.status(201).json(savedFav);
  } catch (error) {
    res.status(500).json({ error: "Failed to add a product to favourites" });
  }
};

var deleteFav = async (req, res) => {
  const id = req.params.id;
  favModel
    .findByIdAndDelete({ _id: id })
    .then((favs) => res.json(favs))
    .catch((error) => res.json(error));
};

var getAllFavs = async (req, res) => {
  try {
    const fav = await favModel.find();
    res.json(fav);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  deleteFav,
  postFav,
  getAllFavs,
};
