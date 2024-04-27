import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
const nonCheckToken = [
  "/login",
  "/register",
  "/product/read",
  "/logout",
  "/product/:id",
];
const createToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESS,
  });
  return token;
};
const verifyToken = (token) => {
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};
const getTokenFromBearer = (req) => {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];

  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");

    // Get token from array
    const bearerToken = bearer[1];

    return bearerToken;
  }

  // Return null if no bearer token
  return null;
};
const checkUserToken = (req, res, next) => {
  // console.log(req.cookies);
  const token = req.cookies.token;
  const bearer = getTokenFromBearer(req);
  const tokenNew = token || bearer;
  if (!tokenNew) {
    return res.status(401).json({
      EM: "Token not found",
      EC: "1",
      DT: "",
    });
  }
  try {
    let decoded = verifyToken(token);
    if (decoded) {
      let payload = {
        id: decoded.payload.id,
        email: decoded.payload.email,
        firstName: decoded.payload.firstName,
        lastName: decoded.payload.lastName,
        roleId: decoded.payload.roleid,
        image: decoded.payload.image,
        address: decoded.payload.address,
        phoneNumber: decoded.payload.phoneNumber,
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
      DT: "",
    });
  }
};
const handleUpload = (req, res) => {
  try {
    return res.status(200).json({
      EC: 0,
      EM: "Upload file successfully",
      DT: req.file,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      EM: "Upload file failed",
      DT: "",
      EC: -1,
    });
  }
};

module.exports = { createToken, verifyToken, checkUserToken, handleUpload };
