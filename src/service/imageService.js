import db from "../models/index";

const createSubImageProduct = async (id, fileList) => {
  try {
    if (!id || !fileList) {
      return {
        EM: "Missing required fields 4",
        EC: "-1",
        DT: null,
      };
    }
    const subImage = [];
    fileList.forEach((file) => {
      subImage.push({
        productId: id,
        imageUrl: file,
      });
    });
    const result = await db.Image.bulkCreate(subImage);
    return {
      EM: "Create sub image product successfully",
      EC: "0",
      DT: result,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Create sub image product failed",
      EC: "-1",
      DT: error,
    };
  }
};
const getSubImageProduct = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      return {
        EM: "Missing required fields 4",
        EC: "-1",
        DT: null,
      };
    }
    const result = await db.Image.findAll({
      where: {
        productId: id,
      },
    });
    return {
      EM: "Get sub image product successfully",
      EC: "0",
      DT: result,
    };
  } catch (error) {
    return {
      EM: "Get sub image product failed",
      EC: "-1",
      DT: error,
    };
  }
};
const updateSubImageProduct = async (id, fileList) => {
  try {
    if (!id) {
      return {
        EM: "Missing required fields 4",
        EC: "-1",
        DT: null,
      };
    }
    await db.Image.destroy({
      where: {
        productId: id,
      },
    });
    if (!fileList)
      return {
        EM: "Update sub image product successfully",
        EC: "0",
        DT: [],
      };
    const subImage = [];
    fileList.forEach((file) => {
      subImage.push({
        productId: id,
        imageUrl: file,
      });
    });
    const result = await db.Image.bulkCreate(subImage);
    return {
      EM: "Update sub image product successfully",
      EC: "0",
      DT: result,
    };
  } catch (error) {
    return {
      EM: "Update sub image product failed",
      EC: "-1",
      DT: error,
    };
  }
};
module.exports = { createSubImageProduct, getSubImageProduct, updateSubImageProduct};
