var userController = require("../controllers/user.controller");

//TODO: try catch

exports.init = function(io, socket) {
  socket.on("signin", function(data) {
    var response = userController.signin(data, socket);
    response.then(function(responseData) {
      socket.emit("signedin", {
        data: { userName: responseData.userName, userId: responseData.userId }
      });
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
