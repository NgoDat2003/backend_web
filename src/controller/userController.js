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
};
const handleLogin = async (req, res) => {
  let data = await userService.login(req, res);
  res.cookie("token", data.DT.token, {
    maxAge: 1000 * 60 * 60,
    httpOnly: true,
  });
  return res.status(200).json({
    EM: data.EM,
    EC: data.EC,
    DT: data.DT,
  });
};
const handleLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      EM: "Logout success",
      EC: "0",
      DT: "",
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", // data
    });
  }
};
const handleGetAccount = async (req, res) => {
  try {
    return res.status(200).json({
      EM: "Get account success",
      EC: "0",
      DT: {
        user: req.user,
        token: req.token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", // data
    });
  }
};
const handleUpdateUser = async (req, res) => {
  try {
    let data = await userService.updateUser(req, res);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", // data
    });
  }
};
const handleReadUserPaginate = async (req, res) => {
  try {
    let data = await userService.readUserPaginate(req, res);
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
const handleCreateUser = async (req, res) => {
  try {
    let data = await userService.createNewUser(req, res);
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
}
const handleDeleteUser = async (req, res) => {
  try {
    let data = await userService.deleteUser(req, res);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", // data
    });
  }
}


module.exports = {
  readAllUser,
  handleRegister,
  handleLogin,
  handleGetAccount,
  handleLogout,
  handleUpdateUser,
  handleReadUserPaginate,
  handleCreateUser,
  handleDeleteUser,
};
