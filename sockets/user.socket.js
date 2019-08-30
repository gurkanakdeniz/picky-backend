var userController = require("../controllers/user.controller");

//TODO: try catch

exports.init = function(io, socket) {
  socket.on("signin", function(data) {
    var response = userController.signin(data, socket);
    response.then(function(responseData) {
      if (responseData && responseData.success) {
        socket.emit("signedin", {
          data: { userName: responseData.userName, userId: responseData.userId }
        });
      }
    });
  });

  socket.on("autosignin", function(data) {
    var response = userController.autosignin(data, socket);
    response.then(function(responseData) {
      if (responseData && responseData.success) {
        if (responseData.connectedRooms) {
          for (var i in responseData.connectedRooms) {
            var room = JSON.parse(responseData.connectedRooms[i]);
            socket.join("" + room);
            socket.emit("connectedRoom", {
              data: { roomId: room }
            });
          }
        }
      }
    });
  });

  socket.on("disconnect", function(data) {
    var response = userController.signout(data, socket);
    response.then(function(responseData) {
      //TODO
      // var result = Util.format(responseData);
      // io.sockets.emit("weekTodos", {
      //   data: result
      // });
    });
  });
};
