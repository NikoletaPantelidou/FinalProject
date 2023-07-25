const express = require("express");
const productModel = require("../models/productModel.js");

var deleteProduct = async (req, res) => {
  const id = req.params.id;
  productModel
    .findByIdAndDelete({ _id: id })
    .then((products) => res.json(products))
    .catch((error) => res.json(error));
};

var getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (e) {
    console.log(e);
  }
};

var postProduct = async (req, res) => {
  try {
    const { title, image, text, price } = req.body;
    const product = new productModel({
      title,
      image,
      text,
      price,
    });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to post a new product" });
  }
};

var getById = async (req, res) => {
  const id = req.params.id;
  productModel
    .findById({ _id: id })
    .then((products) => res.json(products))
    .catch((error) => res.json(error));
};

module.exports = {
  getAllProducts,
  deleteProduct,
  postProduct,
  getById,
};
