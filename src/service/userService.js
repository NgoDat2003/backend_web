import db from "../models/index.js";
let readAllUser = async (req, res) => {
  try {
    let list = await db.User.findAll();
    return {
      EM: "Get all user successfully",
      EC: "0",
      DT: list,
    };
  } catch (error) {
    console.log("error read all user: ", error);
    return {
      EM: "Get all user failed",
      EC: "1",
      DT: error,
    };
  }
};
module.exports = { readAllUser };