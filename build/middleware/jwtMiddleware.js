"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var nonCheckToken = ["/login", "/register", "/product/read", "/logout", "/product/:id"];
var createToken = function createToken(payload) {
  var token = _jsonwebtoken["default"].sign({
    payload: payload
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESS
  });
  return token;
};
var verifyToken = function verifyToken(token) {
  try {
    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};
var getTokenFromBearer = function getTokenFromBearer(req) {
  // Get auth header value
  var bearerHeader = req.headers["authorization"];

  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    var bearer = bearerHeader.split(" ");

    // Get token from array
    var bearerToken = bearer[1];
    return bearerToken;
  }

  // Return null if no bearer token
  return null;
};
var checkUserToken = function checkUserToken(req, res, next) {
  try {
    var token = req.cookies.token;
    // const bearer = getTokenFromBearer(req);
    // console.log("bearer: ", bearer);
    var tokenNew = token;
    if (tokenNew === undefined || tokenNew === null || tokenNew === "") {
      console.log("Token not found");
      return res.status(401).json({
        EM: "Token not found",
        EC: "1",
        DT: ""
      });
    }
    var decoded = verifyToken(tokenNew);
    if (decoded) {
      var payload = {
        id: decoded.payload.id,
        email: decoded.payload.email,
        firstName: decoded.payload.firstName,
        lastName: decoded.payload.lastName,
        roleId: decoded.payload.roleId,
        image: decoded.payload.image,
        address: decoded.payload.address,
        phoneNumber: decoded.payload.phoneNumber
      };
      req.user = payload;
      req.token = tokenNew;
      next();
    }
  } catch (error) {
    console.log("error: ", error);
    return res.status(401).json({
      EM: "Token invalid",
      EC: "2",
      DT: ""
    });
  }
};
var handleUpload = function handleUpload(req, res) {
  try {
    return res.status(200).json({
      EC: 0,
      EM: "Upload file successfully",
      DT: req.file
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      EM: "Upload file failed",
      DT: "",
      EC: -1
    });
  }
};
module.exports = {
  createToken: createToken,
  verifyToken: verifyToken,
  checkUserToken: checkUserToken,
  handleUpload: handleUpload
};