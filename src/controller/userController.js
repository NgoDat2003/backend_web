import userService from "../service/userService";
let readAllUser = async (req, res) => {
  try {
    let data = await userService.readAllUser();
    // console.log(data);
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
        EM: "error from server", // error message
        EC: "-1", // error code
        DT: "", // data
    });
  }
};
module.exports = {readAllUser}
