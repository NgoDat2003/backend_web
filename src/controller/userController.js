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
const handleRegister = async (req, res) => {
  let data = await userService.createNewUser(req, res);
  return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
  });
}
const handleLogin = async (req, res) => {
  let data = await userService.login(req, res);
  return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
  });
}
module.exports = {readAllUser, handleRegister, handleLogin}
