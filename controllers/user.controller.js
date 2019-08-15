var UserService = require("../services/user.service");

exports.signin = async function(data, socket) {
  var socketInfo = { socketId: socket.id };
  var userName = data.userName;
  var result = await UserService.signinUser(userName, socketInfo);

  var response = { userId: result.userId, userName: userName };

  return response;
};

exports.signout = async function(data, socket) {
  var userId = data.userId;
  var response = UserService.signoutUser(userId);
  return "success";
};
