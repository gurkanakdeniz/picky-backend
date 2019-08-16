const dbService = require("./message.db.service");

exports.sendMessage = async function(userId, roomId, message) {
  var messageModel = await dbService.insert(userId, roomId, message);
  var response = {
    roomId: messageModel.roomId,
    userId: messageModel.userId,
    message: messageModel.message
  };

  return response;
};
