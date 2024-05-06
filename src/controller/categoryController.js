import categoryService from "../service/categoryService.js";

const readAllCategory = async (req, res) => {
  try {
    const categories = await categoryService.readAllCategory();
    return res.status(200).json({
      EM: "Get all categories success",
      EC: "0",
      DT: categories.DT,
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
module.exports = { readAllCategory };