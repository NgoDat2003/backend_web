import e from "express";
import db from "../models";

let readAllProduct = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      attributes: ["id", "name", "price", "mainImage", "description"],
      nest: true,
      raw: true,
    });
    return {
      EM: "Get all product success",
      EC: "0",
      DT: products,
    };
  } catch (error) {
    return {
      EM: "Get all product failed",
      EC: "-1",
      DT: error,
    };
  }
};
let readProductPaginate = async (req, res) => {
  try {
    console.log(req.query);
    const limit = req.query.limit;
    const currentPage = req.query.currentPage;
    const totalItems = await db.Product.count();
    const offset = (currentPage - 1) * limit;
    const products = await db.Product.findAll({
      attributes: [
        "id",
        "productName",
        "price",
        "mainImage",
        "description",
        "stockQuantity",
        "categoryId",
        "screenBrand",
        "laptopBrand",
        "audioBrand",
        "pcBrand",
      ],
      nest: true,
      raw: true,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    const totalPages = Math.ceil(totalItems / limit);
    let data = {
      currentPage: currentPage,
      totalPage: totalPages,
      data: products,
    };
    return {
      EM: "Get all product success",
      EC: "0",
      DT: data,
    };
  } catch (error) {
    return {
      EM: "Get all product failed",
      EC: "-1",
      DT: error,
    };
  }
};
const createProduct = async (req, res) => {
  try {
    const {
      productName,
      price,
      mainImage,
      description,
      stockQuantity,
      categoryId,
      screenBrand,
      screenSize,
      resolution,
      panelType,
      pcBrand,
      cpuSeries,
      ramSize,
      laptopBrand,
      color,
      audioBrand,
      microphoneType,
    } = req.body;
    if (
      !productName ||
      !price ||
      !mainImage ||
      !description ||
      !stockQuantity ||
      !categoryId
    ) {
      return {
        EM: "Missing required fields 1",
        EC: "-1",
        DT: null,
      };
    }
    if (isNaN(price) || isNaN(stockQuantity)) {
      return {
        EM: "Invalid fields 2",
        EC: "-1",
        DT: null,
      };
    }

    if (+categoryId === 1) {
      if (!screenBrand || !screenSize || !resolution || !panelType) {
        return {
          EM: "Missing required fields 3",
          EC: "-1",
          DT: null,
        };
      }
    }
    if (+categoryId === 2) {
      if (!pcBrand || !cpuSeries || !ramSize) {
        return {
          EM: "Missing required fields 4",
          EC: "-1",
          DT: null,
        };
      }
    }
    if (+categoryId === 3) {
      if (!laptopBrand || !cpuSeries || !ramSize) {
        return {
          EM: "Missing required fields 5",
          EC: "-1",
          DT: null,
        };
      }
    }
    if (categoryId === 4) {
      if (!audioBrand || !microphoneType) {
        return {
          EM: "Missing required fields 6",
          EC: "-1",
          DT: null,
        };
      }
    }
    if (categoryId > 4 || categoryId < 1) {
      return {
        EM: "Invalid category 7",
        EC: "-1",
        DT: null,
      };
    }
    const product = await db.Product.create({
      productName,
      price,
      mainImage,
      description,
      stockQuantity,
      categoryId,
      screenBrand,
      screenSize,
      resolution,
      panelType,
      pcBrand,
      cpuSeries,
      ramSize,
      laptopBrand,
      color,
      audioBrand,
      microphoneType,
    });
    return {
      EM: "Create product success",
      EC: "0",
      DT: product,
    };
  } catch (error) {
    return {
      EM: "Create product failed 8",
      EC: "-1",
      DT: error,
    };
  }
};
let getCategoryById = async (id) => {
  try {
    let category = await db.Product.findOne({
      attributes: ["categoryId"],
      where: {
        id,
      },
    });
    if (!category) {
      // Nếu không tìm thấy sản phẩm với id cung cấp, trả về null hoặc giá trị mặc định tùy thuộc vào yêu cầu
      return null; // hoặc trả về giá trị mặc định
    }

    return category.categoryId;
  } catch (error) {
    console.log(error);
    return {
      EM: "Get category failed",
      EC: "-1",
      DT: error,
    };
  }
};
let updateProduct = async (req, res) => {
  try {
    const {
      id,
      productName,
      price,
      mainImage,
      description,
      stockQuantity,
      categoryId,
      screenBrand,
      screenSize,
      resolution,
      panelType,
      pcBrand,
      cpuSeries,
      ramSize,
      laptopBrand,
      color,
    } = req.body;
    if (
      !id ||
      !productName ||
      !price ||
      !mainImage ||
      !description ||
      !stockQuantity ||
      !categoryId
    ) {
      return {
        EM: "Missing required fields",
        EC: "-1",
        DT: null,
      };
    }
    if (isNaN(price) || isNaN(stockQuantity)) {
      return {
        EM: "Invalid fields",
        EC: "-1",
        DT: null,
      };
    }
    let checkCategory = await getCategoryById(id);
    if (+categoryId !== +checkCategory) {
      console.log(categoryId);
      console.log(checkCategory);
      return {
        EM: "Lỗi không trùng category",
        EC: "-1",
        DT: null,
      };
    }
    const product = await db.Product.update(
      {
        productName,
        price,
        mainImage,
        description,
        stockQuantity,
        screenBrand,
        screenSize,
        resolution,
        panelType,
        pcBrand,
        cpuSeries,
        ramSize,
        laptopBrand,
        color,
      },
      {
        where: {
          id,
        },
      }
    );
    return {
      EM: "Update product success",
      EC: "0",
      DT: product,
    };
  } catch (error) {
    return {
      EM: "Update product failed",
      EC: "-1",
      DT: error,
    };
  }
};
const deleteProduct = async (req, res) => {
  try {
    const id = req.query.id;
    if (!id) {
      return {
        EM: "Missing required fields",
        EC: "-1",
        DT: null,
      };
    }

    const product = await db.Product.destroy({
      where: {
        id,
      },
    });
    return {
      EM: "Delete product success",
      EC: "0",
      DT: product,
    };
  } catch (error) {
    return {
      EM: "Delete product failed",
      EC: "-1",
      DT: error,
    };
  }
};
const readProductById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return {
        EM: "Missing required fields",
        EC: "-1",
        DT: null,
      };
    }
    const product = await db.Product.findOne({
      where: {
        id,
      },
      include: {
        model: db.Image,
        attributes: ["imageUrl"],
      },
      nest: true,
    });
    return {
      EM: "Get product by id success",
      EC: "0",
      DT: product,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Get product by id failed",
      EC: "-1",
      DT: error,
    };
  }
};
module.exports = {
  readAllProduct,
  readProductPaginate,
  createProduct,
  updateProduct,
  deleteProduct,
  readProductById,
};
