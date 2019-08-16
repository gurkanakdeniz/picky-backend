const mongoose = require("mongoose");

const message = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  roomId: { type: String },
  userId: { type: String },
  message: { type: String },
  createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("message", message);
