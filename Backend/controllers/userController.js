let mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");

var userSignin = async (req, res) => {
  var checkUser = await userModel.findOne({ username: req.body.username });
  if (checkUser) {
    res.send({ msg: "This username already exists" });
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      var user = {
        username: req.body.username,
        address: req.body.address,
        mobile: req.body.mobile,
        email: req.body.email,
        city: req.body.city,
        password: hash,
      };

      await userModel.create(user);
      res.send({ msg: "The user saved successfully" });
    });
  });
};

var userLogin = async (req, res) => {
  var user = await userModel.findOne({ username: req.body.username });
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        //create the token to send it back to the front
        //payload + secret ==> token
        var token = jwt.sign({ id: user._id }, "123", process.env.TOKEN_KEY, {
          expiresIn: "2h",
        });
        user.token = token;
        res.send({ token });
      } else {
        res.status(500).json({ error: "Wrong password" });
      }
    });
  } else {
    res.status(500).json({ error: "Wrong username" });
  }
};

var getUserInfoByToken = async (req, res) => {
  const token = req.params.token;
  const decodedToken = jwt.verify(token, "123");
  try {
    const user = await userModel.findById(decodedToken.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  userLogin,
  userSignin,
  getUserInfoByToken,
};
