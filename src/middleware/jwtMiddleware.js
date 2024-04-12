import jwt from "jsonwebtoken";

const createToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token
};
const verifyToken = (token) =>{
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return res.status(200).json({
        EM: "Verify token successfully",
        EC: "0",
        DT: decoded,
        });
    } catch (error) {
        return res.status(500).json({
        EM: "Verify token failed",
        EC: "-1",
        DT: error,
        });
    }
}

module.exports = { createToken, verifyToken };
