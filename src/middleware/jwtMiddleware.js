import jwt from "jsonwebtoken";
const nonCheckToken = ["/login", "/register","/product/read","/logout"];
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
const checkUserToken = (req, res, next) => {
  if (nonCheckToken.includes(req.path)) {
    next();
  } else {
    // console.log(req.cookies);
    const token = req.cookies.token;
    if (!token) {
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
          };
        req.user = payload;
        req.token = token;
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
  }
};
module.exports = { createToken, verifyToken, checkUserToken };
