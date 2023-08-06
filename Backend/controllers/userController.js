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
        fullName: req.body.fullName,
        userType: req.body.userType,
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
          expiresIn: "5h",
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
  console.log("Token:", token);

  try {
    // Find user by ID in the database using the decoded token's ID
    const decodedToken = jwt.verify(token, "123");
    const user = await userModel.findById(decodedToken.id);

    if (user) {
      // Send user information back as response
      res.status(200).json(user);
    } else {
      // User not found for the given token
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res
        .status(401)
        .json({ error: "Invalid token", details: error.message });
    }
    res.status(500).json(error);
  }
};

const updateUserInfo = async (req, res, next) => {
  const id = req.params.id;
  const { fullName, address, city, email, mobile } = req.body;
  let user;

  try {
    user = await userModel.findByIdAndUpdate(id, {
      fullName,
      address,
      city,
      email,
      mobile,
    });
  } catch (error) {
    console.log(error);
  }
  if (!user) {
    return res
      .status(404)
      .json({ message: "Unable To update user information" });
  }
  user = await user.save();
  user = await userModel.findById(id);
  return res.status(200).json({ user });
};

module.exports = {
  userLogin,
  userSignin,
  getUserInfoByToken,
  updateUserInfo,
};
