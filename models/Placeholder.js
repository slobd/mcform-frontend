const mongoose = require("mongoose");

const placeholderSchema = new mongoose.Schema({
  image: { type: String, required: true },
  author: { type: String },
  width: { type: Number },
  height: { type: Number },
  type: {type: String},
});

module.exports = mongoose.model(
  "placeholder",
  placeholderSchema
);
