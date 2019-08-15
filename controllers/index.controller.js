// var express = require("express");
// var jedisocket = express.jedisocket;

/**
 * post and get request
 */
exports.index = async function(req, res, next) {
  return res.status(200).json("jedi seni");
};

exports.home = function(data) {
  return "jedi";
};
