var RoomService = require("../services/room.service");

exports.createRoom = async function(data) {
  var userId = data.userId;
  var room = await RoomService.createRoom(userId);
  var response = { roomId: room.roomId };

  return response;
};

exports.addUser = async function(data) {
  var roomId = data.roomId;
  var userId = data.userId;
  var result = await RoomService.addUser(roomId, userId);

  var response = { roomId: roomId };

  return response;
};
