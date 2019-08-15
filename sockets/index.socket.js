var indexController = require("../controllers/index.controller");

exports.init = function(io, socket) {
  socket.on("home", function(data) {
    var response = indexController.home(data);

    // console.log("addTodo start");
    // console.log(data);
    // var response = TodoService.add(data);
    // response.then(function(responseData) {
    //   weekTodosEmit(io, new Date());
    //   console.log("end");
    // });
  });
};
