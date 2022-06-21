const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryScema = new Scema({
  name: { type: String, required: true },
  imageSrc: { type: String, default: "" },
  user: { type: Schema.Types.ObjectId, ref: users },
});

module.exports("categories", categoryScema);
