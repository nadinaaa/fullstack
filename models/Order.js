const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderScema = new Schema({
  date: { type: Date, default: Date.now },
  order: { type: Number, required: true },
  list: [
    {
      name: { type: String },
      quantity: { type: Number },
      cost: { type: Number },
    },
  ],
  user: { type: Schema.Types.ObjectId, ref: users },
});

module.exports = mongoose.model("orders", orderScema);
