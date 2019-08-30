const dbService = require("./user.db.service");

exports.signinUser = async function(userName, socketInfo) {
  var user = await dbService.insert(userName, socketInfo);

  var response = { userId: user._id };

  return response;
};

exports.autoSigninUser = async function(userId, socketInfo) {
  var user = await dbService.findById(userId);
  if (user) {
    user = await dbService.changeSocket(user, socketInfo);
  }

  var response = { user: user };
  return response;
};

exports.signoutUser = async function(userId) {
  var user = await dbService.findById(userId);
  if (user) {
    dbService.changeStatus(user, "passive");
  }

  return "success";
};
