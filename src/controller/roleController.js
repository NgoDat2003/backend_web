import roleService from "../service/roleService";
const handleReallAllRoles = async (req, res) => {
  try {
    let data = await roleService.readAllRole(req, res);
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
module.exports = { handleReallAllRoles };