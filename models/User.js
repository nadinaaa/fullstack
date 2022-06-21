const mongoose = require("mongoose");
const Scema = mongoose.Schema;

const userScema = new Scema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports("users", userScema);
