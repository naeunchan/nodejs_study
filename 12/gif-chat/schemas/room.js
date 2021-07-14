const mongoose = require("mongoose");

const { Schema } = mongoose;
const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  max: {
    type: Number,
    required: true,
    defualt: 10,
    min: 2,
  },
  owner: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model("Room", roomSchema);
