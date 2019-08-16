var roomController = require("../controllers/room.controller");

//TODO: try catch

exports.init = function(io, socket) {
  socket.on("createRoom", function(data) {
    var response = roomController.createRoom(data, socket);
    response.then(function(responseData) {
      socket.join("" + responseData.roomId);
      socket.emit("createdRoom", {
        data: { roomId: responseData.roomId }
      });
    });
  });

  socket.on("connectRoom", function(data) {
    var response = roomController.addUser(data);
    response.then(function(responseData) {
      socket.join("" + responseData.roomId);
      socket.emit("connectedRoom", {
        data: { roomId: responseData.roomId }
      });
    });
  });
};
