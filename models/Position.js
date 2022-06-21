const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionScema = new Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  category: { type: Scems.Types.ObjectId, ref: categories },
  user: { type: Schema.Types.ObjectId, ref: users },
});

module.exports("positions", positionScema);
