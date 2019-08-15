const mongoose = require("mongoose");

const room = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  users: { type: [String] }
});

module.exports = mongoose.model("room", room);
