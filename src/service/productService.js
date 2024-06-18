import e from "express";
import db from "../models";
import imageService from "./imageService";
import { Op } from "sequelize";
let readAllProduct = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      attributes: ["id", "productName", "price", "stockQuantity"],
    });
    return {
      EM: "Get all product success",
      EC: "0",
      DT: products,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Get all product failed",
      EC: "-1",
      DT: error,
    };
  }
};
let readProductPaginate = async (req, res) => {
  try {
    const limit = req.query.limit;
    const currentPage = req.query.currentPage;
    const sort = req.query.sort ? req.query.sort.split(",") : ["id"];
    const order = req.query.order ? req.query.order.split(",") : ["ASC"];
    const totalItems = await db.Product.count();
    const offset = (currentPage - 1) * limit;
    const products = await db.Product.findAll({
      include: {
        model: db.Category,
        attributes: ["id", "categoryName"],
      },
      nest: true,
      raw: true,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: sort.map((sortField, index) => [sortField, order[index] || "ASC"]),
    });
    const totalPages = Math.ceil(totalItems / limit);
    let data = {
      currentPage: currentPage,
      totalPage: totalPages,
      data: products,
      totalItems: totalItems,
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
    let {
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
      fileList,
      laptopCpuSeries,
    } = req.body;
    if (
      !productName ||
      !price ||
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
    price = price*1;
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
    if (+categoryId === 3) {
      if (!pcBrand || !cpuSeries || !ramSize) {
        return {
          EM: "Missing required fields 4",
          EC: "-1",
          DT: null,
        };
      }
    }
    if (+categoryId === 2) {
      console.log(laptopBrand, color, laptopCpuSeries);
      if (!laptopBrand || !color || !laptopCpuSeries) {
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
    if (Array.isArray(fileList) && fileList.length > 0) {
      let data = await imageService.createSubImageProduct(product.id, fileList);
      if (data.EC !== "0") {
        return {
          EM: "Create product failed 9",
          EC: "-1",
          DT: null,
        };
      }
    }
    return {
      EM: "Create product success",
      EC: "0",
      DT: product,
    };
  } catch (error) {
    console.log(error);
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
    let {
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
      laptopCpuSeries,
      audioBrand,
      microphoneType,
      fileList,
    } = req.body;
    price = price*1;
    const id = req.params.id;
    if (!id) {
      return {
        EM: "Missing required fields",
        EC: "-1",
        DT: null,
      };
    }
    if (fileList && Array.isArray(fileList) && fileList.length > 0) {
      let data = await imageService.updateSubImageProduct(id, fileList);
      if (data.EC !== "0") {
        return {
          EM: "Update product failed",
          EC: "-1",
          DT: null,
        };
      }
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
        laptopCpuSeries,
        audioBrand,
        microphoneType,
      },
      {
        where: {
          id,
        },
      }
    );
    console.log(laptopCpuSeries);
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
    const id = req.params.id;
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
let readProductPaginateByCategory = async (req, res) => {
  try {
    const limit = req.query.limit;
    const currentPage = req.query.currentPage;
    const categoryId = req.query.id;
    const sort = req.query.sort ? req.query.sort.split(",") : ["id"];
    const order = req.query.order ? req.query.order.split(",") : ["ASC"];
    const totalItems = await db.Product.count({
      where: {
        categoryId: categoryId,
      },
    });
    const offset = (currentPage - 1) * limit;
    const products = await db.Product.findAll({
      include: {
        model: db.Category,
        attributes: ["id", "categoryName"],
      },
      nest: true,
      raw: true,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: sort.map((sortField, index) => [sortField, order[index] || "ASC"]),
      where: {
        categoryId: categoryId,
      },
    });
    const totalPages = Math.ceil(totalItems / limit);
    let data = {
      currentPage: currentPage,
      totalPage: totalPages,
      data: products,
      totalItems: totalItems,
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
const filterProduct = async (req, res) => {
  try {
    const sort = req.query.sort ? req.query.sort.split(",") : ["id"];
    const order = req.query.order ? req.query.order.split(",") : ["ASC"];
    const {
      minPrice,
      maxPrice,
      screenBrand,
      screenSize,
      resolution,
      panelType,
      pcBrand,
      cpuSeries,
      ramSize,
      laptopBrand,
      color,
      laptopCpuSeries,
      audioBrand,
      microphoneType,
      id,
      limit,
      currentPage,
    } = req.query;
    const categoryId = id;
    let whereCondition = {
      price: {
        [Op.between]: [minPrice, maxPrice],
      },
      categoryId,
    };

    if (screenBrand) whereCondition.screenBrand = screenBrand;
    if (screenSize) whereCondition.screenSize = screenSize;
    if (resolution) whereCondition.resolution = resolution;
    if (panelType) whereCondition.panelType = panelType;
    if (pcBrand) whereCondition.pcBrand = pcBrand;
    if (cpuSeries) whereCondition.cpuSeries = cpuSeries;
    if (ramSize) whereCondition.ramSize = ramSize;
    if (laptopBrand) whereCondition.laptopBrand = laptopBrand;
    if (color) whereCondition.color = color;
    if (laptopCpuSeries) whereCondition.laptopCpuSeries = laptopCpuSeries;
    if (audioBrand) whereCondition.audioBrand = audioBrand;
    if (microphoneType) whereCondition.microphoneType = microphoneType;

    const offset = (currentPage - 1) * limit;
    const totalItems = await db.Product.count({
      where: whereCondition,
    });

    const products = await db.Product.findAll({
      include: {
        model: db.Category,
        attributes: ["id", "categoryName"],
      },
      nest: true,
      raw: true,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: sort.map((sortField, index) => [sortField, order[index] || "ASC"]),
      where: whereCondition,
    });
    const totalPages = Math.ceil(totalItems / limit);
    let data = {
      currentPage: currentPage,
      totalPage: totalPages,
      data: products,
      totalItems: totalItems,
    };
    return {
      EM: "Filter product success",
      EC: "0",
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Filter product failed",
      EC: "-1",
      DT: error,
    };
  }
};
const searchProduct = async (req, res) => {
  try {
    console.log(1);
    const search = req.query.search;
    console.log(search);
    const products = await db.Product.findAll({
      where: {
        productName: {
          [Op.like]: `%${search}%`,
        },
      },
    });
    return {
      EM: "Search product success",
      EC: "0",
      DT: products,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Search product failed",
      EC: "-1",
      DT: error,
    };
  }
}
const getStatistic = async (req, res) => {
  try {
    const totalProduct = await db.Product.count();
    const totalCategory = await db.Category.count();
    const totalOrder = await db.Order.count();
    const totalUser = await db.User.count();
    return {
      EM: "Get statistic success",
      EC: "0",
      DT: {
        totalProduct,
        totalCategory,
        totalOrder,
        totalUser,
      },
    };
  } catch (error) {
    return {
      EM: "Get statistic failed",
      EC: "-1",
      DT: error,
    };
  }
}
module.exports = {
  readAllProduct,
  readProductPaginate,
  createProduct,
  updateProduct,
  deleteProduct,
  readProductById,
  filterProduct,
  readProductPaginateByCategory,
  searchProduct,
  getStatistic
};
