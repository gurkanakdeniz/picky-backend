var messageController = require("../controllers/message.controller");

exports.init = function(io, socket) {
  socket.on("sendMessage", function(data) {
    var response = messageController.sendMessage(data);
    response.then(function(responseData) {
      if (responseData && responseData.success) {
        io.in("" + responseData.roomId).emit("newMessage", {
          data: {
            roomId: responseData.roomId,
            userId: responseData.userId,
            message: responseData.message
          }
        });
      }
    });
  });
};
