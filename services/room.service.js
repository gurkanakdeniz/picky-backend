const dbService = require("./room.db.service");
const userDBService = require("./user.db.service");

exports.createRoom = async function(userId) {
  var user = await userDBService.findById(userId);
  console.log(userId);
  if (user) {
    var room = await dbService.insert();
    var savedRoom = await dbService.addUser(room, user._id);
    var user = await userDBService.addRoom(user, savedRoom._id);
    var response = { roomId: savedRoom._id };

    return response;
  }

  return "";
};

exports.addUser = async function(roomId, userId) {
  var room = await dbService.findById(roomId);

  if (room) {
    var user = await userDBService.findById(userId);
    if (user) {
      var savedRoom = await dbService.addUser(room, user._id);
      var savedUser = await userDBService.addRoom(user, savedRoom._id);
    }
  }
  var response = { roomId: roomId };

  return response;
};
