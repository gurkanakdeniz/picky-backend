const mongoose = require("mongoose");
const messageModel = require("../models/message.model");

exports.findById = async function(id) {
  return messageModel.findOne({ _id: id });
};

exports.insert = async function(userId, roomId, message) {
  const model = new messageModel({
    _id: new mongoose.Types.ObjectId(),
    roomId: roomId,
    userId: userId,
    message: message
  });
  var response = await model.save();
  return response;
};
