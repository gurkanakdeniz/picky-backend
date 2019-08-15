var roomController = require("../controllers/room.controller");

//TODO: try catch

exports.init = function(io, socket) {
  socket.on("roomMessage", function(data) {
    console.log("roomMessage start");
    // console.log("addTodo start");
    // console.log(data);
    // var response = TodoService.add(data);
    // response.then(function(responseData) {
    //   weekTodosEmit(io, new Date());
    //   console.log("end");
    // });
    console.log(data);

    io.sockets.emit("roomMessages", {
      data: { message: data.message }
    });
    console.log("roomMessage end");
  });

  socket.on("createRoom", function(data) {
    var response = roomController.createRoom(data, socket);
    response.then(function(responseData) {
      //TODO: ?
      socket.join(responseData.roomId);
      socket.emit("createdRoom", {
        data: { roomId: responseData.roomId }
      });
    });
  });

  socket.on("connectRoom", function(data) {
    var response = roomController.addUser(data);
    response.then(function(responseData) {
      //TODO: ?
      socket.join(responseData.roomId);
      socket.emit("connectedRoom", {
        data: { roomId: responseData.roomId }
      });
    });
  });
};
