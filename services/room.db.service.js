const mongoose = require("mongoose");
const roomModel = require("../models/room.model");

exports.findById = async function(id) {
  return roomModel.findOne({ _id: id });
};

exports.insert = async function() {
  const model = new roomModel({
    _id: new mongoose.Types.ObjectId()
  });
  var response = await model.save();
  return response;
};

exports.addUser = async function(model, user) {
  model.users.push(JSON.stringify(user));
  var response = await model.save();
  return response;
};
