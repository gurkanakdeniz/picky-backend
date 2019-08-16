var MessageService = require("../services/message.service");

exports.sendMessage = async function(data) {
  var userId = data.userId;
  var roomId = data.roomId;
  var message = data.message;

  var result = await MessageService.sendMessage(userId, roomId, message);
  var response = {
    roomId: result.roomId,
    userId: result.userId,
    message: result.message
  };

  return response;
};
