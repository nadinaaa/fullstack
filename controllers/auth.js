const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/User");
const errorHandler = require("../utils/errorHandler");

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({ email: req.body.email });
  if (!candidate) {
    res
      .status(404)
      .json({ message: "User with this email address is not found" });
  }
  const isPasswordRight = bcrypt.compareSync(
    req.body.password,
    candidate.password
  );
  if (!isPasswordRight) {
    res.status(401).json({ message: "Password is wrong. Try again" });
  }
  const token = jwt.sign(
    { email: candidate.email, userId: candidate._id },
    keys.jwtKey,
    { expiresIn: 3600 }
  );
  res.status(200).json({ token: `Bearer ${token}` });
};

module.exports.register = async function (req, res) {
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    res
      .status(409)
      .json({ message: "This email address is already being used" });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });
    try {
      await user.save();
      res.status(201).json(user);
    } catch (e) {
      errorHandler(res, error);
    }
  }
};
