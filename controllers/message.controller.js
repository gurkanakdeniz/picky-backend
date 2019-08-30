var MessageService = require("../services/message.service");

exports.sendMessage = async function(data) {
  let response = {};

  if (data) {
    var userId = data.userId;
    var roomId = data.roomId;
    var message = data.message;

    if (!isEmpty(userId) && !isEmpty(roomId) && !isEmpty(message)) {
      var result = await MessageService.sendMessage(userId, roomId, message);
      response = {
        roomId: result.roomId,
        userId: result.userId,
        message: result.message,
        success: true
      };
    }
  }

  return response;
};

function isEmpty(value) {
  return (
    (typeof value == "string" && !value.trim()) ||
    typeof value == "undefined" ||
    value === null
  );
}
