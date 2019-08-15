const mongoose = require("mongoose");
const userModel = require("../models/user.model");

exports.find = async function(userName) {
  return userModel.findOne({ userName: userName });
};

exports.findById = async function(id) {
  return userModel.findOne({ _id: id });
};

exports.insert = async function(userName, socket) {
  const model = new userModel({
    _id: new mongoose.Types.ObjectId(),
    userName: userName,
    status: "active",
    socket: JSON.stringify(socket)
  });
  var response = await model.save();
  return response;
};

exports.addRoom = async function(model, room) {
  model.rooms.push(JSON.stringify(room));
  var response = await model.save();
  return response;
};

exports.changeStatus = async function(model, status) {
  model.status = status;
  var response = await model.save();
  return response;
};
