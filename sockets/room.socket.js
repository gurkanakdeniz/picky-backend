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
};
