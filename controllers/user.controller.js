var UserService = require("../services/user.service");

// TODO: data validation

exports.signin = async function(data, socket) {
  let response = {};

  if (data) {
    if (!isEmpty(data.userName)) {
      var socketInfo = { socketId: socket.id };
      var userName = data.userName;
      var result = await UserService.signinUser(userName, socketInfo);

      response = { userId: result.userId, userName: userName, success: true };
    }
  }

  return response;
};

exports.autosignin = async function(data, socket) {
  let response = {};

  if (data) {
    var socketInfo = { socketId: socket.id };
    var userId = data.userId;
    var result = await UserService.autoSigninUser(userId, socketInfo);

    response = { connectedRooms: result.user.rooms, success: true };
  }

  return response;
};

exports.signout = async function(data, socket) {
  var userId = data.userId;
  var response = UserService.signoutUser(userId);
  return "success";
};

function isEmpty(value) {
  return (
    (typeof value == "string" && !value.trim()) ||
    typeof value == "undefined" ||
    value === null
  );
}
