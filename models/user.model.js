const mongoose = require("mongoose");

const user = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: { type: String },
  socket: { type: String },
  status: { type: String },
  rooms: { type: [String] }
});

module.exports = mongoose.model("user", user);
